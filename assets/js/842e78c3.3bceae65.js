"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[6876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||l;return t?a.createElement(d,i(i({ref:n},c),{},{components:t})):a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3890:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);const r={position:"relative",width:"fit-content",height:"fit-content"};function l(e){let{id:n}=e;const t=`https://player.vimeo.com/video/${n}?h=e031fbcf01&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;return a.createElement("div",{style:r},a.createElement("iframe",{allow:"autoplay;",allowFullScreen:!0,style:{border:"none"},src:t,width:"640",height:"360"}),a.createElement("script",{src:"https://player.vimeo.com/api/player.js"}))}},1618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),l=t(3890);const i={sidebar_position:1,title:"\u2692\ufe0f Installing Angular CLI"},o="Installing the Angular CLI",s={unversionedId:"Angular-101/lab-installing-angular-cli",id:"Angular-101/lab-installing-angular-cli",title:"\u2692\ufe0f Installing Angular CLI",description:"The Angular CLI (Command Line Interface) is a suite of tools maintained by the Angular team for creating, developing, testing, and delivering Angular applications.",source:"@site/docs/02-Angular-101/lab-installing-angular-cli.md",sourceDirName:"02-Angular-101",slug:"/Angular-101/lab-installing-angular-cli",permalink:"/docs/Angular-101/lab-installing-angular-cli",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u2692\ufe0f Installing Angular CLI"},sidebar:"angular101",previous:{title:"Angular On-Boarding",permalink:"/docs/Angular-101/summary"},next:{title:"Creating an Angular App",permalink:"/docs/Angular-101/creating-angular-app"}},u={},c=[],p={toc:c},g="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-the-angular-cli"},"Installing the Angular CLI"),(0,r.kt)("p",null,"The Angular CLI (Command Line Interface) is a suite of tools maintained by the Angular team for creating, developing, testing, and delivering Angular applications."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you have at least the current LTS version of Node and the Node Package Manager Installed")),(0,r.kt)("p",null,"We will install the Angular CLI globally. This means once the command installs successfully, you will have a new command (",(0,r.kt)("inlineCode",{parentName:"p"},"ng"),") on your path. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ng")," command is the entry-point to the Angular CLI."),(0,r.kt)("p",null,"\u2692\ufe0f Go to a shell and run the following command. This is a global command, so it doesn't matter what directory you are in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g @angular/cli\n")),(0,r.kt)(l.Z,{id:"814286011",mdxType:"EmbedVideo"}),(0,r.kt)("admonition",{title:"This is A Prototype",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In later sections, we will use an Nx Workspace as a way to manage our Angular\napplication. It uses some of the features of the Angular CLI behind the scenes, so\nknowing a bit about it is helpful.")))}m.isMDXComponent=!0}}]);