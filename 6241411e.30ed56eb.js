(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),i=(n(0),n(96)),a={id:"componentDefinition",title:"Component Definition",sidebar_label:"Component Definition",slug:"/"},c={unversionedId:"componentDefinition",id:"componentDefinition",isDocsHomePage:!1,title:"Component Definition",description:"Define Components",source:"@site/docs/componentDefinition.md",slug:"/",permalink:"/developer-docs/docs/",editUrl:"https://gitlab.positiveaction.work/developer/dev-wiki/edit/master/docs/componentDefinition.md",version:"current",sidebar_label:"Component Definition",sidebar:"someSidebar",next:{title:"Components",permalink:"/developer-docs/docs/componentsType"}},p=[{value:"Define Components",id:"define-components",children:[]},{value:"Basic Attributes",id:"basic-attributes",children:[{value:"type",id:"type",children:[]},{value:"content",id:"content",children:[]},{value:"attributes",id:"attributes",children:[]},{value:"tagName",id:"tagname",children:[]},{value:"components",id:"components",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"define-components"},"Define Components"),Object(i.b)("p",null,"A Component is an object containing information about how the element is rendered in the canvas (managed in the View) and how it might look its final code (created by the properties in the Model). Generally, all Model properties are reflected in the View.\nWe have a list of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"componentsType#components-type"}),"components type")," "),Object(i.b)("p",null,"The Component is a base element of the template. It might be something simple and atomic like an image or a text box, but also complex structures, more probably composed by other components, like sections or pages."),Object(i.b)("p",null,"This is what a component looks like"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'{\n "type": "text",\n "content": "",\n "tagName":"",\n "attributes": {\n   "id": "i8cs"\n },\n "components": [\n   {\n     "type": "textnode",\n     "content": "Lorem ipsum dolor sit amet",     \n   }\n ],\n}\n')),Object(i.b)("p",null,"The real ",Object(i.b)("strong",{parentName:"p"},"Component Definition")," would be a little bit bigger so so we'd reduced the JSON for the sake of simplicity."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"basic-attributes"},"Basic Attributes"),Object(i.b)("h3",{id:"type"},"type"),Object(i.b)("p",null,"String attribute ",Object(i.b)("strong",{parentName:"p"},"type")," define the component type, we have a list with all supported components. We have a list of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"componentsType#components-type"}),"components type")," "),Object(i.b)("h3",{id:"content"},"content"),Object(i.b)("p",null,"Content of the component, for example for a simple textnode, atomic component, it is a string "),Object(i.b)("h3",{id:"attributes"},"attributes"),Object(i.b)("p",null,"An object of attributes. Each component can have specific attributes, for example: id, font-size, align, etc."),Object(i.b)("h3",{id:"tagname"},"tagName"),Object(i.b)("p",null,"String attribute HTML tag of the component, eg. ",Object(i.b)("inlineCode",{parentName:"p"},"span"),". Default: ",Object(i.b)("inlineCode",{parentName:"p"},"div")," "),Object(i.b)("h3",{id:"components"},"components"),Object(i.b)("p",null,"Array of objects, a component can have one or multiple components as children's. "))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=o,d=b["".concat(a,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);