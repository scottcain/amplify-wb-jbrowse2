"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6098,3565],{86098:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(96902),o=n(4782),i=n(17867),s=n(27664),a=n(91188),l=n(21308),c=n(96234),d=n(25322),u=n(41590),h=n(30156),m=n(96050),x=n(84533),f=n(56638),g=n(22514),v=n(61210),j=n(46255),p=n(38238),Z=n(23642),b=n(13565),k=n(29938),C=(0,a.ZL)()((function(e){return{controls:{position:"absolute",borderRight:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider),left:0,top:0}}})),y=(0,o.observer)((function(e){var t=e.model,n=C().classes,o=(0,r.useState)(null),i=(0,c.Z)(o,2),a=i[0],l=i[1];return(0,k.jsxs)("div",{className:n.controls,children:[(0,k.jsx)(d.Z,{onClick:t.zoomOutButton,title:t.lockedFitToWindow?"unlock to zoom out":"zoom out",disabled:t.atMaxBpPerPx||t.lockedFitToWindow,children:(0,k.jsx)(h.Z,{})}),(0,k.jsx)(d.Z,{onClick:t.zoomInButton,disabled:t.atMinBpPerPx,title:"zoom in",children:(0,k.jsx)(m.Z,{})}),(0,k.jsx)(d.Z,{onClick:t.rotateCounterClockwiseButton,title:"rotate counter-clockwise",children:(0,k.jsx)(x.Z,{})}),(0,k.jsx)(d.Z,{onClick:t.rotateClockwiseButton,title:"rotate clockwise",children:(0,k.jsx)(f.Z,{})}),(0,k.jsx)(d.Z,{onClick:t.toggleFitToWindowLock,title:t.lockedFitToWindow?"locked model to window size":"unlocked model to zoom further",disabled:t.tooSmallToLock,children:t.lockedFitToWindow?(0,k.jsx)(v.Z,{}):(0,k.jsx)(g.Z,{})}),(0,k.jsx)(d.Z,{onClick:function(e){return l(e.currentTarget)},children:(0,k.jsx)(p.Z,{})}),t.hideTrackSelectorButton?null:(0,k.jsx)(d.Z,{onClick:t.activateTrackSelector,title:"Open track selector","data-testid":"circular_track_select",children:(0,k.jsx)(Z.GD,{})}),a?(0,k.jsx)(u.Z,{anchorEl:a,menuItems:[{label:"Export SVG",icon:j.Z,onClick:function(){(0,s.getSession)(t).queueDialog((function(e){return[b.default,{model:t,handleClose:e}]}))}}],onMenuItemClick:function(e,t){t(),l(null)},open:Boolean(a),onClose:function(){return l(null)}}):null]})})),w=n(80691),z=n(54417),S=n(44536),T=(0,a.ZL)()((function(e){return{importFormContainer:{padding:e.spacing(6)}}})),L=(0,o.observer)((function(e){var t=e.model,n=T().classes,o=(0,s.getSession)(t),a=t.error,l=o.assemblyNames,d=o.assemblyManager,u=(0,r.useState)(l[0]),h=(0,c.Z)(u,2),m=h[0],x=h[1],f=d.get(m),g=l.length?null===f||void 0===f?void 0:f.error:"No configured assemblies",v=(null===f||void 0===f?void 0:f.regions)||[],j=g||a;return(0,k.jsxs)(w.Z,{className:n.importFormContainer,children:[j?(0,k.jsx)(z.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:(0,k.jsx)(z.ZP,{item:!0,children:(0,k.jsx)(i.ErrorMessage,{error:j})})}):null,(0,k.jsxs)(z.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,k.jsx)(z.ZP,{item:!0,children:(0,k.jsx)(i.AssemblySelector,{onChange:function(e){t.setError(void 0),x(e)},session:o,selected:m})}),(0,k.jsx)(z.ZP,{item:!0,children:(0,k.jsx)(S.Z,{disabled:!(null!==v&&void 0!==v&&v.length),onClick:function(){t.setError(void 0),t.setDisplayedRegions(v)},variant:"contained",color:"primary",children:v.length||j?"Open":"Loading..."})})]})]})})),M=(0,a.ZL)()((function(e){return{root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},scroller:{overflow:"auto"}}})),P=(0,o.observer)((function(e){var t=e.model;return(0,k.jsxs)(k.Fragment,{children:[t.staticSlices.map((function(e){return(0,k.jsx)(l.Z,{model:t,slice:e},(0,s.assembleLocString)(e.region.elided?e.region.regions[0]:e.region))})),t.tracks.map((function(e){var n=e.displays[0];return(0,k.jsx)(n.RenderingComponent,{display:n,view:t},n.id)}))]})})),R=(0,o.observer)((function(e){var t=e.model,n=!!t.displayedRegions.length&&!!t.figureWidth&&!!t.figureHeight&&t.initialized,r=!n&&!t.disableImportForm,o=n&&!r;return(0,k.jsx)(k.Fragment,{children:r||t.error?(0,k.jsx)(L,{model:t}):o?(0,k.jsx)(N,{model:t}):null})})),N=(0,o.observer)((function(e){var t=e.model,n=t.width,r=t.height,o=t.id,s=t.offsetRadians,a=t.centerXY,l=t.figureWidth,c=t.figureHeight,d=t.hideVerticalResizeHandle,u=M().classes;return(0,k.jsxs)("div",{className:u.root,style:{width:n,height:r},"data-testid":o,children:[(0,k.jsx)("div",{className:u.scroller,style:{width:n,height:r},children:(0,k.jsx)("svg",{style:{transform:"rotate(".concat(s,"rad)"),transition:"transform 0.5s",transformOrigin:a.map((function(e){return"".concat(e,"px")})).join(" "),position:"absolute",left:0,top:0},width:l,height:c,children:(0,k.jsx)("g",{transform:"translate(".concat(a,")"),children:(0,k.jsx)(P,{model:t})})})}),(0,k.jsx)(y,{model:t}),d?null:(0,k.jsx)(i.ResizeHandle,{onDrag:t.resizeHeight,style:{height:3,position:"absolute",bottom:0,left:0,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}})]})})),V=R},13565:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(32723),o=n(34795),i=n(96234),s=n(96902),a=n(78888),l=n(35388),c=n(52809),d=n(66519),u=n(15996),h=n(80367),m=n(32114),x=n(99688),f=n(44536),g=n(17867),v=n(27664),j=n(29938);function p(){return(0,j.jsxs)("div",{children:[(0,j.jsx)(a.Z,{size:20,style:{marginRight:20}}),(0,j.jsx)(l.Z,{display:"inline",children:"Creating SVG"})]})}function Z(e,t){return(0,v.useLocalStorage)("svg-"+e,t)}function b(e){var t=e.model,n=e.handleClose,a=(0,v.getSession)(t),b="undefined"!==typeof OffscreenCanvas,k=(0,s.useState)(b),C=(0,i.Z)(k,2),y=C[0],w=C[1],z=(0,s.useState)(!1),S=(0,i.Z)(z,2),T=S[0],L=S[1],M=(0,s.useState)(),P=(0,i.Z)(M,2),R=P[0],N=P[1],V=Z("file","jbrowse.svg"),B=(0,i.Z)(V,2),F=B[0],W=B[1],H=Z("theme",a.themeName||"default"),D=(0,i.Z)(H,2),I=D[0],E=D[1];return(0,j.jsxs)(g.Dialog,{open:!0,onClose:n,title:"Export SVG",children:[(0,j.jsxs)(c.Z,{children:[R?(0,j.jsx)(g.ErrorMessage,{error:R}):T?(0,j.jsx)(p,{}):null,(0,j.jsx)(d.Z,{helperText:"filename",value:F,onChange:function(e){return W(e.target.value)}}),(0,j.jsx)("br",{}),a.allThemes?(0,j.jsx)(d.Z,{select:!0,label:"Theme",value:I,onChange:function(e){return E(e.target.value)},children:Object.entries(a.allThemes()).map((function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,j.jsx)(u.Z,{value:n,children:r.name||"(Unknown name)"},n)}))}):null,b?(0,j.jsx)(h.Z,{control:(0,j.jsx)(m.Z,{checked:y,onChange:function(){return w((function(e){return!e}))}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):(0,j.jsx)(l.Z,{children:"Note: rasterizing layers not yet supported in this browser, so SVG size may be large"})]}),(0,j.jsxs)(x.Z,{children:[(0,j.jsx)(f.Z,{variant:"contained",color:"secondary",onClick:function(){return n()},children:"Cancel"}),(0,j.jsx)(f.Z,{variant:"contained",color:"primary",type:"submit",onClick:(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),N(void 0),e.prev=2,e.next=5,t.exportSvg({rasterizeLayers:y,filename:F,themeName:I});case 5:n(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0),N(e.t0),L(!1);case 13:case"end":return e.stop()}}),e,null,[[2,8]])}))),children:"Submit"})]})]})}},21308:function(e,t,n){var r=n(68079),o=(n(96902),n(4782)),i=n(27664),s=n(51632),a=n(88636),l=n(91188),c=n(29938),d=(0,l.ZL)()({rulerLabel:{fontSize:"0.8rem",fontWeight:500,lineHeight:1.6,letterSpacing:"0.0075em"}});function u(e,t,n,o){if(e.flipped){var i=[o,n];n=i[0],o=i[1]}var s=e.bpToXY(n,t),a=e.bpToXY(o,t),l=Math.abs(o-n)/e.bpPerRadian>Math.PI?"1":"0";return["M"].concat((0,r.Z)(s),["A",t,t,"0",l,"1"],(0,r.Z)(a)).join(" ")}var h=(0,o.observer)((function(e){var t=e.model,n=e.slice,o=e.region,s=(0,a.Z)(),l=t.radiusPx+1,d=n.endRadians,u=n.startRadians,h=(0,i.polarToCartesian)(l,u),x=(0,i.polarToCartesian)(l,d),f=(d-u)*l,g=d-u>Math.PI?"1":"0",v=(d+u)/2,j="[".concat(Number(o.regions.length).toLocaleString(),"]");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{text:j,view:t,maxWidthPx:f,radians:v,radiusPx:l,title:"".concat(j," more regions"),color:s.palette.text.primary}),(0,c.jsx)("path",{d:["M"].concat((0,r.Z)(h),["A",l,l,"0",g,"1"],(0,r.Z)(x)).join(" "),stroke:s.palette.text.secondary,strokeWidth:2,strokeDasharray:"2,2",fill:"none"})]})})),m=(0,o.observer)((function(e){var t=e.view,n=e.text,r=e.maxWidthPx,o=e.radians,s=e.radiusPx,a=e.title,l=e.color,u=d().classes,h=(0,i.polarToCartesian)(s+5,o);return n?6.5*n.length<r?(0,c.jsxs)("text",{x:0,y:0,className:u.rulerLabel,textAnchor:"middle",dominantBaseline:"baseline",transform:"translate(".concat(h,") rotate(").concat((0,i.radToDeg)(o)+90,")"),style:{fill:l},children:[n,(0,c.jsx)("title",{children:a||n})]}):r>4?(0,i.radToDeg)(o+t.offsetRadians-Math.PI/2)>=180?(0,c.jsxs)("text",{x:0,y:0,className:u.rulerLabel,textAnchor:"start",dominantBaseline:"middle",transform:"translate(".concat(h,") rotate(").concat((0,i.radToDeg)(o),")"),style:{fill:l},children:[n,(0,c.jsx)("title",{children:a||n})]}):(0,c.jsxs)("text",{x:0,y:0,className:u.rulerLabel,textAnchor:"end",dominantBaseline:"middle",transform:"translate(".concat(h,") rotate(").concat((0,i.radToDeg)(o)+180,")"),style:{fill:l},children:[n,(0,c.jsx)("title",{children:a||n})]}):null:null})),x=(0,o.observer)((function(e){var t,n=e.model,r=e.slice,o=e.region,l=(0,a.Z)(),d=n.radiusPx,h=r.endRadians,x=r.startRadians,f=(h+x)/2,g=(h-x)*d,v=(0,i.getSession)(n).assemblyManager.get(o.assemblyName);if(v&&(t=v.getRefNameColor(o.refName)),t)try{t=(0,s.makeContrasting)(t,l.palette.background.paper)}catch(j){t=l.palette.text.primary}else t=l.palette.text.primary;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{text:o.refName,view:n,maxWidthPx:g,radians:f,radiusPx:d,color:t}),(0,c.jsx)("path",{d:u(r,d+1,o.start,o.end),stroke:t,strokeWidth:2,fill:"none"})]})}));t.Z=(0,o.observer)((function(e){var t=e.model,n=e.slice;return n.region.elided?(0,c.jsx)(h,{model:t,region:n.region,slice:n},(0,i.assembleLocString)(n.region.regions[0])):(0,c.jsx)(x,{region:n.region,model:t,slice:n},(0,i.assembleLocString)(n.region))}))},61210:function(e,t,n){var r=n(71600);t.Z=void 0;var o=r(n(7152)),i=n(29938),s=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=s},22514:function(e,t,n){var r=n(71600);t.Z=void 0;var o=r(n(7152)),i=n(29938),s=(0,o.default)((0,i.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");t.Z=s},84533:function(e,t,n){var r=n(71600);t.Z=void 0;var o=r(n(7152)),i=n(29938),s=(0,o.default)((0,i.jsx)("path",{d:"M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.Z=s},56638:function(e,t,n){var r=n(71600);t.Z=void 0;var o=r(n(7152)),i=n(29938),s=(0,o.default)((0,i.jsx)("path",{d:"M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.Z=s}}]);
//# sourceMappingURL=6098.273030ef.chunk.js.map