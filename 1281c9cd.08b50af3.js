(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{57:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(95)),i={id:"apiGateway",title:"Playground"},c={unversionedId:"apiGateway",id:"apiGateway",isDocsHomePage:!1,title:"Playground",description:"In order to make a request in GraphQL Playground you will have to:",source:"@site/docs/apiGateway.md",slug:"/apiGateway",permalink:"/docs/apiGateway",editUrl:"https://github.com/positiveaction/developer-docs/edit/master/docs/apiGateway.md",version:"current",sidebar:"someSidebar",previous:{title:"API Demo",permalink:"/docs/examples"},next:{title:"Generating TypeScript typings",permalink:"/docs/generateTypes"}},l=[{value:"Create account",id:"create-account",children:[]},{value:"Login",id:"login",children:[]},{value:"Making the request in Playground",id:"making-the-request-in-playground",children:[]}],p={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to make a request in GraphQL Playground you will have to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create account in case you don't have"),Object(o.b)("li",{parentName:"ol"},"Login to get the token"),Object(o.b)("li",{parentName:"ol"},"Use the token in order to make the request")),Object(o.b)("h3",{id:"create-account"},"Create account"),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"api-auth GraphQL Playground")," in your browser (",Object(o.b)("inlineCode",{parentName:"p"},"http://<your_ip>:3038/graphql"),") and do the following request:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'mutation{ \n    createClient( NewClientInput:{userId: 1, name: "<NAME>", scope: "" }) {\n        name\n        userId\n        clientId\n        scope\n        secretId\n    }\n}\n')),Object(o.b)("p",null,"The response should look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n\n"data": {\n    "createClient": {\n        "name": "<NAME>",\n        "userId": 1,\n        "clientId": "<CLIENT_ID>",\n        "scope": "",\n        "secretId": "<SECRET_ID>"\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"login"},"Login"),Object(o.b)("p",null," Login is done in the same Playground (",Object(o.b)("em",{parentName:"p"},"api-auth"),") with the following request:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'mutation{\nlogin(loginInput:{secretId: "<SECRET_ID>",clientId: "<CLIENT_ID>"}) {\naccessToken\n\n}\n')),Object(o.b)("p",null," Where ",Object(o.b)("inlineCode",{parentName:"p"},"<SECRET_ID>")," ad ",Object(o.b)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," are the values we got from ",Object(o.b)("inlineCode",{parentName:"p"},"createClient")," request."),Object(o.b)("p",null,"The response should look like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "login": {\n      "accessToken": "<ACCESS_TOKEN>"\n    }\n  }\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<ACCESS_TOKEN>")," will be used in every request by ",Object(o.b)("inlineCode",{parentName:"p"},"api-gateway"),".  Every time the token expire you will have to generate a new ",Object(o.b)("inlineCode",{parentName:"p"},"Login")," to replace your header request with the new token."),Object(o.b)("h3",{id:"making-the-request-in-playground"},"Making the request in Playground"),Object(o.b)("p",null,"Open ",Object(o.b)("inlineCode",{parentName:"p"},"api-gateway GraphQL Playground")," in your browser (",Object(o.b)("inlineCode",{parentName:"p"},"http://<your_ip>:8086/graphql"),") and for each request add the ",Object(o.b)("inlineCode",{parentName:"p"},"authorization")," parameter inside ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP HEADERS"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "authorization":"Bearer <ACCESS_TOKEN>"\n}\n')))}u.isMDXComponent=!0},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);