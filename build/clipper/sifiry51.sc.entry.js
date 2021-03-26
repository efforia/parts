const t=window.clipper.h;import"./chunk-c46efb37.js";import{a as e}from"./chunk-b29ff8f0.js";import{a as i}from"./chunk-fe10219c.js";import{a as s}from"./chunk-a28cfce0.js";import{a as n,b as a,c as o}from"./chunk-e658e8b7.js";import{a as r,b as l}from"./chunk-c82b670d.js";import{a as d,b as c,c as h,d as u,e as m,f as p}from"./chunk-794673eb.js";class y{constructor(){this.data={address:{}}}address(t){t.preventDefault(),this.data.address[t.target.name]=t.target.value,this.input(t,this.data)}render(){return t("ion-item",null,t("ion-label",{position:"stacked",color:"primary"},this.label),t("ion-grid",null,t("ion-row",null,t("ion-col",{size:"9"},t("ion-input",{name:"street",placeholder:"Endereço",type:"text",onInput:t=>this.address(t),clearInput:!0,value:"",required:!0})),t("ion-col",{size:"3"},t("ion-input",{name:"number",placeholder:"Num.",onInput:t=>this.address(t),clearInput:!0,value:"",required:!0}))),t("ion-row",null,t("ion-col",null,t("ion-input",{name:"complement",placeholder:"Complemento",type:"text",onInput:t=>this.address(t),clearInput:!0,value:"",required:!0}))),t("ion-row",null,t("ion-col",null,t("ion-input",{name:"neighbourhood",placeholder:"Bairro",type:"text",onInput:t=>this.address(t),clearInput:!0,value:"",required:!0}))),t("ion-row",null,t("ion-col",{size:"9"},t("ion-input",{name:"city",placeholder:"Cidade",type:"text",onInput:t=>this.address(t),clearInput:!0,value:"",required:!0})),t("ion-col",{size:"3"},t("ion-input",{name:"state",placeholder:"UF",type:"text",onInput:t=>this.address(t),clearInput:!0,value:"",required:!0}))),t("ion-row",null,t("ion-col",null,t("ion-input",{name:"vicinity",placeholder:"Dica de endereço",type:"text",onInput:t=>this.address(t),clearInput:!0,value:"",required:!0})))))}static get is(){return"address-input"}static get properties(){return{data:{state:!0},input:{type:"Any",attr:"input"},label:{type:String,attr:"label"},name:{type:String,attr:"name"}}}static get style(){return"address-input ion-grid{padding:1em 0}address-input ion-grid ion-col{padding:.25em 0}"}}const f="https://maps.googleapis.com/maps/api/geocode/json?";class g{constructor(){this.descriptions=[{description:""}],this.descriptionsLength=1,this.data={job:{origin:{items:[]},destination:{}}}}componentWillLoad(){this.store.mapStateToProps(this,t=>{const{session:{token:e,directions:i}}=t;return{token:e,directions:i}}),this.store.mapDispatchToProps(this,{registerOrder:e,close:i})}parseJwt(t){const e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(window.atob(e))}async handleSubmit(t){t.preventDefault(),this.data.customer=this.parseJwt(this.token)._id,this.data.job.scheduledTo=document.querySelector("ion-datetime").value;const e=this.data.job.origin.address,i=this.data.job.destination.address,n=e.street+", "+e.number,a=i.street+", "+i.number,o=s.env.GOOGLE_MAP_KEY,r=await fetch(f+"key="+o+"&address="+n),l=await fetch(f+"key="+o+"&address="+a),d=(await r.json()).results[0].geometry.location,c=(await l.json()).results[0].geometry.location;this.data.job.origin.address.location={lat:d.lat,lng:d.lng},this.data.job.destination.address.location={lat:c.lat,lng:c.lng},this.data.job.origin.items=[...this.descriptions.slice(0,this.descriptionsLength)],this.registerOrder(this.data,this.token),(await this.tab.componentOnReady()).select("tab-drawer"),this.close()}handleAddress(t,e,i){t.preventDefault(),this.data.job[i]=e}handleFile(t){const e=[];for(let i=0;i<t.length;i++)e.push(t[i]);this.data.files=[...e]}handleInput(t){this.data[t.target.name]=t.target.value}handleDescription(t){t.preventDefault(),this.descriptions[this.descriptionsLength-1]={description:t.target.value},this.descriptions[this.descriptionsLength]={description:""}}addDescription(t){t.preventDefault(),this.descriptionsLength+=1}dateInterval(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),i=String(t.getMonth()+1).padStart(2,"0");return{today:t.getFullYear()+"-"+i+"-"+e,tomorrow:t.getFullYear()+1+"-"+i+"-"+e}}render(){const{today:e,tomorrow:i}=this.dateInterval(),s=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],n=s.map(t=>t.slice(0,3));return[t("ion-header",null,t("ion-toolbar",null,t("ion-buttons",{slot:"start"},t("ion-menu-button",null)),t("ion-title",null,"Criar Frete"))),t("ion-content",{padding:!0},"CREATE"===this.directions.slice(-1)[0].component&&t("generic-wizard",{id:"create",steps:4,action:async t=>{await this.handleSubmit(t)}},t("div",{slot:"step-1"},t("ion-item",null,t("ion-label",{position:"stacked",color:"primary"},"Insira imagens do produto"),t("image-uploader",{send:t=>this.handleFile(t)})),t("ion-item",null,t("ion-label",{position:"stacked",color:"primary"},"Insira o título do seu anúncio"),t("ion-input",{name:"title",type:"text",value:"",clearInput:!0,onInput:t=>this.handleInput(t),required:!0})),t("ion-item",null,t("ion-label",{position:"stacked",color:"primary"},"Data de saída"),t("ion-datetime",{min:e,max:i,"display-format":"MMM DD, YYYY HH:mm",value:"",monthNames:s,monthShortNames:n,cancelText:"Cancelar",doneText:"Confirmar",name:"scheduledTo"}))),t("div",{slot:"step-2"},this.descriptions.map(e=>t("ion-item",null,t("ion-label",{position:"stacked",color:"primary"},"Descreva o item que você precisa carregar"),t("ion-textarea",{rows:2,name:"description",onInput:t=>this.handleDescription(t),required:!0,value:e.description}))),t("ion-button",{onClick:t=>this.addDescription(t),color:"tertiary",expand:"block"},"Adicionar outro item")),t("div",{slot:"step-3"},t("address-input",{input:(t,e)=>this.handleAddress(t,e,"origin"),label:"Endereço de saída"})),t("div",{slot:"step-4"},t("address-input",{input:(t,e)=>this.handleAddress(t,e,"destination"),label:"Endereço de chegada"}))))]}static get is(){return"page-create"}static get properties(){return{data:{state:!0},descriptions:{state:!0},descriptionsLength:{state:!0},directions:{state:!0},store:{context:"store"},tab:{connect:"ion-tabs"},token:{state:!0}}}static get style(){return""}}function b(t,e,i,s){if(t!==q&&t!==W){if(t===K)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===X)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===O||t===V||t===B||t===z||t===U||t===G)return T(e);if(t===N)return A(e);if(t===P)return(s.monthNames?s.monthNames:it)[e-1];if(t===$)return(s.monthShortNames?s.monthShortNames:st)[e-1];if(t===J||t===R){if(0===e)return"12";if(e>12&&(e-=12),t===J&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===q?(s.dayNames?s.dayNames:tt)[e]:(s.dayShortNames?s.dayShortNames:et)[e]}catch(t){}}function v(t,e,i,s=0,n=0){return parseInt(`1${A(t)}${T(e)}${T(i)}${T(s)}${T(n)}`,10)}function k(t){return v(t.year,t.month,t.day,t.hour,t.minute)}const x=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,D=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function M(t){let e=null;if(null!=t&&""!==t&&((e=D.exec(t))?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=x.exec(t)),null===e)return;for(let t=1;t<8;t++)e[t]=void 0!==e[t]?parseInt(e[t],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}}const w=(t="")=>{null==t&&(t=""),10!==t.length&&7!==t.length||(t+=" ");const e="string"==typeof t&&t.length>0?new Date(t):new Date;return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))};function S(t,e){return e===K||e===X?t.hour<12?"am":"pm":e===J||e===R?t.hour>12?t.hour-12:t.hour:t[C(e)]}function C(t){for(const e in Q)if(Q[e].f===t)return Q[e].k}function I(t){let e="";return void 0!==t.year?(e=A(t.year),void 0!==t.month&&(e+="-"+T(t.month),void 0!==t.day&&(e+="-"+T(t.day),void 0!==t.hour&&(e+=`T${T(t.hour)}:${T(t.minute)}:${T(t.second)}`,t.millisecond>0&&(e+="."+Y(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+T(Math.floor(Math.abs(t.tzOffset/60)))+":"+T(t.tzOffset%60))))):void 0!==t.hour&&(e=T(t.hour)+":"+T(t.minute),void 0!==t.second&&(e+=":"+T(t.second),void 0!==t.millisecond&&(e+="."+Y(t.millisecond)))),e}function F(t,e){if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(t=>t.toString().trim())),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i}function E(t,e){let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),0===(i=Array.isArray(t)?t.map(t=>parseInt(t,10)).filter(isFinite):[t]).length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i}function T(t){return("0"+(void 0!==t?Math.abs(t):"0")).slice(-2)}function Y(t){return("00"+(void 0!==t?Math.abs(t):"0")).slice(-3)}function A(t){return("000"+(void 0!==t?Math.abs(t):"0")).slice(-4)}const N="YYYY",O="YY",P="MMMM",$="MMM",V="MM",j="M",q="DDDD",W="DDD",B="DD",H="D",z="HH",L="H",J="hh",R="h",U="mm",_="m",G="ss",Z="s",K="A",X="a",Q=[{f:N,k:"year"},{f:P,k:"month"},{f:q,k:"day"},{f:$,k:"month"},{f:W,k:"day"},{f:O,k:"year"},{f:V,k:"month"},{f:B,k:"day"},{f:z,k:"hour"},{f:J,k:"hour"},{f:U,k:"minute"},{f:G,k:"second"},{f:j,k:"month"},{f:H,k:"day"},{f:L,k:"hour"},{f:R,k:"hour"},{f:_,k:"minute"},{f:Z,k:"second"},{f:K,k:"ampm"},{f:X,k:"ampm"}],tt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],et=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],it=["January","February","March","April","May","June","July","August","September","October","November","December"],st=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nt=[J,R,U,_,G,Z];class at{constructor(){this.inputId=`ion-dt-${ot++}`,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.ionBlur.emit()})}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:F(this.monthNames,"monthNames"),monthShortNames:F(this.monthShortNames,"monthShortNames"),dayNames:F(this.dayNames,"dayNames"),dayShortNames:F(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}onClick(){this.setFocus(),this.open()}async open(){if(this.disabled||this.isExpanded)return;const t=this.generatePickerOptions(),e=await this.pickerCtrl.create(t);this.isExpanded=!0,e.onDidDismiss().then(()=>{this.isExpanded=!1,this.setFocus()}),e.addEventListener("ionPickerColChange",async t=>{const i=t.detail;if("month"!==i.name&&"day"!==i.name&&"year"!==i.name)return;const s={};s[i.name]={value:i.options[i.selectedIndex].value},this.updateDatetimeValue(s);const n=this.generateColumns();e.columns=n,await this.validate(e)}),await this.validate(e),await e.present()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){!function(t,e){if(!e||"string"==typeof e){const t=w(e);Number.isNaN(t.getTime())||(e=t.toISOString())}if(e&&""!==e){if("string"==typeof e){if(e=M(e))return Object.assign(t,e),!0}else if(e.year||e.hour||e.month||e.day||e.minute||e.second){e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const e in t)t.hasOwnProperty(e)&&delete t[e]}(this.datetimeValue,t)}generatePickerOptions(){const t=Object.assign({mode:this.mode},this.pickerOptions,{columns:this.generateColumns()}),e=t.buttons;return e&&0!==e.length||(t.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.updateDatetimeValue(this.value),this.ionCancel.emit()}},{text:this.doneText,handler:t=>{this.updateDatetimeValue(t);const e=new Date(I(this.datetimeValue));this.datetimeValue.tzOffset=-1*e.getTimezoneOffset(),this.value=I(this.datetimeValue)}}]),t}generateColumns(){let t=this.pickerFormat||this.displayFormat||rt;if(0===t.length)return[];this.calcMinMax(),-1===(t=t.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(t=t.replace("{~}","D"));const e=function(t){const e=[];t=t.replace(/[^\w\s]/gi," "),Q.forEach(e=>{e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});const i=t.split(" ").filter(t=>t.length>0);return i.forEach((t,s)=>{Q.forEach(n=>{if(t===n.f){if((t===K||t===X)&&(e.indexOf(R)<0&&e.indexOf(J)<0||-1===nt.indexOf(i[s-1])))return;e.push(t)}})}),e}(t=t.replace(/{~}/g,"")).map(t=>{const e=C(t);let i;const s=(i=this[e+"Values"]?E(this[e+"Values"],e):function(t,e,i){const s=[];if(t===N||t===O){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let t=i.year;t>=e.year;t--)s.push(t)}else if(t===P||t===$||t===V||t===j||t===J||t===R)for(let t=1;t<13;t++)s.push(t);else if(t===q||t===W||t===B||t===H)for(let t=1;t<32;t++)s.push(t);else if(t===z||t===L)for(let t=0;t<24;t++)s.push(t);else if(t===U||t===_)for(let t=0;t<60;t++)s.push(t);else if(t===G||t===Z)for(let t=0;t<60;t++)s.push(t);else t!==K&&t!==X||s.push("am","pm");return s}(t,this.datetimeMin,this.datetimeMax)).map(e=>({value:e,text:b(t,e,void 0,this.locale)})),n=function(t,e){const i=S(t,e);return void 0!==i?i:S(M((new Date).toISOString()),e)}(this.datetimeValue,t),a=s.findIndex(t=>t.value===n);return{name:e,selectedIndex:a>=0?a:0,options:s}}),i=this.datetimeMin,s=this.datetimeMax;return["month","day","hour","minute"].filter(t=>!e.find(e=>e.name===t)).forEach(t=>{i[t]=0,s[t]=0}),function(t){const e=[];let i,s;for(let n=0;n<t.length;n++){i=t[n],e.push(0);for(const t of i.options)(s=t.text.length)>e[n]&&(e[n]=s)}return 2===e.length?(s=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=`${17*s}px`):3===e.length&&(s=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=`${17*e[1]}px`,t[0].optionsWidth=t[2].optionsWidth=`${17*s}px`,t[2].align="left"),t}(e)}async validate(t){const e=new Date,i=k(this.datetimeMin),s=k(this.datetimeMax),n=await t.getColumn("year");let a=e.getFullYear();if(n){n.options.find(t=>t.value===e.getFullYear())||(a=n.options[0].value);const t=n.selectedIndex;if(void 0!==t){const e=n.options[t];e&&(a=e.value)}}const o=await this.validateColumn(t,"month",1,i,s,[a,0,0,0,0],[a,12,31,23,59]),r=4===(l=o)||6===l||9===l||11===l?30:2===l?function(t){return t%4==0&&t%100!=0||t%400==0}(a)?29:28:31;var l;const d=await this.validateColumn(t,"day",2,i,s,[a,o,0,0,0],[a,o,r,23,59]),c=await this.validateColumn(t,"hour",3,i,s,[a,o,d,0,0],[a,o,d,23,59]);await this.validateColumn(t,"minute",4,i,s,[a,o,d,c,0],[a,o,d,c,59])}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const t=E(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...t).toString()),void 0===this.max&&(this.max=Math.max(...t).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const e=this.datetimeMin=M(this.min),i=this.datetimeMax=M(this.max);e.year=e.year||t,i.year=i.year||t,e.month=e.month||1,i.month=i.month||12,e.day=e.day||1,i.day=i.day||31,e.hour=e.hour||0,i.hour=i.hour||23,e.minute=e.minute||0,i.minute=i.minute||59,e.second=e.second||0,i.second=i.second||59,e.year>i.year&&(console.error("min.year > max.year"),e.year=i.year-100),e.year===i.year&&(e.month>i.month?(console.error("min.month > max.month"),e.month=1):e.month===i.month&&e.day>i.day&&(console.error("min.day > max.day"),e.day=1))}async validateColumn(t,e,i,s,a,o,r){const l=await t.getColumn(e);if(!l)return 0;const d=o.slice(),c=r.slice(),h=l.options;let u=h.length-1,m=0;for(let t=0;t<h.length;t++){const e=h[t],n=e.value;d[i]=e.value,c[i]=e.value,(e.disabled=n<o[i]||n>r[i]||v(c[0],c[1],c[2],c[3],c[4])<s||v(d[0],d[1],d[2],d[3],d[4])>a)||(u=Math.min(u,t),m=Math.max(m,t))}const p=l.selectedIndex=n(u,l.selectedIndex,m),y=l.options[p];return y?y.value:0}getText(){if(null!=this.value&&0!==this.value.length)return function(t,e,i){if(void 0===e)return;const s=[];let n=!1;if(Q.forEach((a,o)=>{if(t.indexOf(a.f)>-1){const r="{"+o+"}",l=b(a.f,e[a.k],e,i);n||void 0===l||null==e[a.k]||(n=!0),s.push(r,l||""),t=t.replace(a.f,r)}}),n){for(let e=0;e<s.length;e+=2)t=t.replace(s[e],s[e+1]);return t}}(this.displayFormat||this.pickerFormat||rt,this.datetimeValue,this.locale)}hasValue(){return Object.keys(this.datetimeValue).length>0}setFocus(){this.buttonEl&&this.buttonEl.focus()}hostData(){const{inputId:t,disabled:e,readonly:i,isExpanded:s,el:n,placeholder:o}=this,l=void 0===this.getText()&&null!=o,d=t+"-lbl",c=a(n);return c&&(c.id=d),{role:"combobox","aria-disabled":e?"true":null,"aria-expanded":`${s}`,"aria-haspopup":"true","aria-labelledby":d,class:{[`${this.mode}`]:!0,"datetime-disabled":e,"datetime-readonly":i,"datetime-placeholder":l,"in-item":r("ion-item",n)}}}render(){let e=this.getText();return void 0===e&&(e=null!=this.placeholder?this.placeholder:""),o(!0,this.el,this.name,this.value,this.disabled),[t("div",{class:"datetime-text"},e),t("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t})]}static get is(){return"ion-datetime"}static get encapsulation(){return"shadow"}static get properties(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},el:{elementRef:!0},hourValues:{type:"Any",attr:"hour-values"},isExpanded:{state:!0},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},mode:{type:String,attr:"mode"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},name:{type:String,attr:"name"},open:{method:!0},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}}static get events(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"}]}static get style(){return".sc-ion-datetime-md-h{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-datetime-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.in-item.sc-ion-datetime-md-h{position:static}.datetime-placeholder.sc-ion-datetime-md-h{color:var(--placeholder-color)}.datetime-disabled.sc-ion-datetime-md-h{opacity:.3;pointer-events:none}.datetime-readonly.sc-ion-datetime-md-h{pointer-events:none}button.sc-ion-datetime-md{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl].sc-ion-datetime-md-h   button.sc-ion-datetime-md, [dir=rtl]   .sc-ion-datetime-md-h   button.sc-ion-datetime-md{right:0}button.sc-ion-datetime-md::-moz-focus-inner{border:0}.datetime-text.sc-ion-datetime-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}.sc-ion-datetime-md-h{--placeholder-color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"}static get styleMode(){return"md"}}let ot=0;const rt="MMM D, YYYY";function lt(t,e){const i=new t,s=new t;s.addElement(e.querySelector("ion-backdrop"));const n=new t;return n.addElement(e.querySelector(".picker-wrapper")),s.fromTo("opacity",.01,.26),n.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(n))}function dt(t,e){const i=new t,s=new t;s.addElement(e.querySelector("ion-backdrop"));const n=new t;return n.addElement(e.querySelector(".picker-wrapper")),s.fromTo("opacity",.26,.01),n.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s).add(n))}class ct{constructor(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0}onBackdropTap(){const t=this.buttons.find(t=>"cancel"===t.role);t?this.buttonClick(t):this.dismiss()}async present(){await d(this,"pickerEnter",lt,lt,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration))}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),c(this,t,e,"pickerLeave",dt,dt)}onDidDismiss(){return h(this.el,"ionPickerDidDismiss")}onWillDismiss(){return h(this.el,"ionPickerWillDismiss")}getColumn(t){return Promise.resolve(this.columns.find(e=>e.name===t))}buttonClick(t){let e=!0;return t.handler&&!1===t.handler(this.getSelected())&&(e=!1),e?this.dismiss():Promise.resolve(!1)}getSelected(){const t={};return this.columns.forEach((e,i)=>{const s=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:s?s.text:void 0,value:s?s.value:void 0,columnIndex:i}}),t}hostData(){return{"aria-modal":"true",class:Object.assign({[`${this.mode}`]:!0,[`picker-${this.mode}`]:!0},l(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}}render(){return[t("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t("div",{class:"picker-wrapper",role:"dialog"},t("div",{class:"picker-toolbar"},this.buttons.map(e=>t("div",{class:ht(e)},t("button",{type:"button",onClick:()=>this.buttonClick(e),class:ut(e)},e.text)))),t("div",{class:"picker-columns"},t("div",{class:"picker-above-highlight"}),this.presented&&this.columns.map(e=>t("ion-picker-column",{col:e})),t("div",{class:"picker-below-highlight"})))]}static get is(){return"ion-picker"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},presented:{state:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}}static get events(){return[{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]}static get style(){return".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}[dir=rtl].sc-ion-picker-md-h + b.sc-ion-picker-md{right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active, .picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md, .picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color,#fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}[dir=rtl].sc-ion-picker-md-h   .picker-above-highlight.sc-ion-picker-md, [dir=rtl]   .sc-ion-picker-md-h   .picker-above-highlight.sc-ion-picker-md{right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}[dir=rtl].sc-ion-picker-md-h   .picker-below-highlight.sc-ion-picker-md, [dir=rtl]   .sc-ion-picker-md-h   .picker-below-highlight.sc-ion-picker-md{right:0}"}static get styleMode(){return"md"}}function ht(t){return{[`picker-toolbar-${t.role}`]:void 0!==t.role,"picker-toolbar-button":!0}}function ut(t){return Object.assign({"picker-button":!0,"ion-activatable":!0},l(t.cssClass))}class mt{constructor(){this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}colChanged(){this.refresh()}componentWillLoad(){let t=0,e=.81;"ios"===this.mode&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e}async componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh(),this.gesture=(await import("./chunk-04f0cf95.js")).createGesture({el:this.el,queue:this.queue,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.setDisabled(!1),this.tmrId=setTimeout(()=>{this.noAnimate=!1,this.refresh(!0)},250)}componentDidUnload(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,e){const i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0),this.emitColChange()}update(t,e,i){if(!this.optsEl)return;let s=0,n=0;const{col:a,rotateFactor:o}=this,r=a.selectedIndex=this.indexForY(-t),l=0===e?"":e+"ms",d=`scale(${this.scaleFactor})`,c=this.optsEl.children;for(let i=0;i<c.length;i++){const h=c[i],u=a.options[i],m=i*this.optHeight+t;let p="";if(0!==o){const t=m*o;Math.abs(t)<=90?(s=0,n=90,p=`rotateX(${t}deg) `):s=-9999}else n=0,s=m;const y=r===i;p+=`translate3d(0px,${s}px,${n}px) `,1===this.scaleFactor||y||(p+=d),this.noAnimate?(u.duration=0,h.style.transitionDuration=""):e!==u.duration&&(u.duration=e,h.style.transitionDuration=l),p!==u.transform&&(u.transform=p,h.style.transform=p),y!==u.selected&&(u.selected=y,y?h.classList.add(pt):h.classList.remove(pt))}this.col.prevSelected=r,i&&(this.y=t),this.lastIndex!==r&&(function(){const t=window.TapticEngine;t&&t.gestureSelectionChanged()}(),this.lastIndex=r)}decelerate(){if(0!==this.velocity){this.velocity*=yt,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange())}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.preventDefault(),t.event.stopPropagation(),cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,s=0;for(let t=0;t<e.length;t++)e[t].disabled||(i=Math.min(i,t),s=Math.max(s,t));this.minY=-i*this.optHeight,this.maxY=-s*this.optHeight}onMove(t){t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=n(-ft,23*t.velocityY,ft),0===this.velocity&&0===t.deltaY){const e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),gt)}else this.y+=t.deltaY,this.decelerate()}refresh(t){let e=this.col.options.length-1,i=0;const s=this.col.options;for(let t=0;t<s.length;t++)s[t].disabled||(e=Math.min(e,t),i=Math.max(i,t));if(0!==this.velocity)return;const a=n(e,this.col.selectedIndex||0,i);if(this.col.prevSelected!==a||t){const t=a*this.optHeight*-1;this.velocity=0,this.update(t,gt,!0)}}hostData(){return{class:{[`${this.mode}`]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}}render(){const e=this.col;return[e.prefix&&t("div",{class:"picker-prefix",style:{width:e.prefixWidth}},e.prefix),t("div",{class:"picker-opts",style:{maxWidth:e.optionsWidth},ref:t=>this.optsEl=t},e.options.map((e,i)=>t("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!e.disabled},"opt-index":i},e.text))),e.suffix&&t("div",{class:"picker-suffix",style:{width:e.suffixWidth}},e.suffix)]}static get is(){return"ion-picker-column"}static get properties(){return{col:{type:"Any",attr:"col",watchCallbacks:["colChanged"]},el:{elementRef:!0},queue:{context:"queue"}}}static get events(){return[{name:"ionPickerColChange",method:"ionPickerColChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt{right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right,:host-context([dir=rtl]) .picker-opts-left{-ms-flex-pack:end;justify-content:flex-end}:host-context([dir=rtl]) .picker-opts-right{-ms-flex-pack:start;justify-content:flex-start}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-opt.picker-opt-selected,.picker-prefix,.picker-suffix{color:var(--ion-color-primary,#3880ff)}"}static get styleMode(){return"md"}}const pt="picker-opt-selected",yt=.97,ft=90,gt=150;class bt{create(t){return u(this.doc.createElement("ion-picker"),t)}dismiss(t,e,i){return m(this.doc,t,e,"ion-picker",i)}async getTop(){return p(this.doc,"ion-picker")}static get is(){return"ion-picker-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{y as AddressInput,g as PageCreate,at as IonDatetime,ct as IonPicker,mt as IonPickerColumn,bt as IonPickerController};