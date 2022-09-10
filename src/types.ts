import type { UserConfig } from 'vitepress'
import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions>, Pick<UserConfig, 'buildEnd'> {
  defaultMode?: string
}

// TODO: exclude also VitePress transformHtml hook?
export interface VitePressPWAOptions<ThemeConfig> extends Exclude<UserConfig<ThemeConfig>, 'buildEnd'> {
  pwa?: PwaOptions
}
