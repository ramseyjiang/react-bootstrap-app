(this["webpackJsonpreact-bootstrap-app"]=this["webpackJsonpreact-bootstrap-app"]||[]).push([[0],{105:function(e,t,a){},15:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(208);t.a=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(c.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),o=a.n(c),l=(a(104),a(105),a(13)),s=a(210),i=a(8),u=a(215),m=a(214),p=a(11),d=a.n(p),b=a(20),g=a(7);function E(e){localStorage.removeItem(e)}var f={isLoggedIn:!1,loading:!1,username:null,role:{isAdmin:!1,isManager:!1,isStaff:!1,isClient:!0},error:null};function h(e,t){switch(t.type){case"INIT":return v();case"LOADING":return Object(g.a)({},e,{loading:!0});case"SUCCESS":return O(t);case"FAIL":return j(t);case"LOGOUT":return y();default:return e}}var v=function(){var e,t=(e="username",localStorage.getItem(e));return Object(g.a)({},f,{isLoggedIn:null!==t,username:t})},O=function(e){var t,a;return t="username",a=e.username,localStorage.setItem(t,a),Object(g.a)({},f,{isLoggedIn:!0,username:e.username})},j=function(e){return E("username"),Object(g.a)({},f,{error:e.error})},y=function(){return E("username"),Object(g.a)({},f)},w=a(33),C=a.n(w),S=(a(109),C.a.apps.length?C.a.app():C.a.initializeApp({apiKey:"AIzaSyB9YKwIHZ2c85281O7m1Ai6b6J-6On52OY",authDomain:"react-hooks-aaf49.firebaseapp.com",databaseURL:"https://react-hooks-aaf49.firebaseio.com",projectId:"react-hooks-aaf49",storageBucket:"react-hooks-aaf49.appspot.com",messagingSenderId:"896651019085",appId:"1:896651019085:web:33ee6cf95f456f247b2d04",measurementId:"G-R7SVX0L3PG"})),k=new C.a.auth.GoogleAuthProvider,I=new C.a.auth.FacebookAuthProvider,A=Object(n.createContext)(),L=function(){return Object(n.useContext)(A)},N=function(e){var t=e.children,a=Object(n.useReducer)(h,f),c=Object(i.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)((function(){null===o.username&&l({type:"INIT"})}),[o.username]);var s=function(){return l({type:"LOADING"})},u=Object(n.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){if(e.user)return l({type:"SUCCESS",username:t.username})})).catch((function(e){return l({type:"FAIL",error:e.message})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),m=Object(n.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.auth().signInWithEmailAndPassword(t.email,t.password).then((function(e){if(e.user)return l({type:"SUCCESS",username:t.email})})).catch((function(e){return l({type:"FAIL",error:e.message})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),p=Object(n.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"google"===t?(t=k).addScope("https://www.googleapis.com/auth/plus.login"):t=I,S.auth().signInWithPopup(t).then((function(e){return l({type:"SUCCESS",username:e.user.displayName})})).catch((function(e){return l({type:"FAIL",error:e.message})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),g=Object(n.useCallback)((function(){S.auth().signOut().then((function(){return l({type:"LOGOUT"})})).catch((function(e){return l({type:"FAIL",error:e.message})}))}),[]),E=Object(n.useMemo)((function(){return{state:o,loading:s,logout:g,firebaseRegister:u,firebaseLogin:m,socialSignIn:p}}),[g,u,m,p,o]);return r.a.createElement(A.Provider,{value:{authApi:E}},t)},x=function(){var e=L().authApi,t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],s=e.state.isLoggedIn?"primary":"dark";return r.a.createElement(u.a,{expanded:c,fixed:"top",expand:"sm",bg:s,variant:"dark"},r.a.createElement(u.a.Brand,{href:"/react-bootstrap-app"},"HooksHut"),r.a.createElement(u.a.Toggle,{onClick:function(){return o(!c&&"expanded")},"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(l.b,{exact:!0,className:"nav-link",to:"/react-bootstrap-app",onClick:function(){return o(!1)}},"Home"),r.a.createElement(l.b,{className:"nav-link",to:"/dogs",onClick:function(){return o(!1)}},"Dogs"),r.a.createElement(l.b,{className:"nav-link",to:"/movies",onClick:function(){return o(!1)}},"Movies"),r.a.createElement(l.b,{className:"nav-link",to:"/tasks",onClick:function(){return o(!1)}},"Tasks"),r.a.createElement(l.b,{className:"nav-link",to:"/contact",onClick:function(){return o(!1)}},"Contact")),!e.state.isLoggedIn&&r.a.createElement(m.a,null,r.a.createElement(l.b,{exact:!0,to:"/login",className:"nav-link"},"Login"),r.a.createElement(l.b,{exact:!0,to:"/register",className:"nav-link"},"Register")),e.state.isLoggedIn&&r.a.createElement(m.a,null,r.a.createElement(l.b,{to:"/react-bootstrap-app",onClick:function(){return e.logout()},className:"nav-link"},"Logout"))))},T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null))};function D(){return(new Date).getFullYear()}var U=function(){return r.a.createElement("div",{className:"font-small bg-dark"},r.a.createElement("div",{className:"text-center text-white py-1"},"\xa9 ",D()," Copyright:Ramsey Jiang"))},G=a(94),_=a(23),R={data:null,loading:!1,errorMessage:null},F=function(e,t){switch(t.type){case"LOADING":return Object(g.a)({},e,{loading:!0});case"GET_WEATHER_SUCCESS":return Object(g.a)({},R,{data:t.data});case"GET_WEATHER_FAILURE":return Object(g.a)({},R,{errorMessage:"Something wrong!"});default:throw new Error}},P=a(26),M=Object(n.createContext)(),z=function(e){var t=e.children,a=Object(n.useReducer)(F,R),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useCallback)((function(){Object(P.a)("https://ipapi.co/json/").then((function(e){var t=e.city+","+e.country;Object(P.a)("https://api.openweathermap.org/data/2.5/weather?APPID=3a58f9dd1f1515ec0dba25894ccea202&q="+t).then((function(e){try{l({type:"GET_WEATHER_SUCCESS",data:e})}catch(t){l({type:"GET_WEATHER_FAILURE",data:e})}}))}))}),["https://ipapi.co/json/"]),u=Object(n.useMemo)((function(){return{state:o,getWeather:s}}),[o,s]);return r.a.createElement(M.Provider,{value:{weatherApi:u}},t)},H=a(15),W=a(216),B=function(){var e=Object(n.useContext)(M).weatherApi;return Object(n.useEffect)((function(){e.getWeather()}),[]),r.a.createElement(r.a.Fragment,null,e.state.data?r.a.createElement(W.a,{className:"justify-content-center weather-bar",variant:"info"},"Welcome, current weather is ",e.state.data.weather[0].main,", temperature is ",Math.round(5*(9*e.state.data.main.temp/5-459.67-32)/9),"\xb0C, conditions: ",e.state.data.weather[0].description):r.a.createElement(H.a,null))},K=["AUD","CNY","NZD","SGD"],Y={data:{initialized:!1,rates:{},base:"USD",tableKeys:{AUD:"AUD",CNY:"CNY",NZD:"NZD",SGD:"SGD"},barData:{}},loading:!1,errorMessage:null},Z=function(e,t){switch(t.type){case"LOADING":return Object(g.a)({},e,{loading:!0});case"GET_LATEST_SUCCESS":return Object(g.a)({},Y,{data:{initialized:!0,rates:t.data.rates,base:t.data.base,barData:J(t.data.rates),tableKeys:Y.data.tableKeys}});case"GET_LATEST_FAILURE":return Object(g.a)({},Y,{errorMessage:"Something wrong!"});default:throw new Error}},J=function(e){var t=Object.keys(e).filter((function(e){return K.includes(e)}));return{labels:t,datasets:[{backgroundColor:"green",data:t.map((function(t){return e[t]}))}]}},q=Object(n.createContext)(),$=function(e){var t=e.children,a=Object(n.useReducer)(Z,Y),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useCallback)((function(){Object(P.a)("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){try{l({type:"GET_LATEST_SUCCESS",data:e})}catch(t){l({type:"GET_LATEST_FAILURE",data:e})}}))}),[]),u=Object(n.useMemo)((function(){return{state:o,getLatestExchangeRate:s}}),[o,s]);return r.a.createElement(q.Provider,{value:{exchangeApi:u}},t)},V=a(211),X=a(95),Q=function(){var e=Object(n.useContext)(q).exchangeApi;Object(n.useEffect)((function(){e.getLatestExchangeRate()}),[]);return r.a.createElement(s.a,{className:"exchange-rate-bg rounded"},r.a.createElement("h3",{className:"text-center"},"Exchange rates on ",(new Date).getDate(),"-",function(){var e=(new Date).getMonth()+1;return e>=10?e:"0"+e}(),"-",D()),r.a.createElement(V.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),Object.keys(e.state.data.tableKeys).map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"USD"),e.state.data.initialized&&Object.keys(e.state.data.tableKeys).map((function(t){return r.a.createElement("td",{key:t},Math.floor(100*Number(e.state.data.rates[t]))/100)}))))),r.a.createElement("div",{style:{height:"200px",width:"auto",margin:"0 auto"}},r.a.createElement(X.a,{data:e.state.data.barData,options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:"USD Exchanges Rates"}}})))},ee={data:{btc:"",ltc:"",eth:""},loading:!1,errorMessage:null},te=function(e,t){switch(t.type){case"LOADING":return Object(g.a)({},e,{loading:!0});case"GET_COIN_SUCCESS":return Object(g.a)({},ee,{data:{btc:t.data.BTC.USD,ltc:t.data.LTC.USD,eth:t.data.ETH.USD}});case"GET_COIN_FAILURE":return Object(g.a)({},ee,{errorMessage:"Something wrong!"});default:throw new Error}},ae=Object(n.createContext)(),ne=function(e){var t=e.children,a=Object(n.useReducer)(te,ee),c=Object(i.a)(a,2),o=c[0],l=c[1],s="https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD",u=Object(n.useCallback)((function(){return l({type:"LOADING"})}),[]),m=Object(n.useCallback)((function(){Object(P.a)(s).then((function(e){try{l({type:"GET_COIN_SUCCESS",data:e})}catch(t){l({type:"GET_COIN_FAILURE",data:e})}}))}),[s]),p=Object(n.useMemo)((function(){return{state:o,getCoins:m,loading:u}}),[o,m,u]);return r.a.createElement(ae.Provider,{value:{coinsApi:p}},t)},re=a(212),ce=a(97),oe=a(217),le=function(){var e=Object(n.useContext)(ae).coinsApi;return Object(n.useEffect)((function(){e.loading(),e.getCoins()}),[]),r.a.createElement(s.a,{className:"coins-bg rounded"},r.a.createElement(W.a,{className:"justify-content-center",variant:"primary"},"The first part is a real time price about BTC, ETH and LTC."),e.state.loading&&!e.state.errorMessage?r.a.createElement(H.a,null):r.a.createElement(re.a,null,Object.keys(e.state.data).map((function(t,a){return r.a.createElement(ce.a,{key:a,className:"col-4 dog-card-margin"},r.a.createElement(oe.a,{className:"text-center",bg:"info"},r.a.createElement(oe.a.Body,null,r.a.createElement(oe.a.Title,null,"$",e.state.data[t]),r.a.createElement(oe.a.Text,null,"1 ",t.toUpperCase()))))}))))},se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,r.a.createElement(B,null)),r.a.createElement(ne,null,r.a.createElement(le,null)),r.a.createElement($,null,r.a.createElement(Q,null)))},ie=a(28),ue=a(51),me=a(213),pe=a(27);function de(e){return r.a.createElement("div",null,r.a.createElement("small",{className:"text-sm-left"},e.title,":",r.a.createElement("button",{className:"border rounded-circle border-light social-button-padding"},r.a.createElement("img",{alt:"Register with Google",onClick:e.handleGoogle,src:"https://www.gstatic.com/mobilesdk/160512_mobilesdk/auth_service_google.svg"})),r.a.createElement("button",{className:"border rounded-circle border-light social-button-padding"},r.a.createElement("img",{alt:"Register with Facebook",onClick:e.handleFb,src:"https://www.gstatic.com/mobilesdk/160409_mobilesdk/images/auth_service_facebook.svg"}))))}function be(){var e=L().authApi,t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),c=a[0],o=a[1],l=function(e){o(Object(g.a)({},c,Object(ie.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,e.state.loading&&r.a.createElement(H.a,null),!e.state.loading&&r.a.createElement(s.a,{className:"justify-content-center col-6 bg-light rounded"},e.state.error&&r.a.createElement(W.a,{variant:"danger"},e.state.error),r.a.createElement(ue.a,{onSubmit:function(t){e.loading(),t.preventDefault(),e.firebaseLogin(c)},method:"post",className:"auth-padding"},r.a.createElement(de,{handleGoogle:function(){e.socialSignIn("google")},handleFb:function(){e.socialSignIn("fb")},title:"Login with"}),r.a.createElement(pe.a,{placeholder:"Please input email",type:"text",label:"Email",name:"email",value:c.email,onChange:l}),r.a.createElement(pe.a,{placeholder:"Please input password",type:"password",label:"Password",name:"password",value:c.password,onChange:l}),r.a.createElement(me.a,{variant:"primary",type:"submit",size:"sm"},"Login"))))}function ge(){var e=L().authApi,t=Object(n.useState)({username:"",password:""}),a=Object(i.a)(t,2),c=a[0],o=a[1],l=function(e){o(Object(g.a)({},c,Object(ie.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,e.state.loading&&r.a.createElement(H.a,null),!e.state.loading&&r.a.createElement(s.a,{className:"justify-content-center col-6 bg-light rounded"},e.state.error&&r.a.createElement(W.a,{variant:"danger"},e.state.error),r.a.createElement(ue.a,{onSubmit:function(t){e.loading(),t.preventDefault(),e.firebaseRegister(c)},method:"post",className:"auth-padding"},r.a.createElement(de,{handleGoogle:function(){e.socialSignIn("google")},handleFb:function(){e.socialSignIn("fb")},title:"Register with"}),r.a.createElement(pe.a,{placeholder:"Please input username",type:"text",label:"Username",name:"username",value:c.username,onChange:l}),r.a.createElement(pe.a,{placeholder:"Please input email",type:"email",label:"Email",name:"email",value:c.email,onChange:l}),r.a.createElement(pe.a,{placeholder:"Please input password",type:"password",label:"Password",name:"password",value:c.password,onChange:l}),r.a.createElement(me.a,{variant:"primary",type:"submit",size:"sm"},"Register"))))}var Ee=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,220))})),fe=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,224))})),he=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,223))})),ve=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,222))})),Oe=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,221))})),je=function(){var e=L().authApi,t=function(t){var a=t.component,n=Object(G.a)(t,["component"]);if(a===be&&e.state.isLoggedIn)return r.a.createElement(_.a,{to:"/react-bootstrap-app"});if(a===ge&&e.state.isLoggedIn)return r.a.createElement(_.a,{to:"/react-bootstrap-app"});if(a!==ge||e.state.isLoggedIn){var c=e.state.isLoggedIn?a:be;return r.a.createElement(_.b,Object.assign({},n,{component:c}))}return r.a.createElement(_.b,Object.assign({},n,{component:ge}))};return r.a.createElement(n.Suspense,{fallback:r.a.createElement(H.a,null)},r.a.createElement(_.d,null,r.a.createElement(_.b,{exact:!0,path:"/react-bootstrap-app",component:se}),r.a.createElement(_.b,{path:"/react-bootstrap-app",component:se}),r.a.createElement(t,{path:"/login",component:be}),r.a.createElement(t,{path:"/register",component:ge}),r.a.createElement(_.b,{path:"/dogs",component:fe}),r.a.createElement(_.b,{path:"/movies",component:he}),r.a.createElement(t,{path:"/tasks",component:ve}),r.a.createElement(_.b,{path:"/contact",component:Oe}),r.a.createElement(_.b,{component:Ee})))},ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(s.a,{fluid:!0},r.a.createElement(je,null)),r.a.createElement(U,null))},we=function(){return r.a.createElement(l.a,null,r.a.createElement(N,null,r.a.createElement(ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(11),r=a.n(n),c=a(20),o=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},27:function(e,t,a){"use strict";var n=a(8),r=a(0),c=a.n(r),o=a(51);t.a=function(e){var t=e.name,a=e.type,l=e.placeholder,s=e.onChange,i=(e.onBlur,e.error,e.label),u=(e.multiple,e.value),m=Object(r.useState)(!1),p=Object(n.a)(m,2),d=p[0],b=p[1];return c.a.createElement(o.a.Group,null,c.a.createElement(o.a.Label,null,i),c.a.createElement(o.a.Control,{type:d?"text":a,placeholder:l,name:t,value:u,onChange:s,required:!0}),"password"===t&&c.a.createElement(o.a.Check,{type:"checkbox",label:d?"Hide password":"Show password",onClick:function(e){b(!1===d)}}))}},99:function(e,t,a){e.exports=a(207)}},[[99,1,2]]]);
//# sourceMappingURL=main.858e36d2.chunk.js.map