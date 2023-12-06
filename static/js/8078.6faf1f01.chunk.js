"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8078],{78078:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(66204),r=a(80846),l=a(94926),s=a(32339),c=a(78781),o=a(35861),i=a(31211),d=a(80013),m=a(59602),p=a(63315),u=a(65404),g=a(64864),f=a(7146),k=a(32831),E=a(38684),h=a(88196),b=a(36349),y=a(66159),v=a(46338),Z=a(39780),w=a(70539),N=a(5930),T=a(43902),S=a(86636),x=a(60962),C=a(2331),A=a(75174),D=a(86600),I=a(74780),M=a(81799),P=a(49140),O=a(15971),W=a(97916);const L=(0,E.ZL)()((e=>({paper:{display:"flex",flexDirection:"column",padding:e.spacing(1)},card:{marginTop:e.spacing(1)}}))),j=(0,r.observer)((function({model:e}){const{classes:t}=L(),[a,r]=(0,n.useState)(""),[l,s]=(0,n.useState)(""),[c,o]=(0,n.useState)(["Name","ID"]),[i,d]=(0,n.useState)(["CDS","exon"]),m=[{label:"Indexing attributes",values:c},{label:"Feature types to exclude",values:i}];return(0,n.useEffect)((()=>{e.setTextIndexingConf({attributes:c,exclude:i})}),[e,c,i]),n.createElement(S.Z,{className:t.paper},n.createElement(x.Z,null,"Indexing configuration"),m.map(((e,m)=>n.createElement(C.Z,{raised:!0,key:e.label,className:t.card},n.createElement(A.Z,null,n.createElement(x.Z,null,e.label),n.createElement(D.Z,{disablePadding:!0},e.values.map(((t,a)=>n.createElement(I.ZP,{key:a,disableGutters:!0},n.createElement(v.Z,{value:t,InputProps:{endAdornment:n.createElement(M.Z,{position:"end"},n.createElement(P.Z,{onClick:()=>{const t=e.values.filter(((e,t)=>t!==a));0===m?o(t):d(t)}},n.createElement(O.Z,null)))}})))),n.createElement(I.ZP,{disableGutters:!0},n.createElement(v.Z,{value:0===m?a:l,placeholder:"add new",onChange:e=>{0===m?r(e.target.value):s(e.target.value)},InputProps:{endAdornment:n.createElement(M.Z,{position:"end"},n.createElement(P.Z,{onClick:()=>{0===m?(o([...c,a]),r("")):(d([...i,l]),s(""))},disabled:0===m?""===a:""===l,"data-testid":"stringArrayAdd-Feat"},n.createElement(W.Z,null)))}}))))))))})),B=(0,E.ZL)()((e=>({spacing:{marginBottom:e.spacing(3)}}))),U=(0,r.observer)((({model:e})=>{const{classes:t}=B(),{pluginManager:a}=(0,i.getEnv)(e),{trackType:r}=e,l=a.getTrackElements();return n.createElement(v.Z,{className:t.spacing,value:r,variant:"outlined",label:"Track type",helperText:"Select track type",select:!0,fullWidth:!0,onChange:t=>e.setTrackType(t.target.value),SelectProps:{SelectDisplayProps:{"data-testid":"trackTypeSelect"}}},l.map((({name:e,displayName:t})=>n.createElement(c.Z,{key:e,value:e},t))))}));var F=a(84644);const J=(0,E.ZL)()((e=>({spacing:{marginBottom:e.spacing(3)}}))),_=(0,r.observer)((({model:e})=>{const{classes:t}=J(),{trackAdapter:a}=e,{pluginManager:r}=(0,i.getEnv)(e);return n.createElement(v.Z,{className:t.spacing,value:"UNKNOWN"!==a?.type?a?.type:"",label:"Adapter type",variant:"outlined",helperText:"Select an adapter type",select:!0,fullWidth:!0,onChange:t=>e.setAdapterHint(t.target.value),SelectProps:{SelectDisplayProps:{"data-testid":"adapterTypeSelect"}}},Object.entries(function(e){const t={};return e.forEach((e=>{const a=e.adapterMetadata?.category||"Default";t[a]||(t[a]=[]),t[a].push(e)})),t}(r.getAdapterElements().filter((e=>!e.adapterMetadata?.hiddenFromGUI)))).map((([e,t])=>[n.createElement(F.Z,{key:e},e),t.map((e=>n.createElement(c.Z,{key:e.name,value:e.name},e.displayName)))])))})),G=(0,E.ZL)()((e=>({spacing:{marginBottom:e.spacing(3)}})));function R({trackAdapter:e,trackType:t}){const{classes:a}=G(),{type:r,subadapter:l}=e;return"SNPCoverageAdapter"===r?n.createElement(d.Z,{className:a.spacing},"Selected ",n.createElement("code",null,t),". Using adapter ",n.createElement("code",null,r)," with subadapter ",n.createElement("code",null,l?.type),". Please enter a track name and, if necessary, update the track type."):n.createElement(d.Z,{className:a.spacing},"Using adapter ",n.createElement("code",null,r)," and guessing track type"," ",n.createElement("code",null,t),". Please enter a track name and, if necessary, update the track type.")}function q({model:e}){const{classes:t}=G();return n.createElement(n.Fragment,null,n.createElement(d.Z,{className:t.spacing},"JBrowse was not able to guess the adapter type for this data, but it may be in the list below. If not, you can"," ",n.createElement(y.Z,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse to see if they support this data type or"," ",n.createElement(y.Z,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type."),n.createElement(_,{model:e}))}const $=(0,r.observer)((function({model:e}){const{classes:t}=G(),[a,r]=(0,n.useState)(!0),s=(0,i.getSession)(e),{trackName:c,trackAdapter:o,trackType:m,warningMessage:p,adapterHint:u}=e;if((0,n.useEffect)((()=>{""===u&&o&&e.setAdapterHint(o.type)}),[u,o,o?.type,e]),e.unsupported)return n.createElement(d.Z,{className:t.spacing},"This version of JBrowse cannot display data of this type. It is possible, however, that there is a newer version that can display them. You can"," ",n.createElement(y.Z,{href:"https://github.com/GMOD/jbrowse-components/releases",target:"_blank",rel:"noopener noreferrer"},"check for new releases")," ","of JBrowse or"," ",n.createElement(y.Z,{href:"https://github.com/GMOD/jbrowse-components/issues/new",target:"_blank",rel:"noopener noreferrer"},"file an issue")," ","and add a feature request for this data type.");if(o?.type===N.UNKNOWN)return n.createElement(q,{model:e});if(!o?.type)return n.createElement(d.Z,null,"Could not recognize this data type.");const g=(0,i.isSupportedIndexingAdapter)(o?.type);return n.createElement("div",null,o?n.createElement(R,{trackAdapter:o,trackType:m}):null,p?n.createElement(d.Z,{style:{color:"orange"}},p):null,n.createElement(v.Z,{className:t.spacing,label:"trackName",helperText:"A name for this track",fullWidth:!0,value:c,onChange:t=>e.setTrackName(t.target.value),inputProps:{"data-testid":"trackNameInput"}}),n.createElement(_,{model:e}),n.createElement(U,{model:e}),n.createElement(T.AssemblySelector,{session:s,helperText:"Select assembly to add track to",selected:e.assembly,onChange:t=>e.setAssembly(t),TextFieldProps:{fullWidth:!0,SelectProps:{SelectDisplayProps:{"data-testid":"assemblyNameSelect"}}}}),i.isElectron&&g&&n.createElement(l.Z,null,n.createElement(Z.Z,{label:"Index track for text searching?",control:n.createElement(w.Z,{checked:a,onChange:t=>{r(t.target.checked),e.setTextIndexTrack(t.target.checked)}})})),i.isElectron&&a&&g?n.createElement(j,{model:e}):null)})),H=(0,E.ZL)()((e=>({paper:{padding:e.spacing(2)},spacer:{height:e.spacing(8)}}))),K=(0,r.observer)((function({model:e}){const{classes:t}=H(),a=(0,h.getRoot)(e);return n.createElement(S.Z,{className:t.paper},n.createElement(T.FileSelector,{name:"Main file",description:"",location:e.trackData,setLocation:e.setTrackData,setName:e.setTrackName,rootModel:a}),n.createElement("div",{className:t.spacer}),n.createElement(T.FileSelector,{name:"Index file",description:"(Optional) The URL of the index file is automatically inferred from the URL of the main file if it is not supplied.",location:e.indexTrackData,setLocation:e.setIndexTrackData,setName:e.setTrackName,rootModel:a}))})),z=(0,E.ZL)()((e=>({root:{marginTop:e.spacing(1)},stepper:{backgroundColor:e.palette.background.default},button:{marginRight:e.spacing(1)},actionsContainer:{marginTop:e.spacing(10),marginBottom:e.spacing(2)},alertContainer:{padding:`${e.spacing(2)}px 0px ${e.spacing(2)}px 0px`}}))),Y=["Enter track data","Confirm track type"],Q=(0,r.observer)((function({model:e}){const[t,a]=(0,n.useState)(0),{classes:r}=z(),{jobsManager:l}=(0,h.getRoot)(e),s=(0,i.getSession)(e),{assembly:c,trackAdapter:o,trackData:E,trackName:y,trackType:v,textIndexTrack:Z,textIndexingConf:w}=e,[N,T]=(0,n.useState)();async function S(){if(t!==Y.length-1)return void a(t+1);const n=[`${y.toLowerCase().replaceAll(" ","_")}-${Date.now()}`,s.adminMode?"":"-sessionTrack"].join(""),r=s.assemblyManager.get(c);if((0,i.isSessionWithAddTracks)(s))if(r&&o&&"UNKNOWN"!==o.type){if(s.addTrackConf({trackId:n,type:v,name:y,assemblyNames:[c],adapter:{...o,sequenceAdapter:(0,b.getConf)(r,["sequence","adapter"])}}),e.view.showTrack?.(n),i.isElectron&&Z&&(0,i.isSupportedIndexingAdapter)(o.type)){const e=y+"-index",t={indexingParams:{...w||{attributes:["Name","ID"],exclude:["CDS","exon"]},assemblies:[c],tracks:[n],indexType:"perTrack",name:e,timestamp:(new Date).toISOString()},name:e,cancelCallback:()=>l.abortJob()};l.queueJob(t)}else s.notify("Open a new view, or use the track selector in an existing view, to view this track","info");e.clearData(),(0,i.isSessionModelWithWidgets)(s)&&s.hideWidget(e)}else T("Failed to add track.\nThe configuration of this file is not currently supported.");else T("Unable to add tracks to this model")}function x(){T(void 0),a(t-1)}function C(){switch(t){case 0:return!E;case 1:return!(y&&v&&o?.type&&c);default:return!0}}return n.createElement("div",{className:r.root},n.createElement(m.Z,{className:r.stepper,activeStep:t,orientation:"vertical"},Y.map(((a,l)=>n.createElement(p.Z,{key:a},n.createElement(u.Z,null,a),n.createElement(g.Z,null,function(t){switch(t){case 0:return n.createElement(K,{model:e});case 1:return n.createElement($,{model:e});default:return n.createElement(d.Z,null,"Unknown step")}}(l),n.createElement("div",{className:r.actionsContainer},n.createElement(f.Z,{disabled:0===t,onClick:x,className:r.button},"Back"),n.createElement(f.Z,{disabled:C(),variant:"contained",color:"primary",onClick:S,className:r.button,"data-testid":"addTrackNextButton"},t===Y.length-1?"Add":"Next")),N?n.createElement("div",{className:r.alertContainer},n.createElement(k.Z,{severity:"error"},N)):null))))))})),V=(0,E.ZL)()({textbox:{width:"100%"},submit:{marginTop:25,marginBottom:100,display:"block"}}),X=(0,r.observer)((function({model:e}){const{classes:t}=V(),[a,r]=(0,n.useState)(""),[l,s]=(0,n.useState)();return n.createElement("div",null,l?n.createElement(T.ErrorMessage,{error:l}):null,n.createElement(v.Z,{multiline:!0,rows:10,value:a,onChange:e=>r(e.target.value),placeholder:"Paste track config or array of track configs in JSON format",variant:"outlined",className:t.textbox}),n.createElement(f.Z,{variant:"contained",className:t.submit,onClick:()=>{try{s(void 0);const t=(0,i.getSession)(e),n=JSON.parse(a),r=Array.isArray(n)?n:[n];(0,i.isSessionWithAddTracks)(t)&&(0,i.isSessionModelWithWidgets)(t)&&(r.forEach((e=>t.addTrackConf(e))),r.forEach((t=>e.view.showTrack(t.trackId))),e.clearData(),t.hideWidget(e))}catch(e){console.error(e),s(e)}}},"Submit"))})),ee=(0,r.observer)((function({model:e}){const[t,a]=(0,n.useState)("Default add track workflow"),{pluginManager:r}=(0,i.getEnv)(e),d=r.getAddTrackWorkflowElements(),m={"Default add track workflow":Q,"Add track JSON":X,...Object.fromEntries(d.map((e=>[e.name,e.ReactComponent])))},p=m[t]?t:"Default add track workflow",u=m[p];return n.createElement(n.Fragment,null,n.createElement(l.Z,null,n.createElement(s.Z,{value:p,onChange:e=>a(e.target.value)},Object.keys(m).map((e=>n.createElement(c.Z,{key:e,value:e},e)))),n.createElement(o.Z,null,"Type of add track workflow")),n.createElement("br",null),n.createElement(u,{model:e}))}))}}]);
//# sourceMappingURL=8078.6faf1f01.chunk.js.map