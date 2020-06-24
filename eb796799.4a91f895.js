(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(177));n(178),n(179);const i={title:"Introduction to Panorama UI with TypeScript",author:"Perry",steamId:"76561198046986723",date:"26.07.2017"},o={id:"panorama/introduction-to-panorama-ui-with-typescript",isDocsHomePage:!1,title:"Introduction to Panorama UI with TypeScript",description:"What is TypeScript and why should I use it",source:"@site/_articles/panorama/introduction-to-panorama-ui-with-typescript.md",permalink:"/panorama/introduction-to-panorama-ui-with-typescript",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/introduction-to-panorama-ui-with-typescript.md",sidebar:"tutorials",previous:{title:"Inclusive Panorama UI",permalink:"/panorama/inclusive-panorama-ui"},next:{title:"Keybindings",permalink:"/panorama/keybindings"}},l=[{value:"What is TypeScript and why should I use it",id:"what-is-typescript-and-why-should-i-use-it",children:[]},{value:"How to install TypeScript",id:"how-to-install-typescript",children:[]},{value:"How to set up TypeScript for your dota addon",id:"how-to-set-up-typescript-for-your-dota-addon",children:[]},{value:"Your first TypeScript UI",id:"your-first-typescript-ui",children:[]},{value:"Writing TypeScript for your UI",id:"writing-typescript-for-your-ui",children:[]},{value:"Advanced TypeScripting",id:"advanced-typescripting",children:[]},{value:"Summary",id:"summary",children:[]}],p={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-typescript-and-why-should-i-use-it"},"What is TypeScript and why should I use it"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is a language created by and for people that were unhappy with Javascript and all of its quirks and flaws. TypeScript is a language with its own syntax (although similar to Javascript) that compiles to Javascript in a way that avoids a lot of Javascript's issues."),Object(r.b)("p",null,"The name TypeScript comes from the fact that the language is basically Javascript with type checking, but on top of that it supports all of the newest Javascript language construct that are not supported by Panorama."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Pros of using TypeScript:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type checking"),Object(r.b)("li",{parentName:"ul"},"Code completion based on type (also for API!)"),Object(r.b)("li",{parentName:"ul"},"Prevents scoping issues"),Object(r.b)("li",{parentName:"ul"},"Proper OOP constructs (such as classes, interfaces, inheritance...)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cons of using TypeScript:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Requires some setup"),Object(r.b)("li",{parentName:"ul"},"Remember to compile"),Object(r.b)("li",{parentName:"ul"},"Requires good definitions for Panorama")),Object(r.b)("h2",{id:"how-to-install-typescript"},"How to install TypeScript"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")," which is used to compile TypeScript."),Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("inlineCode",{parentName:"li"},"package.json")," file in the root directory of your project with at least ",Object(r.b)("inlineCode",{parentName:"li"},"{}")," content."),Object(r.b)("li",{parentName:"ol"},"Install required dependencies by opening a command prompt and executing ",Object(r.b)("inlineCode",{parentName:"li"},"npm install -D typescript panorama-types"),".")),Object(r.b)("p",null,"That's it, after these three steps you are ready to start using TypeScript."),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," supports TypeScript out of the box. For other editors you might have to install a plugin to get language features (for example ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript-Sublime-Plugin#installation"}),"Sublime TypeScript plugin"),", available through Sublime Text package manager)."),Object(r.b)("h2",{id:"how-to-set-up-typescript-for-your-dota-addon"},"How to set up TypeScript for your dota addon"),Object(r.b)("p",null,"TypeScript requires a ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," used to configure it for your project. Put it in your addon's ",Object(r.b)("inlineCode",{parentName:"p"},"content/panorama")," directory. You can adjust all settings yourself, but I usually have this set to the most strict settings. My preferred configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "compilerOptions": {\n        "target": "es2017",\n        "lib": ["es2017"],\n        "types": ["panorama-types"],\n        "strict": true\n    }\n}\n')),Object(r.b)("p",null,"Your addon's content directory structure should be something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"content/dota_addons/[addon]/\n    ...\n    panorama/\n        layout/\n        scripts/\n        styles/\n        tsconfig.json\n")),Object(r.b)("h2",{id:"your-first-typescript-ui"},"Your first TypeScript UI"),Object(r.b)("p",null,"To illustrate why I like using TypeScript for modular UI I will walk through a small example. We will be making some hero portraits with player name and a healh bar: ",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"http://web.archive.org/web/20190201023254im_/http://i.imgur.com/ZrqqlFo.png",alt:"What we are making",title:"Example UI"}))),Object(r.b)("p",null,"Since this tutorial is about TypeScript I will just quickly give the xml and css, this is standard stuff:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<root>\n    <styles>\n        <include src="file://{resources}/styles/custom_game/example.css" />\n    </styles>\n\n    <scripts>\n        <include src="file://{resources}/scripts/custom_game/PlayerPortrait.js" />\n        <include src="file://{resources}/scripts/custom_game/ExampleUI.js" />\n    </scripts>\n\n    <snippets>\n        <snippet name="PlayerPortrait">\n            <Panel class="PlayerPortrait" hittest="false">\n                <Image id="HeroImage" hittest="false" />\n                <Label id="PlayerName" />\n                <Panel class="HealthContainer">\n                    <Panel id="HealthBar" />\n                </Panel>\n            </Panel>\n        </snippet>\n    </snippets>\n\n    <Panel hittest="false" style="width: 100%; height: 100%;">\n        <Panel id="HeroPortraits" />\n    </Panel>\n</root>\n')),Object(r.b)("p",null,"CSS:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"#HeroPortraits {\n    width: 300px;\n    height: 650px;\n    margin-top: 150px;\n    flow-children: down;\n}\n.PlayerPortrait {\n    background-color: blue;\n    height: 80px;\n    width: 300px;\n    margin-bottom: 10px;\n}\n#HeroImage {\n    width: 80px;\n    height: 80px;\n    background-color: black;\n}\n#PlayerName {\n    color: white;\n    font-size: 25px;\n    margin-top: 10px;\n    margin-left: 90px;\n}\n.HealthContainer {\n    width: 200px;\n    height: 20px;\n    x: 90px;\n    y: 50px;\n    background-color: black;\n}\n#HealthBar {\n    height: 20px;\n    width: 50%;\n\n    background-color: green;\n}\n")),Object(r.b)("p",null,"As you can see the XML of this part of the UI has a snippet containing the XML of a player portrait containing a hero image, a label for the player name and a health container and health bar inside that container. The CSS applies some simple layout to this."),Object(r.b)("h2",{id:"writing-typescript-for-your-ui"},"Writing TypeScript for your UI"),Object(r.b)("p",null,"First we want to define a class of our UI and to link that to the XML. We do this by taking an existing panel and wrapping it into a typescript class, as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class ExampleUI {\n    // Instance variables\n    panel: Panel;\n\n    // ExampleUI constructor\n    constructor(panel: Panel) {\n        this.panel = panel;\n        $.Msg(panel); // Print the panel\n    }\n}\n\nlet ui = new ExampleUI($.GetContextPanel());\n")),Object(r.b)("p",null,"Nothing too exciting, we basically create a new ExampleUI object in ExampleUI.ts from the context panel, so this entire XML file is now an instance of the ExampleUI class. If you build this by pressing ",Object(r.b)("strong",{parentName:"p"},"ctrl+b")," in Sublime, you will see it creates a new compiled ExampleUI.js file with the same name. This compiled file is loaded by Panorama. If you load your game mode at this point you should see a print in console printing your UI panel."),Object(r.b)("p",null,"Now let's create a class for a hero portrait. In this case we do not wrap an existing element, but instead create a panel in the constructor. To do this we do still need a parent panel, so we require that as parameter for the constructor, as well as the hero name and player name. After creating a panel and loading the snippet into it we look up some of its child elements and store them for later."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'class PlayerPortrait {\n    // Instance variables\n    panel: Panel;\n    heroImage: ImagePanel;\n    playerLabel: LabelPanel;\n    hpBar: Panel;\n\n    constructor(parent: Panel, heroName: string, playerName: string) {\n        // Create new panel\n        const panel = $.CreatePanel("Panel", parent, "");\n        this.panel = panel;\n\n        // Load snippet into panel\n        panel.BLoadLayoutSnippet("PlayerPortrait");\n\n        // Find components\n        this.heroImage = panel.FindChildTraverse("HeroImage") as ImagePanel;\n        this.playerLabel = panel.FindChildTraverse("PlayerName") as LabelPanel;\n        this.hpBar = panel.FindChildTraverse("HealthBar")!;\n\n        // Set player name label\n        this.playerLabel.text = playerName;\n\n        // Set hero image\n        this.heroImage.SetImage("s2r://panorama/images/heroes/" + heroName + "_png.vtex");\n\n        // Initialise health at 100%\n        this.SetHealthPercent(100);\n    }\n\n    // Set the health bar to a certain percentage (0-100)\n    SetHealthPercent(percentage: number) {\n        this.hpBar.style.width = Math.floor(percentage) + "%";\n    }\n}\n')),Object(r.b)("p",null,"This is saved in a second file ",Object(r.b)("strong",{parentName:"p"},"PlayerPortrait.ts")," which compiles to PlayerPortrait.js. Therefore this file is also included in the scripts section of the xml (see above)."),Object(r.b)("p",null,"The constructor simply creates a new panel and loads a snippet into it, and then sets some default values. The class also defines a SetHealthPercent function that manipulates the health bar."),Object(r.b)("p",null,"Now we go back to the ExampleUI class and make a couple PlayerPortrait instances to the PlayerPortraits element:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'class ExampleUI {\n    // Instance variables\n    panel: Panel;\n\n    // ExampleUI constructor\n    constructor(panel: Panel) {\n        this.panel = panel;\n\n        // Find container element\n        const container = this.panel.FindChild("HeroPortraits")!;\n\n        // Create portrait for player 0, 1 and 2\n        const portrait0 = new PlayerPortrait(container, "npc_dota_hero_juggernaut", "Player0");\n        const portrait1 = new PlayerPortrait(container, "npc_dota_hero_omniknight", "Player1");\n        const portrait2 = new PlayerPortrait(container, "npc_dota_hero_invoker", "Player2");\n\n        // Set HP of player 1 and 2 to a different value\n        portrait0.SetHealthPercent(80);\n        portrait2.SetHealthPercent(20);\n    }\n}\n\nlet ui = new ExampleUI($.GetContextPanel());\n')),Object(r.b)("p",null,"Your UI should now look like the screenshot we set out to make at the start."),Object(r.b)("h2",{id:"advanced-typescripting"},"Advanced TypeScripting"),Object(r.b)("p",null,"Now this UI is not very useful for an actual game, so let's do something a bit more complicated. We want to save the player portraits and then whenever we receive an event that a player's HP has changed we want to retrieve the proper PlayerPortrait instance."),Object(r.b)("p",null,"We do this by adding another instance variable to the ExampleUI, a map that maps playerIDs to the correct PlayerPortrait instance. When creating PlayerPortrait instances we put them in the map. When we get an hp_changed event we update the proper panel. The type of this map can be expressed in TypeScript as ",Object(r.b)("inlineCode",{parentName:"p"},"{[playerID: number]: PlayerPortrait}"),"."),Object(r.b)("p",null,"One of the advantages of TypeScript is that you can explicitly define which events you receive and what their contents are. We define the HPChanged event as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface HPChangedEvent {\n    playerID: PlayerID,\n    hpPercentage: number\n}\n")),Object(r.b)("p",null,"Putting these together our ExampleUI.ts file now looks as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'interface HPChangedEvent {\n    playerID: PlayerID;\n    hpPercentage: number;\n}\n\nclass ExampleUI {\n    // Instance variables\n    panel: Panel;\n    playerPanels: Partial<Record<PlayerID, PlayerPortrait>> = {}; // A map with number keys and PlayerPortrait values\n\n    // ExampleUI constructor\n    constructor(panel: Panel) {\n        this.panel = panel;\n\n        const container = this.panel.FindChild("HeroPortraits")!;\n        container.RemoveAndDeleteChildren();\n\n        // Create portrait for player 0, 1 and 2\n        this.playerPanels[0] = new PlayerPortrait(container, "npc_dota_hero_juggernaut", "Player0");\n        this.playerPanels[1] = new PlayerPortrait(container, "npc_dota_hero_omniknight", "Player1");\n        this.playerPanels[2] = new PlayerPortrait(container, "npc_dota_hero_invoker", "Player2");\n\n        // Listen for health changed event, when it fires, handle it with this.OnHPChanged\n        GameEvents.Subscribe<HPChangedEvent>("hp_changed", (event) => this.OnHPChanged(event));\n    }\n\n    // Event handler for HP Changed event\n    OnHPChanged(event: HPChangedEvent) {\n        // Get portrait for this player\n        const playerPortrait = this.playerPanels[event.playerID];\n\n        // Set HP on the player panel\n        playerPortrait.SetHealthPercent(event.hpPercentage);\n    }\n}\n\nlet ui = new ExampleUI($.GetContextPanel());\n')),Object(r.b)("p",null,"We simply bound a handler for the ",Object(r.b)("inlineCode",{parentName:"p"},"hp_changed")," event in the constructor of our ExampleUI, and whenever that happens OnHPChanged is called, which looks up the player portrait in the map and calls SetHealthPercent on the portrait."),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"To conclude, I hope to have convinced you TypeScript helps to write readable, modular UI scripts in Panorama. TypeScript helps you by finding typing errors before you compile, and even prevents errors by taking scoping into account. On top of that the code completion for the panorama API is very useful. The more I use TypeScript to write Panorama, the more I am impressed by how useful it is. Hopefully you give it a try and discover for yourself."))}s.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,b=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a);function i({id:e,aspectRatio:t=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);