(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(2),a=(n(0),n(186));n(181),n(182),n(187),n(188),n(189);const o={title:"Unit producing buildings",author:"Noya",steamId:"76561198046984233",date:"08.03.2015"},r={id:"units/unit-producing-buildings",isDocsHomePage:!1,title:"Unit producing buildings",description:"This is a response tutorial on @Lemon30 question thread, I'm gonna explain the scripting approaches to fully spawning units with a building, including making them controllable and defining initial orders.",source:"@site/_articles/units/unit-producing-buildings.md",permalink:"/units/unit-producing-buildings",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/unit-producing-buildings.md",sidebar:"tutorials",previous:{title:"Unit KeyValues",permalink:"/units/unit-keyvalues"},next:{title:"Creating units with a duration",permalink:"/units/creating-units-with-a-duration"}},l=[{value:"Step 1: The npc_units_custom.txt files",id:"step-1-the-npc_units_customtxt-files",children:[]},{value:"Step 2: Putting your unit into the map.",id:"step-2-putting-your-unit-into-the-map",children:[{value:"Hammer Units",id:"hammer-units",children:[]},{value:"Scripting Approach",id:"scripting-approach",children:[]}]},{value:"Step 3: Scripting the unit-spawning ability inside the building",id:"step-3-scripting-the-unit-spawning-ability-inside-the-building",children:[{value:"DataDriven &quot;SpawnUnit&quot;",id:"datadriven-spawnunit",children:[]}]},{value:"Orders",id:"orders",children:[]}],s={rightToc:l};function c({components:e,...t}){return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a response tutorial on @Lemon30 ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://moddota.com/forums/discussion/168/unit-producing-buildings-how-do-they-work"}),"question thread"),", I'm gonna explain the scripting approaches to fully spawning units with a building, including making them controllable and defining initial orders."),Object(a.b)("h2",{id:"step-1-the-npc_units_customtxt-files"},"Step 1: The npc_units_custom.txt files"),Object(a.b)("p",null,"First of all, you'll need a KeyValue definition for a building and the unit you want to spawn."),Object(a.b)("p",null,"There are many examples of units in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/MNoya/Warchasers/blob/master/scripts/npc/npc_units_custom.txt"}),"Warchasers")," & ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/MNoya/DotaCraft/tree/master/scripts/npc/units"}),"DotaCraft")," repositories, so I don't think I need to explain much about this."),Object(a.b)("p",null,"I want to make one special note here though. ",Object(a.b)("strong",{parentName:"p"},'"BaseClass" "npc_dota_building" can be seen through fog'),". "),Object(a.b)("p",null,"So if you have a problem with this, don't make your unit a building, but a ",Object(a.b)("strong",{parentName:"p"},"npc_dota_creature instead"),". "),Object(a.b)("p",null,"This has the issue of creatures having a turn rate, so additionally you'll need to apply a MODIFIER_STATE_STUNNED on them, make the Magic Immune so most spells don't damage them, and make an special rule for spells that are supposed to damage buildings this way."),Object(a.b)("p",null,"That being said, we won't be bothering with that for the purpose of this tutorial."),Object(a.b)("p",null,"I'll be using a simplified version of the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://pastebin.com/z5Jk9W17"}),"human_barracks"),' definition, with a "human_train_footman" ability, which I\'ll expand on the possibilities for it later.'),Object(a.b)("h2",{id:"step-2-putting-your-unit-into-the-map"},"Step 2: Putting your unit into the map."),Object(a.b)("p",null,"There are 2 main options for doing this, one is Hammer oriented, and the other is a fully scripted approach."),Object(a.b)("h3",{id:"hammer-units"},"Hammer Units"),Object(a.b)("p",null,"As described in the first thread, you can point and click to add a unit to the map, with all sort of properties. "),Object(a.b)("p",null,'The problem with this approach is that even though the building is "part of your team", you have no control over it, the same way you can\'t control the autoattacks of Towers in Dota.'),Object(a.b)("p",null,"To solve this, we need to use a couple of lines in lua, basically the ",Object(a.b)("inlineCode",{parentName:"p"},"SetOwner")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SetControllableByPlayer")," ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API#CBaseEntity"}),"API functions"),"."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[CBaseEntity] void SetOwner( handle_owningEntity )")," ",Object(a.b)("strong",{parentName:"p"},"-- Sets this entity's owner")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"[CDOTA_BaseNPC] void SetControllableByPlayer( int, bool )")," ",Object(a.b)("strong",{parentName:"p"},"-- Set this unit controllable by a player.")),Object(a.b)("p",null,"To properly call these functions, I'm gonna assume you already know the basics explained under the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/articles/beginners-guide-to-dota-scripting"}),"Beginners Guide to Scripting")," and just explain where should you call these with an example."),Object(a.b)("p",null,"A good GameMode hook to call these would be after the dota_player_picked_hero, so given a standard barebones listener like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"ListenToGameEvent('dota_player_pick_hero', Dynamic_Wrap(GameMode, 'OnPlayerPickHero'), self)\n")),Object(a.b)("p",null,"In OnPlayerPickHero you need to ",Object(a.b)("strong",{parentName:"p"},"find the handle of the BaseEntity/BaseNPC"),", that is, the unit you want to change ownership and control state."),Object(a.b)("p",null,"This can be done in a couple of ways, for example, using the functions defined under ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API#CEntities"}),"CEntities"),". We want this building to have a unique identifier so its easy to search it, so inside Hammer, select it, go into its properties, and give it a name (I use the Alt+Enter hotkey for this):"),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/gs6Ec/c0a81f34ae.jpg",alt:"img"}))),Object(a.b)("p",null,"Now you can search the building and get a local variable to it with this line:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'local building = Entities:FindByName(nil, "building_barracks1")\n')),Object(a.b)("p",null,"Note: ",Object(a.b)("strong",{parentName:"p"},"Remember to select Entities when building the map"),"!"),Object(a.b)("p",null,"The OnPlayerPickHero function should then look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'function GameMode:OnPlayerPickHero(keys)\n    local hero = EntIndexToHScript(keys.heroindex)\n    local player = EntIndexToHScript(keys.player)\n    local playerID = hero:GetPlayerID()\n\n    local building = Entities:FindByName(nil, "building_barracks1")\n    building:SetOwner(hero)\n    building:SetControllableByPlayer(playerID, true)\nend\n')),Object(a.b)("p",null,"Now your building should be fully controllable for ability usage, and even subtract gold from the player if you use abilities with gold cost."),Object(a.b)("h3",{id:"scripting-approach"},"Scripting Approach"),Object(a.b)("p",null,"Hey Hammer is good and everything, but it's behavior is very static. You need to have predefined position for the units, build the map everytime you make a change, and can't choose to not spawn any of them if there are less players than expected, etc."),Object(a.b)("p",null,"There is a fully scripted method for placing units on the map, which is done by using the ",Object(a.b)("inlineCode",{parentName:"p"},"CreateUnitByName")," function, with some additional perks."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"handle CreateUnitByName( szUnitName, vLocation, bFindClearSpace, hNPCOwner, hUnitOwner, iTeamNumber )")),Object(a.b)("p",null,"Still working inside the same OnPlayerPickHero, we can either make an static position for each playerID, such as ",Object(a.b)("em",{parentName:"p"},"Vector(450,322,128)"),", doing random positions with named info_target entities in Hammer, or a dynamic position based on the hero spawn location. Let's do the latter:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"local origin = hero:GetAbsOrigin() -- Spawn position\nlocal fv = hero:GetForwardVector() -- Vector the hero is facing\nlocal distance = 300 \nlocal position = origin + fv * distance\n")),Object(a.b)("p",null,"This will define a Vector facing 300 units to the direction the hero is facing."),Object(a.b)("p",null,"Now, CreateUnitByName should then be called in this way:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'local building = CreateUnitByName("human_barracks", position, true, hero, hero, hero:GetTeamNumber())\n')),Object(a.b)("p",null,"Even though we set the hNPCOwner and hUnitOwner, the SetOwner and SetControllableByPlayer are still necessary."),Object(a.b)("h4",{id:"building-invulnerability"},"Building invulnerability"),Object(a.b)("p",null,'There\'s an small issue with npc_dota_building baseclass which is that they spawn with "modifier_invulnerable" by default, to get rid of this, run this line:'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'building:RemoveModifierByName("modifier_invulnerable")\n')),Object(a.b)("h4",{id:"did-i-mention-buildings-are-retarded"},"Did I mention Buildings are retarded?"),Object(a.b)("p",null,"There's another issue, buildings will sometimes be not created where you want them to be, and instead be stuck to the (0,0,0) position, so, if this happens, add this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),"Timers:CreateTimer(function() building:SetAbsOrigin(position) end)\n")),Object(a.b)("p",null,"Wait 1 frame, and using BMD's timers4life, your building will finally appear in the correct position"),Object(a.b)("h4",{id:"precache"},"Precache"),Object(a.b)("p",null,"Last thing is the Unit's Precache requirement. Unlike units dropped on Hammer, lua CreateUnitByName won't run the precache {} blocks of the unit abilities nor Model, so we need to do it manually in either addon_game_mode.lua or in PostLoadPrecache() if you are worried about your clients not loading properly. I'll just go with the first method in this case:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'function Precache( context ) -- Find this in addon_game_mode.lua\n    PrecacheUnitByNameSync("human_barracks", context)\nend\n')),Object(a.b)("p",null,"Done! Full code of the building spawning on front of the hero looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'function GameMode:OnPlayerPickHero(keys)\n    local hero = EntIndexToHScript(keys.heroindex)\n    local player = EntIndexToHScript(keys.player)\n    local playerID = hero:GetPlayerID()\n\n    -- Choose a Position\n    local origin = hero:GetAbsOrigin() -- Spawn position\n    local fv = hero:GetForwardVector() -- Vector the hero is facing\n    local distance = 300 \n    local position = origin + fv * distance\n\n    -- Spawning\nlocal building = CreateUnitByName("human_barracks", position, true, hero, hero, hero:GetTeamNumber())\n    building:SetOwner(hero)\n    building:SetControllableByPlayer(playerID, true)\n    building:SetAbsOrigin(position)\n    building:RemoveModifierByName("modifier_invulnerable")\n')),Object(a.b)("br",null),Object(a.b)("h2",{id:"step-3-scripting-the-unit-spawning-ability-inside-the-building"},"Step 3: Scripting the unit-spawning ability inside the building"),Object(a.b)("p",null,"Now that we have a fully working building ingame, let's move to npc_abilities_custom.txt and creature spawning from this building."),Object(a.b)("p",null,'There are 2 main ways of doing this: with the DataDriven Action "SpawnUnit", or just with the ',Object(a.b)("inlineCode",{parentName:"p"},"CreateUnitByName")," Lua function as explained before. "),Object(a.b)("h3",{id:"datadriven-spawnunit"},'DataDriven "SpawnUnit"'),Object(a.b)("p",null,"I actually prefer this DD Action and use it extensively thorough all of DotaCraft's unit spawning, because it has access to the very useful ",Object(a.b)("inlineCode",{parentName:"p"},'"OnSpawn"')," Sub-Event, which is only accessible through this action, and has some other options for unit count, limit (so you can't have more than X units of the same unit at the same time), modifier_kill integration, etc."),Object(a.b)("p",null,"Of course you could listen to the game event of unit spawned and do your OnSpawn stuff there, but that makes the ability less modular and harder to maintain."),Object(a.b)("p",null,"SpawnUnit should be used as it follows, and is included in the Sublime Dota KV snippets:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'"SpawnUnit"\n{\n    "UnitName"       "npc_name"\n    "Target"         "CASTER"\n    "Duration"       "%duration"\n    "UnitCount"      "1"\n    "UnitLimit"      "0"\n    "GrantsGold"     "1"\n    "GrantsXP"       "1"\n    "SpawnRadius"    "10"\n    "OnSpawn"\n    {\n        "ApplyModifier"\n        {\n            "ModifierName"  "modifier_phased"\n            "Target"        "TARGET"\n            "Duration"      "0.03"\n        }\n        [ACTIONS]\n    }\n}\n')),Object(a.b)("p",null,'Applying "modifier_phased" for 1 frame is to prevent units getting stuck, for example if you cast the ability directly on the caster, without the phasing, it will be stuck on the same point and both units will be unable to move. This is similar to running the Lua ',Object(a.b)("inlineCode",{parentName:"p"},"FindClearSpaceForUnit"),", because once the phasing ends, units will try to find an empty position."),Object(a.b)("p",null,"Units created by this function are already under control of the owner of the building."),Object(a.b)("p",null,'Inside the "OnSpawn" replacing the ',"[ACTIONS]",", it's useful to send orders to the unit, which can be referenced in lua as the event.target."),Object(a.b)("p",null,"Here is a full example:"),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://pastebin.com/9g316n5A"}),"https://pastebin.com/9g316n5A")),Object(a.b)("p",null,"The footman unit definition is just a Dragon Knight with some wearables, ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://pastebin.com/XW3wWmhd"}),"I copied it here"),"."),Object(a.b)("p",null,"Note the usage of a RunScript to call a MoveToRallyPoint function, this will introduce the 4th and last step of this guide."),Object(a.b)("h2",{id:"orders"},"Orders"),Object(a.b)("p",null,"Various orders can be run after the unit spawns. "),Object(a.b)("p",null,"Try to use the ",Object(a.b)("inlineCode",{parentName:"p"},"ExecuteOrderFromTable")," to avoid dropping orders because the unit is doing something else (like spawning), if you want to use easier functions like ",Object(a.b)("inlineCode",{parentName:"p"},"MoveToPosition")," you might need to add timers to make sure the unit is ready to perform the order."),Object(a.b)("p",null,"Also, the Ownership of the unit needs to be changed to the ",Object(a.b)("strong",{parentName:"p"},"hero handle"),", because the caster is a creature and those can't gain gold!"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-lua"}),'function MoveToRallyPoint( event )\n    local caster = event.caster\n    local target = event.target\n\n    -- Change this to your desired Vector, usually as an hscript:GetAbsOrigin()\n    local position = Vector(420,322,128) \n\n    ExecuteOrderFromTable({ UnitIndex = target:GetEntityIndex(), \n                            OrderType = DOTA_UNIT_ORDER_MOVE_TO_POSITION,\n                            Position = position, Queue = true })\n    print(target:GetUnitName().." moving to position",position)\n\n    local player = caster:GetPlayerOwner()\n    local hero = player:GetAssignedHero()\n    target:SetOwner(hero)\nend\n')),Object(a.b)("hr",null),Object(a.b)("br",null),"That's it for now, post any doubts about anything below. Thanks for reading!")}c.isMDXComponent=!0},181:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(185),r=n(183),l=n(90),s=n.n(l);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:h}=Object(o.a)(),[m,g]=Object(i.useState)(l);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&g(e)}const f=e=>{g(e),null!=b&&h(b,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},182:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function(e){return a.a.createElement("div",null,e.children)}},183:function(e,t,n){"use strict";function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}},184:function(e,t,n){"use strict";var i=n(0);const a=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},185:function(e,t,n){"use strict";var i=n(0),a=n(184);t.a=function(){return Object(i.useContext)(a.a)}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(r,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0),a=n.n(i);function o({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0),a=n.n(i);function o({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(3),a=n(182),o=n(181),r=n(0),l=n.n(r);const s={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t}){Object(i.a)("string"==typeof t||null===t);const n=l.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(i.a)(t in s),{language:t,element:e}});return l.a.createElement(o.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:s[e]}))},n.map(({language:e,element:t})=>l.a.createElement(a.a,{key:e,value:e},t)))}}}]);