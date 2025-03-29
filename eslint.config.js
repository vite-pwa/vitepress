import antfu from '@antfu/eslint-config'

export default await antfu(
  {
    ignores: [
      '**/build/**',
      '**/dist/**',
      '**/dev-dist/**',
      '**/node_modules/**',
      '*.d.ts',
      '!.vitepress',
      '!.vitepress/*',
      '!.vitepress/dist/',
      // TODO: check why README.md:L53 and CONTRIBUTING:L20 are failing
      'README.md',
      'CONTRIBUTING.md',
    ],
  },
  {
    files: ['**/*.md/*.*'],
    rules: {
      'ts/no-this-alias': 'off',
      'ts/no-unused-vars': 'off',
      'n/handle-callback-err': 'off',
      'no-restricted-syntax': 'off',
      'no-labels': 'off',
    },
  },
  {
    files: [
      '**/*.ts',
    ],
    rules: {
      'ts/no-unused-vars': 'off',
    },
  },
)
