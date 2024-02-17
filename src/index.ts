import type { DefaultTheme, UserConfigExport } from 'vitepress'
import { withUserConfig } from './integration'

export * from './types'

export async function withPwa<T = DefaultTheme.Config>(config: UserConfigExport<T>) {
  if (typeof config === 'function') {
    return <UserConfigExport<T>>(async (ctx) => {
      const userConfig = await config(ctx)
      return withUserConfig<T>(userConfig)
    })
  }

  return withUserConfig<T>(await config)
}
