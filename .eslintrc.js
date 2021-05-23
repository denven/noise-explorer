module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: '2020',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'import', 'prettier', 'react-hooks'],
  rules: {
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'prettier/prettier': ['error', { semi: true }], // Pass ESLint semi config to Prettier
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': 'off', // arrow function is allowed to use as component prop
    'react-hooks/rules-of-hooks': 'error', // Check rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Check effect dependencies
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'babel/no-invalid-this': 'error',
    // "semi": ["error", "always", { "omitLastInOneLineBlock": false }],
    'no-unexpected-multiline': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // Allow arrow function style in JSX props
    'react/prop-types': 'off', // turn off prop types check as eslint-plugin-react has a bug leading to complain all the time
    // eslint-disable-next-line no-dupe-keys
    'prettier/prettier': 'off'
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.63.1',
    },
  },
};
