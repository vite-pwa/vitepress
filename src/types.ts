import type { UserConfig } from 'vitepress'
import type { VitePWAOptions } from 'vite-plugin-pwa'

// export interface PwaOptions extends Partial<VitePWAOptions>, Pick<UserConfig, 'buildEnd' | 'transformHead'> {
export interface PwaOptions extends Partial<VitePWAOptions> {
  defaultMode?: string
}

// export interface VitePressPWAOptions<ThemeConfig = any> extends Omit<UserConfig<ThemeConfig>, 'buildEnd' | 'transformHead'> {
export interface VitePressPWAOptions<ThemeConfig = any> extends UserConfig<ThemeConfig> {
  pwa?: PwaOptions
}
