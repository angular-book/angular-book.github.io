"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[1620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,p(p({ref:t},c),{},{components:n})):o.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3890:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294);const r={position:"relative",width:"fit-content",height:"fit-content"};function a(e){let{id:t}=e;const n=`https://player.vimeo.com/video/${t}?h=e031fbcf01&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;return o.createElement("div",{style:r},o.createElement("iframe",{allow:"autoplay;",allowFullScreen:!0,style:{border:"none"},src:n,width:"640",height:"360"}),o.createElement("script",{src:"https://player.vimeo.com/api/player.js"}))}},572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905)),a=n(3890);const p={sidebar_position:4.31},i="\u2692\ufe0f Converting To Standalone Components",l={unversionedId:"Angular-101/Uncategorized/standalone-component-work",id:"Angular-101/Uncategorized/standalone-component-work",title:"\u2692\ufe0f Converting To Standalone Components",description:"To convert our application to use Standalone components, we will mark our component's metadata to indicate that it is a standalone component, and replace the code in our /src/main.ts to bootstrap our application with our standalone AppComponent.",source:"@site/docs/02-Angular-101/30-Uncategorized/standalone-component-work.md",sourceDirName:"02-Angular-101/30-Uncategorized",slug:"/Angular-101/Uncategorized/standalone-component-work",permalink:"/docs/Angular-101/Uncategorized/standalone-component-work",draft:!1,tags:[],version:"current",sidebarPosition:4.31,frontMatter:{sidebar_position:4.31},sidebar:"angular101",previous:{title:"Standalone Components and Modules",permalink:"/docs/Angular-101/Uncategorized/standalone-components"},next:{title:"Cross Component Communication - Services",permalink:"/docs/Angular-101/Uncategorized/services"}},s={},c=[{value:"Step-By-Step",id:"step-by-step",level:2},{value:"Completed <code>/src/app/app.component.ts</code>",id:"completed-srcappappcomponentts",level:2},{value:"Completed <code>/src/main.ts</code>",id:"completed-srcmaints",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ufe0f-converting-to-standalone-components"},"\u2692\ufe0f Converting To Standalone Components"),(0,r.kt)("p",null,"To convert our application to use Standalone components, we will mark our component's metadata to indicate that it is a standalone component, and replace the code in our ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/main.ts")," to bootstrap our application with our standalone ",(0,r.kt)("inlineCode",{parentName:"p"},"AppComponent"),"."),(0,r.kt)("h2",{id:"step-by-step"},"Step-By-Step"),(0,r.kt)("p",null,"Here are the step-by-step instructions. A short video of the process is below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Delete the file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/app.module.ts"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Note"),": Your application will not be able to compile temporarily. We will fix this soon."))),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("inlineCode",{parentName:"li"},"app.component.ts")," metadata, add the property ",(0,r.kt)("inlineCode",{parentName:"li"},"standalone: true"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"src/main.ts"),", file, delete the code and use the ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrapApplication")," function to tell Angular to start with our ",(0,r.kt)("inlineCode",{parentName:"li"},"AppComponent"),".")),(0,r.kt)("h2",{id:"completed-srcappappcomponentts"},"Completed ",(0,r.kt)("inlineCode",{parentName:"h2"},"/src/app/app.component.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers title="/src/app/app.component.ts"',showLineNumbers:!0,title:'"/src/app/app.component.ts"'},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n// highlight-next-line\n  standalone: true,\n  template: `\n  <h1>Hello from {{title}}</h1>\n  `,\n  styles: []\n})\nexport class AppComponent {\n  title = 'Angular';\n}\n")),(0,r.kt)("h2",{id:"completed-srcmaints"},"Completed ",(0,r.kt)("inlineCode",{parentName:"h2"},"/src/main.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers title="/src/main.ts"',showLineNumbers:!0,title:'"/src/main.ts"'},'import { bootstrapApplication } from "@angular/platform-browser";\nimport { AppComponent } from "./app/app.component";\n\nbootstrapApplication(AppComponent);\n')),(0,r.kt)(a.Z,{id:"816960600",mdxType:"EmbedVideo"}))}u.isMDXComponent=!0}}]);