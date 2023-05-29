"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8441,2836],{79662:function(e,n,r){r.r(n),r.d(n,{default:function(){return H}});var t=r(32723),o=r(34795),a=r(33028),i=r(59740),l=r(96234),c=r(96902),s=r(4782),u=r(63348),d=r(25322),m=r(35388),v=r(91188),f=r(615),h=r(27664),g=r(31946),p=r(13655),b=r(33266),Z=r(15996),x=r(29938),y=(0,v.ZL)()((function(){return{container:{display:"flex",flexDirection:"row",margin:5},selectText:{marginRight:8,marginTop:10},flexItem:{marginRight:8}}}));var j=(0,s.observer)((function(e){var n=e.model,r=y().classes,t=n.assemblies,o=n.selectedAssembly,a=n.setSelectedAssembly,i=0===t.length;return(0,x.jsxs)("div",{className:r.container,children:[(0,x.jsx)(m.Z,{className:r.selectText,children:"Select assembly:"}),(0,x.jsx)(p.Z,{className:r.flexItem,disabled:i,children:(0,x.jsxs)(b.Z,{value:function(e){return"all"===e?"all":t.includes(e)?e:"none"}(o),onChange:function(e){return a(e.target.value)},children:[(0,x.jsx)(Z.Z,{value:"none",children:"none"}),(0,x.jsx)(Z.Z,{value:"all",children:"all"}),t.map((function(e){return(0,x.jsx)(Z.Z,{value:e,children:e},e)}))]})})]})})),k=r(17867),w=r(52809),C=r(99688),S=r(44536);var O=(0,s.observer)((function(e){var n=e.rowNumber,r=e.model,t=e.onClose;return(0,x.jsxs)(k.Dialog,{open:void 0!==n,onClose:t,title:"Delete bookmark",children:[(0,x.jsx)(w.Z,{children:(0,x.jsxs)(m.Z,{children:["Remove"," ",(0,x.jsx)("code",{children:void 0!==n?(0,h.assembleLocString)(r.bookmarkedRegions[n]):""})," ","?"]})}),(0,x.jsxs)(C.Z,{children:[(0,x.jsx)(S.Z,{variant:"contained",color:"secondary",onClick:function(){return t()},children:"Cancel"}),(0,x.jsx)(S.Z,{variant:"contained",color:"primary",onClick:function(){void 0!==n&&(r.removeBookmark(n),t())},children:"Confirm"})]})]})})),N=r(14393),R=r(64837);function L(e,n,r){return B.apply(this,arguments)}function B(){return(B=(0,o.Z)((0,t.Z)().mark((function e(n,r,o){var a,i,l,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,h.getSession)(o),e.prev=1,i=o.selectedAssembly,l="".concat(o.id,"_").concat(i),(c=r.find((function(e){return"LinearGenomeView"===e.type&&e.id===l}))||r.find((function(e){return"LinearGenomeView"===e.type&&e.assemblyNames[0]===i})))||(c=a.addView("LinearGenomeView",{id:l})),e.next=8,c.navToLocString(n,i);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),a.notify("".concat(e.t0),"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var T=(0,v.ZL)()((function(){return{flexItem:{margin:5}}}));var D=(0,s.observer)((function(e){var n=e.model,r=T().classes,t=(0,c.useState)(!1),o=(0,l.Z)(t,2),a=o[0],i=o[1],s=(0,c.useState)("BED"),u=(0,l.Z)(s,2),d=u[0],v=u[1],f=n.bookmarkedRegions;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S.Z,{startIcon:(0,x.jsx)(N.Z,{}),onClick:function(){return i(!0)},children:"Download"}),(0,x.jsxs)(k.Dialog,{open:a,onClose:function(){return i(!1)},title:"Download bookmarks",children:[(0,x.jsxs)(w.Z,{children:[(0,x.jsx)(m.Z,{children:"Format to download"}),(0,x.jsxs)(b.Z,{className:r.flexItem,"data-testid":"selectFileType",value:d,onChange:function(e){return v(e.target.value)},children:[(0,x.jsx)(Z.Z,{value:"BED",children:"BED"}),(0,x.jsx)(Z.Z,{value:"TSV",children:"TSV"})]})]}),(0,x.jsxs)(C.Z,{children:[(0,x.jsx)(S.Z,{variant:"contained",color:"secondary",onClick:function(){return i(!1)},children:"Cancel"}),(0,x.jsx)(S.Z,{className:r.flexItem,"data-testid":"dialogDownload",variant:"contained",color:"primary",startIcon:(0,x.jsx)(N.Z,{}),onClick:function(){!function(e,n,r){var t=r.selectedAssembly,o="TSV"===n?"chrom\tstart\tend\tlabel\tassembly_name\tcoord_range\n":"",a=e.map((function(e){var r=e.label,o=""===r?".":r,a=(0,h.assembleLocString)(e);return"BED"===n?e.assemblyName===t||"all"===t?"".concat(e.refName,"\t").concat(e.start,"\t").concat(e.end,"\t").concat(o,"\n"):"":"".concat(e.refName,"\t").concat(e.start+1,"\t").concat(e.end,"\t").concat(o,"\t").concat(e.assemblyName,"\t").concat(a,"\n")})).reduce((function(e,n){return e+n}),o),i=new Blob([a||""],{type:"BED"===n?"text/x-bed;charset=utf-8":"text/tab-separated-values;charset=utf-8"}),l="BED"===n?"jbrowse_bookmarks_".concat(t,".bed"):"jbrowse_bookmarks.tsv";(0,R.saveAs)(i,l)}(f,d,n),i(!1)},children:"Download"})]})]})]})})),E=r(78884),I=r(32145),z=r(73823),F=(0,v.ZL)()((function(){return{dialogContainer:{margin:15},flexItem:{margin:5}}}));var M=(0,s.observer)((function(e){var n=e.model,r=e.assemblyName,a=F().classes,i=(0,h.getSession)(n),s=i.assemblyNames,u=(0,c.useState)(!1),d=(0,l.Z)(u,2),v=d[0],f=d[1],g=(0,c.useState)(),p=(0,l.Z)(g,2),b=p[0],Z=p[1],y=(0,c.useState)(),j=(0,l.Z)(y,2),O=j[0],N=j[1],R=(0,c.useState)(r||s[0]),L=(0,l.Z)(R,2),B=L[0],T=L[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S.Z,{startIcon:(0,x.jsx)(z.Z,{}),onClick:function(){return f(!0)},children:"Import"}),(0,x.jsxs)(k.Dialog,{open:v,onClose:function(){return f(!1)},maxWidth:"xl",title:"Import bookmarks",children:[(0,x.jsxs)(w.Z,{children:[(0,x.jsx)(m.Z,{children:"Choose a BED format file to import. The first 4 columns will be used"}),(0,x.jsx)(k.FileSelector,{location:b,setLocation:Z,name:"File"}),(0,x.jsx)(m.Z,{children:"Select assembly that your data belongs to"}),(0,x.jsx)(E.Z,{onChange:function(e){return T(e)},session:i,selected:B}),O?(0,x.jsx)(m.Z,{color:"error",variant:"h6",children:"".concat(O)}):null]}),(0,x.jsxs)(C.Z,{children:[(0,x.jsx)(S.Z,{variant:"contained",color:"secondary",onClick:function(){return f(!1)},children:"Cancel"}),(0,x.jsx)(S.Z,{className:a.flexItem,"data-testid":"dialogImport",variant:"contained",color:"primary",disabled:!b,startIcon:(0,x.jsx)(z.Z,{}),onClick:(0,o.Z)((0,t.Z)().mark((function e(){var r,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,b){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,I.openLocation)(b).readFile("utf8");case 5:r=e.sent,o=r.split(/\n|\r\n|\r/).filter((function(e){return!!e.trim()})).filter((function(e){return!e.startsWith("#")&&!e.startsWith("track")&&!e.startsWith("browser")})).map((function(e){var n=e.split("\t"),r=(0,l.Z)(n,4),t=r[0],o=r[1],a=r[2],i=r[3];return{assemblyName:B,refName:t,start:+o,end:+a,label:"."===i?void 0:i}})),n.importBookmarks(o),f(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),N(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])}))),children:"Import"})]})]})]})})),V=r(4987);var A=(0,s.observer)((function(e){var n=e.model,r=(0,c.useState)(!1),t=(0,l.Z)(r,2),o=t[0],a=t[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(S.Z,{startIcon:(0,x.jsx)(V.Z,{}),"aria-label":"clear bookmarks",onClick:function(){return a(!0)},children:"Clear"}),(0,x.jsxs)(k.Dialog,{open:o,onClose:function(){return a(!1)},title:"Clear bookmarks",children:[(0,x.jsx)(w.Z,{children:(0,x.jsx)(m.Z,{children:"Clear all bookmarks? Note this will clear bookmarks for all assemblies"})}),(0,x.jsxs)(C.Z,{children:[(0,x.jsx)(S.Z,{variant:"contained",color:"secondary",onClick:function(){a(!1)},children:"Cancel"}),(0,x.jsx)(S.Z,{variant:"contained",color:"primary",onClick:function(){n.clearAllBookmarks(),a(!1)},children:"Confirm"})]})]})]})})),P=["assemblyName"],W=(0,v.ZL)()((function(e){return{link:{cursor:"pointer"},margin:{margin:e.spacing(2)}}})),G=(0,s.observer)((function(e){var n=e.model,r=W().classes,s=(0,c.useState)(),m=(0,l.Z)(s,2),v=m[0],p=m[1],b=n.bookmarkedRegions,Z=n.selectedAssembly,y=(0,h.getSession)(n).views,j=b.filter((function(e){return"all"===Z||e.assemblyName===Z})).map((function(e,n){e.assemblyName;var r=(0,i.Z)(e,P);return(0,a.Z)((0,a.Z)({},e),{},{id:n,delete:n,locString:(0,h.assembleLocString)("all"===Z?e:r)})}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f._,{density:"compact",rows:j,columns:[{field:"locString",headerName:"bookmark link",width:(0,h.measureGridWidth)(j.map((function(e){return e.locString}))),renderCell:function(e){return(0,x.jsx)(u.Z,{className:r.link,href:"#",onClick:function(){var r=(0,o.Z)((0,t.Z)().mark((function r(o){return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o.preventDefault(),r.next=3,L(e.value,y,n);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),children:e.value})}},{field:"label",width:(0,h.measureGridWidth)(j.map((function(e){return e.label}))),editable:!0},{field:"delete",width:100,renderCell:function(e){return(0,x.jsx)(d.Z,{"data-testid":"deleteBookmark","aria-label":"delete",onClick:function(){null!=e.value&&p(+e.value)},children:(0,x.jsx)(g.Z,{})})}}],onCellEditStop:function(e){var r=e.id,t=e.value;return n.updateBookmarkLabel(r,t)},disableRowSelectionOnClick:!0}),(0,x.jsx)(O,{rowNumber:v,model:n,onClose:function(){return p(void 0)}})]})}));var H=(0,s.observer)((function(e){var n=e.model,r=n.selectedAssembly,t=W().classes;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j,{model:n}),(0,x.jsx)(D,{model:n}),(0,x.jsx)(M,{model:n,assemblyName:r}),(0,x.jsx)(A,{model:n}),(0,x.jsxs)(m.Z,{className:t.margin,children:["Note: you can double click the ",(0,x.jsx)("code",{children:"label"})," field to add your own custom notes"]}),(0,x.jsx)(G,{model:n})]})}))},99051:function(e,n,r){var t=r(96902),o=r(55006),a=r(3677),i=r(92745),l=r(29938);function c(e){return e.substring(2).toLowerCase()}n.Z=function(e){var n=e.children,r=e.disableReactTree,s=void 0!==r&&r,u=e.mouseEvent,d=void 0===u?"onClick":u,m=e.onClickAway,v=e.touchEvent,f=void 0===v?"onTouchEnd":v,h=t.useRef(!1),g=t.useRef(null),p=t.useRef(!1),b=t.useRef(!1);t.useEffect((function(){return setTimeout((function(){p.current=!0}),0),function(){p.current=!1}}),[]);var Z=(0,o.Z)(n.ref,g),x=(0,a.Z)((function(e){var n=b.current;b.current=!1;var r=(0,i.Z)(g.current);!p.current||!g.current||"clientX"in e&&function(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}(e,r)||(h.current?h.current=!1:(e.composedPath?e.composedPath().indexOf(g.current)>-1:!r.documentElement.contains(e.target)||g.current.contains(e.target))||!s&&n||m(e))})),y=function(e){return function(r){b.current=!0;var t=n.props[e];t&&t(r)}},j={ref:Z};return!1!==f&&(j[f]=y(f)),t.useEffect((function(){if(!1!==f){var e=c(f),n=(0,i.Z)(g.current),r=function(){h.current=!0};return n.addEventListener(e,x),n.addEventListener("touchmove",r),function(){n.removeEventListener(e,x),n.removeEventListener("touchmove",r)}}}),[x,f]),!1!==d&&(j[d]=y(d)),t.useEffect((function(){if(!1!==d){var e=c(d),n=(0,i.Z)(g.current);return n.addEventListener(e,x),function(){n.removeEventListener(e,x)}}}),[x,d]),(0,l.jsx)(t.Fragment,{children:t.cloneElement(n,j)})}},31946:function(e,n,r){var t=r(71600);n.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},14393:function(e,n,r){var t=r(71600);n.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");n.Z=i},73823:function(e,n,r){var t=r(71600);n.Z=void 0;var o=t(r(7152)),a=r(29938),i=(0,o.default)((0,a.jsx)("path",{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"}),"Publish");n.Z=i},98453:function(e,n,r){r.d(n,{Z:function(){return Z}});var t=r(56666),o=r(31461),a=r(7896),i=r(96902),l=r(24463),c=r(39875),s=r(73674);var u=r(27744),d=r(2252),m=r(53068),v=r(70378),f=r(60628),h=r(29938),g=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],p=(0,d.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(e,n){return n.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,d.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(e,n){var r=e.ownerState;return[n.badge,n[r.variant],n["anchorOrigin".concat((0,v.Z)(r.anchorOrigin.vertical)).concat((0,v.Z)(r.anchorOrigin.horizontal)).concat((0,v.Z)(r.overlap))],"default"!==r.color&&n["color".concat((0,v.Z)(r.color))],r.invisible&&n.invisible]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:n.typography.fontFamily,fontWeight:n.typography.fontWeightMedium,fontSize:n.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.enteringScreen})},"default"!==r.color&&{backgroundColor:(n.vars||n).palette[r.color].main,color:(n.vars||n).palette[r.color].contrastText},"dot"===r.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&(0,t.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&(0,t.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&(0,t.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap&&(0,t.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&(0,t.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&(0,t.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&(0,t.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap&&(0,t.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(f.Z.invisible),{transform:"scale(0) translate(-50%, 50%)"}),r.invisible&&{transition:n.transitions.create("transform",{easing:n.transitions.easing.easeInOut,duration:n.transitions.duration.leavingScreen})})})),Z=i.forwardRef((function(e,n){var r,t,i,d,Z,x,y=(0,m.Z)({props:e,name:"MuiBadge"}),j=y.anchorOrigin,k=void 0===j?{vertical:"top",horizontal:"right"}:j,w=y.className,C=y.component,S=y.components,O=void 0===S?{}:S,N=y.componentsProps,R=void 0===N?{}:N,L=y.children,B=y.overlap,T=void 0===B?"rectangular":B,D=y.color,E=void 0===D?"default":D,I=y.invisible,z=void 0!==I&&I,F=y.max,M=void 0===F?99:F,V=y.badgeContent,A=y.slots,P=y.slotProps,W=y.showZero,G=void 0!==W&&W,H=y.variant,_=void 0===H?"standard":H,X=(0,o.Z)(y,g),q=function(e){var n=e.badgeContent,r=e.invisible,t=void 0!==r&&r,o=e.max,a=void 0===o?99:o,i=e.showZero,l=void 0!==i&&i,s=(0,c.Z)({badgeContent:n,max:a}),u=t;!1!==t||0!==n||l||(u=!0);var d=u?s:e,m=d.badgeContent,v=d.max,f=void 0===v?a:v;return{badgeContent:m,invisible:u,max:f,displayValue:m&&Number(m)>f?"".concat(f,"+"):m}}({max:M,invisible:z,badgeContent:V,showZero:G}),Y=q.badgeContent,J=q.invisible,K=q.max,Q=q.displayValue,U=(0,c.Z)({anchorOrigin:k,color:E,overlap:T,variant:_,badgeContent:V}),$=J||null==Y&&"dot"!==_,ee=$?U:y,ne=ee.color,re=void 0===ne?E:ne,te=ee.overlap,oe=void 0===te?T:te,ae=ee.anchorOrigin,ie=void 0===ae?k:ae,le=ee.variant,ce=void 0===le?_:le,se="dot"!==ce?Q:void 0,ue=(0,a.Z)({},y,{badgeContent:Y,invisible:$,max:K,displayValue:se,showZero:G,anchorOrigin:ie,color:re,overlap:oe,variant:ce}),de=function(e){var n=e.color,r=e.anchorOrigin,t=e.invisible,o=e.overlap,a=e.variant,i=e.classes,l=void 0===i?{}:i,c={root:["root"],badge:["badge",a,t&&"invisible","anchorOrigin".concat((0,v.Z)(r.vertical)).concat((0,v.Z)(r.horizontal)),"anchorOrigin".concat((0,v.Z)(r.vertical)).concat((0,v.Z)(r.horizontal)).concat((0,v.Z)(o)),"overlap".concat((0,v.Z)(o)),"default"!==n&&"color".concat((0,v.Z)(n))]};return(0,s.Z)(c,f.I,l)}(ue),me=null!=(r=null!=(t=null==A?void 0:A.root)?t:O.Root)?r:p,ve=null!=(i=null!=(d=null==A?void 0:A.badge)?d:O.Badge)?i:b,fe=null!=(Z=null==P?void 0:P.root)?Z:R.root,he=null!=(x=null==P?void 0:P.badge)?x:R.badge,ge=(0,u.Z)({elementType:me,externalSlotProps:fe,externalForwardedProps:X,additionalProps:{ref:n,as:C},ownerState:ue,className:(0,l.default)(null==fe?void 0:fe.className,de.root,w)}),pe=(0,u.Z)({elementType:ve,externalSlotProps:he,ownerState:ue,className:(0,l.default)(de.badge,null==he?void 0:he.className)});return(0,h.jsxs)(me,(0,a.Z)({},ge,{children:[L,(0,h.jsx)(ve,(0,a.Z)({},pe,{children:se}))]}))}))},60628:function(e,n,r){r.d(n,{I:function(){return a}});var t=r(74732),o=r(61235);function a(e){return(0,o.Z)("MuiBadge",e)}var i=(0,t.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);n.Z=i},63348:function(e,n,r){r.d(n,{Z:function(){return C}});var t=r(68079),o=r(96234),a=r(56666),i=r(31461),l=r(7896),c=r(96902),s=r(24463),u=r(73674),d=r(70378),m=r(2252),v=r(53068),f=r(89779),h=r(22756),g=r(35388),p=r(974),b=r(72762),Z=r(16644),x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=function(e){var n=e.theme,r=e.ownerState,t=function(e){return x[e]||e}(r.color),o=(0,b.DW)(n,"palette.".concat(t),!1)||r.color,a=(0,b.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,Z.Fq)(o,.4)},j=r(29938),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],w=(0,m.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,l.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:y({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(p.Z.focusVisible),{outline:"auto"}))})),C=c.forwardRef((function(e,n){var r=(0,v.Z)({props:e,name:"MuiLink"}),a=r.className,m=r.color,g=void 0===m?"primary":m,b=r.component,Z=void 0===b?"a":b,y=r.onBlur,C=r.onFocus,S=r.TypographyClasses,O=r.underline,N=void 0===O?"always":O,R=r.variant,L=void 0===R?"inherit":R,B=r.sx,T=(0,i.Z)(r,k),D=(0,f.Z)(),E=D.isFocusVisibleRef,I=D.onBlur,z=D.onFocus,F=D.ref,M=c.useState(!1),V=(0,o.Z)(M,2),A=V[0],P=V[1],W=(0,h.Z)(n,F),G=(0,l.Z)({},r,{color:g,component:Z,focusVisible:A,underline:N,variant:L}),H=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,d.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(a,p.w,n)}(G);return(0,j.jsx)(w,(0,l.Z)({color:g,className:(0,s.default)(H.root,a),classes:S,component:Z,onBlur:function(e){I(e),!1===E.current&&P(!1),y&&y(e)},onFocus:function(e){z(e),!0===E.current&&P(!0),C&&C(e)},ref:W,ownerState:G,variant:L,sx:[].concat((0,t.Z)(Object.keys(x).includes(g)?[]:[{color:g}]),(0,t.Z)(Array.isArray(B)?B:[B]))},T))}))},974:function(e,n,r){r.d(n,{w:function(){return a}});var t=r(74732),o=r(61235);function a(e){return(0,o.Z)("MuiLink",e)}var i=(0,t.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);n.Z=i},82658:function(e,n,r){var t=r(56666),o=r(31461),a=r(7896),i=r(96902),l=r(24463),c=r(73674),s=r(53068),u=r(2252),d=r(24248),m=r(29938),v=["className","component","disableGutters","variant"],f=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,!r.disableGutters&&n.gutters,n[r.variant]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,t.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(e){var n=e.theme;return"regular"===e.ownerState.variant&&n.mixins.toolbar})),h=i.forwardRef((function(e,n){var r=(0,s.Z)({props:e,name:"MuiToolbar"}),t=r.className,i=r.component,u=void 0===i?"div":i,h=r.disableGutters,g=void 0!==h&&h,p=r.variant,b=void 0===p?"regular":p,Z=(0,o.Z)(r,v),x=(0,a.Z)({},r,{component:u,disableGutters:g,variant:b}),y=function(e){var n=e.classes,r={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,c.Z)(r,d.N,n)}(x);return(0,m.jsx)(f,(0,a.Z)({as:u,className:(0,l.default)(y.root,t),ref:n,ownerState:x},Z))}));n.Z=h},24248:function(e,n,r){r.d(n,{N:function(){return a}});var t=r(74732),o=r(61235);function a(e){return(0,o.Z)("MuiToolbar",e)}var i=(0,t.Z)("MuiToolbar",["root","gutters","regular","dense"]);n.Z=i}}]);
//# sourceMappingURL=8441.bc3e92ff.chunk.js.map