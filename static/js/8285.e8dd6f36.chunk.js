"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8285],{80763:(e,t,r)=>{r.d(t,{Z:()=>l,s:()=>n});var o=r(41867);const a=o.createContext({});function n(){return o.useContext(a)}const l=a},83915:(e,t,r)=>{r.d(t,{Z:()=>S});var o=r(7896),a=r(31461),n=r(41867),l=r(66184),i=r(92705),s=r(75693),c=r(90293),p=r(17886),d=r(80838);const m=(0,p.Z)((0,d.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),v=(0,p.Z)((0,d.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var b,u=r(77081),Z=r(59070);const x=["active","className","completed","error","icon"],h=(0,s.ZP)(u.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,["&.".concat(Z.Z.completed)]:{color:(t.vars||t).palette.primary.main},["&.".concat(Z.Z.active)]:{color:(t.vars||t).palette.primary.main},["&.".concat(Z.Z.error)]:{color:(t.vars||t).palette.error.main}}})),f=(0,s.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})((e=>{let{theme:t}=e;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}})),S=n.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiStepIcon"}),{active:n=!1,className:s,completed:p=!1,error:u=!1,icon:S}=r,C=(0,a.Z)(r,x),L=(0,o.Z)({},r,{active:n,completed:p,error:u}),y=(e=>{const{classes:t,active:r,completed:o,error:a}=e,n={root:["root",r&&"active",o&&"completed",a&&"error"],text:["text"]};return(0,i.Z)(n,Z.M,t)})(L);if("number"===typeof S||"string"===typeof S){const e=(0,l.Z)(s,y.root);return u?(0,d.jsx)(h,(0,o.Z)({as:v,className:e,ref:t,ownerState:L},C)):p?(0,d.jsx)(h,(0,o.Z)({as:m,className:e,ref:t,ownerState:L},C)):(0,d.jsxs)(h,(0,o.Z)({className:e,ref:t,ownerState:L},C,{children:[b||(b=(0,d.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,d.jsx)(f,{className:y.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:L,children:S})]}))}return S}))},59070:(e,t,r)=>{r.d(t,{M:()=>n,Z:()=>l});var o=r(70101),a=r(88498);function n(e){return(0,a.Z)("MuiStepIcon",e)}const l=(0,o.Z)("MuiStepIcon",["root","active","completed","error","text"])},16698:(e,t,r)=>{r.d(t,{Z:()=>C});var o=r(31461),a=r(7896),n=r(41867),l=r(66184),i=r(92705),s=r(75693),c=r(90293),p=r(83915),d=r(58963),m=r(80763),v=r(36284),b=r(80838);const u=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Z=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.orientation]]}})((e=>{let{ownerState:t}=e;return(0,a.Z)({display:"flex",alignItems:"center",["&.".concat(v.Z.alternativeLabel)]:{flexDirection:"column"},["&.".concat(v.Z.disabled)]:{cursor:"default"}},"vertical"===t.orientation&&{textAlign:"left",padding:"8px 0"})})),x=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})((e=>{let{theme:t}=e;return(0,a.Z)({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),["&.".concat(v.Z.active)]:{color:(t.vars||t).palette.text.primary,fontWeight:500},["&.".concat(v.Z.completed)]:{color:(t.vars||t).palette.text.primary,fontWeight:500},["&.".concat(v.Z.alternativeLabel)]:{marginTop:16},["&.".concat(v.Z.error)]:{color:(t.vars||t).palette.error.main}})})),h=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})((()=>({flexShrink:0,display:"flex",paddingRight:8,["&.".concat(v.Z.alternativeLabel)]:{paddingRight:0}}))),f=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})((e=>{let{theme:t}=e;return{width:"100%",color:(t.vars||t).palette.text.secondary,["&.".concat(v.Z.alternativeLabel)]:{textAlign:"center"}}})),S=n.forwardRef((function(e,t){var r;const s=(0,c.Z)({props:e,name:"MuiStepLabel"}),{children:S,className:C,componentsProps:L={},error:y=!1,icon:w,optional:g,slotProps:M={},StepIconComponent:j,StepIconProps:N}=s,P=(0,o.Z)(s,u),{alternativeLabel:R,orientation:I}=n.useContext(d.Z),{active:k,disabled:z,completed:_,icon:A}=n.useContext(m.Z),H=w||A;let T=j;H&&!T&&(T=p.Z);const W=(0,a.Z)({},s,{active:k,alternativeLabel:R,completed:_,disabled:z,error:y,orientation:I}),F=(e=>{const{classes:t,orientation:r,active:o,completed:a,error:n,disabled:l,alternativeLabel:s}=e,c={root:["root",r,n&&"error",l&&"disabled",s&&"alternativeLabel"],label:["label",o&&"active",a&&"completed",n&&"error",l&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",o&&"active",a&&"completed",n&&"error",l&&"disabled",s&&"alternativeLabel"],labelContainer:["labelContainer",s&&"alternativeLabel"]};return(0,i.Z)(c,v.H,t)})(W),B=null!=(r=M.label)?r:L.label;return(0,b.jsxs)(Z,(0,a.Z)({className:(0,l.Z)(F.root,C),ref:t,ownerState:W},P,{children:[H||T?(0,b.jsx)(h,{className:F.iconContainer,ownerState:W,children:(0,b.jsx)(T,(0,a.Z)({completed:_,active:k,error:y,icon:H},N))}):null,(0,b.jsxs)(f,{className:F.labelContainer,ownerState:W,children:[S?(0,b.jsx)(x,(0,a.Z)({ownerState:W},B,{className:(0,l.Z)(F.label,null==B?void 0:B.className),children:S})):null,g]})]}))}));S.muiName="StepLabel";const C=S},68285:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o.Z,getStepLabelUtilityClass:()=>a.H,stepLabelClasses:()=>a.Z});var o=r(16698),a=r(36284)},36284:(e,t,r)=>{r.d(t,{H:()=>n,Z:()=>l});var o=r(70101),a=r(88498);function n(e){return(0,a.Z)("MuiStepLabel",e)}const l=(0,o.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"])},58963:(e,t,r)=>{r.d(t,{Z:()=>l,s:()=>n});var o=r(41867);const a=o.createContext({});function n(){return o.useContext(a)}const l=a}}]);
//# sourceMappingURL=8285.e8dd6f36.chunk.js.map