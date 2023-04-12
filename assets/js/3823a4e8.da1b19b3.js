"use strict";(self.webpackChunkangular_book_github_io=self.webpackChunkangular_book_github_io||[]).push([[347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,d=m["".concat(p,".").concat(u)]||m[u]||h[u]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4.1},r="The AppComponent",l={unversionedId:"Angular-101/app-component",id:"Angular-101/app-component",title:"The AppComponent",description:'The "root" component - the one that contains the hierarchy of all the components in your Angular application is called the app.component.ts.',source:"@site/docs/02-Angular-101/app-component.md",sourceDirName:"02-Angular-101",slug:"/Angular-101/app-component",permalink:"/docs/Angular-101/app-component",draft:!1,tags:[],version:"current",sidebarPosition:4.1,frontMatter:{sidebar_position:4.1},sidebar:"angular101",previous:{title:"Angular Components",permalink:"/docs/Angular-101/components"},next:{title:"\u2692\ufe0f Modifying the App Component",permalink:"/docs/Angular-101/modifying-app-component"}},p={},s=[],c={toc:s},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-appcomponent"},"The AppComponent"),(0,o.kt)("p",null,'The "root" component - the one that contains the hierarchy of all the components in your Angular application is called the ',(0,o.kt)("inlineCode",{parentName:"p"},"app.component.ts"),". "),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.html")," file, the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," element has a single reference to this components ",(0,o.kt)("em",{parentName:"p"},"selector"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"app-root"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'showLineNumbers title="src/index.html"',showLineNumbers:!0,title:'"src/index.html"'},'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Frontend</title>\n  <base href="/">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="icon" type="image/x-icon" href="favicon.ico">\n</head>\n<body>\n// highlight-next-line\n  <app-root></app-root>\n</body>\n</html>\n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/app.component.ts")," file, the component is defined (by ",(0,o.kt)("inlineCode",{parentName:"p"},"ng new"),") as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers title="src/app/app.component.ts"',showLineNumbers:!0,title:'"src/app/app.component.ts"'},'import { Component } from \'@angular/core\';\n\n@Component({\n// highlight-next-line\n  selector: \'app-root\',\n  template: `\n    \x3c!--The content below is only a placeholder and can be replaced.--\x3e\n    <div style="text-align:center" class="content">\n      <h1>\n        Welcome to {{title}}!\n      </h1>\n      <span style="display: block">{{ title }} app is running!</span>\n      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">\n    </div>\n    <h2>Here are some links to help you start: </h2>\n    <ul>\n      <li>\n        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>\n      </li>\n      <li>\n        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>\n      </li>\n      <li>\n        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>\n      </li>\n    </ul>\n    \n  `,\n  styles: []\n})\nexport class AppComponent {\n  title = \'frontend\';\n}\n')),(0,o.kt)("p",null,"Components are a TypeScript class (line 30), with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Component")," metadata decorator. This decorator is defined by the Angular team and contains an object with configuration Angular uses to track and display the component. "),(0,o.kt)("p",null,"A brief explanation of the properties of the configuration for this ",(0,o.kt)("inlineCode",{parentName:"p"},"@Component()"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selector"),': This is the "name" of this component and can be used in templates as a "custom" HTML element indicating we would like to display this component at this point in the DOM hierarchy. With this component, you\'ll notice, the selector is set to ',(0,o.kt)("inlineCode",{parentName:"li"},"app-root"),", and that is what appears in the ",(0,o.kt)("inlineCode",{parentName:"li"},"index.html")," template on line 11."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"template"),": This is the default template for this component. It currently has a multi-line TypeScript literal string (denoted by the back ticks) with some HTML content. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Note"),": This is an ",(0,o.kt)("em",{parentName:"li"},"inline template"),". Templates can also be kept in separate files, in which case you remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"template")," property and replace it with a ",(0,o.kt)("inlineCode",{parentName:"li"},"templateUrl")," property with the path to the template file."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"styles"),": This is an array of strings with CSS selectors and rules. These are styles that are added for ",(0,o.kt)("em",{parentName:"li"},"this")," component, in addition to the styles defined in the ",(0,o.kt)("inlineCode",{parentName:"li"},"src/styles.css")," file.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Note"),": Like the template property, components can ",(0,o.kt)("em",{parentName:"li"},"also")," have a ",(0,o.kt)("inlineCode",{parentName:"li"},"stylesUrl")," property that is an array of additional styles to use. Unlike ",(0,o.kt)("inlineCode",{parentName:"li"},"template")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"templateUrl"),", the components ",(0,o.kt)("inlineCode",{parentName:"li"},"styles"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"stylesUrl")," can be both used in a component.")))),(0,o.kt)("p",null,"The component class itself has a single string property called ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),". Notice in the template, on line nine, there is an Angular ",(0,o.kt)("em",{parentName:"p"},"Binding Expression")," (delimeted by double curly braces). This tells Angular to display the content of this property at this location."),(0,o.kt)("p",null,"In the next section, we will modify the App Component."))}h.isMDXComponent=!0}}]);