const t=window.clipper.h;import"./chunk-c46efb37.js";import{o as e}from"./chunk-fe10219c.js";import{j as n}from"./chunk-e658e8b7.js";import{a as i,i as o,f as a}from"./chunk-0844be35.js";class s{constructor(){this.submitted=!1,this.username={valid:!1,value:""},this.password={valid:!1,value:""},this.data={}}componentWillLoad(){this.store.mapStateToProps(this,t=>{const{session:{token:e,profile:n}}=t;return{token:e,profile:n}}),this.store.mapDispatchToProps(this,{updateProfile:e})}handleInput(t){this.data[t.target.name]=t.target.value}handleRadio(t){this.data[t.target.name]=[t.target.value]}handleFile(t){this.data.files=[t[0]]}handleAddress(t){this.data.address={street:t.target.value}}handleUsername(t){this.validateUsername(),this.username=Object.assign({},this.username,{value:t.target.value})}handlePassword(t){this.validatePassword(),this.password.value=t.target.value,this.password=Object.assign({},this.password,{value:t.target.value})}validateUsername(){this.username=this.username.value&&this.username.value.length>0?Object.assign({},this.username,{valid:!0}):Object.assign({},this.username,{valid:!1})}validatePassword(){if(this.password.value&&this.password.value.length>0)return this.password.valid=!0,void(this.password=Object.assign({},this.password,{valid:!0}));this.password=Object.assign({},this.password,{valid:!1})}unload(t){t.preventDefault(),this.exit()}async submit(t){t.preventDefault();const e=Object.assign({},this.data,{username:""!==this.username.value?this.username.value:this.profile.username});await this.updateProfile(e,this.token),(await this.toastCtrl.create({message:"Perfil atualizado com sucesso.",duration:3e3})).present()}render(){return[t("ion-header",null,t("ion-toolbar",null,t("ion-buttons",{slot:"start"},t("ion-menu-button",null),t("ion-back-button",null)),t("ion-title",null,"Conta"))),t("ion-content",null,t("ion-list",null,t("div",{"padding-top":!0,"text-center":!0},t("img",{src:this.profile.hasOwnProperty("pictures")&&this.profile.pictures.length>0?this.profile.pictures[0]:"http://www.gravatar.com/avatar?d=mm&s=140",style:{maxHeight:"120px"},alt:"avatar"}),t("h2",null,this.profile.name," (",this.profile.username,")"),t("ion-list",null,t("ion-item",null,t("ion-label",{position:"stacked"},"Atualize seu nome completo"),t("ion-input",{placeholder:this.profile.name,name:"name",onInput:t=>this.handleInput(t)})),t("ion-item",null,t("ion-label",{position:"stacked"},"Atualize seu endereço"),t("ion-input",{placeholder:this.profile.address.street,name:"address",onInput:t=>this.handleAddress(t)})),t("ion-item",null,t("ion-label",{position:"stacked"},"Atualize seu telefone para contato"),t("ion-input",{placeholder:this.profile.phone,name:"phone",onInput:t=>this.handleInput(t)})),t("ion-item",null,t("ion-label",{position:"stacked"},"Substituir imagem"),t("image-uploader",{send:t=>this.handleFile(t),id:"file"})),t("ion-item",null,t("ion-label",{position:"stacked"},"Atualize seu e-mail para o login"),t("ion-input",{placeholder:this.profile.email,name:"email",onInput:t=>this.handleInput(t)})),t("ion-item",null,t("ion-label",{position:"stacked"},"Atualize o nome de usuário"),t("ion-input",{placeholder:this.profile.username,name:"username",type:"text",value:this.username.value,onInput:t=>this.handleUsername(t),required:!0})),t("ion-text",{color:"danger"},t("p",{hidden:this.username.valid||!1===this.submitted,"padding-left":!0},"Nome do usuário é requerido")),t("ion-button",{style:{flex:"1"},onClick:t=>this.submit(t),color:"primary",expand:"block"},"Atualizar")))))]}static get is(){return"page-account"}static get properties(){return{alertCtrl:{connect:"ion-alert-controller"},data:{state:!0},exit:{type:"Any",attr:"exit"},images:{type:"Any",attr:"images"},nav:{connect:"ion-router"},password:{state:!0},profile:{state:!0},store:{context:"store"},submitted:{state:!0},toastCtrl:{connect:"ion-toast-controller"},token:{state:!0},username:{state:!0}}}}class r{constructor(){this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],i=e?Object.keys(e):[];if(n.length===i.length){for(const i of n)if(t[i]!==e[i])return void this.onUpdate(t)}else this.onUpdate(t)}componentDidLoad(){this.ionRouteDataChanged.emit()}componentDidUnload(){this.ionRouteDataChanged.emit()}static get is(){return"ion-route"}static get properties(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}}static get events(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]}}class l{propDidChange(){this.ionRouteRedirectChanged.emit()}componentDidLoad(){this.ionRouteRedirectChanged.emit()}componentDidUnload(){this.ionRouteRedirectChanged.emit()}static get is(){return"ion-route-redirect"}static get properties(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}}static get events(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]}}const u="root",h="forward",c="back";function d(t){return"/"+t.filter(t=>t.length>0).join("/")}function p(t){if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e}const m=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function g(t){if(!t)return;if(t.matches(m))return t;return t.querySelector(m)||void 0}function f(t,e){return e.find(e=>(function(t,e){const{from:n,to:i}=e;if(void 0===i)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const i=n[e];if("*"===i)return!0;if(i!==t[e])return!1}return n.length===t.length})(t,e))}function w(t,e){const n=Math.min(t.length,e.length);let i=0;for(;i<n&&t[i].toLowerCase()===e[i].id;i++);return i}function v(t,e){const n=new C(t);let i,o=!1;for(let t=0;t<e.length;t++){const a=e[t].path;if(""===a[0])o=!0;else{for(const e of a){const o=n.next();if(":"===e[0]){if(""===o)return null;((i=i||[])[t]||(i[t]={}))[e.slice(1)]=o}else if(o!==e)return null}o=!1}}return o&&o!==(""===n.next())?null:i?e.map((t,e)=>({id:t.id,path:t.path,params:b(t.params,i[e])})):e}function b(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function y(t){let e=1,n=1;for(const i of t)for(const t of i.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e}class C{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}function R(t){return Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=P(t,"to");return{from:p(P(t,"from")),to:null==e?void 0:p(e)}})}function k(t){return function(t){const e=[];for(const n of t)S([],e,n);return e}(function t(e,n=e){return Array.from(n.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(n=>{const i=P(n,"component");if(null==i)throw new Error("component missing in ion-route");return{path:p(P(n,"url")),id:i.toLowerCase(),params:n.componentProps,children:t(e,n)}})}(t))}function P(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function S(t,e,n){const i=t.slice();if(i.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(const t of n.children)S(i,e,t);else e.push(i)}class D{constructor(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){var t;await(t=this.win,g(t.document.body)?Promise.resolve():new Promise(e=>{t.addEventListener("ionNavWillLoad",e,{once:!0})})),await this.onRoutesChanged()}componentDidLoad(){this.win.addEventListener("ionRouteRedirectChanged",n(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",n(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,e="forward"){t.startsWith(".")&&(t=new URL(t,this.win.location.href).pathname);const n=p(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)}back(){return this.win.history.back(),Promise.resolve(this.waitPromise)}printDebug(){this.getPath(),function(t){console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const n=e.map(t=>t.id);d(t),n.join(", ")}console.groupEnd()}(k(this.el)),function(t){console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&(d(e.from),d(e.to));console.groupEnd()}(R(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await async function(t){const e=[];let n,i=t;for(;n=g(i);){const t=await n.getRouteId();if(!t)break;i=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}}(this.win.document.body),i=function(t,e){let n=null,i=0;const o=t.map(t=>t.id);for(const t of e){const e=w(o,t);e>i&&(n=t,i=e)}return n?n.map((e,n)=>({id:e.id,path:e.path,params:b(e.params,t[n]&&t[n].params)})):null}(e,k(this.el));if(!i)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const o=function(t){const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const i=n.params&&n.params[t.slice(1)];if(!i)return null;e.push(i)}else""!==t&&e.push(t);return e}(i);return o?(this.setPath(o,t),await this.safeWriteNavState(n,i,u,o,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&f(t,R(this.el))&&this.writeNavStateRoot(t,u)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),u)}historyDirection(){const t=this.win;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,n=this.lastState;return this.lastState=e,e>n?h:e<n?c:u}async writeNavStateRoot(t,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=f(t,R(this.el));let i=null;n&&(this.setPath(n.to,e),i=n.from,t=n.to);const o=function(t,e){let n=null,i=0;for(const o of e){const e=v(t,o);if(null!==e){const t=y(e);t>i&&(i=t,n=e)}}return n}(t,k(this.el));return o?this.safeWriteNavState(this.win.document.body,o,e,t,i):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,i,o,a=0){const s=await this.lock();let r=!1;try{r=await this.writeNavState(t,e,n,i,o,a)}catch(t){console.error(t)}return s(),r}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async writeNavState(t,e,n,i,o,a=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const s=this.routeChangeEvent(i,o);s&&this.ionRouteWillChange.emit(s);const r=await async function t(e,n,i,o,a=!1){try{const s=g(e);if(o>=n.length||!s)return a;await s.componentOnReady();const r=n[o],l=await s.setRouteId(r.id,r.params,i);return l.changed&&(i=u,a=!0),a=await t(l.element,n,i,o+1,a),l.markVisible&&await l.markVisible(),a}catch(t){return console.error(t),!1}}(t,e,n,a);return this.busy=!1,s&&this.ionRouteDidChange.emit(s),r}setPath(t,e){this.state++,function(t,e,n,i,o,a){let s=d([...p(e),...i]);n&&(s="#"+s),o===h?t.pushState(a,"",s):t.replaceState(a,"",s)}(this.win.history,this.root,this.useHash,t,e,this.state)}getPath(){return function(t,e,n){let i=t.pathname;if(n){const e=t.hash;i="#"===e[0]?e.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(p(e),p(i))}(this.win.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,i=d(t);return this.previousPath=i,i===n?null:{from:n,redirectedFrom:e?d(e):null,to:i}}static get is(){return"ion-router"}static get properties(){return{back:{method:!0},config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}}static get events(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]}}class E{constructor(){this.animated=!0}swipeHandlerChanged(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)}componentWillLoad(){this.ionNavWillLoad.emit()}async componentDidLoad(){this.gesture=(await import("./chunk-9d14d64c.js")).createSwipeBackGesture(this.el,this.queue,()=>!!this.swipeHandler&&this.swipeHandler.canStart(),()=>this.swipeHandler&&this.swipeHandler.onStart(),t=>this.ani&&this.ani.progressStep(t),(t,e,n)=>{this.ani&&this.ani.progressEnd(t,e,n),this.swipeHandler&&this.swipeHandler.onEnd(t)}),this.swipeHandlerChanged()}componentDidUnload(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,e,n){const i=await this.lock();let o=!1;try{o=await this.transition(t,e,n)}catch(t){console.error(t)}return i(),o}async setRouteId(t,e,n){return{changed:await this.setRoot(t,e,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,e,n){if(this.activeComponent===t)return!1;const a=this.activeEl,s=await i(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e);return this.activeComponent=t,this.activeEl=s,await this.commit(s,a,n),await o(this.delegate,a),!0}async transition(t,e,n={}){if(e===t)return!1;this.ionNavWillChange.emit();const{mode:i,queue:o,win:s,el:r}=this,l=this.animated&&this.config.getBoolean("animated",!0),u=this.animation||n.animationBuilder||this.config.get("navAnimation");return await a(Object.assign({mode:i,queue:o,animated:l,animationBuilder:u,window:s,enteringEl:t,leavingEl:e,baseEl:r,progressCallback:n.progressAnimation?t=>this.ani=t:void 0},n)),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}render(){return t("slot",null)}static get is(){return"ion-router-outlet"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},setRouteId:{method:!0},swipeHandler:{type:"Any",attr:"swipe-handler",watchCallbacks:["swipeHandlerChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}export{s as PageAccount,r as IonRoute,l as IonRouteRedirect,D as IonRouter,E as IonRouterOutlet};