<p align='center'>
<img src='./hero.png' alt="@vite-pwa/vitepress - Zero-config PWA for VitePress"><br>
Zero-config PWA Plugin for VitePress
</p>

<p align='center'>
<a href='https://www.npmjs.com/package/@vite-pwa/vitepress' target="__blank">
<img src='https://img.shields.io/npm/v/@vite-pwa/vitepress?color=33A6B8&label=' alt="NPM version">
</a>
<a href="https://www.npmjs.com/package/@vite-pwa/vitepress" target="__blank">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vite-pwa/vitepress?color=476582&label=">
</a>
<a href="https://vite-pwa-org.netlify.app/frameworks/vitepress" target="__blank">
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
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## 🚀 Features

- 📖 [**Documentation & guides**](https://vite-pwa-org.netlify.app/)
- 👌 **Zero-Config**: sensible built-in default configs for common use cases
- 🔩 **Extensible**: expose the full ability to customize the behavior of the plugin
- 🦾 **Type Strong**: written in [TypeScript](https://www.typescriptlang.org/)
- 🔌 **Offline Support**: generate service worker with offline support (via Workbox)
- ⚡ **Fully tree shakable**: auto inject Web App Manifest
- 💬 **Prompt for new content**: built-in support for Vanilla JavaScript, Vue 3, React, Svelte, SolidJS and Preact
- ⚙️ **Stale-while-revalidate**: automatic reload when new content is available
- ✨ **Static assets handling**: configure static assets for offline support
- 🐞 **Development Support**: debug your custom service worker logic as you develop your application
- 🛠️ **Versatile**: integration with meta frameworks: [îles](https://github.com/ElMassimo/iles), [SvelteKit](https://github.com/sveltejs/kit), [VitePress](https://github.com/vuejs/vitepress), [Astro](https://github.com/withastro/astro), [Nuxt 3](https://github.com/nuxt/nuxt) and [Remix](https://github.com/remix-run/remix)
- 💥 **PWA Assets Generator**: generate all the PWA assets from a single command and a single source image
- 🚀 **PWA Assets Integration**: serving, generating and injecting PWA Assets on the fly in your application

## 📦 Install

> From v0.3, `@vite-pwa/vitepress` requires **Vite 5** and **VitePress 1.0.0-rc.26 or above**.

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

Check out the type declaration [src/types.ts](./src/types.ts) and the following links for more details.

- [Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Workbox](https://developers.google.com/web/tools/workbox)

## 📄 License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Anthony Fu](https://github.com/antfu)
