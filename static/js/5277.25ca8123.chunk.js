"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5277,4801,7182,9563,1944,7658,39,2420],{54767:(e,r,t)=>{t.d(r,{x:()=>l});var n=t(7552),a=t(24979),s=t(74795),o=t(89301),i=t(69500);function c(e){return e.substring(2).toLowerCase()}function l(e){const{children:r,disableReactTree:t=!1,mouseEvent:l="onClick",onClickAway:u,touchEvent:d="onTouchEnd"}=e,m=n.useRef(!1),v=n.useRef(null),h=n.useRef(!1),f=n.useRef(!1);n.useEffect((()=>(setTimeout((()=>{h.current=!0}),0),()=>{h.current=!1})),[]);const g=(0,a.A)(r.ref,v),p=(0,s.A)((e=>{const r=f.current;f.current=!1;const n=(0,o.A)(v.current);if(!h.current||!v.current||"clientX"in e&&function(e,r){return r.documentElement.clientWidth<e.clientX||r.documentElement.clientHeight<e.clientY}(e,n))return;if(m.current)return void(m.current=!1);let a;a=e.composedPath?e.composedPath().indexOf(v.current)>-1:!n.documentElement.contains(e.target)||v.current.contains(e.target),a||!t&&r||u(e)})),A=e=>t=>{f.current=!0;const n=r.props[e];n&&n(t)},b={ref:g};return!1!==d&&(b[d]=A(d)),n.useEffect((()=>{if(!1!==d){const e=c(d),r=(0,o.A)(v.current),t=()=>{m.current=!0};return r.addEventListener(e,p),r.addEventListener("touchmove",t),()=>{r.removeEventListener(e,p),r.removeEventListener("touchmove",t)}}}),[p,d]),!1!==l&&(b[l]=A(l)),n.useEffect((()=>{if(!1!==l){const e=c(l),r=(0,o.A)(v.current);return r.addEventListener(e,p),()=>{r.removeEventListener(e,p)}}}),[p,l]),(0,i.jsx)(n.Fragment,{children:n.cloneElement(r,b)})}},59705:(e,r,t)=>{t.d(r,{A:()=>E});var n=t(83673),a=t(6614),s=t(7552),o=t(93878),i=t(60827),c=t(64761),l=t(15622),u=t(31049),d=t(51148),m=t(72489),v=t(69500);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,p,A,b=e=>e;const k=(0,c.i7)(f||(f=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,c.i7)(g||(g=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),x=(0,d.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.A)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,a.A)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.AH)(p||(p=b`
      animation: ${0} 1.4s linear infinite;
    `),k))),S=(0,d.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),y=(0,d.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,l.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,a.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.AH)(A||(A=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w))),E=s.forwardRef((function(e,r){const t=(0,u.A)({props:e,name:"MuiCircularProgress"}),{className:s,color:c="primary",disableShrink:d=!1,size:f=40,style:g,thickness:p=3.6,value:A=0,variant:b="indeterminate"}=t,k=(0,n.A)(t,h),w=(0,a.A)({},t,{color:c,disableShrink:d,size:f,thickness:p,value:A,variant:b}),E=(e=>{const{classes:r,variant:t,color:n,disableShrink:a}=e,s={root:["root",t,`color${(0,l.A)(n)}`],svg:["svg"],circle:["circle",`circle${(0,l.A)(t)}`,a&&"circleDisableShrink"]};return(0,i.A)(s,m.b,r)})(w),R={},C={},M={};if("determinate"===b){const e=2*Math.PI*((44-p)/2);R.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(A),R.strokeDashoffset=`${((100-A)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,v.jsx)(x,(0,a.A)({className:(0,o.A)(E.root,s),style:(0,a.A)({width:f,height:f},C,g),ownerState:w,ref:r,role:"progressbar"},M,k,{children:(0,v.jsx)(S,{className:E.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,v.jsx)(y,{className:E.circle,style:R,ownerState:w,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})}))}))},72489:(e,r,t)=>{t.d(r,{A:()=>o,b:()=>s});var n=t(55549),a=t(9577);function s(e){return(0,a.Ay)("MuiCircularProgress",e)}const o=(0,n.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},17515:(e,r,t)=>{t.d(r,{A:()=>h});var n=t(83673),a=t(6614),s=t(7552),o=t(93878),i=t(60827),c=t(31049),l=t(51148),u=t(89663),d=t(69500);const m=["className","component","disableGutters","variant"],v=(0,l.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})((({theme:e,ownerState:r})=>(0,a.A)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===r.variant&&{minHeight:48})),(({theme:e,ownerState:r})=>"regular"===r.variant&&e.mixins.toolbar)),h=s.forwardRef((function(e,r){const t=(0,c.A)({props:e,name:"MuiToolbar"}),{className:s,component:l="div",disableGutters:h=!1,variant:f="regular"}=t,g=(0,n.A)(t,m),p=(0,a.A)({},t,{component:l,disableGutters:h,variant:f}),A=(e=>{const{classes:r,disableGutters:t,variant:n}=e,a={root:["root",!t&&"gutters",n]};return(0,i.A)(a,u.U,r)})(p);return(0,d.jsx)(v,(0,a.A)({as:l,className:(0,o.A)(A.root,s),ref:r,ownerState:p},g))}))},89663:(e,r,t)=>{t.d(r,{A:()=>o,U:()=>s});var n=t(55549),a=t(9577);function s(e){return(0,a.Ay)("MuiToolbar",e)}const o=(0,n.A)("MuiToolbar",["root","gutters","regular","dense"])}}]);
//# sourceMappingURL=5277.25ca8123.chunk.js.map