import nodeConfig from '@mj-studio/eslint-config-node';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  ...nodeConfig,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        history: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    
    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // React component rules
      'react/prefer-stateless-function': 'error',
      'react/button-has-type': 'error',
      'react/no-unused-prop-types': 'warn',
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-script-url': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react/jsx-fragments': 'error',
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
      'react/jsx-max-depth': ['warn', { max: 8 }],
      'react/jsx-key': ['error', {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      }],
      'react/no-typos': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-curly-brace-presence': ['error', {
        props: 'always',
        children: 'always',
        propElementValues: 'always',
      }],

      // Disabled React rules
      'react/function-component-definition': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/display-name': 'off',
      'react/jsx-sort-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/prop-types': 'off',
      'react/destructuring-assignment': 'off',
    },
  },
];