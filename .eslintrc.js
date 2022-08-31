module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'semistandard',
    'standard-jsx',
    'standard-react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  ignorePatterns: ['dist/**/*'],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': 'off',
    'multiline-ternary': 'off',
    'no-array-constructor': 'off',
    'prefer-const': 'off',
    indent: 'off'
  }
};
