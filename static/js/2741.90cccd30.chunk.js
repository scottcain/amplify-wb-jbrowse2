"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2741],{62741:function(i,o,e){e.r(o);var n=e(68079),t=e(96234),s=(e(96902),e(4782)),l=e(20450),c=e(39041),r=e(3915),a=e(88117),d=e(72988),h=e(97630),m=e(18726),u=e(96565),p=e(91188),f=e(47057),y=e(29938),j=(0,p.ZL)()((function(i){return{closeButton:{position:"absolute",right:i.spacing(1),top:i.spacing(1),color:i.palette.grey[500]},table:{border:"1px solid #888",margin:i.spacing(4),"& td":{padding:i.spacing(1)}}}}));function g(i){var o=i.modifications,e=j().classes;return(0,y.jsx)("table",{className:e.table,children:(0,y.jsx)("tbody",{children:o.map((function(i){var o=(0,t.Z)(i,2),e=o[0],n=o[1];return(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{children:e}),(0,y.jsx)("td",{children:n}),(0,y.jsx)("td",{style:{width:"1em",background:n}})]},e)}))})})}o.default=(0,s.observer)((function(i){var o=j().classes,e=i.model,t=i.handleClose,s=e.colorBy,p=e.modificationTagMap,x=(0,n.Z)(p.entries());return(0,y.jsxs)(l.Z,{open:!0,onClose:t,children:[(0,y.jsxs)(c.Z,{children:["Color by modifications",(0,y.jsx)(r.Z,{"aria-label":"close",className:o.closeButton,onClick:t,children:(0,y.jsx)(f.Z,{})})]}),(0,y.jsxs)(a.Z,{children:[(0,y.jsx)(d.Z,{children:"You can choose to color the modifications in the BAM/CRAM MM/ML specification using this dialog. Choosing modifications colors the modified positions and can color multiple modification types. Choosing the methylation setting colors methylated and unmethylated CpG."}),(0,y.jsx)(d.Z,{children:"Note: you can revisit this dialog to see the current mapping of colors to modification type for the modification coloring mode"}),(0,y.jsxs)("div",{style:{margin:20},children:["modifications"===(null===s||void 0===s?void 0:s.type)?(0,y.jsx)("div",{children:x.length?(0,y.jsxs)(y.Fragment,{children:["Current modification-type-to-color mapping",(0,y.jsx)(g,{modifications:(0,n.Z)(p.entries())})]}):(0,y.jsxs)("div",{children:[(0,y.jsx)(d.Z,{children:"Note: color by modifications is already enabled. Loading current modifications..."}),(0,y.jsx)(h.Z,{size:15})]})}):null,"methylation"===(null===s||void 0===s?void 0:s.type)?(0,y.jsx)(g,{modifications:[["methylated","red"],["unmethylated","blue"]]}):null]}),(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(u.Z,{variant:"contained",color:"primary",style:{margin:5},onClick:function(){e.setColorScheme({type:"modifications"}),t()},children:"Modifications"}),(0,y.jsx)(u.Z,{variant:"contained",color:"primary",style:{margin:5},onClick:function(){e.setColorScheme({type:"methylation"}),t()},children:"Methylation"}),(0,y.jsx)(u.Z,{variant:"contained",color:"secondary",style:{margin:5},onClick:function(){return t()},children:"Cancel"})]})]})]})}))}}]);
//# sourceMappingURL=2741.90cccd30.chunk.js.map