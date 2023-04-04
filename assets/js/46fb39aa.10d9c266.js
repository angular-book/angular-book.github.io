"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[5782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={},r="NGRX Friction",s={unversionedId:"Getting-Real/redux-notes",id:"Getting-Real/redux-notes",title:"NGRX Friction",description:"Actions / Effects / Reducers",source:"@site/docs/03-Getting-Real/redux-notes.md",sourceDirName:"03-Getting-Real",slug:"/Getting-Real/redux-notes",permalink:"/docs/Getting-Real/redux-notes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"realWorld",previous:{title:"Developer Testing Angular Applications",permalink:"/docs/Getting-Real/Testing/developer-testing"},next:{title:"Zod for Validating Models",permalink:"/docs/Getting-Real/zod"}},l={},p=[{value:"Actions / Effects / Reducers",id:"actions--effects--reducers",level:2},{value:"No Clear Correlation Between Actions and Their Outcomes",id:"no-clear-correlation-between-actions-and-their-outcomes",level:3},{value:"Components",id:"components",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ngrx-friction"},"NGRX Friction"),(0,a.kt)("h2",{id:"actions--effects--reducers"},"Actions / Effects / Reducers"),(0,a.kt)("p",null,"My first instinct is that in de-coupled software, this is always an issue. Tightly coupled software is always easier to reason about, but that comes at the price of being more difficult to maintain (adapt) over time."),(0,a.kt)("h3",{id:"no-clear-correlation-between-actions-and-their-outcomes"},"No Clear Correlation Between Actions and Their Outcomes"),(0,a.kt)("p",null,"A button-click on a component causes an action to be dispatched. Sometimes those actions are just a kind of ",(0,a.kt)("em",{parentName:"p"},"notification"),'. A "so this happened" type of thing. Sometimes is is a call for something specific to happen (a command). Sometimes those commands have an expected outcome "do this thing and get me this data". The store\'s ',(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," method is ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),". It never returns anything. the result of those kind of commands (to retreive some data) are indirectly correlated to some data that will appear ",(0,a.kt)("em",{parentName:"p"},"at some point in time")," (in other words, asynchronously) through a selector function."),(0,a.kt)("p",null,'Using the language of Rich Hickey\'s "Simple made Easy" talk #todo add a link here.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Easy"),' means "close at hand". You can reason through it by reading it, without much other supporting conceptual baggage.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Complex")," means more than one thing going on. Easy requires complexity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple")," is the opposite of complex. Think ",(0,a.kt)("em",{parentName:"li"},"simplex"),".")),(0,a.kt)("p",null,"My feeling is that components should be ",(0,a.kt)("strong",{parentName:"p"},"simple"),". The difficult part of components should be in the UI, not in the code that implements that UI."),(0,a.kt)("p",null,'Components stay simple by not providing any sense of the "how", including the "when" part of an implementation.'),(0,a.kt)("p",null,"The two jobs of a component:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Accurately project the meaningful application state."),(0,a.kt)("li",{parentName:"ol"},"Provide affordances through which the user can signal intentions.")),(0,a.kt)("p",null,"For example, a component that allows a user to select a time and date for an appointment would have to display the available times and dates, and an affordance (button, link, etc.) through which the user can signal their intention to schedule that appointment."),(0,a.kt)("p",null,"Or a user filling out any kind of form, on successful submission, is indicating the intention of that data being processed in some way."),(0,a.kt)("p",null,"In other words, components are always just sources of actions that are a signalling of intention, and therefore the actions from a component should be modeled as an ",(0,a.kt)("em",{parentName:"p"},"event"),"."),(0,a.kt)("p",null,"So, for the two jobs of a component, above, what I am saying is a component exists to provide a way for a user to allow us to know what their ",(0,a.kt)("em",{parentName:"p"},"intention")," is. (adding something to a cart, changing their password, updating their email address, adding a vehicle to their policy, etc.). We have to supply them the data to make support them in making that request (which of these items do you want to add to the cart? What is your current email address?), and we do that through ",(0,a.kt)("em",{parentName:"p"},"selectors"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"test first")," approach is good for this because we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"mockStore")," and mock selectors, not yet worrying about if the data exists in the state, etc."),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("p",null,"Arguably the most ",(0,a.kt)("em",{parentName:"p"},"important")," thing in Angular. They provide the user interface. Angular is a framework for creating user interfaces. Thus, ",(0,a.kt)("em",{parentName:"p"},"components")," are a big deal."),(0,a.kt)("p",null,"Components tend to have a lot of ",(0,a.kt)("em",{parentName:"p"},"churn"),". We are always tweaking them, futzing with them, and sometimes throwing them away or replacing them with something new."),(0,a.kt)("p",null,"For this reason, they need to be ",(0,a.kt)("em",{parentName:"p"},"extremely")," ",(0,a.kt)("strong",{parentName:"p"},"loosely coupled"),". They should be as ",(0,a.kt)("em",{parentName:"p"},"dumb")," as possible. How the functionality of your application ",(0,a.kt)("em",{parentName:"p"},"looks")," should be as separate as possible from how it ",(0,a.kt)("em",{parentName:"p"},"works"),"."),(0,a.kt)("p",null,"We build components really for two things, programming wise:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Showing the user some data (state)."),(0,a.kt)("li",{parentName:"ol"},"Giving the user doo-dads (affordances) to click on, type into, etc. that our program code needs to do its thing.")),(0,a.kt)("p",null,"Components recieve the data to display in the form of an ",(0,a.kt)("inlineCode",{parentName:"p"},"Observable"),", by selecing data from the store."),(0,a.kt)("p",null,"The notify the application of interactions (buttons clicked, routes changed, forms filled out, etc.) by dispatching events."),(0,a.kt)("p",null,"Events are past-tense things that indicate that a thing has happened."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"User Clicked Sign Out"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"User Logged In")),(0,a.kt)("p",null,"Stuff like that."),(0,a.kt)("admonition",{title:"Components should only (or mostly) dispatch events.",type:"tip"}),(0,a.kt)("p",null,'Events don\'t, by design, have a clear "cause and effect". We call that "loosely coupled" in software development. In other words, by ',(0,a.kt)("em",{parentName:"p"},"just")," having components dispatch events when something happens, we aren't going to unintentionally sneak important business logic into the component that might be screwed up in the future, or keep us from replacing something that should ",(0,a.kt)("em",{parentName:"p"},"really")," be replaced."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},'It doesn\'t matter, of course, if you separate your actions into specific things called "Events" or "Commands", or "Documents", or whatever. I mean, you can call all your variables ',(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"foo"),", ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"bar"),", etc. if you want to. But by making their use and purpose ",(0,a.kt)("em",{parentName:"mdxAdmonitionTitle"},"explicit")," we bring clarity to our code.")),(0,a.kt)("p",null,"Sometimes events can create a new state in your application (handled by your reducer). This is particularly true if you have state in your application that the application itself ",(0,a.kt)("em",{parentName:"p"},"owns"),"."),(0,a.kt)("p",null,"Usually this means that the state is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For the current user of the application."),(0,a.kt)("li",{parentName:"ul"},"Has to do with things like how the application appears, or user preference stuff.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"an example might be an event ",(0,a.kt)("inlineCode",{parentName:"li"},"User Requested Movies Sorted By Title"),".")))))}u.isMDXComponent=!0}}]);