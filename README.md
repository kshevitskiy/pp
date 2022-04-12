# GitHub Members App

## Development

All `bash` commands must be executed from project root direcory

**Add required environment variables**

```bash
cp .env.sample .env # to create .env file copy env variables
```

**Setup Node version**

```bash
nvm use # to change current Node version
```

**Installing dependencies**

```bash
yarn install # to install dependencies
```

**Start developing**

```bash
yarn dev # to start dev server
```

## Deploy

```bash
yarn build # to build app for production
```

## Test

```bash
yarn test # for unit and e2e tests

yarn test:unit # for unit tests

yarn test:integration # for e2e tests
```

## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
