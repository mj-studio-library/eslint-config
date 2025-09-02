# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a monorepo containing ESLint v9 flat configuration packages with a hierarchical dependency structure:

- **Node package** (`packages/node`): Base configuration with TypeScript, Prettier, import sorting, and unused imports removal
- **React package** (`packages/react`): Extends Node config with React-specific rules and JSX support
- **React Native package** (`packages/react-native`): Extends React config with React Native environment rules

Each package uses ESLint v9 flat config format with ES modules. All dependencies are included (not peerDependencies) so users only need to install `eslint`, `prettier`, and `typescript` separately.

## Key Configuration Features

- **ESLint v9 Flat Config**: Modern configuration format with ES modules
- **TypeScript Support**: Full TypeScript integration with `@typescript-eslint/parser`
- **Prettier Integration**: Automatic code formatting with `eslint-plugin-prettier`
- **Import Management**: Automatic import sorting and unused import removal
- **Type Safety**: Enforced consistent type imports for TypeScript
- **React Support**: Comprehensive React hooks rules and component best practices
- **Unused Code Detection**: Automatic detection and removal of unused imports and variables

## Common Commands

```bash
# Lint and fix all files
yarn lint

# Run eslint directly
yarn eslint

# Release new version (auto-increments patch version)
yarn release
```

## Development Workflow

The project uses Yarn workspaces. All packages are located in `packages/` directory.

### Package Structure
- `packages/node/`: Base ESLint config for Node.js projects
- `packages/react/`: React-specific ESLint config (depends on node config)
- `packages/react-native/`: React Native ESLint config (depends on react config)

### Publishing Process
The `yarn release` command in `tool/publish.mjs`:
1. Auto-increments patch version for all packages
2. Updates internal dependency versions
3. Publishes all packages to npm
4. Creates git commit and tag
5. Pushes to remote repository

### Configuration Inheritance
- React config extends Node config using spread operator (`...nodeConfig`)
- React Native config extends React config with additional React Native globals
- Each config uses ESLint v9 flat config array format
- Configurations are composable and can be easily extended or overridden