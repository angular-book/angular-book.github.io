"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:0},i="Chapter 3 - Getting Real",s={unversionedId:"Getting-Real/overview",id:"Getting-Real/overview",title:"Chapter 3 - Getting Real",description:"Angular's sweet-spot is in building large applications that are maintained by many different developers over a long period of time. Angular is called an opinionated framework because it is largely \"batteries included\": One ng new and you have just about everything you need to create an application, including support for routing, some testing, and even an Http client. Not all frameworks or libraries for developing web apps are this extensive. In React, for example, you have a lot of different choices for each of those modules. This has advantages as well. When you have a product you want to build that needs to distinguish itself in it's technical prowess and how that tech matches the business domain, and if you have a team of developers that all work together and make the choices for each particular module or component in the applications, more freedom might be a good thing.",source:"@site/docs/03-Getting-Real/00-overview.md",sourceDirName:"03-Getting-Real",slug:"/Getting-Real/overview",permalink:"/docs/Getting-Real/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"realWorld",next:{title:"Project Structure",permalink:"/docs/Getting-Real/Project Structure/project-structure"}},l={},p=[{value:"Feedback Loops",id:"feedback-loops",level:2},{value:"Inner Loop",id:"inner-loop",level:3},{value:"Approach / Tools",id:"approach--tools",level:4},{value:"Working as a Team (Modularity)",id:"working-as-a-team-modularity",level:4},{value:"Testing",id:"testing",level:4},{value:"Outer Loop",id:"outer-loop",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chapter-3---getting-real"},"Chapter 3 - Getting Real"),(0,a.kt)("p",null,"Angular's sweet-spot is in building large applications that are maintained by many different developers over a long period of time. Angular is called an ",(0,a.kt)("em",{parentName:"p"},"opinionated"),' framework because it is largely "batteries included": One ',(0,a.kt)("inlineCode",{parentName:"p"},"ng new")," and you have just about everything you need to create an application, including support for routing, some testing, and even an Http client. Not all frameworks or libraries for developing web apps are this extensive. In React, for example, you have a lot of different choices for each of those modules. This has advantages as well. When you have a product you want to build that needs to distinguish itself in it's technical prowess and how that tech matches the business domain, ",(0,a.kt)("em",{parentName:"p"},"and")," if you have a team of developers that all work together and make the choices for each particular module or component in the applications, more freedom might be a good thing."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"spirit")," of Angular is consistency. Once a group of developers adopts Angular, it agrees to adopt it's set of reasonable defaults, from everything from component hierarchies, component communciation, routing (including route guards, etc.), and even project structure, it is much easier for an experienced Angular developer to join ",(0,a.kt)("em",{parentName:"p"},"any")," team's Angular project and get busy fast delivering business value."),(0,a.kt)("p",null,"The purpose of this section is to promote some good practices that should be shared across the team or the entire organization."),(0,a.kt)("p",null,'This will start with a discussion of the idiomatic use of TypeScript within Angular applications, a discussion on addressing Accessibility requirements, styling, extending our "inner loop" developer environment with ESLint and Prettier, and project structure.'),(0,a.kt)("h2",{id:"feedback-loops"},"Feedback Loops"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Continuous Integration")," Mindset: There is one ",(0,a.kt)("em",{parentName:"p"},"authoritative")," version of the code, the ",(0,a.kt)("em",{parentName:"p"},"origin"),' hosted on your version control system. This is our "single point of truth" on the current state of the application. As developers, we make a clone of this code on our local machines at some point in time. Each day we write code that will be pushed to the origin\'s main branch. ',(0,a.kt)("strong",{parentName:"p"},"All")," code that we push is code we have confidence in."),(0,a.kt)("p",null,"The more clones of that code times the length of time since you've fetched changes times how many concurrent changes you've each made equals ",(0,a.kt)("strong",{parentName:"p"},"MERGE CONFLICT HELL"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Do your best to not work on the same code that others are working on."),(0,a.kt)("li",{parentName:"ol"},"Commit and push to ",(0,a.kt)("inlineCode",{parentName:"li"},"origin")," ",(0,a.kt)("em",{parentName:"li"},"at least daily"),".")),(0,a.kt)("p",null,"Simple, right? No."),(0,a.kt)("p",null,"Point 1 is about the architecture of your code base. Breaking things into features and libraries, having a good state management strategy, and good programming that emphasizes loose coupling. We ",(0,a.kt)("strong",{parentName:"p"},"prefer adding new things over changing existing things"),". We will emphasize this throughout this book."),(0,a.kt)("p",null,'Point 2 is even harder. This is the "continuous integraton" part. It means, briefly, that every day you have to plan your work in such a way that at the end of the day you can integrate whatever work you\'ve done into the main branch of your source control. This means no feature branches (long lived, or even short lived - the only "branch" is the clone of the code on your machine.)'),(0,a.kt)("h3",{id:"inner-loop"},"Inner Loop"),(0,a.kt)("p",null,'Setting up our development environment/experience to push us into the "pit of success". This is why we use TypeScript (instead of just JavaScript) - we want the feedback.'),(0,a.kt)("h4",{id:"approach--tools"},"Approach / Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using Static Types",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Never ",(0,a.kt)("inlineCode",{parentName:"li"},"any")))),(0,a.kt)("li",{parentName:"ul"},"ESLint, Prettier")),(0,a.kt)("h4",{id:"working-as-a-team-modularity"},"Working as a Team (Modularity)"),(0,a.kt)("p",null,"Emphasizing creating features, code-splitting, etc."),(0,a.kt)("p",null,"Feature Flags/Toggles"),(0,a.kt)("h4",{id:"testing"},"Testing"),(0,a.kt)("p",null,'The "Testing Trophy" (Kent Dodds).'),(0,a.kt)("h3",{id:"outer-loop"},"Outer Loop"))}h.isMDXComponent=!0}}]);