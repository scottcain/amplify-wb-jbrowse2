"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4345],{53740:(e,t,n)=>{n.d(t,{A:()=>f});var o=n(7552),r=n(68446),a=n(99546),i=n(68584),s=n(72241),l=n(9502);function c(e,t){const n=t?(0,l.h)(t):void 0,o=e.get("start");let r=e.get("end");const a=e.get("strand"),i=e.get("mate"),s=e.get("refName");let c,m=0,u=0,d=0,f=0;if(["<TRA","<DEL","<INV","<INS","<DUP","<CNV"].some((e=>t?.startsWith(e)))){const t=e.get("INFO"),n=t?.END?.[0]??r;c=t?.CHR2?.[0]??s,m=n,u=n-1,r=o+1}else if(n?.MatePosition){const e=n.MatePosition.split(":");f="left"===n.MateDirection?1:-1,d="left"===n.Join?-1:1,m=+e[1],u=+e[1]-1,c=e[0]}return{k1:{refName:s,start:o,end:r,strand:a,mateDirection:f},k2:i??{refName:c,end:m,start:u,mateDirection:d}}}function m(e,t){const{k1:n,k2:o}=c(e,t);return[e.get("name"),e.get("id"),(0,a.assembleLocString)(n),(0,a.assembleLocString)(o),e.get("INFO")?.SVTYPE,t].filter((e=>!!e)).join(" - ")}const u=(0,r.observer)((function({model:e,feature:t,alt:n,assembly:r,view:a}){const[l,u]=(0,o.useState)(!1),{height:d}=e,{k1:f,k2:g}=c(t,n),h=(0,o.useRef)(null),k=(0,i.getConf)(e,"color",{feature:t,alt:n}),b=r.getCanonicalRefName(f.refName)||f.refName,v=r.getCanonicalRefName(g.refName)||g.refName,E=f.start,N=g.start,x=a.bpToPx({refName:b,coord:E})?.offsetPx,p=a.bpToPx({refName:v,coord:N})?.offsetPx;if(void 0!==x&&void 0!==p){const r=(p-x)/2,i=Math.abs(r),c=Math.min(d,i),b=x-a.offsetPx,v=p-a.offsetPx,E=l?"black":k,N=3;return i>1?o.createElement(o.Fragment,null,o.createElement("path",{d:`M ${b} 0 C ${b} ${c}, ${v} ${c}, ${v} 0`,ref:h,stroke:E,strokeWidth:N,onMouseOut:()=>u(!1),onMouseOver:()=>u(!0),onClick:()=>e.selectFeature(t),fill:"none",pointerEvents:"stroke"}),void 0!==f.mateDirection?o.createElement("line",{stroke:E,strokeWidth:N,onMouseOut:()=>u(!1),onMouseOver:()=>u(!0),onClick:()=>e.selectFeature(t),x1:b,x2:b+20*f.mateDirection,y1:1.5,y2:1.5}):null,void 0!==g.mateDirection?o.createElement("line",{stroke:E,strokeWidth:N,onMouseOut:()=>u(!1),onMouseOver:()=>u(!0),onClick:()=>e.selectFeature(t),x1:v,x2:v+20*g.mateDirection,y1:1.5,y2:1.5}):null,l?o.createElement(s.A,{contents:m(t,n)}):null):null}return null})),d=(0,r.observer)((function({model:e,exportSVG:t,children:n}){const{height:r}=e,i=(0,a.getContainingView)(e),s=Math.round(i.dynamicBlocks.totalWidthPx);return t?n:o.createElement("svg",{width:s,height:r},n)})),f=(0,r.observer)((function({model:e,exportSVG:t}){const n=(0,a.getContainingView)(e),r=(0,a.getSession)(e),{assemblyManager:i}=r,{features:s}=e,l=i.get(n.assemblyNames[0]);return l?o.createElement(d,{model:e,exportSVG:t},s?.map((t=>{const a=t.get("ALT");return a?.map((a=>o.createElement(u,{key:t.id()+"-"+a,session:r,feature:t,alt:a,view:n,model:e,assembly:l})))??o.createElement(u,{key:t.id(),session:r,feature:t,view:n,model:e,assembly:l})}))):null}))},44345:(e,t,n)=>{n.d(t,{renderArcSvg:()=>i});var o=n(7552),r=n(99546),a=n(53740);async function i(e,t){await(0,r.when)((()=>!e.loading));const n=(0,r.getContainingView)(e).dynamicBlocks.totalWidthPx,i=e.height,s="arc-"+e.id;return o.createElement(o.Fragment,null,o.createElement("defs",null,o.createElement("clipPath",{id:s},o.createElement("rect",{x:0,y:0,width:n,height:i}))),o.createElement("g",{clipPath:`url(#${s})`},o.createElement(a.A,{model:e,exportSVG:!0})))}}}]);
//# sourceMappingURL=4345.cace845f.chunk.js.map