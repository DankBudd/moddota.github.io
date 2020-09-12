(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(186)),o=(n(181),n(182),n(187));n(188),n(189);const i={title:"Scripted Shop Spawning",author:"snippet",steamId:"76561198017441460",date:"29.04.2015"},c={id:"scripting/scripted-shop-spawning",isDocsHomePage:!1,title:"Scripted Shop Spawning",description:"A feature commonly asked about is how to dynamically create shops. Turns out it's actually quite easy! Here's what to do.",source:"@site/_articles/scripting/scripted-shop-spawning.md",permalink:"/scripting/scripted-shop-spawning",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/scripted-shop-spawning.md",sidebar:"tutorials",previous:{title:'Making a "rpg-like" looting chest',permalink:"/scripting/making-a-rpg-like-looting-chest"},next:{title:"Lava damage",permalink:"/scripting/lava-damage"}},s=[{value:"Step 1",id:"step-1",children:[]},{value:"Step 2.",id:"step-2",children:[]},{value:"Step 3.",id:"step-3",children:[]}],l={rightToc:s};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A feature commonly asked about is how to dynamically create shops. Turns out it's actually quite easy! Here's what to do."),Object(a.b)("h2",{id:"step-1"},"Step 1"),Object(a.b)("p",null,"You need to create the triggering area for your shop in hammer. Use the block tool (",Object(a.b)("strong",{parentName:"p"},"ctrl+b"),") to draw the triggering area you want for the shop, you can change the shape in the block tool to whatever you need."),Object(a.b)("p",null,"Draw the area somewhere off the map. You don't want players randomly stumbling across it."),Object(a.b)("h2",{id:"step-2"},"Step 2."),Object(a.b)("p",null,"Turn the block into a entity by selecting it and pressing ",Object(a.b)("strong",{parentName:"p"},"ctrl+t"),". Change the entity class to trigger_shop and give it a name. Also filter materials and find the trigger material, drag it onto the block. Finally set the shop type at the bottom. It should now look like this ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/XqzWA3I.jpg",alt:"ShopInHammer",title:"ShopInHammer"})),". When that's done rebuild the map."),Object(a.b)("h2",{id:"step-3"},"Step 3."),Object(a.b)("p",null,"Now simply add the following code to create a shop at your desired location! I added this to OnConstructionCompleted in building helper."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),'local shopEnt = Entities:FindByName(nil, "my_new_shop") -- entity name in hammer\nlocal newshop = SpawnEntityFromTableSynchronous(\'trigger_shop\', {origin = unit:GetAbsOrigin(), shoptype = 1, model=shopEnt:GetModelName()}) -- shoptype is 0 for a "home" shop, 1 for a side shop and 2 for a secret shop\n')),Object(a.b)("p",null,"Example:"),Object(a.b)(o.a,{id:"DimwittedGlisteningAmericanmarten",mdxType:"Gfycat"}),Object(a.b)("p",null,"Recommended reading:\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.reddit.com/r/Dota2Modding/comments/2dpts1/tutorial_creating_a_custom_shop_step_by_step/"}),"Creating a custom shop in Dota 2")))}p.isMDXComponent=!0},181:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(185),i=n(183),c=n(90),s=n.n(c);const l=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:u,groupId:d}=e,{tabGroupChoices:m,setTabGroupChoices:b}=Object(o.a)(),[h,f]=Object(r.useState)(c);if(null!=d){const e=m[d];null!=e&&e!==h&&u.some(t=>t.value===e)&&f(e)}const g=e=>{f(e),null!=d&&b(d,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},182:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},183:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},184:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},185:function(e,t,n){"use strict";var r=n(0),a=n(184);t.a=function(){return Object(r.useContext)(a.a)}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r);function o({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r);function o({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),a=n(182),o=n(181),i=n(0),c=n.n(i);const s={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function l({children:e,group:t}){Object(r.a)("string"==typeof t||null===t);const n=c.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(r.a)(t in s),{language:t,element:e}});return c.a.createElement(o.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:s[e]}))},n.map(({language:e,element:t})=>c.a.createElement(a.a,{key:e,value:e},t)))}}}]);