module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue
    'plugin:vue/vue3-strongly-recommended',
    // js
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersions: '2020',
  },
  rules: {},
}
