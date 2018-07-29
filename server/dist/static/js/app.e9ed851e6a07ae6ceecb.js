webpackJsonp([1],{"7zck":function(t,e){},EmOQ:function(t,e){},FZes:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("mvHQ"),i=a.n(r),s=a("/ocq"),o=a("NYxO");n.default.use(o.a);var l=new o.a.Store({state:{containers:[],error:"error"},mutations:{setContainers:function(t,e){t.containers=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=""}},actions:{}}),c=a("Xxa5"),u=a.n(c),v=a("exGp"),d=a.n(v),h=a("Zrlr"),f=a.n(h),p=a("wxAW"),m=a.n(p),g=a("1Gp2"),_=a.n(g),b={asJSON:function(t){var e=this;return d()(u.a.mark(function a(){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(window.URL.createObjectURL(t.data));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},a,e)}))()},base64URLDecode:function(t){switch((t=(t=t.replace("-","+")).replace("_","/")).length%4){case 0:break;case 2:t+="==";break;case 3:t+="="}return decodeURIComponent(escape(atob(t)))}},x=new(function(){function t(){f()(this,t),this.apiClient_=null}return m()(t,[{key:"apiClient",value:function(){var t=d()(u.a.mark(function t(){var e,a,n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==this.apiClient_){t.next=2;break}return t.abrupt("return",this.apiClient_);case 2:if(e=location.origin,a=e+"/api/v2/swagger/swagger.json",_.a.http.withCredentials=!0,null!=(n=ot.AccessToken)){t.next=9;break}return st.replace("/login"),t.abrupt("return");case 9:return t.next=11,_()(a,{responseInterceptor:function(t){if(1*t.status==401){console.log("Unauthorized");try{st.replace("/login")}catch(t){console.log(t)}}return t},authorizations:{jwt:"Bearer "+n}});case 11:return(r=t.sent).spec.schemes=[location.protocol.split(":")[0]],r.spec.host=location.hostname,console.log("generated"),this.apiClient_=r,t.abrupt("return",r);case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"fetchContainers",value:function(){var t=d()(u.a.mark(function t(){var e,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.apiClient();case 3:return e=t.sent,t.t0=b,t.next=7,e.apis.container.container_list();case 7:return t.t1=t.sent,t.next=10,t.t0.asJSON.call(t.t0,t.t1);case 10:a=t.sent,l.commit("setContainers",a),t.next=17;break;case 14:t.prev=14,t.t2=t.catch(0),console.log(t.t2);case 17:case"end":return t.stop()}},t,this,[[0,14]])}));return function(){return t.apply(this,arguments)}}()}]),t}()),k={name:"Dashboard",data:function(){return{}},created:function(){x.fetchContainers()},methods:{},computed:{createdCount:function(){return this.$store.state.containers.length},runningCount:function(){return this.$store.state.containers.filter(function(t){return"Running"===t.status}).length},errorCount:function(){return this.$store.state.containers.filter(function(t){return"Error"===t.status}).length}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"display-1"},[t._v("Welcome to modoki control panel")]),t._v(" "),a("v-layout",{staticClass:"pt-2",attrs:{"justify-start":""}},[a("h1",[t._v("Status")])]),t._v(" "),a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue lighten-1",height:"100%"}},[a("v-card-title",{staticClass:"pa-2"},[a("v-flex",{attrs:{md12:"","justify-center":""}},[a("div",{staticClass:"headline"},[t._v("Created")])])],1),t._v(" "),a("v-card-text",{staticClass:"pa-0"},[a("v-flex",{attrs:{md12:""}},[a("div",{staticClass:"subheading"},[t._v(t._s(t.createdCount)+" containers")])])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue lighten-1",height:"100%"}},[a("v-card-title",{staticClass:"pa-2"},[a("v-flex",{attrs:{md12:"","justify-center":""}},[a("div",{staticClass:"headline"},[t._v("Running")])])],1),t._v(" "),a("v-card-text",{staticClass:"pa-0"},[a("v-flex",{attrs:{md12:""}},[a("div",{staticClass:"subheading"},[t._v(t._s(t.runningCount)+" containers")])])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-card",{staticClass:"white--text",attrs:{height:"100%",color:(0==t.errorCount?"grey":"red")+" lighten-1"}},[a("v-card-title",{staticClass:"pa-2"},[a("v-flex",{attrs:{md12:"","justify-center":""}},[a("div",{staticClass:"headline"},[t._v("Error")])])],1),t._v(" "),a("v-card-text",{staticClass:"pa-0"},[a("v-flex",{attrs:{md12:""}},[a("div",{staticClass:"subheading"},[t._v(t._s(t.errorCount)+" containers")])])],1)],1)],1)],1)],1),t._v(" "),a("v-layout",{staticClass:"pt-2",attrs:{"justify-start":""}},[a("h1",[t._v("Notice")])]),t._v(" "),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"d-block":"","justify-start":""}},[a("div",{staticClass:"subheading"},[a("p",[t._v("Thank you for using "),a("a",{attrs:{href:"https://github.com/modoki-paas/modoki"}},[t._v("modoki")]),t._v("!")]),t._v(" "),a("p",[t._v("This project is still in development.")]),t._v(" "),a("p",[t._v("We welcome your contribution to this project.")]),t._v(" "),a("p",[t._v("The reference is "),a("a",{attrs:{href:"https://github.com/modoki-paas/modoki"}},[t._v("here")])])])])],1)],1)},staticRenderFns:[]};var y=a("VU/8")(k,w,!1,function(t){a("OD4l")},"data-v-1c8ce468",null).exports,C={props:["cid"],created:function(){var t=d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.updateConfig();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{dialog:!1,defaultShell:""}},watch:{dialog:function(t){var e=this;return d()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=3;break}return a.next=3,e.updateConfig();case 3:case"end":return a.stop()}},a,e)}))()}},methods:{updateConfig:function(){var t=this;return d()(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.apiClient();case 2:return a=e.sent,e.t0=b,e.next=6,a.apis.container.container_getConfig({id:t.cid});case 6:return e.t1=e.sent,e.next=9,e.t0.asJSON.call(e.t0,e.t1);case 9:n=e.sent,t.defaultShell=n.defaultShell;case 11:case"end":return e.stop()}},e,t)}))()},submit:function(){var t=this;return d()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!1,e.next=3,x.apiClient();case 3:return a=e.sent,e.next=6,a.apis.container.container_setConfig({id:t.cid,payload:{defaultShell:t.defaultShell}});case 6:case"end":return e.stop()}},e,t)}))()}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-icon",{staticClass:"mr-2",attrs:{slot:"activator",small:""},on:{click:function(e){t.dialog=!0}},slot:"activator"},[t._v("\n      edit\n    ")]),t._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Container Config")])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Default Shell"},model:{value:t.defaultShell,callback:function(e){t.defaultShell=e},expression:"defaultShell"}})],1)],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.submit()}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},D=a("VU/8")(C,S,!1,null,null,null).exports,A={props:["cid","name"],data:function(){return{checked:!1,dialog:!1}},methods:{remove:function(){var t=d()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.dialog=!1,t.next=3,x.apiClient();case 3:return e=t.sent,t.next=6,e.apis.container.container_remove({id:this.cid,force:this.checked});case 6:this.$store.dispatch("fetchContainers");case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-icon",{staticClass:"mr-2",attrs:{slot:"activator",small:""},on:{click:function(e){t.dialog=!0}},slot:"activator"},[t._v("\n      delete\n    ")]),t._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Are you sure you want to remove this?")])]),t._v(" "),a("v-card-text",[a("p",{staticClass:"text-xs-left"},[t._v("You cannot cancel this operation.")]),t._v(" "),a("p",{staticClass:"text-xs-left"},[t._v("Name: "+t._s(t.name))]),t._v(" "),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-checkbox",{attrs:{label:"Remove the container even though it's running"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"grey darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"red darken-1",flat:""},nativeOn:{click:function(e){t.remove()}}},[t._v("Remove")])],1)],1)],1)},staticRenderFns:[]},T={name:"Containers",components:{"container-config":D,"container-remove":a("VU/8")(A,I,!1,null,null,null).exports},created:function(){x.fetchContainers()},data:function(){return{loading:!1,pagination:{},headers:[{text:"ID",sortable:!1,align:"center"},{text:"Name",sortable:!1,align:"center"},{text:"Image",sortable:!1,align:"center"},{text:"Command",sortable:!1,align:"center"},{text:"Status",sortable:!1,align:"center"},{text:"#",sortable:!1}]}},computed:{containers:function(){return this.$store.state.containers}}},E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-start":"",row:"",wrap:""}},[a("h1",[t._v("Containers")]),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.$store.dispatch("fetchContainers")}}},[a("v-icon",[t._v("cached")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:"",to:"/containers/new"},slot:"activator"},[t._v("New Container")])],1),t._v(" "),a("v-layout",{attrs:{"d-inline-box":""}},[a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.containers,loading:t.loading,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.id))]),t._v(" "),a("td",[t._v(t._s(e.item.name))]),t._v(" "),a("td",[t._v(t._s(e.item.image))]),t._v(" "),a("td",[t._v(t._s(e.item.command))]),t._v(" "),a("td",[t._v(t._s(e.item.status))]),t._v(" "),a("td",{staticClass:"px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n            play_arrow\n          ")]),t._v(" "),a("container-config",{attrs:{cid:e.item.id}}),t._v(" "),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n            tv\n          ")]),t._v(" "),a("container-remove",{attrs:{cid:e.item.id,name:e.item.name}})],1)]}}])},[a("template",{slot:"no-data"})],2)],1)],1)],1)},staticRenderFns:[]};var O=a("VU/8")(T,E,!1,function(t){a("tA5s")},"data-v-6c3762da",null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v("404 Not Found")])])}]};var $=a("VU/8")({name:"NotFound",data:function(){return{}}},R,!1,function(t){a("kBdH")},"data-v-250ba0c7",null).exports,P={name:"NewContainer",data:function(){return{name:"",image:"",command:"",entrypoint:"",workDir:"",env:"",vol:"",sslRedirect:!0}},methods:{cancel:function(){this.$router.push(".")},submit:function(){var t=d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.apiClient();case 2:t.sent.apis.container.container_create({name:this.name,image:this.image,command:this.command.split(",")});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",[a("v-btn",{staticClass:"ml-0",attrs:{icon:""},on:{click:t.cancel}},[a("v-icon",[t._v("arrow_back")])],1),t._v(" "),a("h1",[t._v("New Container")])],1),t._v(" "),a("v-form",{on:{submit:function(e){t.submit()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{counter:64,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Image",required:""},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}}),t._v(" "),a("v-text-field",{attrs:{label:"Command(optional, split with ',')"},model:{value:t.command,callback:function(e){t.command=e},expression:"command"}}),t._v(" "),a("v-text-field",{attrs:{label:"Entrypoint(optional, split with ',')"},model:{value:t.entrypoint,callback:function(e){t.entrypoint=e},expression:"entrypoint"}}),t._v(" "),a("v-text-field",{attrs:{label:"Working Directory(optional)"},model:{value:t.workDir,callback:function(e){t.workDir=e},expression:"workDir"}}),t._v(" "),a("v-text-field",{attrs:{label:"Environment Variables(optional, split with ',')"},model:{value:t.env,callback:function(e){t.env=e},expression:"env"}}),t._v(" "),a("v-text-field",{attrs:{label:"Volumes(optional, split with ',')"},model:{value:t.vol,callback:function(e){t.vol=e},expression:"vol"}}),t._v(" "),a("v-checkbox",{attrs:{label:"Always SSL",required:""},model:{value:t.sslRedirect,callback:function(e){t.sslRedirect=e},expression:"sslRedirect"}})],1)],1)},staticRenderFns:[]};var F=a("VU/8")(P,j,!1,function(t){a("pENw")},"data-v-6fe0d0cd",null).exports,N={name:"Setting",data:function(){return{defaultShell:"",containers:{data:[{label:"hello",hash:"ecqwertyuiopasdfghjklzxcvbn",status:"running"}],headers:[{text:"Label",sortable:!1,align:"left"},{text:"Hash",sortable:!1,align:"left"},{text:"",sortable:!1,align:"right"}]},userInfo:{headers:[{text:"Key",sortable:!1},{text:"Value",sortable:!1}],data:[]}}},created:function(){var t=[],e=ot.MetaData;for(var a in e)t.push({key:a,value:e[a]});this.userInfo.data=t}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-start":"",row:"",wrap:""}},[a("h1",[t._v("User Information")])]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-data-table",{attrs:{headers:t.userInfo.headers,items:t.userInfo.data,loading:t.userInfo.loading,"hide-actions":"","hide-headers":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.key))]),t._v(" "),a("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.value))])]}}])},[a("template",{slot:"no-data"})],2)],1)],1),t._v(" "),a("v-layout",{staticClass:"pt-4",attrs:{"justify-start":"",row:"",wrap:""}},[a("h1",[t._v("General Setting")]),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("cached")])],1)],1),t._v(" "),a("v-layout",{attrs:{wrap:"",row:"","justify-start":""}},[a("v-flex",{attrs:{xs12:"",md12:""}},[a("v-text-field",{attrs:{label:"Default Shell"},model:{value:t.defaultShell,callback:function(e){t.defaultShell=e},expression:"defaultShell"}})],1),t._v(" "),a("v-flex",{attrs:{"align-start":""}},[a("v-btn",{attrs:{color:"blue"}},[t._v("Save")])],1)],1),t._v(" "),a("v-layout",{staticClass:"pt-4",attrs:{"justify-start":"",row:"",wrap:""}},[a("h1",[t._v("Authorized Keys")]),t._v(" "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("cached")])],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.containers.headers,items:t.containers.data,loading:t.containers.loading,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.label))]),t._v(" "),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.hash))]),t._v(" "),a("td",{staticClass:"text-xs-right px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n              arrow_downward\n            ")]),t._v(" "),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n              delete\n            ")])],1)]}}])},[a("template",{slot:"no-data"})],2)],1)],1)],1)},staticRenderFns:[]};var V=a("VU/8")(N,U,!1,function(t){a("z2+6")},"data-v-02e77eb0",null).exports,W=a("BO1k"),B=a.n(W),M=a("woOf"),q=a.n(M),z=a("//Fk"),L=a.n(z),J=a("6hKT"),H=function(){function t(e,a){f()(this,t),this.WebAuthOptions=JSON.parse(i()(e)),this.MetaDataBinding=a,this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.auth0=new J.a.WebAuth({domain:this.WebAuthOptions.domain,clientID:this.WebAuthOptions.clientID,redirectUri:this.WebAuthOptions.redirectUri,responseType:"id_token",scope:"openid profile"})}return m()(t,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var t=this;return new L.a(function(e,a){t.auth0.parseHash(function(n,r){if(null!=r&&null!=r.idToken)console.log(r),t.setSession(r),e();else{if(n)return l.commit("setError",n),setTimeout(function(){return st.push("/login")},3e3),console.log(n),void a(n);if(!r.idToken)return n="responseType must include id_token.",l.commit("setError",n),setTimeout(function(){return st.push("/login")},3e3),void a(n)}a(new Error("format error"))})})}},{key:"setSession",value:function(t){ot.AuthType="auth0",ot.AccessToken=t.idToken;var e=ot.Payload,a={};for(var n in console.log(this.MetaDataBinding),this.MetaDataBinding){var r=q()({},e),i=!0,s=!1,o=void 0;try{for(var l,c=B()(this.MetaDataBinding[n].split("."));!(i=(l=c.next()).done);i=!0){r=r[l.value]}}catch(t){s=!0,o=t}finally{try{!i&&c.return&&c.return()}finally{if(s)throw o}}a[n]=r}ot.MetaData=a}}]),t}(),G=a("yviF"),K=a.n(G),Q=(a("dih4"),a("2ahc")),Z=a.n(Q),Y=function(){function t(e,a){f()(this,t),K.a.apps.length||(this.config=JSON.parse(i()(e)),this.MetaDataBinding=a,this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),K.a.initializeApp(this.config))}return m()(t,[{key:"login",value:function(t){var e={callbacks:{signInSuccessWithAuthResult:function(t,e){return console.log(t),localStorage.setItem("hoge",i()(t)),!0},uiShown:function(){}},signInSuccessUrl:"/web/callback/firebase",signInFlow:"popup",queryParameterForWidgetMode:"firebase-mode",signInOptions:[K.a.auth.GoogleAuthProvider.PROVIDER_ID,K.a.auth.FacebookAuthProvider.PROVIDER_ID,K.a.auth.TwitterAuthProvider.PROVIDER_ID,K.a.auth.GithubAuthProvider.PROVIDER_ID,K.a.auth.EmailAuthProvider.PROVIDER_ID,K.a.auth.PhoneAuthProvider.PROVIDER_ID]};null==Z.a.auth.AuthUI.getInstance()&&new Z.a.auth.AuthUI(K.a.auth()).start(t,e)}},{key:"handleResponse",value:function(){return new L.a(function(t,e){var a=K.a.auth().onAuthStateChanged(function(n){a(),n?n.getIdToken().then(function(e){t(e)}):e(new Error("logout"))},function(t){e(t)})})}},{key:"setSession",value:function(t){ot.AuthType="firebase",ot.AccessToken=t;var e=ot.Payload,a={};for(var n in console.log(this.MetaDataBinding),this.MetaDataBinding){var r=q()({},e),i=!0,s=!1,o=void 0;try{for(var l,c=B()(this.MetaDataBinding[n].split("."));!(i=(l=c.next()).done);i=!0){r=r[l.value]}}catch(t){s=!0,o=t}finally{try{!i&&c.return&&c.return()}finally{if(s)throw o}}a[n]=r}ot.MetaData=a}}]),t}(),X=(a("EmOQ"),{data:function(){return{name:"",authOptions:{},loading:!0,firebaseDialog:!1,firebaseService:null}},created:function(){var t=this;fetch("./authconfig.json").then(function(t){return t.json()}).then(function(e){t.authOptions=e,t.loading=!1,"firebase"in t.authOptions&&"select"===t.$route.query["firebase-mode"]&&t.loginWithFirebase()}).catch(function(e){t.$store.commit("setError",e.toString())})},methods:{login:function(){this.$store.commit("setName",this.name),this.$router.push("/chat")},loginWithAuth0:function(){new H(this.authOptions.auth0.webAuthOptions,this.authOptions.auth0.metaDataBinding).login()},loginWithFirebase:function(){this.firebaseService=new Y(this.authOptions.firebase.config,this.authOptions.firebase.metaDataBinding),this.firebaseService.login("#firebase-popup"),this.firebaseDialog=!0}}}),tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"blue-grey lighten-2"}},[a("v-toolbar-title",[t._v("Login")])],1),t._v(" "),t.loading?a("v-card-text",[a("v-progress-circular",{attrs:{size:70,width:7,color:"red lighten-2",indeterminate:""}})],1):a("v-card-text",[a("v-flex",{attrs:{xs12:""}},[t._v("\n              Choose a login method.\n            ")]),t._v(" "),"auth0"in this.authOptions?a("v-flex",{attrs:{xs12:""},on:{click:function(e){e.stopPropagation(),t.loginWithAuth0()}}},[a("v-btn",{attrs:{depressed:"",large:"",color:"orange darken-2"}},[t._v("Login with Auth0")])],1):t._e(),t._v(" "),"firebase"in this.authOptions?a("v-flex",{attrs:{xs12:""},on:{click:function(e){e.stopPropagation(),t.loginWithFirebase()}}},[a("v-btn",{attrs:{depressed:"",large:"",color:"amber lighten-1"}},[t._v("Login with Firebase")])],1):t._e()],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"500"},model:{value:t.firebaseDialog,callback:function(e){t.firebaseDialog=e},expression:"firebaseDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        Login with Firebase\n      ")]),t._v(" "),a("v-card-text",[a("div",{attrs:{id:"firebase-popup"}})])],1)],1)],1)},staticRenderFns:[]},et=a("VU/8")(X,tt,!1,null,null,null).exports,at={name:"Callback",created:function(){var t=d()(u.a.mark(function t(){var e,a,n,r,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("aaa"),t.prev=1,t.next=4,fetch("../authconfig.json");case 4:return e=t.sent,t.next=7,e.json();case 7:if(a=t.sent,"auth0"!==this.$route.params.type){t.next=16;break}return n=new H(a.auth0.webAuthOptions,a.auth0.metaDataBinding),t.next=12,n.handleAuthentication();case 12:null==t.sent&&this.$router.push("/"),t.next=32;break;case 16:if("firebase"!==this.$route.params.type){t.next=31;break}return r=new Y(a.firebase.config,a.firebase.metaDataBinding),t.prev=18,t.next=21,r.handleResponse();case 21:i=t.sent,r.setSession(i),this.$router.push("/"),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(18),this.$store.commit("setError",t.t0.toString());case 29:t.next=32;break;case 31:console.log("Unknown auth type:",this.$route.params.type);case 32:t.next=38;break;case 34:t.prev=34,t.t1=t.catch(1),console.log(t.t1),this.$store.commit("setError",t.t1.toString());case 38:case"end":return t.stop()}},t,this,[[1,34],[18,26]])}));return function(){return t.apply(this,arguments)}}()},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[e("v-progress-circular",{attrs:{size:70,width:7,color:"red lighten-2",indeterminate:""}})],1)},staticRenderFns:[]};var rt=a("VU/8")(at,nt,!1,function(t){a("FZes")},"data-v-be191b7e",null).exports;n.default.use(s.a);var it=new s.a({base:"/web/",mode:"history",routes:[{path:"/",name:"dashboard",component:y,meta:{requiresAuth:!0}},{path:"/containers/",name:"containers",component:O,meta:{requiresAuth:!0}},{path:"/containers/new",name:"newContainer",component:F,meta:{requiresAuth:!0}},{path:"/setting",name:"setting",component:V,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:et},{path:"/callback/:type",name:"callback",component:rt},{path:"*",component:$}]});it.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})&&(console.log(t),ot.checkAccessToken()),l.commit("clearError"),a()});var st=it,ot={_authType:null,_accesToken:null,_metaData:null,logout:function(){localStorage.removeItem("access_token"),localStorage.removeItem("auth_type"),localStorage.removeItem("meta_data"),this._authType=null,this._accesToken=null,st.replace("/login")},set MetaData(t){localStorage.setItem("meta_data",i()(t)),this._metaData=t},get MetaData(){return null!=this._metaData?this._metaData:(this._metaData=JSON.parse(localStorage.getItem("meta_data")),this._metaData)},set AuthType(t){localStorage.setItem("auth_type",t),this._authType=t},get AuthType(){return null!=this._authType?this._authType:(this._authType=localStorage.getItem("auth_type"),this._authType)},set AccessToken(t){localStorage.setItem("access_token",t),this._accesToken=t},get AccessToken(){return null!=this._accesToken?this._accesToken:(this._accesToken=localStorage.getItem("access_token"),this._accesToken)},get Payload(){var t=this.AccessToken;return null==t?null:JSON.parse(b.base64URLDecode(t.split(".")[1]))},checkAccessToken:function(){var t=this.AccessToken;if(null!=t)return 1e3*this.Payload.exp<(new Date).getTime()&&this.logout(),t;st.replace("/login")}},lt={name:"logoutDialog",props:["logoutDialog"],data:function(){return{seen:!1}},watch:{logoutDialog:function(t){this.seen=t},seen:function(t){t||this.$emit("close","cancel")}},methods:{closeEvent:function(t){this.$emit("close",t),"logout"===t&&ot.logout()}}},ct={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.seen,callback:function(e){t.seen=e},expression:"seen"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to log out? ")]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){e.stopPropagation(),t.seen=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),a("v-btn",{attrs:{color:"red darken-1",flat:"flat"},on:{click:function(e){e.stopPropagation(),t.closeEvent("logout")}}},[t._v("\n        Log out\n      ")])],1)],1)],1)},staticRenderFns:[]};var ut={name:"App",components:{"logout-dialog":a("VU/8")(lt,ct,!1,function(t){a("biuw")},"data-v-215a9bdd",null).exports},data:function(){return{drawer:!1,logoutDialog:!1,name:""}},created:function(){this.name=this.getName()},updated:function(){this.name=this.getName()},methods:{closeEvent:function(t){this.logoutDialog=!1},getName:function(){var t=ot.AuthType,e=ot.AccessToken;if(console.log("app",t,e),null==t||null==e)return"";switch(t){case null:return"";case"auth0":return ot.Payload.nickname||"user";case"firebase":return ot.Payload.name||"user";default:return""}}},computed:{errorAlertShown:{get:function(){return 0!==this.$store.state.error.length},set:function(t){t||this.$store.commit("clearError")}}}},vt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-list",[a("v-list-tile",[a("v-list-tile-title",{staticClass:"title"},[t._v("\n            Control Panel\n          ")])],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-list-tile",{attrs:{to:"/"}},[a("v-list-tile-action",[a("v-icon",[t._v("dashboard")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Dashboard")])],1)],1),t._v(" "),a("v-list-tile",{attrs:{to:"/containers/"}},[a("v-list-tile-action",[a("v-icon",[t._v("computer")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Containers")])],1)],1),t._v(" "),a("v-list-tile",{attrs:{to:"/setting"}},[a("v-list-tile-action",[a("v-icon",[t._v("settings")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Setting")])],1)],1)],1)],1),t._v(" "),a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",[t._v("\n      modoki\n    ")]),t._v(" "),a("v-spacer"),t._v(" "),0!=t.name.length?a("v-toolbar-items",[a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n              "+t._s(t.name)+"\n            ")]),t._v(" "),a("v-list",[a("v-list-tile",{attrs:{to:"/setting"}},[a("v-list-tile-title",[t._v("Setting")])],1),t._v(" "),a("v-list-tile",{on:{click:function(e){e.stopPropagation(),t.logoutDialog=!0}}},[a("v-list-tile-title",[t._v("Logout")])],1)],1)],1)],1):t._e()],1),t._v(" "),a("v-content",{staticClass:"pt-0"},[a("v-layout",{attrs:{column:"","fill-height":""}},[a("v-flex",[a("v-alert",{attrs:{value:!0,type:"error",dismissible:""},model:{value:t.errorAlertShown,callback:function(e){t.errorAlertShown=e},expression:"errorAlertShown"}},[t._v("\n          "+t._s(t.$store.state.error)+"\n        ")])],1),t._v(" "),a("v-flex",{attrs:{"fill-height":""}},[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",[a("v-flex",[a("router-view")],1)],1)],1)],1)],1),t._v(" "),a("logout-dialog",{attrs:{logoutDialog:t.logoutDialog},on:{close:t.closeEvent}})],1),t._v(" "),a("v-footer",{attrs:{app:""}},[a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[t._v("\n      Copyright (c) 2018 Tsuzu\n    ")])],1)],1)},staticRenderFns:[]};var dt=a("VU/8")(ut,vt,!1,function(t){a("dyA2")},null,null).exports,ht=a("3EgV"),ft=a.n(ht),pt=a("9JMe");a("7zck"),a("csSS"),a("gJtD");n.default.use(ft.a,{iconfont:"mdi"}),Object(pt.sync)(l,st),n.default.mixin({}),n.default.config.productionTip=!1,new n.default({el:"#app",router:st,store:l,components:{App:dt},template:"<App/>"})},OD4l:function(t,e){},biuw:function(t,e){},csSS:function(t,e){},dyA2:function(t,e){},gJtD:function(t,e){},kBdH:function(t,e){},pENw:function(t,e){},tA5s:function(t,e){},"z2+6":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e9ed851e6a07ae6ceecb.js.map