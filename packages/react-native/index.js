import reactConfig from '@mj-studio/eslint-config-react';
import reactNativePlugin from '@react-native/eslint-plugin';

export default [
  ...reactConfig,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'react-native': reactNativePlugin,
    },
    languageOptions: {
      globals: {
        __DEV__: 'readonly',
        alert: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        navigator: 'readonly',
        XMLHttpRequest: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
      },
    },
    rules: {
      // React Native specific rules
      'react-native/no-inline-styles': 'off',
    },
  },
];