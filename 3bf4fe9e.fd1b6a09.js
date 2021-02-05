(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},142:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/graphql-playground-request-975bddd5ded4327f2d5f52c744a84073.png"},143:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/graphiql-request-aac3c3c116c5cedd5f4157320440f855.png"},68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(103)),s={id:"gqlRequests",title:"GraphQL requests"},c={unversionedId:"reference/graphql/gqlRequests",id:"reference/graphql/gqlRequests",isDocsHomePage:!1,title:"GraphQL requests",description:"Positive Action GraphQL supports the HTTP GET and POST methods. You can send a query as a GET or POST request. Mutations must be POST requests.",source:"@site/docs/reference/graphql/gqlRequests.md",slug:"/reference/graphql/gqlRequests",permalink:"/docs/reference/graphql/gqlRequests",editUrl:"https://github.com/positiveaction/developer-docs/edit/master/docs/reference/graphql/gqlRequests.md",version:"current",sidebar:"someSidebar",previous:{title:"GraphQL Overview",permalink:"/docs/reference/graphql/gqlOverview"},next:{title:"Authorization tokens",permalink:"/docs/reference/graphql/gqlAuthorization"}},i=[{value:"Request headers",id:"request-headers",children:[{value:"Specify request headers in a GraphQL browser",id:"specify-request-headers-in-a-graphql-browser",children:[]}]},{value:"Responses",id:"responses",children:[]}],l={rightToc:i};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Positive Action GraphQL supports the HTTP GET and POST methods. You can send a query as a GET or POST request. Mutations must be POST requests."),Object(o.b)("h2",{id:"request-headers"},"Request headers"),Object(o.b)("p",null,"Positive Action accepts the following headers in a GraphQL request:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Header name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Authorization")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Bearer <authorization_token>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A customer token. ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"gqlAuthorization"}),"Authorization tokens")," describes how to generate tokens.")))),Object(o.b)("h3",{id:"specify-request-headers-in-a-graphql-browser"},"Specify request headers in a GraphQL browser"),Object(o.b)("p",null,"GraphQL Playground example:\n",Object(o.b)("img",{alt:"img",src:r(142).default})),Object(o.b)("p",null,"GraphiQL example:\n",Object(o.b)("img",{alt:"img",src:r(143).default})),Object(o.b)("h2",{id:"responses"},"Responses"),Object(o.b)("p",null,'GraphQL responses are in JSON. Every response is a JSON map and will include JSON keys for "data", "errors", or "extensions" following the GraphQL specification.'),Object(o.b)("p",null,"Successful queries are in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": { ... },\n  "extensions": { ... }\n }\n')),Object(o.b)("p",null,"Queries that have errors are in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "errors": [ ... ],\n  }\n')))}u.isMDXComponent=!0}}]);