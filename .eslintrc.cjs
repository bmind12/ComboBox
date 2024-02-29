module.exports = exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:css-modules/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'prettier', 'css-modules'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
