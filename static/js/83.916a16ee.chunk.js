(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[83],{1712:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(29),o=n(1),l=n.n(o),r=n(51),c=n(1671),i=n(1674),s=n(1646),u=n(1675),m=n(1656),b=n(1753),v=n(1642),g=n(1677),E=n(1639),C=n(113),d=n.n(C),p=n(948),f=Object(r.a)((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));function h(e){if(e instanceof Object){var t=e,n=t.r,a=t.g,o=t.b;return"rgb(".concat(n,",").concat(a,",").concat(o,")")}return e}function k(e){var t=e.model,n=e.handleClose,r=f(),C=Object(o.useState)(!1),k=Object(a.a)(C,2),w=k[0],y=k[1];return l.a.createElement(c.a,{open:!0,onClose:n},l.a.createElement(i.a,null,"Select either an overall color, or the positive/negative colors. Note that density renderers only work properly with positive/negative colors",l.a.createElement(s.a,{"aria-label":"close",className:r.closeButton,onClick:n},l.a.createElement(d.a,null))),l.a.createElement(u.a,null,l.a.createElement(m.a,{checked:!w,onClick:function(){return y(!1)},control:l.a.createElement(b.a,null),label:"Overall color"}),l.a.createElement(m.a,{checked:w,onClick:function(){return y(!0)},control:l.a.createElement(b.a,null),label:"Positive/negative color"}),w?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,null,"Positive color"),l.a.createElement(p.b,{onChange:function(e){t.setPosColor(h(e.rgb)),t.setColor(void 0)}}),l.a.createElement(v.a,null,"Negative color"),l.a.createElement(p.b,{onChange:function(e){t.setNegColor(h(e.rgb)),t.setColor(void 0)}})):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,null,"Overall color"),l.a.createElement(p.b,{onChange:function(e){t.setColor(h(e.rgb))}}))),l.a.createElement(g.a,null,l.a.createElement(E.a,{onClick:function(){t.setPosColor(void 0),t.setNegColor(void 0),t.setColor(void 0)},color:"secondary",variant:"contained"},"Restore default"),l.a.createElement(E.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){n()}},"Submit")))}}}]);
//# sourceMappingURL=83.916a16ee.chunk.js.map