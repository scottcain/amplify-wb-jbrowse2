"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2665],{22665:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var o=n(96902),r=n(43971),i=n(27664),a=n(16151),s=n(33028),c=n(96234),l=n(21051),u=n.n(l),f=n(44536),g=n(91188),d=n(99836),b=n(96251),p=n(32723),C=n(34795),x=n(35388),h=n(20893),j=n(29938);function v(e){var t=e.config,n=(0,o.useState)(),r=(0,c.Z)(n,2),a=r[0],s=r[1],l=(0,o.useState)(),u=(0,c.Z)(l,2),f=u[0],g=u[1],v=(0,i.getSession)(t).rpcManager;(0,o.useEffect)((function(){var e=new AbortController,n=e.signal,o=!1;return(0,C.Z)((0,p.Z)().mark((function e(){var r,i;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,d.readConfObject)(t,"adapter"),e.next=4,v.call(t.trackId,"CoreGetInfo",{adapterConfig:r,signal:n});case 4:i=e.sent,o||g(i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||(console.error(e.t0),s(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),function(){e.abort(),o=!0}}),[t,v]);var m="string"===typeof f?{header:"<pre>".concat(f.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"</pre>")}:f||{};return null!==f?(0,j.jsx)(b.BaseCard,{title:"File info",children:a?(0,j.jsx)(x.Z,{color:"error",children:"".concat(a)}):void 0===f?(0,j.jsx)(h.Z,{message:"Loading file data"}):(0,j.jsx)(b.Attributes,{attributes:m})}):null}var m=(0,g.ZL)()({content:{minWidth:800}});function Z(e){var t=e.config,n=(0,o.useState)(!1),r=(0,c.Z)(n,2),a=r[0],l=r[1],g=(0,d.readConfObject)(t),p=(0,i.getSession)(t),C=m().classes,x=(0,d.getConf)(p,["formatAbout","hideUris"])||(0,d.readConfObject)(t,["formatAbout","hideUris"]),h=(0,i.getEnv)(p).pluginManager,Z=h.evaluateExtensionPoint("Core-customizeAbout",{config:(0,s.Z)((0,s.Z)((0,s.Z)({},g),(0,d.getConf)(p,["formatAbout","config"],{config:g})),(0,d.readConfObject)(t,["formatAbout","config"],{config:g}))},{session:p,config:t}),A=h.evaluateExtensionPoint("Core-extraAboutPanel",null,{session:p,config:t});return(0,j.jsxs)("div",{className:C.content,children:[(0,j.jsxs)(b.BaseCard,{title:"Configuration",children:[x?null:(0,j.jsx)(f.Z,{variant:"contained",style:{float:"right"},onClick:function(){u()(JSON.stringify(g,null,2)),l(!0),setTimeout((function(){return l(!1)}),1e3)},children:a?"Copied to clipboard!":"Copy config"}),(0,j.jsx)(b.Attributes,{attributes:Z,omit:["displays","baseUri","refNames","formatAbout"],hideUris:x})]}),A?(0,j.jsx)(b.BaseCard,{title:A.name,children:(0,j.jsx)(A.Component,{config:t})}):null,(0,j.jsx)(v,{config:t})]})}function A(e){var t=e.config,n=e.handleClose,o=(0,i.getSession)(t),s=(0,a.getTrackName)(t,o),c=(0,i.getEnv)(o).pluginManager.evaluateExtensionPoint("Core-replaceAbout",Z,{session:o,config:t});return(0,j.jsx)(r.Z,{open:!0,onClose:n,title:s,maxWidth:"xl",children:(0,j.jsx)(c,{config:t})})}}}]);
//# sourceMappingURL=2665.5aa35303.chunk.js.map