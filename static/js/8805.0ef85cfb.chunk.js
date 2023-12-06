"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8805,4999],{54999:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(69312),s=r(72600),i=r(31211),n=r(92813),o=r(95454),c=r(40011),d=r(9762),g=r(74979);class h{constructor(e,t,r){this.record=e,this.adapter=t,this.ref=r}_get_name(){return this.record.get("name")}_get_type(){return"match"}_get_score(){return this.record.get("mq")}_get_flags(){return this.record.flags}_get_strand(){return this.record.isReverseComplemented()?-1:1}_get_pair_orientation(){return this.record.isPaired()?this.record.getPairOrientation():void 0}_get_next_ref(){return this.record.isPaired()?this.adapter.refIdToName(this.record._next_refid()):void 0}_get_next_pos(){return this.record.isPaired()?this.record._next_pos():void 0}_get_next_segment_position(){return this.record.isPaired()?`${this.adapter.refIdToName(this.record._next_refid())}:${this.record._next_pos()+1}`:void 0}_get_seq(){return this.record.getReadBases()}qualRaw(){return this.record.qualRaw()}set(){}tags(){const e=Object.getOwnPropertyNames(h.prototype);return[...new Set(e.filter((e=>e.startsWith("_get_")&&"_get_mismatches"!==e&&"_get_tags"!==e)).map((e=>e.replace("_get_",""))).concat(this.record._tags()))]}id(){return`${this.adapter.id}-${this.record.id()}`}get(e){const t=`_get_${e}`;return this[t]?this[t]():this.record.get(e)}_get_refName(){return this.adapter.refIdToName(this.record.seq_id())}parent(){}children(){}pairedFeature(){return!1}toJSON(){return{...Object.fromEntries(this.tags().map((e=>[e,this.get(e)])).filter((e=>void 0!==e[1]))),uniqueId:this.id()}}_get_mismatches(){return(0,g.getMismatches)(this.get("CIGAR"),this.get("MD"),this.get("seq"),this.ref,this.qualRaw())}_get_clipPos(){const e=this.get("CIGAR")||"";return(0,g.getClip)(e,this.get("strand"))}}class u extends s.BaseFeatureDataAdapter{async configurePre(){const e=this.getConf("bamLocation"),t=this.getConf(["index","location"]),r=this.getConf(["index","indexType"]),s=this.pluginManager,i="CSI"===r,o=new a.$({bamFilehandle:(0,n.openLocation)(e,s),csiFilehandle:i?(0,n.openLocation)(t,s):void 0,baiFilehandle:i?void 0:(0,n.openLocation)(t,s),yieldThreadTime:1/0}),c=this.getConf("sequenceAdapter");if(c&&this.getSubAdapter){const{dataAdapter:e}=await this.getSubAdapter(c);return{bam:o,sequenceAdapter:e}}return{bam:o}}async configure(){return this.configureP||(this.configureP=this.configurePre().catch((e=>{throw this.configureP=void 0,e}))),this.configureP}async getHeader(e){const{bam:t}=await this.configure();return t.getHeaderText(e)}async setupPre(e){const{statusCallback:t=(()=>{})}=e||{},{bam:r}=await this.configure();return this.samHeader=await(0,i.updateStatus)("Downloading index",t,(async()=>{const t=await r.getHeader(e),a=[],s={};return t?.filter((e=>"SQ"===e.tag)).forEach(((e,t)=>{e.data.forEach((e=>{if("SN"===e.tag){const r=e.value;s[r]=t,a[t]=r}}))})),{idToName:a,nameToId:s}})),this.samHeader}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRefNames(e){const{idToName:t}=await this.setup(e);return t}async seqFetch(e,t,r){const{sequenceAdapter:a}=await this.configure();if(!a)return;if(!e)return;const s=a.getFeatures({refName:e,start:t,end:r,assemblyName:""}),i=await(0,d.z)(s.pipe((0,c.q)()));let n="";if(i.sort(((e,t)=>e.get("start")-t.get("start"))).forEach((e=>{const a=e.get("start"),s=e.get("end"),i=Math.max(t-a,0),o=Math.min(r-a,s-a)-i,c=e.get("seq")||e.get("residues");n+=c.slice(i,i+o)})),n.length!==r-t)throw new Error(`sequence fetch failed: fetching ${e}:${(t-1).toLocaleString()}-${r.toLocaleString()} returned ${n.length.toLocaleString()} bases, but should have returned ${(r-t).toLocaleString()}`);return n}getFeatures(e,t){const{refName:r,start:a,end:s,originalRefName:n}=e,{signal:c,filterBy:d,statusCallback:g=(()=>{})}=t||{};return(0,o.ObservableCreate)((async e=>{const{bam:o}=await this.configure();await this.setup(t);const c=await(0,i.updateStatus)("Downloading alignments",g,(()=>o.getRecordsForRange(r,a,s,t)));await(0,i.updateStatus)("Processing alignments",g,(async()=>{const{flagInclude:t=0,flagExclude:a=0,tagFilter:s,readName:i}=d||{};for(const o of c){let c;o.get("MD")||(c=await this.seqFetch(n||r,o.get("start"),o.get("end")));const d=o.flags;if((d&t)===t||d&a){if(s){const e=o.get(s.tag);if(!("*"===e?void 0!==e:`${e}`===s.value))continue}i&&o.get("name")!==i||e.next(new h(o,this,c))}}e.complete()}))}),c)}async getMultiRegionFeatureDensityStats(e,t){const{bam:r}=await this.configure();return r.index?{bytes:await(0,i.bytesForRegions)(e,r),fetchSizeLimit:this.getConf("fetchSizeLimit")}:super.getMultiRegionFeatureDensityStats(e,t)}freeResources(){}refIdToName(e){return this.samHeader?.idToName[e]}}},78805:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(69312),s=r(54999);class i extends s.default{async configurePre(){const e=this.getConf("htsgetBase"),t=this.getConf("htsgetTrackId"),r=new a.S5({baseUrl:e,trackId:t}),s=this.getConf("sequenceAdapter");return s&&this.getSubAdapter?{bam:r,sequenceAdapter:(await this.getSubAdapter(s)).dataAdapter}:{bam:r}}}}}]);
//# sourceMappingURL=8805.0ef85cfb.chunk.js.map