# MJ Studio ESLint Config

<img width="876" alt="MJStudio_horizontal" src="https://github.com/mj-studio-library/eslint-config/assets/33388801/1596cf4f-65fb-4251-9c6f-c0f11706e4e6">

> This project is forked from @dooboo/eslint-config

## Usage
These packages include internal eslint config/plugins with `dependencies` not `peerDependencies`.

So user can just declare their `eslintrc.js` like that.

```js
extends: ['@mj-studio/eslint-config-(node|react|react-native)']
```

On the other hand, User should install `eslint`, `prettier`, `typescript` in their `devDependencies`.

## Feature

- **TypeScript**
- **Prettier**
- **Import Sort/Assertion**
- **React(only in `react`/`react-native`)**
- **Useful Rules**


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
