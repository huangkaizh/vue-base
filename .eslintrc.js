module.exports = {
  root: true,
  globals: {
    document: true,
    localStorage: true,
    window: true,
    resolve: true
  },
  env: {
    browser: true
  },
  extends: ['standard', 'plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: ['vue', 'html'],
  // 对vue文件取消了缩进检查
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-irregular-whitespace': [
      'error',
      {
        skipComments: true,
        skipTemplates: true
      }
    ],
    'no-unused-vars': ['warn']
  }
}
