"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[7583],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:0,title:"\ud83d\udcd8 Big Picture"},i=void 0,s={unversionedId:"Angular-101/Creating-An-Angular-App/Angular-Development",id:"Angular-101/Creating-An-Angular-App/Angular-Development",title:"\ud83d\udcd8 Big Picture",description:"The final result of creating an Angular application is creating an HTML file with links to your compiled applications source code, CSS files, etc. These are static files, and they are placed on a web server so that your users can download and run your application.",source:"@site/docs/02-Angular-101/10-Creating-An-Angular-App/100-Angular-Development.md",sourceDirName:"02-Angular-101/10-Creating-An-Angular-App",slug:"/Angular-101/Creating-An-Angular-App/Angular-Development",permalink:"/docs/Angular-101/Creating-An-Angular-App/Angular-Development",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"\ud83d\udcd8 Big Picture"},sidebar:"angular101",previous:{title:"\ud83d\udcd7 Quick Tour of Angular",permalink:"/docs/Angular-101/summary"},next:{title:"\ud83d\udcd7 The Angular CLI",permalink:"/docs/Angular-101/Creating-An-Angular-App/Angular-CLI"}},l={},p=[{value:"TypeScript and JavaScript",id:"typescript-and-javascript",level:2},{value:"HTML and the Document Object Model",id:"html-and-the-document-object-model",level:2},{value:"The Document Object Model",id:"the-document-object-model",level:3},{value:"Angular Templates",id:"angular-templates",level:3},{value:"Angular Language Server",id:"angular-language-server",level:4},{value:"CSS",id:"css",level:2},{value:"Assets (Images, Etc.)",id:"assets-images-etc",level:2},{value:"Development Server",id:"development-server",level:2},{value:"Building Your Application",id:"building-your-application",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"final result")," of creating an Angular application is creating an HTML file with links to your compiled applications source code, CSS files, etc. These are ",(0,o.kt)("em",{parentName:"p"},"static")," files, and they are placed on a web server so that your users can download and run your application."),(0,o.kt)("p",null,"In the early days of web development, you could simply create some HTML pages, a style sheet, and a few JavaScript files that were linked to your HTML pages using any old text editor. The sophistication of the things we'd put on the internet was much, much less than the things are expected of us now. Frankly, even then you'd get issues with things like caching, JavaScript files being included in an HTML page in the wrong order, and just generally produce a \"big ball of mud\" - an unmaintainable mess that was fragile, and you'd live in fear of it."),(0,o.kt)("p",null,'Our "job" as Angular developers is to produce just a few things:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some JavaScript code to make our application ",(0,o.kt)("em",{parentName:"li"},"do something"),"."),(0,o.kt)("li",{parentName:"ul"},"Some CSS to make it look good."),(0,o.kt)("li",{parentName:"ul"},"Static things like images and logos and stuff."),(0,o.kt)("li",{parentName:"ul"},"An HTML page to host our application containing links the browser will follow to get our JavaScript, CSS, and images.")),(0,o.kt)("p",null,"All of those things go on a web server somewhere. The users enters the address in their browser, and all that stuff gets downloaded and runs in their browser."),(0,o.kt)("p",null,"If you are just creating something ",(0,o.kt)("em",{parentName:"p"},"simple")," like a home page for your family or bowling league, you could write all that stuff by hand, and create a few images and throw them in a folder."),(0,o.kt)("p",null,"You aren't going to be able to sell any widgets with that model, and you certainly aren't going to be able to collect credit card numbers, but it worked for us for a while."),(0,o.kt)("p",null,"For things like accessing databases, collecting and storing information from a user, and all that - you know the stuff that actually makes the web ",(0,o.kt)("em",{parentName:"p"},"great"),' and makes us some money, we started building "smart" web servers. They didn\'t just store static HTML pages. They would ',(0,o.kt)("em",{parentName:"p"},"generate"),' HTML dynamically based on the request. So if the user asked for the "HTML page" in your web browser for your daily specials, they might make an HTTP request to ',(0,o.kt)("inlineCode",{parentName:"p"},"https://my-company.com/daily-special"),", and be delivered some HTML listing out the specials. But that HTML was ",(0,o.kt)("em",{parentName:"p"},"generated")," by some code running on the server"),(0,o.kt)("p",null,"But these days, our customers are more demanding. They expect"),(0,o.kt)("h2",{id:"typescript-and-javascript"},"TypeScript and JavaScript"),(0,o.kt)("p",null,"Since JavaScript is basically an ",(0,o.kt)("em",{parentName:"p"},"interpreted")," programming language, it was difficult to ensure you wouldn't get runtime errors in your application. ",(0,o.kt)("em",{parentName:"p"},"Good")," JavaScript developers would often write ",(0,o.kt)("em",{parentName:"p"},"way more")," lines of code testing their JavaScript before actually pushing their code to the web server."),(0,o.kt)("p",null,"Angular, like most modern tools for creating applications, has a complex setup for the developer that wants to do everything possible to deliver high-quality applications. Instead of just relying on static files for our JavaScript code, processing our CSS, etc. We introduce a tools (created by other web developers over the years, entirely open-source) for managing our source code, verifying our code, and providing an environment where we can both preview and test our changes ",(0,o.kt)("em",{parentName:"p"},"before")," putting them in front of our customers."),(0,o.kt)("p",null,"One choice that Angular uses in this process is to use the TypeScript programming language. The primary purpose of TypeScript is to introduce a compile step in the production of your JavaScript."),(0,o.kt)("p",null,'For example, in JavaScript this is "valid" code:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let movie = { title: 'Jaws', director: 'Spielberg'};\n\nconsole.log(movie.directedBy);\n")),(0,o.kt)("p",null,"It would just not produce to the console in your browser's development tools what you would expect. A keen-eyed developer that is used to strictly typed compiled languages would expect perhaps an error. That's not how JavaScript works - you'd just see the value ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," written to your console."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If")," however, you had written this in a TypeScript file (files ending in ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," and run it through the TypeScript compiler), the compiler would give you an error that lets you know that the movie object does not have a ",(0,o.kt)("inlineCode",{parentName:"p"},"directedBy")," property. (The actual property is ",(0,o.kt)("inlineCode",{parentName:"p"},"director"),")."),(0,o.kt)("p",null,"This would give you almost instantaneous feedback that you had made a typo or mistake ",(0,o.kt)("em",{parentName:"p"},"before")," you deploy this to production."),(0,o.kt)("p",null,"So, with Angular, we write our applications using JavaScript (since that's the language that web browsers understand). However, we write that JavaScript by ",(0,o.kt)("em",{parentName:"p"},"first")," writing that code using a superset of JavaScript called TypeScript. Given just plain old JavaScript, the TypeScript compiler will detect a huge number of potential typos and other problems that might cause problems in actually running your application (when it is too late)."),(0,o.kt)("p",null,"Professional software developers spend a lot of time creating ways to produce code where problems can be detected earlier as opposed to later. Inspired by the branch of enginnering created in the 1940's and 1950's called ",(0,o.kt)("strong",{parentName:"p"},"Cybernetics"),', we use the term "feedback loops" when talking about this stuff.'),(0,o.kt)("p",null,"As developers we want a ",(0,o.kt)("em",{parentName:"p"},"fast")," ",(0,o.kt)("strong",{parentName:"p"},"Inner Feedback Loop"),'. The inner feedback loop is everything that happens while you are working on the code, on your machine. We say "if whatever I just did could cause a problem when the user is using this application (the far-end of the ',(0,o.kt)("strong",{parentName:"p"},"Outer Feedback Loop"),"), let me know ",(0,o.kt)("em",{parentName:"p"},"now"),'.".'),(0,o.kt)("p",null,"In Angular, using the TypeScript language is only the first part of creating this feedback loop."),(0,o.kt)("h2",{id:"html-and-the-document-object-model"},"HTML and the Document Object Model"),(0,o.kt)("p",null,'For example, browsers are pretty forgiving when it comes to using HTML properly. While HTML has "rules", and is a somewhat fixed vocabulary, web browsers don\'t complain much if you do something wrong. For example, a code snippet of HTML like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Atrocious HTML"',title:'"Atrocious','HTML"':!0},'<h1>Super Site!<p>Created by a rad programmer</p>\n\n<p class="pretty" class="important">I hope you Enjoy it</p>\n\n<do-big-popup-thing-here />\n\n')),(0,o.kt)("p",null,'Contains many errors according to the "rules" of HTML. For example, ',(0,o.kt)("em",{parentName:"p"},"according to HTML"),", an ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," element can't contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," element inside of it, and if it did contain another element, it needs a closing tag. Attributes can only appear once per element (notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," element has the ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute defined twice?), and the ",(0,o.kt)("inlineCode",{parentName:"p"},"do-big-popup-thing-here")," element is not a part of the HTML set of valid elements (last time I checked!)."),(0,o.kt)("p",null,"But ",(0,o.kt)("em",{parentName:"p"},"imagine")," what a bad user experience it would be if everytime you browsed to a web page that had ",(0,o.kt)("em",{parentName:"p"},"some kind")," of error in the markup, the browser displayed an error message, or simply refused to display the page? It would suck! So mostly browsers just do their best to figure out what should be displayed, and do that."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Believe it or not, we got really close to a web where if developers didn't create correct markup, browsers would refuse to display the page. Google did a little research (they basically ",(0,o.kt)("em",{parentName:"p"},"are")," a database of ",(0,o.kt)("em",{parentName:"p"},"everything")," that is on the web) and something like 90% of the web would have gone black if the XHTML fascists had their way.")),(0,o.kt)("p",null,"The problem is, while the ",(0,o.kt)("a",{parentName:"p",href:"https://w3c.org"},"World Wide Web Consortium")," does specify what is considered ",(0,o.kt)("em",{parentName:"p"},"proper")," HTML, it does ",(0,o.kt)("em",{parentName:"p"},"not")," specify what browsers should do if the HTML is ",(0,o.kt)("em",{parentName:"p"},"improper"),". It's pretty much up to the browser manufacturers. That means that the browser you are testing your HTML on might handle it in a way you don't detect, but another may display it in a completely different way."),(0,o.kt)("p",null,"The way Angular helps us with this in our ",(0,o.kt)("em",{parentName:"p"},"inner feedback loop")," is that it actually doesn't use HTML ",(0,o.kt)("em",{parentName:"p"},"at all"),". Similar to how we use TypeScript to produce our JavaScript (and verify it!), we use Angular Templates to create the Document Object Model in the browser."),(0,o.kt)("h3",{id:"the-document-object-model"},"The Document Object Model"),(0,o.kt)("p",null,'What you see displayed in a web browser is a projected, "painted" version of an in-memory hierarchy of objects called the Document Object Model (DOM). This DOM is created automatically (',(0,o.kt)("em",{parentName:"p"},"declaratively"),") when we send some HTML to the browser. The browser reads that HTML as a set of instructions for creating a hierarchy of objects in memory, then uses that object model to draw the page on your screen. Once the DOM is created, it has an API that JavaScript code can access and manipulate. On the next paint cycle (about 16.666 milliseconds on a 60hz display), the screen is painted again reflecting your changes."),(0,o.kt)("p",null,"When we write Angular applications, almost zero HTML is sent to the browser. We write ",(0,o.kt)("em",{parentName:"p"},"code")," that ",(0,o.kt)("em",{parentName:"p"},"programatically")," created the DOM. It's a bit weird. Try to follow here, and don't worry, pretty soon you'll be ",(0,o.kt)("em",{parentName:"p"},"doing")," this, so it will most likely sink more then."),(0,o.kt)("h3",{id:"angular-templates"},"Angular Templates"),(0,o.kt)("p",null,"In Angular you define your application logic using the TypeScript programming language ",(0,o.kt)("em",{parentName:"p"},"and")," by using Angular Templates. Where TypeScript can be considered a superset of JavaScript, templates are a superset of HTML. In other words, you write HTML. That HTML is ",(0,o.kt)("em",{parentName:"p"},"compiled")," into JavaScript code that creates the DOM in the browser. As with TypeScript, that means there is an intermediate step (feedback loop) between what we create and what gets delivered to production. The compiler can check to make sure we are using HTML correctly. That sample above? It would never compile. And, again, like TypeScript's relationship to JavaScript, HTML templates ",(0,o.kt)("em",{parentName:"p"},"add")," to the functionality of HTML. Events on HTML elements are able to be safely connected to our code that responds to those events. Changes in our application state (the data we have in memory in our applications) can be ",(0,o.kt)("em",{parentName:"p"},"automatically")," detected and updated where it counts: In the DOM where the users see it. In addition to this, Angular has mechanisms in which we can extend the functionality of the HTML compiler with ",(0,o.kt)("inlineCode",{parentName:"p"},"directives")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"components"),'. We will learn how to create both of these in this tutorial. This means, for example, you could really have a "custom element" called ',(0,o.kt)("inlineCode",{parentName:"p"},"<do-big-popup-thing-here />")," in your application if you needed to. This is ",(0,o.kt)("em",{parentName:"p"},"huge"),". HTML is a huge success story, but it's success is largely because it is so ",(0,o.kt)("em",{parentName:"p"},"generic"),". You can use HTML to create a web site for a dog grooming business, a Fortune 500 insurance company, the Vatican, or an adult site. There is nothing specifically in HTML about any of those businesses. That's great, but it makes it hard for us to both ",(0,o.kt)("em",{parentName:"p"},"reason")," about the structure of our application, and to build a conceptual model that allows us to continue to grow, change, and adapt our application ",(0,o.kt)("em",{parentName:"p"},"over time"),"."),(0,o.kt)("p",null,"It's great (really, I mean it) that even the most miniscule typos in our HTML will surface as errors when we build our application. It can be a little annoying at first because you might realize how many dumb things you've done that didn't ",(0,o.kt)("em",{parentName:"p"},"seem"),' to cause any problems for anyone. "What!? I put elements inside an ',(0,o.kt)("inlineCode",{parentName:"p"},"h1"),' all the time! Never hurt me!" - but remember, what we want is as few "Heisenberg bugs" as possible. Those are the issues that show up only ',(0,o.kt)("em",{parentName:"p"},"sometimes"),". Sure, pleacing an element inside an inline element like an ",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," maybe never caused you any problems in the past, but then there is some new release of some obscure Android browser, for example, that decides to handle that violation of the rules differently that ",(0,o.kt)("em",{parentName:"p"},"does")," cause a problem. Better safe than sorry."),(0,o.kt)("h4",{id:"angular-language-server"},"Angular Language Server"),(0,o.kt)("p",null,'The Angular team ships a tool called a "language server". This is ',(0,o.kt)("em",{parentName:"p"},"all about"),' the inner loop. What language servers do is they are used by our development tools to ask questions more specific about the type of code we are writing more subjectively than a mere compiler. For example, TypeScript (which pretty much introduced the "language server" idea) also has a language server, and we can configure our development tools to feed it the code we are writing to get it\'s opinion on what we are doing. "I know this is valid code, but is it ',(0,o.kt)("em",{parentName:"p"},"good code"),'?".'),(0,o.kt)("p",null,"The Angular Language Server can use an extension or plugin for your development tool (here we will use Visual Studio Code and the Angular Language Service extension) to give us feedback even ",(0,o.kt)("em",{parentName:"p"},"before")," we compile the application - as we write it! So, if you make a mistake in your templates, it will surface as a visible error or warning in your editor before you even hit save. It can also offer code completions, and even some fixes and refactorings that can make your code better."),(0,o.kt)("h2",{id:"css"},"CSS"),(0,o.kt)("p",null,"Cascading Style Sheets are a ",(0,o.kt)("em",{parentName:"p"},"whole other world"),". They are a kind of programming language, based on setting up rules that select various elements that live in the DOM and applying values to specific stylistic properties to those elements."),(0,o.kt)("p",null,"For example, you might decide that in your application you want ",(0,o.kt)("em",{parentName:"p"},"all")," buttons to have the following styles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"button {\n    padding: 1.8em;\n    background-color: 'goldenrod',\n    color: 'green'\n}\n")),(0,o.kt)("p",null,"If this style was applied to your application, ",(0,o.kt)("em",{parentName:"p"},"all")," buttons would have that styling. Except if they don't. That's where the \"cascading\" part of CSS comes in. A developer could say that they want a ",(0,o.kt)("em",{parentName:"p"},"particular")," button to be a little bigger. They could add ",(0,o.kt)("em",{parentName:"p"},"another")," style sheet, but that might impact things that already exist, or things to be added in the future."),(0,o.kt)("p",null,"Styling stuff is hard and takes a lot of talent and training, and since styling changes can impact things like layout, flow, etc. they are a bit dangerous. If we are building a ",(0,o.kt)("em",{parentName:"p"},"big")," Angular application, being worked on by many different people, we want to be sure that we don't get changes appropriate in one part of the application to adversely affect other parts."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"That kind of thing - styling changes - is ",(0,o.kt)("em",{parentName:"p"},"challenging")," to write automated tests for (we'll talk about automated testing later). This means a change in the styling is often not detected in our testing cycle.")),(0,o.kt)("p",null,'Angular has a pretty clever way of helping us to largely avoid those kind of issues. It defines a central place for any "global" styles in our application, and then mechanisms for preventing changes in one portion of our application (a component or a feature) from "leaking" into other parts of our application.'),(0,o.kt)("p",null,"Like with our TypeScript and Templates discussion above, Angular also has a way to allow us to process CSS as part of the build process. Various mechanisms can be used (or none at all), including SCSS, SASS, and Post-CSS. We will discuss the advantages of this in later sections in the training."),(0,o.kt)("h2",{id:"assets-images-etc"},"Assets (Images, Etc.)"),(0,o.kt)("p",null,'The last part of our "deliverables" as a frontend developer are assets like images, logos, videos, etc. While we can also use ',(0,o.kt)("inlineCode",{parentName:"p"},"img")," tags to pull these kinds of things into the browser for our user from other servers (static servers, CDNs, whatever), some assets will be specific to our application and most likely will be hosted along with your application."),(0,o.kt)("p",null,"We have to make sure that when we ",(0,o.kt)("em",{parentName:"p"},"build")," our application, those items are part of our build artifacts so they are on the web server and we don't have a bunch of missing images, etc."),(0,o.kt)("p",null,"Angular allows you to do this, and we will learn how. In addition, doing image optimzation is very important. There is no reason to send images that are scaled to a specific size in the DOM to be sent to the browser at a higher resolution than the browser or device can display. We have to images at an appropriate resolution for the ",(0,o.kt)("em",{parentName:"p"},"best")," possible display they can be seen on, but then alternate versions for the times when someone is, for example, accessing our application on a crappy old Android work phone with a bad display. It would be wasted bandwidth (maybe even using some of their data plan), and delaying the time it takes for the image to be transferred."),(0,o.kt)("p",null,'In addition, sometimes images in particular are purely "ornamental". Someone might think the picture of the CEO playing with their dog wistfully in the yard is ',(0,o.kt)("em",{parentName:"p"},"important"),", but if that is what is keeping our users from getting to what they need while they wait for it to ",(0,o.kt)("em",{parentName:"p"},"download"),", it can be an issue. So we need a way to set a priority on our images."),(0,o.kt)("p",null,"Angular has a facility for dealing with all of this (spoiler: ",(0,o.kt)("inlineCode",{parentName:"p"},"NgOptimizedImage")," directive), and we'll learn the basics of using it."),(0,o.kt)("h2",{id:"development-server"},"Development Server"),(0,o.kt)("p",null,"If you put even an accomplished \"web developer\" from the early 2000's in front of the source code for an Angular application they'd be ",(0,o.kt)("em",{parentName:"p"},"lost"),". There is no obvious HTML files, if they find the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," they'd be shocked to see it's practically empty! Where is the JavaScript? Where are the CSS files? When you build your application (discussed next), there will be a folder with that stuff in it - the HTML, the JavaScript, the CSS, the assets, etc. They would recognize ",(0,o.kt)("em",{parentName:"p"},"that")," (but be shocked and probably nauseated a bit by how much JavaScript there is and how impossible it is to read!)."),(0,o.kt)("p",null,"But the process is sort of upside down for us now. In the old days you'd ",(0,o.kt)("em",{parentName:"p"},"start")," with the HTML, the CSS, the JavaScript etc. Now we start with these ",(0,o.kt)("em",{parentName:"p"},"weird")," abstractions - TypeSCript, templates,"),(0,o.kt)("p",null,"So you have these two worlds:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"I have the source code - my TypeScript, my CSS, all that stuff. It doesn't do ",(0,o.kt)("em",{parentName:"li"},"anything"),". You can't load that stuff in a browser!"),(0,o.kt)("li",{parentName:"ol"},"When I ",(0,o.kt)("em",{parentName:"li"},"build")," it, I get stuff I can load into a browser - the HTML, the CSS, and the JavaScript!")),(0,o.kt)("p",null,"That's not a very good ",(0,o.kt)("em",{parentName:"p"},"feedback loop"),"."),(0,o.kt)("p",null,'Angular has a "development server". This is a tool you run while you are working on your application that "watches" what you do, and recompiles the application for you every time you make a change. It tells you if that was a good change or not. If it was a good change it creates a ',(0,o.kt)("em",{parentName:"p"},"close approximation"),' of what you will get when you do the final "build" of your application for production. It even starts a little dumb web server on your machine and let\'s you see what the application looks like ',(0,o.kt)("em",{parentName:"p"},"right now"),", ",(0,o.kt)("em",{parentName:"p"},"if you would build it"),". We'll do this almost first thing. It's cool as heck."),(0,o.kt)("h2",{id:"building-your-application"},"Building Your Application"),(0,o.kt)("p",null,"When we are at a point where we want to actually ",(0,o.kt)("em",{parentName:"p"},"deliver")," something (in other words, it isn't going to be very useful just running on the development server on our laptop or whatever), Angular can build your application for you. It will create the artifacts - the HTML, CSS, JavaScript, assets, etc. - so that they can be ",(0,o.kt)("em",{parentName:"p"},"deployed")," to a web server. This is a slower process than running your development server, because at this stage the compiler does really intense ",(0,o.kt)("em",{parentName:"p"},"deep")," checking of things, and most importantly it ",(0,o.kt)("em",{parentName:"p"},"optimizes")," your code. The build process really tries to create the ",(0,o.kt)("em",{parentName:"p"},"smallest amount of JavaScript, etc.")," possible to run your application. It renames your big elegant intention revealing class and method names to save some bytes, it gets rid of any code that your application isn't actually using. We'll see how to do this at tend of this lesson."))}d.isMDXComponent=!0}}]);