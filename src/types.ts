import type { UserConfig } from 'vitepress'
import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions> {
  defaultMode?: string
}

export interface VitePressPWAOptions<ThemeConfig = any> extends UserConfig<ThemeConfig> {
  pwa?: PwaOptions
}
