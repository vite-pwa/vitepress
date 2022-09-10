import { resolveConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import type { VitePWAOptions, VitePluginPWAAPI } from 'vite-plugin-pwa'

export async function build(defaultMode: string, pwaPluginOptions: Partial<VitePWAOptions>) {
  const viteConfig = await resolveConfig({
    plugins: [VitePWA({ ...pwaPluginOptions })],
  },
  'build',
  defaultMode,
  )

  const pwaPlugin: VitePluginPWAAPI = viteConfig.plugins.find(i => i.name === 'vite-plugin-pwa')?.api
  const pwa = pwaPlugin && !pwaPlugin.disabled
  pwa && await pwaPlugin.generateSW()
}
