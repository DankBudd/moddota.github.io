"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[9557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},4996:(e,t,r)=>{r.d(t,{C:()=>a,Z:()=>i});var n=r(2263),o=r(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},8215:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=function({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},1395:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),o=r(944),a=r(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const c=37,s=39;const u=function(e){const{lazy:t,block:r,defaultValue:u,values:p,groupId:d,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:v}=(0,o.Z)(),[b,h]=(0,n.useState)(u),y=n.Children.toArray(e.children),g=[];if(null!=d){const e=f[d];null!=e&&e!==b&&p.some((t=>t.value===e))&&h(e)}const w=e=>{const t=e.currentTarget,r=g.indexOf(t),n=p[r].value;h(n),null!=d&&(v(d,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:o}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&o<=i&&n<=a&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},O=e=>{var t;let r;switch(e.keyCode){case s:{const t=g.indexOf(e.target)+1;r=g[t]||g[0];break}case c:{const t=g.indexOf(e.target)-1;r=g[t]||g[g.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},p.map((({value:e,label:t})=>n.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":b===e}),key:e,ref:e=>g.push(e),onKeyDown:O,onFocus:w,onClick:w},t)))),t?(0,n.cloneElement)(y.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}},9443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(0,r(7294).createContext)(void 0)},944:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),o=r(9443);const a=function(){const e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,r)=>{r.d(t,{s:()=>o});var n=r(7294);function o({id:e,aspectRatio:t=4/3,hd:r="0"}){return n.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},n.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${r}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,r)=>{r.d(t,{s:()=>c});var n=r(2177),o=r(8215),a=r(1395),i=r(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t,titles:r}){(0,n.Z)("string"==typeof t||void 0===t);const c=i.Children.toArray(e).map(((e,t)=>{var n;const o=(null==(n=e.props.children.props.className)?void 0:n.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==r&&r.length>0?r.split("|"):[])[t]??l[o]??o,element:e}}));return i.createElement(a.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:c[0].id,values:c.map((({id:e,languageName:t})=>({value:e,label:t})))},c.map((({id:e,element:t})=>i.createElement(o.Z,{key:e,value:e},t))))}},6776:(e,t,r)=>{r.d(t,{X:()=>a});var n=r(4996),o=r(7294);function a({path:e,controls:t=!1}){return o.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},o.createElement("source",{src:(0,n.Z)(e),type:"video/mp4"}))}},8129:(e,t,r)=>{r.d(t,{_:()=>o});var n=r(7294);function o({id:e,playlistId:t,aspectRatio:r=16/9}){const o=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return n.createElement("p",{style:{position:"relative",paddingBottom:1/r*100+"%"}},n.createElement("iframe",{src:o,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},3687:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,metadata:()=>i,toc:()=>l,default:()=>s});var n=r(7462),o=(r(7294),r(3905));r(1395),r(8215),r(7840),r(8129),r(8173),r(6776);const a={},i={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"api",description:"uh oh you're not supposed to see this",source:"@site/_articles/api.md",sourceDirName:".",slug:"/api",permalink:"/api",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/api.md",version:"current",frontMatter:{}},l=[],c={toc:l};function s({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"uh oh you're not supposed to see this"))}s.isMDXComponent=!0},6010:(e,t,r)=>{function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})}}]);