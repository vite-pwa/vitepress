import type { DefaultTheme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import { VitePWA } from 'vite-plugin-pwa'
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
      throw new Error('Remove the vite-plugin-pwa plugin from Vite Plugins entry in VitePress config file')
  }

  const { pwa = {}, ...vitePressOptions } = config

  const {
    buildEnd: userBuildEnd,
    defaultMode = 'production',
    ...pwaPluginOptions
  } = pwa

  configurePWAOptions(pwaPluginOptions)

  vitePlugins.push(VitePWA({ ...pwaPluginOptions }))

  vitePressOptions.buildEnd = async (config) => {
    const { build } = await import('./build')
    await userBuildEnd?.(config)
    await build(defaultMode, pwaPluginOptions)
  }

  return defineConfigWithTheme(vitePressOptions)
}

export * from './types'
