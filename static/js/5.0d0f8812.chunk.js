(this["webpackJsonpreact-bootstrap-app"]=this["webpackJsonpreact-bootstrap-app"]||[]).push([[5],{207:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(3),o=t.n(c),s=t(0),l=t.n(s),i=t(4),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.noGutters,s=e.as,u=void 0===s?"div":s,m=e.className,d=Object(n.a)(e,["bsPrefix","noGutters","as","className"]),b=Object(i.a)(t,"row");return l.a.createElement(u,Object(r.a)({ref:a},d,{className:o()(m,b,c&&"no-gutters")}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},209:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(3),o=t.n(c),s=t(0),l=t.n(s),i=t(4),u=t(21),m=t(62),d=t(61),b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.variant,u=e.as,m=void 0===u?"img":u,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(i.a)(t,"card-img");return l.a.createElement(m,Object(r.a)({ref:a,className:o()(s?b+"-"+s:b,c)},d))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,p=Object(m.a)("h5"),v=Object(m.a)("h6"),E=Object(u.a)("card-body"),O=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,m=e.text,b=e.border,f=e.body,p=e.children,v=e.as,O=void 0===v?"div":v,j=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(i.a)(t,"card"),h=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(d.a.Provider,{value:h},l.a.createElement(O,Object(r.a)({ref:a},j,{className:o()(c,g,u&&"bg-"+u,m&&"text-"+m,b&&"border-"+b)}),f?l.a.createElement(E,null,p):p))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=f,O.Title=Object(u.a)("card-title",{Component:p}),O.Subtitle=Object(u.a)("card-subtitle",{Component:v}),O.Body=E,O.Link=Object(u.a)("card-link",{Component:"a"}),O.Text=Object(u.a)("card-text",{Component:"p"}),O.Header=Object(u.a)("card-header"),O.Footer=Object(u.a)("card-footer"),O.ImgOverlay=Object(u.a)("card-img-overlay");a.a=O},213:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),o=t(6),s={data:[],loading:!1,errorMessage:null},l=function(e,a){switch(a.type){case"LOADING":return Object(o.a)({},e,{loading:!0});case"SEARCH_SUCCESS":return console.log(),Object(o.a)({},s,{data:a.data});case"SEARCH_FAILURE":return Object(o.a)({},s,{errorMessage:a.error});case"INPUT_EMPTY":return Object(o.a)({},e,{loading:!0,errorMessage:"Please input search movie name or something else for search a movie"});default:throw new Error}},i=t(31),u=Object(r.createContext)(),m=function(){return Object(r.useContext)(u)},d=function(e){var a=e.children,t=Object(r.useReducer)(l,s),o=Object(c.a)(t,2),m=o[0],d=o[1],b=Object(r.useCallback)((function(){return d({type:"LOADING"})}),[]),f=Object(r.useCallback)((function(e){Object(i.a)(e).then((function(e){"True"===e.Response?d({type:"SEARCH_SUCCESS",data:e.Search}):d({type:"SEARCH_FAILURE",error:e.Error})}))}),[]),p=Object(r.useCallback)((function(){return d({type:"INPUT_EMPTY"})}),[]),v=Object(r.useMemo)((function(){return{loading:b,searchMovie:f,empty:p,state:m}}),[b,f,p,m]);return n.a.createElement(u.Provider,{value:{movieApi:v}},a)},b=t(209),f=function(e){var a=e.movie;return n.a.createElement(n.a.Fragment,null,"N/A"!==a.Poster&&n.a.createElement(b.a,{className:"text-center"},a.Title?n.a.createElement(b.a.Header,{className:"movie-poster-title-size"},a.Title):"",n.a.createElement(b.a.Img,{className:"card-img-top mx-auto d-block movie-poster",variant:"top",src:a.Poster}),a.Year?n.a.createElement(b.a.Footer,null,n.a.createElement("small",{className:"text-muted"},"Year: ",a.Year)):""))},p=t(200),v=t(205),E=t(207),O=t(58),j=function(){var e=m().movieApi;return n.a.createElement(p.a,null,e.state.loading&&!e.state.errorMessage?n.a.createElement("span",null,"loading... "):e.state.errorMessage?n.a.createElement(v.a,{variant:"danger"},e.state.errorMessage):n.a.createElement(E.a,null,e.state.data&&e.state.data.map((function(e,a){return n.a.createElement(O.a,{className:"col-6 movie-card-bottom",key:a},n.a.createElement(f,{movie:e}))}))))},g=t(60),h=t(202),y=function(){var e=m().movieApi,a=Object(r.useState)(""),t=Object(c.a)(a,2),o=t[0],s=t[1],l="https://www.omdbapi.com/?apikey=f91c3148&s=";Object(r.useEffect)((function(){""===o&&e.searchMovie(l+"Fast&Furious")}),[]);return n.a.createElement(p.a,null,n.a.createElement(g.a,null,n.a.createElement(g.a.Group,{as:E.a},n.a.createElement(O.a,{sm:6},n.a.createElement(g.a.Control,{type:"text",placeholder:"For example: Fast&Furious",onChange:function(e){s(e.target.value)},value:o})),n.a.createElement(O.a,{sm:6},n.a.createElement(h.a,{variant:"primary",type:"submit",size:"sm",onClick:function(a){a.preventDefault(),e.loading(),""!==o?e.searchMovie(l+o):e.empty()}},"Search")," "))))};a.default=function(){return n.a.createElement(d,null,n.a.createElement(y,null),n.a.createElement(j,null))}}}]);
//# sourceMappingURL=5.0d0f8812.chunk.js.map