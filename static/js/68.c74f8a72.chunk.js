(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[68],{1764:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k}));var a=r(83),n=r(81),s=r(11),u=r(88),c=r(89),i=r(80),o=r.n(i),f=r(116),l=r(79),d=r(104),p=r(125),h=r(645),v=r(119),b=r(152),m=r(1583),g=r.n(m),w=r(86);function y(e){var t=Object(w.a)({},e);t.start-=1,t.strand={"+":1,"-":-1,".":0,"?":void 0}[e.strand],t.phase=Number(e.frame),t.refName=e.seq_name,null===e.score&&delete t.score,null===e.frame&&delete t.score;var r=["start","end","seq_name","score","featureType","source","frame","strand"];return Object.keys(e.attributes).forEach((function(a){var n=a.toLowerCase();if(r.includes(n)&&(n+="2"),null!==e.attributes[a]){var s=e.attributes[a];if(Array.isArray(s)&&1===s.length){var u=s[0].replace(/^"|"$/g,"");s=u}t[n]=s}})),t.refName=t.seq_name,t.type=t.featureType,e.child_features&&e.child_features.length&&(t.subfeatures=e.child_features.map((function(e){return e.map((function(e){return y(e)}))})).flat()),delete t.child_features,delete t.data,delete t.derived_features,delete t._linehash,delete t.attributes,delete t.seq_name,delete t.featureType,delete t.frame,t.transcript_id&&(t.name=t.transcript_id),t}function j(e){return 31===e[0]&&139===e[1]&&8===e[2]}var k=function(e){Object(u.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).gtfFeatures=void 0,e}return Object(s.a)(r,[{key:"loadDataP",value:function(){var e=Object(a.a)(o.a.mark((function e(){var t,r,a,n,s,u=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.openLocation)(Object(l.readConfObject)(this.config,"gtfLocation"),this.pluginManager).readFile();case 2:if(!j(t=e.sent)){e.next=9;break}return e.next=6,Object(b.unzip)(t);case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=t;case 10:if(!((r=e.t0).length>536870888)){e.next=13;break}throw new Error("Data exceeds maximum string length (512MB)");case 13:return a=new TextDecoder("utf8",{fatal:!0}).decode(r),n=g.a.parseStringSync(a,{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1}),s=n.flat().map((function(e,t){return new v.a({data:y(e),id:"".concat(u.id,"-offset-").concat(t)})})).reduce((function(e,t){var r=t.get("refName");return e[r]||(e[r]=new h.a),e[r].insert([t.get("start"),t.get("end")],t),e}),{}),e.abrupt("return",{intervalTree:s});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=Object(a.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.gtfFeatures||(this.gtfFeatures=this.loadDataP().catch((function(e){throw t.gtfFeatures=void 0,e}))),e.abrupt("return",this.gtfFeatures);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=Object(a.a)(o.a.mark((function e(){var t,r,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,this.loadData();case 3:return t=e.sent,r=t.intervalTree,e.abrupt("return",Object.keys(r));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(p.ObservableCreate)(function(){var r=Object(a.a)(o.a.mark((function r(a){var n,s,u,c,i,f;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s=e.start,u=e.end,c=e.refName,r.next=4,t.loadData();case 4:i=r.sent,f=i.intervalTree,null===(n=f[c])||void 0===n||n.search([s,u]).forEach((function(e){return a.next(e)})),a.complete(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),a.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(f.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=68.c74f8a72.chunk.js.map