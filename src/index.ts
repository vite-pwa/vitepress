import type { DefaultTheme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import { VitePluginPWAAPI, VitePWA } from 'vite-plugin-pwa'
import type { VitePressPWAOptions } from './types'
import { configurePWAOptions } from './config'

export function defineConfig(config: VitePressPWAOptions<DefaultTheme.Config>) {
  let viteConf = config.vite
  if (!viteConf) {
    viteConf = {}
    config.vite = viteConf
  }

  let vitePlugins = viteConf.plugins
  if (typeof vitePlugins === 'undefined') {
    vitePlugins = []
    viteConf.plugins = vitePlugins
  }

  if (vitePlugins && vitePlugins.length > 0) {
    const pwaPlugin = vitePlugins.find(i => i && typeof i === 'object' && 'name' in i && i.name === 'vite-plugin-pwa')
    if (pwaPlugin)
      throw new Error('Remove vite-plugin-pwa plugin from Vite Plugins entry in VitePress config file')
  }

  const { pwa = {}, ...vitePressOptions } = config

  const {
    transformHead: userTransformHead,
    buildEnd: userBuildEnd,
    defaultMode = 'production',
    ...pwaPluginOptions
  } = pwa

  configurePWAOptions(pwaPluginOptions)

  let api: VitePluginPWAAPI | undefined

  vitePlugins.push(
      VitePWA({ ...pwaPluginOptions }),
      {
        name: 'vite-pwa-plugin:vitepress',
        apply: 'build',
        enforce:'post',
        configResolved(viteConfig) {
          if (!viteConfig.build.ssr)
            api = viteConfig.plugins.find(p => p.name === 'vite-plugin-pwa')?.api
        },
      },
  )

  const vitePressConfig = defineConfigWithTheme(vitePressOptions)

  vitePressConfig.transformHead = async (ctx) => {
    await userTransformHead?.(ctx)
    const { head } = ctx
    const href = api?.webManifestUrl
    href && head.push(['link', { rel: 'manifest', href }])

    const registerSWData = api?.registerSWData()
    if (registerSWData) {
      if (registerSWData.inline) {
        head.push([
          'script',
          { id: 'vite-plugin-pwa-inline-sw' },
          `if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('${registerSWData.inlinePath}', { scope: '${ registerSWData.scope }' })})}`,
        ])
      }
      else {
        head.push([
          'script',
          {
            id: 'vite-plugin-pwa-register-sw',
            src: registerSWData.registerPath,
          },
        ])
      }
    }
  }

  vitePressConfig.buildEnd = async (siteConfig) => {
    const { build } = await import('./build')
    await userBuildEnd?.(siteConfig)
    await build(defaultMode, pwaPluginOptions)
  }

  return vitePressConfig
}

export * from './types'
