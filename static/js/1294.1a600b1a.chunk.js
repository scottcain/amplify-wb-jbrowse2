"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1294],{61294:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(33028),i=t(59740),s=t(96902),o=t(4782),l=t(71078),a=t(98113),c=t(42526),u=t(70899),d=t(56666),f=t(68079),h=t(96234),p=t(72988),v=t(79002),j=t(71710),m=t(60916),x=t(23401),w=t(29938);function Z(e){var n=e.feature,t=e.descriptions,i=(0,s.useState)({}),o=(0,h.Z)(i,2),l=o[0],a=o[1],u=(0,s.useState)(!1),Z=(0,h.Z)(u,2),g=Z[0],b=Z[1],y=n.samples,k=void 0===y?{}:y,C=Object.entries(k);if(!C.length)return null;var S,N=["sample"].concat((0,f.Z)(Object.keys(C[0][1]))).map((function(e){var n,r;return{field:e,description:null===(n=t.FORMAT)||void 0===n||null===(r=n[e])||void 0===r?void 0:r.Description}})),O=[],F=Object.keys(l);try{O=C.map((function(e){return(0,r.Z)((0,r.Z)({},Object.fromEntries(Object.entries(e[1]).map((function(e){return[e[0],String(e[1])]})))),{},{sample:e[0],id:e[0]})})).filter((function(e){return!F.length||F.every((function(n){var t=e[n],r=l[n];return!r||t.match(new RegExp(r,"i"))}))}))}catch(T){S=T}return(0,w.jsxs)(c.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Samples",children:[S?(0,w.jsx)(p.Z,{color:"error",children:"".concat(S)}):null,(0,w.jsx)(v.Z,{control:(0,w.jsx)(j.Z,{checked:g,onChange:function(){return b((function(e){return!e}))}}),label:"Show sample filters"}),g?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.Z,{children:"These filters can use a plain text search or regex style query, e.g. in the genotype field, entering 1 will query for all genotypes that include the first alternate allele e.g. 0|1 or 1|1, entering [1-9]\\d* will find any non-zero allele e.g. 0|2 or 2/33"}),N.map((function(e){var n=e.field;return(0,w.jsx)(m.Z,{placeholder:"Filter ".concat(n),value:l[n]||"",onChange:function(e){return a((0,r.Z)((0,r.Z)({},l),{},(0,d.Z)({},n,e.target.value)))}},"filter-".concat(n))}))]}):null,(0,w.jsx)("div",{style:{height:600,width:"100%",overflow:"auto"},children:(0,w.jsx)(x._,{rows:O,columns:N,disableSelectionOnClick:!0,rowHeight:25,disableColumnMenu:!0})})]}))}function g(e){var n=e.rows,t=e.columns,r=n.length<100;return n.length?(0,w.jsx)("div",{style:{height:25*Math.min(n.length,100)+80+(r?0:50),width:"100%"},children:(0,w.jsx)(x._,{rowHeight:25,rows:n,columns:t})}):null}function b(e){var n,t,i,s,o=e.feature,l=e.descriptions,a=(null===l||void 0===l||null===(n=l.INFO)||void 0===n||null===(t=n.CSQ)||void 0===t||null===(i=t.Description)||void 0===i||null===(s=i.match(/.*Format: (.*)/))||void 0===s?void 0:s[1].split("|"))||[],u=o.INFO.CSQ||[],d=u.map((function(e,n){return(0,r.Z)({id:n},Object.fromEntries(e.split("|").map((function(e,n){return[a[n],e]}))))}))||[],f=a.map((function(e){return{field:e}}));return u.length?(0,w.jsx)(c.BaseCard,{title:"CSQ table",children:(0,w.jsx)(g,{rows:d,columns:f})}):null}function y(e){var n,t,i,s,o=e.feature,l=e.descriptions,a=(null===l||void 0===l||null===(n=l.INFO)||void 0===n||null===(t=n.ANN)||void 0===t||null===(i=t.Description)||void 0===i||null===(s=i.match(/.*Functional annotations:'(.*)'$/))||void 0===s?void 0:s[1].split("|"))||[],u=o.INFO.ANN||[],d=u.map((function(e,n){return(0,r.Z)({id:n},Object.fromEntries(e.split("|").map((function(e,n){return[a[n],e]}))))}))||[],f=a.map((function(e){return{field:e}}));return u.length?(0,w.jsx)(c.BaseCard,{title:"ANN table",children:(0,w.jsx)(g,{rows:d,columns:f})}):null}var k=t(62215),C=t(43430),S=t(27664),N=t(20450),O=t(39041),F=t(3915),T=t(88117),A=t(18726),B=t(96565),D=t(91188),E=t(47057),L=t(63680),I=(0,D.ZL)()((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},block:{display:"block"}}}));var M=(0,o.observer)((function(e){var n=e.model,t=e.handleClose,r=e.feature,i=e.viewType,o=I().classes,l=(0,s.useState)(!0),c=(0,h.Z)(l,2),u=c[0],d=c[1],f=(0,s.useState)(!0),p=(0,h.Z)(f,2),m=p[0],x=p[1];return(0,w.jsxs)(N.Z,{open:!0,onClose:t,children:[(0,w.jsxs)(O.Z,{children:["Breakpoint split view options",t?(0,w.jsx)(F.Z,{className:o.closeButton,onClick:function(){return t()},children:(0,w.jsx)(E.Z,{})}):null]}),(0,w.jsx)(a.Z,{}),(0,w.jsxs)(T.Z,{children:[(0,w.jsx)(v.Z,{className:o.block,control:(0,w.jsx)(j.Z,{checked:u,onChange:function(){return d((function(e){return!e}))}}),label:"Copy tracks into the new view"}),(0,w.jsx)(v.Z,{className:o.block,control:(0,w.jsx)(j.Z,{checked:m,onChange:function(){return x((function(e){return!e}))}}),label:"Mirror tracks vertically in vertically stacked view"})]}),(0,w.jsxs)(A.Z,{children:[(0,w.jsx)(B.Z,{onClick:function(){var e=n.view,s=(0,S.getSession)(n);try{var o=i.snapshotFromBreakendFeature(r,e);o.views[0].offsetPx-=e.width/2+100,o.views[1].offsetPx-=e.width/2+100,o.featureData=r;var l=(0,L.getSnapshot)(e.tracks);o.views[0].tracks=l,o.views[1].tracks=m?l.slice().reverse():l,s.addView("BreakpointSplitView",o)}catch(a){console.error(a),s.notify("".concat(a))}t()},variant:"contained",color:"primary",autoFocus:!0,children:"OK"}),(0,w.jsx)(B.Z,{onClick:function(){return t()},color:"secondary",variant:"contained",children:"Cancel"})]})]})}));function P(e){var n,t=e.model,i=e.locStrings,o=e.feature,l=(0,S.getSession)(t),a=(0,S.getEnv)(l).pluginManager,u=(0,s.useState)(!1),d=(0,h.Z)(u,2),f=d[0],v=d[1];try{n=a.getViewType("BreakpointSplitView")}catch(m){}var j=new C.Z(o);return(0,w.jsxs)(c.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Breakends",children:[(0,w.jsx)(p.Z,{children:"Link to linear view of breakend endpoints"}),(0,w.jsx)("ul",{children:i.map((function(e){return(0,w.jsx)("li",{children:(0,w.jsx)(k.Z,{href:"#",onClick:function(n){n.preventDefault();var r=t.view;try{if(!r)throw new Error("No view associated with this feature detail panel anymore");var i;null===(i=r.navToLocString)||void 0===i||i.call(r,e)}catch(m){console.error(m),l.notify("".concat(m))}},children:"LGV - ".concat(e)})},"".concat(JSON.stringify(e)))}))}),n?(0,w.jsxs)("div",{children:[(0,w.jsx)(p.Z,{children:"Launch split views with breakend source and target"}),(0,w.jsx)("ul",{children:i.map((function(e){return(0,w.jsx)("li",{children:(0,w.jsx)(k.Z,{href:"#",onClick:function(e){e.preventDefault(),v(!0)},children:"".concat(o.refName,":").concat(o.start," // ").concat(e," (split view)")})},"".concat(JSON.stringify(e)))}))}),f?(0,w.jsx)(M,{model:t,feature:j,viewType:n,handleClose:function(){v(!1)}}):null]}):null]}))}var R=["samples"];var _=(0,o.observer)((function(e){var n=e.model,t=n.featureData,s=n.descriptions,o=JSON.parse(JSON.stringify(t)),d=(o.samples,(0,i.Z)(o,R));return(0,w.jsxs)(l.Z,{"data-testid":"variant-side-drawer",children:[(0,w.jsx)(c.FeatureDetails,(0,r.Z)({feature:d,descriptions:(0,r.Z)((0,r.Z)({},{CHROM:"chromosome: An identifier from the reference genome",POS:"position: The reference position, with the 1st base having position 1",ID:"identifier: Semi-colon separated list of unique identifiers where available",REF:"reference base(s): Each base must be one of A,C,G,T,N (case insensitive).",ALT:"alternate base(s): Comma-separated list of alternate non-reference alleles",QUAL:"quality: Phred-scaled quality score for the assertion made in ALT",FILTER:"filter status: PASS if this position has passed all filters, otherwise a semicolon-separated list of codes for filters that fail"}),s)},e)),(0,w.jsx)(a.Z,{}),(0,w.jsx)(b,{feature:d,descriptions:s}),(0,w.jsx)(a.Z,{}),(0,w.jsx)(y,{feature:d,descriptions:s}),(0,w.jsx)(a.Z,{}),"breakend"===o.type?(0,w.jsx)(P,{feature:o,locStrings:o.ALT.map((function(e){var n;return(null===(n=(0,u.I)(e))||void 0===n?void 0:n.MatePosition)||""})),model:n}):null,"translocation"===o.type?(0,w.jsx)(P,{feature:o,model:n,locStrings:["".concat(o.INFO.CHR2[0],":").concat(o.INFO.END)]}):null,(0,w.jsx)(Z,(0,r.Z)((0,r.Z)({feature:o},e),{},{descriptions:s}))]})}))}}]);
//# sourceMappingURL=1294.1a600b1a.chunk.js.map