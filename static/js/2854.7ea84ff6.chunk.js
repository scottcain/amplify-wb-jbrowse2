"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2854,7776],{92854:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var a=r(66204),n=r(80846),o=r(43902),i=r(31211),l=r(38684),s=r(38186),c=r(49140),d=r(7724),m=r(41247),u=r(54378),h=r(16990),g=r(19633),p=r(5359),v=r(3418),f=r(55680),b=r(98313),x=r(19609),k=r(97776);const Z=(0,l.ZL)()((e=>({controls:{position:"absolute",borderRight:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`,left:0,top:0}}))),E=(0,n.observer)((function({model:e}){const{classes:t}=Z(),[r,n]=(0,a.useState)(null);return a.createElement("div",{className:t.controls},a.createElement(c.Z,{onClick:e.zoomOutButton,title:e.lockedFitToWindow?"unlock to zoom out":"zoom out",disabled:e.atMaxBpPerPx||e.lockedFitToWindow},a.createElement(m.Z,null)),a.createElement(c.Z,{onClick:e.zoomInButton,disabled:e.atMinBpPerPx,title:"zoom in"},a.createElement(u.Z,null)),a.createElement(c.Z,{onClick:e.rotateCounterClockwiseButton,title:"rotate counter-clockwise"},a.createElement(h.Z,null)),a.createElement(c.Z,{onClick:e.rotateClockwiseButton,title:"rotate clockwise"},a.createElement(g.Z,null)),a.createElement(c.Z,{onClick:e.toggleFitToWindowLock,title:e.lockedFitToWindow?"locked model to window size":"unlocked model to zoom further",disabled:e.tooSmallToLock},e.lockedFitToWindow?a.createElement(v.Z,null):a.createElement(p.Z,null)),a.createElement(c.Z,{onClick:e=>n(e.currentTarget)},a.createElement(b.Z,null)),e.hideTrackSelectorButton?null:a.createElement(c.Z,{onClick:e.activateTrackSelector,title:"Open track selector","data-testid":"circular_track_select"},a.createElement(x.GD,null)),r?a.createElement(d.Z,{anchorEl:r,menuItems:[{label:"Export SVG",icon:f.Z,onClick:()=>{(0,i.getSession)(e).queueDialog((t=>[k.default,{model:e,handleClose:t}]))}}],onMenuItemClick:(e,t)=>{t(),n(null)},open:Boolean(r),onClose:()=>n(null)}):null)}));var y=r(82051),S=r(93840),C=r(7146);const w=(0,l.ZL)()((e=>({importFormContainer:{padding:e.spacing(6)}}))),z=(0,n.observer)((({model:e})=>{const{classes:t}=w(),r=(0,i.getSession)(e),{error:n}=e,{assemblyNames:l,assemblyManager:s}=r,[c,d]=(0,a.useState)(l[0]),m=s.get(c),u=l.length?m?.error:"No configured assemblies",h=m?.regions||[],g=u||n;return a.createElement(y.Z,{className:t.importFormContainer},g?a.createElement(S.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},a.createElement(S.ZP,{item:!0},a.createElement(o.ErrorMessage,{error:g}))):null,a.createElement(S.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},a.createElement(S.ZP,{item:!0},a.createElement(o.AssemblySelector,{onChange:t=>{e.setError(void 0),d(t)},session:r,selected:c})),a.createElement(S.ZP,{item:!0},a.createElement(C.Z,{disabled:!h?.length,onClick:()=>{e.setError(void 0),e.setDisplayedRegions(h)},variant:"contained",color:"primary"},h.length||g?"Open":"Loading..."))))})),M=(0,l.ZL)()((e=>({root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},scroller:{overflow:"auto"}}))),P=(0,n.observer)((({model:e})=>a.createElement(a.Fragment,null,e.staticSlices.map((t=>a.createElement(s.Z,{key:(0,i.assembleLocString)(t.region.elided?t.region.regions[0]:t.region),model:e,slice:t}))),e.tracks.map((t=>{const r=t.displays[0];return a.createElement(r.RenderingComponent,{key:r.id,display:r,view:e})}))))),R=(0,n.observer)((({model:e})=>{const t=!!e.displayedRegions.length&&!!e.figureWidth&&!!e.figureHeight&&e.initialized,r=!t&&!e.disableImportForm,n=t&&!r;return a.createElement(a.Fragment,null,r||e.error?a.createElement(z,{model:e}):n?a.createElement(W,{model:e}):null)})),W=(0,n.observer)((function({model:e}){const{width:t,height:r,id:n,offsetRadians:i,centerXY:l,figureWidth:s,figureHeight:c,hideVerticalResizeHandle:d}=e,{classes:m}=M();return a.createElement("div",{className:m.root,style:{width:t,height:r},"data-testid":n},a.createElement("div",{className:m.scroller,style:{width:t,height:r}},a.createElement("svg",{style:{transform:`rotate(${i}rad)`,transition:"transform 0.5s",transformOrigin:l.map((e=>`${e}px`)).join(" "),position:"absolute",left:0,top:0},width:s,height:c},a.createElement("g",{transform:`translate(${l})`},a.createElement(P,{model:e})))),a.createElement(E,{model:e}),d?null:a.createElement(o.ResizeHandle,{onDrag:e.resizeHeight,style:{height:3,position:"absolute",bottom:0,left:0,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}}))})),T=R},97776:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(66204),n=r(10126),o=r(80013),i=r(29520),l=r(46338),s=r(78781),c=r(39780),d=r(70539),m=r(62301),u=r(7146),h=r(43902),g=r(31211);function p(){return a.createElement("div",null,a.createElement(n.Z,{size:20,style:{marginRight:20}}),a.createElement(o.Z,{display:"inline"},"Creating SVG"))}function v(e,t){return(0,g.useLocalStorage)("svg-"+e,t)}function f({model:e,handleClose:t}){const r=(0,g.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[f,b]=(0,a.useState)(n),[x,k]=(0,a.useState)(!1),[Z,E]=(0,a.useState)(),[y,S]=v("file","jbrowse.svg"),[C,w]=v("theme",r.themeName||"default");return a.createElement(h.Dialog,{open:!0,onClose:t,title:"Export SVG"},a.createElement(i.Z,null,Z?a.createElement(h.ErrorMessage,{error:Z}):x?a.createElement(p,null):null,a.createElement(l.Z,{helperText:"filename",value:y,onChange:e=>S(e.target.value)}),a.createElement("br",null),r.allThemes?a.createElement(l.Z,{select:!0,label:"Theme",value:C,onChange:e=>w(e.target.value)},Object.entries(r.allThemes()).map((([e,t])=>a.createElement(s.Z,{key:e,value:e},t.name||"(Unknown name)")))):null,n?a.createElement(c.Z,{control:a.createElement(d.Z,{checked:f,onChange:()=>b((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(o.Z,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(m.Z,null,a.createElement(u.Z,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"),a.createElement(u.Z,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{k(!0),E(void 0);try{await e.exportSvg({rasterizeLayers:f,filename:y,themeName:C}),t()}catch(e){console.error(e),E(e),k(!1)}}},"Submit")))}},38186:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(66204),n=r(80846),o=r(31211),i=r(21026),l=r(92368);const s=(0,r(38684).ZL)()({rulerLabel:{fontSize:"0.8rem",fontWeight:500,lineHeight:1.6,letterSpacing:"0.0075em"}});function c(e,t,r,a){e.flipped&&([r,a]=[a,r]);const n=e.bpToXY(r,t),o=e.bpToXY(a,t);return["M",...n,"A",t,t,"0",Math.abs(a-r)/e.bpPerRadian>Math.PI?"1":"0","1",...o].join(" ")}const d=(0,n.observer)((function({model:e,slice:t,region:r}){const n=(0,l.Z)(),{radiusPx:i}=e,s=i+1,{endRadians:c,startRadians:d}=t,u=(0,o.polarToCartesian)(s,d),h=(0,o.polarToCartesian)(s,c),g=(c-d)*s,p=c-d>Math.PI?"1":"0",v=(c+d)/2,f=`[${Number(r.regions.length).toLocaleString()}]`;return a.createElement(a.Fragment,null,a.createElement(m,{text:f,view:e,maxWidthPx:g,radians:v,radiusPx:s,title:`${f} more regions`,color:n.palette.text.primary}),a.createElement("path",{d:["M",...u,"A",s,s,"0",p,"1",...h].join(" "),stroke:n.palette.text.secondary,strokeWidth:2,strokeDasharray:"2,2",fill:"none"}))})),m=(0,n.observer)((function({view:e,text:t,maxWidthPx:r,radians:n,radiusPx:i,title:l,color:c}){const{classes:d}=s(),m=(0,o.polarToCartesian)(i+5,n);return t?6.5*t.length<r?a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"middle",dominantBaseline:"baseline",transform:`translate(${m}) rotate(${(0,o.radToDeg)(n)+90})`,style:{fill:c}},t,a.createElement("title",null,l||t)):r>4?(0,o.radToDeg)(n+e.offsetRadians-Math.PI/2)>=180?a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"start",dominantBaseline:"middle",transform:`translate(${m}) rotate(${(0,o.radToDeg)(n)})`,style:{fill:c}},t,a.createElement("title",null,l||t)):a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"end",dominantBaseline:"middle",transform:`translate(${m}) rotate(${(0,o.radToDeg)(n)+180})`,style:{fill:c}},t,a.createElement("title",null,l||t)):null:null})),u=(0,n.observer)((function({model:e,slice:t,region:r}){const n=(0,l.Z)(),{radiusPx:s}=e,{endRadians:d,startRadians:u}=t,h=(d+u)/2,g=(d-u)*s;let p;const v=(0,o.getSession)(e).assemblyManager.get(r.assemblyName);if(v&&(p=v.getRefNameColor(r.refName)),p)try{p=(0,i.makeContrasting)(p,n.palette.background.paper)}catch(e){p=n.palette.text.primary}else p=n.palette.text.primary;return a.createElement(a.Fragment,null,a.createElement(m,{text:r.refName,view:e,maxWidthPx:g,radians:h,radiusPx:s,color:p}),a.createElement("path",{d:c(t,s+1,r.start,r.end),stroke:p,strokeWidth:2,fill:"none"}))})),h=(0,n.observer)((function({model:e,slice:t}){return t.region.elided?a.createElement(d,{key:(0,o.assembleLocString)(t.region.regions[0]),model:e,region:t.region,slice:t}):a.createElement(u,{key:(0,o.assembleLocString)(t.region),region:t.region,model:e,slice:t})}))},3418:(e,t,r)=>{var a=r(57739);t.Z=void 0;var n=a(r(53948)),o=r(43188),i=(0,n.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=i},5359:(e,t,r)=>{var a=r(57739);t.Z=void 0;var n=a(r(53948)),o=r(43188),i=(0,n.default)((0,o.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");t.Z=i},16990:(e,t,r)=>{var a=r(57739);t.Z=void 0;var n=a(r(53948)),o=r(43188),i=(0,n.default)((0,o.jsx)("path",{d:"M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.Z=i},19633:(e,t,r)=>{var a=r(57739);t.Z=void 0;var n=a(r(53948)),o=r(43188),i=(0,n.default)((0,o.jsx)("path",{d:"M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.Z=i},10126:(e,t,r)=>{r.d(t,{Z:()=>C});var a=r(55559),n=r(30984),o=r(66204),i=r(56317),l=r(58029),s=r(71580),c=r(40118),d=r(57369),m=r(61125),u=r(22489),h=r(43188);const g=["className","color","disableShrink","size","style","thickness","value","variant"];let p,v,f,b,x=e=>e;const k=(0,s.F4)(p||(p=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=(0,s.F4)(v||(v=x`
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
`)),E=(0,m.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.iv)(f||(f=x`
      animation: ${0} 1.4s linear infinite;
    `),k))),y=(0,m.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,m.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.iv)(b||(b=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z))),C=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:m=!1,size:p=40,style:v,thickness:f=3.6,value:b=0,variant:x="indeterminate"}=r,k=(0,a.Z)(r,g),Z=(0,n.Z)({},r,{color:s,disableShrink:m,size:p,thickness:f,value:b,variant:x}),C=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,o={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,n&&"circleDisableShrink"]};return(0,l.Z)(o,u.C,t)})(Z),w={},z={},M={};if("determinate"===x){const e=2*Math.PI*((44-f)/2);w.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(b),w.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,z.transform="rotate(-90deg)"}return(0,h.jsx)(E,(0,n.Z)({className:(0,i.Z)(C.root,o),style:(0,n.Z)({width:p,height:p},z,v),ownerState:Z,ref:t,role:"progressbar"},M,k,{children:(0,h.jsx)(y,{className:C.svg,ownerState:Z,viewBox:"22 22 44 44",children:(0,h.jsx)(S,{className:C.circle,style:w,ownerState:Z,cx:44,cy:44,r:(44-f)/2,fill:"none",strokeWidth:f})})}))}))},22489:(e,t,r)=>{r.d(t,{C:()=>o,Z:()=>i});var a=r(58109),n=r(95201);function o(e){return(0,n.Z)("MuiCircularProgress",e)}const i=(0,a.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},82051:(e,t,r)=>{r.d(t,{Z:()=>E});var a=r(55559),n=r(30984),o=r(66204),i=r(56317),l=r(46730),s=r(95201),c=r(58029),d=r(77877),m=r(605),u=r(71684),h=r(43188);const g=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,u.Z)(),v=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),f=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:p});var b=r(40118),x=r(61125),k=r(57369);const Z=function(e={}){const{createStyledComponent:t=v,useThemeProps:r=f,componentName:d="MuiContainer"}=e,m=t((({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const a=r,n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=o.forwardRef((function(e,t){const o=r(e),{className:u,component:p="div",disableGutters:v=!1,fixed:f=!1,maxWidth:b="lg"}=o,x=(0,a.Z)(o,g),k=(0,n.Z)({},o,{component:p,disableGutters:v,fixed:f,maxWidth:b}),Z=((e,t)=>{const{classes:r,fixed:a,disableGutters:n,maxWidth:o}=e,i={root:["root",o&&`maxWidth${(0,l.Z)(String(o))}`,a&&"fixed",n&&"disableGutters"]};return(0,c.Z)(i,(e=>(0,s.Z)(t,e)),r)})(k,d);return(0,h.jsx)(m,(0,n.Z)({as:p,ownerState:k,className:(0,i.Z)(Z.root,u),ref:t},x))}));return u}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,b.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiContainer"})}),E=Z}}]);
//# sourceMappingURL=2854.7ea84ff6.chunk.js.map