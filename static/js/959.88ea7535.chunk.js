"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[959,2152],{22152:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var t=r(33028),o=r(96234),i=r(96902),s=r(91188),a=r(4782),c=r(99836),l=r(27664),d=r(17867),u=r(16644),f=r(78566),v=r(35388),m=r(50543),p=r(29938),h=(0,s.ZL)()({guide:{pointerEvents:"none",height:"100%",width:1,position:"absolute",zIndex:10},sm:{fontSize:10}}),b=(0,a.observer)((function(e){var n=e.model,r=e.coordX,t=h().classes;return(0,p.jsx)(m.Z,{open:!0,placement:"top",title:n.views.map((function(e){return e.pxToBp(r)})).map((function(e,n){return(0,p.jsx)(v.Z,{className:t.sm,children:(0,l.stringify)(e,!0)},[JSON.stringify(e),n].join("-"))})),arrow:!0,children:(0,p.jsx)("div",{className:t.guide,style:{left:r,background:"red"}})})})),g=(0,s.ZL)()((function(e){var n=e.palette,r=n.tertiary,t=n.primary;return{rubberband:{height:"100%",background:r?(0,u.Fq)(r.main,.7):(0,u.Fq)(t.main,.7),position:"absolute",zIndex:10,textAlign:"center",overflow:"hidden"},rubberbandControl:{cursor:"crosshair",width:"100%",minHeight:8},rubberbandText:{color:r?r.contrastText:t.contrastText},popover:{mouseEvents:"none",cursor:"crosshair"},paper:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}}}));var x=(0,a.observer)((function(e){var n=e.model,r=e.ControlComponent,t=void 0===r?(0,p.jsx)("div",{}):r,s=(0,i.useState)(),a=(0,o.Z)(s,2),c=a[0],u=a[1],m=(0,i.useState)(),h=(0,o.Z)(m,2),x=h[0],j=h[1],w=(0,i.useState)(),C=(0,o.Z)(w,2),y=C[0],N=C[1],Z=(0,i.useState)(),k=(0,o.Z)(Z,2),M=k[0],B=k[1],S=(0,i.useRef)(null),E=(0,i.useRef)(null),O=g().classes,R=void 0!==c&&void 0===y;function T(e){e.preventDefault(),e.stopPropagation();var n=e.clientX-e.target.getBoundingClientRect().left;u(n),j(n)}function L(e){var n=e.target;B(e.clientX-n.getBoundingClientRect().left)}function I(){B(void 0),n.views.forEach((function(e){return e.setOffsets(void 0,void 0)}))}function z(){N(void 0),u(void 0),j(void 0)}(0,i.useEffect)((function(){function e(e){if(S.current&&R){var n=e.clientX-S.current.getBoundingClientRect().left;j(n)}}function r(e){if(void 0!==c&&S.current){var r=e.clientX,t=e.clientY,o=r-S.current.getBoundingClientRect().left;N({offsetX:o,clientX:r,clientY:t}),n.views.forEach((function(e){var n=function(e,n){if(void 0!==c){var r=c,t=e;if(t<r){var o=[t,r];r=o[0],t=o[1]}return{leftOffset:n.pxToBp(r),rightOffset:n.pxToBp(t)}}}(o,e);if(n){var r=n.leftOffset,t=n.rightOffset;e.setOffsets(r,t)}})),B(void 0)}}return R?(window.addEventListener("mousemove",e),window.addEventListener("mouseup",r),function(){window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r)}):function(){}}),[c,R,y,n]),(0,i.useEffect)((function(){!R&&void 0!==x&&void 0!==c&&Math.abs(x-c)<=3&&z()}),[R,x,c]);var X=Boolean(y);if(void 0===c)return(0,p.jsxs)(p.Fragment,{children:[void 0!==M?(0,p.jsx)(b,{model:n,coordX:M}):null,(0,p.jsx)("div",{ref:S,className:O.rubberbandControl,onMouseDown:T,onMouseOut:I,onMouseMove:L,children:t})]});var D=y?y.offsetX:x||0,F=D<c?D:c,P=Math.abs(D-c),H=n.views,_=H.map((function(e){return e.pxToBp(F)})),A=H.map((function(e){return e.pxToBp(F+P)})),J=H.map((function(e){return Math.ceil(P*e.bpPerPx)}));return(0,p.jsxs)(p.Fragment,{children:[E.current?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.ZP,{className:O.popover,classes:{paper:O.paper},open:!0,anchorEl:E.current,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"right"},keepMounted:!0,disableRestoreFocus:!0,children:_.map((function(e,n){return(0,p.jsx)(v.Z,{children:(0,l.stringify)(e,!0)},[JSON.stringify(e),n,"left"].join("-"))}))}),(0,p.jsx)(f.ZP,{className:O.popover,classes:{paper:O.paper},open:!0,anchorEl:E.current,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,disableRestoreFocus:!0,children:A.map((function(e,n){return(0,p.jsx)(v.Z,{children:(0,l.stringify)(e,!0)},[JSON.stringify(e),n,"right"].join("-"))}))})]}):null,(0,p.jsx)("div",{ref:E,className:O.rubberband,style:{left:F,width:P},children:(0,p.jsx)(v.Z,{variant:"h6",className:O.rubberbandText,children:J.map((function(e,n){return(0,p.jsx)(v.Z,{children:"".concat(e.toLocaleString("en-US"),"bp")},"".concat(e,"_").concat(n))}))})}),(0,p.jsx)("div",{className:O.rubberbandControl,ref:S,onMouseDown:T,onMouseOut:I,onMouseMove:L,children:t}),y?(0,p.jsx)(d.Menu,{anchorReference:"anchorPosition",anchorPosition:{left:y.clientX,top:y.clientY},onMenuItemClick:function(e,n){n(),z()},open:X,onClose:z,menuItems:n.rubberBandMenuItems()}):null]})})),j=r(68079),w=r(25322),C=r(50209),y=r(38238),N=r(23642),Z=r(62561),k=(0,s.ZL)()((function(){return{headerBar:{gridArea:"1/1/auto/span 2",display:"flex"},spacer:{flexGrow:1},iconButton:{margin:5},bp:{display:"flex",alignItems:"center",marginLeft:10},searchContainer:{marginLeft:5},searchBox:{display:"flex"}}})),M=(0,a.observer)((function(e){var n=e.model;return(0,p.jsx)(Z.Z,{menuItems:[{label:"Synteny track selector",onClick:function(){return n.activateTrackSelector()}}].concat((0,j.Z)(n.views.map((function(e,n){return{label:"View ".concat(n+1," track selector"),onClick:function(){return e.activateTrackSelector()}}})))),children:(0,p.jsx)(N.GD,{})})})),B=(0,a.observer)((function(e){var n=e.model,r=k().classes,t=(0,i.useState)(),s=(0,o.Z)(t,2),a=s[0],c=s[1],l=n.views.some((function(e){return!e.hideHeader}));return(0,p.jsxs)("div",{className:r.headerBar,children:[(0,p.jsx)(M,{model:n}),(0,p.jsx)(w.Z,{onClick:function(e){return c(e.currentTarget)},className:r.iconButton,children:(0,p.jsx)(y.Z,{})}),l?null:n.views.map((function(e){return(0,p.jsxs)("div",{className:r.searchBox,children:[(0,p.jsx)("div",{className:r.searchContainer,children:(0,p.jsx)(C.Rj,{model:e,showHelp:!1})}),(0,p.jsx)("div",{className:r.bp,children:(0,p.jsxs)(v.Z,{variant:"body2",color:"textSecondary",className:r.bp,children:[Math.round(e.coarseTotalBp).toLocaleString("en-US")," bp"]})})]},e.id)})),(0,p.jsx)("div",{className:r.spacer}),a?(0,p.jsx)(d.Menu,{anchorEl:a,open:!0,onMenuItemClick:function(e,n){n(),c(void 0)},menuItems:n.headerMenuItems(),onClose:function(){return c(void 0)}}):null]})})),S=(0,s.ZL)()((function(e){return{container:{display:"grid"},overlay:{zIndex:100,gridArea:"1/1"},content:{gridArea:"1/1",position:"relative"},grid:{display:"grid"},relative:{position:"relative"},rubberbandContainer:{position:"relative",overflow:"hidden"},rubberbandDiv:{width:"100%",background:e.palette.action.disabledBackground,height:15,"&:hover":{background:e.palette.action.selected}}}})),E=(0,a.observer)((function(e){var n=e.model,r=S().classes;return(0,p.jsx)(p.Fragment,{children:n.tracks.map((function(e){var t=(0,o.Z)(e.displays,1)[0],i=t.RenderingComponent,s=(0,c.getConf)(e,"trackId");return i?(0,p.jsx)("div",{className:r.overlay,style:{height:n.middleComparativeHeight,overflow:"hidden"},children:(0,p.jsx)(i,{model:t})},s):null}))})})),O=(0,a.observer)((function(e){var n=e.model,r=S().classes,t=n.views,o=(0,l.getEnv)(n).pluginManager.getViewType(t[0].type).ReactComponent;return(0,p.jsxs)("div",{className:r.rubberbandContainer,children:[(0,p.jsx)(B,{model:n}),(0,p.jsx)(x,{model:n,ControlComponent:(0,p.jsx)("div",{className:r.rubberbandDiv})}),(0,p.jsxs)("div",{className:r.container,children:[(0,p.jsx)(o,{model:t[0]}),(0,p.jsx)("div",{className:r.grid,children:(0,p.jsx)(E,{model:n})}),(0,p.jsx)(d.ResizeHandle,{onDrag:function(e){return n.setMiddleComparativeHeight(n.middleComparativeHeight+e)},style:{height:4,background:"#ccc"}}),(0,p.jsx)(o,{model:t[1]})]})]})})),R=(0,a.observer)((function(e){var n=e.model,r=S().classes,t=n.views,o=(0,l.getEnv)(n).pluginManager;return(0,p.jsxs)("div",{className:r.rubberbandContainer,children:[(0,p.jsx)(B,{model:n}),(0,p.jsx)(x,{model:n,ControlComponent:(0,p.jsx)("div",{className:r.rubberbandDiv})}),(0,p.jsx)("div",{className:r.container,children:(0,p.jsxs)("div",{className:r.content,children:[(0,p.jsx)("div",{className:r.relative,children:t.map((function(e){var n=o.getViewType(e.type).ReactComponent;return(0,p.jsx)(n,{model:e},e.id)}))}),(0,p.jsx)(E,{model:n})]})})]})})),T=(0,a.observer)((function(e){return e.model.tracks.some((function(e){return e.displays.some((function(e){return(0,c.getConf)(e,"middle")}))}))?(0,p.jsx)(O,(0,t.Z)({},e)):(0,p.jsx)(R,(0,t.Z)({},e))}))},10959:function(e,n,r){r.r(n);var t=r(96902),o=r(4782),i=r(22152),s=r(29938),a=(0,t.lazy)((function(){return Promise.all([r.e(3927),r.e(979)]).then(r.bind(r,10979))})),c=(0,o.observer)((function(e){var n=e.model;return n.initialized?(0,s.jsx)(i.default,{model:n}):(0,s.jsx)(a,{model:n})}));n.default=c}}]);
//# sourceMappingURL=959.88ea7535.chunk.js.map