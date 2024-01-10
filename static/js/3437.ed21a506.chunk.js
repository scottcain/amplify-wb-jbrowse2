"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3437],{3725:(r,o,n)=>{n.d(o,{Z:()=>p});var t=n(7896),e=n(31461),a=n(41867),i=n(66184),l=n(92705),c=n(75693),s=n(90293),u=n(31498),g=n(80838);const d=["className"],m=(0,c.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(r,o)=>o.root})((r=>{let{theme:o}=r;return{padding:o.spacing(1,2,2)}})),p=a.forwardRef((function(r,o){const n=(0,s.Z)({props:r,name:"MuiAccordionDetails"}),{className:a}=n,c=(0,e.Z)(n,d),p=n,h=(r=>{const{classes:o}=r;return(0,l.Z)({root:["root"]},u.s,o)})(p);return(0,g.jsx)(m,(0,t.Z)({className:(0,i.Z)(h.root,a),ref:o,ownerState:p},c))}))},31498:(r,o,n)=>{n.d(o,{Z:()=>i,s:()=>a});var t=n(70101),e=n(88498);function a(r){return(0,e.Z)("MuiAccordionDetails",r)}const i=(0,t.Z)("MuiAccordionDetails",["root"])},56868:(r,o,n)=>{n.d(o,{Z:()=>b});var t=n(31461),e=n(7896),a=n(41867),i=n(66184),l=n(2370),c=n(92705);var s=n(14034),u=n(75693),g=n(90293),d=n(9931),m=n(19114),p=n(80838);const h=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],v=(0,u.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,o)=>o.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),f=(0,u.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,o)=>{const{ownerState:n}=r;return[o.badge,o[n.variant],o["anchorOrigin".concat((0,d.Z)(n.anchorOrigin.vertical)).concat((0,d.Z)(n.anchorOrigin.horizontal)).concat((0,d.Z)(n.overlap))],"default"!==n.color&&o["color".concat((0,d.Z)(n.color))],n.invisible&&o.invisible]}})((r=>{let{theme:o,ownerState:n}=r;return(0,e.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen})},"default"!==n.color&&{backgroundColor:(o.vars||o).palette[n.color].main,color:(o.vars||o).palette[n.color].contrastText},"dot"===n.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(50%, 50%)"}},"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(50%, 50%)"}},"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",["&.".concat(m.Z.invisible)]:{transform:"scale(0) translate(-50%, 50%)"}},n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})})})),b=a.forwardRef((function(r,o){var n,a,u,b,Z,O;const x=(0,g.Z)({props:r,name:"MuiBadge"}),{anchorOrigin:y={vertical:"top",horizontal:"right"},className:w,component:C,components:R={},componentsProps:S={},children:z,overlap:B="rectangular",color:M="default",invisible:k=!1,max:N=99,badgeContent:P,slots:D,slotProps:T,showZero:A=!1,variant:L="standard"}=x,W=(0,t.Z)(x,h),{badgeContent:F,invisible:V,max:j,displayValue:I}=function(r){const{badgeContent:o,invisible:n=!1,max:t=99,showZero:e=!1}=r,a=(0,l.Z)({badgeContent:o,max:t});let i=n;!1!==n||0!==o||e||(i=!0);const{badgeContent:c,max:s=t}=i?a:r;return{badgeContent:c,invisible:i,max:s,displayValue:c&&Number(c)>s?"".concat(s,"+"):c}}({max:N,invisible:k,badgeContent:P,showZero:A}),_=(0,l.Z)({anchorOrigin:y,color:M,overlap:B,variant:L,badgeContent:P}),H=V||null==F&&"dot"!==L,{color:q=M,overlap:E=B,anchorOrigin:G=y,variant:J=L}=H?_:x,K="dot"!==J?I:void 0,Q=(0,e.Z)({},x,{badgeContent:F,invisible:H,max:j,displayValue:K,showZero:A,anchorOrigin:G,color:q,overlap:E,variant:J}),U=(r=>{const{color:o,anchorOrigin:n,invisible:t,overlap:e,variant:a,classes:i={}}=r,l={root:["root"],badge:["badge",a,t&&"invisible","anchorOrigin".concat((0,d.Z)(n.vertical)).concat((0,d.Z)(n.horizontal)),"anchorOrigin".concat((0,d.Z)(n.vertical)).concat((0,d.Z)(n.horizontal)).concat((0,d.Z)(e)),"overlap".concat((0,d.Z)(e)),"default"!==o&&"color".concat((0,d.Z)(o))]};return(0,c.Z)(l,m.I,i)})(Q),X=null!=(n=null!=(a=null==D?void 0:D.root)?a:R.Root)?n:v,Y=null!=(u=null!=(b=null==D?void 0:D.badge)?b:R.Badge)?u:f,$=null!=(Z=null==T?void 0:T.root)?Z:S.root,rr=null!=(O=null==T?void 0:T.badge)?O:S.badge,or=(0,s.y)({elementType:X,externalSlotProps:$,externalForwardedProps:W,additionalProps:{ref:o,as:C},ownerState:Q,className:(0,i.Z)(null==$?void 0:$.className,U.root,w)}),nr=(0,s.y)({elementType:Y,externalSlotProps:rr,ownerState:Q,className:(0,i.Z)(U.badge,null==rr?void 0:rr.className)});return(0,p.jsxs)(X,(0,e.Z)({},or,{children:[z,(0,p.jsx)(Y,(0,e.Z)({},nr,{children:K}))]}))}))},19114:(r,o,n)=>{n.d(o,{I:()=>a,Z:()=>i});var t=n(70101),e=n(88498);function a(r){return(0,e.Z)("MuiBadge",r)}const i=(0,t.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},93989:(r,o,n)=>{n.d(o,{Z:()=>y});var t=n(31461),e=n(7896),a=n(41867),i=n(66184),l=n(92705),c=n(9931),s=n(75693),u=n(90293),g=n(62643),d=n(40234),m=n(51590),p=n(31633),h=n(60183),v=n(71939);const f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=r=>{let{theme:o,ownerState:n}=r;const t=(r=>f[r]||r)(n.color),e=(0,h.DW)(o,"palette.".concat(t),!1)||n.color,a=(0,h.DW)(o,"palette.".concat(t,"Channel"));return"vars"in o&&a?"rgba(".concat(a," / 0.4)"):(0,v.Fq)(e,.4)};var Z=n(80838);const O=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],x=(0,s.ZP)(m.Z,{name:"MuiLink",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:n}=r;return[o.root,o["underline".concat((0,c.Z)(n.underline))],"button"===n.component&&o.button]}})((r=>{let{theme:o,ownerState:n}=r;return(0,e.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,e.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:b({theme:o,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(p.Z.focusVisible)]:{outline:"auto"}})})),y=a.forwardRef((function(r,o){const n=(0,u.Z)({props:r,name:"MuiLink"}),{className:s,color:m="primary",component:h="a",onBlur:v,onFocus:b,TypographyClasses:y,underline:w="always",variant:C="inherit",sx:R}=n,S=(0,t.Z)(n,O),{isFocusVisibleRef:z,onBlur:B,onFocus:M,ref:k}=(0,g.Z)(),[N,P]=a.useState(!1),D=(0,d.Z)(o,k),T=(0,e.Z)({},n,{color:m,component:h,focusVisible:N,underline:w,variant:C}),A=(r=>{const{classes:o,component:n,focusVisible:t,underline:e}=r,a={root:["root","underline".concat((0,c.Z)(e)),"button"===n&&"button",t&&"focusVisible"]};return(0,l.Z)(a,p.w,o)})(T);return(0,Z.jsx)(x,(0,e.Z)({color:m,className:(0,i.Z)(A.root,s),classes:y,component:h,onBlur:r=>{B(r),!1===z.current&&P(!1),v&&v(r)},onFocus:r=>{M(r),!0===z.current&&P(!0),b&&b(r)},ref:D,ownerState:T,variant:C,sx:[...Object.keys(f).includes(m)?[]:[{color:m}],...Array.isArray(R)?R:[R]]},S))}))},31633:(r,o,n)=>{n.d(o,{Z:()=>i,w:()=>a});var t=n(70101),e=n(88498);function a(r){return(0,e.Z)("MuiLink",r)}const i=(0,t.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=3437.ed21a506.chunk.js.map