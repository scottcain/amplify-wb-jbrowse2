"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1510],{81510:function(e,t,n){n.r(t);var o=n(96234),a=n(30969),r=n(90550),s=n(22714),l=n(83483),c=n(64501),i=n(32343),u=n(93138),d=n(80975),h=n(7690),p=n(53033),g=n(28599),x=n(14008),Z=n(37574),b=(0,s.Z)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));t.default=(0,r.observer)((function(e){var t=b(),n=e.model,r=e.handleClose,s=(0,a.useState)(""),f=(0,o.Z)(s,2),j=f[0],m=f[1],C=j.match(/^[A-Za-z][A-Za-z0-9]$/);return(0,Z.jsxs)(l.Z,{open:!0,onClose:r,children:[(0,Z.jsxs)(c.Z,{children:["Sort by tag",(0,Z.jsx)(i.Z,{"aria-label":"close",className:t.closeButton,onClick:r,children:(0,Z.jsx)(x.Z,{})})]}),(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(d.Z,{children:"Set the tag to sort by"}),(0,Z.jsx)(d.Z,{color:"textSecondary",children:"Examples: HP for haplotype, RG for read group, etc."}),(0,Z.jsx)(h.Z,{value:j,onChange:function(e){return m(e.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2,"data-testid":"sort-tag-name-input"},error:2===j.length&&!C,helperText:2!==j.length||C?"":"Not a valid tag",autoComplete:"off","data-testid":"sort-tag-name"}),(0,Z.jsxs)(p.Z,{children:[(0,Z.jsx)(g.Z,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,onClick:function(){n.setSortedBy("tag",j),r()},children:"Submit"}),(0,Z.jsx)(g.Z,{variant:"contained",color:"secondary",onClick:function(){return r()},children:"Cancel"})]})]})]})}))}}]);
//# sourceMappingURL=1510.c950a0bf.chunk.js.map