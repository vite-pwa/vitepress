import { resolve } from 'node:path'
import type { DefaultTheme, UserConfig } from 'vitepress'
import { escapeStringRegexp } from './utils'

export function configurePWAOptions<T = DefaultTheme.Config>(config: UserConfig<T>) {
  const pwa = config.pwa ?? {}
  const assetsDir = config.assetsDir
    ? config.assetsDir
      .replace(/\\/g, '/')
      .replace(/^\.?\/|\/$/g, '')
    : 'assets'

  // remove './' prefix from assetsDir
  const dontCacheBustURLsMatching = new RegExp(`^${escapeStringRegexp(assetsDir)}/`)

  if (!pwa.outDir)
    pwa.outDir = '.vitepress/dist'

  if (pwa.pwaAssets) {
    const publicDir = typeof config.vite?.publicDir === 'string'
      ? resolve(config.vite.publicDir)
      : resolve('public')
    pwa.pwaAssets.integration = {
      baseUrl: config.base ?? config.vite?.base ?? '/',
      publicDir,
      outDir: resolve(pwa.outDir),
    }
  }

  if (pwa.strategies === 'injectManifest') {
    pwa.injectManifest = pwa.injectManifest ?? {}
    pwa.injectManifest.dontCacheBustURLsMatching = dontCacheBustURLsMatching
  }
  else {
    pwa.workbox = pwa.workbox ?? {}
    pwa.workbox.dontCacheBustURLsMatching = dontCacheBustURLsMatching
    if (pwa.registerType === 'autoUpdate' && (pwa.injectRegister === 'script' || pwa.injectRegister === 'script-defer' || pwa.injectRegister === 'inline')) {
      pwa.workbox.clientsClaim = true
      pwa.workbox.skipWaiting = true
    }
  }

  return pwa
}
