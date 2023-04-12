"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[2400],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(g,p(p({ref:n},c),{},{components:t})):o.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:4.3},p="Standalone Components and Modules",i={unversionedId:"Angular-101/standalone-components",id:"Angular-101/standalone-components",title:"Standalone Components and Modules",description:"Historically, for a component to be recognized as part of an Angular application, it had to be declared as part of a TypeScript class with the NgModule decorator. When we generated this minimal applicaton with ng new It created an module called src/app/app.module.ts as follows:",source:"@site/docs/02-Angular-101/standalone-components.md",sourceDirName:"02-Angular-101",slug:"/Angular-101/standalone-components",permalink:"/docs/Angular-101/standalone-components",draft:!1,tags:[],version:"current",sidebarPosition:4.3,frontMatter:{sidebar_position:4.3},sidebar:"angular101",previous:{title:"\u2692\ufe0f Modifying the App Component",permalink:"/docs/Angular-101/modifying-app-component"},next:{title:"\u2692\ufe0f Converting To Standalone Components",permalink:"/docs/Angular-101/standalone-component-work"}},l={},s=[],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"standalone-components-and-modules"},"Standalone Components and Modules"),(0,r.kt)("p",null,"Historically, for a component to be recognized as part of an Angular application, it had to be declared as part of a TypeScript class with the ",(0,r.kt)("inlineCode",{parentName:"p"},"NgModule")," decorator. When we generated this minimal applicaton with ",(0,r.kt)("inlineCode",{parentName:"p"},"ng new")," It created an module called ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/app.module.ts")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers title="src/app/app.module.ts"',showLineNumbers:!0,title:'"src/app/app.module.ts"'},"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\n\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n")),(0,r.kt)("p",null,'Since Angular 15, Angular supports the idea of "Standalone Components", which largely negate the need for Module classes. You can see here that the ',(0,r.kt)("inlineCode",{parentName:"p"},"@NgModule")," data includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"declarations")," section with our ",(0,r.kt)("inlineCode",{parentName:"p"},"AppComponent")," (line 8), and then ",(0,r.kt)("em",{parentName:"p"},"also")," adds it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap")," array on line 14. The ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap")," property, in a module, tells Angular that this is the component that owns the selector that will be referenced in the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),". "),(0,r.kt)("p",null,"If you look in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main.ts"),' (remember, this is where the Angular application "starts"), it is starting up our application using this module.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers title="/src/main.ts"',showLineNumbers:!0,title:'"/src/main.ts"'},"import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { AppModule } from './app/app.module';\n\n// highlight-next-line\nplatformBrowserDynamic().bootstrapModule(AppModule)\n  .catch(err => console.error(err));\n")),(0,r.kt)("p",null,"While using ",(0,r.kt)("inlineCode",{parentName:"p"},"NgModules")," is still supported, and ",(0,r.kt)("em",{parentName:"p"},"may")," be useful in some situations, we will switch to using Standalone components. This still does not require us to use ",(0,r.kt)("inlineCode",{parentName:"p"},"NgModules"),", and, in my opinion, makes your Angular components more intention revealing - you don't have to look somewhere else (the ",(0,r.kt)("inlineCode",{parentName:"p"},"NgModule"),") to see it's dependencies, etc."),(0,r.kt)("p",null,"In our next section we will switch our ",(0,r.kt)("inlineCode",{parentName:"p"},"app.component.ts")," to be a standalone component, delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.module.ts"),", and update our ",(0,r.kt)("inlineCode",{parentName:"p"},"main.ts")," to use our ",(0,r.kt)("inlineCode",{parentName:"p"},"AppComponent")," to bootstrap the application."))}d.isMDXComponent=!0}}]);