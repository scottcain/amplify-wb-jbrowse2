"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[542],{10542:function(r,n,e){e.r(n),e.d(n,{default:function(){return A},getLinearProgressUtilityClass:function(){return h},linearProgressClasses:function(){return j}});var a=e(71171),t=e(31461),o=e(7896),i=e(96902),s=e(37032),c=e(73674),l=e(80553),u=e(16644),f=e(70378),d=e(88636),b=e(2252),m=e(53068),v=e(74732),p=e(61235);function h(r){return(0,p.Z)("MuiLinearProgress",r)}var g,Z,w,y,C,k,P,S,x,B,I,L,j=(0,v.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]),q=e(29938),M=["className","color","value","valueBuffer","variant"],N=(0,l.F4)(P||(P=g||(g=(0,a.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),R=(0,l.F4)(S||(S=Z||(Z=(0,a.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),z=(0,l.F4)(x||(x=w||(w=(0,a.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),_=function(r,n){return"inherit"===n?"currentColor":r.vars?r.vars.palette.LinearProgress["".concat(n,"Bg")]:"light"===r.palette.mode?(0,u.$n)(r.palette[n].main,.62):(0,u._j)(r.palette[n].main,.5)},D=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(r,n){var e=r.ownerState;return[n.root,n["color".concat((0,f.Z)(e.color))],n[e.variant]]}})((function(r){var n=r.ownerState,e=r.theme;return(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:_(e,n.color)},"inherit"===n.color&&"buffer"!==n.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===n.variant&&{backgroundColor:"transparent"},"query"===n.variant&&{transform:"rotate(180deg)"})})),F=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(r,n){var e=r.ownerState;return[n.dashed,n["dashedColor".concat((0,f.Z)(e.color))]]}})((function(r){var n=r.ownerState,e=r.theme,a=_(e,n.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===n.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(a," 0%, ").concat(a," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(B||(B=y||(y=(0,a.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),z)),O=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(r,n){var e=r.ownerState;return[n.bar,n["barColor".concat((0,f.Z)(e.color))],("indeterminate"===e.variant||"query"===e.variant)&&n.bar1Indeterminate,"determinate"===e.variant&&n.bar1Determinate,"buffer"===e.variant&&n.bar1Buffer]}})((function(r){var n=r.ownerState,e=r.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===n.color?"currentColor":(e.vars||e).palette[n.color].main},"determinate"===n.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===n.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(r){var n=r.ownerState;return("indeterminate"===n.variant||"query"===n.variant)&&(0,l.iv)(I||(I=C||(C=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),N)})),X=(0,b.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(r,n){var e=r.ownerState;return[n.bar,n["barColor".concat((0,f.Z)(e.color))],("indeterminate"===e.variant||"query"===e.variant)&&n.bar2Indeterminate,"buffer"===e.variant&&n.bar2Buffer]}})((function(r){var n=r.ownerState,e=r.theme;return(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==n.variant&&{backgroundColor:"inherit"===n.color?"currentColor":(e.vars||e).palette[n.color].main},"inherit"===n.color&&{opacity:.3},"buffer"===n.variant&&{backgroundColor:_(e,n.color),transition:"transform .".concat(4,"s linear")})}),(function(r){var n=r.ownerState;return("indeterminate"===n.variant||"query"===n.variant)&&(0,l.iv)(L||(L=k||(k=(0,a.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),R)})),A=i.forwardRef((function(r,n){var e=(0,m.Z)({props:r,name:"MuiLinearProgress"}),a=e.className,i=e.color,l=void 0===i?"primary":i,u=e.value,b=e.valueBuffer,v=e.variant,p=void 0===v?"indeterminate":v,g=(0,t.Z)(e,M),Z=(0,o.Z)({},e,{color:l,variant:p}),w=function(r){var n=r.classes,e=r.variant,a=r.color,t={root:["root","color".concat((0,f.Z)(a)),e],dashed:["dashed","dashedColor".concat((0,f.Z)(a))],bar1:["bar","barColor".concat((0,f.Z)(a)),("indeterminate"===e||"query"===e)&&"bar1Indeterminate","determinate"===e&&"bar1Determinate","buffer"===e&&"bar1Buffer"],bar2:["bar","buffer"!==e&&"barColor".concat((0,f.Z)(a)),"buffer"===e&&"color".concat((0,f.Z)(a)),("indeterminate"===e||"query"===e)&&"bar2Indeterminate","buffer"===e&&"bar2Buffer"]};return(0,c.Z)(t,h,n)}(Z),y=(0,d.Z)(),C={},k={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==u){C["aria-valuenow"]=Math.round(u),C["aria-valuemin"]=0,C["aria-valuemax"]=100;var P=u-100;"rtl"===y.direction&&(P=-P),k.bar1.transform="translateX(".concat(P,"%)")}else 0;if("buffer"===p)if(void 0!==b){var S=(b||0)-100;"rtl"===y.direction&&(S=-S),k.bar2.transform="translateX(".concat(S,"%)")}else 0;return(0,q.jsxs)(D,(0,o.Z)({className:(0,s.Z)(w.root,a),ownerState:Z,role:"progressbar"},C,{ref:n},g,{children:["buffer"===p?(0,q.jsx)(F,{className:w.dashed,ownerState:Z}):null,(0,q.jsx)(O,{className:w.bar1,ownerState:Z,style:k.bar1}),"determinate"===p?null:(0,q.jsx)(X,{className:w.bar2,ownerState:Z,style:k.bar2})]}))}))}}]);
//# sourceMappingURL=542.adbbaed5.chunk.js.map