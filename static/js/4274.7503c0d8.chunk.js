"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4274],{94274:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var o=n(96234),a=n(96902),t=n(52809),s=n(35388),l=n(66519),c=n(99688),i=n(44536),u=n(46186),m=n(29938);function d(e){var r=e.model,n=e.handleClose,d=r.minScore,h=r.maxScore,N=r.scaleType,b=(0,a.useState)("".concat(d!==Number.MIN_VALUE?d:"")),x=(0,o.Z)(b,2),f=x[0],j=x[1],g=(0,a.useState)("".concat(h!==Number.MAX_VALUE?h:"")),Z=(0,o.Z)(g,2),p=Z[0],v=Z[1],S=!(""!==f&&""!==p&&!Number.isNaN(+f)&&!Number.isNaN(+p))||+p>+f,C=!("log"===N&&""!==f&&!Number.isNaN(+f))||+f>0;return(0,m.jsxs)(u.Dialog,{open:!0,onClose:n,title:"Set min/max score for track",children:[(0,m.jsxs)(t.Z,{children:[(0,m.jsx)(s.Z,{children:"Enter min/max score: "}),S?null:(0,m.jsx)(s.Z,{color:"error",children:"Max is greater than or equal to min"}),C?null:(0,m.jsx)(s.Z,{color:"error",children:"Min score should be greater than 0 for log scale"}),(0,m.jsx)(l.Z,{value:f,onChange:function(e){return j(e.target.value)},placeholder:"Enter min score"}),(0,m.jsx)(l.Z,{value:p,onChange:function(e){return v(e.target.value)},placeholder:"Enter max score"})]}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(i.Z,{variant:"contained",color:"primary",type:"submit",style:{marginLeft:20},disabled:!S,onClick:function(){r.setMinScore(""===f||Number.isNaN(+f)?void 0:+f),r.setMaxScore(""===p||Number.isNaN(+p)?void 0:+p),n()},children:"Submit"})})]})}}}]);
//# sourceMappingURL=4274.7503c0d8.chunk.js.map