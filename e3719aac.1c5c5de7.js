(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var o=r(2),n=(r(0),r(177)),a=r(178);r(179);const i={title:"Making skip/clip blocks out of models",author:"Noya",steamId:"76561198046984233",date:"27.06.2015"},l={id:"assets/maps/making-skip-clip-blocks-out-of-models",isDocsHomePage:!1,title:"Making skip/clip blocks out of models",description:"This is the quickest but one very useful tip for Hammer map design.",source:"@site/_articles/assets/maps/making-skip-clip-blocks-out-of-models.md",permalink:"/assets/maps/making-skip-clip-blocks-out-of-models",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/maps/making-skip-clip-blocks-out-of-models.md",sidebar:"tutorials",previous:{title:"Hammer Tutorials",permalink:"/assets/maps/hammer-tutorials"},next:{title:"Importing custom models",permalink:"/assets/models/importing-custom-models"}},c=[],s={rightToc:c};function p({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This is the quickest but one very useful tip for Hammer map design. "),Object(n.b)("p",null,"When you drag a prop model into the map, it won't have any collision, so if you want heroes to walk over it or be blocked by it, you need to add a skip or clip block. You could make a very raw block like a neanderthal, but there is a better way that will maintain every edge on the model:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Copy Paste Special (Ctrl+Shift+V with the model selected)"),Object(n.b)("li",{parentName:"ol"},"Selected props -> Convert into Editable Mesh (Ctrl+Shift+T with the newly selected pasted model)"),Object(n.b)("li",{parentName:"ol"},"Apply material (Shift+T)")),Object(n.b)(a.a,{id:"RemarkableWetDotterel",mdxType:"Gfycat"}),Object(n.b)("p",null,"That's it."),Object(n.b)(a.a,{id:"CarefreeScarceEthiopianwolf",mdxType:"Gfycat"}),Object(n.b)("p",null,"Thanks BMD for the gyfs"))}p.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.a.createElement(f,l(l({ref:t},s),{},{components:r})):n.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},178:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(0),n=r.n(o);function a({id:e,aspectRatio:t=4/3}){return n.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},n.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(0),n=r.n(o);function a({id:e,playlistId:t,aspectRatio:r=16/9}){const o=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return n.a.createElement("p",{style:{position:"relative",paddingBottom:1/r*100+"%"}},n.a.createElement("iframe",{src:o,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);