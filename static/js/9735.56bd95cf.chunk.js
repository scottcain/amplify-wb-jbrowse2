"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9735,477],{20477:function(e,n,r){r.r(n),r.d(n,{bufferToString:function(){return i},parseCsvBuffer:function(){return l},parseTsvBuffer:function(){return d}});var t=r(32723),a=r(33028),u=r(96234),s=r(34795),o=r(97531);function i(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function c(e){return f.apply(this,arguments)}function f(){return f=(0,s.Z)((0,t.Z)().mark((function e(n){var u,s,o=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,r.e(8639).then(r.t.bind(r,88639,23)).then((function(e){return e.default}));case 3:return s=e.sent,e.abrupt("return",s((0,a.Z)({noheader:!0,output:"csv"},u)).fromString(i(n)));case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},r=0,t={isLoaded:!0,rows:e.map((function(e,t){var a=t+(n.hasColumnNameLine?0:1);return e.length>r&&(r=e.length),{id:String(a),cells:e.map((function(e,n){return{columnNumber:n,text:e}}))}}))},a={};if(n.hasColumnNameLine&&void 0!==n.columnNameLineNumber){var s=t.rows.splice(n.columnNameLineNumber-1,1),i=(0,u.Z)(s,1)[0];i&&i.cells.forEach((function(e,n){a[n]=e.text||""}))}for(var c=[],f=[],m=function(e){f.push(e);var r=function(e,n,r){var t,a=e.rows[0].cells[n].text||"",u="Text";try{t=(0,o.parseLocString)(a,r)}catch(s){}return t&&t.refName&&"number"===typeof t.start?u="LocString":/^\d+(\.\d+)?$/.test(a)&&(u="Number"),u}(t,e,n.isValidRefName);"LocString"===r&&t.rows.forEach((function(r){var t=r.cells[e];t.extendedData=(0,o.parseLocString)(t.text,n.isValidRefName)})),c[e]={name:a[e],dataType:{type:r}}},l=0;l<r;l+=1)m(l);return{rowSet:t,columnDisplayOrder:f,hasColumnNames:!!n.hasColumnNameLine,columns:c,assemblyName:n.selectedAssemblyName}}function l(e){return p.apply(this,arguments)}function p(){return p=(0,s.Z)((0,t.Z)().mark((function e(n){var r,a,u=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,c(n);case 3:return a=e.sent,e.abrupt("return",m(a,r));case 5:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return h=(0,s.Z)((0,t.Z)().mark((function e(n){var r,a,u=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,c(n,{delimiter:"\t"});case 3:return a=e.sent,e.abrupt("return",m(a,r));case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},29735:function(e,n,r){r.r(n),r.d(n,{parseSTARFusionBuffer:function(){return i}});var t=r(32723),a=r(34795),u=r(20477);function s(e){var n=e.split(":");return{refName:n[0],pos:parseInt(n[1],10),strand:"-"===n[2]?-1:1}}var o={SpanningFragCount:!0,FFPM:!0,LeftBreakEntropy:!0,RightBreakEntropy:!0,JunctionReadCount:!0};function i(e,n){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)((0,t.Z)().mark((function e(n,r){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.parseTsvBuffer)(n,{hasColumnNameLine:!0,columnNameLineNumber:1,selectedAssemblyName:r.selectedAssemblyName,isValidRefName:function(){return!1}});case 2:return(a=e.sent).columns[0].name=a.columns[0].name.replace("#",""),a.columns.forEach((function(e){o[e.name]&&(e.dataType={type:"Number"})})),a.rowSet.rows.forEach((function(e,n){var r={};e.cells.forEach((function(e,n){var t=e.text,u=a.columns[n];if("LeftBreakpoint"===u.name&&t){var i=s(t),c=i.refName,f=i.pos,m=i.strand;r.refName=c,r.start=f,r.end=f,r.strand=m}else if("RightBreakpoint"===u.name&&t){var l=s(t),p=l.refName,d=l.pos,h=l.strand;r.mate={refName:p,start:d,end:d,strand:h}}else t&&o[u.name]?r[u.name]=parseFloat(t):r[u.name]=t})),r.uniqueId="sf-".concat(n+1),e.extendedData={feature:r}})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=9735.56bd95cf.chunk.js.map