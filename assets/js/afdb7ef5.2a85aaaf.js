"use strict";(self.webpackChunkgetx_document=self.webpackChunkgetx_document||[]).push([[665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,p=c["".concat(s,".").concat(m)]||c[m]||h[m]||r;return n?o.createElement(p,l(l({ref:t},d),{},{components:n})):o.createElement(p,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3,title:"Simple State",hide_title:!0,id:"simple-state",slug:"/state/simple-state"},l=void 0,i={unversionedId:"State Management/simple-state",id:"State Management/simple-state",title:"Simple State",description:"Simple State Manager",source:"@site/docs/State Management/simple-state.md",sourceDirName:"State Management",slug:"/state/simple-state",permalink:"/getx-docs/docs/state/simple-state",draft:!1,editUrl:"https://github.com/chornthorn/getx-docs/tree/main/docs/State Management/simple-state.md",tags:[],version:"current",lastUpdatedBy:"Chorn Thron",lastUpdatedAt:1675450871,formattedLastUpdatedAt:"Feb 3, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Simple State",hide_title:!0,id:"simple-state",slug:"/state/simple-state"},sidebar:"tutorialSidebar",previous:{title:"Reactive State",permalink:"/getx-docs/docs/state/reactive-state"},next:{title:"Mixin State",permalink:"/getx-docs/docs/state/mixin-state"}},s={},u=[{value:"Simple State Manager",id:"simple-state-manager",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Usage",id:"usage",level:3},{value:"How it handles controllers",id:"how-it-handles-controllers",level:3},{value:"You won&#39;t need StatefulWidgets anymore",id:"you-wont-need-statefulwidgets-anymore",level:3},{value:"Why it exists",id:"why-it-exists",level:3},{value:"Other ways of using it",id:"other-ways-of-using-it",level:3},{value:"Unique IDs",id:"unique-ids",level:3}],d={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"simple-state-manager"},"Simple State Manager"),(0,a.kt)("p",null,"Get has a state manager that is extremely light and easy, which does not use ChangeNotifier, will meet the need especially for those new to Flutter, and will not cause problems for large applications."),(0,a.kt)("p",null,'GetBuilder is aimed precisely at multiple state control. Imagine that you added 30 products to a cart, you click delete one, at the same time that the list is updated, the price is updated and the badge in the shopping cart is updated to a smaller number. This type of approach makes GetBuilder killer, because it groups states and changes them all at once without any "computational logic" for that. GetBuilder was created with this type of situation in mind, since for ephemeral change of state, you can use setState and you would not need a state manager for this.'),(0,a.kt)("p",null,'That way, if you want an individual controller, you can assign IDs for that, or use GetX. This is up to you, remembering that the more "individual" widgets you have, the more the performance of GetX will stand out, while the performance of GetBuilder should be superior, when there is multiple change of state.'),(0,a.kt)("h3",{id:"advantages"},"Advantages"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update only the required widgets.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Does not use changeNotifier, it is the state manager that uses less memory (close to 0mb).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Forget StatefulWidget! With Get you will never need it. With the other state managers, you will probably have to use a StatefulWidget to get the instance of your Provider, BLoC, MobX Controller, etc. But have you ever stopped to think that your appBar, your scaffold, and most of the widgets that are in your class are stateless? So why save the state of an entire class, if you can only save the state of the Widget that is stateful? Get solves that, too. Create a Stateless class, make everything stateless. If you need to update a single component, wrap it with GetBuilder, and its state will be maintained.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Organize your project for real! Controllers must not be in your UI, place your TextEditController, or any controller you use within your Controller class.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Do you need to trigger an event to update a widget as soon as it is rendered? GetBuilder has the property "initState", just like StatefulWidget, and you can call events from your controller, directly from it, no more events being placed in your initState.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Do you need to trigger an action like closing streams, timers and etc? GetBuilder also has the dispose property, where you can call events as soon as that widget is destroyed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use streams only if necessary. You can use your StreamControllers inside your controller normally, and use StreamBuilder also normally, but remember, a stream reasonably consumes memory, reactive programming is beautiful, but you shouldn't abuse it. 30 streams open simultaneously can be worse than changeNotifier (and changeNotifier is very bad).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update widgets without spending ram for that. Get stores only the GetBuilder creator ID, and updates that GetBuilder when necessary. The memory consumption of the get ID storage in memory is very low even for thousands of GetBuilders. When you create a new GetBuilder, you are actually sharing the state of GetBuilder that has a creator ID. A new state is not created for each GetBuilder, which saves A LOT OF ram for large applications. Basically your application will be entirely Stateless, and the few Widgets that will be Stateful (within GetBuilder) will have a single state, and therefore updating one will update them all. The state is just one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get is omniscient and in most cases it knows exactly the time to take a controller out of memory. You should not worry about when to dispose of a controller, Get knows the best time to do this."))),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// Create controller class and extends GetxController\nclass Controller extends GetxController {\n  int counter = 0;\n  void increment() {\n    counter++;\n    update(); // use update() to update counter variable on UI when increment be called\n  }\n}\n// On your Stateless/Stateful class, use GetBuilder to update Text when increment be called\nGetBuilder<Controller>(\n  init: Controller(), // INIT IT ONLY THE FIRST TIME\n  builder: (_) => Text(\n    '${_.counter}',\n  ),\n)\n//Initialize your controller only the first time. The second time you are using ReBuilder for the same controller, do not use it again. Your controller will be automatically removed from memory as soon as the widget that marked it as 'init' is deployed. You don't have to worry about that, Get will do it automatically, just make sure you don't start the same controller twice.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Done!")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You have already learned how to manage states with Get.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Note: You may want a larger organization, and not use the init property. For that, you can create a class and extends Binding class, and within it mention the controllers that will be created within that route. Controllers will not be created at that time, on the contrary, this is just a statement, so that the first time you use a Controller, Get will know where to look. Get will remain lazyLoad, and will continue to dispose Controllers when they are no longer needed. See the pub.dev example to see how it works."))),(0,a.kt)("p",null,"If you navigate many routes and need data that was in your previously used controller, you just need to use GetBuilder Again (with no init):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class OtherClass extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: Center(\n        child: GetBuilder<Controller>(\n          builder: (s) => Text('${s.counter}'),\n        ),\n      ),\n    );\n  }\n\n")),(0,a.kt)("p",null,"If you need to use your controller in many other places, and outside of GetBuilder, just create a get in your controller and have it easily. (or use ",(0,a.kt)("inlineCode",{parentName:"p"},"Get.find<Controller>()")," )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Controller extends GetxController {\n\n  /// You do not need that. I recommend using it just for ease of syntax.\n  /// with static method: Controller.to.increment();\n  /// with no static method: Get.find<Controller>().increment();\n  /// There is no difference in performance, nor any side effect of using either syntax. Only one does not need the type, and the other the IDE will autocomplete it.\n  static Controller get to => Get.find(); // add this line\n\n  int counter = 0;\n  void increment() {\n    counter++;\n    update();\n  }\n}\n")),(0,a.kt)("p",null,"And then you can access your controller directly, that way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'FloatingActionButton(\n  onPressed: () {\n    Controller.to.increment(),\n  } // This is incredibly simple!\n  child: Text("${Controller.to.counter}"),\n),\n')),(0,a.kt)("p",null,"When you press FloatingActionButton, all widgets that are listening to the 'counter' variable will be updated automatically."),(0,a.kt)("h3",{id:"how-it-handles-controllers"},"How it handles controllers"),(0,a.kt)("p",null,"Let's say we have this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Class a => Class B (has controller X) => Class C (has controller X)")),(0,a.kt)("p",null,"In class A the controller is not yet in memory, because you have not used it yet (Get is lazyLoad). In class B you used the controller, and it entered memory. In class C you used the same controller as in class B, Get will share the state of controller B with controller C, and the same controller is still in memory. If you close screen C and screen B, Get will automatically take controller X out of memory and free up resources, because Class a is not using the controller. If you navigate to B again, controller X will enter memory again, if instead of going to class C, you return to class A again, Get will take the controller out of memory in the same way. If class C didn't use the controller, and you took class B out of memory, no class would be using controller X and likewise it would be disposed of. The only exception that can mess with Get, is if you remove B from the route unexpectedly, and try to use the controller in C. In this case, the creator ID of the controller that was in B was deleted, and Get was programmed to remove it from memory every controller that has no creator ID. If you intend to do this, add the \"autoRemove: false\" flag to class B's GetBuilder and use adoptID = true; in class C's GetBuilder."),(0,a.kt)("h3",{id:"you-wont-need-statefulwidgets-anymore"},"You won't need StatefulWidgets anymore"),(0,a.kt)("p",null,"Using StatefulWidgets means storing the state of entire screens unnecessarily, even because if you need to minimally rebuild a widget, you will embed it in a Consumer/Observer/BlocProvider/GetBuilder/GetX/Obx, which will be another StatefulWidget.\nThe StatefulWidget class is a class larger than StatelessWidget, which will allocate more RAM, and this may not make a significant difference between one or two classes, but it will most certainly do when you have 100 of them!\nUnless you need to use a mixin, like TickerProviderStateMixin, it will be totally unnecessary to use a StatefulWidget with Get."),(0,a.kt)("p",null,"You can call all methods of a StatefulWidget directly from a GetBuilder.\nIf you need to call initState() or dispose() method for example, you can call them directly;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"GetBuilder<Controller>(\n  initState: (_) => Controller.to.fetchApi(),\n  dispose: (_) => Controller.to.closeStreams(),\n  builder: (s) => Text('${s.username}'),\n),\n")),(0,a.kt)("p",null,"A much better approach than this is to use the onInit() and onClose() method directly from your controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid onInit() {\n  fetchApi();\n  super.onInit();\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NOTE: If you want to start a method at the moment the controller is called for the first time, you DON'T NEED to use constructors for this, in fact, using a performance-oriented package like Get, this borders on bad practice, because it deviates from the logic in which the controllers are created or allocated (if you create an instance of this controller, the constructor will be called immediately, you will be populating a controller before it is even used, you are allocating memory without it being in use, this definitely hurts the principles of this library). The onInit() methods; and onClose(); were created for this, they will be called when the Controller is created, or used for the first time, depending on whether you are using Get.lazyPut or not. If you want, for example, to make a call to your API to populate data, you can forget about the old-fashioned method of initState/dispose, just start your call to the api in onInit, and if you need to execute any command like closing streams, use the onClose() for that.")),(0,a.kt)("h3",{id:"why-it-exists"},"Why it exists"),(0,a.kt)("p",null,"The purpose of this package is precisely to give you a complete solution for navigation of routes, management of dependencies and states, using the least possible dependencies, with a high degree of decoupling. Get engages all high and low level Flutter APIs within itself, to ensure that you work with the least possible coupling. We centralize everything in a single package, to ensure that you don't have any kind of coupling in your project. That way, you can put only widgets in your view, and leave the part of your team that works with the business logic free, to work with the business logic without depending on any element of the View. This provides a much cleaner working environment, so that part of your team works only with widgets, without worrying about sending data to your controller, and part of your team works only with the business logic in its breadth, without depending on no element of the view."),(0,a.kt)("p",null,"So to simplify this:\nYou don't need to call methods in initState and send them by parameter to your controller, nor use your controller constructor for that, you have the onInit() method that is called at the right time for you to start your services.\nYou do not need to call the device, you have the onClose() method that will be called at the exact moment when your controller is no longer needed and will be removed from memory. That way, leave views for widgets only, refrain from any kind of business logic from it."),(0,a.kt)("p",null,'Do not call a dispose method inside GetxController, it will not do anything, remember that the controller is not a Widget, you should not "dispose" it, and it will be automatically and intelligently removed from memory by Get. If you used any stream on it and want to close it, just insert it into the close method. Example:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Controller extends GetxController {\n  StreamController<User> user = StreamController<User>();\n  StreamController<String> name = StreamController<String>();\n\n  /// close stream = onClose method, not dispose.\n  @override\n  void onClose() {\n    user.close();\n    name.close();\n    super.onClose();\n  }\n}\n")),(0,a.kt)("p",null,"Controller life cycle:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onInit() where it is created."),(0,a.kt)("li",{parentName:"ul"},"onClose() where it is closed to make any changes in preparation for the delete method"),(0,a.kt)("li",{parentName:"ul"},"deleted: you do not have access to this API because it is literally removing the controller from memory. It is literally deleted, without leaving any trace.")),(0,a.kt)("h3",{id:"other-ways-of-using-it"},"Other ways of using it"),(0,a.kt)("p",null,"You can use Controller instance directly on GetBuilder value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"GetBuilder<Controller>(\n  init: Controller(),\n  builder: (value) => Text(\n    '${value.counter}', //here\n  ),\n),\n")),(0,a.kt)("p",null,"You may also need an instance of your controller outside of your GetBuilder, and you can use these approaches to achieve this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Controller extends GetxController {\n  static Controller get to => Get.find();\n[...]\n}\n// on you view:\nGetBuilder<Controller>(\n  init: Controller(), // use it only first time on each controller\n  builder: (_) => Text(\n    '${Controller.to.counter}', //here\n  )\n),\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Controller extends GetxController {\n // static Controller get to => Get.find(); // with no static get\n[...]\n}\n// on stateful/stateless class\nGetBuilder<Controller>(\n  init: Controller(), // use it only first time on each controller\n  builder: (_) => Text(\n    '${Get.find<Controller>().counter}', //here\n  ),\n),\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'You can use "non-canonical" approaches to do this. If you are using some other dependency manager, like get_it, modular, etc., and just want to deliver the controller instance, you can do this:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Controller controller = Controller();\n[...]\nGetBuilder<Controller>(\n  init: controller, //here\n  builder: (_) => Text(\n    '${controller.counter}', // here\n  ),\n),\n\n")),(0,a.kt)("h3",{id:"unique-ids"},"Unique IDs"),(0,a.kt)("p",null,"If you want to refine a widget's update control with GetBuilder, you can assign them unique IDs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"GetBuilder<Controller>(\n  id: 'text'\n  init: Controller(), // use it only first time on each controller\n  builder: (_) => Text(\n    '${Get.find<Controller>().counter}', //here\n  ),\n),\n")),(0,a.kt)("p",null,"And update it this form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"update(['text']);\n")),(0,a.kt)("p",null,"You can also impose conditions for the update:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"update(['text'], counter < 10);\n")),(0,a.kt)("p",null,"GetX does this automatically and only reconstructs the widget that uses the exact variable that was changed, if you change a variable to the same as the previous one and that does not imply a change of state , GetX will not rebuild the widget to save memory and CPU cycles (3 is being displayed on the screen, and you change the variable to 3 again. In most state managers, this will cause a new rebuild, but with GetX the widget will only is rebuilt again, if in fact his state has changed)."))}h.isMDXComponent=!0}}]);