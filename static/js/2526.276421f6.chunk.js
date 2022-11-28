"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2526],{42526:function(e,n,t){t.r(n),t.d(n,{Attributes:function(){return ye},BaseAttributes:function(){return Ce},BaseCard:function(){return fe},BaseCoreDetails:function(){return ve},BasicValue:function(){return he},FeatureDetails:function(){return Se},FieldName:function(){return pe},SimpleValue:function(){return me},UriLink:function(){return Ze},default:function(){return ke},useStyles:function(){return de}});var r=t(59740),i=t(33028),a=t(68079),s=t(96234),o=t(96902),c=t(69029),u=t(49350),l=t(7824),d=t(72988),f=t(32278),p=t(78263),h=t(98113),m=t(91188),x=t(59959),g=t(23401),j=t(4782),v=t(71112),Z=t.n(v),b=t(27664),w=t(82525),y=t(32723),C=t(34795),N=t(96565),S=t(37910),k=t(3915),q=t(64229),F=t(5792),_=t(21051),B=t.n(_),D=t(20450),T=t(39041),L=t(88117),E=t(60916),I=t(18726),M=t(47057),O=t(29938),G=(0,m.ZL)()((function(e){return{formElt:{margin:e.spacing(3),width:400},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},dialogContent:{width:"80em"}}}));function U(e){var n=e.handleClose,t=e.intronBp,r=e.upDownBp,i=G().classes,a=(0,o.useState)("".concat(t)),c=(0,s.Z)(a,2),u=c[0],l=c[1],d=(0,o.useState)("".concat(r)),f=(0,s.Z)(d,2),p=f[0],m=f[1],x=!Number.isNaN(+u),g=!Number.isNaN(+p);return(0,O.jsxs)(D.Z,{maxWidth:"xl",open:!0,onClose:function(){return n()},children:[(0,O.jsxs)(T.Z,{children:["Feature sequence settings",n?(0,O.jsx)(k.Z,{className:i.closeButton,onClick:function(){return n()},children:(0,O.jsx)(M.Z,{})}):null]}),(0,O.jsx)(h.Z,{}),(0,O.jsxs)(L.Z,{className:i.dialogContent,children:[(0,O.jsx)(E.Z,{label:"Number of intronic bases around splice site to display",className:i.formElt,value:u,helperText:x?"":"Not a number",error:!x,onChange:function(e){return l(e.target.value)}}),(0,O.jsx)(E.Z,{label:"Number of bases up/down stream of feature to display",className:i.formElt,value:p,helperText:g?"":"Not a number",error:!g,onChange:function(e){return m(e.target.value)}})]}),(0,O.jsxs)(I.Z,{children:[(0,O.jsx)(N.Z,{onClick:function(){return n({upDownBp:+p,intronBp:+u})},disabled:!x||!g,color:"primary",variant:"contained",children:"Submit"}),(0,O.jsx)(N.Z,{onClick:function(){return n()},color:"secondary",autoFocus:!0,variant:"contained",children:"Cancel"})]})]})}var R=t(25471),H=(0,m.ZL)()((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},dialogContent:{}}}));function A(e){var n=e.handleClose,t=H().classes;return(0,O.jsxs)(D.Z,{maxWidth:"xl",open:!0,onClose:function(){return n()},children:[(0,O.jsxs)(T.Z,{children:["Feature sequence panel",n?(0,O.jsx)(k.Z,{className:t.closeButton,onClick:function(){return n()},children:(0,O.jsx)(M.Z,{})}):null]}),(0,O.jsx)(h.Z,{}),(0,O.jsxs)(L.Z,{className:t.dialogContent,children:[(0,O.jsx)(d.Z,{paragraph:!0,children:'The "Feature sequence" panel shows the underlying genomic sequence for a given feature, fetched from the reference genome.'}),(0,O.jsx)(d.Z,{children:"For gene features, this panel does special calculations to e.g. stitch together the coding sequence, the options are:"}),(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:"CDS - shows the stitched together CDS sequences"}),(0,O.jsx)("li",{children:'Protein - the translated coding sequence, with the "standard" genetic code'}),(0,O.jsx)("li",{children:"cDNA - shows the UTRs and stitched together CDS sequences"}),(0,O.jsx)("li",{children:"Gene w/ introns - the sequence underlying the entire gene including including introns, with UTR and CDS highlighted"}),(0,O.jsx)("li",{children:'Gene w/ Nbp introns - same "Gene w/ introns", but limiting to a subset of the intron sequence displayed'}),(0,O.jsx)("li",{children:'Gene +/- Nbp up+down stream - same as "Gene w/ introns" but with up and downstream sequence displayed'}),(0,O.jsx)("li",{children:'Gene +/- Nbp up+down stream, Nbp introns - same as "Gene w/ introns", but with limited intron sequence displayed and up and downstream sequence'})]}),(0,O.jsx)(d.Z,{paragraph:!0,children:"For other feature types, the options are:"}),(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:"Feature sequence - the reference genome sequence underlying the feature"}),(0,O.jsx)("li",{children:"Feature sequence +/- Nbp up+down stream - the reference genome sequence underlying the feature, with the up and downstream sequence"})]}),(0,O.jsxs)(d.Z,{children:['Note: you can use the "gear icon" ',(0,O.jsx)(R.Z,{})," to edit the number of bp displayed up/downstream and in the intron region"]})]}),(0,O.jsx)(I.Z,{children:(0,O.jsx)(N.Z,{onClick:function(){return n()},autoFocus:!0,variant:"contained",children:"Close"})})]})}function P(e,n){return e.map((function(e){return n.slice(e.start,e.end)})).join("")}function z(e){return"".concat(e.start,"-").concat(e.end)}function J(e){return e.filter((function(e,n,t){return!n||z(e)!==z(t[n-1])}))}function W(e,n){return e.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{start:n-e.end,end:n-e.start})})).sort((function(e,n){return e.start-n.start}))}var V="rgb(220,220,180)",K="rgba(250,200,200)";function Q(e){var n=e.cds,t=e.sequence;return(0,O.jsx)("span",{style:{background:V},children:P(n,t)})}function X(e){for(var n=e.cds,t=e.sequence,r=e.codonTable,i=P(n,t),a="",s=0;s<i.length;s+=3)a+=r[i.slice(s,s+3)]||"&";return(0,O.jsx)("span",{style:{background:"rgb(220,160,220)"},children:a})}function Y(e){var n=e.utr,t=e.cds,r=e.exons,i=e.sequence,s=e.upstream,c=e.downstream,u=e.includeIntrons,l=e.collapseIntron,d=e.intronBp,f=(t.length?[].concat((0,a.Z)(t),(0,a.Z)(n)).sort((function(e,n){return e.start-n.start})):r).filter((function(e){return e.start!==e.end}));return(0,O.jsxs)(O.Fragment,{children:[s?(0,O.jsx)("span",{style:{background:K},children:s}):null,f.map((function(e,n){var t,r=i.slice(e.end,null===(t=f[n+1])||void 0===t?void 0:t.start);return(0,O.jsxs)(o.Fragment,{children:[(0,O.jsx)("span",{style:{background:"CDS"===e.type?V:"rgb(200,240,240)"},children:i.slice(e.start,e.end)}),u&&n<f.length-1?(0,O.jsx)("span",{style:{background:undefined},children:l&&r.length>2*d?"".concat(r.slice(0,d),"...").concat(r.slice(-d)):r}):null]},JSON.stringify(e))})),c?(0,O.jsx)("span",{style:{background:K},children:c}):null]})}function $(e){var n=e.sequence,t=e.upstream,r=e.downstream;return(0,O.jsxs)(O.Fragment,{children:[t?(0,O.jsx)("span",{style:{background:K},children:t}):null,(0,O.jsx)("span",{style:{background:"rgb(200,280,200)"},children:n}),r?(0,O.jsx)("span",{style:{background:K},children:r}):null]})}var ee=o.forwardRef((function(e,n){var t=e.feature,r=e.mode,s=e.intronBp,o=void 0===s?10:s,c=e.sequence,u=c.seq,l=c.upstream,d=void 0===l?"":l,f=c.downstream,p=void 0===f?"":f,h=t.subfeatures,m=(void 0===h?[]:h).sort((function(e,n){return e.start-n.start})).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{start:e.start-t.start,end:e.end-t.start})})),x=J(m.filter((function(e){return"CDS"===e.type}))),g=J(m.filter((function(e){return e.type.match(/utr/i)}))),j=J(m.filter((function(e){return"exon"===e.type})));if(!g.length&&x.length&&j.length&&(g=function(e,n){var t=e[0],r=e[e.length-1],s=n.findIndex((function(e){return e.end>=t.start&&e.start<=t.start})),o=n.findIndex((function(e){return e.end>=r.end&&e.start<=r.end})),c=n[o],u=n[s],l=[].concat((0,a.Z)(n.slice(0,s)),[{start:u.start,end:t.start}]).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),d=[{start:r.end,end:c.end}].concat((0,a.Z)(n.slice(o+1))).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,a.Z)(l),(0,a.Z)(d))}(x,j)),g.length||!x.length||j.length||(g=function(e,n){var t=e[0],r=e[e.length-1],s=[{start:n.start,end:t.start}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),o=[{start:r.end,end:n.end}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,a.Z)(s),(0,a.Z)(o))}(x,{start:0,end:t.end-t.start,type:"gene"})),-1===t.strand){var v=[(0,b.revcom)(u),(0,b.revcom)(p),(0,b.revcom)(d)];d=v[1],p=v[2],x=W(x,(u=v[0]).length),j=W(j,u.length),g=W(g,u.length)}var Z=(0,b.generateCodonTable)(b.defaultCodonTable);return(0,O.jsx)("div",{ref:n,"data-testid":"sequence_panel",children:(0,O.jsxs)("div",{style:{fontFamily:"monospace",wordWrap:"break-word",overflow:"auto",fontSize:12,maxWidth:600,maxHeight:500},children:[">".concat(t.name||t.id||t.refName+":"+(t.start+1)+"-"+t.end,"-").concat(r,"\n"),(0,O.jsx)("br",{}),"genomic"===r?(0,O.jsx)($,{sequence:u}):"genomic_sequence_updown"===r?(0,O.jsx)($,{sequence:u,upstream:d,downstream:p}):"cds"===r?(0,O.jsx)(Q,{cds:x,sequence:u}):"cdna"===r?(0,O.jsx)(Y,{exons:j,cds:x,utr:g,sequence:u,intronBp:o}):"protein"===r?(0,O.jsx)(X,{cds:x,codonTable:Z,sequence:u}):"gene"===r?(0,O.jsx)(Y,{exons:j,cds:x,utr:g,sequence:u,includeIntrons:!0,intronBp:o}):"gene_collapsed_intron"===r?(0,O.jsx)(Y,{exons:j,cds:x,sequence:u,utr:g,includeIntrons:!0,collapseIntron:!0,intronBp:o}):"gene_updownstream"===r?(0,O.jsx)(Y,{exons:j,cds:x,sequence:u,utr:g,upstream:d,downstream:p,includeIntrons:!0,intronBp:o}):"gene_updownstream_collapsed_intron"===r?(0,O.jsx)(Y,{exons:j,cds:x,sequence:u,utr:g,upstream:d,downstream:p,includeIntrons:!0,collapseIntron:!0,intronBp:o}):(0,O.jsx)("div",{children:"Unknown type"})]})})})),ne=t(99836),te=t(57900),re=(0,m.ZL)()((function(e){return{button:{margin:e.spacing(1)},formControl:{margin:0},container:{margin:e.spacing(1)},container2:{marginTop:e.spacing(1)}}})),ie=5e5;function ae(e){var n,t=e.model,r=e.feature,a=re().classes,c=r,u=!(null===(n=c.subfeatures)||void 0===n||!n.find((function(e){return"CDS"===e.type}))),l="gene"===r.type,f=(0,o.useRef)(null),h=(0,o.useState)(!1),m=(0,s.Z)(h,2),x=m[0],g=m[1],j=(0,o.useState)(!1),v=(0,s.Z)(j,2),Z=v[0],_=v[1],D=(0,o.useState)(!1),T=(0,s.Z)(D,2),L=T[0],E=T[1],I=(0,o.useState)(),M=(0,s.Z)(I,2),G=M[0],H=M[1],P=(0,o.useState)(),z=(0,s.Z)(P,2),J=z[0],W=z[1],V=(0,o.useState)(!1),K=(0,s.Z)(V,2),Q=K[0],X=K[1],Y=(0,o.useState)(!1),$=(0,s.Z)(Y,2),ae=$[0],se=$[1],oe=(0,b.useLocalStorage)("intronBp",10),ce=(0,s.Z)(oe,2),ue=ce[0],le=ce[1],de=(0,b.useLocalStorage)("upDownBp",500),fe=(0,s.Z)(de,2),pe=fe[0],he=fe[1],me=(0,o.useState)({id:r.uniqueId,force:!1}),xe=(0,s.Z)(me,2),ge=xe[0],je=xe[1];(0,o.useEffect)((function(){je({id:r.uniqueId,force:!1})}),[r]),(0,o.useEffect)((function(){var e,n=!1;if(!t||!Z)return function(){};var i=(0,b.getSession)(t),a=i.assemblyManager,o=i.rpcManager,c=(null===(e=t.view)||void 0===e?void 0:e.assemblyNames)||[],u=(0,s.Z)(c,1)[0];function l(e,n,t){return d.apply(this,arguments)}function d(){return(d=(0,C.Z)((0,y.Z)().mark((function e(n,t,r){var i,c,l,d,f,p;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.waitForAssembly(u);case 2:if(i=e.sent){e.next=5;break}throw new Error("assembly not found");case 5:return c="getSequence",e.next=8,o.call(c,"CoreGetFeatures",{adapterConfig:(0,ne.getConf)(i,["sequence","adapter"]),sessionId:c,regions:[{start:n,end:t,refName:i.getCanonicalRefName(r)}]});case 8:return l=e.sent,d=l,f=(0,s.Z)(d,1),p=f[0],e.abrupt("return",(null===p||void 0===p?void 0:p.get("seq"))||"");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,C.Z)((0,y.Z)().mark((function e(){var t,i,a,s,o,c,u;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,W(void 0),i=(t=r).start,a=t.end,s=t.refName,ge.force||!(a-i>ie)){e.next=7;break}H({error:"Genomic sequence larger than ".concat(ie,'bp, use "force load" button to display')}),e.next=17;break;case 7:return e.next=9,l(i,a,s);case 9:return o=e.sent,e.next=12,l(Math.max(0,i-pe),i,s);case 12:return c=e.sent,e.next=15,l(a,a+pe,s);case 15:u=e.sent,n||H({seq:o,upstream:c,downstream:u});case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0),W(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))(),function(){n=!0}}),[r,Z,t,pe,ge]);var ve=!G,Ze=(0,b.getSession)(t),be=(0,ne.getConf)(Ze,["featureDetails","sequenceTypes"])||["mRNA","transcript","gene"],we="CDS"===r.type?be.includes("CDS")&&!r.parentId:be.includes(r.type),ye=we?u?"cds":"cdna":"genomic";(0,o.useEffect)((function(){ke(ye)}),[we,ye]);var Ce=(0,o.useState)(we?u?"cds":"cdna":"genomic"),Ne=(0,s.Z)(Ce,2),Se=Ne[0],ke=Ne[1],qe={gene:"Gene w/ introns",gene_collapsed_intron:"Gene w/ ".concat(ue,"bp of intron"),gene_updownstream:"Gene w/ ".concat(pe,"bp up+down stream"),gene_updownstream_collapsed_intron:"Gene w/ ".concat(pe,"bp up+down stream w/ ").concat(ue,"bp intron"),cdna:"cDNA"},Fe=we?u?(0,i.Z)({cds:"CDS",protein:"Protein"},qe):qe:{genomic:"Genomic seq",genomic_sequence_updown:"Genomic seq w/ ".concat(pe,"bp up+down stream")};return l&&!u||!t?null:(0,O.jsxs)("div",{className:a.container2,children:[(0,O.jsx)(N.Z,{variant:"contained",onClick:function(){return _(!Z)},children:Z?"Hide feature sequence":"Show feature sequence"}),(0,O.jsx)(S.Z,{className:a.formControl,children:(0,O.jsx)(k.Z,{onClick:function(){return E(!0)},children:(0,O.jsx)(te.Z,{})})}),(0,O.jsx)("br",{}),Z?(0,O.jsxs)("div",{className:a.container2,children:[(0,O.jsx)(S.Z,{className:a.formControl,children:(0,O.jsx)(q.Z,{value:Se,onChange:function(e){return ke(e.target.value)},children:Object.entries(Fe).map((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];return(0,O.jsx)(F.Z,{value:t,children:r},t)}))})}),(0,O.jsx)(S.Z,{className:a.formControl,children:(0,O.jsx)(N.Z,{className:a.button,variant:"contained",color:"inherit",onClick:function(){var e=f.current;e&&(B()(e.textContent||"",{format:"text/plain"}),X(!0),setTimeout((function(){return X(!1)}),1e3))},children:Q?"Copied to clipboard!":"Copy plaintext"})}),(0,O.jsx)(S.Z,{className:a.formControl,children:(0,O.jsx)(p.Z,{title:"The 'Copy HTML' function retains the colors from the sequence panel but cannot be pasted into some programs like notepad that only expect plain text",children:(0,O.jsx)(N.Z,{className:a.button,variant:"contained",color:"inherit",onClick:function(){var e=f.current;e&&(B()(e.innerHTML,{format:"text/html"}),se(!0),setTimeout((function(){return se(!1)}),1e3))},children:ae?"Copied to clipboard!":"Copy HTML"})})}),(0,O.jsx)(S.Z,{className:a.formControl,children:(0,O.jsx)(k.Z,{onClick:function(){return g(!0)},children:(0,O.jsx)(R.Z,{})})}),(0,O.jsx)("br",{}),(0,O.jsx)(O.Fragment,{children:J?(0,O.jsx)(d.Z,{color:"error",children:"".concat(J)}):ve?(0,O.jsx)(w.LoadingEllipses,{}):G?"error"in G?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d.Z,{color:"error",children:G.error}),(0,O.jsx)(N.Z,{variant:"contained",color:"inherit",onClick:function(){return je((0,i.Z)((0,i.Z)({},ge),{},{force:!0}))},children:"Force load"})]}):(0,O.jsx)(ee,{ref:f,feature:c,mode:Se,sequence:G,intronBp:ue}):(0,O.jsx)(d.Z,{children:"No sequence found"})})]}):null,x?(0,O.jsx)(U,{handleClose:function(e){if(e){var n=e.upDownBp,t=e.intronBp;le(t),he(n)}g(!1)},upDownBp:pe,intronBp:ue}):null,L?(0,O.jsx)(A,{handleClose:function(){return E(!1)}}):null]})}var se=["id"],oe=["__jbrowsefmt"],ce=["omitSingleLevel"],ue=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"],le=["name","start","end","strand","refName","description","type"],de=(0,m.ZL)()((function(e){return{expansionPanelDetails:{display:"block",padding:e.spacing(1)},expandIcon:{color:"#FFFFFF"},field:{display:"flex",flexWrap:"wrap"},fieldDescription:{"&:hover":{background:"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.grey[200],marginRight:e.spacing(1),padding:e.spacing(.5)},fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),background:e.palette.grey[100],border:"1px solid ".concat(e.palette.grey[300]),boxSizing:"border-box",overflow:"auto"}}}));function fe(e){var n=e.children,t=e.title,r=e.defaultExpanded,i=void 0===r||r,a=de().classes,c=(0,o.useState)(i),p=(0,s.Z)(c,2),h=p[0],m=p[1];return(0,O.jsxs)(u.Z,{expanded:h,onChange:function(){return m((function(e){return!e}))},TransitionProps:{unmountOnExit:!0},children:[(0,O.jsx)(l.Z,{expandIcon:(0,O.jsx)(x.Z,{className:a.expandIcon}),children:(0,O.jsxs)(d.Z,{variant:"button",children:[" ",t]})}),(0,O.jsx)(f.Z,{className:a.expansionPanelDetails,children:n})]})}var pe=function(e){var n=e.description,t=e.name,r=e.width,i=e.prefix,s=void 0===i?[]:i,o=de(),c=o.classes,u=o.cx,l=[].concat((0,a.Z)(s),[t]).join(".");return n?(0,O.jsx)(p.Z,{title:n,placement:"left",children:(0,O.jsx)("div",{className:u(c.fieldDescription,c.fieldName),children:l})}):(0,O.jsx)("div",{className:c.fieldName,style:{width:r},children:l})},he=function(e){var n=e.value,t=de().classes,r="".concat(n).match(/^https?:\/\//);return(0,O.jsx)("div",{className:t.fieldValue,children:o.isValidElement(n)?n:r?(0,O.jsx)(w.SanitizedHTML,{html:'<a href="'.concat(n,'">').concat(n,"</a>")}):(0,O.jsx)(w.SanitizedHTML,{html:Z()(n)?JSON.stringify(n):String(n)})})},me=function(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,a=e.width,s=de().classes;return null!==t&&void 0!==t?(0,O.jsxs)("div",{className:s.field,children:[(0,O.jsx)(pe,{prefix:i,description:r,name:n,width:a}),(0,O.jsx)(he,{value:t})]}):null},xe=function(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,s=void 0===i?[]:i,o=de().classes;return 1===t.length?Z()(t[0])?(0,O.jsx)(ye,{attributes:t[0],prefix:[].concat((0,a.Z)(s),[n])}):(0,O.jsxs)("div",{className:o.field,children:[(0,O.jsx)(pe,{prefix:s,description:r,name:n}),(0,O.jsx)(he,{value:t[0]})]}):t.every((function(e){return Z()(e)}))?(0,O.jsx)(O.Fragment,{children:t.map((function(e,t){return(0,O.jsx)(ye,{attributes:e,prefix:[].concat((0,a.Z)(s),[n+"-"+t])},JSON.stringify(e)+"-"+t)}))}):(0,O.jsxs)("div",{className:o.field,children:[(0,O.jsx)(pe,{prefix:s,description:r,name:n}),t.map((function(e,n){return(0,O.jsx)("div",{className:o.fieldSubvalue,children:(0,O.jsx)(he,{value:e})},JSON.stringify(e)+"-"+n)}))]})};function ge(e){var n=e.feature,t=n.strand,r={"-1":"-",0:"",1:"+"},i=r[t]?"(".concat(r[t],")"):"",a=(0,b.assembleLocString)(n);return(0,O.jsx)(O.Fragment,{children:"".concat(a," ").concat(i)})}function je(e){var n,t=e.feature,r=(0,i.Z)((0,i.Z)({},t),t.__jbrowsefmt),a=r.start,o=r.end,c=(0,i.Z)((0,i.Z)({},r),{},{length:(n=o-a,n.toLocaleString("en-US"))});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(me,{name:"Position",value:(0,O.jsx)(ge,(0,i.Z)((0,i.Z)({},e),{},{feature:r}))}),Object.entries({description:"Description",name:"Name",length:"Length",type:"Type"}).map((function(e){var n=(0,s.Z)(e,2),t=n[0];return[n[1],c[t]]})).filter((function(e){return null!=(0,s.Z)(e,2)[1]})).map((function(e){var n=(0,s.Z)(e,2),t=n[0],r=n[1];return(0,O.jsx)(me,{name:t,value:r},t)}))]})}var ve=function(e){return(0,O.jsx)(fe,(0,i.Z)((0,i.Z)({},e),{},{title:"Primary data",children:(0,O.jsx)(je,(0,i.Z)({},e))}))};function Ze(e){var n=e.value,t=(0,b.getUriLink)(n);return(0,O.jsx)(w.SanitizedHTML,{html:'<a href="'.concat(t,'">').concat(t,"</a>")})}var be=function(e){var n=e.value,t=e.prefix,o=e.name,c=Object.keys(n[0]).sort(),u=new Set(c);if(n.forEach((function(e){return Object.keys(e).forEach((function(e){return u.add(e)}))})),u.size<c.length+5){var l,d=Object.entries(n).map((function(e){var n=(0,s.Z)(e,2),t=n[0],a=n[1],o=a.id,c=(0,r.Z)(a,se);return(0,i.Z)({id:t,identifier:o},c)}));u.has("id")?(u.delete("id"),l=["identifier"].concat((0,a.Z)(u))):l=(0,a.Z)(u);var f=l.map((function(e){return{field:e,renderCell:function(e){var n=e.value;return(0,b.isUriLocation)(n)?(0,O.jsx)(Ze,{value:n}):(0,b.getStr)(n)},width:(0,b.measureGridWidth)(d.map((function(n){return n[e]})))}})),p=d.length<100,h=25*Math.min(d.length,100)+80+(p?0:50);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(pe,{prefix:t,name:o}),(0,O.jsx)("div",{style:{height:h,width:"100%"},children:(0,O.jsx)(g._,{disableSelectionOnClick:!0,rowHeight:25,rows:d,hideFooterSelectedRowCount:!0,columns:f,hideFooter:p})})]})}return null};function we(e){var n,t=e.value,r=e.prefix,i=e.name,a=de().classes,s=t.uri,o=t.baseUri,c=void 0===o?"":o;try{n=new URL(s,c).href}catch(u){n=s}return(0,O.jsxs)("div",{className:a.field,children:[(0,O.jsx)(pe,{prefix:r,name:i}),(0,O.jsx)(he,{value:n})]})}function ye(e){var n=e.attributes,t=e.omit,c=void 0===t?[]:t,u=e.omitSingleLevel,l=void 0===u?[]:u,d=e.descriptions,f=e.formatter,p=void 0===f?function(e){return e}:f,h=e.hideUris,m=e.prefix,x=void 0===m?[]:m,g=[].concat((0,a.Z)(c),ue,(0,a.Z)(l)),j=n.__jbrowsefmt,v=(0,r.Z)(n,oe),w=(0,i.Z)((0,i.Z)({},v),j),y=function(e,n){var t=[];return e.forEach((function(e){var r=[].concat((0,a.Z)(n),[e[0]]).join(".");t.push((0,b.measureText)(r,12))})),Math.ceil(Math.max.apply(Math,t))+10}(Object.entries(w).filter((function(e){var n=(0,s.Z)(e,2),t=n[0];return void 0!==n[1]&&!g.includes(t)})),x);return(0,O.jsx)(O.Fragment,{children:Object.entries(w).filter((function(e){var n=(0,s.Z)(e,2),t=n[0];return void 0!==n[1]&&!g.includes(t)})).map((function(n){var t=(0,s.Z)(n,2),c=t[0],u=t[1],l=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.forEach((function(e){t&&(t=t[e])})),"string"===typeof t?t:"string"===typeof(null===(n=t)||void 0===n?void 0:n.Description)?t.Description:void 0}([].concat((0,a.Z)(x),[c]),d);if(Array.isArray(u))return u.length>1&&u.every((function(e){return Z()(e)}))?(0,O.jsx)(be,{name:c,prefix:x,value:u},c):(0,O.jsx)(xe,{name:c,value:u,description:l,prefix:x},c);if(Z()(u)){e.omitSingleLevel;var f=(0,r.Z)(e,ce);return(0,b.isUriLocation)(u)?h?null:(0,O.jsx)(we,{name:c,prefix:x,value:u},c):(0,o.createElement)(ye,(0,i.Z)((0,i.Z)({},f),{},{key:c,attributes:u,descriptions:d,prefix:[].concat((0,a.Z)(x),[c])}))}return(0,O.jsx)(me,{name:c,value:p(u,c),description:l,prefix:x,width:Math.min(y,170)},c)}))})}var Ce=function(e){var n=e.feature;return(0,O.jsx)(fe,(0,i.Z)((0,i.Z)({},e),{},{title:"Attributes",children:(0,O.jsx)(ye,(0,i.Z)((0,i.Z)({},e),{},{attributes:n}))}))};function Ne(e,n,t){return[(r="".concat(e)||"".concat(n),r.length>20?"".concat(r.slice(0,20),"..."):r),"".concat(t)].filter((function(e){return!!e})).join(" - ");var r}var Se=function e(n){var t=n.omit,r=void 0===t?[]:t,a=n.model,s=n.feature,o=n.depth,u=void 0===o?0:o,l=s.name,f=void 0===l?"":l,p=s.id,m=void 0===p?"":p,x=s.type,g=void 0===x?"":x,j=s.subfeatures,v=(0,b.getEnv)(a).pluginManager,Z=(0,b.getSession)(a),y=v.evaluateExtensionPoint("Core-extraFeaturePanel",null,{session:Z,feature:s,model:a});return(0,O.jsxs)(fe,{title:Ne(f,m,g),children:[(0,O.jsx)(d.Z,{children:"Core details"}),(0,O.jsx)(je,(0,i.Z)({},n)),s.mate?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(h.Z,{}),(0,O.jsx)(d.Z,{children:"Mate details"}),(0,O.jsx)(je,(0,i.Z)((0,i.Z)({},n),{},{feature:s.mate}))]}):null,(0,O.jsx)(h.Z,{}),(0,O.jsx)(d.Z,{children:"Attributes"}),(0,O.jsx)(ye,(0,i.Z)((0,i.Z)({attributes:s},n),{},{omit:r,omitSingleLevel:le})),(0,O.jsx)(c.ErrorBoundary,{FallbackComponent:function(e){var n=e.error;return(0,O.jsx)(w.ErrorMessage,{error:n})},children:(0,O.jsx)(ae,(0,i.Z)({},n))}),y?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(h.Z,{}),(0,O.jsx)(fe,{title:y.name,children:(0,O.jsx)(y.Component,(0,i.Z)({},n))})]}):null,null!==j&&void 0!==j&&j.length?(0,O.jsx)(fe,{title:"Subfeatures",defaultExpanded:u<1,children:j.map((function(n){return(0,O.jsx)(e,{feature:n,model:a,depth:u+1},JSON.stringify(n))}))}):null]})},ke=(0,j.observer)((function(e){var n=e.model,t=n.featureData;if(!t)return null;var r,i=JSON.parse(JSON.stringify(t,(function(e,n){return"undefined"===typeof n?null:n})));return r=i,0===Object.keys(r).length?null:(0,O.jsx)(Se,{model:n,feature:i})}))}}]);
//# sourceMappingURL=2526.276421f6.chunk.js.map