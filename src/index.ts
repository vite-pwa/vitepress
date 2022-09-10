import type { UserConfig } from 'vitepress'
import { defineConfigWithTheme as vitePressDefineConfig } from 'vitepress'
import { VitePWA } from 'vite-plugin-pwa'
import { build } from './build'
import type { VitePressPWAOptions } from './types'

export function defineConfig<ThemeConfig>(userOptions: VitePressPWAOptions<ThemeConfig> = {}): UserConfig<ThemeConfig> {
  let viteConf = userOptions.vite
  if (!viteConf) {
    viteConf = {}
    userOptions.vite = viteConf
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

  const { pwa = {}, ...vitePressOptions } = userOptions

  const {
    buildEnd: userBuildEnd,
    defaultMode = 'production',
    ...pwaPluginOptions
  } = pwa

  if (!pwaPluginOptions.outDir)
    pwaPluginOptions.outDir = '.vitepress/dist'

  vitePlugins.push(VitePWA({ ...pwaPluginOptions }))

  vitePressOptions.buildEnd = async (config) => {
    await userBuildEnd?.(config)
    await build(defaultMode, pwaPluginOptions)
  }

  return vitePressDefineConfig({
    ...vitePressOptions,
  })
}

export * from './types'
