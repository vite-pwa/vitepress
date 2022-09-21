import type { VitePWAOptions } from 'vite-plugin-pwa'

export interface PwaOptions extends Partial<VitePWAOptions> {
  defaultMode?: string
}

declare module 'vitepress' {
  interface UserConfig {
    pwa?: PwaOptions
  }
}
