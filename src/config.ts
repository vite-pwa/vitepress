import type { DefaultTheme, UserConfig } from 'vitepress'

export function configurePWAOptions<T = DefaultTheme.Config>(config: UserConfig<T>) {
  const pwa = config.pwa ?? {}
  let assetsDir = (config.assetsDir ?? 'assets/').replace(/\\/g, '/')
  if (assetsDir[assetsDir.length - 1] !== '/')
    assetsDir += '/'

  // remove './' prefix from assetsDir
  const dontCacheBustURLsMatching = new RegExp(`^${assetsDir.replace(/^\.*?\//, '')}`)

  if (!pwa.outDir)
    pwa.outDir = '.vitepress/dist'

  if (pwa.strategies === 'injectManifest') {
    pwa.injectManifest = pwa.injectManifest ?? {}
    pwa.injectManifest.dontCacheBustURLsMatching = dontCacheBustURLsMatching
  }
  else {
    pwa.workbox = pwa.workbox ?? {}
    pwa.workbox.dontCacheBustURLsMatching = dontCacheBustURLsMatching
    if (pwa.registerType === 'autoUpdate' && (pwa.injectRegister === 'script' || pwa.injectRegister === 'inline')) {
      pwa.workbox.clientsClaim = true
      pwa.workbox.skipWaiting = true
    }
  }

  return pwa
}
