"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[637],{50637:(e,t,n)=>{n.d(t,{doAfterAttach:()=>o});var a=n(31211),i=n(98959),s=n(88196);function o(e,t){function n(n){const a=e.ref;if(!a)return;const i=a.getContext("2d");i&&e.chainData&&(i.clearRect(0,0,a.width,2*e.height),i.resetTransform(),i.scale(2,2),t(e,i,a.width,e.height),e.setLastDrawnOffsetPx(n.offsetPx),e.setLastDrawnBpPerPx(n.bpPerPx))}(0,i.$X)(e,(async()=>{await async function(e){const{rpcSessionId:t}=(0,a.getContainingTrack)(e),{rpcManager:n}=(0,a.getSession)(e),i=(0,a.getContainingView)(e);if(!i.initialized||e.error||e.regionTooLarge)return;e.setLoading(!0);const o=await n.call(t,"PileupGetReducedFeatures",{sessionId:t,regions:i.staticBlocks.contentBlocks,filterBy:(0,s.getSnapshot)(e.filterBy),adapterConfig:e.adapterConfig});e.setChainData(o),e.setLoading(!1)}(e)}),{delay:1e3}),(0,i.$X)(e,(async()=>{const t=(0,a.getContainingView)(e);t.bpPerPx!==e.lastDrawnBpPerPx&&n(t)})),(0,i.$X)(e,(async()=>{n((0,a.getContainingView)(e))}),{delay:1e3})}}}]);
//# sourceMappingURL=637.a423ce22.chunk.js.map