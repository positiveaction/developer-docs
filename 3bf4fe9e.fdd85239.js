(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),d=n,b=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return t?a.a.createElement(b,i(i({ref:r},u),{},{components:t})):a.a.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(2),a=t(6),o=(t(0),t(103)),c={id:"gqlRequests",title:"GraphQL requests"},i={unversionedId:"reference/graphql/gqlRequests",id:"reference/graphql/gqlRequests",isDocsHomePage:!1,title:"GraphQL requests",description:"test",source:"@site/docs/reference/graphql/gqlRequests.md",slug:"/reference/graphql/gqlRequests",permalink:"/docs/reference/graphql/gqlRequests",editUrl:"https://github.com/positiveaction/developer-docs/edit/master/docs/reference/graphql/gqlRequests.md",version:"current",sidebar:"someSidebar",previous:{title:"GraphQL Overview",permalink:"/docs/reference/graphql/gqlOverview"},next:{title:"Authorization tokens",permalink:"/docs/reference/graphql/gqlAuthorization"}},s=[{value:"Request headers",id:"request-headers",children:[{value:"Specify request headers in a GraphQL browser",id:"specify-request-headers-in-a-graphql-browser",children:[]}]}],u={rightToc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"test"),Object(o.b)("h2",{id:"request-headers"},"Request headers"),Object(o.b)("p",null,"test 2"),Object(o.b)("h3",{id:"specify-request-headers-in-a-graphql-browser"},"Specify request headers in a GraphQL browser"),Object(o.b)("p",null,"another test"))}p.isMDXComponent=!0}}]);