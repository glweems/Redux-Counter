module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['wesbos'],
  rules: {
    'import/no-unresolved': false,
    'no-nested-ternary': 0,
    camelcase: 0,
    undefined: 0,
    'react/display-name': 0,
    'no-unused-expressions': 0,
    'react/jsx-no-undef': 0,
    'no-undef': 0,
    'react/no-danger': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-shadow': 0,
    'sort-imports': 0,
    'no-reserved-keys': 0,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}
