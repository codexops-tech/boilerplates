module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    jasmine: true,
    jest: true,
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'avoid',
        jsxSingleQuote: true,
        jsxBracketSameLine: true
      }
    ],
    'max-len': ['error', 120],
    curly: ['error', 'multi-line'],
    quotes: ['error', 'single'],
    'no-console': 2,
    'no-shadow': 2,
    'no-labels': 2,
    'no-irregular-whitespace': 2,
    'no-trailing-spaces': 2,
    'import/prefer-default-export': 0,
    'import/no-useless-path-segments': 1,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-duplicates': 2,
    'import/order': [
      2,
      {
        groups: ['internal', 'builtin', 'external', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */
        }
      }
    ],
    'import/newline-after-import': 1,
    'import/no-named-as-default-member': 0,
    'import/namespace': 0,
    'import/named': 0,
    'no-case-declarations': 0,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/interface-name-prefix': 2,
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0
  },
  parser: '@typescript-eslint/parser',
  globals: {
    it: true,
    expect: true,
    window: true,
    Headers: true,
    fetch: true,
    URL: true,
    cordova: true
  }
}
