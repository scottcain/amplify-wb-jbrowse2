"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2790],{92790:function(e,n,t){t.r(n);var o=t(96234),i=t(33028),r=t(77162),a=t.n(r),s=t(30969),c=t(22714),l=t(80975),d=t(317),u=t(93717),f=t(24684),h=t(32343),g=t(22248),x=t(11112),m=t(1720),v=t(7690),C=t(5877),b=t(49430),k=t(10901),j=t(58459),p=t(34213),Z=t(73876),y=t(22539),w=t(22417),T=t(87695),W=t(76770),I=t(81073),S=t(9077),N=t(90550),B=t(26119),A=t(37574),L=(0,s.lazy)((function(){return t.e(8113).then(t.bind(t,28113))})),M=(0,s.lazy)((function(){return t.e(2092).then(t.bind(t,2092))})),D=(0,s.lazy)((function(){return t.e(7582).then(t.bind(t,47582))})),F=(0,s.lazy)((function(){return t.e(9145).then(t.bind(t,19145))})),H=(0,c.Z)((function(e){var n,t;return{searchBox:{margin:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0},fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)},compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:"#eee"}},accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:null===(n=e.palette.tertiary)||void 0===n?void 0:n.main,color:null===(t=e.palette.tertiary)||void 0===t?void 0:t.contrastText,width:"100%",display:"flex",paddingLeft:5},accordionText:{margin:"auto 0"}}})),E=function(e){var n=e.data,t=e.isOpen,o=e.style,i=e.setOpen,r=n.isLeaf,a=n.nestingLevel,s=n.checked,c=n.id,g=n.name,x=n.onChange,m=n.toggleCollapse,v=n.conf,C=n.onMoreInfo,b=n.drawerPosition,k=H(),Z=10*a+(r?10:0),w=g&&(g.endsWith("(Unsupported)")||g.endsWith("(Unknown)")),T=v&&(0,S.readConfObject)(v,["description"])||"";return(0,A.jsxs)("div",{style:o,className:r?void 0:k.accordionBase,children:[new Array(a).fill(0).map((function(e,n){return(0,A.jsx)("div",{style:{left:10*n+4,height:o.height},className:k.nestingLevelMarker},"mark-".concat(n))})),(0,A.jsx)("div",{className:r?void 0:k.accordionCard,onClick:function(){m(c),i(!t)},style:{marginLeft:Z,whiteSpace:"nowrap",width:"100%"},children:(0,A.jsx)("div",{className:r?void 0:k.accordionColor,children:r?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(d.ZP,{title:T,placement:"left"===b?"right":"left",children:(0,A.jsx)(u.Z,{className:k.checkboxLabel,control:(0,A.jsx)(f.Z,{className:k.compactCheckbox,checked:s,onChange:function(){return x(c)},color:"primary",disabled:w,inputProps:{"data-testid":"htsTrackEntry-".concat(c)}}),label:g})}),(0,A.jsx)(h.Z,{onClick:function(e){return C({target:e.currentTarget,id:c,conf:v})},color:"secondary","data-testid":"htsTrackEntryMenu-".concat(c),children:(0,A.jsx)(y.Z,{})})]}):(0,A.jsx)("div",{className:k.accordionText,children:(0,A.jsxs)(l.Z,{children:[t?(0,A.jsx)(j.Z,{}):(0,A.jsx)(p.Z,{}),g]})})})})]})},O=function(e,n,t){var o=!!e.conf;return{data:(0,i.Z)((0,i.Z)({defaultHeight:o?22:40,isLeaf:o,isOpenByDefault:!0,nestingLevel:n},e),t),nestingLevel:n,node:e}},P=(0,N.observer)((function(e){var n,t=e.height,i=e.tree,r=e.model,c=r.filterText,l=r.view,d=(0,s.useRef)(null),u=(0,s.useState)(),f=(0,o.Z)(u,2),h=f[0],g=f[1],x=(0,I.getSession)(r),m=x.drawerPosition,v=(0,s.useMemo)((function(){return{onChange:function(e){return l.toggleTrack(e)},toggleCollapse:function(e){return r.toggleCategory(e)},onMoreInfo:g,drawerPosition:m}}),[l,r,m]),C=(0,s.useCallback)(a().mark((function e(){var n,t,o,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<i.children.length)){e.next=7;break}return e.next=4,O(i.children[n],0,v);case 4:n++,e.next=1;break;case 7:return void(e.next=10);case 10:t=e.sent,o=0;case 12:if(!(o<t.node.children.length)){e.next=19;break}return r=t.node.children[o],e.next=16,O(r,t.nestingLevel+1,v);case 16:o++,e.next=12;break;case 19:e.next=7;break;case 21:case"end":return e.stop()}}),e)})),[i,v]),b=null===h||void 0===h?void 0:h.conf,k=b&&(null===(n=x.getTrackActionMenuItems)||void 0===n?void 0:n.call(x,b))||[];return(0,s.useEffect)((function(){d.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[i,c]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(B.qF,{ref:d,treeWalker:C,height:t,children:E}),(0,A.jsx)(W.Z,{anchorEl:null===h||void 0===h?void 0:h.target,menuItems:k,onMenuItemClick:function(e,n){n(),g(void 0)},open:Boolean(h),onClose:function(){return g(void 0)}})]})})),_=function(e){var n=e.tree,t=e.model,o=e.offset;return"undefined"===typeof jest?(0,A.jsx)(T.Z,{disableWidth:!0,children:function(e){var i=e.height;return(0,A.jsx)(P,{height:i-o,model:t,tree:n})}}):(0,A.jsx)(P,{height:9e3,model:t,tree:n})},z=function(e){var n=e.overrideDimensions,t=e.children;return n?(0,A.jsx)("div",{style:(0,i.Z)({},n),children:t}):(0,A.jsx)(A.Fragment,{children:t})},R=(0,N.observer)((function(e){var n=e.model,t=e.toolbarHeight,i=e.overrideDimensions,r=H(),a=(0,I.getSession)(n),c=(0,s.useState)(null),l=(0,o.Z)(c,2),d=l[0],u=l[1];function f(){u(null)}return(0,A.jsxs)(z,{overrideDimensions:i,children:[(0,A.jsx)(q,{model:n,toolbarHeight:t,overrideDimensions:i}),a.addConnectionConf||a.addTrackConf?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(g.Z,{color:"secondary",className:r.fab,onClick:function(e){u(e.currentTarget)},children:(0,A.jsx)(k.Z,{})}),(0,A.jsxs)(x.Z,{anchorEl:d,open:Boolean(d),onClose:function(){return u(null)},children:[a.addConnectionConf?(0,A.jsx)(m.Z,{onClick:function(){f();var e=a.addWidget("AddConnectionWidget","addConnectionWidget");a.showWidget(e)},children:"Add connection"}):null,a.addTrackConf?(0,A.jsx)(m.Z,{onClick:function(){f();var e=a.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id});a.showWidget(e)},children:"Add track"}):null]})]}):null]})})),U=(0,N.observer)((function(e){var n=e.model,t=e.setHeaderHeight,i=e.setAssemblyIdx,r=e.assemblyIdx,a=H(),c=(0,I.getSession)(n),l=(0,s.useState)(),d=(0,o.Z)(l,2),u=d[0],f=d[1],g=(0,s.useState)(),x=(0,o.Z)(g,2),m=x[0],k=x[1],j=(0,s.useState)(),p=(0,o.Z)(j,2),y=p[0],T=p[1],N=(0,s.useState)(),B=(0,o.Z)(N,2),E=B[0],O=B[1],P=(0,s.useState)(!1),_=(0,o.Z)(P,2),z=_[0],R=_[1],U=(0,s.useState)(!1),q=(0,o.Z)(U,2),G=q[0],J=q[1],K=n.assemblyNames,Q=K[r];function V(e,n){var t=(0,S.readConfObject)(e,"name"),i=c.prepareToBreakConnection(e);if(i){var r=(0,o.Z)(i,2),a=r[0],s=r[1];Object.keys(s).length>0?T({connectionConf:e,safelyBreakConnection:a,dereferenceTypeCount:s,name:t}):a()}n&&O({name:t,connectionConf:e})}var X=[{label:"Turn on/off connections...",onClick:function(){return J(!0)}}];c.addConnectionConf&&(X.unshift({label:"Add connection",onClick:function(){c.showWidget(c.addWidget("AddConnectionWidget","addConnectionWidget"))}}),X.push({label:"Delete connections...",onClick:function(){return R(!0)}}));var Y=K.length>1?[{label:"Select assembly...",subMenu:K.map((function(e,n){return{label:e,onClick:function(){i(n)}}}))}]:[],$=[{label:"Add track...",onClick:function(){c.showWidget(c.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))}}].concat(Y);return(0,A.jsxs)("div",{ref:function(e){return t((null===e||void 0===e?void 0:e.getBoundingClientRect().height)||0)},"data-testid":"hierarchical_track_selector",children:[(0,A.jsxs)("div",{style:{display:"flex"},children:[c.addTrackConf&&(0,A.jsx)(h.Z,{className:a.menuIcon,onClick:function(e){k(e.currentTarget)},children:(0,A.jsx)(Z.Z,{})}),c.makeConnection&&(0,A.jsx)(h.Z,{className:a.menuIcon,onClick:function(e){f(e.currentTarget)},children:(0,A.jsx)(w.sB,{})}),(0,A.jsx)(v.Z,{className:a.searchBox,label:"Filter tracks",value:n.filterText,onChange:function(e){return n.setFilterText(e.target.value)},fullWidth:!0,InputProps:{endAdornment:(0,A.jsx)(C.Z,{position:"end",children:(0,A.jsx)(h.Z,{color:"secondary",onClick:n.clearFilterText,children:(0,A.jsx)(b.Z,{})})})}})]}),(0,A.jsx)(W.Z,{anchorEl:u,open:Boolean(u),onMenuItemClick:function(e,n){n(),f(void 0)},onClose:function(){return f(void 0)},menuItems:X}),(0,A.jsx)(W.Z,{anchorEl:m,open:Boolean(m),onMenuItemClick:function(e,n){n(),k(void 0)},onClose:function(){return k(void 0)},menuItems:$}),(0,A.jsxs)(s.Suspense,{fallback:(0,A.jsx)("div",{}),children:[y?(0,A.jsx)(L,{modalInfo:y,setModalInfo:T,session:c}):E?(0,A.jsx)(M,{handleClose:function(){return O(void 0)},deleteDialogDetails:E,session:c}):null,z?(0,A.jsx)(D,{handleClose:function(){return R(!1)},breakConnection:V,session:c}):null,G?(0,A.jsx)(F,{handleClose:function(){return J(!1)},session:c,breakConnection:V,assemblyName:Q}):null]})]})})),q=(0,N.observer)((function(e){var n=e.model,t=e.toolbarHeight,i=void 0===t?0:t,r=(0,s.useState)(0),a=(0,o.Z)(r,2),c=a[0],l=a[1],d=(0,s.useState)(0),u=(0,o.Z)(d,2),f=u[0],h=u[1],g=n.assemblyNames[c];return g?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(U,{model:n,setHeaderHeight:h,setAssemblyIdx:l,assemblyIdx:c}),(0,A.jsx)(_,{tree:n.hierarchy(g),model:n,offset:i+f})]}):null}));n.default=R}}]);
//# sourceMappingURL=2790.bb5a0edc.chunk.js.map