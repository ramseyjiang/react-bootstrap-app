(this["webpackJsonpreact-bootstrap-app"]=this["webpackJsonpreact-bootstrap-app"]||[]).push([[0],{100:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),l=a.n(c),o=(a(99),a(100),a(11)),u=a(201),s=a(12),i=a(204),m=a(203),p=a(9),d=a.n(p),b=a(22),E=a(6);function f(e,t){return localStorage.setItem(e,t)}var g={isLoggedIn:!1,loading:!1,username:null,role:{isAdmin:!1,isManager:!1,isStaff:!1,isClient:!0},error:null};function h(e,t){switch(t.type){case"INIT":return v();case"LOADING":return Object(E.a)({},e,{loading:!0});case"LOGIN_SUCCESS":return O(t);case"LOGIN_FAIL":return j(t);case"LOGOUT":return y();default:return e}}var v=function(){var e,t=(e="username",localStorage.getItem(e));return Object(E.a)({},g,{isLoggedIn:null!==t,username:t})},O=function(e){return f("username",e.username),Object(E.a)({},g,{isLoggedIn:!0,username:e.username})},j=function(e){return f("username",null),Object(E.a)({},g,{error:e.error})},y=function(){var e;return e="username",localStorage.removeItem(e),Object(E.a)({},g)},C=Object(n.createContext)(),w=function(){return Object(n.useContext)(C)},S=function(e){var t=e.children,a=Object(n.useReducer)(h,g),c=Object(s.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){null===l.username&&o({type:"INIT"})}),[l.username]);var u=function(){return o({type:"LOADING"})},i=Object(n.useCallback)((function(e){return o("ramsey"===e?{type:"LOGIN_SUCCESS",username:e}:{type:"LOGIN_FAIL",error:"User not found!"})}),[]),m=function(e){return new Promise((function(t){return setTimeout(t,e)}))},p=Object(n.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(2e3);case 2:if("ramsey"!==t){e.next=6;break}return e.abrupt("return",o({type:"LOGIN_SUCCESS",username:t}));case 6:return e.abrupt("return",o({type:"LOGIN_FAIL",error:"User not found!"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),E=Object(n.useCallback)((function(){o({type:"LOGOUT"})}),[]),f=Object(n.useMemo)((function(){return{state:l,loading:u,logout:E,login:i,apiLogin:p}}),[E,i,p,l]);return r.a.createElement(C.Provider,{value:{authApi:f}},t)},k=function(){var e=w().authApi,t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],l=a[1],u=e.state.isLoggedIn?"primary":"dark";return r.a.createElement(i.a,{expanded:c,fixed:"top",expand:"sm",bg:u,variant:"dark"},r.a.createElement(i.a.Brand,{href:"/react-bootstrap-app"},"HooksHut"),r.a.createElement(i.a.Toggle,{onClick:function(){return l(!c&&"expanded")},"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(o.b,{exact:!0,className:"nav-link",to:"/react-bootstrap-app",onClick:function(){return l(!1)}},"Home"),r.a.createElement(o.b,{className:"nav-link",to:"/movies",onClick:function(){return l(!1)}},"Movies"),r.a.createElement(o.b,{className:"nav-link",to:"/tasks",onClick:function(){return l(!1)}},"Tasks"),r.a.createElement(o.b,{className:"nav-link",to:"/contact",onClick:function(){return l(!1)}},"Contact")),!e.state.isLoggedIn&&r.a.createElement(m.a,null,r.a.createElement(o.b,{exact:!0,to:"/login",className:"nav-link"},"Login"),r.a.createElement(o.b,{exact:!0,to:"/register",className:"nav-link"},"Register")),e.state.isLoggedIn&&r.a.createElement(m.a,null,r.a.createElement(o.b,{to:"/react-bootstrap-app",onClick:function(){return e.logout()},className:"nav-link"},"Logout"))))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))};var A=function(){return r.a.createElement("div",{className:"font-small bg-dark"},r.a.createElement("div",{className:"text-center text-white py-1"},"\xa9 ",(new Date).getFullYear()," Copyright:Ramsey Jiang"))},x=a(90),I=a(18),N=a(205),D={data:null,loading:!1,errorMessage:null},T=function(e,t){switch(t.type){case"LOADING":return Object(E.a)({},e,{loading:!0});case"GET_WEATHER_SUCCESS":return Object(E.a)({},D,{data:t.data});case"GET_WEATHER_FAILURE":return Object(E.a)({},D,{errorMessage:"Something wrong!"});default:throw new Error}},G=a(31),U=Object(n.createContext)(),_=function(e){var t=e.children,a=Object(n.useReducer)(T,D),c=Object(s.a)(a,2),l=c[0],o=c[1],u=Object(n.useCallback)((function(){Object(G.a)("https://ipapi.co/json/").then((function(e){var t=e.city+","+e.country;Object(G.a)("https://api.openweathermap.org/data/2.5/weather?APPID=3a58f9dd1f1515ec0dba25894ccea202&q="+t).then((function(e){try{o({type:"GET_WEATHER_SUCCESS",data:e})}catch(t){o({type:"GET_WEATHER_FAILURE",data:e})}}))}))}),["https://ipapi.co/json/"]),i=Object(n.useMemo)((function(){return{state:l,getWeather:u}}),[l,u]);return r.a.createElement(U.Provider,{value:{weatherApi:i}},t)},R=function(){var e=Object(n.useContext)(U).weatherApi;return Object(n.useEffect)((function(){e.getWeather()}),[]),r.a.createElement(r.a.Fragment,null,e.state.data&&r.a.createElement(N.a,{className:"justify-content-center weather-bar",variant:"info"},"Welcome, current weather is ",e.state.data.weather[0].main,", temperature is ",Math.round(5*(9*e.state.data.main.temp/5-459.67-32)/9),"\xb0C, conditions: ",e.state.data.weather[0].description))},F=["CNY","NZD","CAD","SGD","HKD","AUD"],M={data:{initialized:!1,rates:{},date:null,base:"USD",tableKeys:{CNY:"CNY",NZD:"NZD",CAD:"CAD",SGD:"SGD",HKD:"HKD",AUD:"AUD"}},loading:!1,errorMessage:null},H=function(e,t){switch(t.type){case"LOADING":return Object(E.a)({},e,{loading:!0});case"GET_LATEST_SUCCESS":return Object(E.a)({},M,{data:{initialized:!0,rates:t.data.rates,date:t.data.date,base:t.data.base,barData:P(t.data.rates),tableKeys:M.data.tableKeys}});case"GET_LATEST_FAILURE":return Object(E.a)({},M,{errorMessage:"Something wrong!"});default:throw new Error}},P=function(e){var t=Object.keys(e).filter((function(e){return F.includes(e)}));return{labels:t,datasets:[{backgroundColor:"green",data:t.map((function(t){return e[t]}))}]}},W=Object(n.createContext)(),z=function(e){var t=e.children,a=Object(n.useReducer)(H,M),c=Object(s.a)(a,2),l=c[0],o=c[1],u=Object(n.useCallback)((function(){Object(G.a)("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){try{o({type:"GET_LATEST_SUCCESS",data:e})}catch(t){o({type:"GET_LATEST_FAILURE",data:e})}}))}),[]),i=Object(n.useMemo)((function(){return{state:l,getLatestExchangeRate:u}}),[l,u]);return r.a.createElement(W.Provider,{value:{exchangeApi:i}},t)},K=a(200),B=a(91),Y=function(){var e=Object(n.useContext)(W).exchangeApi;Object(n.useEffect)((function(){e.getLatestExchangeRate()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-center"},"Rates as of ",e.state.data.date),r.a.createElement(K.a,{style:{width:"60vw",margin:"0 auto"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null," "),Object.keys(e.state.data.tableKeys).map((function(e){return r.a.createElement("th",{key:e},e)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1 USD"),e.state.data.initialized&&Object.keys(e.state.data.tableKeys).map((function(t){return r.a.createElement("td",{key:t},Math.floor(100*Number(e.state.data.rates[t]))/100)}))))),r.a.createElement("div",{style:{height:"200px",width:"90vw",margin:"0 auto"}},r.a.createElement(B.a,{data:e.state.data.barData,options:{maintainAspectRatio:!1,legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]},title:{display:!0,text:"USD Exchanges Rates"}}})))},Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement(R,null)),r.a.createElement(z,null,r.a.createElement(Y,null)))},J=a(39),q=a(60),$=a(202),Q=a(55);function V(){var e=w().authApi,t=Object(n.useState)({username:"",password:""}),a=Object(s.a)(t,2),c=a[0],l=a[1],o=function(e){l(Object(E.a)({},c,Object(J.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,e.state.loading&&r.a.createElement("p",null,"Loading"),!e.state.loading&&r.a.createElement(u.a,{className:"justify-content-center col-6 bg-light"},e.state.error&&r.a.createElement(N.a,{variant:"danger"},e.state.error),r.a.createElement(q.a,{onSubmit:function(t){e.loading(),t.preventDefault(),e.login(c.username)},method:"post"},r.a.createElement(q.a.Row,null,r.a.createElement(Q.a,{placeholder:"Please input username",type:"text",label:"Username",name:"username",value:c.username,onChange:o})),r.a.createElement(q.a.Row,null,r.a.createElement(Q.a,{placeholder:"Please input password",type:"password",label:"Password",name:"password",value:c.password,onChange:o})),r.a.createElement($.a,{variant:"primary",type:"submit",size:"sm"},"Login"))))}var X=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,208))})),ee=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,211))})),te=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,210))})),ae=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,209))})),ne=function(){var e=w().authApi,t=function(t){var a=t.component,n=Object(x.a)(t,["component"]);if(a===V&&e.state.isLoggedIn)return r.a.createElement(I.a,{to:"/react-bootstrap-app"});var c=e.state.isLoggedIn?a:V;return r.a.createElement(I.b,Object.assign({},n,{component:c}))};return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(I.d,null,r.a.createElement(I.b,{exact:!0,path:"/react-bootstrap-app",component:Z}),r.a.createElement(I.b,{path:"/react-bootstrap-app",component:Z}),r.a.createElement(t,{path:"/login",component:V}),r.a.createElement(I.b,{path:"/movies",component:ee}),r.a.createElement(t,{path:"/tasks",component:te}),r.a.createElement(I.b,{path:"/contact",component:ae}),r.a.createElement(I.b,{component:X})))},re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(u.a,{fluid:!0},r.a.createElement(ne,null)),r.a.createElement(A,null))},ce=function(){return r.a.createElement(o.a,null,r.a.createElement(S,null,r.a.createElement(re,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(9),r=a.n(n),c=a(22),l=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},55:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(60),l=a(58);t.a=function(e){var t=e.name,a=e.type,n=e.placeholder,o=e.onChange,u=(e.onBlur,e.error,e.label),s=(e.multiple,e.value);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a.Group,{as:l.a},r.a.createElement(c.a.Label,null,u),r.a.createElement(c.a.Control,{type:a,placeholder:n,name:t,value:s,onChange:o,required:!0})))}},94:function(e,t,a){e.exports=a(198)}},[[94,1,2]]]);
//# sourceMappingURL=main.08a1bc9e.chunk.js.map