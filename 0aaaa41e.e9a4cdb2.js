(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(186));n(181),n(182),n(187),n(188),n(189);const o={title:"Particle Basics",author:"kritth",steamId:"76561198055627364",date:"05.02.2015"},i={id:"assets/particles/particle-basics",isDocsHomePage:!1,title:"Particle Basics",description:"So I was asked by many people about particle creation and work flow since the tutorial provided by the steam (or someone that is put on the Valve developer site) seems to stop at one point. Since I can't do too much of complicated work today, I will write some tutorials to get people start diving into particles. I will write it in series of multiple tutorials by taking request from people and such since particles itself is kinda big topic. Just leave me a comment or send me a message what kind of particle system you want to see created manually. I will try my best to mimic the system and write it out step by step. Don't hesitate to contact me if you have any question, comment, or improvement to the tutorial.",source:"@site/_articles/assets/particles/particle-basics.md",permalink:"/assets/particles/particle-basics",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/particle-basics.md",sidebar:"tutorials",previous:{title:"Custom Hero models, materials and animations",permalink:"/assets/models/custom-hero-models-materials-animations"},next:{title:"Chaos Wave Particle",permalink:"/assets/particles/chaos-wave-particle"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So I was asked by many people about particle creation and work flow since the tutorial provided by the steam (or someone that is put on the Valve developer site) seems to stop at one point. Since I can't do too much of complicated work today, I will write some tutorials to get people start diving into particles. I will write it in series of multiple tutorials by taking request from people and such since particles itself is kinda big topic. Just leave me a comment or send me a message what kind of particle system you want to see created manually. I will try my best to mimic the system and write it out step by step. Don't hesitate to contact me if you have any question, comment, or improvement to the tutorial."),Object(a.b)("p",null,"Also noted that some particles system implementation might have Lua scripting involved if it is very complicated system. So a little of basic lua scripting will help you every now and then."),Object(a.b)("p",null,"Again, let me know what kind of particle system you want to see created so I can keep this tutorial series going."),Object(a.b)("p",null,"Here is the list of functions covered in this tutorial:"),Object(a.b)("h3",null,"Renderer"),"- Render sprites [WIP]",Object(a.b)("br",null),"- Render models [WIP]",Object(a.b)("br",null),"- Render sprite trail [WIP]",Object(a.b)("br",null),"- Render rope [WIP]",Object(a.b)("br",null),"- Render deferred light [WIP]",Object(a.b)("br",null),Object(a.b)("h3",null,"Operator"),"- Lifespan decay",Object(a.b)("br",null),"- Alpha fade and decay",Object(a.b)("br",null),"- Color fade",Object(a.b)("br",null),"- Movement basic",Object(a.b)("br",null),"- Radius Scale",Object(a.b)("br",null),"- Movement place on ground [WIP]",Object(a.b)("br",null),"- Noise Scalar/Vector [WIP]",Object(a.b)("br",null),"- Normalized Vector [WIP]",Object(a.b)("br",null),"- Oscillate Scalar/Vector [WIP]",Object(a.b)("br",null),"- Remap Control Point to Scalar/Vector/Velocity [WIP]",Object(a.b)("br",null),"- Rotation Basic [WIP]",Object(a.b)("br",null),"- Rotation orient relative to CP [WIP]",Object(a.b)("br",null),"- Rotation orient to 2d direction [WIP]",Object(a.b)("br",null),"- Rotation spin yaw/roll [WIP]",Object(a.b)("br",null),"- Inherit attribute from parent particle [WIP]",Object(a.b)("br",null),Object(a.b)("h3",null,"Initializer"),"- Alpha random",Object(a.b)("br",null),"- Color random",Object(a.b)("br",null),"- Lifetime random",Object(a.b)("br",null),"- Radius random",Object(a.b)("br",null),"- Position along ring",Object(a.b)("br",null),"- Position within sphere random",Object(a.b)("br",null))}s.isMDXComponent=!0},181:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(185),i=n(183),l=n(90),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(o.a)(),[f,y]=Object(r.useState)(l);if(null!=b){const e=m[b];null!=e&&e!==f&&p.some(t=>t.value===e)&&y(e)}const h=e=>{y(e),null!=b&&d(b,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},182:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},183:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},184:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},185:function(e,t,n){"use strict";var r=n(0),a=n(184);t.a=function(){return Object(r.useContext)(a.a)}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r);function o({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r);function o({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),a=n(182),o=n(181),i=n(0),l=n.n(i);const c={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t}){Object(r.a)("string"==typeof t||null===t);const n=l.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(r.a)(t in c),{language:t,element:e}});return l.a.createElement(o.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:c[e]}))},n.map(({language:e,element:t})=>l.a.createElement(a.a,{key:e,value:e},t)))}}}]);