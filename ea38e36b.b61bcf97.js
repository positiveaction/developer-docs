(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{103:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),c=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=c(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=c(t),u=a,d=b["".concat(p,".").concat(u)]||b[u]||m[u]||o;return t?r.a.createElement(d,s(s({ref:n},l),{},{components:t})):r.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=t[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},153:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/text-narrative-f9ff3c428b53b626503338bb234c42a0.png"},154:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/list-item-2-0dc8e2040a2415afbc6ee9b3d57de7be.png"},155:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/list-item-goal-39dbf3dbe161425ff053e4abbfd1a755.png"},156:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/text-box-c8d9487077a985a58a91076e908c5dbc.png"},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return c}));var a=t(2),r=t(6),o=(t(0),t(103)),p={id:"wrapper",title:"Wrapper Components"},s={unversionedId:"components/wrapper",id:"components/wrapper",isDocsHomePage:!1,title:"Wrapper Components",description:"Wrapper components are a set of containers that behave like a wrapper for different elements.",source:"@site/docs/components/wrapper.md",slug:"/components/wrapper",permalink:"/docs/components/wrapper",editUrl:"https://github.com/positiveaction/developer-docs/edit/master/docs/components/wrapper.md",version:"current",sidebar:"someSidebar",previous:{title:"Text Components",permalink:"/docs/components/text"},next:{title:"Image Component",permalink:"/docs/components/image"}},i=[{value:"Narrative",id:"narrative",children:[]},{value:"List item",id:"list-item",children:[]},{value:"Box",id:"box",children:[]}],l={rightToc:i};function c(e){var n=e.components,p=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,p,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Wrapper components are a set of containers that behave like a wrapper for different elements."),Object(o.b)("h2",{id:"narrative"},"Narrative"),Object(o.b)("p",null,"A wrapper which contains a set of paragraphs. Usually it describes a narrative area from the lesson."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(153).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "components": [{\n        "type": "narrative",\n        "content": "",\n        "tagName": "div",\n        "components": [{\n            "type": "text",\n            "classes": [{\n                "name": "pa-paragraph",\n                "type": 1,\n                "label": "pa-paragraph"\n            }],\n            "content": "Should I do it now...or later?"\n        }, {\n            "type": "text",\n            "classes": [{\n                "name": "pa-paragraph",\n                "type": 1,\n                "label": "pa-paragraph"\n            }],\n            "content": "Should I say yes or no?"\n        }, {\n            "type": "text",\n            "classes": [{\n                "name": "pa-paragraph",\n                "type": 1,\n                "label": "pa-paragraph"\n            }],\n            "content": "What will happen if I do? Or if I don\u2019t?"\n        }, {\n            "type": "text",\n            "classes": [{\n                "name": "pa-paragraph",\n                "type": 1,\n                "label": "pa-paragraph"\n            }],\n            "content": "How can I fix it?"\n        }, {\n            "type": "text",\n            "classes": [{\n                "name": "pa-paragraph",\n                "type": 1,\n                "label": "pa-paragraph"\n            }],\n            "content": "Where do I go? Whom do I listen to? What should I eat? What should I wear? What should I think? What, oh, what, do I do?"\n        }]\n    }]\n}\n')),Object(o.b)("h2",{id:"list-item"},"List item"),Object(o.b)("p",null,"A list item is composed from a wrapper with two containers, where the left one represents either a bullet or a heading\ntext while the right one holds the content: "),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(154).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(155).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n"components": [{\n        "type": "listItem",\n        "classes": [{\n            "name": "pa-listitem",\n            "type": 1,\n            "label": "pa-listitem"\n        }],\n        "content": "",\n        "components": [{\n            "type": "text",\n            "classes": [{\n                "name": "pa-boldsubtitle",\n                "type": 1,\n                "label": "pa-boldsubtitle"\n            }],\n            "content": "Goal"\n        }, {\n            "type": "text",\n            "classes": [{\n                "name": "pa-boldtext",\n                "type": 1,\n                "label": "pa-boldtext"\n            }],\n            "content": "To learn that the intellectual positive actions of making decisions and solving problems in positive ways help us feel good about ourselves."\n        }]\n    }]\n}\n')),Object(o.b)("h2",{id:"box"},"Box"),Object(o.b)("p",null,"Box wrapper usually contains a List Item component with its child components. The ",Object(o.b)("strong",{parentName:"p"},"Box")," container has a visual\nrepresentation of a thick border all around. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:t(156).default})),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "components": [{\n        "type": "box",\n        "classes": [{\n            "name": "pa-box",\n            "type": 1,\n            "label": "pa-box"\n        }],\n        "content": "",\n        "tagName": "div",\n        "attributes": {},\n        "components": [{\n            "type": "listItem",\n            "classes": [{\n                "name": "pa-listitem",\n                "type": 1,\n                "label": "pa-listitem"\n            }],\n            "content": "",\n            "components": [{\n                "type": "text",\n                "classes": [{\n                    "name": "pa-boldsubtitle",\n                    "type": 1,\n                    "label": "pa-boldsubtitle"\n                }],\n                "content": "Kit provides:"\n            }, {\n                "type": "text",\n                "classes": [{\n                    "name": "pa-text",\n                    "type": 1,\n                    "label": "pa-text"\n                }],\n                "content": "\u201cDecision-Making & Problem-Solving Checklist\u201d Notepad, ICU Box, \\"Word of the week\\" card: Decision"\n            }]\n        }, {\n            "type": "listItem",\n            "classes": [{\n                "name": "pa-listitem",\n                "type": 1,\n                "label": "pa-listitem"\n            }],\n            "content": "",\n            "components": [{\n                "type": "text",\n                "classes": [{\n                    "name": "pa-boldsubtitle",\n                    "type": 1,\n                    "label": "pa-boldsubtitle"\n                }],\n                "content": "You provide:"\n            }, {\n                "type": "text",\n                "classes": [{\n                    "name": "pa-text",\n                    "type": 1,\n                    "label": "pa-text"\n                }],\n                "content": "Pencils, writing paper (optional)"\n            }]\n        }]\n    }]\n}\n')))}c.isMDXComponent=!0}}]);