"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8495],{10361:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(68079),a=n(32723),i=n(96234),s=n(41361),c=n(9249),u=n(87371),h=n(45754),o=n(13820),f=function(e,t,n){(0,h.Z)(l,e);var f=(0,o.Z)(l);function l(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,c.Z)(this,l),e=f.call(this),!(t.maxSize&&t.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");if("number"===typeof t.maxAge&&0===t.maxAge)throw new TypeError("`maxAge` must be a number greater than 0");return e.maxSize=t.maxSize,e.maxAge=t.maxAge||Number.POSITIVE_INFINITY,e.onEviction=t.onEviction,e.cache=new Map,e.oldCache=new Map,e._size=0,e}return(0,u.Z)(l,[{key:"_emitEvictions",value:function(e){if("function"===typeof this.onEviction){var t,n=(0,s.Z)(e);try{for(n.s();!(t=n.n()).done;){var r=(0,i.Z)(t.value,2),a=r[0],c=r[1];this.onEviction(a,c.value)}}catch(u){n.e(u)}finally{n.f()}}}},{key:"_deleteIfExpired",value:function(e,t){return"number"===typeof t.expiry&&t.expiry<=Date.now()&&("function"===typeof this.onEviction&&this.onEviction(e,t.value),this.delete(e))}},{key:"_getOrDeleteIfExpired",value:function(e,t){if(!1===this._deleteIfExpired(e,t))return t.value}},{key:"_getItemValue",value:function(e,t){return t.expiry?this._getOrDeleteIfExpired(e,t):t.value}},{key:"_peek",value:function(e,t){var n=t.get(e);return this._getItemValue(e,n)}},{key:"_set",value:function(e,t){this.cache.set(e,t),this._size++,this._size>=this.maxSize&&(this._size=0,this._emitEvictions(this.oldCache),this.oldCache=this.cache,this.cache=new Map)}},{key:"_moveToRecent",value:function(e,t){this.oldCache.delete(e),this._set(e,t)}},{key:"_entriesAscending",value:(0,a.Z)().mark((function e(){var t,n,r,c,u,h,o,f,l,v,p,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this.oldCache),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=13;break}if(r=n.value,c=(0,i.Z)(r,2),u=c[0],h=c[1],this.cache.has(u)){e.next=11;break}if(!1!==this._deleteIfExpired(u,h)){e.next=11;break}return e.next=11,r;case 11:e.next=3;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),t.e(e.t0);case 18:return e.prev=18,t.f(),e.finish(18);case 21:o=(0,s.Z)(this.cache),e.prev=22,o.s();case 24:if((f=o.n()).done){e.next=33;break}if(l=f.value,v=(0,i.Z)(l,2),p=v[0],d=v[1],!1!==this._deleteIfExpired(p,d)){e.next=31;break}return e.next=31,l;case 31:e.next=24;break;case 33:e.next=38;break;case 35:e.prev=35,e.t1=e.catch(22),o.e(e.t1);case 38:return e.prev=38,o.f(),e.finish(38);case 41:case"end":return e.stop()}}),e,this,[[1,15,18,21],[22,35,38,41]])}))},{key:"get",value:function(e){if(this.cache.has(e)){var t=this.cache.get(e);return this._getItemValue(e,t)}if(this.oldCache.has(e)){var n=this.oldCache.get(e);if(!1===this._deleteIfExpired(e,n))return this._moveToRecent(e,n),n.value}}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.maxAge,a=void 0===r?this.maxAge:r,i="number"===typeof a&&a!==Number.POSITIVE_INFINITY?Date.now()+a:void 0;this.cache.has(e)?this.cache.set(e,{value:t,expiry:i}):this._set(e,{value:t,expiry:i})}},{key:"has",value:function(e){return this.cache.has(e)?!this._deleteIfExpired(e,this.cache.get(e)):!!this.oldCache.has(e)&&!this._deleteIfExpired(e,this.oldCache.get(e))}},{key:"peek",value:function(e){return this.cache.has(e)?this._peek(e,this.cache):this.oldCache.has(e)?this._peek(e,this.oldCache):void 0}},{key:"delete",value:function(e){var t=this.cache.delete(e);return t&&this._size--,this.oldCache.delete(e)||t}},{key:"clear",value:function(){this.cache.clear(),this.oldCache.clear(),this._size=0}},{key:"resize",value:function(e){if(!(e&&e>0))throw new TypeError("`maxSize` must be a number greater than 0");var t=(0,r.Z)(this._entriesAscending()),n=t.length-e;n<0?(this.cache=new Map(t),this.oldCache=new Map,this._size=t.length):(n>0&&this._emitEvictions(t.slice(0,n)),this.oldCache=new Map(t.slice(n)),this.cache=new Map,this._size=0),this.maxSize=e}},{key:"keys",value:(0,a.Z)().mark((function e(){var t,n,r,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return r=(0,i.Z)(n.value,1),c=r[0],e.next=7,c;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"values",value:(0,a.Z)().mark((function e(){var t,n,r,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return r=(0,i.Z)(n.value,2),c=r[1],e.next=7,c;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:t,value:(0,a.Z)().mark((function(){var e,t,n,r,c,u,h,o,f,l,v,p;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e=(0,s.Z)(this.cache),a.prev=1,e.s();case 3:if((t=e.n()).done){a.next=12;break}if(n=t.value,r=(0,i.Z)(n,2),c=r[0],u=r[1],!1!==this._deleteIfExpired(c,u)){a.next=10;break}return a.next=10,[c,u.value];case 10:a.next=3;break;case 12:a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),e.e(a.t0);case 17:return a.prev=17,e.f(),a.finish(17);case 20:h=(0,s.Z)(this.oldCache),a.prev=21,h.s();case 23:if((o=h.n()).done){a.next=33;break}if(f=o.value,l=(0,i.Z)(f,2),v=l[0],p=l[1],this.cache.has(v)){a.next=31;break}if(!1!==this._deleteIfExpired(v,p)){a.next=31;break}return a.next=31,[v,p.value];case 31:a.next=23;break;case 33:a.next=38;break;case 35:a.prev=35,a.t1=a.catch(21),h.e(a.t1);case 38:return a.prev=38,h.f(),a.finish(38);case 41:case"end":return a.stop()}}),u,this,[[1,14,17,20],[21,35,38,41]])}))},{key:"entriesDescending",value:(0,a.Z)().mark((function e(){var t,n,s,c,u,h,o,f,l,v,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,r.Z)(this.cache),n=t.length-1;case 2:if(!(n>=0)){e.next=12;break}if(s=t[n],c=(0,i.Z)(s,2),u=c[0],h=c[1],!1!==this._deleteIfExpired(u,h)){e.next=9;break}return e.next=9,[u,h.value];case 9:--n,e.next=2;break;case 12:t=(0,r.Z)(this.oldCache),o=t.length-1;case 14:if(!(o>=0)){e.next=25;break}if(f=t[o],l=(0,i.Z)(f,2),v=l[0],p=l[1],this.cache.has(v)){e.next=22;break}if(!1!==this._deleteIfExpired(v,p)){e.next=22;break}return e.next=22,[v,p.value];case 22:--o,e.next=14;break;case 25:case"end":return e.stop()}}),e,this)}))},{key:"entriesAscending",value:(0,a.Z)().mark((function e(){var t,n,r,c,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,s.Z)(this._entriesAscending()),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return r=(0,i.Z)(n.value,2),c=r[0],u=r[1],e.next=7,[c,u.value];case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"size",get:function(){if(!this._size)return this.oldCache.size;var e,t=0,n=(0,s.Z)(this.oldCache.keys());try{for(n.s();!(e=n.n()).done;){var r=e.value;this.cache.has(r)||t++}}catch(a){n.e(a)}finally{n.f()}return Math.min(this._size+t,this.maxSize)}},{key:"entries",value:function(){return this.entriesAscending()}},{key:"forEach",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=(0,s.Z)(this.entriesAscending());try{for(r.s();!(t=r.n()).done;){var a=(0,i.Z)(t.value,2),c=a[0],u=a[1];e.call(n,u,c,this)}}catch(h){r.e(h)}finally{r.f()}}},{key:n,get:function(){return JSON.stringify((0,r.Z)(this.entriesAscending()))}}]),l}((0,n(30364).Z)(Map),Symbol.iterator,Symbol.toStringTag)},18495:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(32723),a=n(33028),i=n(34795),s=n(9249),c=n(87371),u=n(45754),h=n(13820),o=n(46779),f=n(82972),l=n(32145),v=n(93824),p=n(27664),d=n(64926),x=n.n(d),k=n(10361),Z=function(e){(0,u.Z)(n,e);var t=(0,h.Z)(n);function n(){var e;(0,s.Z)(this,n);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(e=t.call.apply(t,[this].concat(u))).setupP=void 0,e.seqCache=new(x())({cache:new k.Z({maxSize:200}),fill:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t,n){var i,s,c,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.refName,s=t.start,c=t.end,u=t.fasta,e.abrupt("return",u.getSequence(i,s,c,(0,a.Z)((0,a.Z)({},t),{},{signal:n})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),e}return(0,c.Z)(n,[{key:"getRefNames",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return n=e.sent,a=n.fasta,e.abrupt("return",a.getSequenceNames(t));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRegions",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return n=e.sent,a=n.fasta,e.next=6,a.getSequenceSizes(t);case 6:return i=e.sent,e.abrupt("return",Object.keys(i).map((function(e){return{refName:e,start:0,end:i[e]}})));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getConf("fastaLocation"),n=this.getConf("faiLocation"),e.abrupt("return",{fasta:new o.P({fasta:(0,l.openLocation)(t,this.pluginManager),fai:(0,l.openLocation)(n,this.pluginManager)})});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getConf("metadataLocation"),e.abrupt("return",""===t.uri||"/path/to/fa.metadata.yaml"===t.uri?null:(0,l.openLocation)(t).readFile("utf8"));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre().catch((function(e){throw t.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e,t){var n=this,s=e.refName,c=e.start,u=e.end;return(0,v.ObservableCreate)(function(){var e=(0,i.Z)((0,r.Z)().mark((function e(i){var h,o,f,l,v,d,x,k,Z,m,y;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setup();case 2:return h=e.sent,o=h.fasta,e.next=6,o.getSequenceSize(s,t);case 6:for(f=e.sent,l=void 0!==f?Math.min(f,u):u,v=[],k=u+((d=128e3)-u%d),Z=x=c-c%d;Z<k;Z+=d)m={refName:s,start:Z,end:Z+d},v.push(n.seqCache.get(JSON.stringify(m),(0,a.Z)((0,a.Z)({},m),{},{fasta:o}),null===t||void 0===t?void 0:t.signal));return e.next=15,Promise.all(v);case 15:(y=e.sent.join("").slice(c-x).slice(0,u-c))&&i.next(new p.SimpleFeature({id:"".concat(s," ").concat(c,"-").concat(l),data:{refName:s,start:c,end:l,seq:y}})),i.complete();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(f.BaseSequenceAdapter)}}]);
//# sourceMappingURL=8495.d5bb0200.chunk.js.map