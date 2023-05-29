"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4656,644],{44656:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(32723),a=n(34795),u=n(9249),s=n(87371),i=n(45754),c=n(13820),o=n(32145),f=n(16959),l=n(19068),p="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function h(e){for(var t="",n="",r=0,a=0,u=0,s=0,i=0,c=0,o=[],f=0,l=0,h=!1,v=[],d=new RegExp(/^>(\S+)\s+(\S+)\s+(\d+)\s+(\d+)/),m=0,g=0;m<e.length;){var b=e.indexOf("\n",m);if(-1===b)break;var Z=e.slice(m,b),x=((null===p||void 0===p?void 0:p.decode(Z))||Z.toString()).trim();if(m=b+1,g++,x){var y=d.exec(x);if(null!==y){t=y[1],n=y[2],h=!0;continue}if(!h)continue;var k=x.split(" ");if(7===k.length){var w=+k[0],q=+k[1],N=+k[2],A=+k[3];i=w<q&&N<A||w>q&&N>A?1:-1,u=+(w<q?w:q)-1,s=+(q>w?q:w),r=+(N<A?N:A)-1,a=+(A>N?A:N),f=l=0,c=+k[4],o=[]}else if(1===k.length){var M=+k[0];if(0===M){var C=0,D=[];if(s-u-f!==a-r-l)throw new Error("inconsistent alignment on line ".concat(g));o.push(s-u-f<<4);for(var S=0;S<o.length;++S){var I=o[S]>>4;C+=I,D.push(I+"MID".charAt(15&o[S]))}v.push({qname:n,qstart:r,qend:a,tname:t,tstart:u,tend:s,strand:i,extra:{numMatches:C-c,blockLen:C,mappingQual:0,NM:c,cg:D.join("")}})}else if(M>0){var L=M-1;f+=L+1,l+=L,L>0&&o.push(L<<4),o.length>0&&2===(15&o[o.length-1])?o[o.length-1]+=16:o.push(18)}else{var O=-M-1;f+=O,l+=O+1,O>0&&o.push(O<<4),o.length>0&&1===(15&o[o.length-1])?o[o.length-1]+=16:o.push(17)}}}}return v}function v(e){return 31===e[0]&&139===e[1]&&8===e[2]}var d=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"setupPre",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.openLocation)(this.getConf("deltaLocation"),this.pluginManager),e.next=3,n.readFile(t);case 3:if(!v(a=e.sent)){e.next=10;break}return e.next=7,(0,f.unzip)(a);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=a;case 11:return u=e.t0,e.abrupt("return",h(u));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(l.default)},19068:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(33028),a=n(59740),u=n(68079),s=n(41361),i=n(32723),c=n(34795),o=n(9249),f=n(87371),l=n(45754),p=n(13820),h=n(2646),v=n(23995),d=n(32145),m=n(93824),g=n(99836),b=n(16959),Z=n(38157),x=n(93069),y=n(95058),k=n(27664),w=Z.tr.getMismatches,q=function(e){(0,l.Z)(n,e);var t=(0,p.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,f.Z)(n,[{key:"get",value:function(e){return"mismatches"===e?w(this.get("CIGAR")):(0,x.Z)((0,y.Z)(n.prototype),"get",this).call(this,e)}}]),n}(k.SimpleFeature),N=n(44922),A=n(46840),M=n(96234);function C(e){for(var t={},n=0;n<e.length;n++){var r=e[n],a=r.qname+"-"+r.tname;t[a]||(t[a]={quals:[],len:[]}),t[a].quals.push(r.extra.mappingQual),t[a].len.push(r.extra.blockLen||1)}for(var u=Object.fromEntries(Object.entries(t).map((function(e){var t=(0,M.Z)(e,2),n=t[0],r=t[1];return[n,D((0,N.$R)(r.quals,r.len))]}))),s=0;s<e.length;s++){var i=e[s],c=i.qname+"-"+i.tname;i.extra.meanScore=u[c]}for(var o=1e4,f=0,l=0;l<e.length;l++){var p=e[l];o=Math.min(p.extra.meanScore||0,o),f=Math.max(p.extra.meanScore||0,f)}for(var h=0;h<e.length;h++){var v=e[h],d=v.extra.meanScore||0;v.extra.meanScore=(d-o)/(f-o)}return e}function D(e){var t=e.reduce((function(e,t){var n=(0,M.Z)(e,2),r=n[0],a=n[1],u=(0,M.Z)(t,2),s=u[0],i=u[1];return[r+s*i,a+i]}),[0,0]),n=(0,M.Z)(t,2);return n[0]/n[1]}function S(e){var t=e.split("\t"),n=(0,A.Z)(t),a=n[0],u=n[2],s=n[3],i=n[4],c=n[5],o=n[7],f=n[8],l=n[9],p=n[10],h=n[11],v=n.slice(12),d=Object.fromEntries(v.map((function(e){var t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})));return{tname:c,tstart:+o,tend:+f,qname:a,qstart:+u,qend:+s,strand:"-"===i?-1:1,extra:(0,r.Z)({numMatches:+l,blockLen:+p,mappingQual:+h},d)}}function I(e){for(var t=[],n=e.length-2;n>=0;n-=2){t.push(e[n]);var r=e[n+1];"D"===r?t.push("I"):"I"===r?t.push("D"):t.push(r)}return t}var L=["numMatches","blockLen","cg"],O=Z.tr.parseCigar,R=function(e){(0,l.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).setupP=void 0,e}return(0,f.Z)(n,[{key:"setup",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){var n=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw n.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){var n,r,a,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.pluginManager,r=(0,d.openLocation)(this.getConf("pafLocation"),n),e.next=4,r.readFile(t);case 4:if(a=e.sent,!(0,N.lq)(a)){e.next=11;break}return e.next=8,(0,b.unzip)(a);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a;case 12:return u=e.t0,e.abrupt("return",(0,N.WU)(u,S));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasDataForRefName",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getAssemblyNames",value:function(){var e=this.getConf("assemblyNames");return 0===e.length?[this.getConf("queryAssembly"),this.getConf("targetAssembly")]:e}},{key:"getRefNames",value:function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var t,n,r,a,c,o,f,l,p,h=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null===(t=(n=h.length>0&&void 0!==h[0]?h[0]:{}).regions)||void 0===t?void 0:t[0].assemblyName,e.next=4,this.setup(n);case 4:if(a=e.sent,-1===(c=this.getAssemblyNames().indexOf(r))){e.next=11;break}o=new Set,f=(0,s.Z)(a);try{for(f.s();!(l=f.n()).done;)p=l.value,o.add(0===c?p.qname:p.tname)}catch(i){f.e(i)}finally{f.f()}return e.abrupt("return",(0,u.Z)(o));case 11:return console.warn("Unable to do ref renaming on adapter"),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,m.ObservableCreate)(function(){var u=(0,c.Z)((0,i.Z)().mark((function u(s){var c,o,f,l,p,h,d,m,b,Z,x,y,k,w,N,A,M,D,S,R,j,F,P,T,E,Q;return(0,i.Z)().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.setup(n);case 2:for(c=u.sent,(o=n.config)&&"meanQueryIdentity"===(0,g.readConfObject)(o,"colorBy")&&(c=C(c)),f=t.getAssemblyNames(),l=f.indexOf(e.assemblyName),p=e.start,h=e.end,d=e.refName,m=e.assemblyName,-1===l&&(console.warn("".concat(m," not found in this adapter")),s.complete()),b=0;b<c.length;b++)Z=c[b],x=0,y=0,k="",w="",N=0,A=0,D=f[+!(M=0===l)],0===l?(x=Z.qstart,y=Z.qend,k=Z.qname,w=Z.tname,N=Z.tstart,A=Z.tend):(x=Z.tstart,y=Z.tend,k=Z.tname,w=Z.qname,N=Z.qstart,A=Z.qend),S=Z.extra,R=Z.strand,k===d&&(0,v.qY)(p,h,x,y)&&(j=S.numMatches,F=void 0===j?0:j,P=S.blockLen,T=void 0===P?1:P,S.cg,E=(0,a.Z)(S,L),Q=S.cg,S.cg&&(M&&-1===R?Q=I(O(S.cg)).join(""):M&&(i=S.cg,Q=i.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I"))),s.next(new q((0,r.Z)((0,r.Z)({uniqueId:b+D,assemblyName:D,start:x,end:y,type:"match",refName:k,strand:R},E),{},{CIGAR:Q,syntenyId:b,identity:F/T,numMatches:F,blockLen:T,mate:{start:N,end:A,refName:w,assemblyName:f[+M]}}))));s.complete();case 11:case"end":return u.stop()}var i}),u)})));return function(e){return u.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(h.BaseFeatureDataAdapter);R.capabilities=["getFeatures","getRefNames"]},44922:function(e,t,n){n.d(t,{$R:function(){return l},SN:function(){return c},WU:function(){return h},lq:function(){return i},pJ:function(){return o}});var r=n(32723),a=n(34795),u=n(96234),s=n(16959);function i(e){return 31===e[0]&&139===e[1]&&8===e[2]}function c(e){return new Map(e.split(/\n|\r\n|\r/).filter((function(e){return!!e||e.startsWith("#")})).map((function(e){var t=e.split("\t"),n=(0,u.Z)(t,6),r=n[0],a=n[1],s=n[2],i=n[3];return[i,{refName:r,start:+a,end:+s,score:+n[4],name:i,strand:"-"===n[5]?-1:1}]})))}function o(e,t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.readFile(n);case 2:if(a=e.sent,e.t0=new TextDecoder("utf8",{fatal:!0}),!i(a)){e.next=10;break}return e.next=7,(0,s.unzip)(a);case 7:e.t1=e.sent,e.next=11;break;case 10:e.t1=a;case 11:return e.t2=e.t1,e.abrupt("return",e.t0.decode.call(e.t0,e.t2));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return e.map((function(e,n){return[e,t[n]]}))}var p="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;function h(e,t){for(var n=0,r=[];n<e.length;){var a=e.indexOf("\n",n);if(-1===a)break;var u=e.slice(n,a),s=((null===p||void 0===p?void 0:p.decode(u))||u.toString()).trim();s&&r.push(t(s)),n=a+1}return r}}}]);
//# sourceMappingURL=4656.66714d8e.chunk.js.map