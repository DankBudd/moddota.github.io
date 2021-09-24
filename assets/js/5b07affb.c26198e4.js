"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[7914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},4996:(e,t,r)=>{r.d(t,{C:()=>i,Z:()=>o});var n=r(2263),a=r(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},8215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},1395:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),a=r(944),i=r(6010);const o="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const d=function(e){const{lazy:t,block:r,defaultValue:d,values:u,groupId:p,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,a.Z)(),[y,b]=(0,n.useState)(d),v=n.Children.toArray(e.children),g=[];if(null!=p){const e=f[p];null!=e&&e!==y&&u.some((t=>t.value===e))&&b(e)}const w=e=>{const t=e.currentTarget,r=g.indexOf(t),n=u[r].value;b(n),null!=p&&(h(p,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return t>=0&&a<=o&&n<=i&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},k=e=>{var t;let r;switch(e.keyCode){case c:{const t=g.indexOf(e.target)+1;r=g[t]||g[0];break}case s:{const t=g.indexOf(e.target)-1;r=g[t]||g[g.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},u.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:e=>g.push(e),onKeyDown:k,onFocus:w,onClick:w},t)))),t?(0,n.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},9443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(7294).createContext)(void 0)},944:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(9443);const i=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,r)=>{r.d(t,{s:()=>a});var n=r(7294);function a({id:e,aspectRatio:t=4/3,hd:r="0"}){return n.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},n.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${r}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,r)=>{r.d(t,{s:()=>s});var n=r(2177),a=r(8215),i=r(1395),o=r(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:r}){(0,n.Z)("string"==typeof t||void 0===t);const s=o.Children.toArray(e).map(((e,t)=>{var n;const a=(null==(n=e.props.children.props.className)?void 0:n.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==r&&r.length>0?r.split("|"):[])[t]??l[a]??a,element:e}}));return o.createElement(i.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>o.createElement(a.Z,{key:e,value:e},t))))}},6776:(e,t,r)=>{r.d(t,{X:()=>i});var n=r(4996),a=r(7294);function i({path:e,controls:t=!1}){return a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.createElement("source",{src:(0,n.Z)(e),type:"video/mp4"}))}},8129:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(7294);function a({id:e,playlistId:t,aspectRatio:r=16/9}){const a=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return n.createElement("p",{style:{position:"relative",paddingBottom:1/r*100+"%"}},n.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},9336:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>o,toc:()=>l,default:()=>c});var n=r(7462),a=(r(7294),r(3905));r(1395),r(8215),r(7840),r(8129),r(8173),r(6776);const i={title:"Apply Hero and Creep modifier durations",author:"Noya",steamId:"76561198046984233",date:"15.01.2015"},o={unversionedId:"abilities/datadriven/apply-hero-and-creep-modifier-durations",id:"abilities/datadriven/apply-hero-and-creep-modifier-durations",isDocsHomePage:!1,title:"Apply Hero and Creep modifier durations",description:'I came up with this method after kritth showed us that you can directly add a "Duration" key value to an "ApplyModifier" block and the use of the "Target" block without a Radius (defaulting to 0).',source:"@site/_articles/abilities/datadriven/apply-hero-and-creep-modifier-durations.md",sourceDirName:"abilities/datadriven",slug:"/abilities/datadriven/apply-hero-and-creep-modifier-durations",permalink:"/abilities/datadriven/apply-hero-and-creep-modifier-durations",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/apply-hero-and-creep-modifier-durations.md",version:"current",frontMatter:{title:"Apply Hero and Creep modifier durations",author:"Noya",steamId:"76561198046984233",date:"15.01.2015"},sidebar:"tutorials",previous:{title:"Point Channeling AoE Ability Example",permalink:"/abilities/datadriven/point-channeling-aoe-ability-example"},next:{title:"Physics Ability Example - Exorcism",permalink:"/abilities/datadriven/physics-ability-example-exorcism"}},l=[],s={toc:l};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I came up with this method after ",(0,a.kt)("a",{parentName:"p",href:"http://moddota.com/forums/profile/1600/kritth"},"kritth")," showed us that you can directly add a ",(0,a.kt)("inlineCode",{parentName:"p"},'"Duration"')," key value to an ",(0,a.kt)("inlineCode",{parentName:"p"},'"ApplyModifier"')," block and the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},'"Target"')," block without a Radius (defaulting to 0)."),(0,a.kt)("p",null,"Basically, abusing the datadriven system we can do this on any event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"ApplyModifier"\n{\n    "ModifierName"  "modifier_name"\n    "Target"\n    {\n        "Center"    "TARGET"\n        "Types"  "DOTA_UNIT_TARGET_HERO"\n    }\n    "Duration"  "%hero_duration"    \n}\n\n"ApplyModifier"\n{\n    "ModifierName"  "modifier_name"\n    "Target"\n    {\n        "Center"    "TARGET"\n        "Types"  "DOTA_UNIT_TARGET_BASIC"\n    }\n    "Duration"  "%creep_duration"\n}\n')),(0,a.kt)("p",null,"modifier_name being any modifier ",(0,a.kt)("strong",{parentName:"p"},'without a "Duration"')," specified directly in its block."),(0,a.kt)("p",null,"Hopefully this will make many codes that need to apply different duration to hero and creeps way better to read and polish. Until now I was using Lua to define the different duration but after seeing this system it's just way better."))}c.isMDXComponent=!0},6010:(e,t,r)=>{function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:()=>a})}}]);