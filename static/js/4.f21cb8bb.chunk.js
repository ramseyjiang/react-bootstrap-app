(this["webpackJsonpreact-bootstrap-app"]=this["webpackJsonpreact-bootstrap-app"]||[]).push([[4],{210:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a(210),i=a(6),s={data:[],loading:!1,errorMessage:null},l=function(e,t){switch(t.type){case"LOADING":return Object(i.a)({},e,{loading:!0});case"GET_DATA_SUCCESS":return Object(i.a)({},s,{data:t.data});case"GET_DATA_FAILURE":return Object(i.a)({},s,{errorMessage:"Something wrong!"});case"SET_LOAD_MORE":return Object(i.a)({},s,{data:[].concat(Object(o.a)(e.data),Object(o.a)(t.data))});default:throw new Error}},u=a(23),d=Object(n.createContext)(),m=function(e){var t=e.children,a=Object(n.useReducer)(l,s),o=Object(c.a)(a,2),i=o[0],m=o[1],b=Object(n.useCallback)((function(){return m({type:"LOADING"})}),[]),f=Object(n.useCallback)((function(e){Object(u.a)(e).then((function(e){try{m({type:"GET_DATA_SUCCESS",data:e.message})}catch(t){m({type:"GET_DATA_FAILURE",data:e.message})}}))}),[]),p=Object(n.useCallback)((function(e){Object(u.a)(e).then((function(e){try{m({type:"SET_LOAD_MORE",data:e.message})}catch(t){m({type:"GET_DATA_FAILURE",data:i.data.result})}}))}),[i]),g=Object(n.useCallback)((function(e){window.innerHeight+Math.ceil(document.documentElement.scrollTop)===document.documentElement.offsetHeight&&p(e)}),[p]),E=Object(n.useMemo)((function(){return{state:i,getData:f,moreData:p,loading:b,isScrolling:g}}),[i,f,p,b,g]);return r.a.createElement(d.Provider,{value:{endlessApi:E}},t)},b=a(25),f=a(202),p=a(208),g=a(204),E=a(61),O=a(209),A=function(){var e=Object(n.useContext)(d).endlessApi,t="https://dog.ceo/api/breeds/image/random/12";return Object(n.useEffect)((function(){e.loading(),e.getData(t),window.addEventListener("scroll",(function(){e.isScrolling(t)}))}),[]),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"info"},"This is an infinite scroll page to show dogs pictures."),e.state.loading&&!e.state.errorMessage?r.a.createElement(b.a,null):r.a.createElement(g.a,null,e.state.data&&e.state.data.map((function(e,t){return r.a.createElement(E.a,{key:t,className:"col-4 dog-card-margin"},r.a.createElement(O.a,null,r.a.createElement(O.a.Img,{className:"card-img-top mx-auto d-block dog-pic",variant:"top",src:e})))}))))};t.default=function(){return r.a.createElement(m,null,r.a.createElement(A,null))}}}]);
//# sourceMappingURL=4.f21cb8bb.chunk.js.map