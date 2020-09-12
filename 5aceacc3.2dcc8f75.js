(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{125:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return l})),a.d(e,"rightToc",(function(){return c})),a.d(e,"default",(function(){return O}));var n=a(2),r=(a(0),a(186));a(181),a(182),a(187),a(188),a(189);const b={title:"All about the Target",author:"Noya",steamId:"76561198046984233",date:"23.01.2015"},l={id:"abilities/datadriven/all-about-the-target",isDocsHomePage:!1,title:"All about the Target",description:"I wanted to review a very old thread which was posted almost one year ago but still isn't completely well documented anywhere:",source:"@site/_articles/abilities/datadriven/all-about-the-target.md",permalink:"/abilities/datadriven/all-about-the-target",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/datadriven/all-about-the-target.md",sidebar:"tutorials",previous:{title:"DataDriven Ability Events & Modifiers",permalink:"/abilities/datadriven/datadriven-ability-events-modifiers"},next:{title:"Channeling Animations",permalink:"/abilities/datadriven/channeling-animations"}},c=[{value:"ABILITY EVENT CONTEXTS",id:"ability-event-contexts",children:[{value:"Behavior: DOTA_ABILITY_BEHAVIOR_NO_TARGET",id:"behavior-dota_ability_behavior_no_target",children:[]},{value:"DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",id:"dota_ability_behavior_unit_target",children:[]},{value:"AbilityChannelTime &gt; 0",id:"abilitychanneltime--0",children:[]},{value:"With Linear and Tracking Projectile Actions",id:"with-linear-and-tracking-projectile-actions",children:[]},{value:"DOTA_ABILITY_BEHAVIOR_TOGGLE",id:"dota_ability_behavior_toggle",children:[]},{value:"Item pickup and drop",id:"item-pickup-and-drop",children:[]},{value:"Any Behavior",id:"any-behavior",children:[]}]},{value:"MODIFER EVENT CONTEXTS",id:"modifer-event-contexts",children:[{value:"Caster-Target",id:"caster-target",children:[]},{value:"Damage",id:"damage",children:[]},{value:"Attacks",id:"attacks",children:[]},{value:"Killing",id:"killing",children:[]},{value:"Caster-Unit",id:"caster-unit",children:[]},{value:"Never Triggered",id:"never-triggered",children:[]}]}],i={rightToc:c};function O({components:t,...e}){return Object(r.b)("wrapper",Object(n.a)({},i,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"I wanted to review a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://moddota.com/cmsinternal/index.php/tet/pre-empting-problems-in-dota"}),"very old thread")," which was posted almost one year ago but still isn't completely well documented anywhere:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'"Target" is one bitch of a key.')),Object(r.b)("p",null,"And yet, it's arguably the most important KV to understand, as its found in almost every datadriven Action."),Object(r.b)("p",null,"Having a wrong ",Object(r.b)("inlineCode",{parentName:"p"},'"Target"')," block is the number one reason of having to relaunch the game, testing with many combinations until you finally get the right context."),Object(r.b)("p",null,"Quoting the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/Abilities_Data_Driven#Action_Target_Values"}),"wiki")," on this:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note:\tThese names mean different things in different events. It may require some experimentation to discover exactly what in each case.")),Object(r.b)("p",null,"This thread intends to compile every Target-related decision."),Object(r.b)("p",null,"To test everything and get results, I used some simple scrips to test which parameters are seen in each event context. The KV and Lua Scripts are found in the second post, which also contains all the debug data."),Object(r.b)("p",null,"After running many tests with different ability behaviors, here's what I got:"),Object(r.b)("h2",{id:"ability-event-contexts"},"ABILITY EVENT CONTEXTS"),Object(r.b)("h3",{id:"behavior-dota_ability_behavior_no_target"},"Behavior: DOTA_ABILITY_BEHAVIOR_NO_TARGET"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnSpellStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT, ATTACKER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAbilityPhaseStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT, ATTACKER")))),Object(r.b)("h3",{id:"dota_ability_behavior_unit_target"},"DOTA_ABILITY_BEHAVIOR_UNIT_TARGET"),Object(r.b)("p",null,"This behavior adds TARGET as a possible value for the Target key:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnSpellStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, UNIT, ATTACKER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAbilityPhaseStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, UNIT, ATTACKER")))),Object(r.b)("h3",{id:"abilitychanneltime--0"},"AbilityChannelTime > 0"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DOTA_ABILITY_BEHAVIOR_CHANNELLED")," only purpose is to change the ability Tooltip to ",Object(r.b)("em",{parentName:"p"},'"Channeled"'),". In fact, the ",Object(r.b)("inlineCode",{parentName:"p"},"BEHAVIOR_CHANNELED")," isn't even needed, ",Object(r.b)("inlineCode",{parentName:"p"},'"AbilityChannelTime"')," is all that matters for the actual ability behavior."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnChannelFinish"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, UNIT, ATTACKER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnChannelInterrupted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, UNIT, ATTACKER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnChannelSucceeded"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, UNIT, ATTACKER")))),Object(r.b)("h3",{id:"with-linear-and-tracking-projectile-actions"},"With Linear and Tracking Projectile Actions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnProjectileFinish"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, PROJECTILE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnProjectileHitUnit"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, PROJECTILE")))),Object(r.b)("h3",{id:"dota_ability_behavior_toggle"},"DOTA_ABILITY_BEHAVIOR_TOGGLE"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnToggleOff"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnToggleOn"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER")))),Object(r.b)("h3",{id:"item-pickup-and-drop"},"Item pickup and drop"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnEquip"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnUnequip"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER")))),Object(r.b)("h3",{id:"any-behavior"},"Any Behavior"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnOwnerDied"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnOwnerSpawned"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnUpgrade"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER")))),Object(r.b)("h2",{id:"modifer-event-contexts"},"MODIFER EVENT CONTEXTS"),Object(r.b)("h3",{id:"caster-target"},"Caster-Target"),Object(r.b)("p",null,"Target always refers to the owner of the modifier."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnCreated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnDestroy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnIntervalThink"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnProjectileDodge"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET")))),Object(r.b)("h3",{id:"damage"},"Damage"),Object(r.b)("p",null,"In these events we can send an extra parameter, referenced as %attack_damage"),Object(r.b)("p",null,"Note that this is not a value taken from an AbilitySpecial, instead it is generated by the system to be used in very particular events."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"%attack_damage value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnTakeDamage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"post reduction")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnDealDamage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"post reduction")))),Object(r.b)("h3",{id:"attacks"},"Attacks"),Object(r.b)("p",null,"In some of the attack events we can also use the %attack_damage"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"%attack_damage value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAttack"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAttackStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAttackAllied"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAttacked"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"post reduction")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAttackLanded"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"before")," reduction, the real attack value")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAttackFailed"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, ATTACKER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"before")," reduction, the real attack value")))),Object(r.b)("h3",{id:"killing"},"Killing"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnDeath"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT, ATTACKER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnKill"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT, ATTACKER")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnHeroKilled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, TARGET, ATTACKER")))),Object(r.b)("h3",{id:"caster-unit"},"Caster-Unit"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Target"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Extra"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAbilityEndChannel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TARGET if the ability isn't NO_TARGET")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnAbilityExecuted"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TARGET if the ability isn't NO_TARGET")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnOrder"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TARGET if the Order is an ability with target")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnRespawn"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'needs "Attributes" "PERMANENT" on its modifier')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnManaGained"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnSpentMana"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnStateChanged"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnTeleporting"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnTeleported"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnUnitMoved"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnHealReceived"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OnHealthGained"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CASTER, UNIT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h3",{id:"never-triggered"},"Never Triggered"),Object(r.b)("p",null,"OnAbilityStart - Broken?"),Object(r.b)("br",null),Object(r.b)("p",null,"Please report if you find any inconsistencies."),Object(r.b)("br",null),Object(r.b)("p",null,"On the next post you'll find the random rambling analyzed to get the results. "),Object(r.b)("p",null,"Then we'll move to Multiple Targets, acting over different entities, Flags, etc."))}O.isMDXComponent=!0},181:function(t,e,a){"use strict";var n=a(0),r=a.n(n),b=a(185),l=a(183),c=a(90),i=a.n(c);const O=37,o=39;e.a=function(t){const{block:e,children:a,defaultValue:c,values:d,groupId:j}=t,{tabGroupChoices:p,setTabGroupChoices:u}=Object(b.a)(),[m,s]=Object(n.useState)(c);if(null!=j){const t=p[j];null!=t&&t!==m&&d.some(e=>e.value===t)&&s(t)}const g=t=>{s(t),null!=j&&u(j,t)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":e})},d.map(({value:t,label:e})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":m===t}),key:t,ref:t=>N.push(t),onKeyDown:t=>((t,e,a)=>{switch(a.keyCode){case o:((t,e)=>{const a=t.indexOf(e)+1;t[a]?t[a].focus():t[0].focus()})(t,e);break;case O:((t,e)=>{const a=t.indexOf(e)-1;t[a]?t[a].focus():t[t.length-1].focus()})(t,e)}})(N,t.target,t),onFocus:()=>g(t),onClick:()=>g(t)},e))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(t=>t.props.value===m)[0]))}},182:function(t,e,a){"use strict";var n=a(0),r=a.n(n);e.a=function(t){return r.a.createElement("div",null,t.children)}},183:function(t,e,a){"use strict";function n(t){var e,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=n(t[e]))&&(r&&(r+=" "),r+=a);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}e.a=function(){for(var t,e,a=0,r="";a<arguments.length;)(t=arguments[a++])&&(e=n(t))&&(r&&(r+=" "),r+=e);return r}},184:function(t,e,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});e.a=r},185:function(t,e,a){"use strict";var n=a(0),r=a(184);e.a=function(){return Object(n.useContext)(r.a)}},186:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var O=r.a.createContext({}),o=function(t){var e=r.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=o(t.components);return r.a.createElement(O.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},p=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),d=o(a),p=n,u=d["".concat(l,".").concat(p)]||d[p]||j[p]||b;return a?r.a.createElement(u,c(c({ref:e},O),{},{components:a})):r.a.createElement(u,c({ref:e},O))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var O=2;O<b;O++)l[O]=a[O];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},187:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(0),r=a.n(n);function b({id:t,aspectRatio:e=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/e*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+t,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},188:function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(0),r=a.n(n);function b({id:t,playlistId:e,aspectRatio:a=16/9}){const n=void 0!==e?"https://www.youtube.com/embed/videoseries?list="+e:"https://www.youtube.com/embed/"+t;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},r.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var n=a(3),r=a(182),b=a(181),l=a(0),c=a.n(l);const i={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function O({children:t,group:e}){Object(n.a)("string"==typeof e||null===e);const a=c.a.Children.toArray(t).map(t=>{const e=t.props.children.props.className.replace(/language-/,"");return Object(n.a)(e in i),{language:e,element:t}});return c.a.createElement(b.a,{groupId:null!==e?"multi-code-block-"+e:void 0,defaultValue:a[0].language,values:a.map(({language:t})=>({value:t,label:i[t]}))},a.map(({language:t,element:e})=>c.a.createElement(r.a,{key:t,value:t},e)))}}}]);