(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9636],{39636:function(e,a,s){"use strict";s.r(a);var i=s(96234),n=s(96902),r=s(71078),o=s(90104),t=s(29078),l=s(4222),u=s(96835),c=s(65517),d=s(79602),h=s(3915),m=s(72988),p=s(88117),$=s(21178),f=s(18726),v=s(96565),g=s(18849),b=s(91188),w=s(4782),x=s(58666),y=s.n(x),j=s(31946),k=s(39454),Z=s(29938),C=(0,b.ZL)()((function(e){return{root:{margin:e.spacing(1)},message:{padding:e.spacing(3)}}})),S=(0,w.observer)((function(e){var a=e.session,s=C().classes,i=JSON.parse(localStorage.getItem(a.previousAutosaveId)||"{}").session,n=(i||{}).views,d=void 0===n?[]:n,h=d.map((function(e){return e.tracks.length})).reduce((function(e,a){return e+a}),0);return i?(0,Z.jsx)(r.Z,{className:s.root,children:(0,Z.jsx)(o.Z,{subheader:(0,Z.jsx)(t.Z,{children:"Previous autosaved entry"}),children:(0,Z.jsxs)(l.ZP,{button:!0,onClick:function(){return a.loadAutosaveSession()},children:[(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(k.Z,{})}),(0,Z.jsx)(c.Z,{primary:i.name,secondary:a.name===i.name?"Currently open":"".concat(d.length," ").concat(y()("view",d.length),"; ").concat(h,"\n                           open ").concat(y()("track",h))})]})})}):null})),z=(0,w.observer)((function(e){var a=e.session,s=C().classes,b=(0,n.useState)(null),w=(0,i.Z)(b,2),x=w[0],z=w[1],P=(0,n.useState)(!1),L=(0,i.Z)(P,2),R=L[0],q=L[1];function H(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&null!==x&&a.removeSavedSession(a.savedSessions[x]),z(null),q(!1)}var O=null!==x?a.savedSessions[x].name:"";return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(S,{session:a}),(0,Z.jsx)(r.Z,{className:s.root,children:(0,Z.jsx)(o.Z,{subheader:(0,Z.jsx)(t.Z,{children:"Saved sessions"}),children:a.savedSessions.length?a.savedSessions.map((function(e,s){var i=e.views,n=void 0===i?[]:i,r=n.map((function(e){return e.tracks.length})).reduce((function(e,a){return e+a}),0);return(0,Z.jsxs)(l.ZP,{button:!0,disabled:a.name===e.name,onClick:function(){return a.activateSession(e.name)},children:[(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(k.Z,{})}),(0,Z.jsx)(c.Z,{primary:e.name,secondary:a.name===e.name?"Currently open":"".concat(n.length," ").concat(y()("view",n.length),"; ").concat(r,"\n                           open ").concat(y()("track",r))}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(h.Z,{edge:"end",disabled:a.name===e.name,"aria-label":"Delete",onClick:function(){return function(e){z(e),q(!0)}(s)},children:(0,Z.jsx)(j.Z,{})})})]},e.name)})):(0,Z.jsx)(m.Z,{className:s.message,children:"No saved sessions found"})})}),(0,Z.jsxs)(g.Dialog,{open:R,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",title:'Delete session "'.concat(O,'"?'),children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsx)($.Z,{id:"alert-dialog-description",children:"This action cannot be undone"})}),(0,Z.jsxs)(f.Z,{children:[(0,Z.jsx)(v.Z,{onClick:function(){return H()},color:"primary",children:"Cancel"}),(0,Z.jsx)(v.Z,{onClick:function(){return H(!0)},color:"primary",autoFocus:!0,children:"Delete"})]})]})]})}));a.default=z},39454:function(e,a,s){"use strict";var i=s(71600);a.Z=void 0;var n=i(s(7152)),r=s(29938),o=(0,n.default)((0,r.jsx)("path",{d:"M3 14h4v-4H3v4zm0 5h4v-4H3v4zM3 9h4V5H3v4zm5 5h13v-4H8v4zm0 5h13v-4H8v4zM8 5v4h13V5H8z"}),"ViewList");a.Z=o},58666:function(e){e.exports=function(){var e=[],a=[],s={},i={},n={};function r(e){return"string"===typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function t(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,s){return a[s]||""}))}function l(e,a){return e.replace(a[0],(function(s,i){var n=t(a[1],arguments);return o(""===s?e[i-1]:s,n)}))}function u(e,a,i){if(!e.length||s.hasOwnProperty(e))return a;for(var n=i.length;n--;){var r=i[n];if(r[0].test(a))return l(a,r)}return a}function c(e,a,s){return function(i){var n=i.toLowerCase();return a.hasOwnProperty(n)?o(i,n):e.hasOwnProperty(n)?o(i,e[n]):u(n,i,s)}}function d(e,a,s,i){return function(i){var n=i.toLowerCase();return!!a.hasOwnProperty(n)||!e.hasOwnProperty(n)&&u(n,n,s)===n}}function h(e,a,s){return(s?a+" ":"")+(1===a?h.singular(e):h.plural(e))}return h.plural=c(n,i,e),h.isPlural=d(n,i,e),h.singular=c(i,n,a),h.isSingular=d(i,n,a),h.addPluralRule=function(a,s){e.push([r(a),s])},h.addSingularRule=function(e,s){a.push([r(e),s])},h.addUncountableRule=function(e){"string"!==typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):s[e.toLowerCase()]=!0},h.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),n[e]=a,i[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()}}]);
//# sourceMappingURL=9636.13c12d3e.chunk.js.map