(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[443],{pCvI:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var a=n("LdK3"),l=n("q1tI"),r=n("ESB5"),c=n("GlAS"),i=n("X6oG"),s=n("dVvj"),m=n("kDog"),o=n("f8wK"),p=n("TOw/"),d=n("BSJ3");const E=n.p+"bfc3f4fd021769ed190248f6cd72a2dc.svg";var u=n("55Ip"),y=n("9R94"),g=n("x3Ba"),f=n("mhT9");function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const b=({types:e})=>l.createElement(l.Fragment,null,(0,f.iD)(e.map(((e,t)=>l.createElement(x,{key:t,type:e})))," | ")),x=({type:e})=>{if("string"==typeof e)return l.createElement(k,{name:e});switch(e.kind){case"array":return l.createElement(C,{type:e});case"function":return l.createElement(w,{type:e});case"literal":return l.createElement(v,{type:e});case"table":return l.createElement(N,{type:e});default:(0,f.vE)(e)}},_=(0,o.ZP)(u.OL).withConfig({displayName:"types__TypeReferenceLink"})(["&.active{text-decoration:none;}"]),k=({name:e})=>{const[t,n,r]=(0,l.useMemo)((()=>{if("nil"===e)return["nil"];const t=(0,a.findTypeByName)(e);return(0,y.Z)(void 0!==t,"Invalid type reference: "+e),"primitive"===t.kind||"nominal"===t.kind?["literal"]:["interface","class"===t.kind||"enum"===t.kind?e:"constant"===t.kind?"constants":"function"===t.kind?"functions":void 0,"constant"===t.kind||"function"===t.kind?e:void 0]}),[e]),c=r?"#"+r:"",i={textDecorationColor:(0,g.E)(t)};return n?l.createElement(_,{to:`/vscripts/${n}${c}`,style:i},l.createElement(g.P,{kind:t},e)):l.createElement("span",{style:i},l.createElement(g.P,{kind:t},e))},v=({type:{value:e}})=>l.createElement("span",null,l.createElement(g.P,{kind:"literal"},e)),C=({type:{types:e}})=>l.createElement("span",null,"[",l.createElement(b,{types:e}),"]"),N=({type:{key:e,value:t}})=>l.createElement("span",null,"{"," [",l.createElement(b,{types:e}),"]: ",l.createElement(b,{types:t})," ","}"),w=({type:{args:e,returns:t}})=>l.createElement("span",null,l.createElement(P,{args:e}),l.createElement(F,null),l.createElement(b,{types:t}));function P({args:e}){return l.createElement(l.Fragment,null,"(",(0,f.iD)(e.map((e=>l.createElement(Z,h({key:e.name},e)))),", "),")")}const Z=({name:e,types:t})=>l.createElement("span",null,l.createElement(g.P,{kind:"parameter"},e),": ",l.createElement(b,{types:t})),D=o.ZP.span.withConfig({displayName:"types__ArrowIconWrapper"})(["word-spacing:-1px;"]),F=()=>l.createElement(D,null," ",l.createElement("img",{src:E,height:14,alt:"=>"})," "),z=(0,o.ZP)(d.S9).withConfig({displayName:"Field__FieldWrapper"})(["padding:4px;"]),O=(0,o.ZP)(d.dU).withConfig({displayName:"Field__FieldSignature"})(["font-size:20px;"]),S=({className:e,context:t,element:n})=>{const a=(0,p.H_)({scope:t,hash:n.name});return l.createElement(z,{className:e,id:n.name,isLinked:a},l.createElement(d.c_,null,l.createElement(O,null,l.createElement(p.vI,{kind:"field",size:"big"}),n.name,n.types.includes("nil")&&"?",":"," ",l.createElement(b,{types:n.types.filter((e=>"nil"!==e))})),l.createElement(d.Yq,null,t&&l.createElement(p.RE,{scope:t,hash:n.name}))))},j=o.ZP.div.withConfig({displayName:"ObjectType__ObjectHeader"})(["padding:4px;"]),I=o.ZP.span.withConfig({displayName:"ObjectType__ObjectName"})(["font-size:18px;font-weight:700;"]),T=o.ZP.div.withConfig({displayName:"ObjectType__ObjectDescription"})(["font-size:18px;margin:5px 20px;"]),R=({className:e,declaration:t})=>l.createElement(d.S9,{className:e},l.createElement(j,null,l.createElement(p.vI,{kind:"interface",size:"small"}),l.createElement(I,null,t.name),t.extend&&l.createElement(l.Fragment,null," extends ",t.extend.join(", "))),t.description&&l.createElement(T,null,t.description),t.fields.length>0&&l.createElement(d.aR,null,t.fields.map((e=>l.createElement(S,{key:e.name,element:e}))))),W=(0,o.ZP)(d.S9).withConfig({displayName:"FunctionDeclaration__FunctionWrapper"})(["padding:2px 5px;"]),H=(0,o.ZP)(d.dU).withConfig({displayName:"FunctionDeclaration__FunctionSignature"})(["margin-bottom:3px;"]),U=o.ZP.div.withConfig({displayName:"FunctionDeclaration__ObjectReferences"})(["margin:0 25px;margin-bottom:7px;>:not(:last-child){margin-bottom:7px;box-sizing:border-box;}"]),q=o.ZP.li.withConfig({displayName:"FunctionDeclaration__ParameterDescription"})(["list-style:none;margin-left:8px;line-height:1.7;code{background-color:rgba(0,0,0,0.4);padding:3px;border-radius:4px;border:1px solid black;}"]),L=({className:e,style:t,context:n,declaration:a})=>{const r=(0,l.useMemo)((()=>(0,m.Tf)(a).map((e=>l.createElement(R,{key:e.name,declaration:e})))),[a]),c=(0,l.useMemo)((()=>a.args.filter((e=>e.description)).map((e=>l.createElement(q,{key:e.name},l.createElement("code",null,e.name)," - ",e.description)))),[a]),i=(0,p.H_)({scope:n,hash:a.name});return l.createElement(W,{className:e,style:t,id:a.name,isLinked:i},l.createElement(d.c_,null,l.createElement(H,null,l.createElement(p.vI,{kind:"function",size:"big"}),a.name,a.abstract&&l.createElement("span",{title:"Abstract: this method does not exist on the class, but it can be implemented on subclass"},"?"),l.createElement(P,{args:a.args}),": ",l.createElement(b,{types:a.returns})),l.createElement(d.Yq,null,l.createElement(p.TQ,{available:a.available}),l.createElement(p.zw,{name:a.name}),l.createElement(p.vf,{name:a.name}),n&&l.createElement(p.RE,{scope:n,hash:a.name}))),r.length>0&&l.createElement(U,null,r),l.createElement(d.Wh,{description:(a.description||c.length>0)&&l.createElement(l.Fragment,null,c,a.description)}))},M=(0,o.ZP)(d.c_).withConfig({displayName:"ClassDeclaration__ClassHeader"})(["padding:5px;"]),Y=o.ZP.span.withConfig({displayName:"ClassDeclaration__ClassName"})(["font-size:24px;font-weight:700;"]),A=o.ZP.span.withConfig({displayName:"ClassDeclaration__ClassExtendsWrapper"})(["font-size:16px;"]),B=({extend:e})=>l.createElement(A,null,"extends ",l.createElement(b,{types:[e]})),K=(0,o.ZP)(d.Wh).withConfig({displayName:"ClassDeclaration__ClassDescription"})(["font-size:18px;margin:5px 20px;"]),G=(0,o.ZP)(d.aR).withConfig({displayName:"ClassDeclaration__ClassMembers"})([">:not(:last-child){margin-bottom:10px;}"]),J=({className:e,style:t,declaration:n})=>l.createElement(d.S9,{className:e,style:t},l.createElement(M,null,l.createElement(d.dU,null,l.createElement(p.vI,{kind:"class",size:"big"}),l.createElement(Y,null,n.name)," ",n.extend&&l.createElement(B,{extend:n.extend})),l.createElement(d.Yq,null,l.createElement(p.Kw,{name:n.name}),l.createElement(p.TQ,{available:null!=n.clientName?"both":"server"}),l.createElement(p.RE,{scope:n.name}))),l.createElement(K,{description:n.description}),n.members.length>0&&l.createElement(G,null,n.members.map((e=>"field"===e.kind?l.createElement(S,{key:e.name,element:e,context:n.name}):l.createElement(L,{key:e.name,declaration:e,context:n.name}))))),Q=(0,o.ZP)(d.S9).withConfig({displayName:"Constant__ConstantWrapper"})(["padding:5px;"]),$=(0,o.ZP)(d.dU).withConfig({displayName:"Constant__ConstantSignature"})(["font-size:20px;"]);function V({className:e,style:t,element:n}){const a=(0,p.H_)({scope:"constants",hash:n.name});return l.createElement(Q,{className:e,style:t,id:n.name,isLinked:a},l.createElement(d.c_,null,l.createElement($,null,l.createElement(p.vI,{kind:"constant",size:"big"}),n.name,": ",n.value),l.createElement(d.Yq,null,l.createElement(p.RE,{scope:"constants",hash:n.name}))),l.createElement(d.Wh,{description:n.description}))}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const ee=(0,o.ZP)(d.S9).withConfig({displayName:"Enum__EnumMemberWrapper"})(["padding:2px 5px;"]),te=e=>l.createElement(ee,null,l.createElement(d.c_,null,l.createElement(d.dU,null,e.name," = ",l.createElement(g.P,{kind:"literal"},e.value))),l.createElement(d.Wh,{description:e.description})),ne=(0,o.ZP)(d.c_).withConfig({displayName:"Enum__EnumHeader"})(["padding:5px;"]),ae=(0,o.ZP)(d.aR).withConfig({displayName:"Enum__EnumMembers"})([">:not(:last-child){margin-bottom:2px;}"]),le=({className:e,style:t,element:n})=>l.createElement(d.S9,{className:e,style:t},l.createElement(ne,null,l.createElement(d.dU,null,l.createElement(p.vI,{kind:"enum",size:"big"}),n.name),l.createElement(d.Yq,null,l.createElement(p.Kw,{name:n.name}),l.createElement(p.RE,{scope:n.name}))),l.createElement(d.Wh,{description:n.description}),n.members.length>0&&l.createElement(ae,null,n.members.map((e=>l.createElement(te,X({key:e.name},e))))));function re(e,t){let n;switch(e.kind){case"class":n=l.createElement(J,{declaration:e});break;case"enum":n=l.createElement(le,{element:e});break;case"constant":n=l.createElement(V,{element:e});break;case"function":n=l.createElement(L,{context:"functions",declaration:e})}return l.createElement(i.HC,{style:t,key:e.name},n)}function ce(){const{data:e,isSearching:t}=(0,m.pu)();return l.createElement(i.vs,null,l.createElement(i.IH,{baseUrl:"/vscripts"}),e.length>0?t?l.createElement(s.c,{data:e,render:re}):l.createElement(s.A,{data:e,render:re}):t?l.createElement(i.cv,null,"No results found"):l.createElement(i.cv,null,"Choose a category or use the search bar..."))}const ie=()=>l.createElement(c.H,null,l.createElement(c.f,{icon:"function",text:"Functions",to:"/vscripts/functions"}),l.createElement(c.f,{icon:"constant",text:"Constants",to:"/vscripts/constants"}),a.allData.filter((e=>"class"===e.kind||"enum"===e.kind)).map((({name:e,kind:t})=>l.createElement(c.f,{key:e,icon:t,text:e,to:"/vscripts/"+e}))));function se(){return l.createElement(l.Fragment,null,l.createElement(r.J6,null),l.createElement(ie,null),l.createElement(ce,null))}}}]);
//# sourceMappingURL=vscripts.d2830d47c10c46b02271.js.map