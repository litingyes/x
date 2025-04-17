import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  typescript: true,
}, {
  files: ['docs/**/*.ts', 'docs/**/*.vue', 'docs/**/*.md'],
})
