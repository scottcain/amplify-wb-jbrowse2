"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2838,8177],{21846:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(41867),s=r(62877),o=r.n(s),a=r(7229),i=r(3762),u=r(44047),c=r(80838);function l(e){let{value:t}=e;const[r,s]=(0,n.useState)(!1),[a,i]=(0,n.useState)(!1),u=String(t);return u.length>100?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{type:"button",onClick:()=>{o()(u),i(!0),setTimeout((()=>{i(!1)}),700)},children:a?"Copied to clipboard":"Copy"}),(0,c.jsx)("button",{type:"button",onClick:()=>s((e=>!e)),children:r?"Show less":"Show more"}),(0,c.jsx)("div",{children:r?u:"".concat(u.slice(0,100),"...")})]}):(0,c.jsx)("div",{children:u})}function d(e){return(0,c.jsx)(u.BaseAttributes,{...e,formatter:e=>(0,c.jsx)(l,{value:e})})}const f=(0,i.observer)((e=>{let{model:t}=e;const{feature1:r,feature2:n}=JSON.parse(JSON.stringify(t.featureData));return(0,c.jsxs)(a.Z,{"data-testid":"alignment-side-drawer",children:[(0,c.jsx)(u.BaseCoreDetails,{title:"Feature 1",feature:r}),(0,c.jsx)(u.BaseCoreDetails,{title:"Feature 2",feature:n}),(0,c.jsx)(d,{feature:r}),(0,c.jsx)(d,{feature:n})]})}))},20875:(e,t,r)=>{r.d(t,{d:()=>c});var n=r(41867),s=r(32407),o=r(95809),a=r(89293),i=r(80838);function u(e){return e.substring(2).toLowerCase()}function c(e){const{children:t,disableReactTree:r=!1,mouseEvent:c="onClick",onClickAway:l,touchEvent:d="onTouchEnd"}=e,f=n.useRef(!1),m=n.useRef(null),v=n.useRef(!1),p=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{v.current=!0}),0),()=>{v.current=!1})),[]);const g=(0,s.Z)(t.ref,m),b=(0,o.Z)((e=>{const t=p.current;p.current=!1;const n=(0,a.Z)(m.current);if(!v.current||!m.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n))return;if(f.current)return void(f.current=!1);let s;s=e.composedPath?e.composedPath().indexOf(m.current)>-1:!n.documentElement.contains(e.target)||m.current.contains(e.target),s||!r&&t||l(e)})),h=e=>r=>{p.current=!0;const n=t.props[e];n&&n(r)},Z={ref:g};return!1!==d&&(Z[d]=h(d)),n.useEffect((()=>{if(!1!==d){const e=u(d),t=(0,a.Z)(m.current),r=()=>{f.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,b),t.removeEventListener("touchmove",r)}}}),[b,d]),!1!==c&&(Z[c]=h(c)),n.useEffect((()=>{if(!1!==c){const e=u(c),t=(0,a.Z)(m.current);return t.addEventListener(e,b),()=>{t.removeEventListener(e,b)}}}),[b,c]),(0,i.jsx)(n.Fragment,{children:n.cloneElement(t,Z)})}},69625:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(31461),s=r(7896),o=r(41867),a=r(66184),i=r(92705),u=r(90293),c=r(75693),l=r(59968),d=r(80838);const f=["className","component","disableGutters","variant"],m=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===r.variant&&{minHeight:48})}),(e=>{let{theme:t,ownerState:r}=e;return"regular"===r.variant&&t.mixins.toolbar})),v=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiToolbar"}),{className:o,component:c="div",disableGutters:v=!1,variant:p="regular"}=r,g=(0,n.Z)(r,f),b=(0,s.Z)({},r,{component:c,disableGutters:v,variant:p}),h=(e=>{const{classes:t,disableGutters:r,variant:n}=e,s={root:["root",!r&&"gutters",n]};return(0,i.Z)(s,l.N,t)})(b);return(0,d.jsx)(m,(0,s.Z)({as:c,className:(0,a.Z)(h.root,o),ref:t,ownerState:b},g))}))},59968:(e,t,r)=>{r.d(t,{N:()=>o,Z:()=>a});var n=r(70101),s=r(88498);function o(e){return(0,s.Z)("MuiToolbar",e)}const a=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=2838.f8853e86.chunk.js.map