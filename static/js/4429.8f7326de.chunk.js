"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4429],{27577:(e,t,o)=>{var a=o(71600);t.Z=void 0;var n=a(o(80337)),r=o(80838),s=(0,n.default)((0,r.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=s},83177:(e,t,o)=>{var a=o(71600);t.Z=void 0;var n=a(o(80337)),r=o(80838),s=(0,n.default)((0,r.jsx)("path",{d:"m14 7-5 5 5 5V7z"}),"ArrowLeft");t.Z=s},47500:(e,t,o)=>{o.d(t,{Z:()=>S});var a=o(31461),n=o(7896),r=o(41867),s=o(66184),i=o(19092),c=o(88498),d=o(92705),l=o(8380),u=o(35283),m=o(15453),p=o(80838);const h=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,m.Z)(),Z=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t["maxWidth".concat((0,i.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),v=e=>(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:f});var x=o(9931),b=o(75693),g=o(90293);const k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=Z,useThemeProps:o=v,componentName:l="MuiContainer"}=e,u=t((e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:o}=e;return o.fixed&&Object.keys(t.breakpoints.values).reduce(((e,o)=>{const a=o,n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({},"xs"===o.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},o.maxWidth&&"xs"!==o.maxWidth&&{[t.breakpoints.up(o.maxWidth)]:{maxWidth:"".concat(t.breakpoints.values[o.maxWidth]).concat(t.breakpoints.unit)}})})),m=r.forwardRef((function(e,t){const r=o(e),{className:m,component:f="div",disableGutters:Z=!1,fixed:v=!1,maxWidth:x="lg"}=r,b=(0,a.Z)(r,h),g=(0,n.Z)({},r,{component:f,disableGutters:Z,fixed:v,maxWidth:x}),k=((e,t)=>{const{classes:o,fixed:a,disableGutters:n,maxWidth:r}=e,s={root:["root",r&&"maxWidth".concat((0,i.Z)(String(r))),a&&"fixed",n&&"disableGutters"]};return(0,d.Z)(s,(e=>(0,c.Z)(t,e)),o)})(g,l);return(0,p.jsx)(u,(0,n.Z)({as:f,ownerState:g,className:(0,s.Z)(k.root,m),ref:t},b))}));return m}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t["maxWidth".concat((0,x.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,g.Z)({props:e,name:"MuiContainer"})}),S=k},23738:(e,t,o)=>{o.d(t,{Z:()=>y});var a=o(31461),n=o(7896),r=o(41867),s=o(66184),i=o(92705),c=o(71939),d=o(9886),l=o(90293),u=o(17886),m=o(80838);const p=(0,u.Z)((0,m.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),h=(0,u.Z)((0,m.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var f=o(75693);const Z=(0,f.ZP)("span",{shouldForwardProp:f.FO})({position:"relative",display:"flex"}),v=(0,f.ZP)(p)({transform:"scale(1)"}),x=(0,f.ZP)(h)((e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));const b=function(e){const{checked:t=!1,classes:o={},fontSize:a}=e,r=(0,n.Z)({},e,{checked:t});return(0,m.jsxs)(Z,{className:o.root,ownerState:r,children:[(0,m.jsx)(v,{fontSize:a,className:o.background,ownerState:r}),(0,m.jsx)(x,{fontSize:a,className:o.dot,ownerState:r})]})};var g=o(9931),k=o(46275),S=o(20326),C=o(33812);const w=["checked","checkedIcon","color","icon","name","onChange","size","className"],z=(0,f.ZP)(d.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"medium"!==o.size&&t["size".concat((0,g.Z)(o.size))],t["color".concat((0,g.Z)(o.color))]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.Z)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{["&.".concat(C.Z.checked)]:{color:(t.vars||t).palette[o.color].main}},{["&.".concat(C.Z.disabled)]:{color:(t.vars||t).palette.action.disabled}})}));const R=(0,m.jsx)(b,{checked:!0}),j=(0,m.jsx)(b,{}),y=r.forwardRef((function(e,t){var o,c;const d=(0,l.Z)({props:e,name:"MuiRadio"}),{checked:u,checkedIcon:p=R,color:h="primary",icon:f=j,name:Z,onChange:v,size:x="medium",className:b}=d,y=(0,a.Z)(d,w),W=(0,n.Z)({},d,{color:h,size:x}),M=(e=>{const{classes:t,color:o,size:a}=e,r={root:["root","color".concat((0,g.Z)(o)),"medium"!==a&&"size".concat((0,g.Z)(a))]};return(0,n.Z)({},t,(0,i.Z)(r,C.l,t))})(W),G=(0,S.Z)();let P=u;const N=(0,k.Z)(v,G&&G.onChange);let O=Z;var F,I;return G&&("undefined"===typeof P&&(F=G.value,P="object"===typeof(I=d.value)&&null!==I?F===I:String(F)===String(I)),"undefined"===typeof O&&(O=G.name)),(0,m.jsx)(z,(0,n.Z)({type:"radio",icon:r.cloneElement(f,{fontSize:null!=(o=j.props.fontSize)?o:x}),checkedIcon:r.cloneElement(p,{fontSize:null!=(c=R.props.fontSize)?c:x}),ownerState:W,classes:M,name:O,checked:P,onChange:N,ref:t,className:(0,s.Z)(M.root,b)},y))}))},33812:(e,t,o)=>{o.d(t,{Z:()=>s,l:()=>r});var a=o(70101),n=o(88498);function r(e){return(0,n.Z)("MuiRadio",e)}const s=(0,a.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},21126:(e,t,o)=>{o.d(t,{Z:()=>p});var a=o(7896),n=o(31461),r=o(41867),s=o(45489),i=o(40234),c=o(61291),d=o(27088),l=o(56619),u=o(80838);const m=["actions","children","defaultValue","name","onChange","value"],p=r.forwardRef((function(e,t){const{actions:o,children:p,defaultValue:h,name:f,onChange:Z,value:v}=e,x=(0,n.Z)(e,m),b=r.useRef(null),[g,k]=(0,c.Z)({controlled:v,default:h,name:"RadioGroup"});r.useImperativeHandle(o,(()=>({focus:()=>{let e=b.current.querySelector("input:not(:disabled):checked");e||(e=b.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const S=(0,i.Z)(t,b),C=(0,l.Z)(f),w=r.useMemo((()=>({name:C,onChange(e){k(e.target.value),Z&&Z(e,e.target.value)},value:g})),[C,Z,k,g]);return(0,u.jsx)(d.Z.Provider,{value:w,children:(0,u.jsx)(s.Z,(0,a.Z)({role:"radiogroup",ref:S},x,{children:p}))})}))},27088:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o(41867).createContext(void 0)},20326:(e,t,o)=>{o.d(t,{Z:()=>r});var a=o(41867),n=o(27088);function r(){return a.useContext(n.Z)}}}]);
//# sourceMappingURL=4429.8f7326de.chunk.js.map