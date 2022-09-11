import type { VitePWAOptions } from 'vite-plugin-pwa'

export function configurePWAOptions(options: Partial<VitePWAOptions>) {
  if (!options.outDir)
    options.outDir = '.vitepress/dist'

  let config: Partial<
      import('workbox-build').BasePartial
      & import('workbox-build').GlobPartial
      & import('workbox-build').RequiredGlobDirectoryPartial
  >

  if (options.strategies === 'injectManifest') {
    options.injectManifest = options.injectManifest ?? {}
    config = options.injectManifest
  }
  else {
    options.workbox = options.workbox ?? {}
    config = options.workbox
    if (options.registerType === 'autoUpdate' && (options.injectRegister === 'script' || options.injectRegister === 'inline')) {
      options.workbox.clientsClaim = true
      options.workbox.skipWaiting = true
    }
  }

  // exclude registerSW.js script from the SW precache manifest
  if (config.globIgnores)
    config.globIgnores.push('**/registerSW.js')
  else
    config.globIgnores = ['**/registerSW.js']
}
