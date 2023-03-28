import{o as m,e as S,k as g,x as y,j as T,F as V,H as $,l as d,n as C,p as r,f as I,i as b,s as a,z as x,I as E,R as q,J as N,K as O,L as A,M as F,N as R,O as z,P as U}from"./vendor-835210d3.js";import{_ as v,I as M,c as j}from"./vendor-inkline-02fa0df0.js";import{l as G,f as H,a as J,b as K,c as Z,F as Q}from"./vendor-fortawesome-f680d230.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const X={name:"DateTime",props:{separator:{String,default:"<br />"}},data(){return{dateTimeInterval:"",date:"",time:""}},methods:{update(){const e=new Date,t={weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"},o={hour:"2-digit",minute:"2-digit",second:"2-digit"};this.date=e.toLocaleDateString(void 0,t),this.time=e.toLocaleTimeString(void 0,o)}},mounted(){this.update(),this.dateTimeInterval=setInterval(this.update,1e3)},beforeUnmount(){clearInterval(this.dateTimeInterval)}},Y=["innerHTML"];function ee(e,t,o,s,i,n){return m(),S(V,null,[g(y(i.time),1),T("span",{innerHTML:o.separator},null,8,Y),g(y(i.date),1)],64)}const te=v(X,[["render",ee],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/DateTime.vue"]]),B=$("mqtt",{state:()=>({settings:{parentChargePoint1:void 0,parentChargePoint2:void 0},topics:{},chartData:{}}),getters:{getChargePointFilter:e=>{let t=[];return e.settings.parentChargePoint1!==void 0&&t.push(e.settings.parentChargePoint1),e.settings.parentChargePoint2!==void 0&&t.push(e.settings.parentChargePoint2),t},getWildcardIndexList:e=>(t,o=!1)=>{let s=t;o||(s="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$");let i=Object.keys(e.topics).filter(n=>n.match(s));return i.forEach((n,c,l)=>{l[c]=parseInt(n.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""))}),i},getWildcardTopics:e=>(t,o=!1)=>{let s=t;return o||(s="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$"),Object.keys(e.topics).filter(i=>i.match(s)).reduce((i,n)=>({...i,[n]:e.topics[n]}),{})},getObjectIds:e=>t=>{function o(s){let i=[];return s!==void 0&&s.forEach(n=>{n.type==t&&i.push(n.id),i=[...i,...o(n.children)]}),i}return o(e.topics["openWB/counter/get/hierarchy"])},getValueBool:e=>(t,o=!1)=>{let s=e.topics[t];return s!==void 0?s:(console.warn("topic not found! using default",t,o),o)},getValueString:e=>(t,o="W",s=!1,i="---")=>{var n="",c=e.topics[t];if(c===void 0)console.warn("topic not found! using default",t,i),l=i;else{s&&(c*=-1);var l=c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0});(c>999||c<-999)&&(l=(c/1e3).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),n="k",(c>999999||c<-999999)&&(l=(c/1e6).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),n="M"))}return`${l} ${n}${o}`},getChartData:e=>t=>e.chartData[t]===void 0?[]:e.chartData[t],getThemeConfiguration:e=>{if("openWB/optional/int_display/theme"in e.topics&&e.topics["openWB/optional/int_display/theme"]!==void 0&&"configuration"in e.topics["openWB/optional/int_display/theme"])return e.topics["openWB/optional/int_display/theme"].configuration},getDashBoardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_view:!0},getChargePointsEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_charge_points_view:!0},getStateEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_status_view:!0},getGridCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_grid:!0},getHomeCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_home_consumption:!0},getBatteryCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_battery_sum:!0},getChargePointsCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_charge_point_sum:!0},getPvCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_inverter_sum:!0},getLockChanges(e){return e.getThemeConfiguration?e.getThemeConfiguration.lock_changes:!0},getGridId(e){let t=e.topics["openWB/counter/get/hierarchy"];if(t!==void 0&&Object.keys(t).length>0){let o=Object.keys(e.topics["openWB/counter/get/hierarchy"])[0];if(console.debug("getGridId",o,e.topics["openWB/counter/get/hierarchy"][o]),e.topics["openWB/counter/get/hierarchy"][o].type=="counter")return e.topics["openWB/counter/get/hierarchy"][o].id}},getGridPower(e){let t=e.getGridId;return t===void 0?"---":e.getValueString(`openWB/counter/${t}/get/power`,"W")},getGridPowerChartData(e){let t=e.getGridId;return t===void 0?[]:e.getChartData(`openWB/counter/${t}/get/power`)},getHomePower(e){return e.getValueString("openWB/counter/set/home_consumption","W")},getHomePowerChartData(e){return e.getChartData("openWB/counter/set/home_consumption")},getBatteryConfigured(e){return e.getValueBool("openWB/bat/config/configured")},getBatteryPower(e){return e.getValueString("openWB/bat/get/power","W")},getBatteryPowerChartData(e){return e.getChartData("openWB/bat/get/power")},getBatterySoc(e){return e.getValueString("openWB/bat/get/soc","%")},getBatterySocChartData(e){return e.getChartData("openWB/bat/get/soc")},getPvConfigured(e){return e.getValueBool("openWB/pv/config/configured")},getPvPower(e){return e.getValueString("openWB/pv/get/power","W",!0)},getPvPowerChartData(e){return e.getChartData("openWB/pv/get/power").map(t=>t*-1)},getChargePointSumPower(e){return e.getValueString("openWB/chargepoint/get/power","W")},getChargePointSumPowerChartData(e){return e.getChartData("openWB/chargepoint/get/power")},getChargePointIds(e){let t=e.getObjectIds("cp"),o=this.getChargePointFilter;return o.length>0?(console.debug("charge points are filtered!",t,o),t.filter(s=>o.includes(s))):t},getChargePointName(e){return t=>e.topics[`openWB/chargepoint/${t}/config`]!==void 0?e.topics[`openWB/chargepoint/${t}/config`].name:"---"},getChargePointPower(e){return t=>e.getValueString(`openWB/chargepoint/${t}/get/power`)},getChargePointPowerChartData(e){return t=>e.getChartData(`openWB/chargepoint/${t}/get/power`)},getChargePointSetCurrent(e){return t=>e.getValueString(`openWB/chargepoint/${t}/set/current`,"A")},getChargePointPhasesInUse(e){return t=>{const o=["/","①","②","③"],s=e.topics[`openWB/chargepoint/${t}/get/phases_in_use`];return s!==void 0&&s>=0&&s<o.length?o[e.topics[`openWB/chargepoint/${t}/get/phases_in_use`]]:(console.warn("topic not found!",`openWB/chargepoint/${t}/get/phases_in_use`),"?")}},getChargePointPlugState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/plug_state`)},getChargePointChargeState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/charge_state`)},getChargePointManualLock(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/set/manual_lock`)},getChargePointVehicleChangePermitted(e){return t=>Array.isArray(e.topics[`openWB/chargepoint/${t}/set/change_ev_permitted`])?e.topics[`openWB/chargepoint/${t}/set/change_ev_permitted`][0]:!0},getChargePointConnectedVehicleConfig(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/config`]},getChargePointConnectedVehicleChargeMode(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.translateChargeMode(e.getChargePointConnectedVehicleConfig(t).chargemode)}},getChargePointConnectedVehiclePriority(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).priority}},getChargePointConnectedVehicleInfo(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`]},getChargePointConnectedVehicleId(e){return t=>{if(e.getChargePointConnectedVehicleInfo(t))return e.getChargePointConnectedVehicleInfo(t).id}},getChargePointConnectedVehicleChargeTemplateIndex(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).charge_template}},getChargePointConnectedVehicleChargeTemplate(e){return t=>{let o=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.topics[`openWB/vehicle/template/charge_template/${o}`]}},getChargePointConnectedVehicleEvTemplate(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).ev_template}},getChargePointConnectedVehicleName(e){return t=>{if(e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`])return e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`].name}},getChargePointConnectedVehicleSoc(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/soc`]},getChargePointConnectedVehicleTimeChargingActive(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).time_charging.active}},getChargePointConnectedVehicleTimeChargingRunning(e){return t=>{let o=e.getChargePointConnectedVehicleConfig(t).time_charging_in_use;return o!==void 0?o:!1}},getChargePointConnectedVehicleInstantChargingCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.current}},getChargePointConnectedVehicleInstantChargingLimit(e){return t=>e.getChargePointConnectedVehicleChargeTemplate(t)?e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.limit:{selected:void 0}},getVehicleList(e){return e.getWildcardTopics("openWB/vehicle/+/name")},getVehicleSocConfigured(e){return t=>e.topics[`openWB/vehicle/${t}/soc_module/config`].type!=null},getVehicleFaultState(e){return t=>e.topics[`openWB/vehicle/${t}/get/fault_state`]?e.topics[`openWB/vehicle/${t}/get/fault_state`]:0}},actions:{updateSetting(e,t){e in this.settings&&(this.settings[e]=t)},initTopic(e,t=void 0){e.includes("#")||e.includes("+")?console.debug("skipping init of wildcard topic:",e):this.addTopic(e,t)},addTopic(e,t){console.debug("addTopic",e,t),this.topics[e]=t,(e.endsWith("home_consumption")||e.endsWith("power")||e.endsWith("soc"))&&t!==void 0&&t!==null&&(this.chartData[e]===void 0&&(this.chartData[e]=[]),this.chartData[e].push(t),this.chartData[e].slice(-128))},removeTopic(e){e.includes("#")||e.includes("+")?(console.debug("expanding wildcard topic for removal:",e),Object.keys(this.getWildcardTopics(e)).forEach(t=>{console.debug("removing wildcardTopic:",t),delete this.topics[t]})):delete this.topics[e]},updateTopic(e,t,o=void 0){const s=(i,n,c)=>n.split(".").reduce((l,f,u)=>l[f]=n.split(".").length===++u?c:l[f]||{},i);e in this.topics?o!=null?s(this.topics[e],o,t):this.topics[e]=t:console.debug("topic not found: ",e)},updateState(e,t,o=void 0){console.debug("updateState:",e,t,o),this.updateTopic(e,t,o)},chargeModeList(){var e=[{id:"instant_charging"},{id:"pv_charging"},{id:"scheduled_charging"},{id:"standby"},{id:"stop"}];return e.forEach(t=>{t.label=this.translateChargeMode(t.id).label,t.class=this.translateChargeMode(t.id).class}),e},translateChargeMode(e){switch(e){case"instant_charging":return{mode:e,label:"Sofort",class:"danger"};case"pv_charging":return{mode:e,label:"PV",class:"success"};case"scheduled_charging":return{mode:e,label:"Zielladen",class:"primary"};case"time_charging":return{mode:e,label:"Zeitladen",class:"warning"};case"standby":return{mode:e,label:"Standby",class:"secondary"};case"stop":return{mode:e,label:"Stop",class:"dark"};default:return console.warn("unknown charge mode:",e),{mode:e,label:e,class:e}}},checkChangesLockCode(e){return!!(this.getThemeConfiguration&&this.getThemeConfiguration.lock_changes_code==e)}}});const ne={name:"NavItem",props:{to:{type:Object,required:!0}}};function oe(e,t,o,s,i,n){const c=d("i-nav-item");return m(),C(c,{to:o.to,"active-class":"-active",class:"_border _border-color:primary _text-align:center"},{default:r(()=>[I(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}const re=v(ne,[["render",oe],["__scopeId","data-v-079bc5e0"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/NavItem.vue"]]),ie={name:"NavBar",components:{NavItem:re},data(){return{mqttStore:B()}}};function ae(e,t,o,s,i,n){const c=d("nav-item"),l=d("i-nav");return m(),C(l,{vertical:"",class:"_align-items:stretch"},{default:r(()=>[i.mqttStore.getDashBoardEnabled?(m(),C(c,{key:0,to:{name:"dash-board"}},{default:r(()=>[g(" DashBoard ")]),_:1})):b("v-if",!0),i.mqttStore.getChargePointsEnabled?(m(),C(c,{key:1,to:{name:"charge-points"}},{default:r(()=>[g(" Ladepunkte ")]),_:1})):b("v-if",!0),i.mqttStore.getStateEnabled?(m(),C(c,{key:2,to:{name:"status"}},{default:r(()=>[g(" Status ")]),_:1})):b("v-if",!0)]),_:1})}const ce=v(ie,[["render",ae],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/NavBar.vue"]]);G.add(H,J,K,Z);const se={name:"LockNavItem",props:{},data(){return{mqttStore:B(),modalPinEntryVisible:!1,code:""}},components:{FontAwesomeIcon:Q},computed:{changesLocked:{get(){return this.mqttStore.settings.changesLocked},set(e){this.mqttStore.settings.changesLocked=e}},modalPinEntryColor(){return"warning"}},methods:{toggleChangesLock(){console.log("toggleChangesLock"),this.changesLocked?this.unlockChanges():this.changesLocked=!0},unlockChanges(){this.clearCode(),this.modalPinEntryVisible=!0},abortUnlockChanges(){this.modalPinEntryVisible=!1},checkUnlockCode(){this.mqttStore.checkChangesLockCode(this.code)?(this.changesLocked=!1,this.modalPinEntryVisible=!1):console.log("check unlock code failed!")},addCodeDigit(e){this.code.length<8&&(this.code+=e)},removeCodeDigit(){this.code=this.code.slice(0,-1)},clearCode(){this.code=""}},mounted(){this.changesLocked=!0}};function le(e,t,o,s,i,n){const c=d("FontAwesomeIcon"),l=d("i-button"),f=d("i-input"),u=d("i-column"),p=d("i-row"),_=d("i-container"),k=d("i-modal");return m(),S(V,null,[i.mqttStore.getLockChanges?(m(),C(l,{key:0,onClick:t[0]||(t[0]=h=>n.toggleChangesLock()),class:"_padding-left:0 _padding-right:0 _margin-bottom:1",size:"lg",block:"",color:this.changesLocked?"danger":"success"},{default:r(()=>[a(c,{"fixed-width":"",icon:this.changesLocked?["fas","fa-lock"]:["fas","fa-lock-open"],class:x(this.changesLocked?"_color:danger-80":"_color:success-80")},null,8,["icon","class"])]),_:1},8,["color"])):b("v-if",!0),b(" modals "),(m(),C(E,{to:"body"},[a(k,{modelValue:i.modalPinEntryVisible,"onUpdate:modelValue":t[12]||(t[12]=h=>i.modalPinEntryVisible=h),color:n.modalPinEntryColor},{header:r(()=>[g(" Bitte den PIN zu Freigabe von Änderungen eingeben. ")]),footer:r(()=>[a(_,null,{default:r(()=>[a(p,null,{default:r(()=>[b(" charge point data on left side "),a(u,null,{default:r(()=>[a(l,{color:"danger",onClick:n.abortUnlockChanges},{default:r(()=>[g(" Zurück ")]),_:1},8,["onClick"])]),_:1}),a(u,{class:"_text-align:right"},{default:r(()=>[a(l,{color:"success",onClick:n.checkUnlockCode},{default:r(()=>[g(" OK ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),default:r(()=>[a(_,null,{default:r(()=>[a(p,{center:"",class:"_padding-bottom:1"},{default:r(()=>[a(u,null,{default:r(()=>[a(f,{modelValue:i.code,"onUpdate:modelValue":t[1]||(t[1]=h=>i.code=h),placeholder:"****",readonly:"",size:"lg",type:"password",class:"_text-align:center"},null,8,["modelValue"])]),_:1})]),_:1}),a(p,{center:"",class:"_padding-bottom:1"},{default:r(()=>[a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[2]||(t[2]=h=>n.addCodeDigit("1"))},{default:r(()=>[g("1")]),_:1})]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[3]||(t[3]=h=>n.addCodeDigit("2"))},{default:r(()=>[g("2")]),_:1})]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[4]||(t[4]=h=>n.addCodeDigit("3"))},{default:r(()=>[g("3")]),_:1})]),_:1})]),_:1}),a(p,{center:"",class:"_padding-bottom:1"},{default:r(()=>[a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[5]||(t[5]=h=>n.addCodeDigit("4"))},{default:r(()=>[g("4")]),_:1})]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[6]||(t[6]=h=>n.addCodeDigit("5"))},{default:r(()=>[g("5")]),_:1})]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[7]||(t[7]=h=>n.addCodeDigit("6"))},{default:r(()=>[g("6")]),_:1})]),_:1})]),_:1}),a(p,{center:"",class:"_padding-bottom:1"},{default:r(()=>[a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[8]||(t[8]=h=>n.addCodeDigit("7"))},{default:r(()=>[g("7")]),_:1})]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[9]||(t[9]=h=>n.addCodeDigit("8"))},{default:r(()=>[g("8")]),_:1})]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[10]||(t[10]=h=>n.addCodeDigit("9"))},{default:r(()=>[g("9")]),_:1})]),_:1})]),_:1}),a(p,{center:""},{default:r(()=>[a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:n.clearCode},{default:r(()=>[a(c,{"fixed-width":"",icon:["fas","fa-eraser"]})]),_:1},8,["onClick"])]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:t[11]||(t[11]=h=>n.addCodeDigit("0"))},{default:r(()=>[g("0")]),_:1})]),_:1}),a(u,{class:"_flex-grow:0"},{default:r(()=>[a(l,{size:"lg",class:"pinButton",onClick:n.removeCodeDigit},{default:r(()=>[a(c,{"fixed-width":"",icon:["fas","fa-delete-left"]})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","color"])]))],64)}const ue=v(se,[["render",le],["__scopeId","data-v-24a0d24c"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/LockNavItem.vue"]]);const de={name:"openwbDisplayCardsApp",components:{RouterView:q,DateTime:te,NavBar:ce,LockNavItem:ue},data(){return{client:{connected:!1},connection:{protocol:location.protocol=="https:"?"wss":"ws",host:location.hostname,port:parseInt(location.port)||(location.protocol=="https:"?443:80),endpoint:"/ws",connectTimeout:4e3,reconnectPeriod:4e3},mqttTopicsToSubscribe:["openWB/optional/int_display/theme","openWB/counter/get/hierarchy","openWB/counter/set/home_consumption","openWB/counter/+/get/power","openWB/bat/config/configured","openWB/bat/get/power","openWB/bat/get/soc","openWB/chargepoint/get/power","openWB/pv/config/configured","openWB/pv/get/power","openWB/chargepoint/+/get/power","openWB/chargepoint/+/get/plug_state","openWB/chargepoint/+/get/charge_state","openWB/chargepoint/+/get/phases_in_use","openWB/chargepoint/+/set/current","openWB/chargepoint/+/set/manual_lock","openWB/chargepoint/+/set/change_ev_permitted","openWB/chargepoint/+/config","openWB/chargepoint/+/get/connected_vehicle/+","openWB/vehicle/+/name","openWB/vehicle/+/soc_module/config","openWB/vehicle/+/get/fault_state","openWB/vehicle/template/charge_template/#"],mqttStore:B()}},computed:{changesLocked(){return this.mqttStore.getLockChanges&&this.mqttStore.settings.changesLocked}},methods:{createConnection(){const{protocol:e,host:t,port:o,endpoint:s,...i}=this.connection,n=`${e}://${t}:${o}${s}`;console.debug("connecting to broker:",n);try{this.client=N.connect(n,i)}catch(c){console.error("mqtt.connect error",c)}this.client.on("connect",()=>{console.debug("Connection succeeded! ClientId: ",this.client.options.clientId)}),this.client.on("error",c=>{console.error("Connection failed",c)}),this.client.on("message",(c,l)=>{if(console.debug(`Received message "${l}" from topic "${c}"`),l.toString().length>0){let f;try{f=JSON.parse(l.toString())}catch{console.debug("Json parsing failed, fallback to string: ",c),f=l.toString()}this.mqttStore.addTopic(c,f)}else this.mqttStore.removeTopic(c)})},doSubscribe(e){e.forEach(t=>{this.mqttStore.initTopic(t)}),this.client.subscribe(e,{},t=>{if(t){console.error("Subscribe to topics error",t);return}})},doUnsubscribe(e){e.forEach(t=>{this.mqttStore.removeTopic(t)}),this.client.unsubscribe(e,t=>{t&&console.error("Unsubscribe error",t)})},doPublish(e,t,o=!0,s=2){console.debug("doPublish",e,t);let i={qos:s,retain:o};this.client.publish(e,JSON.stringify(t),i,n=>{n&&console.error("Publish error",n)})},sendTopicToBroker(e,t=void 0){let o=e.replace("openWB/","openWB/set/");t===void 0&&(t=this.mqttStore.topics[e]),this.doPublish(o,t)}},created(){this.createConnection()},mounted(){let e=window.location.search;e!=""&&(console.debug("search",e),new URLSearchParams(e).forEach((o,s)=>{this.mqttStore.updateSetting(s,parseInt(o))})),this.doSubscribe(this.mqttTopicsToSubscribe)},beforeUnmount(){this.doUnsubscribe(this.mqttTopicsToSubscribe)}};function ge(e,t,o,s,i,n){const c=d("DateTime"),l=d("i-column"),f=d("i-row"),u=d("i-container"),p=d("LockNavItem"),_=d("NavBar"),k=d("i-layout-aside"),h=d("RouterView"),L=d("i-layout-content"),D=d("i-layout");return m(),C(D,{vertical:""},{default:r(()=>[a(k,{class:"_position:fixed"},{default:r(()=>[a(u,{fluid:"",class:"_margin-bottom:1"},{default:r(()=>[a(f,{center:""},{default:r(()=>[a(l,null,{default:r(()=>[a(c)]),_:1})]),_:1})]),_:1}),a(p),a(_,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1}),a(L,null,{default:r(()=>[a(h,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1})]),_:1})}const he=v(de,[["render",ge],["__scopeId","data-v-7a7a37b1"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/App.vue"]]),pe="modulepreload",fe=function(e){return"/openWB/web/display/themes/cards/"+e},P={},W=function(t,o,s){if(!o||o.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=fe(n),n in P)return;P[n]=!0;const c=n.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!s)for(let p=i.length-1;p>=0;p--){const _=i[p];if(_.href===n&&(!c||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":pe,c||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),c)return new Promise((p,_)=>{u.addEventListener("load",p),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},me="/openWB/web/display/themes/cards/openWB_logo_dark.png";const _e={name:"WelcomeView",data(){return{mqttStore:B()}},computed:{firstView(){if(this.mqttStore.getThemeConfiguration){if(this.mqttStore.getThemeConfiguration.enable_dashboard_view)return"dash-board";if(this.mqttStore.getThemeConfiguration.enable_charge_points_view)return"charge-points";if(this.mqttStore.getThemeConfiguration.enable_status_view)return"status"}}},methods:{selectFirstRoute(){this.firstView?this.$router.push({name:this.firstView}):console.warn("no router view enabled, check your configuration!")}},mounted(){setTimeout(this.selectFirstRoute,3e3)}},Ce=e=>(O("data-v-0939a750"),e=e(),A(),e),be=Ce(()=>T("img",{class:"logo",src:me},null,-1));function ve(e,t,o,s,i,n){const c=d("i-card"),l=d("i-column"),f=d("i-row"),u=d("i-container");return m(),C(u,null,{default:r(()=>[a(f,{center:"",middle:""},{default:r(()=>[a(l,null,{default:r(()=>[a(c,{color:"primary"},{header:r(()=>[g(" Cards Theme ")]),default:r(()=>[be]),_:1})]),_:1})]),_:1})]),_:1})}const Be=v(_e,[["render",ve],["__scopeId","data-v-0939a750"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/views/WelcomeView.vue"]]),we=F({history:R("/openWB/web/display/themes/cards/"),routes:[{path:"/",name:"welcome",component:Be},{path:"/DashBoard",name:"dash-board",component:()=>W(()=>import("./DashBoardView-cb29c759.js"),["assets/DashBoardView-cb29c759.js","assets/SparkLine-77d57d0f.js","assets/vendor-835210d3.js","assets/vendor-inkline-02fa0df0.js","assets/vendor-inkline-1e355528.css","assets/SparkLine-36150265.css","assets/vendor-fortawesome-f680d230.js","assets/DashBoardView-1e9018f7.css"])},{path:"/ChargePoints",name:"charge-points",component:()=>W(()=>import("./ChargePointsView-2e361415.js"),["assets/ChargePointsView-2e361415.js","assets/SparkLine-77d57d0f.js","assets/vendor-835210d3.js","assets/vendor-inkline-02fa0df0.js","assets/vendor-inkline-1e355528.css","assets/SparkLine-36150265.css","assets/vendor-fortawesome-f680d230.js","assets/ChargePointsView-0c9bad8a.css"])},{path:"/Status",name:"status",component:()=>W(()=>import("./StatusView-6480b55a.js"),["assets/StatusView-6480b55a.js","assets/vendor-inkline-02fa0df0.js","assets/vendor-835210d3.js","assets/vendor-inkline-1e355528.css","assets/vendor-fortawesome-f680d230.js"])}]});const w=z(he);w.use(U());w.use(we);w.use(M,{colorMode:"dark",components:j});w.mount("#app");export{B as u};
