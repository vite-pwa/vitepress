import process from 'node:process'
import { withPwa } from '@vite-pwa/vitepress'
import { DevTools } from '@vitejs/devtools'
import { defineConfig } from 'vitepress'

const swType = process.env.DUAL_SW === 'true' ? 'classic-and-module' : 'classic'

export default withPwa(defineConfig({
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    plugins: [DevTools()],
  },
  // for testing purposes
  assetsDir: './assets/ja',
  lang: 'en-US',
  title: 'VitePress PWA',
  description: 'Unplugin PWA Integration example for VitePress',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' }],
    ['meta', {
      name: 'keywords',
      content: 'PWA, VitePress, workbox, Vite, unplugin-pwa',
    }],
    ['link', { rel: 'apple-touch-icon', href: '/pwa-192x192.png', sizes: '192x192' }],
  ],
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Anthony Fu',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about', activeMatch: '/about' },
    ],
  },
  pwa: {
    // mode: 'development',
    base: '/',
    scope: '/',
    swType,
    injectRegister: false,
    includeManifestIcons: false,
    manifest: {
      name: 'VitePress PWA',
      short_name: 'VitePressPWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    generateSW: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      inspector: 'vite-devtools',
      suppressWarnings: true,
      navigateFallback: '/',
    },
  },
}))
