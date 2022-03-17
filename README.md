# Typescript-React Starter Template

`create-react-app` and frameworks that give you a lot of magic out of the box are great, and sometimes more than you need. I've pulled together a handful of different resources and extracted pieces of them to compile a basic starter template that can be used as a bootstrap for starting a minimalist typescript-react project.

## Features
- Typescript (.ts, .tsx)
- React (the standard library)
- Babel transpilation
  - Adding `preset-env` for all the polyfills is a WIP
- Webpack configuration
  - Typescript loading
  - Dev-server (with hot module reloading)
  - (WIP) CSS Loader

## Usage
Note: These instructions are for the out of the box template. Once you start to diverge from the template, these instructions will no longer apply.

- Clone this repo.
- Copy its contents.
- Remove the `.git` folder.
- Run `git init` in the copied directory to start your own repo for your project.
- Run `yarn start` to run a simple `webpack-dev-server` command get started.
- Visit `http://localhost:3000` to see `Hello, World` in the browser.
- Have fun coding.

## Caveats
- This template is subject to change and does not guarantee long-term support; it's just a template. Fork this or clone and change it to get up and running.
- This template is opinionated.

### Resources
- A couple of articles I skimmed as guides for overall direction:
  - https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658
  - https://dev.to/underscorecode/creating-your-react-project-from-scratch-without-create-react-app-the-complete-guide-4kbc
- Webpack references that I found useful:
  - https://webpack.js.org/configuration/dev-server/#devserverhot
  - https://webpack.js.org/configuration/output/#outputpath
  - https://webpack.js.org/configuration/output/#outputpublicpath
  - https://webpack.js.org/configuration/resolve/#resolveextensions
  - https://webpack.js.org/guides/typescript/
- Typescript references I found useful:
  - https://www.typescriptlang.org/tsconfig
- Babel:
  - https://babeljs.io/docs/en/usage
  - https://babeljs.io/docs/en/babel-preset-env#usebuiltins


