(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5912],{43032:function(t,e,n){"use strict";n.d(e,{Cl:function(){return c},Nk:function(){return a},ZG:function(){return u}});var r=n(38626),i=n(23831),o=n(49125),u=1.5*o.iI,c=1*u+o.iI/2,a=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(t){return"\n      background-color: ".concat((t.theme.interactive||i.Z.interactive).hoverBackground,";\n    ")}))},92953:function(t,e,n){"use strict";n.d(e,{CD:function(){return c},NU:function(){return o},a_:function(){return r},hu:function(){return u}});var r,i=n(23831);!function(t){t.BLOCK_RUNS="block_runs",t.BLOCK_RUNTIME="block_runtime",t.PIPELINE_RUNS="pipeline_runs"}(r||(r={}));var o=[i.Z.accent.warning,i.Z.background.success,i.Z.accent.negative,i.Z.content.active,i.Z.interactive.linkPrimary],u=["cancelled","completed","failed","initial","running"],c=-50},87465:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});n(82684);var r=n(34376),i=n(87372),o=n(60547),u=n(86673),c=n(19711),a=n(2850),l=n(38626),s=n(23831),d=n(49125),f=l.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],d.iI,d.tr,(function(t){return t.selected&&"\n    background-color: ".concat((t.theme.interactive||s.Z.interactive).checked,";\n  ")}),(function(t){return!t.selected&&"\n    cursor: pointer;\n  "})),p=n(92953),h=n(59920),m=n(28598);var v=function(t){var e=t.breadcrumbs,n=t.children,l=t.errors,s=t.monitorType,v=t.pipeline,b=t.setErrors,g=t.subheader,x=(0,r.useRouter)();return(0,m.jsx)(o.Z,{before:(0,m.jsxs)(a.M,{children:[(0,m.jsx)(u.Z,{p:d.cd,children:(0,m.jsx)(i.Z,{level:4,muted:!0,children:"Insights"})}),(0,m.jsx)(f,{onClick:function(t){t.preventDefault(),x.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors"))},selected:p.a_.PIPELINE_RUNS==s,children:(0,m.jsx)(c.ZP,{children:"Pipeline runs"})}),(0,m.jsx)(f,{onClick:function(t){t.preventDefault(),x.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors/block-runs"))},selected:p.a_.BLOCK_RUNS==s,children:(0,m.jsx)(c.ZP,{children:"Block runs"})}),(0,m.jsx)(f,{onClick:function(t){t.preventDefault(),x.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors/block-runtime"))},selected:p.a_.BLOCK_RUNTIME==s,children:(0,m.jsx)(c.ZP,{children:"Block runtime"})})]}),breadcrumbs:e,errors:l,pageName:h.M.MONITOR,pipeline:v,setErrors:b,subheader:g,uuid:"pipeline/monitor",children:n})}},2850:function(t,e,n){"use strict";n.d(e,{M:function(){return u},W:function(){return o}});var r=n(38626),i=n(3055),o=34*n(49125).iI,u=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},67591:function(t,e,n){"use strict";var r=n(26304),i=n(82394),o=n(21831),u=(n(82684),n(84969)),c=n(90948),a=n(81354),l=n(67778),s=n(29989),d=n(17066),f=n(29179),p=n(65376),h=n(48072),m=n(98677),v=n(84181),b=n(24903),g=n(67971),x=n(26226),y=n(19711),j=n(52359),Z=n(23831),O=n(73942),k=n(2005),w=n(49125),_=n(344),P=n(28598),M=["height","width","xAxisLabel","yAxisLabel"];function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t){var e=t.backgroundColor,n=t.colors,r=t.data,i=t.getXValue,g=(t.getYValue,t.height),x=t.keys,j=t.margin,w=t.numYTicks,M=t.showLegend,D=t.tooltipLeftOffset,N=void 0===D?0:D,T=t.width,C=t.xLabelFormat,E=t.yLabelFormat,I=(0,f.Z)(),L=I.hideTooltip,Y=I.showTooltip,A=I.tooltipData,B=I.tooltipLeft,F=I.tooltipOpen,R=I.tooltipTop,H=T-(j.left+j.right),K=g-(j.bottom+j.top),U=r.reduce((function(t,e){var n=e,r=x.reduce((function(t,e){return Number(n[e])&&(t+=Number(n[e])),t}),0);return t.push(r),t}),[]),z=(0,m.Z)({domain:r.map(i),padding:.4,range:[0,H],round:!1}),W=(0,v.Z)({domain:[0,Math.max.apply(Math,(0,o.Z)(U))],range:[K,0],round:!0}),V=(0,b.Z)({domain:x,range:n});return(0,P.jsxs)("div",{style:{position:"relative",zIndex:2},children:[(0,P.jsxs)("svg",{height:g,width:T,children:[(0,P.jsx)("rect",{fill:e||Z.Z.background.chartBlock,height:g,rx:14,width:T,x:0,y:0}),(0,P.jsx)(l.Z,{height:K,left:j.left,scale:W,stroke:"black",strokeOpacity:.2,top:j.top,width:H}),(0,P.jsx)(s.Z,{left:j.left,top:j.top,children:(0,P.jsx)(a.Z,{color:V,data:r,keys:x,value:function(t,e){return t[e]||0},x:i,xScale:z,yScale:W,children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,P.jsx)("rect",{fill:e.color,height:e.height,onMouseLeave:L,onMouseMove:function(t){var n=(0,h.Z)(t),r=e.x+e.width/2+N;Y({tooltipData:e,tooltipLeft:r,tooltipTop:(null===n||void 0===n?void 0:n.y)+10})},width:e.width,x:e.x,y:e.y},"bar-stack-".concat(t.index,"-").concat(e.index))}))}))}})}),(0,P.jsx)(u.Z,{hideTicks:!0,left:j.left,numTicks:w,scale:W,stroke:Z.Z.content.muted,tickFormat:function(t){return E?E(t):(0,_.P5)(t)},tickLabelProps:function(){return{fill:Z.Z.content.muted,fontFamily:k.ry,fontSize:11,textAnchor:"end",transform:"translate(0,2.5)"}},top:j.top}),(0,P.jsx)(c.Z,{hideTicks:!0,left:j.left,scale:z,stroke:Z.Z.content.muted,tickFormat:C,tickLabelProps:function(){return{fill:Z.Z.content.muted,fontFamily:k.ry,fontSize:11,textAnchor:"middle"}},top:K+j.top})]}),M&&(0,P.jsx)("div",{style:{display:"flex",fontSize:"14px",justifyContent:"center",position:"absolute",top:j.top/2-10,width:"100%"},children:(0,P.jsx)(d.Z,{direction:"row",labelMargin:"0 15px 0 0",scale:V})}),F&&A&&(0,P.jsxs)(p.Z,{left:B,style:S(S({},p.j),{},{backgroundColor:Z.Z.background.page,borderRadius:"".concat(O.TR,"px"),padding:".3rem .4rem"}),top:R,children:[(0,P.jsx)(y.ZP,{bold:!0,color:V(A.key),children:A.key}),(0,P.jsx)(y.ZP,{children:A.bar.data[A.key]}),(0,P.jsx)(y.ZP,{children:i(A.bar.data)})]})]})}e.Z=function(t){var e=t.height,n=t.width,i=t.xAxisLabel,o=t.yAxisLabel,u=(0,r.Z)(t,M);return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{style:{height:e,marginBottom:w.iI,width:n},children:[o&&(0,P.jsx)(g.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,P.jsx)(j.Z,{children:(0,P.jsx)(y.ZP,{center:!0,muted:!0,small:!0,children:o})})}),(0,P.jsx)("div",{style:{height:e,width:o?0===n?n:n-28:n},children:(0,P.jsx)(x.Z,{children:function(t){var e=t.height,n=t.width;return(0,P.jsx)(N,S(S({},u),{},{height:e,width:n}))}})}),i&&(0,P.jsx)("div",{style:{paddingLeft:o?36:0,paddingTop:4},children:(0,P.jsx)(y.ZP,{center:!0,muted:!0,small:!0,children:i})})]})})}},52359:function(t,e,n){"use strict";var r=n(38626).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);e.Z=r},344:function(t,e,n){"use strict";n.d(e,{P5:function(){return i},Vs:function(){return o}});n(90211);var r=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function i(t){return"number"!==typeof t?t:t>=1e4?r.format(t):t.toString()}function o(t,e,n){var r,i;if("undefined"===typeof t||"undefined"===typeof e)return 0;var o=null===t||void 0===t||null===(r=t(e,n))||void 0===r||null===(i=r.props)||void 0===i?void 0:i.children;return(Array.isArray(o)?o:[o]).join("").length}},50094:function(t,e,n){"use strict";n.r(e);var r=n(77837),i=n(75582),o=n(82394),u=n(38860),c=n.n(u),a=n(82684),l=n(92083),s=n.n(l),d=n(38626),f=n(67591),p=n(16634),h=n(67971),m=n(87372),v=n(87465),b=n(41788),g=n(55378),x=n(86673),y=n(82531),j=n(23831),Z=n(92953),O=n(43032),k=n(44162),w=n(42305),_=n(24224),P=n(28598);function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=t.pipeline,n=(0,a.useContext)(d.ThemeContext),r=(0,a.useState)(null),u=r[0],c=r[1],l=e.uuid,b=y.ZP.pipelines.detail(l,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,M=(0,a.useMemo)((function(){return D(D({},null===b||void 0===b?void 0:b.pipeline),{},{uuid:l})}),[b,l]),S=y.ZP.pipeline_schedules.pipelines.list(l).data,N=(0,a.useMemo)((function(){return null===S||void 0===S?void 0:S.pipeline_schedules}),[S]),T=(0,a.useMemo)((function(){return(0,_.HK)(null===M||void 0===M?void 0:M.blocks,(function(t){return t.uuid}))||{}}),[M]),C={pipeline_uuid:l};(u||0===u)&&(C.pipeline_schedule_id=Number(u));var E=y.ZP.monitor_stats.detail("block_run_count",C),I=E.data,L=E.mutate,Y=((null===I||void 0===I?void 0:I.monitor_stat)||{}).stats,A=(0,a.useMemo)((function(){return(0,w.Y_)()}),[]),B=(0,a.useMemo)((function(){if(Y)return Object.entries(Y).reduce((function(t,e){var n=(0,i.Z)(e,2),r=n[0],u=n[1].data,c=A.map((function(t){return D({date:t},u[t]||{})}));return D(D({},t),{},(0,o.Z)({},r,c))}),{})}),[A,Y]),F=(0,a.useMemo)((function(){var t=[];return t.push({bold:!0,label:function(){return"Monitors"}}),t}),[]);return(0,P.jsx)(v.Z,{breadcrumbs:F,monitorType:Z.a_.BLOCK_RUNS,pipeline:M,subheader:(0,P.jsx)(h.ZP,{children:(0,P.jsxs)(g.Z,{backgroundColor:j.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(t){var e=t.target.value;"initial"!==e?(c(e),L(e)):(L(),c(null))},value:u||"initial",children:[(0,P.jsx)("option",{value:"initial",children:"All"}),N&&N.map((function(t){return(0,P.jsx)("option",{value:t.id,children:t.name},t.id)}))]})}),children:(0,P.jsx)(x.Z,{mx:2,children:B&&Object.entries(B).map((function(t){var e,r,o=(0,i.Z)(t,2),u=o[0],c=o[1];return(0,P.jsxs)(x.Z,{mt:3,children:[(0,P.jsxs)(h.ZP,{alignItems:"center",children:[(0,P.jsx)(x.Z,{mx:1,children:(0,P.jsx)(p.Z,{color:(0,k.qn)(null===(e=T[u])||void 0===e?void 0:e.type,{blockColor:null===(r=T[u])||void 0===r?void 0:r.color,theme:n}).accent,size:O.ZG,square:!0})}),(0,P.jsx)(m.Z,{level:4,children:u})]}),(0,P.jsx)(x.Z,{mt:1,children:(0,P.jsx)(f.Z,{colors:Z.NU,data:c,getXValue:function(t){return t.date},height:200,keys:Z.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:Z.CD,xLabelFormat:function(t){return s()(t).format("MMM DD")}})})]},u)}))})})}S.getInitialProps=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query.pipeline,t.abrupt("return",{pipeline:{uuid:n}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=(0,b.Z)(S)},42305:function(t,e,n){"use strict";n.d(e,{A5:function(){return x},AY:function(){return y},BP:function(){return g},JX:function(){return b},OC:function(){return d},Pc:function(){return j},Ro:function(){return Z},Tz:function(){return v},Y_:function(){return k},d$:function(){return m},jV:function(){return O},lJ:function(){return w},n1:function(){return p},s8:function(){return l},vk:function(){return o},yD:function(){return s}});var r,i,o,u=n(82394),c=n(92083),a=n.n(c);!function(t){t.TODAY="today",t.WEEK="week",t.MONTH="month"}(o||(o={}));var l=(r={},(0,u.Z)(r,o.TODAY,"today"),(0,u.Z)(r,o.WEEK,"last 7 days"),(0,u.Z)(r,o.MONTH,"last 30 days"),r),s=(i={},(0,u.Z)(i,o.TODAY,0),(0,u.Z)(i,o.WEEK,6),(0,u.Z)(i,o.MONTH,29),i),d="YYYY-MM-DD HH:mm:ss",f="YYYY-MM-DD HH:mm",p="YYYY-MM-DD",h="MMMM D, YYYY";function m(t,e){var n=e.dayAgo,r=e.includeSeconds,i=e.utcFormat,o=a()(t),u=f;return i&&(o=o.utc()),n&&(o=o.subtract(1,"days")),r&&(u=d),o.format(u)}function v(t){var e=m((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==t&&void 0!==t&&t.dateObj?new Date(e):e}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a().unix(t).format(null!==e&&void 0!==e&&e.withSeconds?d:f)}function g(t,e,n){return a()(t).utc().hours(+e).minutes(+n).format()}function x(t){return a()(t).unix()}function y(t,e,n,r){var i="".concat(t.toISOString().split("T")[0]," ").concat(e,":").concat(n);return r?"".concat(i,":").concat(r):i}function j(t){var e=a().unix(+t).utc();return{date:e.toDate(),hour:String(e.hour()),minute:String(e.minute())}}function Z(t,e){var n=a().utc(),r=a().utc();null!==e&&void 0!==e&&e.localTime&&(n=a()().local(),r=a()().local());var i=(n=n.subtract(t,"days")).format(h),o=r.format(h);return null!==e&&void 0!==e&&e.endDateOnly?o:"".concat(i," - ").concat(o)}function O(t,e){var n=null!==e&&void 0!==e&&e.localTime?a()().local():a().utc();if(t===o.WEEK){var r=s[o.WEEK];n=n.subtract(r,"days")}else if(t===o.MONTH){var i=s[o.MONTH];n=n.subtract(i,"days")}return null!==e&&void 0!==e&&e.isoString?n.startOf("day").toISOString():n.startOf("day").format(d)}function k(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90,e=new Date,n=[],r=0;r<t;r++)n.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return n}function w(t){return t.padStart(2,"0")}},83542:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runs",function(){return n(50094)}])}},function(t){t.O(0,[844,9902,5896,2714,9404,1424,1005,6422,547,9774,2888,179],(function(){return e=83542,t(t.s=e);var e}));var e=t.O();_N_E=e}]);