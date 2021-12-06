"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[8435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>o});var r=n(2263),a=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=function({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),a=n(944),i=n(6010);const o="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,u=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:d,groupId:m,className:p}=e,{tabGroupChoices:f,setTabGroupChoices:h}=(0,a.Z)(),[y,v]=(0,r.useState)(c),k=r.Children.toArray(e.children),b=[];if(null!=m){const e=f[m];null!=e&&e!==y&&d.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.currentTarget,n=b.indexOf(t),r=d[n].value;v(r),null!=m&&(h(m,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return t>=0&&a<=o&&r<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case u:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case s:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:e=>b.push(e),onKeyDown:w,onFocus:g,onClick:g},t)))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(9443);const i=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>a});var r=n(7294);function a({id:e,aspectRatio:t=4/3,hd:n="0"}){return r.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>s});var r=n(2177),a=n(8215),i=n(1395),o=n(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){(0,r.Z)("string"==typeof t||void 0===t);const s=o.Children.toArray(e).map(((e,t)=>{var r;const a=(null==(r=e.props.children.props.className)?void 0:r.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??l[a]??a,element:e}}));return o.createElement(i.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>o.createElement(a.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>i});var r=n(4996),a=n(7294);function i({path:e,controls:t=!1}){return a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.createElement("source",{src:(0,r.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>a});var r=n(7294);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return r.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},3474:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>o,toc:()=>l,default:()=>u});var r=n(7462),a=(n(7294),n(3905));n(1395),n(8215),n(7840),n(8129),n(8173),n(6776);const i={title:"Sending Server values to the Client in a modifier.",author:"DankBud",steamId:"76561198157673452",date:"05.12.2021"},o={unversionedId:"abilities/server-to-client",id:"abilities/server-to-client",isDocsHomePage:!1,title:"Sending Server values to the Client in a modifier.",description:"Modifier scripts are run on both the server, and every client in the game.",source:"@site/_articles/abilities/server-to-client.md",sourceDirName:"abilities",slug:"/abilities/server-to-client",permalink:"/abilities/server-to-client",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/server-to-client.md",version:"current",frontMatter:{title:"Sending Server values to the Client in a modifier.",author:"DankBud",steamId:"76561198157673452",date:"05.12.2021"},sidebar:"tutorials",previous:{title:"Using Modifier Properties in tooltips",permalink:"/abilities/modifier-properties-in-tooltips"},next:{title:"Unit KeyValues",permalink:"/units/unit-keyvalues"}},l=[{value:"Modifier Stack Count",id:"stacks",children:[]},{value:"Modifier Transmitters",id:"transmitters",children:[]}],s={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modifier scripts are run on both the server, and every client in the game.\nA lot of the ",(0,a.kt)("a",{parentName:"p",href:"https://moddota.com/api/#!/vscripts"},"Lua API")," is server-side functions that the client cannot use."),(0,a.kt)("p",null,"And so, often times when using modifiers you will have to use Server only functions for calculations or whatever your purpose may be."),(0,a.kt)("p",null,"Usually the server is what handles the functionality, while the client is just for displaying information."),(0,a.kt)("p",null,"So if you for example gave your hero bonus damage that you calculated or stored only on the server then you would see that your hero does deal the bonus damage, but its not displayed on the UI or any Tooltips."),(0,a.kt)("p",null,"Example that grants 2x your primary attribute as bonus damage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"modifier_example = class({})\n\nfunction modifier_example:DeclareFunction()\n    return {\n        MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE\n    }\nend\n\nfunction modifier_example:GetModifierPreAttack_BonusDamage()\n    if not IsServer() then return end\n    --GetPrimaryStatValue is a server-only function\n    return self:GetParent():GetPrimaryStatValue() * 2\nend\n")),(0,a.kt)("p",null,"With this modifier you will run into the mentioned issue where your attack damage is not updated in the UI, but you will still deal the bonus damage."),(0,a.kt)("p",null,"To fix this, we need to somehow send this server-only value to the client.\nThere are 2 primary methods for doing this, though there are other less convienient ways."),(0,a.kt)("h3",{id:"stacks"},"Modifier Stack Count"),(0,a.kt)("p",null,"This is the most basic method, where all you need to do is Set the modifiers stack count on the server and the stack count is automatically synced to the client."),(0,a.kt)("p",null,"Example using this method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"modifier_example = class({})\n\nfunction modifier_example:DeclareFunction()\n    return {\n        MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE\n    }\nend\n\nfunction modifier_example:GetModifierPreAttack_BonusDamage()\n    if IsServer() then\n        local stat = self:GetParent():GetPrimaryStatValue()\n        self:SetStackCount(stat)\n    end\n\n    return self:GetStackCount() * 2\nend\n")),(0,a.kt)("p",null,"Great, now the damage is applied and displayed correctly!"),(0,a.kt)("p",null,"But, there are some limitations with using modifier stacks."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can only set integer values. No floats, booleans, strings, or tables."),(0,a.kt)("li",{parentName:"ul"},"You can only set one stack count per modifier."),(0,a.kt)("li",{parentName:"ul"},"The stack count is displayed on the modifier buff icon, and this is not always wanted.")),(0,a.kt)("p",null,"So what can you do if you need to send one of these unsupported values or even send multiple values to the client?"),(0,a.kt)("p",null,"Well, there are some workarounds but what you should use is Modifier Transmitters."),(0,a.kt)("h3",{id:"transmitters"},"Modifier Transmitters"),(0,a.kt)("p",null,"Modifier transmitters allow you to send any amount of any value types from the server to the client in your modifier.\nBut they require a bit of set-up."),(0,a.kt)("p",null,"There are 3 functions needed to make use of transmitters."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SetHasCustomTransmitterData"),"\nThis should be called in your modifier's ",(0,a.kt)("inlineCode",{parentName:"p"},"OnCreated")," function\nto tell the server you want your modifier to transmit data to the client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"AddCustomTransmitterData"),"\nThis is where you pick the data you want to send to the client, run on server-side only")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"HandleCustomTransmitterData"),"\nThis is where the server data is sent to, run on client-side only.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"and also ",(0,a.kt)("inlineCode",{parentName:"p"},"SendBuffRefreshToClients")," for refreshing the transmitted data if needed."))),(0,a.kt)("p",null,"Example that grants bonus damage and attack speed based on your current health."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'modifier_example = class({})\n\nfunction modifier_example:OnCreated( kv )\n    if not IsServer() then return end\n    --grab some values from the ability\'s KV\n    local percent_health_to_damage = self:GetAbility():GetSpecialValueFor("percent_health_to_damage")\n    local percent_health_to_atk_spd = self:GetAbility():GetSpecialValueFor("percent_health_to_atk_spd")\n\n    --GetHealth is a server-only function\n    local health = self:GetParent():GetHealth()\n\n    --calculate our values on the server.\n    self.damage = health * percent_health_to_damage\n    self.attack_speed = health * percent_health_to_atk_spd\n\n    --tell the server we are ready to send data to the client\n    self:SetHasCustomTransmitterData(true)\n\n    --we want to think so we can periodically refresh the data we are sending to the client\n    --note: this can be called on client, but in this script its only called on server, so it only thinks on server.\n    self:StartIntervalThink(0.1)\nend\n\n--refresh the modifier on every think\nfunction modifier_example:OnIntervalThink()\n    self:ForceRefresh()\nend\n\n--this function is called when a modifier is reapplied, or manually refreshed in a script.\nfunction modifier_example:OnRefresh( kv )\n    if IsServer() then\n        --SendBuffRefreshToClients is a server-only function\n        self:SendBuffRefreshToClients()\n    end\nend\n\n--this is a server-only function that is called whenever modifier:SetHasCustomTransmitterData(true) is called,\n-- and also whenever modifier:SendBuffRefreshToClients() is called\nfunction modifier_example:AddCustomTransmitterData()\n    return {\n        damage = self.damage,\n        attack_speed = self.attack_speed,\n    }\nend\n\n--this is a client-only function that is called with the table returned by modifier:AddCustomTransmitterData()\nfunction modifier_example:HandleCustomTransmitterData( data )\n    self.damage = data.damage\n    self.attack_speed = data.attack_speed\nend\n\nfunction modifier_example:DeclareFunctions()\n    return {\n        MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT,\n        MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE,\n    }\nend\n\nfunction modifier_example:GetModifierAttackSpeedBonus_Constant()\n    return self.attack_speed\nend\n\nfunction modifier_example:GetModifierPreAttack_BonusDamage()\n    return self.damage\nend\n')),(0,a.kt)("p",null,"You can find many other examples of modifier transmitters on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/search?l=Lua&q=SetHasCustomTransmitterData&type=Code"},"GitHub")))}u.isMDXComponent=!0},6010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);