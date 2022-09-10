import type { UserConfig } from 'vitepress'
import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions>, Pick<UserConfig, 'buildEnd'> {
  defaultMode?: string
}

export interface VitePressPWAOptions<ThemeConfig = any> extends Exclude<UserConfig<ThemeConfig>, 'buildEnd'> {
  pwa?: PwaOptions
}
