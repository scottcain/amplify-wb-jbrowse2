"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3850,2836],{72e3:function(e,t,n){n.r(t);var r=n(33028),i=n(96234),o=n(96902),u=n(21051),a=n.n(u),s=n(6880),c=n(4782),f=n(96251),l=n(29938);function d(e){var t=e.value,n=(0,o.useState)(!1),r=(0,i.Z)(n,2),u=r[0],s=r[1],c=(0,o.useState)(!1),f=(0,i.Z)(c,2),d=f[0],v=f[1],m=String(t);return m.length>100?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",onClick:function(){a()(m),v(!0),setTimeout((function(){v(!1)}),700)},children:d?"Copied to clipboard":"Copy"}),(0,l.jsx)("button",{type:"button",onClick:function(){return s((function(e){return!e}))},children:u?"Show less":"Show more"}),(0,l.jsx)("div",{children:u?m:"".concat(m.slice(0,100),"...")})]}):(0,l.jsx)("div",{children:m})}function v(e){return(0,l.jsx)(f.BaseAttributes,(0,r.Z)((0,r.Z)({},e),{},{formatter:function(e){return(0,l.jsx)(d,{value:e})}}))}var m=(0,c.observer)((function(e){var t=e.model,n=JSON.parse(JSON.stringify(t.featureData)),r=n.feature1,i=n.feature2;return(0,l.jsxs)(s.Z,{"data-testid":"alignment-side-drawer",children:[(0,l.jsx)(f.BaseCoreDetails,{title:"Feature 1",feature:r}),(0,l.jsx)(f.BaseCoreDetails,{title:"Feature 2",feature:i}),(0,l.jsx)(v,{feature:r}),(0,l.jsx)(v,{feature:i})]})}));t.default=m},99051:function(e,t,n){var r=n(96902),i=n(55006),o=n(3677),u=n(92745),a=n(29938);function s(e){return e.substring(2).toLowerCase()}t.Z=function(e){var t=e.children,n=e.disableReactTree,c=void 0!==n&&n,f=e.mouseEvent,l=void 0===f?"onClick":f,d=e.onClickAway,v=e.touchEvent,m=void 0===v?"onTouchEnd":v,p=r.useRef(!1),g=r.useRef(null),b=r.useRef(!1),h=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){b.current=!0}),0),function(){b.current=!1}}),[]);var Z=(0,i.Z)(t.ref,g),x=(0,o.Z)((function(e){var t=h.current;h.current=!1;var n=(0,u.Z)(g.current);!b.current||!g.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n)||(p.current?p.current=!1:(e.composedPath?e.composedPath().indexOf(g.current)>-1:!n.documentElement.contains(e.target)||g.current.contains(e.target))||!c&&t||d(e))})),j=function(e){return function(n){h.current=!0;var r=t.props[e];r&&r(n)}},w={ref:Z};return!1!==m&&(w[m]=j(m)),r.useEffect((function(){if(!1!==m){var e=s(m),t=(0,u.Z)(g.current),n=function(){p.current=!0};return t.addEventListener(e,x),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,x),t.removeEventListener("touchmove",n)}}}),[x,m]),!1!==l&&(w[l]=j(l)),r.useEffect((function(){if(!1!==l){var e=s(l),t=(0,u.Z)(g.current);return t.addEventListener(e,x),function(){t.removeEventListener(e,x)}}}),[x,l]),(0,a.jsx)(r.Fragment,{children:r.cloneElement(t,w)})}},82658:function(e,t,n){var r=n(56666),i=n(31461),o=n(7896),u=n(96902),a=n(24463),s=n(73674),c=n(53068),f=n(2252),l=n(24248),d=n(29938),v=["className","component","disableGutters","variant"],m=(0,f.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),p=u.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiToolbar"}),r=n.className,u=n.component,f=void 0===u?"div":u,p=n.disableGutters,g=void 0!==p&&p,b=n.variant,h=void 0===b?"regular":b,Z=(0,i.Z)(n,v),x=(0,o.Z)({},n,{component:f,disableGutters:g,variant:h}),j=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,s.Z)(n,l.N,t)}(x);return(0,d.jsx)(m,(0,o.Z)({as:f,className:(0,a.default)(j.root,r),ref:t,ownerState:x},Z))}));t.Z=p},24248:function(e,t,n){n.d(t,{N:function(){return o}});var r=n(74732),i=n(61235);function o(e){return(0,i.Z)("MuiToolbar",e)}var u=(0,r.Z)("MuiToolbar",["root","gutters","regular","dense"]);t.Z=u}}]);
//# sourceMappingURL=3850.7969856f.chunk.js.map