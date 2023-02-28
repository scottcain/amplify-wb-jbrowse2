"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7660],{59959:function(n,r,o){var e=o(71600);r.Z=void 0;var t=e(o(7152)),a=o(29938),i=(0,t.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");r.Z=i},53244:function(n,r,o){var e=o(7896),t=o(31461),a=o(96902),i=o(24463),c=o(73674),l=o(2252),s=o(53068),d=o(85642),u=o(29938),p=["className"],v=(0,l.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(n){return{padding:n.theme.spacing(1,2,2)}})),f=a.forwardRef((function(n,r){var o=(0,s.Z)({props:n,name:"MuiAccordionDetails"}),a=o.className,l=(0,t.Z)(o,p),f=o,m=function(n){var r=n.classes;return(0,c.Z)({root:["root"]},d.s,r)}(f);return(0,u.jsx)(v,(0,e.Z)({className:(0,i.default)(m.root,a),ref:r,ownerState:f},l))}));r.Z=f},85642:function(n,r,o){o.d(r,{s:function(){return a}});var e=o(74732),t=o(61235);function a(n){return(0,t.Z)("MuiAccordionDetails",n)}var i=(0,e.Z)("MuiAccordionDetails",["root"]);r.Z=i},75695:function(n,r,o){o.d(r,{Z:function(){return y}});var e=o(56666),t=o(31461),a=o(7896),i=o(96902),c=o(24463),l=o(73674),s=o(2252),d=o(53068),u=o(83413),p=o(81871),v=o(74732),f=o(61235);function m(n){return(0,f.Z)("MuiAccordionSummary",n)}var g=(0,v.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=o(29938),b=["children","className","expandIcon","focusVisibleClassName","onClick"],Z=(0,s.ZP)(u.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(n,r){return r.root}})((function(n){var r,o=n.theme,t=n.ownerState,i={duration:o.transitions.duration.shortest};return(0,a.Z)((r={display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],i)},(0,e.Z)(r,"&.".concat(g.focusVisible),{backgroundColor:(o.vars||o).palette.action.focus}),(0,e.Z)(r,"&.".concat(g.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity}),(0,e.Z)(r,"&:hover:not(.".concat(g.disabled,")"),{cursor:"pointer"}),r),!t.disableGutters&&(0,e.Z)({},"&.".concat(g.expanded),{minHeight:64}))})),x=(0,s.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(n,r){return r.content}})((function(n){var r=n.theme,o=n.ownerState;return(0,a.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&(0,e.Z)({transition:r.transitions.create(["margin"],{duration:r.transitions.duration.shortest})},"&.".concat(g.expanded),{margin:"20px 0"}))})),O=(0,s.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(n,r){return r.expandIconWrapper}})((function(n){var r=n.theme;return(0,e.Z)({display:"flex",color:(r.vars||r).palette.action.active,transform:"rotate(0deg)",transition:r.transitions.create("transform",{duration:r.transitions.duration.shortest})},"&.".concat(g.expanded),{transform:"rotate(180deg)"})})),y=i.forwardRef((function(n,r){var o=(0,d.Z)({props:n,name:"MuiAccordionSummary"}),e=o.children,s=o.className,u=o.expandIcon,v=o.focusVisibleClassName,f=o.onClick,g=(0,t.Z)(o,b),y=i.useContext(p.Z),w=y.disabled,C=void 0!==w&&w,R=y.disableGutters,S=y.expanded,M=y.toggle,N=(0,a.Z)({},o,{expanded:S,disabled:C,disableGutters:R}),k=function(n){var r=n.classes,o=n.expanded,e=n.disabled,t=n.disableGutters,a={root:["root",o&&"expanded",e&&"disabled",!t&&"gutters"],focusVisible:["focusVisible"],content:["content",o&&"expanded",!t&&"contentGutters"],expandIconWrapper:["expandIconWrapper",o&&"expanded"]};return(0,l.Z)(a,m,r)}(N);return(0,h.jsxs)(Z,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":S,className:(0,c.default)(k.root,s),focusVisibleClassName:(0,c.default)(k.focusVisible,v),onClick:function(n){M&&M(n),f&&f(n)},ref:r,ownerState:N},g,{children:[(0,h.jsx)(x,{className:k.content,ownerState:N,children:e}),u&&(0,h.jsx)(O,{className:k.expandIconWrapper,ownerState:N,children:u})]}))}))},52508:function(n,r,o){o.d(r,{Z:function(){return Z}});var e=o(56666),t=o(31461),a=o(7896),i=o(96902),c=o(24463),l=o(39875),s=o(73674);var d=o(35449),u=o(2252),p=o(53068),v=o(70378),f=o(60628),m=o(29938),g=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],h=(0,u.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(n,r){return r.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,u.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(n,r){var o=n.ownerState;return[r.badge,r[o.variant],r["anchorOrigin".concat((0,v.Z)(o.anchorOrigin.vertical)).concat((0,v.Z)(o.anchorOrigin.horizontal)).concat((0,v.Z)(o.overlap))],"default"!==o.color&&r["color".concat((0,v.Z)(o.color))],o.invisible&&r.invisible]}})((function(n){var r=n.theme,o=n.ownerState;return(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},"default"!==o.color&&{backgroundColor:(r.vars||r).palette[o.color].main,color:(r.vars||r).palette[o.color].contrastText},"dot"===o.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"rectangular"===o.overlap&&(0,e.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"right"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===o.anchorOrigin.vertical&&"left"===o.anchorOrigin.horizontal&&"circular"===o.overlap&&(0,e.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),o.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})})),Z=i.forwardRef((function(n,r){var o,e,i,u,Z,x,O=(0,p.Z)({props:n,name:"MuiBadge"}),y=O.anchorOrigin,w=void 0===y?{vertical:"top",horizontal:"right"}:y,C=O.className,R=O.component,S=O.components,M=void 0===S?{}:S,N=O.componentsProps,k=void 0===N?{}:N,z=O.children,A=O.overlap,B=void 0===A?"rectangular":A,P=O.color,V=void 0===P?"default":P,W=O.invisible,I=void 0!==W&&W,D=O.max,T=void 0===D?99:D,j=O.badgeContent,L=O.slots,F=O.slotProps,G=O.showZero,H=void 0!==G&&G,_=O.variant,E=void 0===_?"standard":_,q=(0,t.Z)(O,g),J=function(n){var r=n.badgeContent,o=n.invisible,e=void 0!==o&&o,t=n.max,a=void 0===t?99:t,i=n.showZero,c=void 0!==i&&i,s=(0,l.Z)({badgeContent:r,max:a}),d=e;!1!==e||0!==r||c||(d=!0);var u=d?s:n,p=u.badgeContent,v=u.max,f=void 0===v?a:v;return{badgeContent:p,invisible:d,max:f,displayValue:p&&Number(p)>f?"".concat(f,"+"):p}}({max:T,invisible:I,badgeContent:j,showZero:H}),K=J.badgeContent,Q=J.invisible,U=J.max,X=J.displayValue,Y=(0,l.Z)({anchorOrigin:w,color:V,overlap:B,variant:E,badgeContent:j}),$=Q||null==K&&"dot"!==E,nn=$?Y:O,rn=nn.color,on=void 0===rn?V:rn,en=nn.overlap,tn=void 0===en?B:en,an=nn.anchorOrigin,cn=void 0===an?w:an,ln=nn.variant,sn=void 0===ln?E:ln,dn="dot"!==sn?X:void 0,un=(0,a.Z)({},O,{badgeContent:K,invisible:$,max:U,displayValue:dn,showZero:H,anchorOrigin:cn,color:on,overlap:tn,variant:sn}),pn=function(n){var r=n.color,o=n.anchorOrigin,e=n.invisible,t=n.overlap,a=n.variant,i=n.classes,c=void 0===i?{}:i,l={root:["root"],badge:["badge",a,e&&"invisible","anchorOrigin".concat((0,v.Z)(o.vertical)).concat((0,v.Z)(o.horizontal)),"anchorOrigin".concat((0,v.Z)(o.vertical)).concat((0,v.Z)(o.horizontal)).concat((0,v.Z)(t)),"overlap".concat((0,v.Z)(t)),"default"!==r&&"color".concat((0,v.Z)(r))]};return(0,s.Z)(l,f.I,c)}(un),vn=null!=(o=null!=(e=null==L?void 0:L.root)?e:M.Root)?o:h,fn=null!=(i=null!=(u=null==L?void 0:L.badge)?u:M.Badge)?i:b,mn=null!=(Z=null==F?void 0:F.root)?Z:k.root,gn=null!=(x=null==F?void 0:F.badge)?x:k.badge,hn=(0,d.Z)({elementType:vn,externalSlotProps:mn,externalForwardedProps:q,additionalProps:{ref:r,as:R},ownerState:un,className:(0,c.default)(null==mn?void 0:mn.className,pn.root,C)}),bn=(0,d.Z)({elementType:fn,externalSlotProps:gn,ownerState:un,className:(0,c.default)(pn.badge,null==gn?void 0:gn.className)});return(0,m.jsxs)(vn,(0,a.Z)({},hn,{children:[z,(0,m.jsx)(fn,(0,a.Z)({},bn,{children:dn}))]}))}))},60628:function(n,r,o){o.d(r,{I:function(){return a}});var e=o(74732),t=o(61235);function a(n){return(0,t.Z)("MuiBadge",n)}var i=(0,e.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);r.Z=i},63348:function(n,r,o){o.d(r,{Z:function(){return R}});var e=o(68079),t=o(96234),a=o(56666),i=o(31461),c=o(7896),l=o(96902),s=o(24463),d=o(73674),u=o(70378),p=o(2252),v=o(53068),f=o(89779),m=o(22756),g=o(35388),h=o(974),b=o(72762),Z=o(16644),x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},O=function(n){var r=n.theme,o=n.ownerState,e=function(n){return x[n]||n}(o.color),t=(0,b.DW)(r,"palette.".concat(e),!1)||o.color,a=(0,b.DW)(r,"palette.".concat(e,"Channel"));return"vars"in r&&a?"rgba(".concat(a," / 0.4)"):(0,Z.Fq)(t,.4)},y=o(29938),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,p.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,r){var o=n.ownerState;return[r.root,r["underline".concat((0,u.Z)(o.underline))],"button"===o.component&&r.button]}})((function(n){var r=n.theme,o=n.ownerState;return(0,c.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:O({theme:r,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(h.Z.focusVisible),{outline:"auto"}))})),R=l.forwardRef((function(n,r){var o=(0,v.Z)({props:n,name:"MuiLink"}),a=o.className,p=o.color,g=void 0===p?"primary":p,b=o.component,Z=void 0===b?"a":b,O=o.onBlur,R=o.onFocus,S=o.TypographyClasses,M=o.underline,N=void 0===M?"always":M,k=o.variant,z=void 0===k?"inherit":k,A=o.sx,B=(0,i.Z)(o,w),P=(0,f.Z)(),V=P.isFocusVisibleRef,W=P.onBlur,I=P.onFocus,D=P.ref,T=l.useState(!1),j=(0,t.Z)(T,2),L=j[0],F=j[1],G=(0,m.Z)(r,D),H=(0,c.Z)({},o,{color:g,component:Z,focusVisible:L,underline:N,variant:z}),_=function(n){var r=n.classes,o=n.component,e=n.focusVisible,t=n.underline,a={root:["root","underline".concat((0,u.Z)(t)),"button"===o&&"button",e&&"focusVisible"]};return(0,d.Z)(a,h.w,r)}(H);return(0,y.jsx)(C,(0,c.Z)({color:g,className:(0,s.default)(_.root,a),classes:S,component:Z,onBlur:function(n){W(n),!1===V.current&&F(!1),O&&O(n)},onFocus:function(n){I(n),!0===V.current&&F(!0),R&&R(n)},ref:G,ownerState:H,variant:z,sx:[].concat((0,e.Z)(Object.keys(x).includes(g)?[]:[{color:g}]),(0,e.Z)(Array.isArray(A)?A:[A]))},B))}))},974:function(n,r,o){o.d(r,{w:function(){return a}});var e=o(74732),t=o(61235);function a(n){return(0,t.Z)("MuiLink",n)}var i=(0,e.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);r.Z=i}}]);
//# sourceMappingURL=7660.65d3061f.chunk.js.map