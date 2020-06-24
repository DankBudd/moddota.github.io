(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(177)),i=n(178);n(179);const o={title:"Lava damage",author:"DiNaSoR",steamId:"76561197974680917",date:"20.08.2015"},c={id:"scripting/lava-damage",isDocsHomePage:!1,title:"Lava damage",description:"Hello, this is a small tutorial giving back to the awesome Moddota community.",source:"@site/_articles/scripting/lava-damage.md",permalink:"/scripting/lava-damage",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/scripting/lava-damage.md",sidebar:"tutorials",previous:{title:"Scripted Shop Spawning",permalink:"/scripting/scripted-shop-spawning"},next:{title:"Using the order filter and other filters",permalink:"/scripting/using-dota-filters"}},l=[],p={rightToc:l};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hello, this is a small tutorial giving back to the awesome Moddota community."),Object(a.b)("p",null,"Today we going to create Lava area when a hero step on that lava he will get damaged per sec until he die."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"First you need to create a block and assign trigger texture to it")),Object(a.b)(i.a,{id:"WaterloggedQuarrelsomeDutchshepherddog",mdxType:"Gfycat"}),Object(a.b)("p",null,"Then convert the mesh to Entity and name it plus assign this Entity script to lavatrigger.lua <-- you can name it whatever you want.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.gyazo.com/f4e83a50e4c80ee658042c1dd2a73d2c.png",alt:"enter image description here",title:"enter image title here"}))),Object(a.b)(i.a,{id:"AntiqueSkinnyKagu",mdxType:"Gfycat"}),Object(a.b)("p",null,"next we go to Outputs tabs in top and click on it add the following in the picture."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.gyazo.com/bcea6b60046512109f121aa0164f7cd2.png",alt:"enter image description here",title:"enter image title here"}))),Object(a.b)("p",null,"Now go to your vscript folder and create a file called lavatrigger.lua and put this script inside."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-lua"}),"local LAVA_DAMAGE_TICK_RATE = 2\nlocal LAVA_DAMAGE_AMOUNT = 100\n\nfunction lavatrigger(trigger)\n\n        local ent = trigger.activator\n\n        if not ent then return end\n\n        local hp = ent:GetHealth()\n\n        if hp >= LAVA_DAMAGE_AMOUNT then\n            ent:SetHealth(hp - LAVA_DAMAGE_AMOUNT)\n        else\n            ent:ForceKill(true)\n        end\n\n    return LAVA_DAMAGE_TICK_RATE\nend\n")),Object(a.b)("p",null,"here is the final result!\ud83d\ude04 "),Object(a.b)(i.a,{id:"CharmingTestyAlaskanmalamute",mdxType:"Gfycat"}),Object(a.b)("p",null,"NOTE We can spice this a little bit with particles effect and sound will explain that next time."))}s.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(g,c(c({ref:t},p),{},{components:n})):a.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function i({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);