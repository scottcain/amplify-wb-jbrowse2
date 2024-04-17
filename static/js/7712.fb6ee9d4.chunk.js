"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7712],{25331:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var l=n(7552),o=n(68446),a=n(28685),r=n(62859),c=n(2051),i=n(29629),s=n(75785),d=n(99546),m=n(57610);const u=(0,s.n9)()((e=>({fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)}}))),g=(0,o.observer)((function({model:e}){const{classes:t}=u(),n=(0,d.getSession)(e),[o,a]=(0,l.useState)(null);function s(){a(null)}const g=(0,d.isSessionModelWithConnections)(n),k=(0,d.isSessionWithAddTracks)(n);return k||g?l.createElement(l.Fragment,null,l.createElement(r.A,{color:"secondary",className:t.fab,onClick:e=>a(e.currentTarget)},l.createElement(m.A,null)),l.createElement(c.A,{anchorEl:o,open:Boolean(o),onClose:()=>a(null)},g?l.createElement(i.A,{onClick:()=>{s(),(0,d.isSessionModelWithWidgets)(n)&&n.showWidget(n.addWidget("AddConnectionWidget","addConnectionWidget"))}},"Add connection"):null,k?l.createElement(i.A,{onClick:()=>{s(),(0,d.isSessionModelWithWidgets)(n)&&n.showWidget(n.addWidget("AddTrackWidget","addTrackWidget",{view:e.view.id}))}},"Add track"):null)):null}));var k=n(32296),h=n(36715),b=n(61723),C=n(8463),f=n(64065),p=n(87440),v=n(63408);function E(e){return"category"===e?.type?e.children.map((e=>"category"===e.type?E(e):e.conf)).flat(1/0):[]}function y(e,t=new Map){e.id&&e.children.length&&t.set(e.id,e);for(const n of e.children)y(n,t);return t}function A(e=""){return e.endsWith("(Unsupported)")||e.endsWith("(Unknown)")}const S=(0,s.n9)()((e=>({contrastColor:{color:e.palette.tertiary.contrastText},accordionText:{margin:"auto 0",width:"100%"}})));function T({isOpen:e,setOpen:t,data:n}){const{classes:o}=S(),[a,r]=(0,l.useState)(null),{menuItems:c=[],name:i,model:s,id:d,tree:m}=n;return l.createElement("div",{className:o.accordionText,onClick:()=>{a||(n.toggleCollapse(d),t(!e))}},l.createElement(h.A,null,e?l.createElement(f.A,null):l.createElement(p.A,null),i,l.createElement(b.A,{onClick:e=>{r(e.currentTarget),e.stopPropagation()},className:o.contrastColor},l.createElement(v.A,null))),a?l.createElement(C.A,{anchorEl:a,menuItems:[{label:"Add to selection",onClick:()=>{const e=y(m).get(d);s.addToSelection(E(e))}},{label:"Remove from selection",onClick:()=>{const e=y(m).get(d);s.removeFromSelection(E(e))}},{label:"Show all tracks",onClick:()=>{for(const e of y(m).get(d)?.children||[])"track"===e.type&&s.view.showTrack(e.trackId)}},{label:"Hide all tracks",onClick:()=>{for(const e of y(m).get(d)?.children||[])"track"===e.type&&s.view.hideTrack(e.trackId)}},...c],onMenuItemClick:(e,t)=>{t(),r(null)},open:Boolean(a),onClose:()=>r(null)}):null)}var w=n(89003),W=n(33371),x=n(32808),I=n(13476),M=n(68584),N=n(48408);const F=(0,s.n9)()((e=>({compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:e.palette.action.selected}},selected:{background:"#cccc"}})));function O({data:e}){const{classes:t}=F(),{checked:n,conf:o,model:a,drawerPosition:r,id:c,trackId:i,name:s,onChange:d,selected:m}=e,u=o&&(0,M.readConfObject)(o,"description")||"";return l.createElement(l.Fragment,null,l.createElement(w.A,{title:u+(m?" (in selection)":""),placement:"left"===r?"right":"left"},l.createElement(W.A,{className:t.checkboxLabel,control:l.createElement(x.A,{className:t.compactCheckbox,checked:n,onChange:()=>d(i),disabled:A(s),inputProps:{"data-testid":`htsTrackEntry-${c}`}}),label:l.createElement("div",{"data-testid":`htsTrackLabel-${c}`,style:{background:m?"#cccc":void 0}},l.createElement(I.A,{html:s}))})),l.createElement(N.A,{model:a,trackId:i,id:c,conf:o}))}const L=(0,s.n9)()((e=>({accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:e.palette.tertiary.main,color:e.palette.tertiary.contrastText,width:"100%",display:"flex",paddingLeft:5}})));function B({data:e,isOpen:t,style:n,setOpen:o}){const{isLeaf:a,nestingLevel:r}=e,{classes:c}=L(),i=10*r+(a?10:0);return l.createElement("div",{style:n,className:a?void 0:c.accordionBase},new Array(r).fill(0).map(((e,t)=>l.createElement("div",{key:`mark-${t}`,style:{left:10*t+4,height:n?.height},className:c.nestingLevelMarker}))),l.createElement("div",{className:a?void 0:c.accordionCard,style:{marginLeft:i,whiteSpace:"nowrap",width:"100%"}},l.createElement("div",{className:a?void 0:c.accordionColor},a?l.createElement(O,{data:e}):l.createElement(T,{isOpen:t,data:e,setOpen:o}))))}function P(e,t,n,l){const o="track"===e.type;return{data:{defaultHeight:o?22:40,isLeaf:o,isOpenByDefault:!0,nestingLevel:t,selected:!!o&&l[e.trackId],...e,...n},nestingLevel:t,node:e}}const R=(0,o.observer)((function({height:e,tree:t,model:n}){const{filterText:o,selection:a,view:r}=n,c=(0,l.useRef)(null),i=(0,d.getSession)(n),{drawerPosition:s}=i,m=(0,l.useMemo)((()=>Object.fromEntries(a.map((e=>[e.trackId,e])))),[a]),u=(0,l.useMemo)((()=>({onChange:e=>{r.toggleTrack(e)&&n.addToRecentlyUsed(e)},toggleCollapse:e=>n.toggleCategory(e),tree:t,model:n,drawerPosition:s})),[r,n,s,t]),g=(0,l.useCallback)((function*(){for(const e of t.children)yield P(e,0,u,m);for(;;){const e=yield;for(const t of e.node.children)yield P(t,e.nestingLevel+1,u,m)}}),[t,u,m]);return(0,l.useEffect)((()=>{c.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[t,o]),l.createElement(l.Fragment,null,l.createElement(k.SS,{ref:c,treeWalker:g,height:e},B))}));var H=n(1343),D=n(93117),U=n(61848),j=n(23758),z=n(91318);const _=(0,l.lazy)((()=>Promise.all([n.e(8565),n.e(4169),n.e(6157),n.e(2887)]).then(n.bind(n,48927)))),$=(0,l.lazy)((()=>Promise.all([n.e(5331),n.e(7181)]).then(n.bind(n,97181)))),q=(0,l.lazy)((()=>n.e(5896).then(n.bind(n,35896)))),G=(0,l.lazy)((()=>n.e(741).then(n.bind(n,60741)))),J=(0,l.lazy)((()=>n.e(4138).then(n.bind(n,44138)))),K=(0,o.observer)((function({model:e}){const t=(0,d.getSession)(e),[n,o]=(0,l.useState)(),[a,r]=(0,l.useState)(),[c,i]=(0,l.useState)(!1),[s,m]=(0,l.useState)(!1),[u,g]=(0,l.useState)(!1);function k(e,n){const l=(0,M.readConfObject)(e,"name"),a=t.prepareToBreakConnection?.(e);if(a){const[t,n]=a;Object.keys(n).length>0?o({connectionConf:e,safelyBreakConnection:t,dereferenceTypeCount:n,name:l}):t()}n&&r({name:l,connectionConf:e})}return l.createElement(l.Fragment,null,l.createElement(j.A,{menuItems:[{label:"Open faceted track selector",onClick:()=>{g(!0)}},...(0,d.isSessionWithAddTracks)(t)?[{label:"Add track...",onClick:()=>{(0,d.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddTrackWidget","addTrackWidget",{view:e.view.id}))}}]:[],{label:"Connections...",subMenu:[...(0,d.isSessionModelWithConnections)(t)?[{label:"Turn on/off connections...",onClick:()=>i(!0)}]:[],...(0,d.isSessionModelWithConnectionEditing)(t)?[{label:"Add connection...",onClick:()=>{(0,d.isSessionModelWithWidgets)(t)&&t.showWidget(t.addWidget("AddConnectionWidget","addConnectionWidget"))}},{label:"Delete connections...",onClick:()=>m(!0)}]:[]]},{label:"Sort...",type:"subMenu",subMenu:[{label:"Sort tracks by name",type:"checkbox",checked:e.activeSortTrackNames,onClick:()=>e.setSortTrackNames(!e.activeSortTrackNames)},{label:"Sort categories by name",type:"checkbox",checked:e.activeSortCategories,onClick:()=>e.setSortCategories(!e.activeSortCategories)}]},{label:"Collapse...",type:"subMenu",subMenu:[...e.hasAnySubcategories?[{label:"Collapse subcategories",onClick:()=>e.collapseSubCategories()}]:[],{label:"Collapse top-level categories",onClick:()=>e.collapseTopLevelCategories()},{label:"Expand all categories",onClick:()=>e.expandAllCategories()}]}]},l.createElement(z.A,null)),l.createElement(l.Suspense,{fallback:null},n?l.createElement($,{modalInfo:n,onClose:()=>o(void 0)}):null,a?l.createElement(q,{handleClose:()=>r(void 0),deleteDialogDetails:a,session:t}):null,s?l.createElement(G,{handleClose:()=>m(!1),breakConnection:k,session:t}):null,c?l.createElement(J,{handleClose:()=>i(!1),session:t,breakConnection:k}):null,u?l.createElement(_,{handleClose:()=>g(!1),model:e}):null))}));var Q=n(9469),V=n(46245),X=n(67382),Y=n(91468);const Z=(0,o.observer)((function({model:e,tracks:t,extraMenuItems:n,children:o,onClick:a}){const{view:r}=e,[c,i]=(0,l.useState)(!1),s=(0,d.getSession)(e);return r?l.createElement(j.A,{closeAfterItemClick:!1,onClick:a,menuItems:[...t.map((t=>({type:"checkbox",label:l.createElement(l.Fragment,null,l.createElement(I.A,{html:(0,Y.getTrackName)(t,s)})," ",l.createElement(N.A,{id:t.trackId,trackId:t.trackId,model:e,conf:t,setOpen:i,stopPropagation:!0})),checked:r.tracks.some((e=>e.configuration===t)),onClick:()=>{c||e.view.toggleTrack(t.trackId)&&e.addToRecentlyUsed(t.trackId)}}))),...n]},o):null})),ee=(0,s.n9)()({smallBadge:{height:14},margin:{marginRight:10}}),te=(0,o.observer)((function({model:e}){const{classes:t}=ee(),{view:n,favoriteTracks:o}=e;return n?l.createElement(Z,{onClick:()=>e.setFavoritesCounter(0),tracks:o,model:e,extraMenuItems:o.length?[{type:"divider"},{label:"Clear favorites",onClick:()=>e.clearFavorites()}]:[{label:"No favorite tracks yet",onClick:()=>{}}]},l.createElement(w.A,{title:"Favorite tracks"},l.createElement(V.A,{classes:{badge:t.smallBadge},color:"secondary",anchorOrigin:{vertical:"bottom",horizontal:"right"},className:t.margin,badgeContent:e.favoritesCounter},l.createElement(X.A,null)))):null}));var ne=n(65005);const le=(0,s.n9)()({smallBadge:{height:14}}),oe=(0,o.observer)((function({model:e}){const{classes:t}=le(),{view:n,recentlyUsedCounter:o,recentlyUsedTracks:a}=e;return n?l.createElement(Z,{onClick:()=>e.setRecentlyUsedCounter(0),model:e,tracks:a,extraMenuItems:a.length?[{type:"divider"},{label:"Clear recently used",onClick:()=>e.clearRecentlyUsed()}]:[{label:"No recently used",onClick:()=>{}}]},l.createElement(w.A,{title:"Recently used tracks"},l.createElement(V.A,{classes:{badge:t.smallBadge},anchorOrigin:{vertical:"bottom",horizontal:"right"},color:"secondary",badgeContent:o},l.createElement(ne.A,null)))):null})),ae=(0,s.n9)()((e=>({searchBox:{margin:e.spacing(2)}}))),re=(0,o.observer)((function({model:e}){const{filterText:t}=e,{classes:n}=ae();return l.createElement(H.A,{className:n.searchBox,label:"Filter tracks",value:t,onChange:t=>e.setFilterText(t.target.value),fullWidth:!0,InputProps:{endAdornment:l.createElement(D.A,{position:"end"},l.createElement(b.A,{onClick:()=>e.clearFilterText()},l.createElement(U.A,null)))}})})),ce=(0,o.observer)((function({model:e,setHeaderHeight:t}){return l.createElement("div",{ref:e=>t(e?.getBoundingClientRect().height||0),"data-testid":"hierarchical_track_selector"},l.createElement("div",{style:{display:"flex"}},l.createElement(K,{model:e}),l.createElement(Q.A,{model:e}),l.createElement(re,{model:e}),l.createElement(oe,{model:e}),l.createElement(te,{model:e})))})),ie=({tree:e,model:t,offset:n})=>"undefined"==typeof jest?l.createElement(a.Ay,{disableWidth:!0},(o=>l.createElement(R,{height:(o.height||n)-n,model:t,tree:e}))):l.createElement(R,{height:9e3,model:t,tree:e}),se=({overrideDimensions:e,children:t})=>e?l.createElement("div",{style:{...e}},t):t,de=(0,o.observer)((function({model:e,toolbarHeight:t,overrideDimensions:n}){return l.createElement(se,{overrideDimensions:n},l.createElement(me,{model:e,toolbarHeight:t}),l.createElement(g,{model:e}))})),me=(0,o.observer)((function({model:e,toolbarHeight:t=0}){const[n,o]=(0,l.useState)(0);return l.createElement(l.Fragment,null,l.createElement(ce,{model:e,setHeaderHeight:o}),l.createElement(ie,{tree:e.hierarchy,model:e,offset:t+n}))})),ue=de},9469:(e,t,n)=>{n.d(t,{A:()=>s});var l=n(7552),o=n(46245),a=n(68446),r=n(99546),c=n(22811),i=n(23758);const s=(0,a.observer)((function({model:e}){const{selection:t}=e,{pluginManager:n}=(0,r.getEnv)(e),a=(0,r.getSession)(e),s=n.evaluateExtensionPoint("TrackSelector-multiTrackMenuItems",[],{session:a});return t.length?l.createElement(i.A,{menuItems:[{label:"Clear",onClick:()=>e.clearSelection()},...s.map((t=>({...t,..."onClick"in t?{onClick:()=>t.onClick(e)}:{}})))]},l.createElement(o.A,{badgeContent:t.length,color:"primary"},l.createElement(c.A,null))):null}))},48408:(e,t,n)=>{n.d(t,{A:()=>m});var l=n(7552),o=n(75785),a=n(99546),r=n(23758),c=n(63408),i=n(3401),s=n(56837);const d=(0,o.n9)()({cascadingStyle:{padding:0}}),m=function({id:e,trackId:t,stopPropagation:n,model:o,setOpen:m,conf:u}){const{classes:g}=d();return l.createElement(r.A,{className:g.cascadingStyle,stopPropagation:n,setOpen:m,"data-testid":`htsTrackEntryMenu-${e}`,menuItems:[...(0,a.getSession)(o).getTrackActionMenuItems?.(u)||[],o.isFavorite(t)?{label:"Remove from favorites",onClick:()=>o.removeFromFavorites(t),icon:i.A}:{label:"Add to favorites",onClick:()=>o.addToFavorites(t),icon:s.A},{label:"Add to selection",onClick:()=>o.addToSelection([u])},...o.isSelected(u)?[{label:"Remove from selection",onClick:()=>o.removeFromSelection([u])}]:[]]},l.createElement(c.A,null))}}}]);
//# sourceMappingURL=7712.fb6ee9d4.chunk.js.map