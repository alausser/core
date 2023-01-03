import{o as p,e as b,k as u,y as _,j as x,F as C,l,p as g,q as i,f as y,t as d,G as N,R as V,H as R,i as S,A as E,n as A,I as O,J as M,K as H,L as F,M as U}from"./vendor-e00930f8.js";import{_ as v,I as z,c as j}from"./vendor-inkline-b804054f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();const G={name:"DateTime",props:{separator:{String,default:"<br />"}},data(){return{dateTimeInterval:"",date:"",time:""}},methods:{update(){const e=new Date,r={weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"},a={hour:"2-digit",minute:"2-digit",second:"2-digit"};this.date=e.toLocaleDateString(void 0,r),this.time=e.toLocaleTimeString(void 0,a)}},mounted(){this.update(),this.dateTimeInterval=setInterval(this.update,1e3)},beforeUnmount(){clearInterval(this.dateTimeInterval)}},J=["innerHTML"];function K(e,r,a,s,n,t){return p(),b(C,null,[u(_(n.time),1),x("span",{innerHTML:a.separator},null,8,J),u(_(n.date),1)],64)}const Y=v(G,[["render",K],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/DateTime.vue"]]);const Z={name:"NavItem",props:{to:{type:Object,required:!0}}};function Q(e,r,a,s,n,t){const o=l("i-nav-item");return p(),g(o,{to:a.to,"active-class":"-active",class:"_border _border-color:primary _text-align:center"},{default:i(()=>[y(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}const X=v(Z,[["render",Q],["__scopeId","data-v-079bc5e0"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/NavItem.vue"]]),ee={name:"NavBar",components:{NavItem:X}};function te(e,r,a,s,n,t){const o=l("nav-item"),c=l("i-nav");return p(),g(c,{vertical:"",class:"_align-items:stretch"},{default:i(()=>[d(o,{to:{name:"dash-board"}},{default:i(()=>[u(" DashBoard ")]),_:1}),d(o,{to:{name:"charge-points"}},{default:i(()=>[u(" Ladepunkte ")]),_:1}),d(o,{to:{name:"status"}},{default:i(()=>[u(" Status ")]),_:1})]),_:1})}const re=v(ee,[["render",te],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/NavBar.vue"]]),T=N("mqtt",{state:()=>({topics:{},chartData:{}}),getters:{getWildcardIndexList:e=>(r,a=!1)=>{let s=r;a||(s="^"+r.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$");let n=Object.keys(e.topics).filter(t=>t.match(s));return n.forEach((t,o,c)=>{c[o]=parseInt(t.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""))}),n},getWildcardTopics:e=>(r,a=!1)=>{let s=r;return a||(s="^"+r.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$"),Object.keys(e.topics).filter(n=>n.match(s)).reduce((n,t)=>({...n,[t]:e.topics[t]}),{})},getObjectIds:e=>r=>{function a(s){let n=[];return s!==void 0&&s.forEach(t=>{t.type==r&&n.push(t.id),n=[...n,...a(t.children)]}),n}return a(e.topics["openWB/counter/get/hierarchy"])},getGridId(e){let r=e.topics["openWB/counter/get/hierarchy"];if(r!==void 0&&Object.keys(r).length>0){let a=Object.keys(e.topics["openWB/counter/get/hierarchy"])[0];if(console.debug("getGridId",a,e.topics["openWB/counter/get/hierarchy"][a]),e.topics["openWB/counter/get/hierarchy"][a].type=="counter")return e.topics["openWB/counter/get/hierarchy"][a].id}},getValueBool:e=>r=>{let a=e.topics[r];return a!==void 0?a:!1},getValueString:e=>(r,a="W",s=!1)=>{var n="",t=e.topics[r];if(t===void 0)return`--- ${n}${a}`;s&&(t*=-1);var o=t.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0});return(t>999||t<-999)&&(o=(t/1e3).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),n="k",(t>999999||t<-999999)&&(o=(t/1e6).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),n="M")),`${o} ${n}${a}`}},actions:{initTopic(e,r=void 0){e.includes("#")||e.includes("+")?console.debug("skipping init of wildcard topic:",e):this.addTopic(e,r)},addTopic(e,r){console.debug("addTopic",e,r),this.topics[e]=r,(e.endsWith("home_consumption")||e.endsWith("power")||e.endsWith("soc"))&&r!==void 0&&(this.chartData[e]===void 0&&(this.chartData[e]=[]),this.chartData[e].push(r),this.chartData[e].slice(-128))},removeTopic(e){e.includes("#")||e.includes("+")?(console.debug("expanding wildcard topic for removal:",e),Object.keys(this.getWildcardTopics(e)).forEach(r=>{console.debug("removing wildcardTopic:",r),delete this.topics[r]})):delete this.topics[e]},updateTopic(e,r,a=void 0){const s=(n,t,o)=>t.split(".").reduce((c,m,h)=>c[m]=t.split(".").length===++h?o:c[m]||{},n);e in this.topics?a!=null?s(this.topics[e],a,r):this.topics[e]=r:console.debug("topic not found: ",e)},updateState(e,r,a=void 0){console.debug("updateState:",e,r,a),this.updateTopic(e,r,a)}}});const oe={name:"openwbDisplayCardsApp",components:{RouterView:V,DateTime:Y,NavBar:re},data(){return{client:{connected:!1},connection:{protocol:location.protocol=="https:"?"wss":"ws",host:location.hostname,port:parseInt(location.port)||(location.protocol=="https:"?443:80),endpoint:"/ws",connectTimeout:4e3,reconnectPeriod:4e3},mqttTopicsToSubscribe:["openWB/counter/get/hierarchy","openWB/counter/set/home_consumption","openWB/counter/+/get/power","openWB/bat/config/configured","openWB/bat/get/power","openWB/bat/get/soc","openWB/chargepoint/get/power","openWB/pv/config/configured","openWB/pv/get/power","openWB/chargepoint/+/get/power","openWB/chargepoint/+/get/plug_state","openWB/chargepoint/+/get/charge_state","openWB/chargepoint/+/get/phases_in_use","openWB/chargepoint/+/set/current","openWB/chargepoint/+/config"],mqttStore:T()}},methods:{createConnection(){const{protocol:e,host:r,port:a,endpoint:s,...n}=this.connection,t=`${e}://${r}:${a}${s}`;console.debug("connecting to broker:",t);try{this.client=R.connect(t,n)}catch(o){console.error("mqtt.connect error",o)}this.client.on("connect",()=>{console.debug("Connection succeeded! ClientId: ",this.client.options.clientId)}),this.client.on("error",o=>{console.error("Connection failed",o)}),this.client.on("message",(o,c)=>{if(console.debug(`Received message "${c}" from topic "${o}"`),c.toString().length>0){let m;try{m=JSON.parse(c.toString())}catch{console.debug("Json parsing failed, fallback to string: ",o),m=c.toString()}this.mqttStore.addTopic(o,m)}else this.mqttStore.removeTopic(o)})},doSubscribe(e){e.forEach(r=>{this.mqttStore.initTopic(r)}),this.client.subscribe(e,{},r=>{if(r){console.error("Subscribe to topics error",r);return}})},doUnsubscribe(e){e.forEach(r=>{this.mqttStore.removeTopic(r)}),this.client.unsubscribe(e,r=>{r&&console.error("Unsubscribe error",r)})}},created(){this.createConnection()},mounted(){this.doSubscribe(this.mqttTopicsToSubscribe)},beforeUnmount(){this.doUnsubscribe(this.mqttTopicsToSubscribe)}};function ne(e,r,a,s,n,t){const o=l("DateTime"),c=l("i-column"),m=l("i-row"),h=l("i-container"),f=l("NavBar"),w=l("i-layout-aside"),L=l("RouterView"),q=l("i-layout-content"),I=l("i-layout");return p(),g(I,{vertical:""},{default:i(()=>[d(w,{class:"_position:fixed"},{default:i(()=>[d(h,{fluid:"",class:"_margin-bottom:1"},{default:i(()=>[d(m,{center:""},{default:i(()=>[d(c,null,{default:i(()=>[d(o)]),_:1})]),_:1})]),_:1}),d(f)]),_:1}),d(q,null,{default:i(()=>[d(L)]),_:1})]),_:1})}const ae=v(oe,[["render",ne],["__scopeId","data-v-7a7a37b1"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/App.vue"]]),ie="modulepreload",se=function(e){return"/openWB/web/display/themes/cards/"+e},D={},P=function(r,a,s){if(!a||a.length===0)return r();const n=document.getElementsByTagName("link");return Promise.all(a.map(t=>{if(t=se(t),t in D)return;D[t]=!0;const o=t.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!s)for(let f=n.length-1;f>=0;f--){const w=n[f];if(w.href===t&&(!o||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${c}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":ie,o||(h.as="script",h.crossOrigin=""),h.href=t,document.head.appendChild(h),o)return new Promise((f,w)=>{h.addEventListener("load",f),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())};const ce={name:"DashBoardCard",props:{color:String}};function de(e,r,a,s,n,t){const o=l("i-column"),c=l("i-row"),m=l("i-container"),h=l("i-card");return p(),g(h,{color:a.color},{header:i(()=>[d(m,null,{default:i(()=>[d(c,null,{default:i(()=>[d(o,null,{default:i(()=>[y(e.$slots,"headerLeft",{},void 0,!0)]),_:3}),e.$slots.headerRight?(p(),g(o,{key:0,class:"_text-align:right"},{default:i(()=>[y(e.$slots,"headerRight",{},void 0,!0)]),_:3})):S("v-if",!0)]),_:3})]),_:3})]),default:i(()=>[y(e.$slots,"default",{},void 0,!0)]),_:3},8,["color"])}const le=v(ce,[["render",de],["__scopeId","data-v-aa92abad"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/DashBoardCard.vue"]]);const W={props:{data:{required:!0,type:Array,default(){return[]}},width:{Number,default:250},height:{Number,default:70},gap:{Number,default:2},stroke:{Number,default:3},min:{Number,default:0},max:{Number,default:1},color:{String,default:"var(--color--primary)"},colorNegative:{String,default:void 0}},computed:{highestPoint(){return Math.max(1,this.max,...this.slicedData)},lowestPoint(){return Math.min(0,this.min,...this.slicedData)},maxPoints(){return Math.floor(this.width/(this.stroke+this.gap))},slicedData(){return this.data.slice(-this.maxPoints)},zeroHeight(){return this.height-(0-this.lowestPoint)/(this.highestPoint-this.lowestPoint)*this.height},coordinates(){const e=[];return this.slicedData.forEach((r,a)=>{const s=a*this.width/this.maxPoints,n=this.height-(r-this.lowestPoint)/(this.highestPoint-this.lowestPoint)*this.height;e.push({x:s,y:n})}),e},bars(){const e=[];return this.coordinates.forEach(r=>{const a=r.x,s=r.y,n=this.stroke,t=Math.min(s,this.zeroHeight),o=Math.abs(s-this.zeroHeight),c=s>this.zeroHeight;e.push({x:a,y:t,width:n,height:o,negative:c})}),e},fillEndPath(){return`V ${this.height} L 4 ${this.height} Z`}}},$=()=>{O(e=>({"fc7172b1-color":e.color,"fc7172b1-colorNegative":e.colorNegative}))},k=W.setup;W.setup=k?(e,r)=>($(),k(e,r)):$;const ue=W,he=["viewBox"],pe=["x","y","width","height"],me=["d"];function _e(e,r,a,s,n,t){return p(),b("svg",{class:"spark-line",viewBox:`0 0 ${a.width} ${a.height}`,width:"100%",preserveAspectRatio:"xMinYMin"},[(p(!0),b(C,null,E(t.bars,o=>(p(),b("rect",{key:o.x,x:o.x,y:o.y,width:o.width,height:o.height,class:A(a.colorNegative&&o.negative?"negative":"")},null,10,pe))),128)),x("path",{class:"zero-line",d:`M 0 ${t.zeroHeight} L ${a.width} ${t.zeroHeight}`},null,8,me)],8,he)}const ge=v(ue,[["render",_e],["__scopeId","data-v-fc7172b1"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/SparkLine.vue"]]);const fe={name:"DashBoard",data(){return{mqttStore:T()}},components:{DashBoardCard:le,SparkLine:ge},computed:{gridPower(){let e=0;return e=this.mqttStore.getGridId,e===void 0?"---":this.mqttStore.getValueString(`openWB/counter/${e}/get/power`,"W")},gridPowerChartData(){let e=0;return e=this.mqttStore.getGridId,e===void 0?[]:this.mqttStore.chartData[`openWB/counter/${e}/get/power`]},homePower(){return this.mqttStore.getValueString("openWB/counter/set/home_consumption","W")},homePowerChartData(){return this.mqttStore.chartData["openWB/counter/set/home_consumption"]},batteryConfigured(){return this.mqttStore.getValueBool("openWB/bat/config/configured")},batteryPower(){return this.mqttStore.getValueString("openWB/bat/get/power","W")},batteryPowerChartData(){return this.mqttStore.chartData["openWB/bat/get/power"]},batterySoc(){return this.mqttStore.getValueString("openWB/bat/get/soc","%")},batterySocChartData(){return this.mqttStore.chartData["openWB/bat/get/soc"]},chargePointSumPower(){return this.mqttStore.getValueString("openWB/chargepoint/get/power","W")},chargePointSumPowerChartData(){return this.mqttStore.chartData["openWB/chargepoint/get/power"]},pvConfigured(){return this.mqttStore.getValueBool("openWB/pv/config/configured")},pvPower(){return this.mqttStore.getValueString("openWB/pv/get/power","W",!0)},pvPowerChartData(){return this.mqttStore.chartData["openWB/pv/get/power"].map(e=>e*-1)}}},ve={class:"dash-board-card-wrapper"};function we(e,r,a,s,n,t){const o=l("spark-line"),c=l("dash-board-card");return p(),b("div",ve,[d(c,{color:"danger"},{headerLeft:i(()=>[u(" EVU ")]),headerRight:i(()=>[u(_(t.gridPower),1)]),default:i(()=>[d(o,{color:"var(--color--danger)",colorNegative:"var(--color--success)",data:t.gridPowerChartData},null,8,["data"])]),_:1}),d(c,{color:"light"},{headerLeft:i(()=>[u(" Hausverbrauch ")]),headerRight:i(()=>[u(_(t.homePower),1)]),default:i(()=>[d(o,{color:"var(--color--light)",data:t.homePowerChartData},null,8,["data"])]),_:1}),t.batteryConfigured?(p(),g(c,{key:0,color:"warning"},{headerLeft:i(()=>[u(" Speicher ")]),headerRight:i(()=>[u(_(t.batteryPower),1)]),default:i(()=>[d(o,{color:"var(--color--warning)",data:t.batteryPowerChartData},null,8,["data"])]),_:1})):S("v-if",!0),t.batteryConfigured?(p(),g(c,{key:1,color:"warning"},{headerLeft:i(()=>[u(" Speicher SoC ")]),headerRight:i(()=>[u(_(t.batterySoc),1)]),default:i(()=>[d(o,{color:"var(--color--warning)",data:t.batterySocChartData,min:0,max:100},null,8,["data"])]),_:1})):S("v-if",!0),d(c,{color:"primary"},{headerLeft:i(()=>[u(" Ladepunkte ")]),headerRight:i(()=>[u(_(t.chargePointSumPower),1)]),default:i(()=>[d(o,{color:"var(--color--primary)",data:t.chargePointSumPowerChartData},null,8,["data"])]),_:1}),t.pvConfigured?(p(),g(c,{key:2,color:"success"},{headerLeft:i(()=>[u(" PV ")]),headerRight:i(()=>[u(_(t.pvPower),1)]),default:i(()=>[d(o,{color:"var(--color--success)",data:t.pvPowerChartData,inverted:!0},null,8,["data"])]),_:1})):S("v-if",!0)])}const be=v(fe,[["render",we],["__scopeId","data-v-4e1e3ea5"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/views/DashBoardView.vue"]]),ye=M({history:H("/openWB/web/display/themes/cards/"),routes:[{path:"/",alias:"/DashBoard",name:"dash-board",component:be},{path:"/ChargePoints",name:"charge-points",component:()=>P(()=>import("./ChargePointsView-e56ed97e.js"),["assets/ChargePointsView-e56ed97e.js","assets/vendor-fortawesome-680ad293.js","assets/vendor-e00930f8.js","assets/vendor-inkline-b804054f.js","assets/vendor-inkline-7b5371f4.css","assets/ChargePointsView-79233e53.css"])},{path:"/Status",name:"status",component:()=>P(()=>import("./StatusView-d9291bd4.js"),["assets/StatusView-d9291bd4.js","assets/vendor-inkline-b804054f.js","assets/vendor-e00930f8.js","assets/vendor-inkline-7b5371f4.css"])}]});const B=F(ae);B.use(U());B.use(ye);B.use(z,{colorMode:"dark",components:j});B.mount("#app");export{le as D,ge as S,T as u};
