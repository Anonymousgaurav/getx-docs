"use strict";(self.webpackChunkgetx_document=self.webpackChunkgetx_document||[]).push([[652],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:2,title:"Reactive State",hide_title:!0,id:"reactive-state",slug:"/state/reactive-state"},r=void 0,o={unversionedId:"state_management/reactive-state",id:"state_management/reactive-state",title:"Reactive State",description:"Reactive State Manager",source:"@site/docs/state_management/reactive-state.md",sourceDirName:"state_management",slug:"/state/reactive-state",permalink:"/getx-docs/docs/state/reactive-state",draft:!1,editUrl:"https://github.com/chornthorn/getx-docs/tree/main/docs/state_management/reactive-state.md",tags:[],version:"current",lastUpdatedBy:"Thorn Chorn",lastUpdatedAt:1683215019,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Reactive State",hide_title:!0,id:"reactive-state",slug:"/state/reactive-state"},sidebar:"tutorialSidebar",previous:{title:"Overview \ud83d\udcda",permalink:"/getx-docs/docs/state/overview"},next:{title:"Simple State",permalink:"/getx-docs/docs/state/simple-state"}},s={},u=[{value:"Reactive State Manager",id:"reactive-state-manager",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Maximum performance:",id:"maximum-performance",level:3},{value:"Declaring a reactive variable",id:"declaring-a-reactive-variable",level:3},{value:"Having a reactive state, is easy.",id:"having-a-reactive-state-is-easy",level:5},{value:"Using the values in the view",id:"using-the-values-in-the-view",level:3},{value:"Conditions to rebuild",id:"conditions-to-rebuild",level:3},{value:"Where .obs can be used",id:"where-obs-can-be-used",level:3},{value:"Note about Lists",id:"note-about-lists",level:3},{value:"Why i have to use .value",id:"why-i-have-to-use-value",level:3},{value:"Obx()",id:"obx",level:3},{value:"Workers",id:"workers",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"reactive-state-manager"},"Reactive State Manager"),(0,i.kt)("p",null,"Reactive programming can alienate many people because it is said to be complicated. GetX turns reactive programming into something quite simple:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You won't need to create StreamControllers."),(0,i.kt)("li",{parentName:"ul"},"You won't need to create a StreamBuilder for each variable"),(0,i.kt)("li",{parentName:"ul"},"You will not need to create a class for each state."),(0,i.kt)("li",{parentName:"ul"},"You will not need to create a get for an initial value.")),(0,i.kt)("p",null,"Reactive programming with Get is as easy as using setState."),(0,i.kt)("p",null,"Let's imagine that you have a name variable and want that every time you change it, all widgets that use it are automatically changed."),(0,i.kt)("p",null,"This is your count variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var name = 'Jonatas Borges';\n")),(0,i.kt)("p",null,'To make it observable, you just need to add ".obs" to the end of it:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var name = 'Jonatas Borges'.obs;\n")),(0,i.kt)("p",null,"That's all. It's ",(0,i.kt)("em",{parentName:"p"},"that")," simple."),(0,i.kt)("p",null,'From now on, we might refer to this reactive-".obs"(ervables) variables as ',(0,i.kt)("em",{parentName:"p"},"Rx"),"."),(0,i.kt)("p",null,"What did we do under the hood? We created a ",(0,i.kt)("inlineCode",{parentName:"p"},"Stream")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," s, assigned the initial value ",(0,i.kt)("inlineCode",{parentName:"p"},'"Jonatas Borges"')," , we notified all widgets that use ",(0,i.kt)("inlineCode",{parentName:"p"},'"Jonatas Borges"'),' that they now "belong" to this variable, and when the ',(0,i.kt)("em",{parentName:"p"},"Rx")," value changes, they will have to change as well."),(0,i.kt)("p",null,"This is the ",(0,i.kt)("strong",{parentName:"p"},"magic of GetX"),", thanks to Dart's capabilities."),(0,i.kt)("p",null,"But, as we know, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Widget"),' can only be changed if it is inside a function, because static classes do not have the power to "auto-change".'),(0,i.kt)("p",null,"You will need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamBuilder"),' , subscribe to this variable to listen for changes, and create a "cascade" of nested ',(0,i.kt)("inlineCode",{parentName:"p"},"StreamBuilder")," if you want to change several variables in the same scope, right?"),(0,i.kt)("p",null,"No, you don't need a ",(0,i.kt)("inlineCode",{parentName:"p"},"StreamBuilder")," , but you are right about static classes."),(0,i.kt)("p",null,"Well, in the view, we usually have a lot of boilerplate when we want to change a specific Widget, that's the Flutter way.\nWith ",(0,i.kt)("strong",{parentName:"p"},"GetX")," you can also forget about this boilerplate code."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StreamBuilder( \u2026 )")," ? ",(0,i.kt)("inlineCode",{parentName:"p"},"initialValue: \u2026")," ? ",(0,i.kt)("inlineCode",{parentName:"p"},"builder: \u2026")," ? Nope, you just need to place this variable inside an ",(0,i.kt)("inlineCode",{parentName:"p"},"Obx()")," Widget."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Obx (() => Text (controller.name));\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"What do you need to memorize?")," Only ",(0,i.kt)("inlineCode",{parentName:"p"},"Obx(() =>")," ."),(0,i.kt)("p",null,"You are just passing that Widget through an arrow-function into an ",(0,i.kt)("inlineCode",{parentName:"p"},"Obx()"),' (the "Observer" of the ',(0,i.kt)("em",{parentName:"p"},"Rx"),")."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Obx")," is pretty smart, and will only change if the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"controller.name")," changes."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"John"')," , and you change it to ",(0,i.kt)("inlineCode",{parentName:"p"},'"John"')," ( ",(0,i.kt)("inlineCode",{parentName:"p"},'name.value = "John"')," ), as it's the same ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," as before, nothing will change on the screen, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Obx")," , to save resources, will simply ignore the new value and not rebuild the Widget. ",(0,i.kt)("strong",{parentName:"p"},"Isn't that amazing?")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"So, what if I have 5 ",(0,i.kt)("em",{parentName:"p"},"Rx")," (observable) variables within an ",(0,i.kt)("inlineCode",{parentName:"p"},"Obx")," ?")),(0,i.kt)("p",null,"It will just update when ",(0,i.kt)("strong",{parentName:"p"},"any")," of them changes."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"And if I have 30 variables in a class, when I update one, will it update ",(0,i.kt)("strong",{parentName:"p"},"all")," the variables that are in that class?")),(0,i.kt)("p",null,"Nope, just the ",(0,i.kt)("strong",{parentName:"p"},"specific Widget")," that uses that ",(0,i.kt)("em",{parentName:"p"},"Rx")," variable."),(0,i.kt)("p",null,"So, ",(0,i.kt)("strong",{parentName:"p"},"GetX")," only updates the screen, when the ",(0,i.kt)("em",{parentName:"p"},"Rx")," variable changes it's value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nfinal isOpen = false.obs;\n\n// NOTHING will happen... same value.\nvoid onButtonTap() => isOpen.value=false;\n")),(0,i.kt)("h3",{id:"advantages"},"Advantages"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"GetX()")," helps you when you need ",(0,i.kt)("strong",{parentName:"p"},"granular")," control over what's being updated."),(0,i.kt)("p",null,"If you do not need ",(0,i.kt)("inlineCode",{parentName:"p"},"unique IDs")," , because all your variables will be modified when you perform an action, then use ",(0,i.kt)("inlineCode",{parentName:"p"},"GetBuilder")," ,\nbecause it's a Simple State Updater (in blocks, like ",(0,i.kt)("inlineCode",{parentName:"p"},"setState()")," ), made in just a few lines of code.\nIt was made simple, to have the least CPU impact, and just to fulfill a single purpose (a ",(0,i.kt)("em",{parentName:"p"},"State")," rebuild) and spend the minimum resources possible."),(0,i.kt)("p",null,"If you need a ",(0,i.kt)("strong",{parentName:"p"},"powerful")," State Manager, you can't go wrong with ",(0,i.kt)("strong",{parentName:"p"},"GetX"),"."),(0,i.kt)("p",null,"It doesn't work with variables, but ",(0,i.kt)("strong",{parentName:"p"},"flows"),", everything in it are ",(0,i.kt)("inlineCode",{parentName:"p"},"Streams")," under the hood."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("em",{parentName:"p"},"rxDart")," in conjunction with it, because everything are ",(0,i.kt)("inlineCode",{parentName:"p"},"Streams"),",\nyou can listen to the ",(0,i.kt)("inlineCode",{parentName:"p"},"event"),' of each "',(0,i.kt)("em",{parentName:"p"},"Rx"),' variable",\nbecause everything in it are ',(0,i.kt)("inlineCode",{parentName:"p"},"Streams"),"."),(0,i.kt)("p",null,"It is literally a ",(0,i.kt)("em",{parentName:"p"},"BLoC")," approach, easier than ",(0,i.kt)("em",{parentName:"p"},"MobX"),", and without code generators or decorations.\nYou can turn ",(0,i.kt)("strong",{parentName:"p"},"anything")," into an ",(0,i.kt)("em",{parentName:"p"},'"Observable"')," with just a ",(0,i.kt)("inlineCode",{parentName:"p"},".obs")," ."),(0,i.kt)("h3",{id:"maximum-performance"},"Maximum performance:"),(0,i.kt)("p",null,"In addition to having a smart algorithm for minimal rebuilds, ",(0,i.kt)("strong",{parentName:"p"},"GetX")," uses comparators\nto make sure the State has changed."),(0,i.kt)("p",null,"If you experience any errors in your app, and send a duplicate change of State,\n",(0,i.kt)("strong",{parentName:"p"},"GetX")," will ensure it will not crash."),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"GetX")," the State only changes if the ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," change.\nThat's the main difference between ",(0,i.kt)("strong",{parentName:"p"},"GetX"),", and using ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"computed")," from MobX"),".\nWhen joining two ",(0,i.kt)("strong",{parentName:"p"},"observables"),", and one changes; the listener of that ",(0,i.kt)("em",{parentName:"p"},"observable")," will change as well."),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"GetX"),", if you join two variables, ",(0,i.kt)("inlineCode",{parentName:"p"},"GetX()")," (similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Observer()")," ) will only rebuild if it implies a real change of State."),(0,i.kt)("h3",{id:"declaring-a-reactive-variable"},"Declaring a reactive variable"),(0,i.kt)("p",null,'You have 3 ways to turn a variable into an "observable".'),(0,i.kt)("p",null,"1 - The first is using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Rx{Type}")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// initial value is recommended, but not mandatory\nfinal name = RxString('');\nfinal isLogged = RxBool(false);\nfinal count = RxInt(0);\nfinal balance = RxDouble(0.0);\nfinal items = RxList<String>([]);\nfinal myMap = RxMap<String, int>({});\n")),(0,i.kt)("p",null,"2 - The second is to use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Rx"))," and use Darts Generics, ",(0,i.kt)("inlineCode",{parentName:"p"},"Rx<Type>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"final name = Rx<String>('');\nfinal isLogged = Rx<Bool>(false);\nfinal count = Rx<Int>(0);\nfinal balance = Rx<Double>(0.0);\nfinal number = Rx<Num>(0);\nfinal items = Rx<List<String>>([]);\nfinal myMap = Rx<Map<String, int>>({});\n\n// Custom classes - it can be any class, literally\nfinal user = Rx<User>();\n")),(0,i.kt)("p",null,"3 - The third, more practical, easier and preferred approach, just add ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},".obs"))," as a property of your ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"final name = ''.obs;\nfinal isLogged = false.obs;\nfinal count = 0.obs;\nfinal balance = 0.0.obs;\nfinal number = 0.obs;\nfinal items = <String>[].obs;\nfinal myMap = <String, int>{}.obs;\n\n// Custom classes - it can be any class, literally\nfinal user = User().obs;\n")),(0,i.kt)("h5",{id:"having-a-reactive-state-is-easy"},"Having a reactive state, is easy."),(0,i.kt)("p",null,"As we know, ",(0,i.kt)("em",{parentName:"p"},"Dart")," is now heading towards ",(0,i.kt)("em",{parentName:"p"},"null safety"),".\nTo be prepared, from now on, you should always start your ",(0,i.kt)("em",{parentName:"p"},"Rx")," variables with an ",(0,i.kt)("strong",{parentName:"p"},"initial value"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Transforming a variable into an ",(0,i.kt)("em",{parentName:"p"},"observable")," + ",(0,i.kt)("em",{parentName:"p"},"initial value")," with ",(0,i.kt)("strong",{parentName:"p"},"GetX")," is the simplest, and most practical approach.")),(0,i.kt)("p",null,'You will literally add a " ',(0,i.kt)("inlineCode",{parentName:"p"},".obs"),' " to the end of your variable, and ',(0,i.kt)("strong",{parentName:"p"},"that\u2019s it"),", you\u2019ve made it observable,\nand its ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," , well, will be the ",(0,i.kt)("em",{parentName:"p"},"initial value"),")."),(0,i.kt)("h3",{id:"using-the-values-in-the-view"},"Using the values in the view"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// controller file\nfinal count1 = 0.obs;\nfinal count2 = 0.obs;\nint get sum => count1.value + count2.value;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// view file\nGetX<Controller>(\n  builder: (controller) {\n    print(\"count 1 rebuild\");\n    return Text('${controller.count1.value}');\n  },\n),\nGetX<Controller>(\n  builder: (controller) {\n    print(\"count 2 rebuild\");\n    return Text('${controller.count2.value}');\n  },\n),\nGetX<Controller>(\n  builder: (controller) {\n    print(\"count 3 rebuild\");\n    return Text('${controller.sum}');\n  },\n),\n")),(0,i.kt)("p",null,"If we increment ",(0,i.kt)("inlineCode",{parentName:"p"},"count1.value++")," , it will print:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"count 1 rebuild"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"count 3 rebuild")))),(0,i.kt)("p",null,"because ",(0,i.kt)("inlineCode",{parentName:"p"},"count1")," has a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," , and ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 0 = 1")," , changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," getter value."),(0,i.kt)("p",null,"If we change ",(0,i.kt)("inlineCode",{parentName:"p"},"count2.value++")," , it will print:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"count 2 rebuild"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"count 3 rebuild")))),(0,i.kt)("p",null,"because ",(0,i.kt)("inlineCode",{parentName:"p"},"count2.value")," changed, and the result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," is now ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NOTE: By default, the very first event will rebuild the widget, even if it is the same ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,i.kt)("p",null,"This behavior exists due to Boolean variables."),(0,i.kt)("p",null,"Imagine you did this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var isLogged = false.obs;\n")),(0,i.kt)("p",null,'And then, you checked if a user is "logged in" to trigger an event in ',(0,i.kt)("inlineCode",{parentName:"p"},"ever")," ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nonInit() async {\n  ever(isLogged, fireRoute);\n  isLogged.value = await Preferences.hasToken();\n}\n\nfireRoute(logged) {\n  if (logged) {\n   Get.off(Home());\n  } else {\n   Get.off(Login());\n  }\n}\n")),(0,i.kt)("p",null,"if ",(0,i.kt)("inlineCode",{parentName:"p"},"hasToken")," was ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," , there would be no change to ",(0,i.kt)("inlineCode",{parentName:"p"},"isLogged")," , so ",(0,i.kt)("inlineCode",{parentName:"p"},"ever()")," would never be called.\nTo avoid this type of behavior, the first change to an ",(0,i.kt)("em",{parentName:"p"},"observable")," will always trigger an event,\neven if it contains the same ",(0,i.kt)("inlineCode",{parentName:"p"},".value")," ."),(0,i.kt)("p",null,"You can remove this behavior if you want, using:\n",(0,i.kt)("inlineCode",{parentName:"p"},"isLogged.firstRebuild = false;")),(0,i.kt)("h3",{id:"conditions-to-rebuild"},"Conditions to rebuild"),(0,i.kt)("p",null,"In addition, Get provides refined state control. You can condition an event (such as adding an object to a list), on a certain condition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// First parameter: condition, must return true or false.\n// Second parameter: the new value to apply if the condition is true.\nlist.addIf(item < limit, item);\n")),(0,i.kt)("p",null,"Without decorations, without a code generator, without complications \ud83d\ude04"),(0,i.kt)("p",null,"Do you know Flutter's counter app? Your Controller class might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class CountController extends GetxController {\n  final count = 0.obs;\n}\n")),(0,i.kt)("p",null,"With a simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"controller.count.value++\n")),(0,i.kt)("p",null,"You could update the counter variable in your UI, regardless of where it is stored."),(0,i.kt)("h3",{id:"where-obs-can-be-used"},"Where .obs can be used"),(0,i.kt)("p",null,"You can transform anything on obs. Here are two ways of doing it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can convert your class values to obs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'class RxUser {\n  final name = "Camila".obs;\n  final age = 18.obs;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"or you can convert the entire class to be an observable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'class User {\n  User({String name, int age});\n  var name;\n  var age;\n}\n\n// when instantianting:\nfinal user = User(name: "Camila", age: 18).obs;\n')),(0,i.kt)("h3",{id:"note-about-lists"},"Note about Lists"),(0,i.kt)("p",null,"Lists are completely observable as are the objects within it. That way, if you add a value to a list, it will automatically rebuild the widgets that use it."),(0,i.kt)("p",null,"You also don't need to use \".value\" with lists, the amazing dart api allowed us to remove that.\nUnfortunaly primitive types like String and int cannot be extended, making the use of .value mandatory, but that won't be a problem if you work with gets and setters for these."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// On the controller\nfinal String title = 'User Info:'.obs\nfinal list = List<User>().obs;\n\n// on the view\nText(controller.title.value), // String need to have .value in front of it\nListView.builder (\n  itemCount: controller.list.length // lists don't need it\n)\n")),(0,i.kt)("p",null,"When you are making your own classes observable, there is a different way to update them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// on the model file\n// we are going to make the entire class observable instead of each attribute\nclass User() {\n  User({this.name = '', this.age = 0});\n  String name;\n  int age;\n}\n\n// on the controller file\nfinal user = User().obs;\n// when you need to update the user variable:\nuser.update( (user) { // this parameter is the class itself that you want to update\nuser.name = 'Jonny';\nuser.age = 18;\n});\n// an alternative way of update the user variable:\nuser(User(name: 'Jo\xe3o', age: 35));\n\n// on view:\nObx(()=> Text(\"Name ${user.value.name}: Age: ${user.value.age}\"))\n// you can also access the model values without the .value:\nuser().name; // notice that is the user variable, not the class (variable has lowercase u)\n")),(0,i.kt)("p",null,'You don\'t have to work with sets if you don\'t want to. you can use the "assign \'and" assignAll "api.\nThe "assign" api will clear your list, and add a single object that you want to start there.\nThe "assignAll" api will clear the existing list and add any iterable objects that you inject into it.'),(0,i.kt)("h3",{id:"why-i-have-to-use-value"},"Why i have to use .value"),(0,i.kt)("p",null,"We could remove the obligation to use 'value' to ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," with a simple decoration and code generator, but the purpose of this library is precisely avoid external dependencies. We want to offer an environment ready for programming, involving the essentials (management of routes, dependencies and states), in a simple, lightweight and performant way, without a need of an external package."),(0,i.kt)("p",null,"You can literally add 3 letters to your pubspec (get) and a colon and start programming. All solutions included by default, from route management to state management, aim at ease, productivity and performance."),(0,i.kt)("p",null,"The total weight of this library is less than that of a single state manager, even though it is a complete solution, and that is what you must understand."),(0,i.kt)("p",null,"If you are bothered by ",(0,i.kt)("inlineCode",{parentName:"p"},".value"),' , and like a code generator, MobX is a great alternative, and you can use it in conjunction with Get. For those who want to add a single dependency in pubspec and start programming without worrying about the version of a package being incompatible with another, or if the error of a state update is coming from the state manager or dependency, or still, do not want to worrying about the availability of controllers, whether literally "just programming", get is just perfect.'),(0,i.kt)("p",null,"If you have no problem with the MobX code generator, or have no problem with the BLoC boilerplate, you can simply use Get for routes, and forget that it has state manager. Get SEM and RSM were born out of necessity, my company had a project with more than 90 controllers, and the code generator simply took more than 30 minutes to complete its tasks after a Flutter Clean on a reasonably good machine, if your project it has 5, 10, 15 controllers, any state manager will supply you well. If you have an absurdly large project, and code generator is a problem for you, you have been awarded this solution."),(0,i.kt)("p",null,"Obviously, if someone wants to contribute to the project and create a code generator, or something similar, I will link in this readme as an alternative, my need is not the need for all devs, but for now I say, there are good solutions that already do that, like MobX."),(0,i.kt)("h3",{id:"obx"},"Obx()"),(0,i.kt)("p",null,"Typing in Get using Bindings is unnecessary. you can use the Obx widget instead of GetX which only receives the anonymous function that creates a widget.\nObviously, if you don't use a type, you will need to have an instance of your controller to use the variables, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"Get.find<Controller>()")," .value or Controller.to.value to retrieve the value."),(0,i.kt)("h3",{id:"workers"},"Workers"),(0,i.kt)("p",null,"Workers will assist you, triggering specific callbacks when an event occurs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'/// Called every time `count1` changes.\never(count1, (_) => print("$_ has been changed"));\n\n/// Called only first time the variable $_ is changed\nonce(count1, (_) => print("$_ was changed once"));\n\n/// Anti DDos - Called every time the user stops typing for 1 second, for example.\ndebounce(count1, (_) => print("debouce$_"), time: Duration(seconds: 1));\n\n/// Ignore all changes within 1 second.\ninterval(count1, (_) => print("interval $_"), time: Duration(seconds: 1));\n')),(0,i.kt)("p",null,"All workers (except ",(0,i.kt)("inlineCode",{parentName:"p"},"debounce")," ) have a ",(0,i.kt)("inlineCode",{parentName:"p"},"condition")," named parameter, which can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," or a callback that returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," .\nThis ",(0,i.kt)("inlineCode",{parentName:"p"},"condition")," defines when the ",(0,i.kt)("inlineCode",{parentName:"p"},"callback")," function executes."),(0,i.kt)("p",null,"All workers returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Worker")," instance, that you can use to cancel ( via ",(0,i.kt)("inlineCode",{parentName:"p"},"dispose()")," ) the worker."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ever")))),(0,i.kt)("p",null,"is called every time the ",(0,i.kt)("em",{parentName:"p"},"Rx")," variable emits a new value."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"everAll")))),(0,i.kt)("p",null,"Much like ",(0,i.kt)("inlineCode",{parentName:"p"},"ever")," , but it takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," of ",(0,i.kt)("em",{parentName:"p"},"Rx")," values Called every time its variable is changed. That's it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"once")))),(0,i.kt)("p",null,"'once' is called only the first time the variable has been changed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"debounce")))),(0,i.kt)("p",null,'\'debounce\' is very useful in search functions, where you only want the API to be called when the user finishes typing. If the user types "Jonny", you will have 5 searches in the APIs, by the letter J, o, n, n, and y. With Get this does not happen, because you will have a "debounce" Worker that will only be triggered at the end of typing.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"interval")))),(0,i.kt)("p",null,"'interval' is different from the debouce. debouce if the user makes 1000 changes to a variable within 1 second, he will send only the last one after the stipulated timer (the default is 800 milliseconds). Interval will instead ignore all user actions for the stipulated period. If you send events for 1 minute, 1000 per second, debounce will only send you the last one, when the user stops strafing events. interval will deliver events every second, and if set to 3 seconds, it will deliver 20 events that minute. This is recommended to avoid abuse, in functions where the user can quickly click on something and get some advantage (imagine that the user can earn coins by clicking on something, if he clicked 300 times in the same minute, he would have 300 coins, using interval, you can set a time frame for 3 seconds, and even then clicking 300 or a thousand times, the maximum he would get in 1 minute would be 20 coins, clicking 300 or 1 million times). The debounce is suitable for anti-DDos, for functions like search where each change to onChange would cause a query to your api. Debounce will wait for the user to stop typing the name, to make the request. If it were used in the coin scenario mentioned above, the user would only win 1 coin, because it is only executed, when the user \"pauses\" for the established time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NOTE: Workers should always be used when starting a Controller or Class, so it should always be on onInit (recommended), Class constructor, or the initState of a StatefulWidget (this practice is not recommended in most cases, but it shouldn't have any side effects).")))}c.isMDXComponent=!0}}]);