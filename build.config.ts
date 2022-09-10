import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    'vite',
    'rollup',
    'vitepress',
    'workbox-build',
  ],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: true,
    },
  },
})
