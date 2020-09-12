(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var i=a(2),n=(a(0),a(186)),r=(a(181),a(182),a(187));a(188),a(189);const l={title:"MDL to VMDL Conversion",author:"Noya",steamId:"76561198046984233",date:"28.05.2015"},o={id:"assets/models/mdl-to-vmdl-conversion",isDocsHomePage:!1,title:"MDL to VMDL Conversion",description:"This guide will go through the process of making a .vmdl file (Source 2 Model) from a .mdl file and other model-related files from Source 1. The Wyvern Hatchling courier will be used as example, but the same process applies to heroes, buildings and any Valve Dota model.",source:"@site/_articles/assets/models/mdl-to-vmdl-conversion.md",permalink:"/assets/models/mdl-to-vmdl-conversion",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/mdl-to-vmdl-conversion.md",sidebar:"tutorials",previous:{title:"Importing custom models",permalink:"/assets/models/importing-custom-models"},next:{title:"Adding Hitbox to Models without a Bone",permalink:"/assets/models/adding-hitbox-to-models-without-a-bone"}},s=[{value:"Required Tools",id:"required-tools",children:[]},{value:"1. Acquire the <strong>model</strong> and <strong>material</strong> files from the main game VPK (<em>pak01_dir.vpk</em>) using GCFScape.",id:"1-acquire-the-model-and-material-files-from-the-main-game-vpk-pak01_dirvpk-using-gcfscape",children:[]},{value:"2. Use Crowbar to decompile the model files into meshes (.smd)",id:"2-use-crowbar-to-decompile-the-model-files-into-meshes-smd",children:[]},{value:"3. Use VTFEdit to generate color TGAs out of the VTF files acquired in step 1.",id:"3-use-vtfedit-to-generate-color-tgas-out-of-the-vtf-files-acquired-in-step-1",children:[]},{value:"4. Move the generated files to your addons <strong>/content/</strong> folder.",id:"4-move-the-generated-files-to-your-addons-content-folder",children:[]},{value:"5. Generate a .vmat file from the TGA files.",id:"5-generate-a-vmat-file-from-the-tga-files",children:[]},{value:"6. Make a New VMDL from the Mesh file (.smd)",id:"6-make-a-new-vmdl-from-the-mesh-file-smd",children:[]},{value:"7. Add a Material Remap for the missing textures, using the .vmat file from step 5.",id:"7-add-a-material-remap-for-the-missing-textures-using-the-vmat-file-from-step-5",children:[]},{value:"8. Add the Animations on the _anims folder and make Activities for them.",id:"8-add-the-animations-on-the-_anims-folder-and-make-activities-for-them",children:[]},{value:"9. Add the Hitboxes",id:"9-add-the-hitboxes",children:[]}],c={rightToc:s};function m({components:e,...t}){return Object(n.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This guide will go through the process of making a ",Object(n.b)("strong",{parentName:"p"},".vmdl file")," (Source 2 Model) from a ",Object(n.b)("strong",{parentName:"p"},".mdl file")," and other model-related files from Source 1. The Wyvern Hatchling courier will be used as example, but the same process applies to heroes, buildings and any Valve Dota model."),Object(n.b)(r.a,{id:"JauntyQuickArcticwolf",mdxType:"Gfycat"}),Object(n.b)("h3",{id:"required-tools"},"Required Tools"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.valvesoftware.com/wiki/GCFScape"}),"GCFScape")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://steamcommunity.com/groups/CrowbarTool/discussions/0/617328415069203029/"}),"Crowbar")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.valvesoftware.com/wiki/VTFEdit"}),"VTFEdit")),Object(n.b)("li",{parentName:"ul"},"Workshop Tools (Material and Model Editor)")),Object(n.b)("h3",{id:"1-acquire-the-model-and-material-files-from-the-main-game-vpk-pak01_dirvpk-using-gcfscape"},"1. Acquire the ",Object(n.b)("strong",{parentName:"h3"},"model")," and ",Object(n.b)("strong",{parentName:"h3"},"material")," files from the main game VPK (",Object(n.b)("em",{parentName:"h3"},"pak01_dir.vpk"),") using GCFScape."),Object(n.b)("p",null,"The following file types are required:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},".mdl"),Object(n.b)("li",{parentName:"ul"},".vvd"),Object(n.b)("li",{parentName:"ul"},".dx90.vtx"),Object(n.b)("li",{parentName:"ul"},".vtf")),Object(n.b)("p",null,"Model files will be in a subfolder of the ",Object(n.b)("em",{parentName:"p"},"/models/")," folder:"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3ayn/10871a9310.png",alt:"img"}))),Object(n.b)("p",null,"Right-click extract into a folder of your choice."),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3aCO/4887dee9a8.png",alt:"img"}))),Object(n.b)("p",null,"Color Material files are located in the  the ",Object(n.b)("em",{parentName:"p"},"materials/models/")," folder. In this example this courier has 3 associated color files, one for each skin, so we'll get "),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3aCw/5df098fb34.png",alt:"img"}))),Object(n.b)("p",null,"Finally we should have these:"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3aF1/ac40c1028e.png",alt:"img"}))),Object(n.b)("h3",{id:"2-use-crowbar-to-decompile-the-model-files-into-meshes-smd"},"2. Use Crowbar to decompile the model files into meshes (.smd)"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3aHy/2c37903006.png",alt:"img"}))),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3aIq/aa87bc8d72.png",alt:"img"}))),Object(n.b)("p",null,"Result on the output folder:"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3byq/f3640f6f4b.png",alt:"img"}))),Object(n.b)("h3",{id:"3-use-vtfedit-to-generate-color-tgas-out-of-the-vtf-files-acquired-in-step-1"},"3. Use VTFEdit to generate color TGAs out of the VTF files acquired in step 1."),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3aJa/775179ec38.jpg",alt:"img"}))),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3aKg/33590b10c1.jpg",alt:"img"}))),Object(n.b)("p",null,"Do File-> Export."),Object(n.b)("p",null,"Result (",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.irfanview.com/"}),"IrfanView")," is an oldschool image viewer that can open TGAs just fine):"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3bEp/1176075e01.png",alt:"img"}))),Object(n.b)("h3",{id:"4-move-the-generated-files-to-your-addons-content-folder"},"4. Move the generated files to your addons ",Object(n.b)("strong",{parentName:"h3"},"/content/")," folder."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Move the decompiled files generated in step 2 to ",Object(n.b)("strong",{parentName:"li"},"/content/models/"))),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3cT8/8962d8e943.png",alt:"img"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Move the TGA files generated in step 3 to ",Object(n.b)("strong",{parentName:"li"},"/content/materials/"))),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3cQg/76e8c16b46.png",alt:"img"}))),Object(n.b)("p",null,"Create new folders on each or just drop the files over the respective directories. Make sure to use the content folder (not the /game/). ",Object(n.b)("br",null),"The location of the reference mesh in /content/models/ will determine the location where the .vmdl file will be saved."),Object(n.b)("h3",{id:"5-generate-a-vmat-file-from-the-tga-files"},"5. Generate a .vmat file from the TGA files."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the Material Editor"),Object(n.b)("li",{parentName:"ul"},"File -> New Material"),Object(n.b)("li",{parentName:"ul"},"Without doing anything yet, ",Object(n.b)("strong",{parentName:"li"},"Save")," the empty material with the name of the TGA you want to make a .vmat for. ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://puu.sh/i3d02/b647383364.png",alt:"img"}))),Object(n.b)("li",{parentName:"ul"},"Browse and find the TGA to use ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://puu.sh/i3d8I/b8d0e0b25d.png",alt:"img"}))),Object(n.b)("li",{parentName:"ul"},"The file should be visible by default with the _color. extension ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://i.imgur.com/Bbu4VtP.jpg",alt:"img"}))),Object(n.b)("li",{parentName:"ul"},"Save the final material. ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://i.imgur.com/Jbw6kyq.jpg",alt:"img"})))),Object(n.b)("h3",{id:"6-make-a-new-vmdl-from-the-mesh-file-smd"},"6. Make a New VMDL from the Mesh file (.smd)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the Model Editor"),Object(n.b)("li",{parentName:"ul"},"New VMDL from Mesh File (Ctrl+M) ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://puu.sh/i3gPC/eb6efe93f2.jpg",alt:"img"}))),Object(n.b)("li",{parentName:"ul"},"Select the reference .smd file generated in step 2. ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://i.imgur.com/Q7VH7Nq.png",alt:"img"}))),Object(n.b)("li",{parentName:"ul"},"If everything went well you should get a red error mesh: ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://i.imgur.com/MQmf1IM.jpg",alt:"img"})))),Object(n.b)("h3",{id:"7-add-a-material-remap-for-the-missing-textures-using-the-vmat-file-from-step-5"},"7. Add a Material Remap for the missing textures, using the .vmat file from step 5."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"On the menus, Model -> Add Material Remap ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://i.imgur.com/NgZbK7n.png",alt:"img"}))),Object(n.b)("li",{parentName:"ul"},"Select the Material Remap List and collapse the properties on the Property Editor ",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"https://i.imgur.com/oRNgV71.png",alt:"img"}))),Object(n.b)("li",{parentName:"ul"},"Search Material, select on from the drop down list. These are missing materials which have to be remaped to the the .vmat made earlier."),Object(n.b)("li",{parentName:"ul"},"Ctrl+S to save the model, now the model comes together with the texture to take shape:")),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/o22c9Iy.jpg",alt:"img"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"IF the model shows as ",Object(n.b)("strong",{parentName:"li"},"Error"),", something went wrong. Make sure to delete the auto-compiled models and materials of the same name on the /game/ folders, which are now corrupted. Make sure everything is using the proper names and directories, sometimes the Model/Material editor feel like not working and doing Volvo things.")),Object(n.b)("h3",{id:"8-add-the-animations-on-the-_anims-folder-and-make-activities-for-them"},"8. Add the Animations on the _anims folder and make Activities for them."),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/5BvFhPg.png",alt:"img"}))),Object(n.b)("p",null,"Select all of them."),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://i.imgur.com/GPPJld3.png",alt:"img"}))),Object(n.b)("p",null,"The Animations will now preview when you click over them, the model will move, but for game to use the animations it needs an Activity (the ACT_DOTA_name strings)."),Object(n.b)("p",null,"On the Sequences window (Do Tools-> View Sequences if it doesn't show up), make sure ",Object(n.b)("strong",{parentName:"p"},"Activity")," is selected. It will show an empty list between brackets []"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3xPr/4ac46797fe.png",alt:"img"}))),Object(n.b)("p",null,"Now, select each animation you want to have a activity for."),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3yr7/447456fe3a.png",alt:"img"}))),Object(n.b)("p",null,"On the Property Editor, there is a an Activities element which will have 0 items by default. Click on the ",Object(n.b)("strong",{parentName:"p"},"+")," to add one."),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3yyc/2bde52de31.png",alt:"img"}))),Object(n.b)("p",null,"Add a Name to it, try to use the ACT_DOTA_name that better adjusts to the activity description"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3yxi/2cbd4d5b16.png",alt:"img"}))),Object(n.b)("p",null,"Finally, we have usable animations:"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3yyc/2bde52de31.png",alt:"img"}))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," This is also useful to be able to have access to some of the ACT_DOTA_ACTIVITY+",Object(n.b)("strong",{parentName:"p"},"string")," activities that some of the Taunt and Alternative animations use which currently can't be used for abilities and other purposes (as it just ignores the ",Object(n.b)("strong",{parentName:"p"},"+string")," part). ",Object(n.b)("br",null),'Knowing this, it\'s possible to assign some unused activity string like "ACT_DOTA_MINI_TAUNT" and force its usage trough the ',Object(n.b)("inlineCode",{parentName:"p"},"OverrideAnimation")," KV."),Object(n.b)("h3",{id:"9-add-the-hitboxes"},"9. Add the Hitboxes"),Object(n.b)("p",null,"Go to Model->Hitboxes->Auto Populate and accept the list of all bones."),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3yki/3624cba10a.png",alt:"img"}))),Object(n.b)("p",null,"If you enable Display-> Hitboxes and Hitbox Names you should see something like these:"),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"https://puu.sh/i3ymK/0c24d9b35c.png",alt:"img"}))),Object(n.b)("hr",null),Object(n.b)("p",null,"Final result is the finished model with all its animations (hopefully):"),Object(n.b)(r.a,{id:"FirmEthicalHylaeosaurus",mdxType:"Gfycat"}),Object(n.b)("hr",null))}m.isMDXComponent=!0},181:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(185),l=a(183),o=a(90),s=a.n(o);const c=37,m=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:b,groupId:p}=e,{tabGroupChoices:u,setTabGroupChoices:d}=Object(r.a)(),[h,g]=Object(i.useState)(o);if(null!=p){const e=u[p];null!=e&&e!==h&&b.some(t=>t.value===e)&&g(e)}const f=e=>{g(e),null!=p&&d(p,e)},O=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(a).filter(e=>e.props.value===h)[0]))}},182:function(e,t,a){"use strict";var i=a(0),n=a.n(i);t.a=function(e){return n.a.createElement("div",null,e.children)}},183:function(e,t,a){"use strict";function i(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n}},184:function(e,t,a){"use strict";var i=a(0);const n=Object(i.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=n},185:function(e,t,a){"use strict";var i=a(0),n=a(184);t.a=function(){return Object(i.useContext)(n.a)}},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=m(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=m(a),u=i,d=b["".concat(l,".").concat(u)]||b[u]||p[u]||r;return a?n.a.createElement(d,o(o({ref:t},c),{},{components:a})):n.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a(0),n=a.n(i);function r({id:e,aspectRatio:t=4/3}){return n.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},n.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a(0),n=a.n(i);function r({id:e,playlistId:t,aspectRatio:a=16/9}){const i=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return n.a.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},n.a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var i=a(3),n=a(182),r=a(181),l=a(0),o=a.n(l);const s={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t}){Object(i.a)("string"==typeof t||null===t);const a=o.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(i.a)(t in s),{language:t,element:e}});return o.a.createElement(r.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:a[0].language,values:a.map(({language:e})=>({value:e,label:s[e]}))},a.map(({language:e,element:t})=>o.a.createElement(n.a,{key:e,value:e},t)))}}}]);