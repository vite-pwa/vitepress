<p align='center'>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/vite-pwa/.github/main/vitepress-hero-dark.svg" />
        <img src="https://raw.githubusercontent.com/vite-pwa/.github/main/vitepress-hero.svg" alt="@vite-pwa/vitepress - Zero-config PWA for VitePress">
    </picture>
</p>

<p align='center'>
<a href='https://npmx.dev/package/@vite-pwa/vitepress' target="__blank">
<img src='https://img.shields.io/npm/v/@vite-pwa/vitepress?color=33A6B8&label=' alt="NPM version">
</a>
<a href="https://npmx.dev/package/@vite-pwa/vitepress" target="__blank">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vite-pwa/vitepress?color=476582&label=">
</a>
<a href="https://unplugin-pwa.netlify.app/frameworks/vitepress" target="__blank">
    <img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20guides&color=2e859c" alt="Docs & Guides">
</a>
<br>
<a href="https://github.com/vite-pwa/vitepress" target="__blank">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/vite-pwa/vitepress?style=social">
</a>
</p>

<br>

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg" alt="Anthony Fu SVG sponsors image"/>
  </a>
</p>

## 🚀 Features

- 📖 [**Documentation & guides**](https://unplugin-pwa.netlify.app/)
- 👌 **Zero-Config**: sensible built-in default configs for common use cases
- 🔩 **Extensible**: expose the full ability to customize the behavior of the plugin
- 🦾 **Type Strong**: written in [TypeScript](https://www.typescriptlang.org/)
- 🔌 **Offline Support**: generate service worker with offline support (via Workbox)
- ⚡ **Fully tree shakable**: client virtual modules are strictly optimized for Dead Code Elimination.
- 📄 **Web Manifest**: auto-inject Web App Manifest and PWA assets seamlessly.
- 💬 **Prompt for new content**: built-in support for Vanilla JavaScript, Vue 3, React, Svelte, SolidJS and Preact
- ⚙️ **Stale-while-revalidate**: automatic reload when new content is available
- ✨ **Static assets handling**: configure static assets for offline support
- 🐞 **Development Support**: debug your custom service worker logic as you develop your application
- 🔍 **Inspector**: visually inspect your resolved configuration, web manifest and service worker during development, via middleware or [DevFrame](https://github.com/devframes/devframe)
- 🧩 **Modular**: use the ready-to-use plugins or compose your own integration from the building blocks in `@unplugin-pwa/core` and `@unplugin-pwa/vite`
- 📦 **Universal Bundlers**: native integration with Vite, Rolldown, Webpack (WIP), Rspack (WIP), and Rsbuild (WIP).
- 🛠️ **Meta-Frameworks**: seamless integration with [îles](https://github.com/ElMassimo/iles), [SvelteKit](https://github.com/sveltejs/kit), [VitePress](https://github.com/vuejs/vitepress), [Astro](https://github.com/withastro/astro), [Nuxt 3/4/5](https://github.com/nuxt/nuxt), [React Router](https://github.com/remix-run/react-router/), [TanStack](https://github.com/TanStack) and [Next](https://github.com/vercel/next.js/) (WIP).
- 💥 **PWA Assets Generator**: generate all the PWA assets from a single command and a single source image
- 🚀 **PWA Assets Integration**: serving, generating and injecting PWA Assets on the fly in your application

## 📦 Install

> From v2.0.0 `@vite-pwa/vitepress` using [@unplugin-pwa/vite](https://github.com/vite-pwa/unplugin-pwa/tree/main/packages/vite) and [@vite-pwa/workbox-build](https://github.com/vite-pwa/workbox/tree/main/packages/build). Requires Node 22.14.0 or above.

> From v0.3.0, `@vite-pwa/vitepress` requires **Vite 5** and **VitePress 1.0.0-rc.26 or above**.

> Using any version older than v0.3 requires Vite 3.1.0+.

```bash
npm i @vite-pwa/vitepress -D

# yarn
yarn add @vite-pwa/vitepress -D

# pnpm
pnpm add @vite-pwa/vitepress -D
```

## 🦄 Usage

You will need to wrap your VitePress config with `withPwa`:

```ts
// .vitepress/config.ts
import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'

export default withPwa(defineConfig({
  /* your VitePress options */
  /* Vite PWA Options */
  pwa: {}
}))
```

Read the [📖 documentation](https://vite-pwa-org.netlify.app/frameworks/vitepress) for a complete guide on how to configure and use
this plugin.

## 👀 Full config

Check out the type declaration [src/types.ts](https://github.com/vite-pwa/vitepress/blob/main/src/types.ts) and the following links for more details.

- [Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Vite PWA Workbox](https://unplugin-pwa.netlify.app/vite-pwa-workbox/)

## 📄 License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Anthony Fu](https://github.com/antfu)
