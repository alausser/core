import{u as E}from"./index-f44304ea.js";import{D as j,S as D}from"./SparkLine-77d57d0f.js";import{l as R,j as Z,k as O,m as K,n as X,f as G,a as H,o as J,h as Q,p as Y,q as $,r as ee,s as te,t as ne,u as oe,F as ie}from"./vendor-fortawesome-f680d230.js";import{l as g,o as s,e as v,j as le,F as L,A as B,i as h,s as t,p as n,n as f,k as r,x as _,z as q}from"./vendor-835210d3.js";import{_ as ae}from"./vendor-inkline-02fa0df0.js";R.add(Z,O,K,X,G,H,J,Q,Y,$,ee,te,ne,oe);const re={name:"ChargePointsView",data(){return{mqttStore:E(),modalChargePointSettingsVisible:!1,modalChargePointSettingsId:0,modalActiveTab:"tab-general"}},props:{changesLocked:{required:!1,type:Boolean,default:!1}},components:{DashBoardCard:j,SparkLine:D,FontAwesomeIcon:ie},computed:{vehicleList(){let l=this.mqttStore.getVehicleList;var o=[];return Object.keys(l).forEach(a=>{let x=parseInt(a.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""));o.push({id:x,label:l[a]})}),o}},methods:{toggleChargePointSettings(l){if(console.log(l),this.changesLocked){console.debug("toggleChargePointSettings: changes locked!");return}this.modalChargePointSettingsId=l,this.modalChargePointSettingsVisible=!0},toggleChargePointManualLock(l){if(this.changesLocked){console.debug("toggleChargePointManualLock: changes locked!");return}this.$root.sendTopicToBroker(`openWB/chargepoint/${l}/set/manual_lock`,!this.mqttStore.getValueBool(`openWB/chargepoint/${l}/set/manual_lock`))},getChargePointConnectedVehicle(l){return{id:this.mqttStore.getChargePointConnectedVehicleId(l),label:this.mqttStore.getChargePointConnectedVehicleName(l)}},setChargePointConnectedVehicle(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehicle: changes locked!");return}o.id!=this.mqttStore.getChargePointConnectedVehicleId(l)&&this.$root.sendTopicToBroker(`openWB/chargepoint/${l}/config/ev`,o.id)},setChargePointConnectedVehicleChargeMode(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehicleChargeMode: changes locked!");return}if(o.id!=this.mqttStore.getChargePointConnectedVehicleChargeMode(l)){var a=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);console.log(`openWB/vehicle/template/charge_template/${a}/chargemode/selected`,o),this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${a}/chargemode/selected`,o)}},setChargePointConnectedVehiclePriority(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehiclePriority: changes locked!");return}if(o.id!=this.mqttStore.getChargePointConnectedVehiclePriority(l)){var a=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);console.log(`openWB/vehicle/template/charge_template/${a}/prio`,o),this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${a}/prio`,o)}},setChargePointConnectedVehicleTimeChargingActive(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehicleTimeChargingActive: changes locked!");return}if(o.id!=this.mqttStore.getChargePointConnectedVehicleTimeChargingActive(l)){var a=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);console.log(`openWB/vehicle/template/charge_template/${a}/time_charging/active`,o),this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${a}/time_charging/active`,o)}},setChargePointConnectedVehicleInstantChargingCurrent(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehicleInstantChargingCurrent: changes locked!");return}if(o&&o!=this.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(l)){var a=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);console.log(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/current`,parseFloat(o)),this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/current`,parseFloat(o))}},setChargePointConnectedVehicleInstantChargingLimit(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehicleInstantChargingLimit: changes locked!");return}if(o&&o!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l).selected){var a=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);console.log(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/limit/selected`,o),this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/limit/selected`,o)}},setChargePointConnectedVehicleInstantChargingLimitSoc(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehicleInstantChargingLimitSoc: changes locked!");return}if(o&&o!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l).soc){var a=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);console.log(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/limit/soc`,parseInt(o)),this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/limit/soc`,parseInt(o))}},setChargePointConnectedVehicleInstantChargingLimitAmount(l,o){if(this.changesLocked){console.debug("setChargePointConnectedVehicleInstantChargingLimitAmount: changes locked!");return}if(o&&o!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l).amount){var a=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(l);console.log(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/limit/amount`,o),this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${a}/chargemode/instant_charging/limit/amount`,o)}}}},ge={class:"charge-points-card-wrapper"},ce={key:0};function se(l,o,a,x,e,c){const m=g("font-awesome-icon"),P=g("i-badge"),S=g("i-button"),u=g("i-column"),p=g("i-row"),y=g("spark-line"),W=g("i-container"),z=g("dash-board-card"),V=g("i-tab-title"),C=g("i-form-label"),w=g("i-select"),d=g("i-form-group"),A=g("i-select-option"),T=g("i-toggle"),k=g("i-form"),I=g("i-tab"),b=g("i-number-input"),M=g("i-button-group"),F=g("i-tabs"),U=g("i-modal");return s(),v(L,null,[le("div",ge,[(s(!0),v(L,null,B(e.mqttStore.getChargePointIds,i=>(s(),f(z,{key:i,color:"primary"},{headerLeft:n(()=>[r(_(e.mqttStore.getChargePointName(i)),1)]),headerRight:n(()=>[t(P,{size:"lg"},{default:n(()=>[t(m,{"fixed-width":"",icon:e.mqttStore.getChargePointPlugState(i)?e.mqttStore.getChargePointChargeState(i)?["fas","fa-plug-circle-bolt"]:["fas","fa-plug-circle-check"]:["fas","fa-plug-circle-xmark"],class:q(e.mqttStore.getChargePointPlugState(i)?e.mqttStore.getChargePointChargeState(i)?["_color:success"]:"_color:warning":"_color:gray")},null,8,["icon","class"])]),_:2},1024)]),default:n(()=>[t(W,null,{default:n(()=>[t(p,null,{default:n(()=>[h(" charge point data on left side "),t(u,null,{default:n(()=>[t(p,null,{default:n(()=>[t(u,{class:"_padding-left:0 _padding-right:0"},{default:n(()=>[t(S,{size:"lg",disabled:a.changesLocked,outline:a.changesLocked},{default:n(()=>[t(m,{"fixed-width":"",icon:e.mqttStore.getChargePointManualLock(i)?["fas","fa-lock"]:["fas","fa-lock-open"],class:q(e.mqttStore.getChargePointManualLock(i)?["_color:danger"]:"_color:success"),onClick:N=>c.toggleChargePointManualLock(i)},null,8,["icon","class","onClick"])]),_:2},1032,["disabled","outline"])]),_:2},1024),t(u,{class:"_text-align:right _padding-left:0"},{default:n(()=>[r(_(e.mqttStore.getChargePointPower(i))+" "+_(e.mqttStore.getChargePointPhasesInUse(i))+" "+_(e.mqttStore.getChargePointSetCurrent(i)),1)]),_:2},1024)]),_:2},1024),t(p,null,{default:n(()=>[t(u,{class:"_padding-left:0"},{default:n(()=>[t(y,{color:"var(--color--primary)",data:e.mqttStore.getChargePointPowerChartData(i)},null,8,["data"])]),_:2},1024)]),_:2},1024)]),_:2},1024),h(" vehicle data on right side "),t(u,{md:"6"},{default:n(()=>[h(" vehicle and soc "),t(p,{class:"_display:flex"},{default:n(()=>[t(u,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:n(()=>[t(P,{size:"lg",class:"full-width"},{default:n(()=>[t(m,{"fixed-width":"",icon:["fas","fa-car"]}),r(" "+_(e.mqttStore.getChargePointConnectedVehicleName(i)),1)]),_:2},1024)]),_:2},1024),e.mqttStore.getVehicleSocConfigured(e.mqttStore.getChargePointConnectedVehicleId(i))||e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(i))!=0?(s(),f(u,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:n(()=>[t(P,{size:"lg"},{default:n(()=>[e.mqttStore.getVehicleSocConfigured(e.mqttStore.getChargePointConnectedVehicleId(i))?(s(),v("span",ce,[t(m,{"fixed-width":"",icon:["fas","fa-car-battery"]}),r(" "+_(e.mqttStore.getChargePointConnectedVehicleSoc(i).soc)+"% ",1)])):h("v-if",!0),e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(i))!=0?(s(),f(m,{key:1,"fixed-width":"",icon:e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(i))>0?e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(i))>1?["fas","times-circle"]:["fas","exclamation-triangle"]:[],class:q(e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(i))>0?e.mqttStore.getVehicleFaultState(e.mqttStore.getChargePointConnectedVehicleId(i))>1?"_color:danger":"_color:warning":"")},null,8,["icon","class"])):h("v-if",!0)]),_:2},1024)]),_:2},1024)):h("v-if",!0)]),_:2},1024),h(" charge mode info "),t(p,{class:"_padding-top:1 _display:flex"},{default:n(()=>[t(u,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:n(()=>[t(P,{size:"lg",class:"full-width",color:e.mqttStore.getChargePointConnectedVehicleChargeMode(i).class},{default:n(()=>[r(_(e.mqttStore.getChargePointConnectedVehicleChargeMode(i).label),1)]),_:2},1032,["color"])]),_:2},1024),e.mqttStore.getChargePointConnectedVehiclePriority(i)||e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(i)?(s(),f(u,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:n(()=>[t(P,{size:"lg"},{default:n(()=>[e.mqttStore.getChargePointConnectedVehiclePriority(i)?(s(),f(m,{key:0,"fixed-width":"",icon:["fas","fa-star"],class:"_color:warning"})):h("v-if",!0),e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(i)?(s(),f(m,{key:1,"fixed-width":"",icon:e.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(i)?["fas","fa-clock"]:["far","fa-clock"],class:q(e.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(i)?"_color:success":"")},null,8,["icon","class"])):h("v-if",!0)]),_:2},1024)]),_:2},1024)):h("v-if",!0)]),_:2},1024),a.changesLocked?h("v-if",!0):(s(),f(p,{key:0,class:"_padding-top:1"},{default:n(()=>[t(u,{class:"_padding-left:0 _padding-right:0"},{default:n(()=>[t(S,{block:"",onClick:N=>c.toggleChargePointSettings(i)},{default:n(()=>[t(m,{"fixed-width":"",icon:["fas","fa-wrench"]})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),h(" modals "),t(U,{modelValue:e.modalChargePointSettingsVisible,"onUpdate:modelValue":o[11]||(o[11]=i=>e.modalChargePointSettingsVisible=i)},{header:n(()=>[r(' Einstellungen für Ladepunkt "'+_(e.mqttStore.getChargePointName(e.modalChargePointSettingsId))+'" ',1)]),default:n(()=>[t(F,{modelValue:e.modalActiveTab,"onUpdate:modelValue":o[10]||(o[10]=i=>e.modalActiveTab=i),stretch:""},{header:n(()=>[t(V,{for:"tab-general"},{default:n(()=>[r(" Allgemein ")]),_:1}),t(V,{for:"tab-instant-charging"},{default:n(()=>[r(" Sofort ")]),_:1}),t(V,{for:"tab-pv-charging"},{default:n(()=>[r(" PV ")]),_:1}),t(V,{for:"tab-scheduled-charging"},{default:n(()=>[r(" Zielladen ")]),_:1}),t(V,{for:"tab-time-charging"},{default:n(()=>[r(" Zeitladen ")]),_:1})]),default:n(()=>[t(I,{name:"tab-general"},{default:n(()=>[t(k,null,{default:n(()=>[t(d,null,{default:n(()=>[t(C,null,{default:n(()=>[t(m,{"fixed-width":"",icon:["fas","fa-car"]}),r(" Fahrzeug ")]),_:1}),t(w,{size:"lg",disabled:!e.mqttStore.getChargePointVehicleChangePermitted(e.modalChargePointSettingsId),"model-value":c.getChargePointConnectedVehicle(e.modalChargePointSettingsId),options:c.vehicleList,placeholder:"Bitte auswählen..","onUpdate:modelValue":o[0]||(o[0]=i=>c.setChargePointConnectedVehicle(e.modalChargePointSettingsId,i))},null,8,["disabled","model-value","options"])]),_:1}),t(d,null,{default:n(()=>[t(C,null,{default:n(()=>[r("Lademodus")]),_:1}),t(w,{size:"lg","model-value":e.mqttStore.getChargePointConnectedVehicleChargeMode(e.modalChargePointSettingsId),placeholder:"Bitte auswählen..","onUpdate:modelValue":o[1]||(o[1]=i=>c.setChargePointConnectedVehicleChargeMode(e.modalChargePointSettingsId,i))},{default:n(()=>[(s(!0),v(L,null,B(e.mqttStore.chargeModeList(),i=>(s(),f(A,{key:i.id,value:i.id,label:i.label,class:q("_background:"+i.class)},null,8,["value","label","class"]))),128))]),_:1},8,["model-value"])]),_:1}),t(d,{inline:"",class:"_justify-content:space-around"},{default:n(()=>[t(d,{inline:""},{default:n(()=>[t(C,{placement:"left",class:"_align-items:center"},{default:n(()=>[t(m,{"fixed-width":"",icon:["far","fa-star"]}),r(" Priorität ")]),_:1}),t(T,{size:"lg","model-value":e.mqttStore.getChargePointConnectedVehiclePriority(e.modalChargePointSettingsId),"onUpdate:modelValue":o[2]||(o[2]=i=>c.setChargePointConnectedVehiclePriority(e.modalChargePointSettingsId,i))},null,8,["model-value"])]),_:1}),t(d,{inline:"",class:"_margin-top:0"},{default:n(()=>[t(C,{placement:"left",class:"_align-items:center"},{default:n(()=>[t(m,{"fixed-width":"",icon:["far","fa-clock"]}),r(" Zeitladen ")]),_:1}),t(T,{size:"lg","model-value":e.mqttStore.getChargePointConnectedVehicleTimeChargingActive(e.modalChargePointSettingsId),"onUpdate:modelValue":o[3]||(o[3]=i=>c.setChargePointConnectedVehicleTimeChargingActive(e.modalChargePointSettingsId,i))},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1}),t(I,{name:"tab-instant-charging"},{default:n(()=>[t(k,null,{default:n(()=>[t(d,{inline:""},{default:n(()=>[t(C,null,{default:n(()=>[r("Stromstärke")]),_:1}),t(b,{size:"lg",class:"_text-align:right",min:6,max:32,"model-value":e.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(e.modalChargePointSettingsId),"onUpdate:modelValue":o[4]||(o[4]=i=>c.setChargePointConnectedVehicleInstantChargingCurrent(e.modalChargePointSettingsId,i))},{suffix:n(()=>[r("A")]),_:1},8,["model-value"])]),_:1}),t(d,{inline:""},{default:n(()=>[t(C,null,{default:n(()=>[r("Begrenzung")]),_:1}),t(M,{block:""},{default:n(()=>[t(S,{color:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="none"?"primary":"",active:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="none",onClick:o[5]||(o[5]=i=>c.setChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId,"none"))},{default:n(()=>[r(" Keine ")]),_:1},8,["color","active"]),t(S,{color:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="soc"?"primary":"",active:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="soc",onClick:o[6]||(o[6]=i=>c.setChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId,"soc"))},{default:n(()=>[r(" EV-SoC ")]),_:1},8,["color","active"]),t(S,{color:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="amount"?"primary":"",active:e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="amount",onClick:o[7]||(o[7]=i=>c.setChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId,"amount"))},{default:n(()=>[r(" Energie ")]),_:1},8,["color","active"])]),_:1})]),_:1}),e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="soc"?(s(),f(d,{key:0,inline:""},{default:n(()=>[t(C,null,{default:n(()=>[r("Max. SoC")]),_:1}),t(b,{size:"lg",class:"_text-align:right",min:5,max:100,step:5,"model-value":e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).soc,"onUpdate:modelValue":o[8]||(o[8]=i=>c.setChargePointConnectedVehicleInstantChargingLimitSoc(e.modalChargePointSettingsId,i))},{suffix:n(()=>[r("%")]),_:1},8,["model-value"])]),_:1})):h("v-if",!0),e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).selected=="amount"?(s(),f(d,{key:1,inline:""},{default:n(()=>[t(C,null,{default:n(()=>[r("Max. Energie")]),_:1}),t(b,{size:"lg",class:"_text-align:right",min:1,max:100,"model-value":e.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(e.modalChargePointSettingsId).amount/1e3,"onUpdate:modelValue":o[9]||(o[9]=i=>c.setChargePointConnectedVehicleInstantChargingLimitAmount(e.modalChargePointSettingsId,i*1e3))},{suffix:n(()=>[r("kWh")]),_:1},8,["model-value"])]),_:1})):h("v-if",!0)]),_:1})]),_:1}),t(I,{name:"tab-pv-charging"},{default:n(()=>[t(k,null,{default:n(()=>[t(d,null,{default:n(()=>[t(C)]),_:1})]),_:1})]),_:1}),t(I,{name:"tab-scheduled-charging"},{default:n(()=>[t(k,null,{default:n(()=>[t(d,null,{default:n(()=>[t(C)]),_:1})]),_:1})]),_:1}),t(I,{name:"tab-time-charging"},{default:n(()=>[t(k,null,{default:n(()=>[t(d,null,{default:n(()=>[t(C)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)}const fe=ae(re,[["render",se],["__scopeId","data-v-dd5faf5e"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/views/ChargePointsView.vue"]]);export{fe as default};
