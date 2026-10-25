import process from 'node:process'
import { withPwa } from '@vite-pwa/vitepress'
import { DevTools } from '@vitejs/devtools'
import { defineConfig } from 'vitepress'

const swType = process.env.DUAL_SW === 'true' ? 'classic-and-module' : 'classic'

const base = '/' // '/vite-plugin-pwa/'

export default withPwa(defineConfig({
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    plugins: [DevTools()],
  },
  base,
  lang: 'en-US',
  title: 'VitePress PWA',
  description: 'Unplugin PWA Integration example for VitePress',
  head: [
    ['meta', {
      name: 'keywords',
      content: 'PWA, VitePress, workbox, Vite, unplugin-pwa',
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
    // mode: 'development',
    registerType: 'autoUpdate',
    injectRegister: 'script-defer',
    includeManifestIcons: false,
    swType,
    manifest: {
      name: 'VitePress PWA',
      short_name: 'VitePressPWA',
      theme_color: '#ffffff',
    },
    pwaAssets: {
      config: true,
    },
    generateSW: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    experimental: {
      includeAllowlist: true,
    },
    devOptions: {
      enabled: true,
      inspector: 'vite-devtools',
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
}))
