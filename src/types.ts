import type { SiteConfig, UserConfig } from 'vitepress'
import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions> {
  defaultMode?: string
  /**
     * You can register an integration hook to run before the pwa regeneration.
     * For example, you can use it to also generate the sitemap.
     *
     * @param siteConfig The data provided by VitePress in the `buildEnd` cli hook.
     */
  buildEnd?: (siteConfig: SiteConfig) => void | Promise<void>
}

// TODO: exclude also VitePress transformHtml hook?
export interface VitePressPWAOptions<ThemeConfig> extends Exclude<UserConfig<ThemeConfig>, 'buildEnd'> {
  pwa?: PwaOptions
}
