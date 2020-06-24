(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=(n(0),n(177)),a=n(178);n(179);const i={title:"Useful Console Commands",author:"Noya",steamId:"76561198046984233",date:"22.02.2015"},c={id:"tools/useful-console-commands",isDocsHomePage:!1,title:"Useful Console Commands",description:"Here are the console commands useful for modding. If you constantly use one which isn't on this list, please post it",source:"@site/_articles/tools/useful-console-commands.md",permalink:"/tools/useful-console-commands",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/tools/useful-console-commands.md",sidebar:"tutorials",previous:{title:"Custom Minimap Icons",permalink:"/assets/custom-minimap-icons"},next:{title:"Setting Up Your Addon With GitHub",permalink:"/tools/setting-up-your-addon-with-github"}},l=[],s={rightToc:l};function p({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here are the console commands useful for modding. If you constantly use one which isn't on this list, please post it "),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dota_launch_custom_game <addon_name> <map_name>"),": Launches the map_name inside the addon_name content folder. This avoids having to open the map in hammer, You can ",Object(r.b)("inlineCode",{parentName:"p"},"disconnect")," or ",Object(r.b)("inlineCode",{parentName:"p"},"restart")," at any point."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"entityreport"),":  prints all the spawned entities as a list of index and class"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://puu.sh/g7Tp0/950028a084.png",alt:"img"}))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"entitysummary"),": prints a summary with the percentage of each entity class"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://puu.sh/g7TmQ/9dd2962c89.png",alt:"img"}))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"soundlist"),": all the sounds playing at the current time, and total memory used"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://puu.sh/g7TlG/cd98c96995.png",alt:"img"}))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"script_help2"),": shows the list of all the Game API functions"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://puu.sh/g7U5Z/a72fc9be17.jpg",alt:"img"}))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dota_modifier_dump"),": shows a list of all the modifiers currently applied to every entity"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"http://puu.sh/g7U53/ad13d17fae.jpg",alt:"img"}))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"host_timescale <float>"),": Speeds the game up to that number"),Object(r.b)(a.a,{id:"OddPaleIbadanmalimbe",mdxType:"Gfycat"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"host_timescale 10")))}p.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),r=n.n(o);function a({id:e,aspectRatio:t=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),r=n.n(o);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const o=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:o,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);