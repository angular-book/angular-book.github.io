"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[6289],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:4},r="Angular Components",s={unversionedId:"Angular-101/components",id:"Angular-101/components",title:"Angular Components",description:"Components are arguably the most important part of Angular, and we are going to spend a good deal of time helping you understand how they work, and what they are for.",source:"@site/docs/02-Angular-101/components.md",sourceDirName:"02-Angular-101",slug:"/Angular-101/components",permalink:"/docs/Angular-101/components",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"angular101",previous:{title:"Angular Project File Structure",permalink:"/docs/Angular-101/file-structure"},next:{title:"\u2692\ufe0f Creating Components in Angular",permalink:"/docs/Angular-101/creating-components"}},l={},p=[{value:"Designing a User Interface",id:"designing-a-user-interface",level:2},{value:"The Role of Components In Our User Interface",id:"the-role-of-components-in-our-user-interface",level:2},{value:"The Job of Components",id:"the-job-of-components",level:2},{value:"Accurately Project the Application State",id:"accurately-project-the-application-state",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"angular-components"},"Angular Components"),(0,o.kt)("p",null,"Components are arguably the most important part of Angular, and we are going to spend a good deal of time helping you understand how they work, and what they are for."),(0,o.kt)("p",null,"When executing within your application, components are the thing that provides at least a portion of the user interface. Since Angular is a tool for creating user interface applications, you can see why they are so important."),(0,o.kt)("h2",{id:"designing-a-user-interface"},"Designing a User Interface"),(0,o.kt)("p",null,"Angular is probably overkill for a lot of things that people put in the web. Where it shines is when you are creating applications (as opposed to simple 'web sites'). I define an application as:"),(0,o.kt)("admonition",{title:"Application:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Something created by software developers to provide specific business functionality using layers of more general tools")),(0,o.kt)("p",null,"In other words, there is something specific that your business needs users to be able to accomplish. For example, purchasing products, making airline reservations, making an appointment, etc. Our job as application developers is to use general purpose technology and create a user ",(0,o.kt)("em",{parentName:"p"},"experience")," that guides the user in accomplishing what our business needs by providing supporting data, clear metaphors, instantaneous feedback, and pleasant user interface."),(0,o.kt)("h2",{id:"the-role-of-components-in-our-user-interface"},"The Role of Components In Our User Interface"),(0,o.kt)("p",null,"Web browsers provide some basic, general-purpose structures for designing user interface. As we know, HTML, CSS, and some JavaScript will allow just about ",(0,o.kt)("em",{parentName:"p"},"any")," business to create a website. While there is nothing ",(0,o.kt)("em",{parentName:"p"},"specific")," in web browsers to any business, you can use these building blocks to create e-commerce applications for selling Warhammer","\u2122"," figurines, gardening supplies, online encyclopedias, video sharing sites, insurance companies, and the list goes on."),(0,o.kt)("p",null,"As software developers, though, we create more ",(0,o.kt)("em",{parentName:"p"},"specific"),' things called "',(0,o.kt)("strong",{parentName:"p"},"abstractions"),'" that are central to our business or our project at hand. We like to give names to bits of associated data, code, etc. with class names, function names, library names, etc. '),(0,o.kt)("p",null,"HTML, for example, has only very low-level abstractions. You can specificy something is a heading, a hyperlink, an image, etc. but they are, by design, too general to allow us to reason about our business and the needs of our application in any meaningful way."),(0,o.kt)("p",null,"Frameworks like Angular allow you to ",(0,o.kt)("em",{parentName:"p"},"encapsulate")," pieces of functionality and data and ",(0,o.kt)("em",{parentName:"p"},"name")," it so that it is immediately part of the ",(0,o.kt)("em",{parentName:"p"},"vocabulary")," of your application. For example, while HTML has forms, there is no ",(0,o.kt)("em",{parentName:"p"},"specific"),' "Log In" element in HTML. With Angular we can create a ',(0,o.kt)("inlineCode",{parentName:"p"},"LogInComponent")," that ",(0,o.kt)("em",{parentName:"p"},"encapsulates")," everything about our logging in process. It can be designed, developed, and tested in isolation from the rest of our application. When we are ready, it can be added to our application for users to interact with."),(0,o.kt)("p",null,"To Angular developers, an ",(0,o.kt)("em",{parentName:"p"},"application")," is a hierarchy of components, each with specific responsibilities. Some components will provide single pieces of functionality within our application (like the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogInComponent"),"), others can be reused in a variety of contexts (like a component that is designed to show the details for ",(0,o.kt)("em",{parentName:"p"},"any")," product from our product catalog)."),(0,o.kt)("p",null,"Train yourself to look at well-designed web applications and even web sites as hierarchies of components."),(0,o.kt)("p",null,"For example, if you look at a fairly simple web page (here, the ",(0,o.kt)("a",{parentName:"p",href:"https://nodjes.org/en"},"https://nodejs.org/en"),") site:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NodeJS Site",src:a(7729).Z,width:"1498",height:"625"})),(0,o.kt)("p",null,"You might see some candidates for components that would look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NodeJS Components",src:a(9210).Z,width:"1305",height:"532"})),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"template")," for our root component in our application might just look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<app-masthead />\n<app-main />\n<app-legal />\n")),(0,o.kt)("p",null,"The template for the ",(0,o.kt)("inlineCode",{parentName:"p"},"MastHeadComponent")," might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<app-logo />\n<app-site-navigation />\n<app-user-prefs />\n")),(0,o.kt)("p",null,"The template for the ",(0,o.kt)("inlineCode",{parentName:"p"},"MainComponent")," might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<p class="description">Node.js\xae is an open-source, cross-platform JavaScript runtime environment.</p>\n<section class="downloads">\n  <p class="os-header">Download for Windows (x64)</p>\n  <app-download-details isLTS="true" version="18.15.0" />\n  <app-download-details isLTS="false" version="19.9.0" />\n  <p>For information about supported releases, see the <a href="/release#release-schedule">release schedule.</a></p>\n</section>\n\n')),(0,o.kt)("p",null,"As you can see in these ",(0,o.kt)("em",{parentName:"p"},"psuedo")," templates, our HTML markup is a combination of standard HTML elements, including classes, etc. as well as ",(0,o.kt)("em",{parentName:"p"},"specific"),' "new" elements (like ',(0,o.kt)("inlineCode",{parentName:"p"},"app-logo"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"app-download-details"),") that aren't a standard part of HTML - they are components we create in Angular."),(0,o.kt)("h2",{id:"the-job-of-components"},"The Job of Components"),(0,o.kt)("p",null,"The job of components is three-fold:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Accurately project the application state to the user."),(0,o.kt)("li",{parentName:"ol"},"Provide affordances through which the user can interact with the application."),(0,o.kt)("li",{parentName:"ol"},"Provide branding, and other static content to the user.")),(0,o.kt)("h3",{id:"accurately-project-the-application-state"},"Accurately Project the Application State"),(0,o.kt)("admonition",{title:"Application State",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'"State" is the value of all meaningful variables (data) in your application ',(0,o.kt)("em",{parentName:"p"},"right now"),". For example, if you have a component that shows the contents of a user's shopping cart, it needs to show what is currently in their cart. If in another part of the application, they add an item to the cart, the ",(0,o.kt)("em",{parentName:"p"},"state")," of the cart changes, and the user interface (our component) needs to ",(0,o.kt)("em",{parentName:"p"},"immediately")," reflect that.")),(0,o.kt)("p",null,"State is ",(0,o.kt)("strong",{parentName:"p"},"THE BIG")," difference in building applications with tools like Angular and building server-side web applications with tools like PHP, Ruby on Rails, ASP.NET MVC, etc. These applications are ",(0,o.kt)("em",{parentName:"p"},"stateful"),". "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Stateless")," web applications are different. For example, if you are on a standard e-commerce application and you click a button to add an item to your shopping cart, the actual shopping cart data is ",(0,o.kt)("em",{parentName:"p"},"not")," maintained in your application's memory. When you add an item, a request is made to the web server to add that item. The data is probably stored in a database or event stream somewhere. When you want to ",(0,o.kt)("em",{parentName:"p"},"see")," the content of your cart, you ",(0,o.kt)("em",{parentName:"p"},"navigate")," to another page where the server queries the database, writes out some HTML, and shows it to you."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"experience"),", in this case, for the user is ",(0,o.kt)("em",{parentName:"p"},"fine"),". It like browsing the web. There are these little (or long, depending on your connection quality and the load of the server), delays between each interaction while the web server collects the ",(0,o.kt)("em",{parentName:"p"},"current"),' state and projects that on to a web page that is loaded in the browser. We could call this the "browsing the web" experience and there is nothing inherently ',(0,o.kt)("em",{parentName:"p"},"wrong")," with it. However, where Angular excels is in creating ",(0,o.kt)("em",{parentName:"p"},"application-like experiences"),"."),(0,o.kt)("p",null,'Start paying attention to the "felt sense" of using different pieces of software on your machine, or even visiting other web sites. There is a different experience when you are playing a video game than when, say, you are browsing Wikipedia. There is a different experience when you are using something like Google Calendar than when you are browsing Amazon.com.'),(0,o.kt)("p",null,"We could qualify these differences in several different ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Direct manipulation of State.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For example, to move an appointment on your Google calendar from today to tomorrow, you simply drag and drop it. It is intuitive, and responsive. "),(0,o.kt)("li",{parentName:"ul"},"You are ",(0,o.kt)("em",{parentName:"li"},"not")," filling out a form, submitting it to the server, and waiting for an updated version of your calendar to appear."))),(0,o.kt)("li",{parentName:"ul"},"Network Disappears",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If I place an order on most e-commerce web sites, and stare at my order history page for three days, it will ",(0,o.kt)("em",{parentName:"li"},"never")," update unless I refresh the page."),(0,o.kt)("li",{parentName:"ul"},"Other sites give me instantaneous feedback without me initiating it. For example, someone just liked a picture I posted on Instagram."))),(0,o.kt)("li",{parentName:"ul"},"Responsiveness",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sometimes you are on a website and you fill out a form and hit the submit button. There is often a slightly uncomfortable moment or two where you aren't quite sure if you really hit the submit button. The page may disappear for a second or two, and, hopefully, ",(0,o.kt)("em",{parentName:"li"},"eventually")," you get a response back. Sometimes the response is a bunch of errors that you have to correct (sorry, those Taylor Swift tickets are ",(0,o.kt)("em",{parentName:"li"},"long gone, buddy!"),"), and you have to start the process over again."),(0,o.kt)("li",{parentName:"ul"},'Good user interface/experience guides you into the "pit of success". As you interact with the application you get ',(0,o.kt)("em",{parentName:"li"},"immediate")," feedback, buttons react when you click them, drop down selection lists don't have a delay while some network call happens. You feel ",(0,o.kt)("em",{parentName:"li"},"held")," through the experience. ",(0,o.kt)("strong",{parentName:"li"},"This is the experience we want our customers to have, especially when we want more of their money"),".")))),(0,o.kt)("p",null,'On the web, this type of application has been called a "Single Page Application". This term is meant to connote the fact that you are not ',(0,o.kt)("em",{parentName:"p"},"navigating from page to page, like you might on a news site"),", but interacting with an application. When you use an application like GMail, for example, you aren't thinking \"Wow! All this on a ",(0,o.kt)("em",{parentName:"p"},"single page!"),'", you are, most likely, not thinking ',(0,o.kt)("em",{parentName:"p"},"at all"),' about the technology. GMail is just a thing I use to do email. I call these kind of experiences "Apps".'),(0,o.kt)("p",null,'We usually think of the term "app" for something that we might install on our mobile device, like a game, a calendar tool, a social media application, etc. and I think the metaphor holds. Have you ever noticed the difference between a well-designed application from a company, and one that is very obviously just some kind of ',(0,o.kt)("em",{parentName:"p"},"wrapper")," around their web site? To me, it almost always immediately identifiable, and the experience isn't great. "),(0,o.kt)("p",null,'Why am I saying all of this? Basically, if you don\'t need an "App" like experience, but a "web server" like experience, then don\'t use Angular. Angular shouldn\'t be a replacement for proven technology we have decades of experience using. '),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"IF")," You can build your application using something like PHP, Ruby on Rails, or ASP.NET MVC, you probably shouldn't use Angular (or any other front-end framework). Often those kind of applications can be built (and maintained) for a ",(0,o.kt)("em",{parentName:"p"},"fraction"),' of the price, delivered more quickly, and even enhanced with some JavaScript using tools like Vue or Svelte to give "islands" of interactivity where you need it. I\'ve seen projects that cost millions, and cause all sorts of headaches where they could have been a simple MVC site, and offer nothing in addition to that.'),(0,o.kt)("p",{parentName:"admonition"},"Your job as an ",(0,o.kt)("em",{parentName:"p"},"application developer")," is to apply technology ",(0,o.kt)("em",{parentName:"p"},"appropriately")," for the good of the business."),(0,o.kt)("p",{parentName:"admonition"},"Now that doesn't mean, obviously, Angular is ",(0,o.kt)("em",{parentName:"p"},"never")," a good choice. With Angular you can create a user experience that far exceeds what you can do with most server-side web application technology. You can create new user experiences that extend your business in ways we just couldn't do before. "),(0,o.kt)("p",{parentName:"admonition"},"When building Angular applications, you are building ",(0,o.kt)("em",{parentName:"p"},"Apps"),". Think about applications, not web sites. ")))}m.isMDXComponent=!0},7729:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nodejs1-0e3675ef8e3272d7fc8d909c7fd10962.png"},9210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nodejs3-b9531fb382596df905da582b290ab4a8.png"}}]);