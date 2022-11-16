"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7135],{17135:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t=r(68079),o=r(33028),a=r(59740),i=r(96234),s=r(30969),l=r(90550),c=r(77491),u=r(66581),d=r(70054),m=r(2374),f=r(7456),h=r(81073),x=r(10814),b=r(3562),Z=r(89003),v=r(28712),p=r(37574),j=(0,m.ZL)()((function(){return{container:{display:"flex",flexDirection:"row",margin:5},selectText:{marginRight:8,marginTop:10},flexItem:{marginRight:8}}}));var g=(0,l.observer)((function(e){var n=e.model,r=j().classes,t=n.assemblies,o=n.selectedAssembly,a=n.setSelectedAssembly,i=0===t.length;return(0,p.jsxs)("div",{className:r.container,children:[(0,p.jsx)(d.Z,{className:r.selectText,children:"Select assembly:"}),(0,p.jsx)(b.Z,{className:r.flexItem,disabled:i,children:(0,p.jsxs)(Z.Z,{value:function(e){return"all"===e?"all":t.includes(e)?e:"none"}(o),onChange:function(e){return a(e.target.value)},children:[(0,p.jsx)(v.Z,{value:"none",children:"none"}),(0,p.jsx)(v.Z,{value:"all",children:"all"}),t.map((function(e){return(0,p.jsx)(v.Z,{value:e,children:e},e)}))]})})]})})),k=r(92256),y=r(48651),C=r(17984),w=r(52907),N=r(69852),S=r(88581),D=(0,m.ZL)()((function(){return{closeDialog:{position:"absolute",right:0,top:0},dialogContainer:{margin:15}}}));var L=(0,l.observer)((function(e){var n=e.rowNumber,r=e.model,t=e.onClose,o=D().classes,a=r.removeBookmark;return(0,p.jsxs)(k.Z,{open:void 0!==n,onClose:t,children:[(0,p.jsxs)(y.Z,{children:["Delete bookmark",(0,p.jsx)(u.Z,{className:o.closeDialog,"aria-label":"close-dialog",onClick:t,children:(0,p.jsx)(S.Z,{})})]}),(0,p.jsx)(C.Z,{children:(0,p.jsxs)(d.Z,{children:["Remove"," ",(0,p.jsx)("code",{children:void 0!==n?(0,h.assembleLocString)(r.bookmarkedRegions[n]):""})," ","?"]})}),(0,p.jsxs)(w.Z,{children:[(0,p.jsx)(N.Z,{variant:"contained",color:"secondary",onClick:function(){t()},children:"Cancel"}),(0,p.jsx)(N.Z,{variant:"contained",color:"primary",onClick:function(){void 0!==n&&(a(n),t())},children:"Confirm"})]})]})})),B=r(89364),F=r(32723),I=r(34795),A=r(21918);function M(){return(M=(0,I.Z)((0,F.Z)().mark((function e(n,r,t){var o,a,i,s,l,c,u,d,m,f,x;return(0,F.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.selectedAssembly,a=r.find((function(e){return"LinearGenomeView"===e.type&&e.assemblyNames[0]===o})),!a){e.next=6;break}a.navToLocString(n),e.next=28;break;case 6:return i=(0,h.getSession)(t),s=i.assemblyManager,e.next=10,s.waitForAssembly(o);case 10:if(!(l=e.sent)){e.next=28;break}return e.prev=12,c=(0,h.parseLocString)(n,(function(e){return i.assemblyManager.isValidRefName(e,o)})),u=c.refName,d=l.regions,m=l.getCanonicalRefName(u),d&&(f=d.find((function(e){return e.refName===m}))),x=i.addView("LinearGenomeView",{displayName:o}),e.next=21,(0,h.when)((function(){return x.initialized}));case 21:x.setDisplayedRegions([JSON.parse(JSON.stringify(f))]),x.navToLocString(n),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(12),i.notify("".concat(e.t0),"error");case 28:case"end":return e.stop()}}),e,null,[[12,25]])})))).apply(this,arguments)}var R=(0,m.ZL)()((function(){return{closeDialog:{position:"absolute",right:0,top:0},dialogContainer:{margin:15},flexItem:{margin:5},flexContainer:{display:"flex",justifyContent:"space-evenly",width:200}}}));var T=(0,l.observer)((function(e){var n=e.model,r=R().classes,t=(0,s.useState)(!1),o=(0,i.Z)(t,2),a=o[0],l=o[1],c=(0,s.useState)("BED"),m=(0,i.Z)(c,2),f=m[0],x=m[1],b=n.bookmarkedRegions;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(N.Z,{startIcon:(0,p.jsx)(B.Z,{}),onClick:function(){return l(!0)},children:"Download"}),(0,p.jsxs)(k.Z,{open:a,onClose:function(){return l(!1)},children:[(0,p.jsx)(y.Z,{children:(0,p.jsx)(u.Z,{className:r.closeDialog,"aria-label":"close-dialog",onClick:function(){return l(!1)},children:(0,p.jsx)(S.Z,{})})}),(0,p.jsxs)(C.Z,{children:[(0,p.jsx)(d.Z,{children:"Format to download"}),(0,p.jsxs)(Z.Z,{className:r.flexItem,"data-testid":"selectFileType",value:f,onChange:function(e){return x(e.target.value)},children:[(0,p.jsx)(v.Z,{value:"BED",children:"BED"}),(0,p.jsx)(v.Z,{value:"TSV",children:"TSV"})]})]}),(0,p.jsxs)(w.Z,{children:[(0,p.jsx)(N.Z,{variant:"contained",color:"secondary",onClick:function(){return l(!1)},children:"Cancel"}),(0,p.jsx)(N.Z,{className:r.flexItem,"data-testid":"dialogDownload",variant:"contained",color:"primary",startIcon:(0,p.jsx)(B.Z,{}),onClick:function(){!function(e,n,r){var t,o=r.selectedAssembly,a="TSV"===n?"chrom\tstart\tend\tlabel\tassembly_name\tcoord_range\n":"",i=e.map((function(e){var r=e.label,t=""===r?".":r,a=(0,h.assembleLocString)(e);return"BED"===n?e.assemblyName===o||"all"===o?"".concat(e.refName,"\t").concat(e.start,"\t").concat(e.end,"\t").concat(t.slice(0,255),"\n"):"":"".concat(e.refName,"\t").concat(e.start+1,"\t").concat(e.end,"\t").concat(t,"\t").concat(e.assemblyName,"\t").concat(a,"\n")})).reduce((function(e,n){return e+n}),a),s=new Blob([i||""],{type:"BED"===n?"text/x-bed;charset=utf-8":"text/tab-separated-values;charset=utf-8"});t="BED"===n?"jbrowse_bookmarks_".concat(o,".bed"):"jbrowse_bookmarks.tsv",(0,A.saveAs)(s,t)}(b,f,n),l(!1)},children:"Download"})]})]})]})})),V=r(84291),_=r(53557),E=r(33528),W=r(32207),z=(0,m.ZL)()((function(){return{closeDialog:{position:"absolute",right:0,top:0},dialogContainer:{margin:15},flexItem:{margin:5}}}));var O=(0,l.observer)((function(e){var n=e.model,r=e.assemblyName,t=z().classes,o=(0,h.getSession)(n),a=o.assemblyNames,l=(0,s.useState)(!1),c=(0,i.Z)(l,2),m=c[0],f=c[1],x=(0,s.useState)(),b=(0,i.Z)(x,2),Z=b[0],v=b[1],j=(0,s.useState)(),g=(0,i.Z)(j,2),D=g[0],L=g[1],B=(0,s.useState)(r||a[0]),A=(0,i.Z)(B,2),M=A[0],R=A[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(N.Z,{startIcon:(0,p.jsx)(W.Z,{}),onClick:function(){return f(!0)},children:"Import"}),(0,p.jsxs)(k.Z,{open:m,onClose:function(){return f(!1)},maxWidth:"xl",children:[(0,p.jsxs)(y.Z,{children:["Import bookmarks",(0,p.jsx)(u.Z,{className:t.closeDialog,"aria-label":"close-dialog",onClick:function(){return f(!1)},children:(0,p.jsx)(S.Z,{})})]}),(0,p.jsxs)(C.Z,{children:[(0,p.jsx)(d.Z,{children:"Choose a BED format file to import. The first 4 columns will be used"}),(0,p.jsx)(_.FileSelector,{location:Z,setLocation:v,name:"File"}),(0,p.jsx)(d.Z,{children:"Select assembly that your data belongs to"}),(0,p.jsx)(V.Z,{onChange:function(e){return R(e)},session:o,selected:M}),D?(0,p.jsx)(d.Z,{color:"error",variant:"h6",children:"".concat(D)}):null]}),(0,p.jsxs)(w.Z,{children:[(0,p.jsx)(N.Z,{variant:"contained",color:"secondary",onClick:function(){return f(!1)},children:"Cancel"}),(0,p.jsx)(N.Z,{className:t.flexItem,"data-testid":"dialogImport",variant:"contained",color:"primary",disabled:!Z,startIcon:(0,p.jsx)(W.Z,{}),onClick:(0,I.Z)((0,F.Z)().mark((function e(){var r,t;return(0,F.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Z){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,E.openLocation)(Z).readFile("utf8");case 5:r=e.sent,t=r.split(/\n|\r\n|\r/).filter((function(e){return!!e.trim()})).filter((function(e){return!e.startsWith("#")&&!e.startsWith("track")&&!e.startsWith("browser")})).map((function(e){var n=e.split("\t"),r=(0,i.Z)(n,4),t=r[0],o=r[1],a=r[2],s=r[3];return{assemblyName:M,refName:t,start:+o,end:+a,label:"."===s?void 0:s}})),n.importBookmarks(t),f(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),L(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),children:"Import"})]})]})]})})),H=r(44971),P=(0,m.ZL)()((function(){return{closeDialog:{position:"absolute",right:0,top:0},dialogContainer:{margin:15}}}));var G=(0,l.observer)((function(e){var n=e.model,r=P().classes,t=(0,s.useState)(!1),o=(0,i.Z)(t,2),a=o[0],l=o[1],c=n.clearAllBookmarks;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(N.Z,{startIcon:(0,p.jsx)(H.Z,{}),"aria-label":"clear bookmarks",onClick:function(){return l(!0)},children:"Clear"}),(0,p.jsxs)(k.Z,{open:a,onClose:function(){return l(!1)},children:[(0,p.jsxs)(y.Z,{children:["Clear bookmarks",(0,p.jsx)(u.Z,{className:r.closeDialog,"aria-label":"close-dialog",onClick:function(){return l(!1)},children:(0,p.jsx)(S.Z,{})})]}),(0,p.jsx)(C.Z,{children:(0,p.jsx)(d.Z,{children:"Clear all bookmarks? Note this will clear bookmarks for all assemblies"})}),(0,p.jsxs)(w.Z,{children:[(0,p.jsx)(N.Z,{variant:"contained",color:"secondary",onClick:function(){l(!1)},children:"Cancel"}),(0,p.jsx)(N.Z,{variant:"contained",color:"primary",onClick:function(){c(),l(!1)},children:"Confirm"})]})]})]})})),J=["assemblyName"],q=(0,m.ZL)()((function(){return{link:{cursor:"pointer"}}})),K=function(e,n){return Math.min(Math.max((0,h.measureText)(String(e[n]),14)+20,80),1e3)},Q=(0,l.observer)((function(e){var n=e.model,r=q().classes,l=(0,s.useState)(),d=(0,i.Z)(l,2),m=d[0],b=d[1],Z=n.bookmarkedRegions,v=n.selectedAssembly,j=(0,h.getSession)(n).views,g=Z.filter((function(e){return"all"===v||e.assemblyName===v})).map((function(e,n){e.assemblyName;var r=(0,a.Z)(e,J);return(0,o.Z)((0,o.Z)({},e),{},{id:n,delete:n,locString:(0,h.assembleLocString)("all"===v?e:r)})})),k=[{field:"locString",headerName:"bookmark link",width:Math.max.apply(Math,(0,t.Z)(g.map((function(e){return K(e,"locString")})))),renderCell:function(e){var t=e.value;return(0,p.jsx)(c.Z,{className:r.link,onClick:function(e){!function(e,n,r){M.apply(this,arguments)}(t,j,n),e.preventDefault()},children:t})}},{field:"label",width:Math.max(100,Math.max.apply(Math,(0,t.Z)(g.map((function(e){return K(e,"label")}))))),editable:!0},{field:"delete",width:30,renderCell:function(e){var n=e.value;return(0,p.jsx)(u.Z,{"data-testid":"deleteBookmark","aria-label":"delete",onClick:function(){null!==n&&void 0!==n&&b(+n)},children:(0,p.jsx)(x.Z,{})})}}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f._,{density:"compact",rows:g,columns:k,onCellEditCommit:function(e){var r=e.value,t=e.id;n.updateBookmarkLabel(t,r)},disableSelectionOnClick:!0}),(0,p.jsx)(L,{rowNumber:m,model:n,onClose:function(){return b(void 0)}})]})}));var U=(0,l.observer)((function(e){var n=e.model,r=n.selectedAssembly;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{model:n}),(0,p.jsx)(T,{model:n}),(0,p.jsx)(O,{model:n,assemblyName:r}),(0,p.jsx)(G,{model:n}),(0,p.jsx)("div",{style:{margin:12},children:(0,p.jsxs)(d.Z,{children:["Note: you can double click the ",(0,p.jsx)("code",{children:"label"})," field to add your own custom notes"]})}),(0,p.jsx)("div",{style:{height:750,width:"100%"},children:(0,p.jsx)(Q,{model:n})})]})}))},32207:function(e,n,r){var t=r(71600);n.Z=void 0;var o=t(r(48035)),a=r(37574),i=(0,o.default)((0,a.jsx)("path",{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"}),"Publish");n.Z=i},77491:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(68079),o=r(96234),a=r(56666),i=r(31461),s=r(7896),l=r(30969),c=r(81856),u=r(26540),d=r(99853),m=r(62221),f=r(2441),h=r(46827),x=r(63970),b=r(70054),Z=r(44121),v=r(43565),p=r(74262),j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},g=function(e){var n=e.theme,r=e.ownerState,t=function(e){return j[e]||e}(r.color),o=(0,v.D)(n,"palette.".concat(t),!1)||r.color,a=(0,v.D)(n,"palette.".concat(t,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,p.Fq)(o,.4)},k=r(37574),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,m.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:g({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(Z.Z.focusVisible),{outline:"auto"}))})),w=l.forwardRef((function(e,n){var r=(0,f.Z)({props:e,name:"MuiLink"}),a=r.className,m=r.color,b=void 0===m?"primary":m,v=r.component,p=void 0===v?"a":v,g=r.onBlur,w=r.onFocus,N=r.TypographyClasses,S=r.underline,D=void 0===S?"always":S,L=r.variant,B=void 0===L?"inherit":L,F=r.sx,I=(0,i.Z)(r,y),A=(0,h.Z)(),M=A.isFocusVisibleRef,R=A.onBlur,T=A.onFocus,V=A.ref,_=l.useState(!1),E=(0,o.Z)(_,2),W=E[0],z=E[1],O=(0,x.Z)(n,V),H=(0,s.Z)({},r,{color:b,component:p,focusVisible:W,underline:D,variant:B}),P=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,d.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(a,Z.w,n)}(H);return(0,k.jsx)(C,(0,s.Z)({color:b,className:(0,c.default)(P.root,a),classes:N,component:p,onBlur:function(e){R(e),!1===M.current&&z(!1),g&&g(e)},onFocus:function(e){T(e),!0===M.current&&z(!0),w&&w(e)},ref:O,ownerState:H,variant:B,sx:[].concat((0,t.Z)(Object.keys(j).includes(b)?[]:[{color:b}]),(0,t.Z)(Array.isArray(F)?F:[F]))},I))}))},44121:function(e,n,r){r.d(n,{w:function(){return o}});var t=r(2975);function o(e){return(0,t.Z)("MuiLink",e)}var a=(0,r(62746).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);n.Z=a}}]);
//# sourceMappingURL=7135.f9e25a04.chunk.js.map