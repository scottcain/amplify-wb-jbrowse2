"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4144],{35300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(7552),r=n(503),l=n.n(r),i=n(1178),c=n(99546),s=n(75785),o=n(75459),m=n(76157),u=n(33371),d=n(32808),f=n(36715),p=n(36441),E=n(49823);const g=(0,s.n9)()((e=>({margin:{marginBottom:e.spacing(4)},cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}})));function h({value:e,prefix:t,name:n}){const{classes:r}=g(),[l,i]=(0,a.useState)(!1),s=Object.keys(e[0]).sort(),h=new Set(s),v=Object.entries(e).map((([e,t])=>{const{id:n,...a}=t;return{id:e,identifier:n,...a}}));for(const t of e)for(const e of Object.keys(t))h.add(e);let b;h.has("id")?(h.delete("id"),b=["identifier",...h]):b=[...h];const x=b.map((e=>(0,c.measureGridWidth)(v.map((t=>t[e])))));return h.size<s.length+5?a.createElement("div",{className:r.margin},a.createElement(p.A,{prefix:t,name:n}),a.createElement(u.A,{control:a.createElement(d.A,{checked:l,onChange:e=>{i(e.target.checked)}}),label:a.createElement(f.A,{variant:"body2"},"Show options")}),a.createElement(o.z,{autoHeight:!0,disableRowSelectionOnClick:!0,rows:v,rowHeight:20,columnHeaderHeight:35,hideFooter:v.length<25,slots:{toolbar:l?m.O:null},slotProps:{toolbar:{printOptions:{disableToolbarButton:!0}}},columns:b.map(((e,t)=>({field:e,renderCell:e=>{const t=e.value;return a.createElement("div",{className:r.cell},a.createElement(E.SanitizedHTML,{html:(0,c.getStr)(t||"")}))},width:x[t]})))})):null}var v=n(28055);const b=(0,s.n9)()((e=>({field:{display:"flex",flexWrap:"wrap"},fieldSubvalue:{wordBreak:"break-word",maxHeight:300,padding:e.spacing(.5),border:`1px solid ${e.palette.action.selected}`,boxSizing:"border-box",overflow:"auto"}})));function x({name:e,value:t,description:n,prefix:r=[]}){const{classes:i}=b();return 1===t.length?l()(t[0])?a.createElement(O,{attributes:t[0],prefix:[...r,e]}):a.createElement("div",{className:i.field},a.createElement(p.A,{prefix:r,description:n,name:e}),a.createElement(v.A,{value:t[0]})):t.every((e=>l()(e)))?a.createElement(a.Fragment,null,t.map(((t,n)=>a.createElement(O,{key:`${JSON.stringify(t)}-${n}`,attributes:t,prefix:[...r,`${e}-${n}`]})))):a.createElement("div",{className:i.field},a.createElement(p.A,{prefix:r,description:n,name:e}),t.map(((e,t)=>a.createElement("div",{key:`${JSON.stringify(e)}-${t}`,className:i.fieldSubvalue},a.createElement(v.A,{value:e})))))}const y=(0,s.n9)()({field:{display:"flex",flexWrap:"wrap"}});function w({value:e,prefix:t,name:n}){const{classes:r}=y(),{uri:l,baseUri:i=""}=e;let c;try{c=new URL(l,i).href}catch(e){c=l}return a.createElement("div",{className:r.field},a.createElement(p.A,{prefix:t,name:n}),a.createElement(v.A,{value:c}))}var A=n(32106);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(null,arguments)}const S=170,N=["__jbrowsefmt","length","position","subfeatures","uniqueId","exonFrames","parentId","thickStart","thickEnd"];function O(e){const{attributes:t,omit:n=[],omitSingleLevel:r=[],descriptions:s,formatter:o=e=>e,hideUris:m,prefix:u=[]}=e,d=new Set([...n,...N,...r]),{__jbrowsefmt:f,...p}=t,E={...p,...f},g=(0,i.kb)(Object.entries(E).filter((([e,t])=>void 0!==t&&!d.has(e))),u);return a.createElement(a.Fragment,null,Object.entries(E).filter((([e,t])=>void 0!==t&&!d.has(e))).map((([t,n])=>{const r=(0,i.wh)([...u,t],s);if(Array.isArray(n))return n.length>1&&n.every((e=>l()(e)))?a.createElement(h,{key:t,name:t,prefix:u,value:n}):a.createElement(x,{key:t,name:t,value:n,description:r,prefix:u});if(l()(n)){const{omitSingleLevel:r,...l}=e;return(0,c.isUriLocation)(n)?m?null:a.createElement(w,{key:t,name:t,prefix:u,value:n}):a.createElement(O,k({key:t},l,{attributes:n,descriptions:s,prefix:[...u,t]}))}return a.createElement(A.A,{key:t,name:t,value:o(n,t),description:r,prefix:u,width:Math.min(g,S)})})))}},87083:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(7552),r=n(63011),l=n(41578),i=n(36715),c=n(63165),s=n(75785),o=n(7720);const m=(0,s.n9)()((e=>({expansionPanelDetails:{display:"block",padding:e.spacing(1)},icon:{color:e.palette.tertiary.contrastText||"#fff"}})));function u({children:e,title:t,defaultExpanded:n=!0}){const{classes:s}=m();return a.createElement(r.A,{defaultExpanded:n},a.createElement(l.A,{expandIcon:a.createElement(o.A,{className:s.icon})},a.createElement(i.A,{variant:"button"},t)),a.createElement(c.A,{className:s.expansionPanelDetails},e))}},28055:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(7552),r=n(75785),l=n(503),i=n.n(l),c=n(87731),s=n(49823);const o=(0,r.n9)()((e=>({fieldValue:{wordBreak:"break-word",maxHeight:300,fontSize:12,padding:e.spacing(.5),overflow:"auto"}})));function m({value:e}){const{classes:t}=o(),n=/^https?:\/\//.exec(`${e}`);return a.createElement("div",{className:t.fieldValue},a.isValidElement(e)?e:n?a.createElement(c.A,{href:`${e}`},`${e}`):a.createElement(s.SanitizedHTML,{html:i()(e)?JSON.stringify(e):String(e)}))}},62568:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(7552),r=n(99546),l=n(32106);function i(e){const{feature:t}=e,n=t.strand,l={"-1":"-",0:"",1:"+"},i=l[n]?`(${l[n]})`:"",c=(0,r.assembleLocString)(t);return a.createElement(a.Fragment,null,`${c} ${i}`)}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(null,arguments)}function s(e){const{feature:t}=e,n=t,s={...n,...n.__jbrowsefmt},{start:o,end:m}=s,u={...s,length:(0,r.toLocale)(m-o)};return a.createElement(a.Fragment,null,a.createElement(l.A,{name:"Position",value:a.createElement(i,c({},e,{feature:s}))}),Object.entries({description:"Description",name:"Name",length:"Length",type:"Type"}).map((([e,t])=>[t,u[e]])).filter((([,e])=>null!=e)).map((([e,t])=>a.createElement(l.A,{key:e,name:e,value:t}))))}},84144:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(7552),r=n(57468),l=n(36715),i=n(24387),c=n(99546),s=n(49823),o=n(1178),m=n(48171),u=n(5401),d=n(61723),f=n(68446),p=n(75785),E=n(25914);const g=(0,a.lazy)((()=>n.e(7428).then(n.bind(n,27428)))),h=(0,a.lazy)((()=>n.e(8624).then(n.bind(n,38624)))),v=(0,p.n9)()((e=>({formControl:{margin:0},container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)}}))),b=(0,f.observer)((function({model:e,feature:t}){const{classes:n}=v(),[r,l]=(0,a.useState)(!1);return a.createElement("div",{className:n.container},a.createElement(m.A,{className:n.formControl},a.createElement(u.A,{variant:"contained",onClick:()=>{l(!r)}},r?"Hide feature sequence":"Show feature sequence")),a.createElement(d.A,{onClick:()=>{(0,c.getSession)(e).queueDialog((e=>[h,{handleClose:e}]))}},a.createElement(E.A,null)),r?a.createElement(a.Suspense,{fallback:a.createElement(s.LoadingEllipses,null)},a.createElement(g,{key:t.uniqueId,model:e,feature:t})):null)}));var x=n(35300),y=n(87083),w=n(62568);function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},A.apply(null,arguments)}const k=["name","start","end","strand","refName","description","type"];function S(e){const{omit:t=[],model:n,feature:m,depth:u=0}=e,{maxDepth:d}=n,{mate:f,name:p="",id:E="",type:g="",subfeatures:h,uniqueId:v}=m,N=(0,c.getEnv)(n).pluginManager,O=(0,c.getSession)(n),j=N.evaluateExtensionPoint("Core-extraFeaturePanel",null,{session:O,feature:m,model:n}),$=f;return a.createElement(y.default,{title:(0,o.KS)(p,E,g)},a.createElement(l.A,null,"Core details"),a.createElement(w.A,e),$?a.createElement(a.Fragment,null,a.createElement(i.A,null),a.createElement(l.A,null,"Mate details"),a.createElement(w.A,A({},e,{feature:{...$,start:$.start,end:$.end,refName:$.refName,uniqueId:`${v}-mate`}}))):null,a.createElement(i.A,null),a.createElement(l.A,null,"Attributes"),a.createElement(x.default,A({attributes:m},e,{omit:t,omitSingleLevel:k})),a.createElement(r.t,{FallbackComponent:e=>a.createElement(s.ErrorMessage,{error:e.error})},a.createElement(b,e)),j?a.createElement(a.Fragment,null,a.createElement(i.A,null),a.createElement(y.default,{title:j.name},a.createElement(j.Component,e))):null,u<d&&h?.length?a.createElement(y.default,{title:"Subfeatures",defaultExpanded:u<1},h.map(((e,t)=>a.createElement(S,{key:JSON.stringify(e),feature:{...e,uniqueId:`${v}_${t}`},model:n,depth:u+1})))):null)}},36441:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(7552),r=n(89003);const l=(0,n(75785).n9)()((e=>({fieldDescription:{"&:hover":{background:"dark"===e.palette.mode?"#e65100":"yellow"}},fieldName:{wordBreak:"break-all",minWidth:90,borderBottom:"1px solid #0003",fontSize:12,background:e.palette.action.disabledBackground,marginRight:e.spacing(1),padding:e.spacing(.5)}})));function i({description:e,name:t,width:n,prefix:i=[]}){const{classes:c,cx:s}=l(),o=[...i,t].join(".");return e?a.createElement(r.A,{title:e,placement:"left"},a.createElement("div",{className:s(c.fieldDescription,c.fieldName)},o)):a.createElement("div",{className:c.fieldName,style:{width:n}},o)}},32106:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(7552),r=n(75785),l=n(36441),i=n(28055);const c=(0,r.n9)()({field:{display:"flex",flexWrap:"wrap"}});function s({name:e,value:t,description:n,prefix:r,width:s}){const{classes:o}=c();return null!=t?a.createElement("div",{className:o.field},a.createElement(l.A,{prefix:r,description:n,name:e,width:s}),a.createElement(i.A,{value:t})):null}},1178:(e,t,n)=>{n.d(t,{Im:()=>c,KS:()=>s,kb:()=>o,wh:()=>m});var a=n(503),r=n.n(a),l=n(99546),i=n(373);function c(e){return 0===Object.keys(e).length}function s(e,t,n){return[(0,i.SX)(`${e||t||""}`),`${n}`].filter((e=>!!e)).join(" - ")}function o(e,t){return Math.ceil((0,l.max)(e.map((e=>(0,l.measureText)([...t,e[0]].join("."),12)))))+10}function m(e,t={}){let n=t;return e.forEach((e=>{r()(n)&&(n=n[e])})),"string"==typeof n?n:r()(n)&&"string"==typeof n.Description?n.Description:void 0}}}]);
//# sourceMappingURL=4144.5d17aa63.chunk.js.map