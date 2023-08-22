"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5235],{65235:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t=r(96234),o=r(96902),a=r(35388),i=r(44536),s=r(66519),c=r(5738),l=r(25322),u=r(50952),d=r(75695),p=r(91188),m=r(4782),f=r(63680),v=r(17867),Z=r(27664),x=r(59959),g=r(30570),h=r(10530),b=r(38613),j=r(50543),y=r(78581),C=r(47057),w=r(61210),S=r(73),M=r(29938),k=(0,o.lazy)((function(){return r.e(7888).then(r.bind(r,67888))})),N=(0,p.ZL)()((function(){return{lockedPluginTooltip:{marginRight:"0.5rem"}}}));function R(){var n=N().classes;return(0,M.jsx)(j.Z,{className:n.lockedPluginTooltip,title:"This plugin was installed by an administrator, you cannot remove it.",children:(0,M.jsx)(w.Z,{})})}var P=(0,m.observer)((function(n){var e=n.plugin,r=n.model,i=(0,o.useState)(),s=(0,t.Z)(i,2),c=s[0],u=s[1],d=(0,Z.getEnv)(r).pluginManager,p=(0,Z.getSession)(r),m=p.jbrowse,f=p.adminMode,v=p.sessionPlugins,x=null===v||void 0===v?void 0:v.some((function(n){return d.pluginMetadata[e.name].url===n.url}));return(0,M.jsxs)(M.Fragment,{children:[c?(0,M.jsx)(o.Suspense,{fallback:(0,M.jsx)(o.Fragment,{}),children:(0,M.jsx)(k,{plugin:c,onClose:function(n){if(n){var r=d.pluginMetadata[e.name];f?m.removePlugin(r):(0,S.uF)(p)&&p.removeSessionPlugin(r)}u(void 0)}})}):null,(0,M.jsxs)(y.ZP,{children:[f||x?(0,M.jsx)(l.Z,{"aria-label":"removePlugin","data-testid":"removePlugin-".concat(e.name),onClick:function(){return u(e.name)},children:(0,M.jsx)(C.Z,{})}):(0,M.jsx)(R,{}),(0,M.jsx)(a.Z,{children:e.name})]},e.name)]})})),I=(0,m.observer)((function(n){var e=n.pluginManager,r=n.model,t=e.plugins,o=r.filterText,i=t.filter((function(n){var r;return!(null!==(r=e.pluginMetadata[n.name])&&void 0!==r&&r.isCore)}));return(0,M.jsx)(b.Z,{children:i.length>0?i.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())})).map((function(n){return(0,M.jsx)(P,{plugin:n,model:r},n.name)})):(0,M.jsx)(a.Z,{children:"No plugins currently installed"})})})),A=r(61809),F=r(31091),V=r(63348),L=r(25680),z=r(77862),T=r(51467),E=r(24274),W=(0,p.ZL)()({card:{margin:"0.5em"},icon:{marginLeft:"0.5em",marginRight:"0.5em"},bold:{fontWeight:600},dataField:{display:"flex",alignItems:"center"}}),D=(0,m.observer)((function(n){var e=n.plugin,r=n.model,s=n.adminMode,c=W().classes,l=(0,Z.getSession)(r),u=(0,Z.getEnv)(r).pluginManager.runtimePluginDefinitions.some((function(n){return n.url===e.url})),d=(0,o.useState)(!1),p=(0,t.Z)(d,2),m=p[0],v=p[1],x=u||m,g=(0,f.getParent)(r,3).jbrowse;return(0,M.jsxs)(A.Z,{variant:"outlined",className:c.card,children:[(0,M.jsxs)(F.Z,{children:[(0,M.jsx)(a.Z,{variant:"h5",children:(0,M.jsx)(V.Z,{href:"".concat(e.location,"#readme"),target:"_blank",rel:"noopener",children:e.name})}),(0,M.jsxs)("div",{className:c.dataField,children:[(0,M.jsx)(z.Z,{style:{marginRight:"0.5em"}}),(0,M.jsx)(a.Z,{children:e.authors.join(", ")})]}),(0,M.jsx)(a.Z,{className:c.bold,children:"Description:"}),(0,M.jsx)(a.Z,{children:e.description})]}),(0,M.jsx)(L.Z,{children:(0,M.jsx)(i.Z,{variant:"contained",disabled:x,startIcon:u?(0,M.jsx)(E.Z,{}):(0,M.jsx)(T.Z,{}),onClick:function(){s?g.addPlugin({name:e.name,url:e.url}):(0,S.uF)(l)&&l.addSessionPlugin(e),v(!0)},children:u?"Installed":"Install"})})]},e.name)})),B=r(32723),G=r(34795);var H=(0,o.lazy)((function(){return r.e(6137).then(r.bind(r,56137))})),_=(0,p.ZL)()((function(n){return{expandIcon:{color:n.palette.tertiary.contrastText},adminBadge:{borderRadius:3,backgroundColor:n.palette.quaternary.main,padding:"1em",display:"flex",alignContent:"center"},customPluginButton:{margin:"1em auto",display:"flex"}}}));var O=(0,m.observer)((function(n){var e=n.model,r=_().classes,p=function(){var n=(0,o.useState)(),e=(0,t.Z)(n,2),r=e[0],a=e[1],i=(0,o.useState)(),s=(0,t.Z)(i,2),c=s[0],l=s[1];return(0,o.useEffect)((function(){(0,G.Z)((0,B.Z)().mark((function n(){var e,r,t;return(0,B.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://jbrowse.org/plugin-store/plugins.json");case 3:if((e=n.sent).ok){n.next=9;break}return n.next=7,e.text();case 7:throw r=n.sent,new Error("HTTP ".concat(e.status," fetching plugins: ").concat(r));case 9:return n.next=11,e.json();case 11:t=n.sent,a(t.plugins),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),console.error(n.t0),l(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,15]])})))()}),[]),{plugins:r,error:c}}(),m=p.plugins,b=p.error,j=(0,o.useState)(!1),y=(0,t.Z)(j,2),C=y[0],w=y[1],S=(0,Z.getSession)(e).adminMode,k=(0,f.getEnv)(e).pluginManager;return(0,M.jsxs)("div",{children:[S&&(0,M.jsxs)(M.Fragment,{children:[!Z.isElectron&&(0,M.jsxs)("div",{className:r.adminBadge,children:[(0,M.jsx)(h.Z,{style:{marginRight:"0.3em"}}),(0,M.jsxs)(a.Z,{children:["You are using the ",(0,M.jsx)("code",{children:"admin-server"}),". Any changes you make will be saved to your configuration file. You also have the ability to add custom plugins that are not in the store."]})]}),(0,M.jsx)(i.Z,{className:r.customPluginButton,variant:"contained",onClick:function(){return w(!0)},children:"Add custom plugin"}),C?(0,M.jsx)(o.Suspense,{fallback:(0,M.jsx)(o.Fragment,{}),children:(0,M.jsx)(H,{onClose:function(){return w(!1)},model:e})}):null]}),(0,M.jsx)(s.Z,{label:"Filter plugins",value:e.filterText,onChange:function(n){return e.setFilterText(n.target.value)},fullWidth:!0,InputProps:{endAdornment:(0,M.jsx)(c.Z,{position:"end",children:(0,M.jsx)(l.Z,{onClick:function(){return e.clearFilterText()},children:(0,M.jsx)(g.Z,{})})})}}),(0,M.jsxs)(u.Z,{defaultExpanded:!0,children:[(0,M.jsx)(d.Z,{expandIcon:(0,M.jsx)(x.Z,{className:r.expandIcon}),children:(0,M.jsx)(a.Z,{variant:"h5",children:"Installed plugins"})}),(0,M.jsx)("div",{style:{margin:"1em"},children:(0,M.jsx)(I,{pluginManager:k,model:e})})]}),(0,M.jsxs)(u.Z,{defaultExpanded:!0,children:[(0,M.jsx)(d.Z,{expandIcon:(0,M.jsx)(x.Z,{className:r.expandIcon}),children:(0,M.jsx)(a.Z,{variant:"h5",children:"Available plugins"})}),b?(0,M.jsx)(a.Z,{color:"error",children:"".concat(b)}):m?m.filter((function(n){return!(Z.isElectron&&n.cjsUrl)&&n.name.toLowerCase().includes(e.filterText.toLowerCase())})).map((function(n){return(0,M.jsx)(D,{plugin:n,model:e,adminMode:!!S},n.name)})):(0,M.jsx)(v.LoadingEllipses,{})]})]})}))},24274:function(n,e,r){var t=r(71600);e.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.Z=i},59959:function(n,e,r){var t=r(71600);e.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");e.Z=i},10530:function(n,e,r){var t=r(71600);e.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");e.Z=i},61210:function(n,e,r){var t=r(71600);e.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");e.Z=i},77862:function(n,e,r){var t=r(71600);e.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.Z=i},75695:function(n,e,r){r.d(e,{Z:function(){return y}});var t=r(56666),o=r(31461),a=r(7896),i=r(96902),s=r(37032),c=r(73674),l=r(2252),u=r(53068),d=r(83413),p=r(81871),m=r(74732),f=r(61235);function v(n){return(0,f.Z)("MuiAccordionSummary",n)}var Z=(0,m.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),x=r(29938),g=["children","className","expandIcon","focusVisibleClassName","onClick"],h=(0,l.ZP)(d.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(n){var e,r=n.theme,o=n.ownerState,i={duration:r.transitions.duration.shortest};return(0,a.Z)((e={display:"flex",minHeight:48,padding:r.spacing(0,2),transition:r.transitions.create(["min-height","background-color"],i)},(0,t.Z)(e,"&.".concat(Z.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,t.Z)(e,"&.".concat(Z.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,t.Z)(e,"&:hover:not(.".concat(Z.disabled,")"),{cursor:"pointer"}),e),!o.disableGutters&&(0,t.Z)({},"&.".concat(Z.expanded),{minHeight:64}))})),b=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(n,e){return e.content}})((function(n){var e=n.theme,r=n.ownerState;return(0,a.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!r.disableGutters&&(0,t.Z)({transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest})},"&.".concat(Z.expanded),{margin:"20px 0"}))})),j=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(n,e){return e.expandIconWrapper}})((function(n){var e=n.theme;return(0,t.Z)({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},"&.".concat(Z.expanded),{transform:"rotate(180deg)"})})),y=i.forwardRef((function(n,e){var r=(0,u.Z)({props:n,name:"MuiAccordionSummary"}),t=r.children,l=r.className,d=r.expandIcon,m=r.focusVisibleClassName,f=r.onClick,Z=(0,o.Z)(r,g),y=i.useContext(p.Z),C=y.disabled,w=void 0!==C&&C,S=y.disableGutters,M=y.expanded,k=y.toggle,N=(0,a.Z)({},r,{expanded:M,disabled:w,disableGutters:S}),R=function(n){var e=n.classes,r=n.expanded,t=n.disabled,o=n.disableGutters,a={root:["root",r&&"expanded",t&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,c.Z)(a,v,e)}(N);return(0,x.jsxs)(h,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:w,component:"div","aria-expanded":M,className:(0,s.Z)(R.root,l),focusVisibleClassName:(0,s.Z)(R.focusVisible,m),onClick:function(n){k&&k(n),f&&f(n)},ref:e,ownerState:N},Z,{children:[(0,x.jsx)(b,{className:R.content,ownerState:N,children:t}),d&&(0,x.jsx)(j,{className:R.expandIconWrapper,ownerState:N,children:d})]}))}))},61809:function(n,e,r){var t=r(7896),o=r(31461),a=r(96902),i=r(37032),s=r(73674),c=r(2252),l=r(53068),u=r(6880),d=r(1162),p=r(29938),m=["className","raised"],f=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),v=a.forwardRef((function(n,e){var r=(0,l.Z)({props:n,name:"MuiCard"}),a=r.className,c=r.raised,u=void 0!==c&&c,v=(0,o.Z)(r,m),Z=(0,t.Z)({},r,{raised:u}),x=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},d.y,e)}(Z);return(0,p.jsx)(f,(0,t.Z)({className:(0,i.Z)(x.root,a),elevation:u?8:void 0,ref:e,ownerState:Z},v))}));e.Z=v},1162:function(n,e,r){r.d(e,{y:function(){return a}});var t=r(74732),o=r(61235);function a(n){return(0,o.Z)("MuiCard",n)}var i=(0,t.Z)("MuiCard",["root"]);e.Z=i},25680:function(n,e,r){var t=r(31461),o=r(7896),a=r(96902),i=r(37032),s=r(73674),c=r(2252),l=r(53068),u=r(27113),d=r(29938),p=["disableSpacing","className"],m=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,!r.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=a.forwardRef((function(n,e){var r=(0,l.Z)({props:n,name:"MuiCardActions"}),a=r.disableSpacing,c=void 0!==a&&a,f=r.className,v=(0,t.Z)(r,p),Z=(0,o.Z)({},r,{disableSpacing:c}),x=function(n){var e=n.classes,r={root:["root",!n.disableSpacing&&"spacing"]};return(0,s.Z)(r,u.s,e)}(Z);return(0,d.jsx)(m,(0,o.Z)({className:(0,i.Z)(x.root,f),ownerState:Z,ref:e},v))}));e.Z=f},27113:function(n,e,r){r.d(e,{s:function(){return a}});var t=r(74732),o=r(61235);function a(n){return(0,o.Z)("MuiCardActions",n)}var i=(0,t.Z)("MuiCardActions",["root","spacing"]);e.Z=i},31091:function(n,e,r){var t=r(7896),o=r(31461),a=r(96902),i=r(37032),s=r(73674),c=r(2252),l=r(53068),u=r(83387),d=r(29938),p=["className","component"],m=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=a.forwardRef((function(n,e){var r=(0,l.Z)({props:n,name:"MuiCardContent"}),a=r.className,c=r.component,f=void 0===c?"div":c,v=(0,o.Z)(r,p),Z=(0,t.Z)({},r,{component:f}),x=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},u.N,e)}(Z);return(0,d.jsx)(m,(0,t.Z)({as:f,className:(0,i.Z)(x.root,a),ownerState:Z,ref:e},v))}));e.Z=f},83387:function(n,e,r){r.d(e,{N:function(){return a}});var t=r(74732),o=r(61235);function a(n){return(0,o.Z)("MuiCardContent",n)}var i=(0,t.Z)("MuiCardContent",["root"]);e.Z=i},63348:function(n,e,r){r.d(e,{Z:function(){return S}});var t=r(68079),o=r(96234),a=r(56666),i=r(31461),s=r(7896),c=r(96902),l=r(37032),u=r(73674),d=r(70378),p=r(2252),m=r(53068),f=r(89779),v=r(22756),Z=r(35388),x=r(974),g=r(72762),h=r(16644),b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(n){var e=n.theme,r=n.ownerState,t=function(n){return b[n]||n}(r.color),o=(0,g.DW)(e,"palette.".concat(t),!1)||r.color,a=(0,g.DW)(e,"palette.".concat(t,"Channel"));return"vars"in e&&a?"rgba(".concat(a," / 0.4)"):(0,h.Fq)(o,.4)},y=r(29938),C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=(0,p.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,e["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&e.button]}})((function(n){var e=n.theme,r=n.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(x.Z.focusVisible),{outline:"auto"}))})),S=c.forwardRef((function(n,e){var r=(0,m.Z)({props:n,name:"MuiLink"}),a=r.className,p=r.color,Z=void 0===p?"primary":p,g=r.component,h=void 0===g?"a":g,j=r.onBlur,S=r.onFocus,M=r.TypographyClasses,k=r.underline,N=void 0===k?"always":k,R=r.variant,P=void 0===R?"inherit":R,I=r.sx,A=(0,i.Z)(r,C),F=(0,f.Z)(),V=F.isFocusVisibleRef,L=F.onBlur,z=F.onFocus,T=F.ref,E=c.useState(!1),W=(0,o.Z)(E,2),D=W[0],B=W[1],G=(0,v.Z)(e,T),H=(0,s.Z)({},r,{color:Z,component:h,focusVisible:D,underline:N,variant:P}),_=function(n){var e=n.classes,r=n.component,t=n.focusVisible,o=n.underline,a={root:["root","underline".concat((0,d.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(a,x.w,e)}(H);return(0,y.jsx)(w,(0,s.Z)({color:Z,className:(0,l.Z)(_.root,a),classes:M,component:h,onBlur:function(n){L(n),!1===V.current&&B(!1),j&&j(n)},onFocus:function(n){z(n),!0===V.current&&B(!0),S&&S(n)},ref:G,ownerState:H,variant:P,sx:[].concat((0,t.Z)(Object.keys(b).includes(Z)?[]:[{color:Z}]),(0,t.Z)(Array.isArray(I)?I:[I]))},A))}))},974:function(n,e,r){r.d(e,{w:function(){return a}});var t=r(74732),o=r(61235);function a(n){return(0,o.Z)("MuiLink",n)}var i=(0,t.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);e.Z=i}}]);
//# sourceMappingURL=5235.e0509d51.chunk.js.map