import type { VitePWAOptions } from 'vite-plugin-pwa'
// import type { BasePartial, GlobPartial, RequiredGlobDirectoryPartial } from 'workbox-build'
//
// type WorkboxConfig  = Partial<BasePartial & GlobPartial & RequiredGlobDirectoryPartial>

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
  }

  // exclude registerSW.js script from the SW precache manifest
  if (config.globIgnores)
    config.globIgnores.push('**/registerSW.js')
  else
    config.globIgnores = ['**/registerSW.js']
}
