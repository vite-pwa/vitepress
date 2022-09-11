import type { UserConfig } from 'vitepress'
import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions>, Pick<UserConfig, 'buildEnd' | 'transformHead'> {
  defaultMode?: string
}

export interface VitePressPWAOptions<ThemeConfig = any> extends Omit<UserConfig<ThemeConfig>, 'buildEnd' | 'transformHead'> {
  pwa?: PwaOptions
}
