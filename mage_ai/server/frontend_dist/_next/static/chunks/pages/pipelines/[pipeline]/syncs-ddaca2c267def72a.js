(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7803],{17717:function(e,n,r){var t=r(554);!function(){"use strict";var n={977:function(e){function n(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,n){for(var r,t="",i=0,o=-1,l=0,c=0;c<=e.length;++c){if(c<e.length)r=e.charCodeAt(c);else{if(47===r)break;r=47}if(47===r){if(o===c-1||1===l);else if(o!==c-1&&2===l){if(t.length<2||2!==i||46!==t.charCodeAt(t.length-1)||46!==t.charCodeAt(t.length-2))if(t.length>2){var u=t.lastIndexOf("/");if(u!==t.length-1){-1===u?(t="",i=0):i=(t=t.slice(0,u)).length-1-t.lastIndexOf("/"),o=c,l=0;continue}}else if(2===t.length||1===t.length){t="",i=0,o=c,l=0;continue}n&&(t.length>0?t+="/..":t="..",i=2)}else t.length>0?t+="/"+e.slice(o+1,c):t=e.slice(o+1,c),i=c-o-1;o=c,l=0}else 46===r&&-1!==l?++l:l=-1}return t}var i={resolve:function(){for(var e,i="",o=!1,l=arguments.length-1;l>=-1&&!o;l--){var c;l>=0?c=arguments[l]:(void 0===e&&(e=t.cwd()),c=e),n(c),0!==c.length&&(i=c+"/"+i,o=47===c.charCodeAt(0))}return i=r(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(n(e),0===e.length)return".";var t=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!t)).length||t||(e="."),e.length>0&&i&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return n(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var t=arguments[r];n(t),t.length>0&&(void 0===e?e=t:e+="/"+t)}return void 0===e?".":i.normalize(e)},relative:function(e,r){if(n(e),n(r),e===r)return"";if((e=i.resolve(e))===(r=i.resolve(r)))return"";for(var t=1;t<e.length&&47===e.charCodeAt(t);++t);for(var o=e.length,l=o-t,c=1;c<r.length&&47===r.charCodeAt(c);++c);for(var u=r.length-c,s=l<u?l:u,a=-1,d=0;d<=s;++d){if(d===s){if(u>s){if(47===r.charCodeAt(c+d))return r.slice(c+d+1);if(0===d)return r.slice(c+d)}else l>s&&(47===e.charCodeAt(t+d)?a=d:0===d&&(a=0));break}var f=e.charCodeAt(t+d);if(f!==r.charCodeAt(c+d))break;47===f&&(a=d)}var v="";for(d=t+a+1;d<=o;++d)d!==o&&47!==e.charCodeAt(d)||(0===v.length?v+="..":v+="/..");return v.length>0?v+r.slice(c+a):(c+=a,47===r.charCodeAt(c)&&++c,r.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(n(e),0===e.length)return".";for(var r=e.charCodeAt(0),t=47===r,i=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(r=e.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return-1===i?t?"/":".":t&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');n(e);var t,i=0,o=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var c=r.length-1,u=-1;for(t=e.length-1;t>=0;--t){var s=e.charCodeAt(t);if(47===s){if(!l){i=t+1;break}}else-1===u&&(l=!1,u=t+1),c>=0&&(s===r.charCodeAt(c)?-1===--c&&(o=t):(c=-1,o=u))}return i===o?o=u:-1===o&&(o=e.length),e.slice(i,o)}for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!l){i=t+1;break}}else-1===o&&(l=!1,o=t+1);return-1===o?"":e.slice(i,o)},extname:function(e){n(e);for(var r=-1,t=0,i=-1,o=!0,l=0,c=e.length-1;c>=0;--c){var u=e.charCodeAt(c);if(47!==u)-1===i&&(o=!1,i=c+1),46===u?-1===r?r=c:1!==l&&(l=1):-1!==r&&(l=-1);else if(!o){t=c+1;break}}return-1===r||-1===i||0===l||1===l&&r===i-1&&r===t+1?"":e.slice(r,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,n){var r=n.dir||n.root,t=n.base||(n.name||"")+(n.ext||"");return r?r===n.root?r+t:r+e+t:t}("/",e)},parse:function(e){n(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var t,i=e.charCodeAt(0),o=47===i;o?(r.root="/",t=1):t=0;for(var l=-1,c=0,u=-1,s=!0,a=e.length-1,d=0;a>=t;--a)if(47!==(i=e.charCodeAt(a)))-1===u&&(s=!1,u=a+1),46===i?-1===l?l=a:1!==d&&(d=1):-1!==l&&(d=-1);else if(!s){c=a+1;break}return-1===l||-1===u||0===d||1===d&&l===u-1&&l===c+1?-1!==u&&(r.base=r.name=0===c&&o?e.slice(1,u):e.slice(c,u)):(0===c&&o?(r.name=e.slice(1,l),r.base=e.slice(1,u)):(r.name=e.slice(c,l),r.base=e.slice(c,u)),r.ext=e.slice(l,u)),c>0?r.dir=e.slice(0,c-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}},l=!0;try{n[e](o,o.exports,i),l=!1}finally{l&&delete r[e]}return o.exports}i.ab="//";var o=i(977);e.exports=o}()},66050:function(e,n,r){"use strict";var t;r.d(n,{V:function(){return t}}),function(e){e.CANCELLED="cancelled",e.COMPLETED="completed",e.FAILED="failed",e.INITIAL="initial",e.RUNNING="running",e.UPSTREAM_FAILED="upstream_failed",e.CONDITION_FAILED="condition_failed"}(t||(t={}))},47409:function(e,n,r){"use strict";r.d(n,{Az:function(){return u},BF:function(){return c},Do:function(){return a},IK:function(){return l},VO:function(){return o},sZ:function(){return s}});var t,i=r(82394),o=r(66050).V,l=[o.FAILED,o.COMPLETED,o.RUNNING,o.CANCELLED,o.INITIAL],c=[o.INITIAL,o.RUNNING],u=[o.CANCELLED,o.COMPLETED,o.FAILED],s="__mage_variables",a=(t={},(0,i.Z)(t,o.CANCELLED,"Cancelled"),(0,i.Z)(t,o.COMPLETED,"Done"),(0,i.Z)(t,o.FAILED,"Failed"),(0,i.Z)(t,o.INITIAL,"Ready"),(0,i.Z)(t,o.RUNNING,"Running"),t)},98781:function(e,n,r){"use strict";r.d(n,{$1:function(){return a},G7:function(){return f},LM:function(){return v},Mj:function(){return p},QK:function(){return s},a_:function(){return h},qL:function(){return l},r0:function(){return d}});var t,i,o,l,c=r(82394),u=r(22341);!function(e){e.INTEGRATION="integration",e.PYTHON="python",e.PYSPARK="pyspark",e.STREAMING="streaming"}(l||(l={}));var s,a,d,f=(t={},(0,c.Z)(t,l.INTEGRATION,"Integration"),(0,c.Z)(t,l.PYTHON,"Standard"),(0,c.Z)(t,l.PYSPARK,"PySpark"),(0,c.Z)(t,l.STREAMING,"Streaming"),t),v="all",p=(l.PYTHON,l.INTEGRATION,l.STREAMING,i={},(0,c.Z)(i,v,u.ie),(0,c.Z)(i,l.INTEGRATION,u.YC),(0,c.Z)(i,l.PYTHON,u.El),(0,c.Z)(i,l.STREAMING,u.dB),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive",e.NO_SCHEDULES="no_schedules",e.RETRY="retry"}(s||(s={})),function(e){e.GROUP="group_by",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(a||(a={})),function(e){e.STATUS="status",e.TAG="tag",e.TYPE="type"}(d||(d={}));var h=(o={},(0,c.Z)(o,l.PYTHON,"python3"),(0,c.Z)(o,l.PYSPARK,"pysparkkernel"),o)},89745:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return oe}});var t=r(77837),i=r(38860),o=r.n(i),l=r(82684),c=r(60547),u=r(41788),s=r(75582),a=r(82394),d=r(93461),f=r(67971),v=r(87372),p=r(47409),h=r(86673),m=r(54283),g=r(19711),b=r(23831),x=r(22341),j=r(38626),Z=r(73942),y=r(2005),I=r(49125),N=r(31012),O=j.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-15svh8z-0"})(["border-radius:","px;margin:","px;overflow:hidden;"," "," "," "," "," "," &:hover{"," "," "," "," ","}"],Z.n_,I.cd*I.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||b.Z.background).panel,";\n    border: 1px solid ").concat((e.theme.borders||b.Z.borders).dark,";\n\n    &:hover {\n      cursor: pointer;\n    }\n  ")}),(function(e){return e.selected&&e.danger&&"\n    border-color: ".concat((e.theme.accent||b.Z.accent).negative,";\n  ")}),(function(e){return e.selected&&e.primary&&"\n    border-color: ".concat((e.theme.interactive||b.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.selected&&e.default&&"\n    border-color: ".concat((e.theme.interactive||b.Z.interactive).focusBackground,";\n  ")}),(function(e){return e.selected&&e.success&&"\n    border-color: ".concat((e.theme.background||b.Z.background).success,";\n  ")}),(function(e){return e.selected&&e.warning&&"\n    border-color: ".concat((e.theme.accent||b.Z.accent).warning,";\n  ")}),(function(e){return e.danger&&"\n      border-color: ".concat((e.theme.accent||b.Z.accent).negative,";\n    ")}),(function(e){return e.primary&&"\n      border-color: ".concat((e.theme.interactive||b.Z.interactive).linkPrimary,";\n    ")}),(function(e){return e.default&&"\n      border-color: ".concat((e.theme.interactive||b.Z.interactive).focusBackground,";\n    ")}),(function(e){return e.success&&"\n      border-color: ".concat((e.theme.background||b.Z.background).success,";\n    ")}),(function(e){return e.warning&&"\n      border-color: ".concat((e.theme.accent||b.Z.accent).warning,";\n    ")})),k=(0,j.css)([""," "," "," "," ",""],(function(e){return e.danger&&"\n    background-color: ".concat((e.theme.accent||b.Z.accent).negative,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.interactive||b.Z.interactive).linkPrimary,";\n  ")}),(function(e){return e.default&&"\n    background-color: ".concat((e.theme.interactive||b.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||b.Z.background).success,";\n  ")}),(function(e){return e.warning&&"\n    background-color: ".concat((e.theme.accent||b.Z.accent).warning,";\n  ")})),P=j.default.div.withConfig({displayName:"indexstyle__StatusStyle",componentId:"sc-15svh8z-1"})([""," ",";border-radius:","px;display:inline-block;font-family:",";padding:6px;"," "," "," "," "," ",""],k,N.iD,Z.D7,y.ry,(function(e){return e.danger&&"\n    color: ".concat((e.theme.content||b.Z.content).active,";\n  ")}),(function(e){return e.primary&&"\n    color: ".concat((e.theme.content||b.Z.content).active,";\n  ")}),(function(e){return(e.default||e.success)&&"\n  "}),(function(e){return e.default&&"\n    color: ".concat((e.theme.content||b.Z.content).default,";\n  ")}),(function(e){return e.success&&"\n    color: ".concat((e.theme.content||b.Z.content).inverted,";\n  ")}),(function(e){return e.warning&&"\n    color: ".concat((e.theme.content||b.Z.content).inverted,";\n  ")})),_=j.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-15svh8z-2"})([""," display:flex;height:auto;width:3px;",""],k,(function(e){return e.default&&"\n    background-color: ".concat((e.theme.interactive||b.Z.interactive).focusBackground,";\n  ")})),E=r(90211),w=r(92083),A=r.n(w),C=r(66050),T=r(24224);function S(e){var n;return Object.keys((null===e||void 0===e||null===(n=e.metrics)||void 0===n?void 0:n.blocks)||{}).sort()}function M(e){var n,r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=null,o=null,l=null,c=null,u={},a=(null===e||void 0===e?void 0:e.block_runs)||[],d=(null===e||void 0===e||null===(n=e.metrics)||void 0===n?void 0:n.blocks)||{},f=(null===e||void 0===e||null===(r=e.metrics)||void 0===r?void 0:r.pipeline)||{},v=L(e);return Object.entries(d).forEach((function(e){var n,r=(0,s.Z)(e,2),a=r[0],d=r[1];if(!t||t===a){var p,h=d||{},m=h.destinations,g=void 0===m?{records_affected:null,records_inserted:null,records_updated:null}:m,b=h.sources,x=void 0===b?{records:null}:b,j=v[a]||[];if(t&&t===a&&j.every((function(e){var n=e.status;return C.V.COMPLETED===n}))&&null===i&&(i=0),null!==f&&void 0!==f&&null!==(n=f[a])&&void 0!==n&&n.record_counts)null===i&&(i=0),i+=Number(null===f||void 0===f||null===(p=f[a])||void 0===p?void 0:p.record_counts);else null!==x&&void 0!==x&&x.records&&(null===i&&(i=0),i+=Number(x.records));null!==g&&void 0!==g&&g.records_updated?(null===l&&(l=0),l+=Number(g.records_updated),null===c&&(c=0),c+=Number(g.records_updated)):null!==g&&void 0!==g&&g.records_inserted?(null===l&&(l=0),l+=Number(g.records_inserted),null===o&&(o=0),o+=Number(g.records_inserted)):null!==g&&void 0!==g&&g.records_affected&&(null===l&&(l=0),l+=Number(g.records_affected)),["destinations","sources"].forEach((function(e){var n=d[e]||{};null!==n&&void 0!==n&&n.error&&(u[a]||(u[a]={}),u[a][e]={error:null===n||void 0===n?void 0:n.error,errors:null===n||void 0===n?void 0:n.errors,message:null===n||void 0===n?void 0:n.message})}))}})),null===a||void 0===a||a.forEach((function(e){var n=e.block_uuid,r=e.metrics,t=e.status;if(C.V.FAILED===t&&null!==r&&void 0!==r&&r.error&&n){var i=n.split(":"),o=(0,s.Z)(i,3),l=(o[0],o[1]);o[2];u[l]||(u[l]={}),u[l][""]=r.error}})),{errors:u,records:i,recordsInserted:o,recordsProcessed:l,recordsUpdated:c}}function L(e){var n=e.block_runs,r={};return null===n||void 0===n||n.forEach((function(e){var n=e.block_uuid.split(":"),t=(0,s.Z)(n,3),i=(t[0],t[1]);t[2];r[i]||(r[i]=[]),r[i].push(e)})),r}function D(e){var n=L(e),r={};return Object.entries(n).forEach((function(e){var n=(0,s.Z)(e,2),t=n[0],i=n[1],o=i.filter((function(e){var n=e.status;return C.V.COMPLETED===n})),l=o.map((function(e){var n=e.completed_at,r=e.started_at,t=A().utc(n),i=A().utc(r);return t.diff(i,"second")})),c=o.length,u=i.length;r[t]={completed:c,runtime:l.length>=1?(0,T.Sm)(l)/l.length:null,total:u}})),r}function R(e){var n=e.block_runs,r=(null===n||void 0===n?void 0:n.length)||1,t=function(e){var n=(null===e||void 0===e?void 0:e.block_runs)||[];return null===n||void 0===n?void 0:n.filter((function(e){var n=e.status;return C.V.COMPLETED===n}))}(e).length||0;return t/r}function V(e){var n=e.completed_at,r=e.block_runs,t=void 0===r?[]:r,i=e.status;if(null===t||void 0===t||!t.length)return 0;var o=A().utc();if(n)o=A().utc(n);else if([p.VO.CANCELLED,p.VO.FAILED].includes(i)){var l=(0,T.YC)(t,(function(e){return e.started_at}),{ascending:!1})[0];o=A().utc(l.updated_at)}var c=A().utc(e.created_at);return o.diff(c,"second")}function G(e,n){var r,t,i,o,l,c=L(e),u=D(e),s=(null===e||void 0===e?void 0:e.metrics)||{blocks:null,pipeline:null},a=s.blocks||{},d=s.pipeline||{},f=(a[n],d[n],u[n]||{completed:null,total:null}),v=f.completed,p=f.total,h=v&&p?v/p:0,m=c[n]||[],g=m.every((function(e){var n=e.status;return C.V.COMPLETED===n})),b=(0,T.YC)(m,(function(e){return e.updated_at}),{ascending:!1})[0],x=null===(r=(0,T.YC)(m,(function(e){return e.started_at}),{ascending:!0})[0])||void 0===r?void 0:r.started_at;g?t=null===(l=(0,T.YC)(m,(function(e){return e.completed_at}),{ascending:!1})[0])||void 0===l?void 0:l.completed_at:b&&(o=null===b||void 0===b?void 0:b.updated_at);var j=g?A().utc(t||o):A().utc(),Z=A().utc(x);return{completed:v,completedAt:t,done:g,progress:h,runtime:i=j.diff(Z,"second"),startedAt:x,status:null===b||void 0===b?void 0:b.status,timeText:(0,E.zf)(i),total:p,updatedAt:o}}var U=r(28598);function F(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function Y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?F(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var z=function(e){var n=e.onSelect,r=e.pipelineRun,t=e.selected,i=(r.block_runs,r.created_at),o=r.status,c=(0,l.useMemo)((function(){return(null===r||void 0===r?void 0:r.metrics)||{blocks:{},destination:null,pipeline:{},source:null}}),[r]),u=((0,l.useMemo)((function(){return c.blocks||{}}),[c]),(0,l.useMemo)((function(){return c.pipeline||{}}),[c])),a=c.destination,j=c.source,Z=(0,l.useMemo)((function(){return Object.keys(u).length}),[u]),y=(0,l.useMemo)((function(){return M(r)}),[r]),N=y.errors,k=y.records,w=y.recordsProcessed,A=(0,l.useMemo)((function(){return R(r)}),[r]),C=(0,l.useMemo)((function(){return[p.VO.COMPLETED].includes(o)}),[o]),T=(0,l.useMemo)((function(){return{danger:p.VO.FAILED===o,default:p.VO.INITIAL===o,primary:p.VO.RUNNING===o,success:C,warning:p.VO.CANCELLED===o}}),[C,o]),S=(0,l.useMemo)((function(){if(r){var e=V(r);return(0,E.zf)(e)}}),[r]);return(0,U.jsx)(O,Y(Y({},T),{},{onClick:function(){return n(t?null:r.id)},selected:t,children:(0,U.jsxs)(f.ZP,{fullHeight:!0,justifyContent:"space-between",children:[(0,U.jsx)(_,Y({},T)),(0,U.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,U.jsxs)(h.Z,{ml:3,py:3,children:[(0,U.jsx)(v.Z,{bold:!0,level:5,monospace:!0,children:i}),(0,U.jsx)(h.Z,{fullWidth:!1,mt:2,children:(0,U.jsx)(P,Y(Y({},T),{},{children:(0,U.jsxs)(f.ZP,{alignItems:"center",children:[C&&(0,U.jsx)(x.Jr,{inverted:!0,size:2*I.iI}),[p.VO.INITIAL,p.VO.RUNNING].includes(o)&&(0,U.jsx)(m.Z,{color:p.VO.INITIAL!==o?b.Z.monotone.white:null,inverted:p.VO.INITIAL===o,small:!0}),"\xa0",p.VO.RUNNING===o&&(0,U.jsxs)(U.Fragment,{children:["\xa0",Math.round(100*A),"%"]}),![p.VO.INITIAL,p.VO.RUNNING].includes(o)&&p.Do[o],p.VO.INITIAL===o&&"Starting"]})}))}),Object.values(N).length>=1&&(0,U.jsx)(h.Z,{mt:1,children:Object.entries(N).map((function(e,n){var r=(0,s.Z)(e,2),t=r[0];r[1];return(0,U.jsxs)(g.ZP,{monospace:!0,muted:!0,small:!0,children:[t," stream failed"]},t)}))})]})}),(0,U.jsxs)(d.Z,{flex:1,children:[(0,U.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,U.jsxs)(h.Z,{ml:3,py:3,children:[(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Rows processed"}),(0,U.jsx)(g.ZP,{monospace:!0,children:w>=1?(0,E.x6)(w):"-"})]}),(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Rows remaining"}),(0,U.jsx)(g.ZP,{monospace:!0,children:k>=1&&k>=w?(0,E.x6)(k-w):"-"})]}),p.VO.RUNNING!==o&&(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Runtime"}),(0,U.jsx)(g.ZP,{monospace:!0,children:S})]})]})}),(0,U.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,U.jsxs)(h.Z,{ml:3,py:3,children:[(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Source"}),(0,U.jsx)(g.ZP,{monospace:!0,children:j||"-"})]}),(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Destination"}),(0,U.jsx)(g.ZP,{monospace:!0,children:a||"-"})]}),(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Streams"}),(0,U.jsx)(g.ZP,{monospace:!0,children:Z>=1?(0,E.x6)(Z):"-"})]})]})})]})]})}))},B=r(89565),H=r.n(B),W=r(34376),J=r(60328),K=r(10919),X=r(87815),q=j.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-1thr560-0"})(["display:flex;flex:1;"," "," ",""],(function(e){return e.even&&e.fill&&"\n    background-color: ".concat((e.theme.accent||b.Z.accent).cyan,";\n  ")}),(function(e){return e.even&&!e.fill&&"\n    background-color: ".concat((e.theme.accent||b.Z.accent).cyanTransparent,";\n  ")}),(function(e){return"\n    height: ".concat((e.small?1:2)*I.iI,"px;\n  ")})),Q=r(66653);var $=function(e){var n=e.onClickRow,r=e.pipelineRun,t=e.selectedStream,i=(0,W.useRouter)(),o=(0,l.useState)(null),c=o[0],u=o[1],a=(0,l.useState)(null),d=a[0],m=a[1],b=(0,l.useMemo)((function(){return r?L(r):{}}),[r]),j=(0,l.useMemo)((function(){return r?D(r):{}}),[r]),Z=(0,l.useMemo)((function(){var e=0,n=[],r=[];if(Object.entries(j).forEach((function(t){var i=(0,s.Z)(t,2),o=(i[0],i[1]),l=o.completed,c=o.runtime,u=o.total;null===c?r.push(o):(n.push(c),e+=c*(u-l))})),0===n.length)return null;var t=(0,T.Sm)(n)/n.length;return r.forEach((function(n){var r=n.completed,i=n.total;e+=t*(i-r)})),e}),[j]),y=(0,l.useMemo)((function(){return t?j[t]:null}),[j,t]),N=(0,l.useMemo)((function(){if(t&&j){var e=j[t]||{},n=e.completed,i=e.total;if(i>=1)return n/i}else if(r)return R(r);return 0}),[y,r,t]),O=(0,l.useMemo)((function(){return(0,U.jsx)(f.ZP,{children:(0,T.w6)(101).map((function(e,n){return(0,U.jsx)(q,{even:n%2===0,fill:N>0&&Math.round(100*N)>=n},n)}))})}),[N]),k=(0,l.useMemo)((function(){if(t){var e=b[t]||[],n=e.every((function(e){var n=e.status;return C.V.COMPLETED===n})),i=(0,T.YC)(e,(function(e){return e.updated_at}),{ascending:!1})[0],o=null===i||void 0===i?void 0:i.status,l=y||{},c=l.completed,u=l.runtime,s=l.total;if(n)return"Sync complete for ".concat(t);if([C.V.CANCELLED,C.V.FAILED].includes(o))return p.Do[o];if(u&&s>=1){var a=Math.ceil(u*(s-c)/60);return"".concat((0,E._6)("minute",a,!0)," to completion")}return"Estimating time remaining for stream..."}if(p.VO.COMPLETED===(null===r||void 0===r?void 0:r.status))return"Sync complete";if(r){if([p.VO.CANCELLED,p.VO.FAILED].includes(null===r||void 0===r?void 0:r.status))return p.Do[null===r||void 0===r?void 0:r.status];if(p.VO.INITIAL===(null===r||void 0===r?void 0:r.status))return"Initializing sync (this can take several minutes)";if(null===Z)return"Estimating time remaining...";var d=Math.ceil(Z/60);return"".concat((0,E._6)("minute",d,!0)," to completion")}return"Select a sync"}),[b,Z,y,r,t]),P=(0,l.useMemo)((function(){return r&&t?G(r,t):{completed:null,completedAt:null,done:null,progress:null,runtime:null,startedAt:null,status:null,timeText:null,total:null,updatedAt:null}}),[r,t]);(0,l.useEffect)((function(){var e;if(r){var n=V(r);u(n),e=setInterval((function(){return u((function(e){return e+1}))}),1e3)}return function(){return clearInterval(e)}}),[r]),(0,l.useEffect)((function(){var e;if(r&&t&&P){var n=(null===P||void 0===P?void 0:P.runtime)||0;m(n),e=setInterval((function(){return m((function(e){return e+1}))}),1e3)}return function(){return clearInterval(e)}}),[r,t,P]);var _=(0,l.useMemo)((function(){if(r){if(t)return null===P||void 0===P?void 0:P.timeText;var e=V(r);return(0,E.zf)(e)}}),[r,t,P]),w=(0,l.useMemo)((function(){var e=Math.floor(c%86400/3600),n=Math.floor(c%3600/60),r=Math.floor(c%60/1);return[e>=10?String(e):"0".concat(e),n>=10?String(n):"0".concat(n),r>=10?String(r):"0".concat(r)].join(":")}),[c]),A=(0,l.useMemo)((function(){var e=Math.floor(d%86400/3600),n=Math.floor(d%3600/60),r=Math.floor(d%60/1);return[e>=10?String(e):"0".concat(e),n>=10?String(n):"0".concat(n),r>=10?String(r):"0".concat(r)].join(":")}),[d]),F=(0,l.useMemo)((function(){return r?M(r):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[r]),Y=F.errors,z=F.records,B=F.recordsInserted,$=F.recordsProcessed,ee=F.recordsUpdated,ne=(0,l.useMemo)((function(){return r&&t?M(r,t):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[r,t]),re=(0,l.useMemo)((function(){var e=t?null===ne||void 0===ne?void 0:ne.records:z,n=t?null===ne||void 0===ne?void 0:ne.recordsInserted:B,r=t?null===ne||void 0===ne?void 0:ne.recordsProcessed:$,i=t?null===ne||void 0===ne?void 0:ne.recordsUpdated:ee,o=[{label:"Rows fetched",value:null===e?"-":(0,E.x6)(e)}];return null===n&&null===i?o.push({label:"Rows processed",value:null===r?"-":(0,E.x6)(r)}):null!==n?o.push({label:"Rows inserted",value:(0,E.x6)(n)}):null!==i&&o.push({label:"Rows updated",value:(0,E.x6)(i)}),o.map((function(e){var n=e.label,r=e.value;return(0,U.jsxs)("div",{children:[(0,U.jsx)(g.ZP,{bold:!0,large:!0,muted:!0,children:n}),(0,U.jsx)(g.ZP,{headline:!0,children:r})]},n)}))}),[z,ne,B,$,ee,_,w,status]),te=(0,l.useMemo)((function(){if(!r)return(0,U.jsx)("div",{});var e=S(r);return(0,U.jsx)(X.Z,{columnFlex:[null,null,null,null,null,null],columns:[{uuid:"Stream"},{uuid:"Start"},{uuid:"End"},{uuid:"Time"},{uuid:"Progress"},{uuid:"Logs"}],isSelectedRow:function(n){return t&&t===e[n]},onClickRow:n,rows:e.map((function(e){var n=G(r,e),t=(n.completed,n.completedAt),o=n.done,l=n.progress,c=n.startedAt,u=n.status,s=n.timeText,a=(n.total,!!Y[e]);return[(0,U.jsx)(g.ZP,{danger:a,default:!a,monospace:!0,children:e},"stream"),(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:c?c.split(".")[0]:"-"},"started_at"),(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:t?t.split(".")[0]:"-"},"completed_at"),(0,U.jsx)(g.ZP,{default:!0,children:[C.V.INITIAL,C.V.RUNNING].includes(u)?"-":s},"runtime"),(0,U.jsxs)("div",{children:[o&&(0,U.jsx)(x.Jr,{default:!0,size:2*I.iI}),!o&&(0,U.jsx)(f.ZP,{children:(0,T.w6)(51).map((function(e,n){return(0,U.jsx)(q,{fill:l>0&&Math.round(50*l)>=n,even:n%2===0,small:!0},n)}))})]},"progress"),(0,U.jsx)(J.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(e){i.push("/pipelines/".concat(r.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(r.id)),(0,Q.j)(e)},children:(0,U.jsx)(x.B4,{default:!0,size:2*I.iI})},"logs")]})),uuid:"".concat(null===r||void 0===r?void 0:r.id,"-streams-table")})}),[Y,j,r,t]),ie=(0,l.useMemo)((function(){var e,n,i,o,l,c,u,a;if(r&&t){var d=(null===r||void 0===r?void 0:r.metrics)||{blocks:null,destination:null,pipeline:null,source:null},f=null===d||void 0===d||null===(e=d.pipeline)||void 0===e||null===(n=e[t])||void 0===n||null===(i=n.bookmarks)||void 0===i?void 0:i[t],v=null===d||void 0===d||null===(o=d.blocks)||void 0===o||null===(l=o[t])||void 0===l||null===(c=l.destinations)||void 0===c||null===(u=c.state)||void 0===u||null===(a=u.bookmarks)||void 0===a?void 0:a[t];if(f||v){var p=Array.from(new Set(Object.keys(f||{}).concat(Object.keys(v||{})))).sort(),h=[];p.forEach((function(e){var n=[(0,U.jsx)(g.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:e},e)];[f,v].forEach((function(r,t){r&&n.push((0,U.jsx)(g.ZP,{monospace:!0,small:!0,children:r[e]},"".concat(e,"-").concat(t)))})),h.push(n)}));var m=[{label:function(){return""},uuid:"column"}];return[[null===d||void 0===d?void 0:d.source,"source",f],[null===d||void 0===d?void 0:d.destination,"destination",v]].forEach((function(e){var n=(0,s.Z)(e,3),r=n[0],t=n[1];n[2]&&m.push({uuid:"".concat(r," (").concat(t,")")})})),(0,U.jsx)(X.Z,{columnFlex:[null,1,1],columns:m,rows:h,uuid:"".concat(t,"-bookmark-table")})}}}),[r,t]),oe=(0,l.useMemo)((function(){var e,n,i,o,l,c;if(r&&t){var u=(null===r||void 0===r?void 0:r.metrics)||{blocks:null,destination:null,pipeline:null,source:null},a=null===u||void 0===u||null===(e=u.blocks)||void 0===e||null===(n=e[t])||void 0===n||null===(i=n.sources)||void 0===i?void 0:i.record,d=null===u||void 0===u||null===(o=u.blocks)||void 0===o||null===(l=o[t])||void 0===l||null===(c=l.destinations)||void 0===c?void 0:c.record;if(a||d){var f=Object.keys(d||a||{}).sort(),v=[];f.forEach((function(e){var n=[(0,U.jsx)(g.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:e},e)];[a,d].forEach((function(r,t){if(r){var i=r[e],o="object"===typeof i;n.push((0,U.jsxs)(g.ZP,{monospace:!0,small:!0,textOverflow:!0,whiteSpaceNormal:!0,wordBreak:!0,children:[o&&(0,U.jsx)("pre",{children:JSON.stringify(i,null,2)}),!o&&i]},"".concat(e,"-").concat(t)))}})),v.push(n)}));var p=[{label:function(){return""},uuid:"column"}];return[[null===u||void 0===u?void 0:u.source,"source",a],[null===u||void 0===u?void 0:u.destination,"destination",d]].forEach((function(e){var n=(0,s.Z)(e,3),r=n[0],t=n[1];n[2]&&p.push({uuid:"".concat(r," (").concat(t,")")})})),(0,U.jsx)(X.Z,{columnFlex:[null,1,1],columns:p,rows:v.map((function(e){return e.map((function(e){return(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:e},e)}))})),uuid:"".concat(t,"-bookmark-table")})}}}),[r,t]),le=(0,l.useMemo)((function(){var e,n,i,o,l,c,u=null===r||void 0===r||null===(e=r.metrics)||void 0===e||null===(n=e.blocks)||void 0===n?void 0:n[t];return(null===u||void 0===u||null===(i=u.sources)||void 0===i||null===(o=i.block_tags)||void 0===o?void 0:o.destination_table)||(null===u||void 0===u||null===(l=u.destinations)||void 0===l||null===(c=l.block_tags)||void 0===c?void 0:c.destination_table)}),[r,t]);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(h.Z,{p:3,children:[t&&(0,U.jsx)(h.Z,{mb:3,children:(0,U.jsxs)(f.ZP,{alignItems:"center",children:[(0,U.jsx)(K.Z,{block:!0,onClick:function(){return i.push("/pipelines/".concat(r.pipeline_uuid,"/syncs?pipeline_run_id=").concat(r.id))},preventDefault:!0,children:(0,U.jsxs)(f.ZP,{alignItems:"center",children:[(0,U.jsx)(x.Xd,{default:!0,size:1.5*I.iI}),(0,U.jsx)(h.Z,{mr:1}),(0,U.jsx)(g.ZP,{default:!0,children:"Syncs"})]})}),(0,U.jsx)(h.Z,{mx:1,children:(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:"/"})}),(0,U.jsx)(g.ZP,{bold:!0,monospace:!0,children:t})]})}),(0,U.jsxs)(f.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,U.jsx)(h.Z,{mr:2,my:1,children:(0,U.jsx)(v.Z,{level:5,muted:!r,children:k})}),r&&(0,U.jsx)(J.Z,{onClick:function(){return i.push("/pipelines/".concat(r.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(r.id))},small:!0,children:"Logs"})]}),(0,U.jsx)(h.Z,{mt:2,children:O}),r&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(h.Z,{mt:3,children:(0,U.jsxs)(f.ZP,{justifyContent:"space-between",children:[(0,U.jsxs)("div",{children:[(0,U.jsx)(g.ZP,{bold:!0,large:!0,muted:!0,children:"Runtime"}),(0,U.jsxs)(g.ZP,{headline:!0,children:[t&&[C.V.INITIAL,C.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&A,t&&![C.V.INITIAL,C.V.RUNNING].includes(null===P||void 0===P?void 0:P.status)&&(null===P||void 0===P?void 0:P.timeText),!t&&[p.VO.INITIAL,p.VO.RUNNING].includes(null===r||void 0===r?void 0:r.status)&&w,!t&&![p.VO.INITIAL,p.VO.RUNNING].includes(null===r||void 0===r?void 0:r.status)&&_]})]}),re]})}),Object.values(Y).length>=1&&(0,U.jsxs)(h.Z,{mt:3,children:[(0,U.jsx)(v.Z,{level:5,muted:!0,children:"Errors"}),Object.entries(Y).map((function(e,n){var r=(0,s.Z)(e,2),i=r[0],o=r[1];return(!t||t===i)&&(0,U.jsx)(h.Z,{mt:n>=1?1:0,children:Object.entries(o).map((function(e){var n=(0,s.Z)(e,2),r=n[0],t=n[1],o=t.error,l=t.errors,c=t.message,u=Array.isArray(o)?o.join(" "):o;return(0,U.jsxs)("div",{children:[(0,U.jsx)(h.Z,{mb:c||(null===l||void 0===l?void 0:l.length)>=1?2:0,children:(0,U.jsxs)(g.ZP,{monospace:!0,preWrap:!0,textOverflow:!0,children:[i,!!r&&(0,U.jsxs)(g.ZP,{inline:!0,monospace:!0,muted:!0,children:["\xa0(",r,")"]}),": ",(0,U.jsx)(g.ZP,{default:!0,inline:!0,monospace:!0,children:u&&(0,U.jsx)(H(),{children:u})})]})}),(0,U.jsx)(g.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:c}),l.map((function(e){return(0,U.jsx)(g.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:e},e)}))]},"".concat(i,"-").concat(r))}))},i)}))]})]})]}),r&&!t&&(0,U.jsx)(h.Z,{my:3,children:te}),r&&t&&(0,U.jsxs)(U.Fragment,{children:[le&&(0,U.jsx)(h.Z,{my:3,children:(0,U.jsxs)(h.Z,{px:3,children:[(0,U.jsx)(v.Z,{level:5,children:"Table name"}),(0,U.jsx)(h.Z,{mt:1,children:(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:le})})]})}),ie&&(0,U.jsxs)(h.Z,{my:3,children:[(0,U.jsx)(h.Z,{px:3,children:(0,U.jsx)(v.Z,{level:5,children:"Bookmarks"})}),(0,U.jsx)(h.Z,{px:1,children:ie})]}),oe&&(0,U.jsxs)(h.Z,{my:3,children:[(0,U.jsx)(h.Z,{px:3,children:(0,U.jsx)(v.Z,{level:5,children:"Sample row"})}),(0,U.jsx)(h.Z,{px:1,children:oe})]})]})]})},ee=r(82531),ne=r(59920),re=r(33766),te=r(59e3);function ie(e){var n=e.pipeline,r=n.uuid,t=ee.ZP.pipeline_runs.list({_limit:20,_offset:0,pipeline_uuid:r},{refreshInterval:5e3}).data,i=(0,l.useMemo)((function(){return(null===t||void 0===t?void 0:t.pipeline_runs)||[]}),[t]),o=(0,te.iV)(),u=(0,l.useState)(null),s=u[0],a=u[1],d=(0,l.useState)(null),f=d[0],v=d[1],p=(0,l.useState)(null),h=p[0],m=p[1];(0,l.useEffect)((function(){null!==o&&void 0!==o&&o.pipeline_run_id?m(null===i||void 0===i?void 0:i.find((function(e){return e.id===Number(o.pipeline_run_id)}))):h&&m(null),null!==o&&void 0!==o&&o.stream?v(o.stream):f&&v(null)}),[i,o,h,f]);var g=(0,l.useCallback)((function(){var e=h?S(h):[];return(0,U.jsx)($,{onClickRow:function(n){var r=e[n];(0,re.u7)({stream:f===r?null:r})},pipelineRun:h,selectedStream:f})}),[h,f]),b=(0,l.useMemo)((function(){var e="/pipelines/".concat(r,"/syncs");h&&(e="".concat(e,"?pipeline_run_id=").concat(h.id));var n=[{label:function(){return"Syncs"},linkProps:f?{as:e,href:"/pipelines/[pipeline]/syncs"}:null}];return f&&n.push({label:function(){return f}}),n}),[r,h,f]);return(0,U.jsx)(c.Z,{breadcrumbs:b,buildSidekick:g,errors:s,pageName:ne.M.SYNCS,pipeline:n,setErrors:a,title:function(e){var n=e.name;return"".concat(n," syncs")},uuid:"".concat(ne.M.SYNCS,"_").concat(r),children:i.map((function(e){var n=(null===h||void 0===h?void 0:h.id)===e.id;return(0,U.jsx)(z,{onSelect:function(e){return(0,re.u7)({pipeline_run_id:e,stream:null})},pipelineRun:e,selected:n},e.id)}))})}ie.getInitialProps=function(){var e=(0,t.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:r}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var oe=(0,u.Z)(ie)},33766:function(e,n,r){"use strict";r.d(n,{O2:function(){return d},g_:function(){return v},u7:function(){return f}});var t=r(75582),i=r(82394),o=r(34376),l=r.n(o),c=r(59e3),u=r(24224);function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d="_offset";function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.preserveParams,i=n.pushHistory,o=n.replaceParams,u=(0,c.iV)(),s={};r&&r.forEach((function(e){u[e]&&(s[e]=u[e])}));var d,f=o?s:u;d=window.location.pathname;var v=i?l().push:l().replace,p=a(a({},f),e);Object.entries(e).forEach((function(e){var n=(0,t.Z)(e,2),r=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete p[r]}));var h=(0,c.uM)(p);h.length>=1&&(h="?".concat(h));var m="".concat(d.split("?")[0]).concat(h),g=l().router.basePath;return g&&m.startsWith(g)&&(m=m.replace(g,"")),v(l().router.pathname,m,{shallow:!0})}function v(e,n,r){var i=r.addingMultipleValues,o=r.isList,l=r.itemsPerPage,c=r.pushHistory,s=void 0!==c&&c,v=r.resetLimitParams,p=a({},e);i?Object.entries(n).forEach((function(e){var n=(0,t.Z)(e,2),r=n[0],i=n[1];if(Array.isArray(i)){var o="".concat(r,"[]");p[o]=i.map(String)}})):o?Object.entries(n).forEach((function(e){var n=(0,t.Z)(e,2),r=n[0],i=n[1],o=String(i),l="".concat(r,"[]"),c=p[l];c&&Array.isArray(c)?(c=c.map(String)).includes(o)?p[l]=(0,u.Od)(c,(function(e){return e===o})):p[l]=c.concat(o):p[l]=[o]})):p=a(a({},p),n),v&&(p._limit=l||20,p[d]=0),f(p,{pushHistory:s})}},90211:function(e,n,r){"use strict";r.d(n,{RA:function(){return a},kC:function(){return d},vg:function(){return b},kE:function(){return I},Mp:function(){return f},Pb:function(){return u},HW:function(){return j},wX:function(){return v},x6:function(){return p},_6:function(){return h},zf:function(){return x},Y6:function(){return y},wE:function(){return N},J3:function(){return m},We:function(){return s},QV:function(){return Z},C5:function(){return g}});var t=r(75582),i=r(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],l=(r(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),c=r(24224);function u(e){if(!e)return!1;try{JSON.parse(e)}catch(n){return!1}return!0}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return e.split(" ").join(n)}function a(e){return e.split(" ").join("_")}function d(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*e)}function v(e){return e.charAt(0).toLowerCase()+e.slice(1)}function p(e){if(null===e||"undefined"===typeof e)return"";var n=e.toString().split("."),r=(0,t.Z)(n,2),i=r[0],o=r[1],l=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(l,".").concat(o):l}function h(e,n){var r,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n,o=void 0!==i&&null!==i;if(o||(i=2),1===i)r=e;else{var l=e.length,c=e[l-1];r="y"===c&&"day"!==e?"".concat(e.slice(0,l-1),"ies"):"".concat(e,"s"===c?"es":"s")}if(o){var u=t?p(i):i;return"".concat(u," ").concat(r)}return r}function m(e){return null===e||void 0===e?void 0:e.replace(/_/g," ")}function g(e){var n=e.length;return"ies"===e.slice(n-3,n)?"".concat(e.slice(0,n-3),"y"):"es"===e.slice(n-2,n)&&"ces"!==e.slice(n-3,n)?e.slice(0,n-2):e.slice(0,n-1)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d(m(e.toLowerCase()))}function x(e){var n,r=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return r.forEach((function(i,o){if(!n){var l=(0,t.Z)(i,2),c=l[0],u=l[1],s=r.slice(0,o).reduce((function(e,n){return e*Number(n[1])}),1);e<Number(u)*s&&(n=h(c,Math.round(e/s)))}})),n}function j(e){return"undefined"!==typeof e&&null!==e&&!isNaN(e)}function Z(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=Math.pow(10,n);return Math.round((e||0)*r)/r}function y(){return"".concat((0,c.mp)(o)," ").concat((0,c.mp)(l))}function I(e){return null===e||void 0===e?void 0:e.toLowerCase().replace(/\W+/g,"_")}function N(e){var n,r=e.split(i.sep),t=r[r.length-1].split(".");return n=1===t.length?t[0]:t.slice(0,-1).join("."),r.slice(0,r.length-1).concat(n).join(i.sep)}},59416:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/syncs",function(){return r(89745)}])}},function(e){e.O(0,[844,9902,1424,1005,7815,547,9774,2888,179],(function(){return n=59416,e(e.s=n);var n}));var n=e.O();_N_E=n}]);