"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4907],{4907:(n,s,e)=>{e.r(s),e.d(s,{default:()=>x});e(41867);var i=e(35421),a=e(47409),o=e(75258),r=e(27768),l=e(23801),t=e(45466),c=e(76619),h=e(67677),d=e(80838);function u(n){let{onConfirm:s,onCancel:e,reason:t}=n;return(0,d.jsxs)(i.Dialog,{open:!0,maxWidth:"xl",title:"Warning",children:[(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(c.Z,{fontSize:"large"}),(0,d.jsxs)(o.Z,{children:["This link contains a session that has the following unknown plugins:",(0,d.jsx)("ul",{children:t.map((n=>(0,d.jsx)("li",{children:(0,h.OK)(n)},JSON.stringify(n))))}),"Please ensure you trust the source of this session."]})]}),(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(l.Z,{color:"primary",variant:"contained",onClick:()=>s(),children:"Yes, I trust it"}),(0,d.jsx)(l.Z,{variant:"contained",color:"secondary",onClick:()=>e(),children:"Cancel"})]})]})}function x(n){let{loader:s,handleClose:e}=n;const{sessionTriaged:i}=s;return i?(0,d.jsx)(u,{onConfirm:async()=>{const n=JSON.parse(JSON.stringify(i.snap));await s.setSessionSnapshot({...n,id:(0,t.x0)()},!0),e()},onCancel:()=>{s.setBlankSession(!0),e()},reason:i.reason}):null}},76619:(n,s,e)=>{var i=e(71600);s.Z=void 0;var a=i(e(80337)),o=e(80838),r=(0,a.default)((0,o.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");s.Z=r}}]);
//# sourceMappingURL=4907.4f1d10a0.chunk.js.map