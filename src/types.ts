import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions> {
  experimental?: {
    /**
     * When using `generateSW` strategy, include the logic to handle the `workbox.navigateFallbackAllowlist` option.
     *
     * @see https://github.com/vite-pwa/vitepress/issues/22
     *
     * @default false
     */
    includeAllowlist?: boolean
  }
}

declare module 'vitepress' {
  interface UserConfig {
    pwa?: PwaOptions
  }
}
