module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    camelcase: 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-console': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-nested-ternary': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
