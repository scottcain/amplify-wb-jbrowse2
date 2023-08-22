"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[534],{68217:function(e,t,n){var a=n(96902).createContext();t.Z=a},94556:function(e,t,n){var a=n(96902).createContext();t.Z=a},27344:function(e,t,n){var a=n(56666),o=n(31461),i=n(7896),r=n(96902),s=n(37032),l=n(73674),c=n(16644),d=n(70378),p=n(68217),u=n(94556),g=n(53068),h=n(2252),Z=n(47711),v=n(29938),f=["align","className","component","padding","scope","size","sortDirection","variant"],m=(0,h.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat((0,d.Z)(n.size))],"normal"!==n.padding&&t["padding".concat((0,d.Z)(n.padding))],"inherit"!==n.align&&t["align".concat((0,d.Z)(n.align))],n.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,c.$n)((0,c.Fq)(t.palette.divider,1),.88):(0,c._j)((0,c.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===n.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===n.variant&&{color:(t.vars||t).palette.text.primary},"footer"===n.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===n.size&&(0,a.Z)({padding:"6px 16px"},"&.".concat(Z.Z.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===n.padding&&{width:48,padding:"0 0 0 4px"},"none"===n.padding&&{padding:0},"left"===n.align&&{textAlign:"left"},"center"===n.align&&{textAlign:"center"},"right"===n.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===n.align&&{textAlign:"justify"},n.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),b=r.forwardRef((function(e,t){var n,a=(0,g.Z)({props:e,name:"MuiTableCell"}),c=a.align,h=void 0===c?"inherit":c,b=a.className,x=a.component,P=a.padding,w=a.scope,y=a.size,R=a.sortDirection,k=a.variant,j=(0,o.Z)(a,f),I=r.useContext(p.Z),C=r.useContext(u.Z),L=C&&"head"===C.variant,M=w;"td"===(n=x||(L?"th":"td"))?M=void 0:!M&&L&&(M="col");var z=k||C&&C.variant,B=(0,i.Z)({},a,{align:h,component:n,padding:P||(I&&I.padding?I.padding:"normal"),size:y||(I&&I.size?I.size:"medium"),sortDirection:R,stickyHeader:"head"===z&&I&&I.stickyHeader,variant:z}),S=function(e){var t=e.classes,n=e.variant,a=e.align,o=e.padding,i=e.size,r={root:["root",n,e.stickyHeader&&"stickyHeader","inherit"!==a&&"align".concat((0,d.Z)(a)),"normal"!==o&&"padding".concat((0,d.Z)(o)),"size".concat((0,d.Z)(i))]};return(0,l.Z)(r,Z.U,t)}(B),T=null;return R&&(T="asc"===R?"ascending":"descending"),(0,v.jsx)(m,(0,i.Z)({as:n,ref:t,className:(0,s.Z)(S.root,b),"aria-sort":T,scope:M,ownerState:B},j))}));t.Z=b},47711:function(e,t,n){n.d(t,{U:function(){return i}});var a=n(74732),o=n(61235);function i(e){return(0,o.Z)("MuiTableCell",e)}var r=(0,a.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.Z=r},30534:function(e,t,n){n.d(t,{Z:function(){return G}});var a,o,i,r,s,l,c,d,p,u=n(56666),g=n(31461),h=n(7896),Z=n(96902),v=n(37032),f=n(73674),m=n(16693),b=n(2252),x=n(53068),P=n(14368),w=n(15996),y=n(33266),R=n(27344),k=n(82658),j=n(61452),I=n(10835),C=n(88636),L=n(25322),M=n(88230),z=n(71470),B=n(29938),S=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],T=Z.forwardRef((function(e,t){var n=e.backIconButtonProps,p=e.count,u=e.getItemAriaLabel,Z=e.nextIconButtonProps,v=e.onPageChange,f=e.page,m=e.rowsPerPage,b=e.showFirstButton,x=e.showLastButton,P=(0,g.Z)(e,S),w=(0,C.Z)();return(0,B.jsxs)("div",(0,h.Z)({ref:t},P,{children:[b&&(0,B.jsx)(L.Z,{onClick:function(e){v(e,0)},disabled:0===f,"aria-label":u("first",f),title:u("first",f),children:"rtl"===w.direction?a||(a=(0,B.jsx)(M.Z,{})):o||(o=(0,B.jsx)(z.Z,{}))}),(0,B.jsx)(L.Z,(0,h.Z)({onClick:function(e){v(e,f-1)},disabled:0===f,color:"inherit","aria-label":u("previous",f),title:u("previous",f)},n,{children:"rtl"===w.direction?i||(i=(0,B.jsx)(I.Z,{})):r||(r=(0,B.jsx)(j.Z,{}))})),(0,B.jsx)(L.Z,(0,h.Z)({onClick:function(e){v(e,f+1)},disabled:-1!==p&&f>=Math.ceil(p/m)-1,color:"inherit","aria-label":u("next",f),title:u("next",f)},Z,{children:"rtl"===w.direction?s||(s=(0,B.jsx)(j.Z,{})):l||(l=(0,B.jsx)(I.Z,{}))})),x&&(0,B.jsx)(L.Z,{onClick:function(e){v(e,Math.max(0,Math.ceil(p/m)-1))},disabled:f>=Math.ceil(p/m)-1,"aria-label":u("last",f),title:u("last",f),children:"rtl"===w.direction?c||(c=(0,B.jsx)(z.Z,{})):d||(d=(0,B.jsx)(M.Z,{}))})]}))})),A=n(14989),H=n(20308),N=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],F=(0,b.ZP)(R.Z,{name:"MuiTablePagination",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),D=(0,b.ZP)(k.Z,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:function(e,t){return(0,h.Z)((0,u.Z)({},"& .".concat(H.Z.actions),t.actions),t.toolbar)}})((function(e){var t,n=e.theme;return t={minHeight:52,paddingRight:2},(0,u.Z)(t,"".concat(n.breakpoints.up("xs")," and (orientation: landscape)"),{minHeight:52}),(0,u.Z)(t,n.breakpoints.up("sm"),{minHeight:52,paddingRight:2}),(0,u.Z)(t,"& .".concat(H.Z.actions),{flexShrink:0,marginLeft:20}),t})),_=(0,b.ZP)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:function(e,t){return t.spacer}})({flex:"1 1 100%"}),U=(0,b.ZP)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:function(e,t){return t.selectLabel}})((function(e){var t=e.theme;return(0,h.Z)({},t.typography.body2,{flexShrink:0})})),q=(0,b.ZP)(y.Z,{name:"MuiTablePagination",slot:"Select",overridesResolver:function(e,t){var n;return(0,h.Z)((n={},(0,u.Z)(n,"& .".concat(H.Z.selectIcon),t.selectIcon),(0,u.Z)(n,"& .".concat(H.Z.select),t.select),n),t.input,t.selectRoot)}})((0,u.Z)({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8},"& .".concat(H.Z.select),{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"})),K=(0,b.ZP)(w.Z,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:function(e,t){return t.menuItem}})({}),O=(0,b.ZP)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:function(e,t){return t.displayedRows}})((function(e){var t=e.theme;return(0,h.Z)({},t.typography.body2,{flexShrink:0})}));function W(e){var t=e.from,n=e.to,a=e.count;return"".concat(t,"\u2013").concat(n," of ").concat(-1!==a?a:"more than ".concat(n))}function E(e){return"Go to ".concat(e," page")}var G=Z.forwardRef((function(e,t){var n,a=(0,x.Z)({props:e,name:"MuiTablePagination"}),o=a.ActionsComponent,i=void 0===o?T:o,r=a.backIconButtonProps,s=a.className,l=a.colSpan,c=a.component,d=void 0===c?R.Z:c,u=a.count,b=a.getItemAriaLabel,w=void 0===b?E:b,y=a.labelDisplayedRows,k=void 0===y?W:y,j=a.labelRowsPerPage,I=void 0===j?"Rows per page:":j,C=a.nextIconButtonProps,L=a.onPageChange,M=a.onRowsPerPageChange,z=a.page,S=a.rowsPerPage,G=a.rowsPerPageOptions,J=void 0===G?[10,25,50,100]:G,X=a.SelectProps,$=void 0===X?{}:X,Q=a.showFirstButton,V=void 0!==Q&&Q,Y=a.showLastButton,ee=void 0!==Y&&Y,te=(0,g.Z)(a,N),ne=a,ae=function(e){var t=e.classes;return(0,f.Z)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},H.U,t)}(ne),oe=$.native?"option":K;d!==R.Z&&"td"!==d||(n=l||1e3);var ie=(0,A.Z)($.id),re=(0,A.Z)($.labelId);return(0,B.jsx)(F,(0,h.Z)({colSpan:n,ref:t,as:d,ownerState:ne,className:(0,v.Z)(ae.root,s)},te,{children:(0,B.jsxs)(D,{className:ae.toolbar,children:[(0,B.jsx)(_,{className:ae.spacer}),J.length>1&&(0,B.jsx)(U,{className:ae.selectLabel,id:re,children:I}),J.length>1&&(0,B.jsx)(q,(0,h.Z)({variant:"standard"},!$.variant&&{input:p||(p=(0,B.jsx)(P.ZP,{}))},{value:S,onChange:M,id:ie,labelId:re},$,{classes:(0,h.Z)({},$.classes,{root:(0,v.Z)(ae.input,ae.selectRoot,($.classes||{}).root),select:(0,v.Z)(ae.select,($.classes||{}).select),icon:(0,v.Z)(ae.selectIcon,($.classes||{}).icon)}),children:J.map((function(e){return(0,Z.createElement)(oe,(0,h.Z)({},!(0,m.X)(oe)&&{ownerState:ne},{className:ae.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)}))})),(0,B.jsx)(O,{className:ae.displayedRows,children:k({from:0===u?0:z*S+1,to:-1===u?(z+1)*S:-1===S?u:Math.min(u,(z+1)*S),count:-1===u?-1:u,page:z})}),(0,B.jsx)(i,{className:ae.actions,backIconButtonProps:r,count:u,nextIconButtonProps:C,onPageChange:L,page:z,rowsPerPage:S,showFirstButton:V,showLastButton:ee,getItemAriaLabel:w})]})}))}))},20308:function(e,t,n){n.d(t,{U:function(){return i}});var a=n(74732),o=n(61235);function i(e){return(0,o.Z)("MuiTablePagination",e)}var r=(0,a.Z)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);t.Z=r},71470:function(e,t,n){n(96902);var a=n(30992),o=n(29938);t.Z=(0,a.Z)((0,o.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},61452:function(e,t,n){n(96902);var a=n(30992),o=n(29938);t.Z=(0,a.Z)((0,o.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},10835:function(e,t,n){n(96902);var a=n(30992),o=n(29938);t.Z=(0,a.Z)((0,o.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},88230:function(e,t,n){n(96902);var a=n(30992),o=n(29938);t.Z=(0,a.Z)((0,o.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=534.c752bd1e.chunk.js.map