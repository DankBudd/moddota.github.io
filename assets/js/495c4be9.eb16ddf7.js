"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[2336],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3919:(e,t,o)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}o.d(t,{b:()=>n,Z:()=>a})},4996:(e,t,o)=>{o.d(t,{C:()=>r,Z:()=>i});var n=o(2263),a=o(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(o,n)=>function(e,t,o,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if((0,a.b)(o))return o;if(n)return t+o;const i=o.startsWith(t)?o:t+o.replace(/^\//,"");return r?e+i:i}(t,e,o,n)}}function i(e,t={}){const{withBaseUrl:o}=r();return o(e,t)}},8215:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294);const a=function({children:e,hidden:t,className:o}){return n.createElement("div",{role:"tabpanel",hidden:t,className:o},e)}},1395:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(7294),a=o(944),r=o(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,d=39;const c=function(e){const{lazy:t,block:o,defaultValue:c,values:u,groupId:p,className:m}=e,{tabGroupChoices:h,setTabGroupChoices:g}=(0,a.Z)(),[f,y]=(0,n.useState)(c),v=n.Children.toArray(e.children),k=[];if(null!=p){const e=h[p];null!=e&&e!==f&&u.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,o=k.indexOf(t),n=u[o].value;y(n),null!=p&&(g(p,n),setTimeout((()=>{(function(e){const{top:t,left:o,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:i}=window;return t>=0&&a<=i&&n<=r&&o>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},b=e=>{var t;let o;switch(e.keyCode){case d:{const t=k.indexOf(e.target)+1;o=k[t]||k[0];break}case s:{const t=k.indexOf(e.target)-1;o=k[t]||k[k.length-1];break}}null==(t=o)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},m)},u.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":f===e}),key:e,ref:e=>k.push(e),onKeyDown:b,onFocus:w,onClick:w},t)))),t?(0,n.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},9443:(e,t,o)=>{o.d(t,{Z:()=>n});const n=(0,o(7294).createContext)(void 0)},944:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294),a=o(9443);const r=function(){const e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,o)=>{o.d(t,{s:()=>a});var n=o(7294);function a({id:e,aspectRatio:t=4/3,hd:o="0"}){return n.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},n.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${o}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,o)=>{o.d(t,{s:()=>s});var n=o(2177),a=o(8215),r=o(1395),i=o(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:o}){(0,n.Z)("string"==typeof t||void 0===t);const s=i.Children.toArray(e).map(((e,t)=>{var n;const a=(null==(n=e.props.children.props.className)?void 0:n.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==o&&o.length>0?o.split("|"):[])[t]??l[a]??a,element:e}}));return i.createElement(r.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>i.createElement(a.Z,{key:e,value:e},t))))}},6776:(e,t,o)=>{o.d(t,{X:()=>r});var n=o(4996),a=o(7294);function r({path:e,controls:t=!1}){return a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.createElement("source",{src:(0,n.Z)(e),type:"video/mp4"}))}},8129:(e,t,o)=>{o.d(t,{_:()=>a});var n=o(7294);function a({id:e,playlistId:t,aspectRatio:o=16/9}){const a=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return n.createElement("p",{style:{position:"relative",paddingBottom:1/o*100+"%"}},n.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},2529:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>s,default:()=>c});var n=o(7462),a=(o(7294),o(3905)),r=(o(1395),o(8215),o(7840));o(8129),o(8173),o(6776);const i={title:"Getting Started",author:"Myll",steamId:"76561198000729788",date:"22.02.2015"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Edit 9/25/15: Please note that this guide is somewhat lacking in content. I invite any decent Dota 2 modder to take the reigns and rewrite this guide proper.",source:"@site/_articles/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/getting-started.md",version:"current",frontMatter:{title:"Getting Started",author:"Myll",steamId:"76561198000729788",date:"22.02.2015"},sidebar:"tutorials",previous:{title:"Introduction",permalink:"/"},next:{title:"Scripting Introduction",permalink:"/scripting-introduction"}},s=[{value:"The Facets of Dota 2 Modding",id:"the-facets-of-dota-2-modding",children:[]},{value:"Step #0: Installing and Launching the Dota 2 Workshop Tools",id:"step-0-installing-and-launching-the-dota-2-workshop-tools",children:[]},{value:"Step #1: Creating a New Addon From The &#39;Barebones&#39; Template",id:"step-1-creating-a-new-addon-from-the-barebones-template",children:[]},{value:"Step #2: Creating your map in Hammer",id:"step-2-creating-your-map-in-hammer",children:[]},{value:"Step #3: Scripting and beyond...",id:"step-3-scripting-and-beyond",children:[]}],d={toc:s};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Edit 9/25/15"),": Please note that this guide is somewhat lacking in content. I invite any decent Dota 2 modder to take the reigns and rewrite this guide proper."),(0,a.kt)("p",null,"So you're completely new to Dota 2 modding? Don't know where in the hell to begin? This is the guide for you, the future Dota 2 modder!"),(0,a.kt)("p",null,'Note: \u201cAddon\u201d, "mod", and \u201ccustom game\u201d are all synonymous throughout this guide (and likely the entire website).'),(0,a.kt)("h2",{id:"the-facets-of-dota-2-modding"},"The Facets of Dota 2 Modding"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools"},"Workshop Tools Wiki Homepage")," does a good job with subdividing all the possible aspects of Dota 2 modding:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Level design (Uses the tool called "Hammer")'),(0,a.kt)("li",{parentName:"ul"},"Scripting (Divided into KeyValue editing and Lua scripting)"),(0,a.kt)("li",{parentName:"ul"},"Modeling (Importing your own custom models into your addon)"),(0,a.kt)("li",{parentName:"ul"},"Sounds (Importing your own custom sounds, or editing existing ones)"),(0,a.kt)("li",{parentName:"ul"},"Particles (Editing existing particles or creating your own using the Particle Editor Tool (PET))"),(0,a.kt)("li",{parentName:"ul"},"Panorama (Creating custom UI or modifying existing Dota 2 UI with Panorama scripts)")),(0,a.kt)("h2",{id:"step-0-installing-and-launching-the-dota-2-workshop-tools"},"Step #0: Installing and Launching the Dota 2 Workshop Tools"),(0,a.kt)("p",null,"You can't create mods for Dota without the Workshop Tools!"),(0,a.kt)("p",null,"taken from ",(0,a.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Installing_and_Launching_Tools"},"How to install the Dota 2 Workshop Tools"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Right-click on Dota 2 in Steam and select View Downloadable Content."),(0,a.kt)("li",{parentName:"ul"},"Check the box in the Install column next to Dota 2 Workshop Tools DLC."),(0,a.kt)("li",{parentName:"ul"},"Click Close. The required content will begin downloading."),(0,a.kt)("li",{parentName:"ul"},"When download is finished, launch Dota 2 In Steam and select Launch Dota 2 - Tools.")),(0,a.kt)("h2",{id:"step-1-creating-a-new-addon-from-the-barebones-template"},"Step #1: Creating a New Addon From The 'Barebones' Template"),(0,a.kt)("p",null,"To start off on a good foot, you\u2019re going to want to create a new addon based off of the Barebones template, which is a community made alternative to Valve\u2019s default addon templates (i.e. Holdout). This is the link to the updated Barebones: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/DarkoniusXNG/barebones"},"https://github.com/DarkoniusXNG/barebones"),(0,a.kt)("br",null),"\nAfter downloading it as a zip, you want to browse to your ",(0,a.kt)("inlineCode",{parentName:"p"},".../Steam/SteamApps/dota 2 beta/")," and merge the ",(0,a.kt)("inlineCode",{parentName:"p"},"game")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," folders from the .zip into the that /dota 2 beta/ folder (which should already have folders in it called ",(0,a.kt)("inlineCode",{parentName:"p"},"game")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"content"),")."),(0,a.kt)("p",null,"Next, start up the Workshop Tools (or restart them if you have them opened already), and double click your new addon. Set it as the default addon. Then, go into Hammer -> File -> Open -> template_map.vmap -> Press F9 to begin building the map. After Hammer finishes building your map, your custom game will automatically load in Dota."),(0,a.kt)(r.s,{id:"NarrowIncredibleBongo",mdxType:"Gfycat"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'Workshop tools now are launched through the same link in steam as the main dota client, and not the "Tools" list in steam. Otherwise this video is roughly still accurate.'))),(0,a.kt)("h2",{id:"step-2-creating-your-map-in-hammer"},"Step #2: Creating your map in Hammer"),(0,a.kt)(r.s,{id:"YearlyDismalHuemul",mdxType:"Gfycat"}),(0,a.kt)("p",null,"(Credits to DarkMio for the gfy.)"),(0,a.kt)("p",null,"Hammer is the tool you use to create worlds for your custom game. I highly recommend you start off creating something in Hammer first instead of diving straight into the scripting or another facet. You can have the most sophisticated scripting in the workshop, but how are people going to enjoy your game if there isn't a world they can play in?"),(0,a.kt)("p",null,"Once you get to the point of having a rough layout blocked out for your map, it's probably safe to move on to scripting. You don't want to spend too much time piddling with detailing on something you realize needs changing once you get into the nitty gritty of your mode."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Level_Design"},"The wiki page on Hammer")," does a good job with giving you a run-down of Hammer. I'd recommend you start with the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Level_Design/Tile_Editor_Basics"},"Tile editor")," section."),(0,a.kt)("p",null,"BMD has made some rather nice beginner Hammer tutorial videos:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=GMvmdnNM6Sc"},"Part 1: Tile Editor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=grLUv2hUDRY"},"Part 2: Mesh Basics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ln3ep-k__dk"},"Part 3: entity basics"))),(0,a.kt)("h2",{id:"step-3-scripting-and-beyond"},"Step #3: Scripting and beyond..."),(0,a.kt)("p",null,"Scripting is the next most important part of your addon. It is divided into Lua scripting, and KeyValue scripting. I'm going to go ahead and redirect you to ",(0,a.kt)("a",{parentName:"p",href:"/scripting-introduction"},"Noya's Beginner Scripting Guide"),", since it has essentially the same information that would go in this section."),(0,a.kt)("p",null,"Now I'm going keep this short and sweet. I've already presented a ton of information for you to begin delving yourself into Dota 2 modding! Becoming good at Hammer mapping and good at Lua and KeyValue scripting will go a very long way in making successful, fun Dota 2 custom games. Please don't hesitate to ask questions in ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Mvn4gww"},"the Moddota Discord channel"),"."))}c.isMDXComponent=!0},6010:(e,t,o)=>{function n(e){var t,o,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}o.d(t,{Z:()=>a})}}]);