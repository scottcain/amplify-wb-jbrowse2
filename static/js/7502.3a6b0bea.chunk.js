"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7502],{77502:function(e,n,r){r.r(n);var t=r(96234),i=r(30969),c=r(92256),a=r(48651),o=r(17984),l=r(70054),u=r(35436),s=r(52907),h=r(69852),k=r(9077),f=r(37574);n.default=function(e){var n=e.tracks,r=e.onClose,d=(0,i.useState)("MultiWiggle "+Date.now()),j=(0,t.Z)(d,2),x=j[0],m=j[1],p=n.every((function(e){return"QuantitativeTrack"===e.type}));return(0,f.jsxs)(c.Z,{open:!0,onClose:function(){return r(!1)},children:[(0,f.jsx)(a.Z,{children:"Confirm multi-wiggle track create"}),(0,f.jsxs)(o.Z,{children:[(0,f.jsxs)(l.Z,{children:[p?null:"Not every track looks like a QuantitativeTrack. This could have unexpected behavior, confirm if it looks ok.","Listing:"]}),(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,k.readConfObject)(e,"name")," - ",e.type]},e.trackId)}))}),(0,f.jsx)(u.Z,{value:x,onChange:function(e){return m(e.target.value)},helperText:"Track name"}),(0,f.jsx)(l.Z,{children:"Confirm creation of track?"})]}),(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(h.Z,{onClick:function(){return r(!1)},color:"primary",children:"Cancel"}),(0,f.jsx)(h.Z,{onClick:function(){return r(!0,{name:x})},color:"primary",variant:"contained",autoFocus:!0,children:"Submit"})]})]})}}}]);
//# sourceMappingURL=7502.3a6b0bea.chunk.js.map