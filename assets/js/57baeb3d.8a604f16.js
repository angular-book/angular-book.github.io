"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3890:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const o={position:"relative",width:"fit-content",height:"fit-content"};function a(e){let{id:t}=e;const r=`https://player.vimeo.com/video/${t}?h=e031fbcf01&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;return n.createElement("div",{style:o},n.createElement("iframe",{allow:"autoplay;",allowFullScreen:!0,style:{border:"none"},src:r,width:"640",height:"360"}),n.createElement("script",{src:"https://player.vimeo.com/api/player.js"}))}},1182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905)),a=r(3890);const i={sidebar_position:3.5},l="Compiling and Serving your Application",p={unversionedId:"Angular-101/dev-server",id:"Angular-101/dev-server",title:"Compiling and Serving your Application",description:'Ultimately, your Angular application will be built for "production". It will just be an HTML file, some CSS, and a few JavaScript files.',source:"@site/docs/02-Angular-101/dev-server.md",sourceDirName:"02-Angular-101",slug:"/Angular-101/dev-server",permalink:"/docs/Angular-101/dev-server",draft:!1,tags:[],version:"current",sidebarPosition:3.5,frontMatter:{sidebar_position:3.5},sidebar:"angular101",previous:{title:"Creating an Angular App",permalink:"/docs/Angular-101/creating-angular-app"},next:{title:"Angular Project File Structure",permalink:"/docs/Angular-101/file-structure"}},c={},s=[{value:"The Dev Process",id:"the-dev-process",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compiling-and-serving-your-application"},"Compiling and Serving your Application"),(0,o.kt)("p",null,'Ultimately, your Angular application will be built for "production". It will just be an HTML file, some CSS, and a few JavaScript files. '),(0,o.kt)("p",null,"While we are doing development work, however, we can compile and run our application on our local machine. "),(0,o.kt)("p",null,"The Angular CLI has a command called ",(0,o.kt)("inlineCode",{parentName:"p"},"serve")," that will compile your application's source code ",(0,o.kt)("em",{parentName:"p"},"in memory")," and start a development web server and push our compiled code to the browser."),(0,o.kt)("p",null,"Every time we save a file, the application will be recompiled and those changes will be pushed immediately to our browser for us to see the changes."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ng serve")," command does this work, and starts the web server on your local machine at TCP port 4200, by default. By passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," option, you can tell Angular to just open this in your web browser for you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ng serve -o\n")),(0,o.kt)(a.Z,{id:"816579558",mdxType:"EmbedVideo"}),(0,o.kt)("h2",{id:"the-dev-process"},"The Dev Process"),(0,o.kt)("p",null,"While we are working on our Angular application, we will leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"ng serve")," process running. It is a ",(0,o.kt)("em",{parentName:"p"},"stateful compiler")," and a ",(0,o.kt)("em",{parentName:"p"},"web server"),". It will monitor our source code files for changes, recompile our application, and make it available through a simple web server at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4200"),". You just leave this thing running while you are working on your application."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"If you ever need to shut it down (you are at the end of the day, or you want to restart it, etc.) you can click in the terminal window where it is running and hit ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Ctrl+C")," to send it an interrupt. We are used to using the ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Ctrl+C")," keyboard combination for copying items to the clipboard, but in a terminal window it sends a signal to tell the process you'd like it to stop.")))}m.isMDXComponent=!0}}]);