(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5486],{20218:function(e,a,s){"use strict";s.r(a);var i=s(96234),r=s(30969),n=s(22714),o=s(51526),t=s(67071),l=s(74062),u=s(57886),c=s(93999),d=s(83421),h=s(81690),m=s(32343),p=s(80975),$=s(83483),f=s(64501),v=s(93138),g=s(54249),b=s(53033),w=s(28599),x=s(53017),y=s(95827),j=s(90550),Z=s(74125),k=s.n(Z),C=s(37574),S=(0,n.Z)((function(e){return{root:{margin:e.spacing(1)},message:{padding:e.spacing(3)}}})),z=(0,j.observer)((function(e){var a=e.session,s=S(),i=JSON.parse(localStorage.getItem(a.previousAutosaveId)||"{}").session,r=(i||{}).views,n=void 0===r?[]:r,h=n.map((function(e){return e.tracks.length})).reduce((function(e,a){return e+a}),0);return i?(0,C.jsx)(o.Z,{className:s.root,children:(0,C.jsx)(t.Z,{subheader:(0,C.jsx)(l.Z,{children:"Previous autosaved entry"}),children:(0,C.jsxs)(u.Z,{button:!0,onClick:function(){return a.loadAutosaveSession()},children:[(0,C.jsx)(c.Z,{children:(0,C.jsx)(y.Z,{})}),(0,C.jsx)(d.Z,{primary:i.name,secondary:a.name===i.name?"Currently open":"".concat(n.length," ").concat(k()("view",n.length),"; ").concat(h,"\n                           open ").concat(k()("track",h))})]})})}):null})),R=(0,j.observer)((function(e){var a=e.session,s=S(),n=(0,r.useState)(null),j=(0,i.Z)(n,2),Z=j[0],R=j[1],L=(0,r.useState)(!1),P=(0,i.Z)(L,2),q=P[0],E=P[1];function H(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&a.removeSavedSession(a.savedSessions[Z]),R(null),E(!1)}var O=null!==Z?a.savedSessions[Z].name:"";return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(z,{session:a}),(0,C.jsx)(o.Z,{className:s.root,children:(0,C.jsx)(t.Z,{subheader:(0,C.jsx)(l.Z,{children:"Saved sessions"}),children:a.savedSessions.length?a.savedSessions.map((function(e,s){var i=e.views,r=void 0===i?[]:i,n=r.map((function(e){return e.tracks.length})).reduce((function(e,a){return e+a}),0);return(0,C.jsxs)(u.Z,{button:!0,disabled:a.name===e.name,onClick:function(){return a.activateSession(e.name)},children:[(0,C.jsx)(c.Z,{children:(0,C.jsx)(y.Z,{})}),(0,C.jsx)(d.Z,{primary:e.name,secondary:a.name===e.name?"Currently open":"".concat(r.length," ").concat(k()("view",r.length),"; ").concat(n,"\n                           open ").concat(k()("track",n))}),(0,C.jsx)(h.Z,{children:(0,C.jsx)(m.Z,{edge:"end",disabled:a.name===e.name,"aria-label":"Delete",onClick:function(){return function(e){R(e),E(!0)}(s)},children:(0,C.jsx)(x.Z,{})})})]},e.name)})):(0,C.jsx)(p.Z,{className:s.message,children:"No saved sessions found"})})}),(0,C.jsxs)($.Z,{open:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,C.jsx)(f.Z,{id:"alert-dialog-title",children:'Delete session "'.concat(O,'"?')}),(0,C.jsx)(v.Z,{children:(0,C.jsx)(g.Z,{id:"alert-dialog-description",children:"This action cannot be undone"})}),(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(w.Z,{onClick:function(){return H()},color:"primary",children:"Cancel"}),(0,C.jsx)(w.Z,{onClick:function(){return H(!0)},color:"primary",autoFocus:!0,children:"Delete"})]})]})]})}));a.default=R},95827:function(e,a,s){"use strict";var i=s(14859),r=s(93291);a.Z=void 0;var n=r(s(30969)),o=(0,i(s(87131)).default)(n.createElement("path",{d:"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"}),"ViewList");a.Z=o},74125:function(e){e.exports=function(){var e=[],a=[],s={},i={},r={};function n(e){return"string"===typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function t(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,s){return a[s]||""}))}function l(e,a){return e.replace(a[0],(function(s,i){var r=t(a[1],arguments);return o(""===s?e[i-1]:s,r)}))}function u(e,a,i){if(!e.length||s.hasOwnProperty(e))return a;for(var r=i.length;r--;){var n=i[r];if(n[0].test(a))return l(a,n)}return a}function c(e,a,s){return function(i){var r=i.toLowerCase();return a.hasOwnProperty(r)?o(i,r):e.hasOwnProperty(r)?o(i,e[r]):u(r,i,s)}}function d(e,a,s,i){return function(i){var r=i.toLowerCase();return!!a.hasOwnProperty(r)||!e.hasOwnProperty(r)&&u(r,r,s)===r}}function h(e,a,s){return(s?a+" ":"")+(1===a?h.singular(e):h.plural(e))}return h.plural=c(r,i,e),h.isPlural=d(r,i,e),h.singular=c(i,r,a),h.isSingular=d(i,r,a),h.addPluralRule=function(a,s){e.push([n(a),s])},h.addSingularRule=function(e,s){a.push([n(e),s])},h.addUncountableRule=function(e){"string"!==typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):s[e.toLowerCase()]=!0},h.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),r[e]=a,i[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()}}]);
//# sourceMappingURL=5486.83352493.chunk.js.map