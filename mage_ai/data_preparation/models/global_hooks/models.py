import hashlib
import os
from collections.abc import Iterable
from dataclasses import dataclass, field, make_dataclass
from datetime import datetime
from enum import Enum
from typing import Any, Dict, List, Tuple, Union

import yaml

from mage_ai.api.operations.constants import OperationType
from mage_ai.api.resources.BaseResource import BaseResource
from mage_ai.authentication.permissions.constants import EntityName
from mage_ai.data_preparation.models.block import Block
from mage_ai.data_preparation.models.block.utils import fetch_input_variables
from mage_ai.data_preparation.models.global_hooks.constants import (
    RESOURCE_TYPES,
    HookOutputKey,
)
from mage_ai.data_preparation.models.global_hooks.utils import extract_valid_data
from mage_ai.data_preparation.models.pipeline import Pipeline
from mage_ai.orchestration.db.models.schedules import PipelineRun
from mage_ai.orchestration.triggers.api import trigger_pipeline
from mage_ai.orchestration.triggers.constants import TRIGGER_NAME_FOR_GLOBAL_HOOK
from mage_ai.settings.repo import get_repo_path
from mage_ai.shared.array import find, find_index, flatten
from mage_ai.shared.hash import (
    dig,
    extract,
    ignore_keys,
    ignore_keys_with_blank_values,
    merge_dict,
    set_value,
)
from mage_ai.shared.io import safe_write
from mage_ai.shared.models import BaseDataClass
from mage_ai.shared.multi import run_parallel_multiple_args


class HookOperation(str, Enum):
    CREATE = OperationType.CREATE.value
    DELETE = OperationType.DELETE.value
    DETAIL = OperationType.DETAIL.value
    EXECUTE = 'execute'
    LIST = OperationType.LIST.value
    UPDATE = OperationType.UPDATE.value
    UPDATE_ANYWHERE = 'update_anywhere'


class HookCondition(str, Enum):
    FAILURE = 'failure'
    SUCCESS = 'success'


class HookStrategy(str, Enum):
    BREAK = 'break'
    CONTINUE = 'continue'
    RAISE = 'raise'


class HookStage(str, Enum):
    AFTER = 'after'
    BEFORE = 'before'


@dataclass
class HookStrategies(BaseDataClass):
    failure: List[HookStrategy] = field(default=None)
    success: List[HookStrategy] = field(default=None)

    def __post_init__(self):
        self.serialize_attribute_enums('failure', HookStrategy)
        self.serialize_attribute_enums('success', HookStrategy)


@dataclass
class HookRunSettings(BaseDataClass):
    with_trigger: bool = False


@dataclass
class HookStatus(BaseDataClass):
    error: str = None
    strategy: HookStrategy = None

    def __post_init__(self):
        self.serialize_attribute_enum('strategy', HookStrategy)


@dataclass
class HookOutputBlock(BaseDataClass):
    uuid: str


@dataclass
class HookOutputSettings(BaseDataClass):
    block: HookOutputBlock
    key: HookOutputKey = None
    keys: List[str] = field(default=None)

    def __post_init__(self):
        self.serialize_attribute_class('block', HookOutputBlock)
        self.serialize_attribute_enum('key', HookOutputKey)

    def to_dict(self, **kwargs) -> Dict:
        data = {}
        if self.key and isinstance(self.key, HookOutputKey):
            data['key'] = self.key.value
        return merge_dict(ignore_keys_with_blank_values(super().to_dict(**kwargs)), data)


@dataclass
class HookPredicate(BaseDataClass):
    resource: Dict = field(default_factory=dict)


@dataclass
class MetadataUser(BaseDataClass):
    id: int = None


@dataclass
class HookMetadata(BaseDataClass):
    created_at: str = None
    snapshot_hash: str = None
    snapshotted_at: str = None
    updated_at: str = None
    user: MetadataUser = None

    def __post_init__(self):
        self.serialize_attribute_class('user', MetadataUser)


@dataclass
class Hook(BaseDataClass):
    attribute_aliases = dict(
        outputs='output_settings',
        pipeline='pipeline_settings',
    )

    conditions: List[HookCondition] = None
    metadata: HookMetadata = None
    operation_type: HookOperation = None
    output: Dict = field(default=None)
    output_settings: List[HookOutputSettings] = None
    pipeline_settings: Dict = field(default=None)
    predicates: List[List[HookPredicate]] = None
    resource_type: EntityName = None
    run_settings: HookRunSettings = None
    stages: List[HookStage] = None
    status: HookStatus = None
    strategies: List[HookStrategy] = None
    uuid: str = None

    def __post_init__(self):
        self._pipeline = None

        self.serialize_attribute_class('metadata', HookMetadata)
        self.serialize_attribute_class('run_settings', HookRunSettings)
        self.serialize_attribute_class('status', HookStatus)
        self.serialize_attribute_class('strategies', HookStrategies)
        self.serialize_attribute_classes('output_settings', HookOutputSettings)
        self.serialize_attribute_enum('operation_type', HookOperation)
        self.serialize_attribute_enum('resource_type', EntityName)
        self.serialize_attribute_enums('conditions', HookCondition)
        self.serialize_attribute_enums('stages', HookStage)

        if self.predicates and isinstance(self.predicates, list):
            rows = []
            for predicates in self.predicates:
                row = []
                if predicates and isinstance(predicates, list):
                    for predicate in predicates:
                        row.append(HookPredicate.load(**predicate))
                rows.append(row)
            self.predicates = rows

    def to_dict(
        self,
        include_all: bool = False,
        include_run_data: bool = False,
        include_snapshot_validation: bool = False,
        **kwargs,
    ):
        arr = [
            'conditions',
            'metadata',
            'run_settings',
            'stages',
            'strategies',
            'uuid',
        ]

        if include_all:
            arr.extend([
                'operation_type',
                'resource_type',
            ])

        if include_run_data:
            arr.extend([
                'output',
                'status',
            ])

        data = extract(super().to_dict(**kwargs), arr)

        if self.output_settings:
            data['outputs'] = [m.to_dict() for m in (self.output_settings or [])]

        if self.pipeline_settings:
            data['pipeline'] = self.pipeline_settings

        if self.predicates:
            rows = []
            for predicates in self.predicates:
                if predicates:
                    row = []
                    for predicate in predicates:
                        row.append(predicate.to_dict())

                    if len(row) >= 1:
                        rows.append(row)

            if len(rows) >= 1:
                data['predicates'] = rows

        if include_snapshot_validation:
            key = 'snapshot_valid'
            if data.get('metadata'):
                data['metadata'][key] = self.__validate_snapshot()
            else:
                data['metadata'] = {
                    key: False,
                }

        return data

    @property
    def pipeline(self):
        if self._pipeline:
            return self._pipeline

        if self.pipeline_settings:
            try:
                self._pipeline = Pipeline.get(self.pipeline_settings.get('uuid'))
                self._pipeline.run_pipeline_in_one_process = True
            except Exception as err:
                print(f'[WARNING] Hook.pipeline {self.uuid}: {err}')

        return self._pipeline

    def get_and_set_output(self, pipeline_run: PipelineRun = None) -> Dict:
        self.output = {}

        if not self.pipeline or not self.output_settings:
            return self.output

        block_uuids = {}
        for hook_output_setting in self.output_settings:
            if not hook_output_setting.block or not hook_output_setting.block.uuid:
                continue

            block_uuids[hook_output_setting.block.uuid] = hook_output_setting

        if len(block_uuids) == 0:
            return self.output

        outputs_mapping = {}

        if pipeline_run:
            for block_run in pipeline_run.block_runs:
                block = self.pipeline.get_block(block_run.block_uuid)
                block_uuid = block.uuid
                if block_uuid not in block_uuids:
                    continue

                if block_uuid not in outputs_mapping:
                    outputs_mapping[block_uuid] = []

                outputs_mapping[block_uuid].append(block_run.get_outputs(sample=False))
        else:
            for block_uuid in block_uuids.keys():
                input_vars, _kwargs_vars, _upstream_block_uuids_final = fetch_input_variables(
                    self.pipeline,
                    input_args=None,
                    global_vars=self.pipeline_settings.get('variables'),
                    upstream_block_uuids=[block_uuid],
                )
                output = input_vars
                if isinstance(output, list) and len(output) >= 1:
                    output = output[0]

                if block_uuid not in outputs_mapping:
                    outputs_mapping[block_uuid] = []

                outputs_mapping[block_uuid].append(output)

        for hook_output_setting in self.output_settings:
            if not hook_output_setting.block or not hook_output_setting.block.uuid:
                continue

            block_uuid = hook_output_setting.block.uuid
            output_arr = outputs_mapping.get(block_uuid)
            if output_arr is None or len(output_arr) == 0:
                continue

            for output in output_arr:
                if output is None:
                    continue

                if HookOperation.EXECUTE == self.operation_type:
                    # TODO: implement
                    pass
                elif hook_output_setting.key:
                    keys = [hook_output_setting.key.value]
                    if hook_output_setting.keys:
                        keys.extend(hook_output_setting.keys)

                    output_acc = dig(self.output, keys)

                    if isinstance(output, dict):
                        if output_acc is None or len(output_acc) == 0:
                            output_acc = {}

                        if output:
                            for key, value in output.items():
                                value_prev = output_acc.get(key)
                                if value_prev and \
                                        isinstance(value_prev, list) and \
                                        isinstance(value, list):
                                    output_acc[key] = value_prev + value
                                elif value_prev and \
                                        isinstance(value_prev, dict) and \
                                        isinstance(value, dict):
                                    output_acc[key] = merge_dict(value_prev, value)
                                else:
                                    output_acc[key] = value
                    elif isinstance(output, list):
                        if output_acc is None or len(output_acc) == 0:
                            output_acc = []

                        output_acc = output_acc + output
                    elif str(output).isnumeric():
                        if output_acc is None:
                            output_acc = 0

                        output_acc = output_acc + output
                    else:
                        output_acc = output

                    self.output = set_value(self.output, keys, output_acc)

        self.output = extract_valid_data(self.resource_type, self.output or {})

        return self.output

    def run(
        self,
        check_status: bool = True,
        error_on_failure: bool = True,
        poll_timeout: int = None,
        should_schedule: bool = False,
        with_trigger: bool = False,
        **kwargs,
    ) -> None:
        if not self.pipeline:
            return

        try:
            variables_from_operation = extract_valid_data(self.resource_type, dict(
                error=kwargs.get('error'),
                meta=kwargs.get('meta'),
                metadata=kwargs.get('metadata'),
                payload=kwargs.get('payload'),
                query=kwargs.get('query'),
                resource=kwargs.get('resource'),
                resources=kwargs.get('resources'),
            ))
            variables = merge_dict(
                self.pipeline_settings.get('variables') or {},
                merge_dict(
                    variables_from_operation,
                    dict(
                        hook=self.to_dict(include_all=True),
                    ),
                ),
            )

            pipeline_run = None
            if with_trigger or (self.run_settings and self.run_settings.with_trigger):
                pipeline_run = trigger_pipeline(
                    self.pipeline.uuid,
                    variables=variables,
                    check_status=check_status,
                    error_on_failure=error_on_failure,
                    poll_interval=1,
                    poll_timeout=poll_timeout,
                    schedule_name=TRIGGER_NAME_FOR_GLOBAL_HOOK,
                    verbose=True,
                    _should_schedule=should_schedule,
                )
            else:
                self.pipeline.execute_sync(global_vars=variables, update_status=False)

            return pipeline_run
        except Exception as err:
            self.status = HookStatus.load(error=err)

            if self.strategies:
                if HookStrategy.RAISE in self.strategies:
                    self.status.strategy = HookStrategy.RAISE
                elif HookStrategy.BREAK in self.strategies and \
                        HookOperation.EXECUTE == self.operation_type:

                    self.status.strategy = HookStrategy.BREAK
                elif HookStrategy.CONTINUE in self.strategies:
                    self.status.strategy = HookStrategy.CONTINUE

    def should_run(
        self,
        operation_types: List[HookOperation],
        resource_type: EntityName,
        stage: HookStage,
        conditions: List[HookCondition] = None,
        operation_resource: Union[BaseResource, Block, Dict, List[BaseResource], Pipeline] = None,
    ) -> bool:
        if self.operation_type not in operation_types:
            return False

        if self.resource_type != resource_type:
            return False

        if self.stages and stage not in (self.stages or []):
            return False

        if not self.__matches_any_condition(conditions):
            return False

        if not self.__validate_snapshot():
            return False

        if not self.__matches_any_predicate(operation_resource):
            return False

        return True

    def snapshot(self) -> str:
        if not self.pipeline:
            return

        if not self.metadata:
            self.metadata = HookMetadata.load()

        now = datetime.utcnow().isoformat(' ', 'seconds')
        self.metadata.snapshot_hash = self.__generate_snapshot_hash(prefix=now)
        self.metadata.snapshotted_at = now

        return self.metadata.snapshot_hash

    def __validate_snapshot(self) -> bool:
        return self.metadata and \
                self.metadata.snapshot_hash and \
                self.metadata.snapshotted_at and \
                self.metadata.snapshot_hash == self.__generate_snapshot_hash(
                    self.metadata.snapshotted_at,
                )

    def __generate_snapshot_hash(self, prefix: str = None) -> str:
        if not self.pipeline:
            return None

        hashes = []

        for block in self.pipeline.blocks_by_uuid.values():
            content = block.content or ''
            hashes.append(
                hashlib.md5(f'{prefix or ""}{content}'.encode()).hexdigest()
            )

        hashes_combined = ''.join(hashes)

        return hashlib.md5(
            f'{prefix or ""}{hashes_combined}'.encode(),
        ).hexdigest()

    def __matches_any_condition(self, conditions: List[HookCondition]) -> bool:
        if not conditions or not self.conditions:
            return True

        return any([condition in (self.conditions or []) for condition in conditions])

    def __matches_any_predicate(
        self,
        operation_resource: Union[BaseResource, Block, Dict, List[BaseResource], Pipeline],
    ) -> bool:
        if not operation_resource or not self.predicates:
            return True

        return any([all([self.__validate_predicate(
            predicate,
            operation_resource,
        ) for predicate in predicates]) for predicates in self.predicates])

    def __validate_predicate(
        self,
        predicate: HookPredicate,
        operation_resource: Union[BaseResource, Block, Dict, List[BaseResource], Pipeline],
    ) -> bool:
        if not predicate.resource or len(predicate.resource) == 0:
            return True

        def _validate_resource(
            resource: Union[BaseResource, Block, Dict, Pipeline],
            predicate=predicate,
        ) -> bool:
            model = resource
            if isinstance(resource, BaseResource):
                model = resource.model

            def _equals(
                key: str,
                value: Any,
                model=model,
            ) -> bool:
                if isinstance(model, dict):
                    return model.get(key) == value

                return hasattr(model, key) and getattr(model, key) == value

            check = all([_equals(key, value) for key, value in predicate.resource.items()])

            return check

        if isinstance(operation_resource, Iterable) and not isinstance(operation_resource, dict):
            return all([_validate_resource(res) for res in operation_resource])

        return _validate_resource(operation_resource)


def __build_global_hook_resource_fields() -> List[Tuple]:
    arr = []

    for operation in HookOperation:
        arr.append((
            operation.value,
            List[Hook],
            field(default=None),
        ))

    return arr


GlobalHookResourceBase = make_dataclass(
    'GlobalHookResourceBase',
    bases=(BaseDataClass,),
    fields=__build_global_hook_resource_fields(),
)


@dataclass
class GlobalHookResource(GlobalHookResourceBase):
    resource_type: EntityName = None

    def __post_init__(self):
        self.serialize_attribute_enum('resource_type', EntityName)

        for operation in HookOperation:
            self.serialize_attribute_classes(
                operation.value,
                Hook,
                operation_type=operation,
                resource_type=self.resource_type,
            )

        if self.resource_type:
            self.update_attributes(resource_type=self.resource_type)

    def to_dict(
        self,
        include_all: bool = False,
        **kwargs,
    ):
        arr = []

        if not include_all:
            arr.extend([
                'resource_type',
            ])

        data = super().to_dict(**kwargs)

        return ignore_keys(data, arr)

    def update_attributes(self, **kwargs):
        super().update_attributes(**kwargs)

        if 'resource_type' in kwargs:
            for operation in HookOperation:
                hooks = getattr(self, operation.value)
                if hooks:
                    for hook in hooks:
                        hook.update_attributes(
                            operation_type=operation,
                            resource_type=self.resource_type,
                        )
                setattr(self, operation.value, hooks)


def __build_global_hook_resources_fields() -> List[Tuple]:
    arr = []

    for entity_name in RESOURCE_TYPES:
        arr.append((
            entity_name.value,
            GlobalHookResource,
            field(default=None),
        ))

    return arr


GlobalHookResourcesBase = make_dataclass(
    'GlobalHookResourcesBase',
    bases=(BaseDataClass,),
    fields=__build_global_hook_resources_fields(),
)


@dataclass
class GlobalHookResources(GlobalHookResourcesBase):
    disable_attribute_snake_case = True

    def __post_init__(self):
        for entity_name in RESOURCE_TYPES:
            self.serialize_attribute_class(
                entity_name.value,
                GlobalHookResource,
            )
            self.update_attributes()

    def update_attributes(self, **kwargs):
        super().update_attributes(**kwargs)

        for entity_name in RESOURCE_TYPES:
            resource = getattr(self, entity_name.value)
            if resource:
                resource.update_attributes(resource_type=entity_name)
                setattr(self, entity_name.value, resource)


def run_hooks(args_arrays: List[List]) -> List[Dict]:
    arr = []

    for args_array in args_arrays:
        hook_dict, kwargs = args_array
        hook = Hook.load(**hook_dict)
        pipeline_run = hook.run(**kwargs)
        hook.get_and_set_output(pipeline_run=pipeline_run)
        arr.append(hook.to_dict(include_run_data=True))

    return arr


@dataclass
class GlobalHooks(BaseDataClass):
    resources: GlobalHookResources = None

    def __post_init__(self):
        self.serialize_attribute_class('resources', GlobalHookResources)
        if self.resources:
            self.resources.update_attributes()

    @classmethod
    def file_path(self) -> str:
        return os.path.join(get_repo_path(), 'global_hooks.yaml')

    @classmethod
    def load_from_file(self, file_path: str = None) -> 'GlobalHooks':
        yaml_config = {}

        file_path_to_use = file_path or self.file_path()
        if os.path.exists(file_path_to_use):
            with open(file_path_to_use, 'r') as fp:
                content = fp.read()
                if content:
                    yaml_config = yaml.safe_load(content) or {}

        return self.load(**yaml_config)

    def add_hook(
        self,
        hook: Hook,
        payload: Dict = None,
        snapshot: bool = False,
        update: bool = False,
    ) -> Hook:
        now = datetime.utcnow().isoformat(' ', 'seconds')

        if not update and self.get_hook(
            operation_type=hook.operation_type,
            resource_type=hook.resource_type,
            uuid=hook.uuid,
        ):
            raise Exception(
                f'Hook {hook.uuid} already exist for resource '
                f'{hook.resource_type} and operation {hook.operation_type}.',
            )

        if not self.resources:
            self.resources = GlobalHookResources.load()

        resource = getattr(self.resources, hook.resource_type.value)
        if not resource:
            resource = GlobalHookResource.load()

        hooks = getattr(resource, hook.operation_type)
        if not hooks:
            hooks = []

        if update:
            index = find_index(
                lambda x: (
                    x.uuid == hook.uuid and
                    x.operation_type == hook.operation_type and
                    x.resource_type == hook.resource_type
                ),
                hooks,
            )
            if index >= 0:
                hook_updated = Hook.load(
                    **merge_dict(
                        hook.to_dict(include_all=True),
                        payload,
                    ),
                )

                if not hook_updated.metadata:
                    hook_updated.metadata = HookMetadata.load()
                hook_updated.metadata.updated_at = now

                if hook.resource_type == hook_updated.resource_type and \
                        hook.operation_type == hook_updated.operation_type:

                    hooks[index] = hook_updated
                else:
                    # Move the hook
                    self.add_hook(hook_updated)
                    self.remove_hook(hook)

                if snapshot:
                    hook_updated.snapshot()

                return hook_updated
            else:
                raise Exception(
                    f'Hook {hook.uuid} doesn’t exist for resource '
                    f'{hook.resource_type} and operation {hook.operation_type}.',
                )
        else:
            if not hook.metadata:
                hook.metadata = HookMetadata.load()

            hook.metadata.created_at = now
            hook.metadata.updated_at = now

            if snapshot:
                hook.snapshot()

            hooks.append(hook)
            setattr(resource, hook.operation_type.value, hooks)
            setattr(self.resources, hook.resource_type.value, resource)

        return hook

    def remove_hook(self, hook: Hook) -> Hook:
        if self.resources:
            resource = getattr(self.resources, hook.resource_type.value)
            if resource:
                hooks = getattr(resource, hook.operation_type.value)
                if hooks:
                    arr = []
                    for x in hooks:
                        val = x.uuid != hook.uuid or \
                            x.operation_type != hook.operation_type or \
                            x.resource_type != hook.resource_type
                        if val:
                            arr.append(x)

                    setattr(resource, hook.operation_type.value, arr)
                    setattr(self.resources, hook.resource_type.value, resource)

    def hooks(
        self,
        operation_types: List[HookOperation] = None,
        resource_types: List[EntityName] = None,
    ) -> List[Hook]:
        arr = []
        if self.resources:
            for entity_name in RESOURCE_TYPES:
                resource = getattr(self.resources, entity_name.value)
                if not resource:
                    continue

                resource.resource_type = resource.resource_type or entity_name

                if resource_types and resource.resource_type not in resource_types:
                    continue

                for operation in HookOperation:
                    if operation_types and operation not in operation_types:
                        continue

                    hooks = getattr(resource, operation.value)
                    if not hooks:
                        continue

                    for hook in hooks:
                        hook.operation_type = operation
                        hook.resource_type = resource.resource_type
                        arr.append(hook)

        return arr

    def get_hook(self, resource_type: EntityName, operation_type: HookOperation, uuid: str) -> Hook:
        return find(
            lambda x: (
                x.uuid == uuid and
                x.operation_type == operation_type and
                x.resource_type == resource_type
            ),
            self.hooks(),
        )

    def get_hooks(
        self,
        operation_types: List[HookOperation],
        resource_type: EntityName,
        stage: HookStage,
        conditions: List[HookCondition] = None,
        operation_resource: Union[BaseResource, Block, Dict, List[BaseResource], Pipeline] = None,
    ) -> List[Hook]:
        def _filter(
            hook: Hook,
            conditions=conditions,
            operation_resource=operation_resource,
            operation_types=operation_types,
            resource_type=resource_type,
            stage=stage,
        ) -> bool:
            return hook.should_run(
                conditions=conditions,
                operation_resource=operation_resource,
                operation_types=operation_types,
                resource_type=resource_type,
                stage=stage,
            )

        return list(filter(
            _filter,
            self.hooks(),
        ))

    def run_hooks(self, hooks: List[Hook], **kwargs) -> List[Hook]:
        hooks_by_pipeline = {}
        for hook in hooks:
            if not hook.pipeline_settings or not hook.pipeline_settings.get('uuid'):
                continue

            pipeline_uuid = hook.pipeline_settings.get('uuid')
            if pipeline_uuid not in hooks_by_pipeline:
                hooks_by_pipeline[pipeline_uuid] = []

            hooks_by_pipeline[pipeline_uuid].append((
                hook.to_dict(
                    include_all=True,
                    include_output=True,
                ),
                kwargs,
            ))

        hook_dicts_arr = run_parallel_multiple_args(run_hooks, list(hooks_by_pipeline.values()))

        return [Hook.load(**m) for m in flatten(hook_dicts_arr)]

    def get_and_run_hooks(
        self,
        operation_types: List[HookOperation],
        resource_type: EntityName,
        stage: HookStage,
        conditions: List[HookCondition] = None,
        operation_resource: Union[BaseResource, Block, Dict, List[BaseResource], Pipeline] = None,
        **kwargs,
    ) -> List[Hook]:
        hooks = self.get_hooks(
            operation_types=operation_types,
            resource_type=resource_type,
            stage=stage,
            conditions=conditions,
            operation_resource=operation_resource,
        )

        if not hooks:
            return None

        return self.run_hooks(hooks, **kwargs)

    def save(self, file_path: str = None) -> None:
        if not file_path:
            file_path = self.file_path()

        content_original = None
        if os.path.exists(file_path):
            with open(file_path) as f:
                content_original = f.read()

        with open(self.file_path(), 'w'):
            try:
                data = self.to_dict()
                content = yaml.safe_dump(data)
                safe_write(file_path, content)
            except Exception as err:
                if content_original:
                    safe_write(file_path, content_original)
                raise err

    def to_dict(self, **kwargs) -> Dict:
        return super().to_dict(convert_enum=True, ignore_empty=True)
