---
sidebar_position: 3
---

import EmbedVideo from "@site/src/components/VideoEmbed";

# Creating an Angular App

We are going to create a bare-bones Angular application. We are going to use this section to get our bearings, so to speak, and learn about the various abstractions that are commonly used in Angular apps.

- Components, including the "root" component.
- Using the Angular CLI to generate components.
- Component communication (inputs/outputs)
- Using Directives
- Using Pipes

We are using Angular 15, and we will prefer to use stand-alone components and not use modules. A later section will explain modules, etc. for legacy reasons.

We will use the Angular CLI to create a minimal Angular app. The `--minimal` flag on `ng new` will mean we'll get no tests, and it will set some defaults for how components and things are created.

⚒️ Go to a command prompt and navigate to a directory where you want to store you work.

```shell
ng new frontend --minimal
```

We'll say no to adding a routing (we will add it in later), and just use plain old CSS.

<EmbedVideo id="814608298" />

## VsCode Setup

TODO: Put some stuff here about VS Code, enabling the Angular Language Service extension,
and a `.vscode/settings.json` file.

`settings.json`:

```json
{
  "editor.formatOnSave": true,
  "files.autoSave": "onFocusChange",
  "editor.minimap.enabled": false
}
```

TODO:

- Make the app.component standalone.
- Delete app module.
- Change `main.ts` to be:

```ts
bootstrapApplication(AppComponent);
```
