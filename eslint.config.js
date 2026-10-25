import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      '**/build/**',
      '**/dist/**',
      '**/dev-dist/**',
      '**/node_modules/**',
      '!.vitepress',
      '!.vitepress/*',
      '!.vitepress/dist/',
      'pnpm-workspace.yaml',
    ],
  },
  {
    files: ['**/*.md/**'],
    rules: {
      'ts/no-this-alias': 'off',
      'ts/no-unused-vars': 'off',
      'n/handle-callback-err': 'off',
      'no-restricted-globals': 'off',
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
  {
    // it detects nested arrays wrongly
    files: ['.github/labeler.yml'],
    rules: {
      'yaml/indent': 'off',
    },
  },
)
