"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4981],{44981:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var o=n(66204),a=n(38684),i=n(80846),r=n(43902),s=n(31211),l=n(99247),c=n(73330),f=n(92368),d=n(70421),u=n(98074);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}const h=(0,a.ZL)()((e=>({tooltip:{position:"absolute",pointerEvents:"none",backgroundColor:(0,c.Fq)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(12),lineHeight:(1.4,Math.round(14e4)/1e5+"em"),maxWidth:300,wordWrap:"break-word"}}))),m=(0,i.observer)((function({title:e}){const t=(0,f.Z)(),{classes:n}=h(),{refs:a,floatingStyles:i,context:s}=(0,u.YF)({placement:"right"}),l=(0,u.gR)(s),{getFloatingProps:c}=(0,u.NI)([l]),m=t?.components?.MuiPopper;return e?o.createElement(d.h,{container:m?.defaultProps?.container},o.createElement("div",g({className:n.tooltip,ref:a.setFloating,style:{...i,zIndex:1e5,pointerEvents:"none"}},c()),o.createElement(r.SanitizedHTML,{html:e}))):null}));var v=n(35950);function p({model:e,onClose:t,anchorEl:n}){const a=(0,s.getContainingView)(e),{clientX:i,clientY:l,feature:c}=n;return o.createElement(r.Menu,{onMenuItemClick:(e,n)=>{n(e),t()},anchorEl:{nodeType:1,getBoundingClientRect:()=>({top:l,left:i,bottom:l,right:i,width:0,height:0,x:i,y:l,toJSON(){}})},onClose:t,open:Boolean(n),menuItems:[{label:"Center on feature",onClick:()=>{const{f:t}=c,n=t.get("start"),o=t.get("end"),i=t.get("refName"),r=t.get("mate");a.views[0].navToLocString(`${i}:${n}-${o}`).catch((t=>{console.error(t),(0,s.getSession)(e).notify(`${t}`,"error")})),a.views[1].navToLocString(`${r.refName}:${r.start}-${r.end}`).catch((t=>{console.error(t),(0,s.getSession)(e).notify(`${t}`,"error")}))}}]})}const b=(0,a.ZL)()({pix:{imageRendering:"pixelated",pointerEvents:"none",visibility:"hidden",position:"absolute"},rel:{position:"relative"},abs:{position:"absolute"},none:{pointEvents:"none"}}),C=(0,i.observer)((function({model:e}){const{classes:t,cx:n}=b(),a=(0,o.useRef)(0),i=(0,o.useRef)(),r=(0,s.getContainingView)(e),c=r.middleComparativeHeight,f=r.width,[d,u]=(0,o.useState)(),[g,h]=(0,o.useState)(""),[C,M]=(0,o.useState)(),[x,w]=(0,o.useState)(),[k,S]=(0,o.useState)(),[y,E]=(0,o.useState)(),P=(0,o.useCallback)((t=>e.setMouseoverCanvasRef(t)),[e,c,f]),T=(0,o.useCallback)((t=>e.setMainCanvasRef(t)),[e,c,f]),I=(0,o.useCallback)((t=>e.setClickMapCanvasRef(t)),[e,c,f]),$=(0,o.useCallback)((t=>e.setCigarClickMapCanvasRef(t)),[e,c,f]);return o.createElement("div",{className:t.rel},o.createElement("canvas",{ref:P,width:f,height:c,className:n(t.abs,t.none)}),o.createElement("canvas",{ref:T,onWheel:e=>{Math.abs(e.deltaY)<Math.abs(e.deltaX)&&(a.current+=e.deltaX),void 0===i.current&&(i.current=requestAnimationFrame((()=>{(0,l.transaction)((()=>{for(const e of r.views)e.horizontalScroll(a.current);a.current=0,i.current=void 0}))})))},onMouseMove:t=>{if(void 0!==x)a.current+=x-t.clientX,w(t.clientX),void 0===i.current&&(i.current=requestAnimationFrame((()=>{(0,l.transaction)((()=>{for(const e of r.views)e.horizontalScroll(a.current);a.current=0,i.current=void 0}))})));else{const n=e.clickMapCanvas,o=e.cigarClickMapCanvas;if(!n||!o)return;const a=n.getBoundingClientRect(),i=n.getContext("2d"),r=o.getContext("2d");if(!i||!r)return;const{clientX:l,clientY:c}=t,f=l-a.left,d=c-a.top;M(l),E(c);const[u,g,m]=i.getImageData(f,d,1,1).data,[p,b,C]=r.getImageData(f,d,1,1).data,x=Math.floor(v.EU/e.numFeats),w=(0,v.zv)(u,g,m,x);if(e.setMouseoverId(e.featPositions[w]?.f.id()),-1===w)h("");else if(e.featPositions[w]){const{f:t,cigar:n}=e.featPositions[w],o=Math.floor(v.EU/n.length),a=(0,v.zv)(p,b,C,o);h(function(e,t,n){const o=e.toJSON(),a=o.mate,i=o.end-o.start,r=a.end-a.start,l=o.identity,c=o.name,f=a.name;return[`Loc1: ${(0,s.assembleLocString)(o)}`,`Loc2: ${(0,s.assembleLocString)(a)}`,`Inverted: ${-1===o.strand}`,`Query len: ${i.toLocaleString("en-US")}`,`Target len: ${r.toLocaleString("en-US")}`,l?`Identity: ${l.toPrecision(2)}`:"",t?`CIGAR operator: ${t}${n}`:"",c?`Name 1: ${c}`:"",f?`Name 1: ${f}`:""].filter((e=>!!e)).join("<br/>")}(t,n[a],n[a+1]))}}},onMouseLeave:()=>{e.setMouseoverId(void 0),S(void 0),w(void 0)},onMouseDown:e=>{w(e.clientX),S(e.clientX)},onMouseUp:t=>{w(void 0),void 0!==k&&Math.abs(t.clientX-k)<5&&function(e,t){const n=t.clickMapCanvas,o=t.cigarClickMapCanvas;if(!n||!o)return;const a=n.getBoundingClientRect(),i=n.getContext("2d"),r=o.getContext("2d");if(!i||!r)return;const l=e.clientX-a.left,c=e.clientY-a.top,[f,d,u]=i.getImageData(l,c,1,1).data,g=Math.floor(v.EU/t.numFeats),h=(0,v.zv)(f,d,u,g),m=t.featPositions[h];if(m){const{f:e}=m;t.setClickId(e.id());const n=(0,s.getSession)(t);(0,s.isSessionModelWithWidgets)(n)&&n.showWidget(n.addWidget("SyntenyFeatureWidget","syntenyFeature",{featureData:{feature1:e.toJSON(),feature2:e.get("mate")}}))}}(t,e)},onContextMenu:t=>{!function(e,t,n){e.preventDefault();const o=t.clickMapCanvas,a=t.cigarClickMapCanvas;if(!o||!a)return;const i=o.getBoundingClientRect(),r=o.getContext("2d"),s=a.getContext("2d");if(!r||!s)return;const{clientX:l,clientY:c}=e,f=l-i.left,d=c-i.top,[u,g,h]=r.getImageData(f,d,1,1).data,m=Math.floor(v.EU/t.numFeats),p=(0,v.zv)(u,g,h,m),b=t.featPositions[p];b&&(t.setClickId(b.f.id()),n({clientX:l,clientY:c,feature:b}))}(t,e,u)},"data-testid":"synteny_canvas",className:t.abs,width:f,height:c}),o.createElement("canvas",{ref:I,className:t.pix,width:f,height:c}),o.createElement("canvas",{ref:$,className:t.pix,width:f,height:c}),e.mouseoverId&&g&&C&&y?o.createElement(m,{title:g}):null,d?o.createElement(p,{model:e,anchorEl:d,onClose:()=>u(void 0)}):null)})),M=(0,a.ZL)()((e=>{const t=e.palette.action.disabledBackground;return{loading:{paddingLeft:"0.6em",backgroundColor:e.palette.background.default,backgroundImage:`repeating-linear-gradient(45deg, transparent, transparent 5px, ${t} 5px, ${t} 10px)`,textAlign:"center"},blockMessage:{background:"#f1f1f1",padding:10},blockError:{background:"#f1f1f1",padding:10,color:"red"}}}));function x(){const[e,t]=(0,o.useState)(!1),{classes:n}=M();return(0,o.useEffect)((()=>{const e=setTimeout((()=>t(!0)),300);return()=>clearTimeout(e)})),e?o.createElement("div",{className:n.loading},o.createElement(r.LoadingEllipses,null)):null}function w({messageText:e}){const{classes:t}=M();return o.createElement("div",{className:t.blockMessage},e)}function k({error:e}){const{classes:t}=M();return o.createElement("div",{className:t.blockError},`${e}`)}const S=(0,i.observer)((function({model:e}){return e.error?o.createElement(k,{error:e.error}):e.message?o.createElement(w,{messageText:e.message}):e.features?o.createElement(C,{model:e}):o.createElement(x,null)}))},35950:(e,t,n)=>{n.d(t,{EU:()=>r,z8:()=>g,Bf:()=>u,zv:()=>d});var o=n(31211);function a({feature:e,ctx:t,offsets:n,cb:a,height:r,drawCurves:s,oobLimit:l,viewWidth:c,hideTiny:f}){const{p11:d,p12:u,p21:g,p22:h}=e,m=d.offsetPx-n[0],v=u.offsetPx-n[0],p=g.offsetPx-n[1],b=h.offsetPx-n[1],C=Math.abs(v-m),M=Math.abs(b-p),x=r,w=(x-0)/2,k=Math.min(p,b),S=Math.max(p,b);(0,o.doesIntersect2)(k,S,-l,c+l)&&(C<=1&&M<=1?f||(t.beginPath(),t.moveTo(m,0),s?t.bezierCurveTo(m,w,p,w,p,x):t.lineTo(p,x),t.stroke()):(i(t,m,v,0,b,p,x,w,s),a(t)))}function i(e,t,n,o,a,i,r,s,l){l?function(e,t,n,o,a,i,r,s){const l=Math.abs(t-n),c=Math.abs(t-n);if(l<5&&c<5&&n<t&&Math.abs(t-a)>100){const e=t;t=n,n=e}e.beginPath(),e.moveTo(t,o),e.lineTo(n,o),e.bezierCurveTo(n,s,a,s,a,r),e.lineTo(i,r),e.bezierCurveTo(i,s,t,s,t,o),e.closePath(),e.fill()}(e,t,n,o,a,i,r,s):function(e,t,n,o,a,i,r){e.beginPath(),e.moveTo(t,o),e.lineTo(n,o),e.lineTo(a,r),e.lineTo(i,r),e.closePath(),e.fill()}(e,t,n,o,a,i,r)}const r=16581375;function s(e){return`rgb(${Math.floor(e/65025)%255},${Math.floor(e/255)%255},${e%255})`}const l={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},c=3,f=1600;function d(e,t,n,o){return Math.floor((255*e*255+255*t+n-1)/o)}function u(e,t,n){const d=(0,o.getContainingView)(e),u=d.drawCurves,g=d.drawCIGAR,h=d.middleComparativeHeight,m=d.width,v=d.views.map((e=>e.bpPerPx));n&&(n.imageSmoothingEnabled=!1),t.beginPath();const p=e.featPositions,b=d.views.map((e=>e.offsetPx)),C=Math.floor(r/p.length);t.fillStyle=l.M,t.strokeStyle=l.M;for(const{p11:e,p12:n,p21:o,p22:a}of p){const i=e.offsetPx-b[0],r=n.offsetPx-b[0],s=o.offsetPx-b[1],l=a.offsetPx-b[1],d=Math.abs(r-i),g=Math.abs(l-s),v=0,p=h,C=(p-v)/2;d<=c&&g<=c&&s<m+f&&s>-f&&(t.moveTo(i,v),u?t.bezierCurveTo(i,C,s,C,s,p):t.lineTo(s,p))}t.stroke(),t.fillStyle=l.M,t.strokeStyle=l.M;for(const{p11:e,p12:a,p21:C,p22:M,f:x,cigar:w}of p){const p=e.offsetPx-b[0],k=a.offsetPx-b[0],S=C.offsetPx-b[1],y=M.offsetPx-b[1],E=Math.abs(k-p),P=Math.abs(y-S),T=Math.min(S,y),I=Math.max(S,y),$=0,L=h,N=(L-$)/2;if(!(E<=c&&P<=c)&&(0,o.doesIntersect2)(T,I,-f,d.width+f)){const e=x.get("strand"),o=-1===e?k:p,a=o<(-1===e?p:k)?1:-1,c=(S<y?1:-1)*e;let f=o,d=-1===e?y:S;if(w?.length&&g){let e=!1,o=0,g=0;const h=Math.floor(r/w.length);for(let r=0;r<w.length;r+=2){const p=r*h+1,b=+w[r],C=w[r+1];e||(o=f,g=d);const M=b/v[0],x=b/v[1];if("M"===C||"="===C||"X"===C?(f+=M*a,d+=x*c):"D"===C||"N"===C?f+=M*a:"I"===C&&(d+=x*c),!(Math.max(o,g,f,d)<0||Math.min(o,g,f,d)>m)){const a=r<w.length-2;Math.abs(f-o)<=1&&Math.abs(d-g)<=1&&a?e=!0:(e=!1,t.fillStyle=l[e&&M>1||x>1?C:"M"],i(t,o,f,$,d,g,L,N,u),n&&(n.fillStyle=s(p),i(n,o,f,$,d,g,L,N,u)))}}}else i(t,p,k,$,y,S,L,N,u)}}const M=e.clickMapCanvas?.getContext("2d");if(M){M.imageSmoothingEnabled=!1,M.clearRect(0,0,m,h);for(let e=0;e<p.length;e++){const t=p[e],n=e*C+1;M.fillStyle=s(n),a({cb:e=>e.fill(),feature:t,ctx:M,drawCurves:u,offsets:b,oobLimit:f,viewWidth:d.width,hideTiny:!0,height:h})}}}function g(e){const{clickId:t,mouseoverId:n}=e,i=(0,o.getContainingView)(e),r=i.drawCurves,s=i.middleComparativeHeight,l=i.width,c=e.mouseoverCanvas?.getContext("2d"),d=i.views.map((e=>e.offsetPx));if(!c)return;c.resetTransform(),c.scale(1,1),c.clearRect(0,0,l,s);const u=e.featMap[n||""];u&&(c.fillStyle="rgb(0,0,0,0.1)",a({cb:e=>e.fill(),feature:u,ctx:c,oobLimit:f,viewWidth:i.width,drawCurves:r,offsets:d,height:s}));const g=e.featMap[t||""];g&&(c.strokeStyle="rgb(0, 0, 0, 0.9)",a({cb:e=>e.stroke(),feature:g,ctx:c,oobLimit:f,viewWidth:i.width,drawCurves:r,offsets:d,height:s}))}}}]);
//# sourceMappingURL=4981.56b692ec.chunk.js.map