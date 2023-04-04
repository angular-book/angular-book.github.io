---
sidebar_position: 1
title: Installing Angular CLI
---

# Installing the Angular CLI

import EmbedVideo from "@site/src/components/VideoEmbed";

The Angular CLI (Command Line Interface) is a suite of tools maintained by the Angular team for creating, developing, testing, and delivering Angular applications.

:::caution
Make sure you have at least the current LTS version of Node and the Node Package Manager Installed
:::

We will install the Angular CLI globally. This means once the command installs successfully, you will have a new command (`ng`) on your path. The `ng` command is the entry-point to the Angular CLI.

```shell
npm i -g @angular/cli
```

<EmbedVideo id="814286011" />

:::note This is A Prototype
In later sections, we will use an Nx Workspace as a way to manage our Angular
application. It uses some of the features of the Angular CLI behind the scenes, so
knowing a bit about it is helpful.
:::
