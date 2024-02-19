# MJ Studio ESLint Config

> ESLint configuration for below projects.
> 
> This project is forked from @dooboo/eslint-config

## Usage
These packages include internal eslint config/plugins with `dependencies` not `peerDependencies`.

So user can just declare their `eslintrc.js` like that.

```js
extends: ['@mj-studio/eslint-config-(node|react|react-native)']
```


### Node.js

[![Npm Version](http://img.shields.io/npm/v/@mj-studio/eslint-config-node.svg?style=flat-square)](https://npmjs.org/package/@mj-studio/eslint-config-node)

### React
depends on Node config

[![Npm Version](http://img.shields.io/npm/v/@mj-studio/eslint-config-react.svg?style=flat-square)](https://npmjs.org/package/@mj-studio/eslint-config-react)

### React Native
depends on React config

[![Npm Version](http://img.shields.io/npm/v/@mj-studio/eslint-config-react-native.svg?style=flat-square)](https://npmjs.org/package/@mj-studio/eslint-config-react-native)

### Recommendation

#### `.prettierrc.json`

```
{
  "trailingComma": "all",
  "arrowParens": "always",
  "singleQuote": true,
  "jsxSingleQuote": false,
  "printWidth": 100,
  "quoteProps": "consistent",
  "tabWidth": 2
}

```