"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[4308],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=u(a),c=l,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3919:(t,e,a)=>{function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function l(t){return void 0!==t&&!n(t)}a.d(e,{b:()=>n,Z:()=>l})},4996:(t,e,a)=>{a.d(e,{C:()=>r,Z:()=>o});var n=a(2263),l=a(3919);function r(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(t,e,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if((0,l.b)(a))return a;if(n)return e+a;const o=a.startsWith(e)?a:e+a.replace(/^\//,"");return r?t+o:o}(e,t,a,n)}}function o(t,e={}){const{withBaseUrl:a}=r();return a(t,e)}},8215:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(7294);const l=function({children:t,hidden:e,className:a}){return n.createElement("div",{role:"tabpanel",hidden:e,className:a},t)}},1395:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(7294),l=a(944),r=a(6010);const o="tabItem_1uMI",i="tabItemActive_2DSg";const s=37,u=39;const d=function(t){const{lazy:e,block:a,defaultValue:d,values:p,groupId:m,className:c}=t,{tabGroupChoices:h,setTabGroupChoices:k}=(0,l.Z)(),[g,b]=(0,n.useState)(d),f=n.Children.toArray(t.children),y=[];if(null!=m){const t=h[m];null!=t&&t!==g&&p.some((e=>e.value===t))&&b(t)}const w=t=>{const e=t.currentTarget,a=y.indexOf(e),n=p[a].value;b(n),null!=m&&(k(m,n),setTimeout((()=>{(function(t){const{top:e,left:a,bottom:n,right:l}=t.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return e>=0&&l<=o&&n<=r&&a>=0})(e)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((()=>e.classList.remove(i)),2e3))}),150))},N=t=>{var e;let a;switch(t.keyCode){case u:{const e=y.indexOf(t.target)+1;a=y[e]||y[0];break}case s:{const e=y.indexOf(t.target)-1;a=y[e]||y[y.length-1];break}}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},c)},p.map((({value:t,label:e})=>n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:t=>y.push(t),onKeyDown:N,onFocus:w,onClick:w},e)))),e?(0,n.cloneElement)(f.filter((t=>t.props.value===g))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==g})))))}},9443:(t,e,a)=>{a.d(e,{Z:()=>n});const n=(0,a(7294).createContext)(void 0)},944:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(7294),l=a(9443);const r=function(){const t=(0,n.useContext)(l.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},7840:(t,e,a)=>{a.d(e,{s:()=>l});var n=a(7294);function l({id:t,aspectRatio:e=4/3,hd:a="0"}){return n.createElement("p",{style:{position:"relative",paddingBottom:1/e*100+"%"}},n.createElement("iframe",{src:`https://gfycat.com/ifr/${t}?hd=${a}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(t,e,a)=>{a.d(e,{s:()=>s});var n=a(2177),l=a(8215),r=a(1395),o=a(7294);const i={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:t,group:e,titles:a}){(0,n.Z)("string"==typeof e||void 0===e);const s=o.Children.toArray(t).map(((t,e)=>{var n;const l=(null==(n=t.props.children.props.className)?void 0:n.replace(/language-/,""))??`Tab ${e+1}`;return{id:e,languageName:(void 0!==a&&a.length>0?a.split("|"):[])[e]??i[l]??l,element:t}}));return o.createElement(r.Z,{groupId:void 0!==e?`multi-code-block-${e}`:void 0,defaultValue:s[0].id,values:s.map((({id:t,languageName:e})=>({value:t,label:e})))},s.map((({id:t,element:e})=>o.createElement(l.Z,{key:t,value:t},e))))}},6776:(t,e,a)=>{a.d(e,{X:()=>r});var n=a(4996),l=a(7294);function r({path:t,controls:e=!1}){return l.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:e},l.createElement("source",{src:(0,n.Z)(t),type:"video/mp4"}))}},8129:(t,e,a)=>{a.d(e,{_:()=>l});var n=a(7294);function l({id:t,playlistId:e,aspectRatio:a=16/9}){const l=void 0!==e?`https://www.youtube.com/embed/videoseries?list=${e}`:`https://www.youtube.com/embed/${t}`;return n.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},n.createElement("iframe",{src:l,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},7008:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>r,metadata:()=>o,toc:()=>i,default:()=>u});var n=a(7462),l=(a(7294),a(3905));a(1395),a(8215),a(7840),a(8129),a(8173),a(6776);const r={title:"Falling cherry blossom petal for spring mood particle",author:"kritth",steamId:"76561198055627364",date:"05.02.2015"},o={unversionedId:"assets/particles/falling-cherry-blossom-petal-for-spring-mood-particle",id:"assets/particles/falling-cherry-blossom-petal-for-spring-mood-particle",isDocsHomePage:!1,title:"Falling cherry blossom petal for spring mood particle",description:"If you are new to particle creation, you should read this particle basic first because I will not explain in detail these functions in detail. I will instead explain the thought process that comes in my mind during each creation. Now let's get started.",source:"@site/_articles/assets/particles/falling-cherry-blossom-petal-for-spring-mood-particle.md",sourceDirName:"assets/particles",slug:"/assets/particles/falling-cherry-blossom-petal-for-spring-mood-particle",permalink:"/assets/particles/falling-cherry-blossom-petal-for-spring-mood-particle",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/particles/falling-cherry-blossom-petal-for-spring-mood-particle.md",version:"current",frontMatter:{title:"Falling cherry blossom petal for spring mood particle",author:"kritth",steamId:"76561198055627364",date:"05.02.2015"},sidebar:"tutorials",previous:{title:"Chaos Wave Particle",permalink:"/assets/particles/chaos-wave-particle"},next:{title:"Volcano Particle",permalink:"/assets/particles/volcano-particle"}},i=[],s={toc:i};function u({components:t,...e}){return(0,l.kt)("wrapper",(0,n.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you are new to particle creation, you should read ",(0,l.kt)("a",{href:"particle-basics"},"this particle basic")," first because I will not explain in detail these functions in detail. I will instead explain the thought process that comes in my mind during each creation. Now let's get started."),(0,l.kt)("p",null,"I was working on my map the other day in the following image."),(0,l.kt)("img",{src:"https://i.imgur.com/chIqYgk.jpg"}),(0,l.kt)("p",null,'I feel like it lacks some kind of "spring" mood to it. So I feel like there should be petal falling down. Since it\'s pretty simple to do, I feel like I should include this as example in the tutorial. The end result will be like following image. You might not see much with static picture, but after you are finished, there will be those petals flying around in your map.'),(0,l.kt)("img",{src:"https://i.imgur.com/lIl4maG.jpg"}),(0,l.kt)("p",null,"If you know what to do, you can simply add these functions to your system. I will also explain in detail on my thought process and steps on creating this as well."),"```lua Render sprites Lifespan decay Alpha fade out simple Movement basic Rotation basic Noise vector Rotation spin roll Radius scale Alpha fade in simple Rotation random Position within sphere random Alpha random Lifetime random Radius random Emit continuously ```",(0,l.kt)("p",null,"Now if you want to know further detail on this system then"),"- open up particle editor",(0,l.kt)("br",null),"- create a new particle.",(0,l.kt)("p",null,"Now I want petals to show up."),"- Add ",(0,l.kt)("b",null,'"Render Sprites"')," in Renderer since there is no self-animation involved in this system.",(0,l.kt)("br",null),"- Now I check orientation type, it's already set to \"Screen Align\" so it's good to go.",(0,l.kt)("br",null),"- Scroll down to the texture field, you can see the circle sprite.",(0,l.kt)("p",null,"But I want petal sprite for this situation, falling circle might be able to work as snow but not for spring."),"- Click on Magnifying glass to open up browser.",(0,l.kt)("br",null),"- In this point, you can use your custom vtex material as a texture but in this tutorial, materials/particle/flower/flower.vtex will do the job.",(0,l.kt)("p",null,"Now that renderer is up, I need an emitter to show my petal."),"- Add ",(0,l.kt)("b",null,'"Emit continuously"')," in Emitter since I want my petals to keep falling down.",(0,l.kt)("p",null,(0,l.kt)("b",null,"Don't forget to change your max particles number in Base Properties and emission rate accordingly so your particle system will not overflow with too many particles.")," In this tutorial, I set mine to 160 as I think that should do the job. Now your screen should have something similar to this."),(0,l.kt)("img",{src:"https://i.imgur.com/y3wMAMp.png"}),(0,l.kt)("p",null,"Now that it shows the petal, but there is nothing going on yet. Since I want these petals to move and disappear at some points, I continue on to next step:"),"- Add ",(0,l.kt)("b",null,'"Lifespan decay"')," in Operator since I want them to disappear at some points.",(0,l.kt)("br",null),"- Add ",(0,l.kt)("b",null,'"Movement basic"')," in Operator since I want them to move at some points.",(0,l.kt)("p",null,"Now I do feel like this scene somewhat needs a gravity since petal will be falling down in some directions. So I make some changes to the value in Movement basic as followed:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gravity"),(0,l.kt)("td",{parentName:"tr",align:null},"100 -100 -200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drag"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.4")))),(0,l.kt)("p",null,"The gravity is freely adjustable to your taste, but I like mine to go in this direction. Your result should be something similar to this."),(0,l.kt)("img",{src:"https://i.imgur.com/aFNmLNT.png"}),(0,l.kt)("p",null,"Now I have the petals showing up and move due to gravity, I want them to spread around in the area not just start from origin. So I do this"),"- Add ",(0,l.kt)("b",null,'"Position within sphere random"')," in Initializer to position my petals.",(0,l.kt)("p",null,"Now, there are two ways to approach how you initialize this function."),"- First way is to manually adjust the value in particle editor.",(0,l.kt)("br",null),"- Second way is to bind it to the control point.",(0,l.kt)("p",null,"I will explain the first way since I will use it statically in my hammer (adjusting these control points in hammer is hell.)"),(0,l.kt)("p",null,"Now I want them to start within certain radius and start with certain speed. I change following values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distance min"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distance max"),(0,l.kt)("td",{parentName:"tr",align:null},"1500.0 (maximum radius you want to cover)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distance bias absolute value"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0 0.0 0.7 (since I only want them to show up on the top half of sphere)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"speed min"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"speed max"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"speed in local coordinate system min"),(0,l.kt)("td",{parentName:"tr",align:null},"0 0 -20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"speed in local coordinate system max"),(0,l.kt)("td",{parentName:"tr",align:null},"0 0 -20")))),(0,l.kt)("p",null,"If you want to bind these value to control point, simply change ",(0,l.kt)("b",null,"scale CP"),", in which (x, y, z) will represent (distance, speed, local speed), to desired control point and set all the above value to 1.0 except distance min and distance bias absolute value. Now that it is done, you should see something similar to the following."),(0,l.kt)("img",{src:"https://i.imgur.com/7qvk253.png"}),(0,l.kt)("p",null,"Now I feel like these petals lack natural feeling to it. So I add the randomness to this system by following functions."),"- Add ",(0,l.kt)("b",null,'"Rotation random"')," in Initializer.",(0,l.kt)("br",null),"- Add ",(0,l.kt)("b",null,'"Alpha random"')," in Initializer.",(0,l.kt)("br",null),"- Add ",(0,l.kt)("b",null,'"Lifetime random"')," in Initializer.",(0,l.kt)("br",null),"- Add ",(0,l.kt)("b",null,'"Radius random"')," in Initializer.",(0,l.kt)("p",null,"Now you have to go in each function and adjust the value to your taste. The followings are the settings I use in this tutorial."),(0,l.kt)("h4",null,"Rotation random"),"- default value",(0,l.kt)("h4",null,"Alpha random"),(0,l.kt)("p",null,"People won't like it if these petals will obstruct the view of the players so I set the values as followed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha min"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha max"),(0,l.kt)("td",{parentName:"tr",align:null},"150")))),(0,l.kt)("h4",null,"Lifetime random"),(0,l.kt)("p",null,"The petals should disappear at different time so I set the values as followed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lifetime min"),(0,l.kt)("td",{parentName:"tr",align:null},"1.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lifetime max"),(0,l.kt)("td",{parentName:"tr",align:null},"3.0")))),(0,l.kt)("h4",null,"Radius random"),(0,l.kt)("p",null,"In reality, petals are not the same size every where, so I set the values as followed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"radius min"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"radius max"),(0,l.kt)("td",{parentName:"tr",align:null},"20.0")))),(0,l.kt)("p",null,"Once those are all set, you should see the result similar to below."),(0,l.kt)("img",{src:"https://i.imgur.com/VhuUzL9.png"}),(0,l.kt)("p",null,"Now that you see randomness at creation, but the sudden pop in and out is kinda annoying to me. So I get rid of them by:"),"- Add ",(0,l.kt)("b",null,'"Alpha fade in simple"')," in Operator.",(0,l.kt)("br",null),"- Add ",(0,l.kt)("b",null,'"Alpha fade out simple"')," in Operator.",(0,l.kt)("p",null,"I left those value as default as I think it's already much better than earlier. You can freely adjust those values as you like."),(0,l.kt)("p",null,"Now the petals fall and fade in and out, we want them to rotate as they go so it looks more natural. To do so, add the following function."),"- Add ",(0,l.kt)("b",null,'"Rotation basic"')," in Operator.",(0,l.kt)("br",null),"- Add ",(0,l.kt)("b",null,'"Rotation spin roll"')," in Operator.",(0,l.kt)("p",null,"And now adjust the values of Rotation spin roll and leave Rotation basic as default."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spin rate degree"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0")))),(0,l.kt)("p",null,"So now the petals start spinning, I want to make them get smaller as they go to reduce some blocking vision to players. So I add:"),"- Add ",(0,l.kt)("b",null,'"Radius scale"')," in Operator.",(0,l.kt)("p",null,"However, I don't want them to start right away and the petals don't just go back to 0.0 scale, so I adjust the following values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start time"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end time"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"radius start scale"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"radius end scale"),(0,l.kt)("td",{parentName:"tr",align:null},"0.4")))),(0,l.kt)("p",null,"Now you should have something looking similar to this."),(0,l.kt)("img",{src:"https://i.imgur.com/ioODWyt.png"}),(0,l.kt)("p",null,"Now it almost looks natural but it lacks wind. Normally when petals fall down, it should somewhat be affected by the wind. To achieve this, I add the following function:"),"- Add ",(0,l.kt)("b",null,'"Noise Vector')," in Operator.",(0,l.kt)("p",null,"You should now see your petals blinking with different color. Don't panic. We haven't adjusted the value yet so it's set to default that way. Now I want to adjust so the noise will add into my sprite as it goes with randomness. So I set the values to the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output field"),(0,l.kt)("td",{parentName:"tr",align:null},"Position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output minimum"),(0,l.kt)("td",{parentName:"tr",align:null},"-10.0 -10.0 -10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output maximum"),(0,l.kt)("td",{parentName:"tr",align:null},"10.0 10.0 10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"noise coordinate scale"),(0,l.kt)("td",{parentName:"tr",align:null},"0.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"additive"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"Now with this, your falling petals should look very natural, and you can adjust all those values as you desire. The result particles should be similar to the following."),(0,l.kt)("img",{src:"https://i.imgur.com/ajnc7uu.png"}),(0,l.kt)("p",null,"This reaches the end of this tutorial. If you have any question, comment, or improvement to the guide, please don't hesitate to leave a comment or send me a message. Let me know what you want to see created next!."))}u.isMDXComponent=!0},6010:(t,e,a)=>{function n(t){var e,a,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(l&&(l+=" "),l+=a);else for(e in t)t[e]&&(l&&(l+=" "),l+=e);return l}function l(){for(var t,e,a=0,l="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(l&&(l+=" "),l+=e);return l}a.d(e,{Z:()=>l})}}]);