"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8941],{58941:function(e,n,t){t.r(n),t.d(n,{Attributes:function(){return le},BaseAttributes:function(){return de},BaseCard:function(){return Y},BaseCoreDetails:function(){return oe},BasicValue:function(){return ee},FeatureDetails:function(){return pe},FieldName:function(){return $},SimpleValue:function(){return ne},UriLink:function(){return se},default:function(){return me},useStyles:function(){return X}});var r=t(59740),i=t(33028),a=t(68079),o=t(96234),s=t(96902),c=t(69029),u=t(50952),l=t(75695),d=t(35388),f=t(53244),p=t(50543),m=t(63348),x=t(12546),v=t(91188),h=t(4514),j=t(4782),Z=t(71112),g=t.n(Z),b=t(59959),w=t(97531),y=t(46186),S=t(32723),C=t(34795),k=t(44536),N=t(13655),_=t(25322),L=t(33266),D=t(15996),B=t(21051),E=t.n(B),F=t(99836),T=t(25471),q=t(57900),M=t(29938),O=(0,s.lazy)((function(){return t.e(7098).then(t.bind(t,37098))})),U=(0,s.lazy)((function(){return t.e(4609).then(t.bind(t,4609))})),I=(0,s.lazy)((function(){return t.e(6431).then(t.bind(t,26431))})),z=(0,v.ZL)()((function(e){return{button:{margin:e.spacing(1)},formControl:{margin:0},container:{margin:e.spacing(1)},container2:{marginTop:e.spacing(1)}}})),R=5e5;function A(e){var n,t=e.model,r=e.feature,i=z().classes,a=!(null===(n=r.subfeatures)||void 0===n||!n.find((function(e){return"CDS"===e.type}))),c="gene"===r.type,u=(0,s.useState)(!1),l=(0,o.Z)(u,2),d=l[0],f=l[1],p=(0,s.useState)(!1),m=(0,o.Z)(p,2),x=m[0],v=m[1];return c&&!a||!t?null:(0,M.jsxs)("div",{className:i.container2,children:[(0,M.jsx)(k.Z,{variant:"contained",onClick:function(){return f(!d)},children:d?"Hide feature sequence":"Show feature sequence"}),(0,M.jsx)(N.Z,{className:i.formControl,children:(0,M.jsx)(_.Z,{onClick:function(){return v(!0)},children:(0,M.jsx)(q.Z,{})})}),(0,M.jsx)("br",{}),d?(0,M.jsx)(G,{model:t,feature:r}):null,x?(0,M.jsx)(s.Suspense,{fallback:(0,M.jsx)("div",{}),children:(0,M.jsx)(U,{handleClose:function(){return v(!1)}})}):null]})}function G(e){var n,t=e.model,r=e.feature,a=z().classes,c=r,u=!(null===(n=c.subfeatures)||void 0===n||!n.find((function(e){return"CDS"===e.type}))),l=(0,s.useRef)(null),f=(0,s.useState)(!1),m=(0,o.Z)(f,2),x=m[0],v=m[1],h=(0,w.useLocalStorage)("intronBp",10),j=(0,o.Z)(h,2),Z=j[0],g=j[1],b=(0,w.useLocalStorage)("upDownBp",500),B=(0,o.Z)(b,2),q=B[0],U=B[1],A=(0,s.useState)(),G=(0,o.Z)(A,2),H=G[0],P=G[1],J=(0,s.useState)(),V=(0,o.Z)(J,2),W=V[0],K=V[1],Q=(0,s.useState)(!1),X=(0,o.Z)(Q,2),Y=X[0],$=X[1],ee=(0,s.useState)(!1),ne=(0,o.Z)(ee,2),te=ne[0],re=ne[1],ie=(0,s.useState)({id:r.uniqueId,force:!1}),ae=(0,o.Z)(ie,2),oe=ae[0],se=ae[1];(0,s.useEffect)((function(){se({id:r.uniqueId,force:!1})}),[r]),(0,s.useEffect)((function(){var e,n=!1;if(!t)return function(){};var i=(0,w.getSession)(t),a=i.assemblyManager,s=i.rpcManager,c=(null===(e=t.view)||void 0===e?void 0:e.assemblyNames)||[],u=(0,o.Z)(c,1)[0];function l(e,n,t){return d.apply(this,arguments)}function d(){return(d=(0,C.Z)((0,S.Z)().mark((function e(n,t,r){var i,c,l,d,f,p;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.waitForAssembly(u);case 2:if(i=e.sent){e.next=5;break}throw new Error("assembly not found");case 5:return c="getSequence",e.next=8,s.call(c,"CoreGetFeatures",{adapterConfig:(0,F.getConf)(i,["sequence","adapter"]),sessionId:c,regions:[{start:n,end:t,refName:i.getCanonicalRefName(r),assemblyName:u}]});case 8:return l=e.sent,d=l,f=(0,o.Z)(d,1),p=f[0],e.abrupt("return",(null===p||void 0===p?void 0:p.get("seq"))||"");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,C.Z)((0,S.Z)().mark((function e(){var t,i,a,o,s,c,u;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,K(void 0),i=(t=r).start,a=t.end,o=t.refName,oe.force||!(a-i>R)){e.next=7;break}P({error:"Genomic sequence larger than ".concat(R,'bp, use "force load" button to display')}),e.next=17;break;case 7:return e.next=9,l(i,a,o);case 9:return s=e.sent,e.next=12,l(Math.max(0,i-q),i,o);case 12:return c=e.sent,e.next=15,l(a,a+q,o);case 15:u=e.sent,n||P({seq:s,upstream:c,downstream:u});case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0),K(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))(),function(){n=!0}}),[r,t,q,oe]);var ce=!H,ue=(0,w.getSession)(t),le=(0,F.getConf)(ue,["featureDetails","sequenceTypes"])||["mRNA","transcript","gene"],de="CDS"===r.type?le.includes("CDS")&&!r.parentId:le.includes(r.type),fe=de?u?"cds":"cdna":"genomic";(0,s.useEffect)((function(){ve(fe)}),[de,fe]);var pe=(0,s.useState)(de?u?"cds":"cdna":"genomic"),me=(0,o.Z)(pe,2),xe=me[0],ve=me[1],he={gene:"Gene w/ introns",gene_collapsed_intron:"Gene w/ ".concat(Z,"bp of intron"),gene_updownstream:"Gene w/ ".concat(q,"bp up+down stream"),gene_updownstream_collapsed_intron:"Gene w/ ".concat(q,"bp up+down stream w/ ").concat(Z,"bp intron"),cdna:"cDNA"},je=de?u?(0,i.Z)({cds:"CDS",protein:"Protein"},he):he:{genomic:"Genomic seq",genomic_sequence_updown:"Genomic seq w/ ".concat(q,"bp up+down stream")};return(0,M.jsxs)("div",{className:a.container2,children:[(0,M.jsx)(N.Z,{className:a.formControl,children:(0,M.jsx)(L.Z,{value:xe,onChange:function(e){return ve(e.target.value)},children:Object.entries(je).map((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,M.jsx)(D.Z,{value:t,children:r},t)}))})}),(0,M.jsx)(N.Z,{className:a.formControl,children:(0,M.jsx)(k.Z,{className:a.button,variant:"contained",onClick:function(){var e=l.current;e&&(E()(e.textContent||"",{format:"text/plain"}),$(!0),setTimeout((function(){return $(!1)}),1e3))},children:Y?"Copied to clipboard!":"Copy plaintext"})}),(0,M.jsx)(N.Z,{className:a.formControl,children:(0,M.jsx)(p.Z,{title:"The 'Copy HTML' function retains the colors from the sequence panel but cannot be pasted into some programs like notepad that only expect plain text",children:(0,M.jsx)(k.Z,{className:a.button,variant:"contained",onClick:function(){var e=l.current;e&&(E()(e.innerHTML,{format:"text/html"}),re(!0),setTimeout((function(){return re(!1)}),1e3))},children:te?"Copied to clipboard!":"Copy HTML"})})}),(0,M.jsx)(N.Z,{className:a.formControl,children:(0,M.jsx)(_.Z,{onClick:function(){return v(!0)},children:(0,M.jsx)(T.Z,{})})}),(0,M.jsx)("br",{}),W?(0,M.jsx)(d.Z,{color:"error",children:"".concat(W)}):ce?(0,M.jsx)(y.LoadingEllipses,{}):H?"error"in H?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(d.Z,{color:"error",children:H.error}),(0,M.jsx)(k.Z,{variant:"contained",color:"inherit",onClick:function(){return se((0,i.Z)((0,i.Z)({},oe),{},{force:!0}))},children:"Force load"})]}):(0,M.jsx)(s.Suspense,{fallback:(0,M.jsx)("div",{children:"Loading"}),children:(0,M.jsx)(I,{ref:l,feature:c,mode:xe,sequence:H,intronBp:Z})}):(0,M.jsx)(d.Z,{children:"No sequence found"}),x?(0,M.jsx)(s.Suspense,{fallback:(0,M.jsx)("div",{}),children:(0,M.jsx)(O,{handleClose:function(e){if(e){var n=e.upDownBp,t=e.intronBp;g(t),U(n)}v(!1)},upDownBp:q,intronBp:Z})}):null]})}var H=t(89378),P=["id"],J=["__jbrowsefmt"],V=["omitSingleLevel"],W=170,K=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"],Q=["name","start","end","strand","refName","description","type"],X=(0,v.ZL)()((function(e){var n;return{expansionPanelDetails:{display:"block",padding:e.spacing(1)},expandIcon:{color:(null===(n=e.palette.tertiary)||void 0===n?void 0:n.contrastText)||"#fff"},field:{display:"flex",flexWrap:"wrap"},fieldDescription:{"&:hover":{background:"dark"===e.palette.mode?"#e65100":"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.action.disabledBackground,marginRight:e.spacing(1),padding:e.spacing(.5)},fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),background:e.palette.action.disabledBackground,border:"1px solid ".concat(e.palette.action.disabledBackground),boxSizing:"border-box",overflow:"auto"}}}));function Y(e){var n=e.children,t=e.title,r=e.defaultExpanded,i=void 0===r||r,a=X().classes,c=(0,s.useState)(i),p=(0,o.Z)(c,2),m=p[0],x=p[1];return(0,M.jsxs)(u.Z,{expanded:m,onChange:function(){return x((function(e){return!e}))},TransitionProps:{unmountOnExit:!0,timeout:150},children:[(0,M.jsx)(l.Z,{expandIcon:(0,M.jsx)(b.Z,{className:a.expandIcon}),children:(0,M.jsxs)(d.Z,{variant:"button",children:[" ",t]})}),(0,M.jsx)(f.Z,{className:a.expansionPanelDetails,children:n})]})}var $=function(e){var n=e.description,t=e.name,r=e.width,i=e.prefix,o=void 0===i?[]:i,s=X(),c=s.classes,u=s.cx,l=[].concat((0,a.Z)(o),[t]).join(".");return n?(0,M.jsx)(p.Z,{title:n,placement:"left",children:(0,M.jsx)("div",{className:u(c.fieldDescription,c.fieldName),children:l})}):(0,M.jsx)("div",{className:c.fieldName,style:{width:r},children:l})},ee=function(e){var n=e.value,t=X().classes,r="".concat(n).match(/^https?:\/\//);return(0,M.jsx)("div",{className:t.fieldValue,children:s.isValidElement(n)?n:r?(0,M.jsx)(m.Z,{href:"".concat(n),children:"".concat(n)}):(0,M.jsx)(y.SanitizedHTML,{html:g()(n)?JSON.stringify(n):String(n)})})};function ne(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,a=e.width,o=X().classes;return null!==t&&void 0!==t?(0,M.jsxs)("div",{className:o.field,children:[(0,M.jsx)($,{prefix:i,description:r,name:n,width:a}),(0,M.jsx)(ee,{value:t})]}):null}function te(e){var n=e.name,t=e.value,r=e.description,i=e.prefix,o=void 0===i?[]:i,s=X().classes;return 1===t.length?g()(t[0])?(0,M.jsx)(le,{attributes:t[0],prefix:[].concat((0,a.Z)(o),[n])}):(0,M.jsxs)("div",{className:s.field,children:[(0,M.jsx)($,{prefix:o,description:r,name:n}),(0,M.jsx)(ee,{value:t[0]})]}):t.every((function(e){return g()(e)}))?(0,M.jsx)(M.Fragment,{children:t.map((function(e,t){return(0,M.jsx)(le,{attributes:e,prefix:[].concat((0,a.Z)(o),[n+"-"+t])},JSON.stringify(e)+"-"+t)}))}):(0,M.jsxs)("div",{className:s.field,children:[(0,M.jsx)($,{prefix:o,description:r,name:n}),t.map((function(e,n){return(0,M.jsx)("div",{className:s.fieldSubvalue,children:(0,M.jsx)(ee,{value:e})},JSON.stringify(e)+"-"+n)}))]})}var re=function(e){return e.toLocaleString("en-US")};function ie(e){var n=e.feature,t=n.strand,r={"-1":"-",0:"",1:"+"},i=r[t]?"(".concat(r[t],")"):"",a=(0,w.assembleLocString)(n);return(0,M.jsx)(M.Fragment,{children:"".concat(a," ").concat(i)})}function ae(e){var n=e.feature,t=(0,i.Z)((0,i.Z)({},n),n.__jbrowsefmt),r=t.start,a=t.end,s=(0,i.Z)((0,i.Z)({},t),{},{length:re(a-r)});return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(ne,{name:"Position",value:(0,M.jsx)(ie,(0,i.Z)((0,i.Z)({},e),{},{feature:t}))}),Object.entries({description:"Description",name:"Name",length:"Length",type:"Type"}).map((function(e){var n=(0,o.Z)(e,2),t=n[0];return[n[1],s[t]]})).filter((function(e){return null!=(0,o.Z)(e,2)[1]})).map((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,M.jsx)(ne,{name:t,value:r},t)}))]})}var oe=function(e){return(0,M.jsx)(Y,(0,i.Z)((0,i.Z)({},e),{},{title:"Primary data",children:(0,M.jsx)(ae,(0,i.Z)({},e))}))};function se(e){var n=e.value,t=(0,w.getUriLink)(n);return(0,M.jsx)(y.SanitizedHTML,{html:'<a href="'.concat(t,'">').concat(t,"</a>")})}function ce(e){var n=e.value,t=e.prefix,s=e.name,c=Object.keys(n[0]).sort(),u=new Set(c);if(n.forEach((function(e){return Object.keys(e).forEach((function(e){return u.add(e)}))})),u.size<c.length+5){var l,d=Object.entries(n).map((function(e){var n=(0,o.Z)(e,2),t=n[0],a=n[1],s=a.id,c=(0,r.Z)(a,P);return(0,i.Z)({id:t,identifier:s},c)}));u.has("id")?(u.delete("id"),l=["identifier"].concat((0,a.Z)(u))):l=(0,a.Z)(u);var f=l.map((function(e){return{field:e,renderCell:function(e){var n=e.value;return(0,w.isUriLocation)(n)?(0,M.jsx)(se,{value:n}):(0,w.getStr)(n)},width:(0,w.measureGridWidth)(d.map((function(n){return n[e]})))}})),p=d.length<100,m=25*Math.min(d.length,100)+80+(p?0:50);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)($,{prefix:t,name:s}),(0,M.jsx)("div",{style:{height:m,width:"100%"},children:(0,M.jsx)(h._,{disableSelectionOnClick:!0,rowHeight:25,rows:d,hideFooterSelectedRowCount:!0,columns:f,hideFooter:p})})]})}return null}function ue(e){var n,t=e.value,r=e.prefix,i=e.name,a=X().classes,o=t.uri,s=t.baseUri,c=void 0===s?"":s;try{n=new URL(o,c).href}catch(u){n=o}return(0,M.jsxs)("div",{className:a.field,children:[(0,M.jsx)($,{prefix:r,name:i}),(0,M.jsx)(ee,{value:n})]})}function le(e){var n=e.attributes,t=e.omit,c=void 0===t?[]:t,u=e.omitSingleLevel,l=void 0===u?[]:u,d=e.descriptions,f=e.formatter,p=void 0===f?function(e){return e}:f,m=e.hideUris,x=e.prefix,v=void 0===x?[]:x,h=[].concat((0,a.Z)(c),K,(0,a.Z)(l)),j=n.__jbrowsefmt,Z=(0,r.Z)(n,J),b=(0,i.Z)((0,i.Z)({},Z),j),y=function(e,n){var t=[];return e.forEach((function(e){var r=[].concat((0,a.Z)(n),[e[0]]).join(".");t.push((0,w.measureText)(r,12))})),Math.ceil(Math.max.apply(Math,t))+10}(Object.entries(b).filter((function(e){var n=(0,o.Z)(e,2),t=n[0];return void 0!==n[1]&&!h.includes(t)})),v);return(0,M.jsx)(M.Fragment,{children:Object.entries(b).filter((function(e){var n=(0,o.Z)(e,2),t=n[0];return void 0!==n[1]&&!h.includes(t)})).map((function(n){var t=(0,o.Z)(n,2),c=t[0],u=t[1],l=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.forEach((function(e){t&&(t=t[e])})),"string"===typeof t?t:"string"===typeof(null===(n=t)||void 0===n?void 0:n.Description)?t.Description:void 0}([].concat((0,a.Z)(v),[c]),d);if(Array.isArray(u))return u.length>1&&u.every((function(e){return g()(e)}))?(0,M.jsx)(ce,{name:c,prefix:v,value:u},c):(0,M.jsx)(te,{name:c,value:u,description:l,prefix:v},c);if(g()(u)){e.omitSingleLevel;var f=(0,r.Z)(e,V);return(0,w.isUriLocation)(u)?m?null:(0,M.jsx)(ue,{name:c,prefix:v,value:u},c):(0,s.createElement)(le,(0,i.Z)((0,i.Z)({},f),{},{key:c,attributes:u,descriptions:d,prefix:[].concat((0,a.Z)(v),[c])}))}return(0,M.jsx)(ne,{name:c,value:p(u,c),description:l,prefix:v,width:Math.min(y,W)},c)}))})}var de=function(e){var n=e.feature;return(0,M.jsx)(Y,(0,i.Z)((0,i.Z)({},e),{},{title:"Attributes",children:(0,M.jsx)(le,(0,i.Z)((0,i.Z)({},e),{},{attributes:n}))}))};function fe(e,n,t){return[(0,H.Cn)("".concat(e)||"".concat(n)),"".concat(t)].filter((function(e){return!!e})).join(" - ")}function pe(e){var n=e.omit,t=void 0===n?[]:n,r=e.model,a=e.feature,o=e.depth,s=void 0===o?0:o,u=a.name,l=void 0===u?"":u,f=a.id,p=void 0===f?"":f,m=a.type,v=void 0===m?"":m,h=a.subfeatures,j=(0,w.getEnv)(r).pluginManager,Z=(0,w.getSession)(r),g=j.evaluateExtensionPoint("Core-extraFeaturePanel",null,{session:Z,feature:a,model:r});return(0,M.jsxs)(Y,{title:fe(l,p,v),children:[(0,M.jsx)(d.Z,{children:"Core details"}),(0,M.jsx)(ae,(0,i.Z)({},e)),a.mate?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(x.Z,{}),(0,M.jsx)(d.Z,{children:"Mate details"}),(0,M.jsx)(ae,(0,i.Z)((0,i.Z)({},e),{},{feature:a.mate}))]}):null,(0,M.jsx)(x.Z,{}),(0,M.jsx)(d.Z,{children:"Attributes"}),(0,M.jsx)(le,(0,i.Z)((0,i.Z)({attributes:a},e),{},{omit:t,omitSingleLevel:Q})),(0,M.jsx)(c.ErrorBoundary,{FallbackComponent:function(e){var n=e.error;return(0,M.jsx)(y.ErrorMessage,{error:n})},children:(0,M.jsx)(A,(0,i.Z)({},e))}),g?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(x.Z,{}),(0,M.jsx)(Y,{title:g.name,children:(0,M.jsx)(g.Component,(0,i.Z)({},e))})]}):null,null!==h&&void 0!==h&&h.length?(0,M.jsx)(Y,{title:"Subfeatures",defaultExpanded:s<1,children:h.map((function(e){return(0,M.jsx)(pe,{feature:e,model:r,depth:s+1},JSON.stringify(e))}))}):null]})}var me=(0,j.observer)((function(e){var n=e.model,t=n.featureData;if(!t)return null;var r,i=JSON.parse(JSON.stringify(t,(function(e,n){return"undefined"===typeof n?null:n})));return r=i,0===Object.keys(r).length?null:(0,M.jsx)(pe,{model:n,feature:i})}))},89378:function(e,n,t){t.d(n,{Cn:function(){return d},D8:function(){return s},Wx:function(){return c},ZK:function(){return u},mw:function(){return l},zo:function(){return a}});var r=t(68079),i=t(33028);function a(e,n){return e.map((function(e){return n.slice(e.start,e.end)})).join("")}function o(e){return"".concat(e.start,"-").concat(e.end)}function s(e){return e.filter((function(e,n,t){return!n||o(e)!==o(t[n-1])}))}function c(e,n){return e.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{start:n-e.end,end:n-e.start})})).sort((function(e,n){return e.start-n.start}))}function u(e,n){var t=e[0],a=e[e.length-1],o=n.findIndex((function(e){return e.end>=t.start&&e.start<=t.start})),s=n.findIndex((function(e){return e.end>=a.end&&e.start<=a.end})),c=n[s],u=n[o],l=[].concat((0,r.Z)(n.slice(0,o)),[{start:u.start,end:t.start}]).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),d=[{start:a.end,end:c.end}].concat((0,r.Z)(n.slice(s+1))).map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,r.Z)(l),(0,r.Z)(d))}function l(e,n){var t=e[0],a=e[e.length-1],o=[{start:n.start,end:t.start}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"five_prime_UTR"})})),s=[{start:a.end,end:n.end}].map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{type:"three_prime_UTR"})}));return[].concat((0,r.Z)(o),(0,r.Z)(s))}function d(e){return e.length>20?"".concat(e.slice(0,20),"..."):e}}}]);
//# sourceMappingURL=8941.b47e859e.chunk.js.map