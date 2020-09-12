(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(2),o=(n(0),n(186));n(181),n(182),n(187),n(188),n(189);const r={title:"Extending Hero/NPC API with lua modifiers",author:"DrTeaSpoon",steamId:"76561197975484185",date:"21.08.2016"},i={id:"abilities/lua-modifiers/1",isDocsHomePage:!1,title:"Extending Hero/NPC API with lua modifiers",description:"When creating cool new abilities or game mechanics you often run into issues with the lack of good API. While I admit the dota 2 has massive API, it seems to focus on few very odd things or mechanics not fully exposed by default game. (Runes, Spell Stealing, Illusions). To fix those issues you might want to expand it. Here is one method of doing so.",source:"@site/_articles/abilities/lua-modifiers/1.md",permalink:"/abilities/lua-modifiers/1",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/1.md",sidebar:"tutorials",previous:{title:"Lua Item Tutorial",permalink:"/abilities/lua-item-tutorial"},next:{title:"Linken's Sphere & Lotus Orb",permalink:"/abilities/lua-modifiers/2"}},s=[],l={rightToc:s};function c({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When creating cool new abilities or game mechanics you often run into issues with the lack of good API. While I admit the dota 2 has massive API, it seems to focus on few very odd things or mechanics not fully exposed by default game. (Runes, Spell Stealing, Illusions). To fix those issues you might want to expand it. Here is one method of doing so.",Object(o.b)("br",{parentName:"p"}),"\n","If you are using BMD's Barebones then you already have neatly exposed function ",Object(o.b)("inlineCode",{parentName:"p"},"GameMode:OnHeroInGame(hero)")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"internal/gamemode.lua")," file. Otherwise you will want to listen to NPC spawning when initializing your game mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function Activate()\n  LinkLuaModifier( "heroes_base_mod", "lua_modifiers/hero_base_mod.lua", LUA_MODIFIER_MOTION_NONE )\n  ListenToGameEvent(\'npc_spawned\', Dynamic_Wrap(CModDotaTutorialsGameMode, \'OnNPC_Spawn\'), CModDotaTutorialsGameMode)\nend\n\nfunction CModDotaTutorialsGameMode:OnNPC_Spawn(keys)\n  local npc = EntIndexToHScript(keys.entindex)\n  if npc:IsRealHero() and npc.bInit == nil then\n    npc.bInit = true\n        OnHeroFirst_Spawn(npc)\n  end\nend\n\nfunction OnHeroFirst_Spawn(hero)\n  hero:AddNewModifier( hero, nil, "heroes_base_mod", {} )\nend\n')),Object(o.b)("p",null,"NOTE: Keep in mind your gamemode's function name. I used ",Object(o.b)("inlineCode",{parentName:"p"},"CModDotaTutorialsGameMode"),". You should probably have something else. Now lets get back to topic. As you noticed we used ",Object(o.b)("inlineCode",{parentName:"p"},"LinkLuaModifier"),". We should create file it points to in your vscripts folder ",Object(o.b)("inlineCode",{parentName:"p"},'"lua_modifiers/hero_base_mod.lua"'),Object(o.b)("br",{parentName:"p"}),"\n","For this example we are tracking what is the last spell player has cast. This could be used potentially as the building blocks for recreating Rubick's spell steal.",Object(o.b)("br",{parentName:"p"}),"\n","If you are unfamiliar with lua modifiers here is the only essential part of your modifier:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"if heroes_base_mod == nil then\n    heroes_base_mod = class({})\nend\n")),Object(o.b)("p",null,"Next we want to make sure the modifier is not disabled at any point:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function heroes_base_mod:GetAttributes()\n    return MODIFIER_ATTRIBUTE_PERMANENT + MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE\nend\n")),Object(o.b)("p",null,"Here is the meat of our function's purpose. Track when this hero casts a spell."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function heroes_base_mod:DeclareFunctions()\n    local funcs = {\n        MODIFIER_EVENT_ON_ABILITY_EXECUTED\n    }\n    return funcs\nend\n\nfunction heroes_base_mod:OnAbilityExecuted(params)\n    if IsServer() then --Make sure we are doing this only server side.\n        if params.unit == self:GetParent() then --we only want the spells cast by this unit.\n            if not params.ability:IsItem() then --we don't want to track items.\n                self.lastability = params.ability --record the ability handle.\n            end\n        end\n    end\nend\n")),Object(o.b)("p",null,"Now we get to the magic:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function heroes_base_mod:OnCreated(kv)\n    local hMod = self --we can only reference to "self" in our own function we pass this modifier to function we create for the unit.\n    local hParent = self:GetParent() --the unit.\n    if hParent.GetLastSpell == nil then --if for some odd reason there is already such function\n        function hParent:GetLastSpell() ---we create new function for the unit.\n            if hMod.lastability ~= nil then --if unit has cast any spells\n                return hMod.lastability --return the last ability.\n            else\n                return nil --in case there is nothing to return. this is sort of redundant.\n            end\n        end\n    end\nend\n')),Object(o.b)("p",null,"Because we assume every hero having this modifier its kinda useless to show it on the screen."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function heroes_base_mod:IsHidden()\n    return true\nend\n")),Object(o.b)("p",null,"Now that we have our modifier done. We want some way of testing it. I decided to go with simple console command. Add following to your game init function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'-- this is in function Activate()\n Convars:RegisterCommand( "mod_test_spells", Dynamic_Wrap(CModDotaTutorialsGameMode, \'PrintLastSpells\'), "Print last spell for every hero", FCVAR_CHEAT )\n')),Object(o.b)("p",null,"Now the actual console command's function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function CModDotaTutorialsGameMode:PrintLastSpells()\n  print( '** Last Spell **' )\n    local tList = HeroList:GetAllHeroes()\n    for k,v in pairs(tList) do\n        local s = v:GetLastSpell()\n        if s == nil then\n            print( v:GetName() .. ' has cast no spells yet.')\n        else\n            print( v:GetName() .. ' last cast ' .. v:GetLastSpell():GetAbilityName())\n        end\n    end\n  print( '****************' )\nend\n")),Object(o.b)("p",null,"Now you should be able to use console command ",Object(o.b)("inlineCode",{parentName:"p"},"mod_test_spells")," to print out the last spell every hero has used.",Object(o.b)("br",{parentName:"p"}),"\n","Next topic: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"lua-modifiers-2"}),"Linken Sphere & Lotus Orb.")))}c.isMDXComponent=!0},181:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(185),i=n(183),s=n(90),l=n.n(s);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:d,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:b}=Object(r.a)(),[f,h]=Object(a.useState)(s);if(null!=p){const e=m[p];null!=e&&e!==f&&d.some(t=>t.value===e)&&h(e)}const y=e=>{h(e),null!=p&&b(p,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},182:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},183:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},184:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=o},185:function(e,t,n){"use strict";var a=n(0),o=n(184);t.a=function(){return Object(a.useContext)(o.a)}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a);function r({id:e,aspectRatio:t=4/3}){return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return o.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},o.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(3),o=n(182),r=n(181),i=n(0),s=n.n(i);const l={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t}){Object(a.a)("string"==typeof t||null===t);const n=s.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(a.a)(t in l),{language:t,element:e}});return s.a.createElement(r.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:l[e]}))},n.map(({language:e,element:t})=>s.a.createElement(o.a,{key:e,value:e},t)))}}}]);