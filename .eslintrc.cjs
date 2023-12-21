module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['jest'],
  // add your custom rules here
  rules: {
    // 禁止出现console
    'no-console': process.env.NUXT_APP_ENV === 'production' ? 'warn' : 'off',
    // 禁用debugger
    'no-debugger': process.env.NUXT_APP_ENV === 'production' ? 'warn' : 'off',
    "multi-word-component-names": 'off',
    "import/no-named-as-default": 0
  },
}
