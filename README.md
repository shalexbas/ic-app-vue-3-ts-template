# Difference to https://github.com/MioQuispe/create-ic-app

- this template just supports vue 3 with ts + eslint + prettier
- this template provides support for dfx 0.8.0 and its code generation + ic-agent autocompletion
- hot-reload dev-server provided
- based on work in https://github.com/MioQuispe/create-ic-app

# How to use

- first run npm install and then dfx deploy (to generate .did files)
- src/... contains fe (vue 3) code
- src_backend/... contains canister code
- script "copy:types" copies all the generated .did files to "src/declarations/" that is why this directory is gitignored
- for every new canister you need to define new agent in src/agent_factory.ts or another file of your choice (see agent_factory.ts as inspiration)
  - to define new agent you need to define an env-variable (containing the canister-id) similar to env-variable in src/declarations/ but with "VITE_APP_" prefix (see agent_factory.ts as example), vite.config.ts contains code to initialize those canister-env-variables
  - you can use factory-methods from the generated code (src/declarations/) (see agent_factory.ts as example)
- build script runs in staging-mode with "development" NODE-ENV because the generated code (src/declarations/) use NODE-ENV to decide if root-key should be fetched (this should only be done in development)
  - if you want build for production then you need to switch mode in build-script to production

# Feedback is welcome!



# Vue 3 + Typescript + Vite + ESLINT + PRETTIER + >=dfx 0.8.0

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
