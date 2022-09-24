import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions> {
}

declare module 'vitepress' {
  interface UserConfig {
    pwa?: PwaOptions
  }
}
