module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/attributes-order": "error",
    "vue/html-indent": ["error", 4],
    "vue/html-closing-bracket-newline": ["error", {"multiline": "always"}],
    "vue/html-closing-bracket-spacing": ["error", {"selfClosingTag": "always"}],
    "vue/order-in-components": ["error"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
}
