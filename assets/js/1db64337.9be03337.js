"use strict";(self.webpackChunkgetx_document=self.webpackChunkgetx_document||[]).push([[372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Overview",hide_title:!0,id:"overview",slug:"/",sidebar_label:"Overview"},i=void 0,l={unversionedId:"overview",id:"overview",title:"Overview",description:"About Get \ud83d\udcda",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/getx-docs/docs/",draft:!1,editUrl:"https://github.com/chornthorn/getx-docs/tree/main/docs/overview.md",tags:[],version:"current",lastUpdatedBy:"Chorn Thron",lastUpdatedAt:1675450871,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview",hide_title:!0,id:"overview",slug:"/",sidebar_label:"Overview"},sidebar:"tutorialSidebar",next:{title:"Overview \ud83d\udcda",permalink:"/getx-docs/docs/state/overview"}},s={},u=[{value:"About Get \ud83d\udcda",id:"about-get-",level:2},{value:"PERFORMANCE",id:"performance",level:3},{value:"PRODUCTIVITY",id:"productivity",level:3},{value:"ORGANIZATION",id:"organization",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-get-"},"About Get \ud83d\udcda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetX is an extra-light and powerful solution for Flutter. It combines high-performance state management, intelligent dependency injection, and route management quickly and practically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetX has 3 basic principles. This means that these are the priority for all resources in the library: ",(0,r.kt)("strong",{parentName:"p"},"PRODUCTIVITY, PERFORMANCE AND ORGANIZATION.")))),(0,r.kt)("h3",{id:"performance"},"PERFORMANCE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GetX is focused on performance and minimum consumption of resources. GetX does not use Streams or ChangeNotifier.")),(0,r.kt)("h3",{id:"productivity"},"PRODUCTIVITY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetX uses an easy and pleasant syntax. No matter what you want to do, there is always an easier way with GetX. It will save hours of development and will provide the maximum performance your application can deliver.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Generally, the developer should be concerned with removing controllers from memory. With GetX this is not necessary because resources are removed from memory when they are not used by default. If you want to keep it in memory, you must explicitly declare "permanent: true" in your dependency. That way, in addition to saving time, you are less at risk of having unnecessary dependencies on memory. Dependency loading is also lazy by default.'))),(0,r.kt)("h3",{id:"organization"},"ORGANIZATION"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetX allows the total decoupling of the View, presentation logic, business logic, dependency injection, and navigation. You do not need context to navigate between routes, so you are not dependent on the widget tree (visualization) for this. You don't need context to access your controllers/blocs through an inheritedWidget, so you completely decouple your presentation logic and business logic from your visualization layer. You do not need to inject your Controllers/Models/Blocs classes into your widget tree through ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiProvider"),"s. For this, GetX uses its own dependency injection feature, decoupling the DI from its view completely."),(0,r.kt)("p",{parentName:"li"},"With GetX you know where to find each feature of your application, having clean code by default. In addition to making maintenance easy, this makes the sharing of modules something that until then in Flutter was unthinkable, something totally possible.\nBLoC was a starting point for organizing code in Flutter, it separates business logic from visualization. GetX is a natural evolution of this, not only separating the business logic but the presentation logic. Bonus injection of dependencies and routes are also decoupled, and the data layer is out of it all. You know where everything is, and all of this in an easier way than building a hello world.\nGetX is the easiest, practical, and scalable way to build high-performance applications with the Flutter SDK. It has a large ecosystem around it that works perfectly together, it's easy for beginners, and it's accurate for experts. It is secure, stable, up-to-date, and offers a huge range of APIs built-in that are not present in the default Flutter SDK.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetX is not bloated. It has a multitude of features that allow you to start programming without worrying about anything, but each of these features are in separate containers and are only started after use. If you only use State Management, only State Management will be compiled. If you only use routes, nothing from the state management will be compiled.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GetX has a huge ecosystem, a large community, a large number of collaborators, and will be maintained as long as the Flutter exists. GetX too is capable of running with the same code on Android, iOS, Web, Mac, Linux, Windows, and on your server.\n",(0,r.kt)("strong",{parentName:"p"},"It is possible to fully reuse your code made on the frontend on your backend with ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/jonataslaw/get_server"},"Get Server")),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In addition, the entire development process can be completely automated, both on the server and on the front end with ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/jonataslaw/get_cli"},"Get CLI")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In addition, to further increase your productivity, we have the\n",(0,r.kt)("a",{parentName:"strong",href:"https://marketplace.visualstudio.com/items?itemName=get-snippets.get-snippets"},"extension to VSCode")," and the ",(0,r.kt)("a",{parentName:"strong",href:"https://plugins.jetbrains.com/plugin/14975-getx-snippets"},"extension to Android Studio/Intellij"))))}d.isMDXComponent=!0}}]);