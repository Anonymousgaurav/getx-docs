"use strict";(self.webpackChunkgetx_document=self.webpackChunkgetx_document||[]).push([[889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4,title:"Mixin State",hide_title:!0,id:"mixin-state",slug:"/state/mixin-state"},i=void 0,s={unversionedId:"state_management/mixin-state",id:"state_management/mixin-state",title:"Mixin State",description:"Mixing the two state managers",source:"@site/docs/state_management/mixin-state.md",sourceDirName:"state_management",slug:"/state/mixin-state",permalink:"/getx-docs/docs/state/mixin-state",draft:!1,editUrl:"https://github.com/chornthorn/getx-docs/tree/main/docs/state_management/mixin-state.md",tags:[],version:"current",lastUpdatedBy:"Thorn Chorn",lastUpdatedAt:1683215019,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Mixin State",hide_title:!0,id:"mixin-state",slug:"/state/mixin-state"},sidebar:"tutorialSidebar",previous:{title:"Simple State",permalink:"/getx-docs/docs/state/simple-state"},next:{title:"Rebuild State",permalink:"/getx-docs/docs/state/rebuild-state"}},l={},c=[{value:"Mixing the two state managers",id:"mixing-the-two-state-managers",level:2},{value:"StateMixin",id:"statemixin",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mixing-the-two-state-managers"},"Mixing the two state managers"),(0,r.kt)("p",null,'Some people opened a feature request, as they wanted to use only one type of reactive variable, and the other mechanics, and needed to insert an Obx into a GetBuilder for this. Thinking about it MixinBuilder was created. It allows both reactive changes by changing ".obs" variables, and mechanical updates via update(). However, of the 4 widgets he is the one that consumes the most resources, since in addition to having a Subscription to receive change events from his children, he subscribes to the update method of his controller.'),(0,r.kt)("p",null,'Extending GetxController is important, as they have life cycles, and can "start" and "end" events in their onInit() and onClose() methods. You can use any class for this, but I strongly recommend you use the GetxController class to place your variables, whether they are observable or not.'),(0,r.kt)("h2",{id:"statemixin"},"StateMixin"),(0,r.kt)("p",null,"Another way to handle your ",(0,r.kt)("inlineCode",{parentName:"p"},"UI")," state is use the ",(0,r.kt)("inlineCode",{parentName:"p"},"StateMixin<T>")," .\nTo implement it, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"StateMixin<T>"),"\nto your controller which allows a T model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class Controller extends GetController with StateMixin<User>{}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"change()")," method change the State whenever we want.\nJust pass the data and the status in this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"change(data, status: RxStatus.success());\n")),(0,r.kt)("p",null,"RxStatus allow these status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"RxStatus.loading();\nRxStatus.success();\nRxStatus.empty();\nRxStatus.error('message');\n")),(0,r.kt)("p",null,"To represent it in the UI, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class OtherClass extends GetView<Controller> {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n\n      body: controller.obx(\n        (state)=>Text(state.name),\n\n        // here you can put your custom loading indicator, but\n        // by default would be Center(child:CircularProgressIndicator())\n        onLoading: CustomLoadingIndicator(),\n        onEmpty: Text('No data found'),\n\n        // here also you can set your own error widget, but by\n        // default will be an Center(child:Text(error))\n        onError: (error)=>Text(error),\n      ),\n    );\n}\n")))}p.isMDXComponent=!0}}]);