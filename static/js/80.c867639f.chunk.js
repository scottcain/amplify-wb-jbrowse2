(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[80],{1731:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var n=r(29),a=r(83),u=r(81),c=r(11),s=r(88),i=r(89),o=r(80),p=r.n(o),f=r(116),h=r(104),v=r(125),l=r(79),d=r(645),b=r(152),w=r(213),j=r(461),k=function(e){var t=e.split("\n"),r=[],n=[];return t.forEach((function(e){e.startsWith("#")?r.push(e):e&&n.push(e)})),{header:r.join("\n"),lines:n}};function x(e){return 31===e[0]&&139===e[1]&&8===e[2]}var g=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).vcfFeatures=void 0,e}return Object(c.a)(r,[{key:"getHeader",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return t=e.sent,r=t.header,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMetadata",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return t=e.sent,r=t.header,n=new w.a({header:r}),e.abrupt("return",n.getMetadata());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setupP",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t,r,a,u,c,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.openLocation)(Object(l.readConfObject)(this.config,"vcfLocation"),this.pluginManager).readFile();case 2:if(!x(t=e.sent)){e.next=9;break}return e.next=6,Object(b.unzip)(t);case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=t;case 10:if(!((r=e.t0).length>536870888)){e.next=13;break}throw new Error("Data exceeds maximum string length (512MB)");case 13:return a=(new TextDecoder).decode(r),u=k(a),c=u.header,s=u.lines,i=s.map((function(e,t){var r,a=e.split("\t"),u=Object(n.a)(a,8),c=u[0],s=u[1],i=u[3],o=+s-1;return{line:e,refName:c,start:o,end:+((null===(r=u[7].match(/END=(\d+)/))||void 0===r?void 0:r[1].trim())||o+i.length),id:t}})).reduce((function(e,t){var r=t.refName;return e[r]||(e[r]=new d.a),e[r].insert([t.start,t.end],t),e}),{}),e.abrupt("return",{header:c,intervalTree:i});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.vcfFeatures||(this.vcfFeatures=this.setupP().catch((function(e){throw t.vcfFeatures=void 0,e}))),e.abrupt("return",this.vcfFeatures);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=Object(a.a)(p.a.mark((function e(){var t,r,n=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,this.setup();case 3:return t=e.sent,r=t.intervalTree,e.abrupt("return",Object.keys(r));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(v.ObservableCreate)(function(){var r=Object(a.a)(p.a.mark((function r(n){var a,u,c,s,i,o,f,h;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u=e.start,c=e.end,s=e.refName,r.next=4,t.setup();case 4:i=r.sent,o=i.header,f=i.intervalTree,h=new w.a({header:o}),null===(a=f[s])||void 0===a||a.search([u,c]).forEach((function(e){return n.next(new j.a({variant:h.parseLine(e.line),parser:h,id:"".concat(t.id,"-").concat(e.id)}))})),n.complete(),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),n.error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(f.BaseFeatureDataAdapter);g.capabilities=["getFeatures","getRefNames"]}}]);
//# sourceMappingURL=80.c867639f.chunk.js.map