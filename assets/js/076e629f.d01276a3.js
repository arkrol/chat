(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),l=(n(0),n(88)),a={id:"changelog",title:"Change Log",sidebar_label:"Change Log"},c={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Change Log",description:"2021-6-24",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/CHANGELOG.md",slug:"/changelog",permalink:"/fiora/docs/changelog",editUrl:"https://github.com/yinxin630/fiora/edit/master/docs/docs/CHANGELOG.md",version:"current",sidebar_label:"Change Log",sidebar:"docs",previous:{title:"FAQ",permalink:"/fiora/docs/faq"},next:{title:"Fiora App",permalink:"/fiora/docs/app"}},o=[{value:"2021-6-24",id:"2021-6-24",children:[]},{value:"2021-5-11",id:"2021-5-11",children:[]},{value:"2021-3-24",id:"2021-3-24",children:[]},{value:"2021-3-14",id:"2021-3-14",children:[]},{value:"2021-3-2",id:"2021-3-2",children:[]},{value:"2021-3-1",id:"2021-3-1",children:[]},{value:"2021-2-28",id:"2021-2-28",children:[]},{value:"2021-2-27",id:"2021-2-27",children:[]},{value:"2021-2-25",id:"2021-2-25",children:[]},{value:"2021-2-21",id:"2021-2-21",children:[]},{value:"2021-2-17",id:"2021-2-17",children:[]},{value:"2021-1-26",id:"2021-1-26",children:[]},{value:"2021-1-22",id:"2021-1-22",children:[]},{value:"2020-12-17",id:"2020-12-17",children:[]},{value:"2020-12-08",id:"2020-12-08",children:[]},{value:"2020-11-15",id:"2020-11-15",children:[]},{value:"2020-11-14",id:"2020-11-14",children:[]},{value:"2020-11-12",id:"2020-11-12",children:[]},{value:"2020-11-08",id:"2020-11-08",children:[]},{value:"2020-11-07",id:"2020-11-07",children:[]},{value:"2020-11-04",id:"2020-11-04",children:[]},{value:"2020-11-03",id:"2020-11-03",children:[]}],u={toc:o};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"2021-6-24"},"2021-6-24"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support user names and user tags with Japanese characters")),Object(l.b)("h2",{id:"2021-5-11"},"2021-5-11"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use Aliyun OSS to replace Qiniu CDN")),Object(l.b)("h2",{id:"2021-3-24"},"2021-3-24"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fix the problem that the search function allows regular expression matching")),Object(l.b)("h2",{id:"2021-3-14"},"2021-3-14"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support the server to calculate the number of unread messages")),Object(l.b)("h2",{id:"2021-3-2"},"2021-3-2"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When identifying the url in the message, support host as localhost or ip")),Object(l.b)("h2",{id:"2021-3-1"},"2021-3-1"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"No longer limit the number of groups created by the administrator")),Object(l.b)("h2",{id:"2021-2-28"},"2021-2-28"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Multiple users use the same notification token")),Object(l.b)("h2",{id:"2021-2-27"},"2021-2-27"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Modify app notification content"),Object(l.b)("li",{parentName:"ul"},"Messages sent by yourself no longer push notification to yourself"),Object(l.b)("li",{parentName:"ul"},"The progress bar is displayed when the webpack build production environment")),Object(l.b)("h2",{id:"2021-2-25"},"2021-2-25"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support push notification to fiora app")),Object(l.b)("h2",{id:"2021-2-21"},"2021-2-21"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Important")," Fix the wrong logic of judging whether it is an administrator on the server side. Treat everyone as an administrator")),Object(l.b)("h2",{id:"2021-2-17"},"2021-2-17"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support sharing groups externally")),Object(l.b)("h2",{id:"2021-1-26"},"2021-1-26"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"File message size calculation error")),Object(l.b)("h2",{id:"2021-1-22"},"2021-1-22"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A single ip can register up to 3 accounts within 24 hours")),Object(l.b)("h2",{id:"2020-12-17"},"2020-12-17"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Support search expressions by input content. It is disabled default and you can enable it in setting")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Only limit send message frequency"))),Object(l.b)("h2",{id:"2020-12-08"},"2020-12-08"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Breaking!!!")," Refactor to use redis cache instead of memory variable cache. So you should run redis first before start fiora")),Object(l.b)("h2",{id:"2020-11-15"},"2020-11-15"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Refactor to use webpack plugin to generate service worker script"),Object(l.b)("li",{parentName:"ul"},"Refacotr or add server scripts")),Object(l.b)("h2",{id:"2020-11-14"},"2020-11-14"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Adapt to ios full screen devices")),Object(l.b)("h2",{id:"2020-11-12"},"2020-11-12"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support multiple administrators"),Object(l.b)("li",{parentName:"ul"},"Add getUserId and deleteUser scripts")),Object(l.b)("h2",{id:"2020-11-08"},"2020-11-08"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Support to withdraw self's message")),Object(l.b)("h2",{id:"2020-11-07"},"2020-11-07"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Support send file directly")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Support display linkman realtime info. About user online status and group online members count")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Refactor webpack build config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Fix the issue of right click on image viewer to copy image will close it"))),Object(l.b)("h2",{id:"2020-11-04"},"2020-11-04"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Breaking!!!")," Modify the config files. It no longer supports modifying config items through command line params"),Object(l.b)("li",{parentName:"ul"},"Remove pm2 ecosystem config and deploy shell script")),Object(l.b)("h2",{id:"2020-11-03"},"2020-11-03"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Rename some npm scripts name")))}b.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||s[d]||l;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<l;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);