import { withPwa } from '@vite-pwa/vitepress'
import { defineConfig } from 'vitepress'

const base = '/' // '/vite-plugin-pwa/'

export default withPwa(defineConfig({
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  base,
  lang: 'en-US',
  title: 'VitePress PWA',
  description: 'Vite Plugin PWA Integration example for VitePress',
  head: [
    ['meta', {
      name: 'keywords',
      content: 'PWA, VitePress, workbox, Vite, vite-plugin',
    }],
  ],
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Anthony Fu',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about', activeMatch: '/about' },
      {
        text: 'Packages',
        items: [
          { text: 'Foo', link: '/packages/foo' },
          { text: 'Bar', link: '/packages/bar' },
        ],
      },
    ],
  },
  pwa: {
    mode: 'development',
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'VitePress PWA',
      short_name: 'VitePressPWA',
      theme_color: '#ffffff',
    },
    pwaAssets: {
      config: true,
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    experimental: {
      includeAllowlist: true,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
}))
