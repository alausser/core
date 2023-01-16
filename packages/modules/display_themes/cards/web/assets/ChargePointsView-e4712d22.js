import{u as x}from"./index-51f7a5b2.js";import{D as y,S as I}from"./SparkLine-4c793aa2.js";import{l as L,e as F,g as D,h as M,i as N,j as T,k as z,m as U,c as j,n as A,o as E,F as O}from"./vendor-fortawesome-07b2e57a.js";import{l as r,o as d,e as S,j as G,F as V,A as H,i as m,s as o,p as n,n as k,k as g,x as h,z as f,G as R}from"./vendor-2c584962.js";import{_ as X}from"./vendor-inkline-54d7246b.js";L.add(F,D,M,N,T,z,U,j,A,E);const J={name:"ChargePointsView",data(){return{mqttStore:x(),modalChargePointSettingsVisible:!1}},components:{DashBoardCard:y,SparkLine:I,FontAwesomeIcon:O},computed:{chargePointIds(){return this.mqttStore.getObjectIds("cp")},vehicleList(){let e=this.mqttStore.getWildcardTopics("openWB/vehicle/+/name");var c=[];return Object.keys(e).forEach(u=>{let C=parseInt(u.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""));c.push({id:C,label:e[u]})}),c}},methods:{toggleChargePointSettings(e){console.log(e),this.modalChargePointSettingsVisible=!0},getChargePointName(e){return this.mqttStore.topics[`openWB/chargepoint/${e}/config`]!==void 0?this.mqttStore.topics[`openWB/chargepoint/${e}/config`].name.toString():"---"},getChargePointPower(e){return this.mqttStore.getValueString(`openWB/chargepoint/${e}/get/power`)},getChargePointPowerChartData(e){return this.mqttStore.chartData[`openWB/chargepoint/${e}/get/power`]},getVehicleSocChartData(e){return this.mqttStore.chartData[`openWB/vehicle/${e}/get/soc`]},getChargePointSetCurrent(e){return this.mqttStore.getValueString(`openWB/chargepoint/${e}/set/current`,"A")},getChargePointPhasesInUse(e){return["/","①","②","③"][this.mqttStore.topics[`openWB/chargepoint/${e}/get/phases_in_use`]]},getChargePointPlugState(e){return this.mqttStore.getValueBool(`openWB/chargepoint/${e}/get/plug_state`)},getChargePointChargeState(e){return this.mqttStore.getValueBool(`openWB/chargepoint/${e}/get/charge_state`)},getChargePointManualLock(e){return this.mqttStore.getValueBool(`openWB/chargepoint/${e}/set/manual_lock`)},toggleChargePointManualLock(e){this.$root.sendTopicToBroker(`openWB/chargepoint/${e}/set/manual_lock`,!this.mqttStore.getValueBool(`openWB/chargepoint/${e}/set/manual_lock`))},getChargePointConnectedVehicleInfo(e){return this.mqttStore.topics[`openWB/chargepoint/${e}/get/connected_vehicle/info`]},getChargePointConnectedVehicle(e){return{id:this.getChargePointConnectedVehicleId(e),label:this.getChargePointConnectedVehicleName(e)}},getChargePointConnectedVehicleId(e){return this.mqttStore.topics[`openWB/chargepoint/${e}/get/connected_vehicle/info`].id},getChargePointConnectedVehicleName(e){return this.mqttStore.topics[`openWB/chargepoint/${e}/get/connected_vehicle/info`].name},getChargePointConnectedVehicleSoc(e){return this.mqttStore.topics[`openWB/chargepoint/${e}/get/connected_vehicle/soc`]},setChargePointConnectedVehicle(e,c){console.log("set",e,c),c.id!=this.getChargePointConnectedVehicleId(e)&&console.log("vehicle changed")},getVehicleSocConfigured(e){return this.mqttStore.topics[`openWB/vehicle/${e}/soc_module/config`].type!=null},getVehicleFaultState(e){return this.mqttStore.topics[`openWB/vehicle/${e}/get/fault_state`]}}},K={class:"charge-points-card-wrapper"};function Q(e,c,u,C,p,t){const i=r("font-awesome-icon"),w=r("i-badge"),P=r("i-button"),l=r("i-column"),s=r("i-row"),B=r("spark-line"),v=r("i-select"),W=r("i-container"),q=r("dash-board-card"),b=r("i-modal");return d(),S(V,null,[G("div",K,[(d(!0),S(V,null,H(t.chargePointIds,a=>(d(),k(q,{key:a,color:"primary"},{headerLeft:n(()=>[g(h(t.getChargePointName(a)),1)]),headerRight:n(()=>[o(w,{size:"lg"},{default:n(()=>[o(i,{"fixed-width":"",icon:t.getChargePointPlugState(a)?t.getChargePointChargeState(a)?["fas","fa-plug-circle-bolt"]:["fas","fa-plug-circle-check"]:["fas","fa-plug-circle-xmark"],class:f(t.getChargePointPlugState(a)?t.getChargePointChargeState(a)?["_color:success"]:"_color:warning":"_color:gray")},null,8,["icon","class"])]),_:2},1024)]),default:n(()=>[o(W,null,{default:n(()=>[o(s,null,{default:n(()=>[o(l,null,{default:n(()=>[o(s,null,{default:n(()=>[o(l,{class:"_padding-left:0 _padding-right:0"},{default:n(()=>[o(P,{size:"lg"},{default:n(()=>[o(i,{"fixed-width":"",icon:t.getChargePointManualLock(a)?["fas","fa-lock"]:["fas","fa-lock-open"],class:f(t.getChargePointManualLock(a)?["_color:danger"]:"_color:success"),onClick:_=>t.toggleChargePointManualLock(a)},null,8,["icon","class","onClick"])]),_:2},1024)]),_:2},1024),o(l,{class:"_text-align:right _padding-left:0"},{default:n(()=>[g(h(t.getChargePointPower(a))+" "+h(t.getChargePointPhasesInUse(a))+" "+h(t.getChargePointSetCurrent(a)),1)]),_:2},1024)]),_:2},1024),o(s,null,{default:n(()=>[o(l,{class:"_padding-left:0"},{default:n(()=>[o(B,{color:"var(--color--primary)",data:t.getChargePointPowerChartData(a)},null,8,["data"])]),_:2},1024)]),_:2},1024)]),_:2},1024),o(l,{md:"6"},{default:n(()=>[o(s,null,{default:n(()=>[o(l,{class:"_padding-right:0 _padding-left:0"},{default:n(()=>[o(v,{size:"lg","model-value":t.getChargePointConnectedVehicle(a),options:t.vehicleList,placeholder:"Bitte auswählen..","onUpdate:modelValue":_=>t.setChargePointConnectedVehicle(a,_)},R({prefix:n(()=>[o(i,{"fixed-width":"",icon:["fas","fa-car"]})]),_:2},[t.getVehicleSocConfigured(t.getChargePointConnectedVehicleId(a))?{name:"suffix",fn:n(()=>[o(i,{"fixed-width":"",icon:["fas","fa-car-battery"]}),g(" "+h(t.getChargePointConnectedVehicleSoc(a).soc)+"% ",1),t.getVehicleFaultState(t.getChargePointConnectedVehicleId(a))!=0?(d(),k(i,{key:0,"fixed-width":"",icon:t.getVehicleFaultState(t.getChargePointConnectedVehicleId(a))>0?t.getVehicleFaultState(t.getChargePointConnectedVehicleId(a))>1?["fas","times-circle"]:["fas","exclamation-triangle"]:[],class:f(t.getVehicleFaultState(t.getChargePointConnectedVehicleId(a))>0?t.getVehicleFaultState(t.getChargePointConnectedVehicleId(a))>1?"_color:danger":"_color:warning":"")},null,8,["icon","class"])):m("v-if",!0)]),key:"0"}:void 0]),1032,["model-value","options","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),m(` <i-row>
              <i-column>
                <spark-line
                  height="59"
                  color="var(--color--primary)"
                  :socData="getVehicleSocChartData(getChargePointConnectedVehicleId(id))"
                />
              </i-column>
            </i-row> `),o(s,{class:"_padding-top:1"},{default:n(()=>[o(l,{class:"_padding-left:0 _padding-right:0"},{default:n(()=>[o(P,{size:"lg",onClick:_=>t.toggleChargePointSettings(a)},{default:n(()=>[o(i,{"fixed-width":"",icon:["fas","fa-wrench"]})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),m(" modals "),o(b,{modelValue:p.modalChargePointSettingsVisible,"onUpdate:modelValue":c[0]||(c[0]=a=>p.modalChargePointSettingsVisible=a)},{header:n(()=>[g(" Modal Header ")]),footer:n(()=>[g(" Modal Footer ")]),default:n(()=>[g(" This is the modal body. Useful information goes here. ")]),_:1},8,["modelValue"])],64)}const ae=X(J,[["render",Q],["__scopeId","data-v-dd5faf5e"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/views/ChargePointsView.vue"]]);export{ae as default};
