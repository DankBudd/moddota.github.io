(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{160:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(2),r=(t(0),t(178)),a=t(179);t(180);const o={title:"Channeling Animations",author:"Noya",steamId:"76561198046984233",date:"18.01.2015"},l={id:"abilities/datadriven/channeling-animations",isDocsHomePage:!1,title:"Channeling Animations",description:"Short Version:",source:"@site/_articles/abilities/datadriven/channeling-animations.md",permalink:"/abilities/datadriven/channeling-animations",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/channeling-animations.md",sidebar:"tutorials",previous:{title:"All about the Target",permalink:"/abilities/datadriven/all-about-the-target"},next:{title:"Invisibility Ability Example",permalink:"/abilities/datadriven/invisibility-ability-example"}},c=[{value:"Short Version:",id:"short-version",children:[]},{value:"Full Version",id:"full-version",children:[]}],s={rightToc:c};function p({components:e,...n}){return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"short-version"},"Short Version:"),Object(r.b)("p",null,"ApplyModifier with short duration in a OnThinkInterval, channeling modifier has an OverrideAnimation with a ACT_ from the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Actions_List"}),"Action List")," or with the method explained later."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Short Version Example:")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'"Modifiers"\n{\n    "modifier_channeling"\n    {\n        "ThinkInterval" "1.0"\n        "OnIntervalThink"\n        {\n            // Looping Animation\n            "ApplyModifier"\n            {\n                "ModifierName"  "channelling_animation"\n                "Target"        "CASTER"\n            }\n        }\n    }\n   \n    "channelling_animation"\n    {\n        "IsHidden" "1"\n        "Duration" "0.9"\n        "OverrideAnimation" "ACT_DOTA_CAST_ABILITY_2"\n    }\n}\n')),Object(r.b)("h3",{id:"full-version"},"Full Version"),Object(r.b)("p",null,"!",Object(r.b)(a.a,{id:"FlusteredBigBoa",mdxType:"Gfycat"})),Object(r.b)("p",null,"Instead of trying to find the desired animation in the Action List on the wiki, you can view the animations on the model you are trying to use and their respective names."),Object(r.b)("p",null,"For this, go to the Asset Browser, type your hero name + ",Object(r.b)("em",{parentName:"p"},"vmdl"),", in this case I'm going to use drow.vmdl. Double click it, you will enter the Model Editor. In here, you want to go to the top tabs and click Tools -> View Sequences."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/eGRRP/c9e6fcc98f.png",alt:"img"}))),Object(r.b)("p",null,"After this, you can select any animation and it will animate the white blocks at the right. To get the ACT_ name, you can click Properties then open the Activities box, or just tick down the Activity checkbox in the Sequences window, which will show how all the animations are refered ingame."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/eGOTt/5073e07a64.png",alt:"img"}))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": Ignore the +string."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Full Example"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'"dark_ranger_life_drain"\n{\n    "BaseClass" "ability_datadriven"\n    "AbilityTextureName" "dark_ranger_life_drain"\n    "MaxLevel" "3"\n\n    "AbilityBehavior" "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING"\n    "AbilityUnitTargetTeam" "DOTA_UNIT_TARGET_TEAM_ENEMY"\n    "AbilityUnitTargetType" "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"\n    "AbilityUnitDamageType" "DAMAGE_TYPE_MAGICAL"\n    "AbilityCastAnimation" "ACT_DOTA_CAST_ABILITY_2"\n\n    "AbilityCastRange" "700"\n    "AbilityCastPoint" "0.3"\n    "AbilityCooldown" "8.0"\n\n    "AbilityManaCost" "50"\n    "AbilityChannelTime" "8"\n\n    "precache"\n    {\n        "particle" "particles/units/heroes/hero_pugna/pugna_life_drain.vpcf"\n        "soundfile" "soundevents/game_sounds_heroes/game_sounds_pugna.vsndevts"\n    }\n    \n    "AbilitySpecial"\n    {\n        "01"\n        {\n            "var_type" "FIELD_INTEGER"\n            "hp_drain_per_second" "25 40 55"\n        }\n    }\n\n    "OnSpellStart"\n    {\n        "ApplyModifier"\n        {\n            "ModifierName" "modifier_life_drain"\n            "Target" "TARGET"\n        }\n\n        "FireSound"\n        {\n            "EffectName" "Hero_Pugna.LifeDrain.Target"\n            "Target" "CASTER"\n        }\n    }\n\n    "OnChannelFinish"\n    {\n        "RemoveModifier"\n        {\n            "ModifierName" "modifier_life_drain"\n            "Target" "TARGET"\n        }\n    }\n\n    "Modifiers"\n    {\n        "modifier_life_drain"\n        {\n            "IsDebuff" "1"\n            "OnCreated"\n            {\n                "AttachEffect"\n                {\n                    "Target" "TARGET"\n                    "EffectName" "particles/units/heroes/hero_pugna/pugna_life_drain.vpcf"\n                    "EffectAttachType" "start_at_customorigin"\n\n                    "ControlPointEntities"\n                    {\n                        "CASTER" "attach_hitloc"\n                        "TARGET" "attach_hitloc"\n                    }\n                \n                }\n            }\n\n            "ThinkInterval" "1.0"\n            "OnIntervalThink"\n            {\n                // Health Transfer\n                "Damage"\n                {\n                    "Type" "DAMAGE_TYPE_MAGICAL"\n                    "Target" "TARGET" \n                    "Damage" "%hp_drain_per_second"\n                }\n\n                "Heal"\n                {\n                    "Target" "CASTER"\n                    "HealAmount" "%hp_drain_per_second"\n                }\n\n                // Looping Animation\n                "ApplyModifier"\n                {\n                    "ModifierName" "channelling_animation"\n                    "Target" "CASTER"\n                }\n            }\n        }\n\n        "channelling_animation"\n        {\n            "IsHidden" "0"\n            "Duration" "0.9"\n            "OverrideAnimation" "ACT_DOTA_CAST_ABILITY_2"\n        }\n    }\n}\n')))}p.isMDXComponent=!0},178:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return t?r.a.createElement(b,l(l({ref:n},s),{},{components:t})):r.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},179:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t(0),r=t.n(i);function a({id:e,aspectRatio:n=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t(0),r=t.n(i);function a({id:e,playlistId:n,aspectRatio:t=16/9}){const i=void 0!==n?"https://www.youtube.com/embed/videoseries?list="+n:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);