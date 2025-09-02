import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

const importSortGroups = [
  ['^\\u0000'],
  ['^react', '^@?\\w'],
  ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
];

const paddingLineRules = [
  { blankLine: 'always', prev: '*', next: 'return' },
  { blankLine: 'always', prev: 'directive', next: '*' },
  { blankLine: 'any', prev: 'directive', next: 'directive' },
  { blankLine: 'always', prev: 'import', next: '*' },
  { blankLine: 'any', prev: 'import', next: 'import' },
  {
    blankLine: 'always',
    prev: '*',
    next: ['const', 'let', 'var', 'export'],
  },
  {
    blankLine: 'any',
    prev: ['const', 'let', 'var', 'export'],
    next: ['const', 'let', 'var', 'export'],
  },
  {
    blankLine: 'always',
    prev: ['multiline-const', 'multiline-expression', 'multiline-let', 'multiline-block-like', 'multiline-var'],
    next: ['multiline-const', 'multiline-expression', 'multiline-let', 'multiline-block-like', 'multiline-var'],
  },
  {
    blankLine: 'always',
    prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
    next: '*',
  },
];

export default [
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },

    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },

    rules: {
      // Prettier
      'prettier/prettier': ['error', { endOfLine: 'auto' }],

      // Import sorting and unused imports
      'simple-import-sort/imports': ['error', { groups: importSortGroups }],
      'unused-imports/no-unused-imports': 'error',
      'no-duplicate-imports': 'error',

      // Code style
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'always'],
      'curly': ['error', 'all'],

      // Code quality
      'no-console': 'warn',
      'no-new-object': 'error',
      'no-array-constructor': 'error',
      'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }],

      // Layout
      'max-len': ['error', {
        code: 100,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      }],
      'padding-line-between-statements': ['warn', ...paddingLineRules],
      'generator-star-spacing': ['error', { before: false, after: true }],

      // Disabled rules
      'camelcase': 'off',
      'indent': 'off',
      'no-use-before-define': 'off',
      'no-unused-expressions': 'off',
      'space-before-function-paren': 'off',
      'default-param-last': 'off',
      'no-undef': 'off',
    },
  },

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImports,
    },
    rules: {
      // Type imports
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Variables and imports
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],

      // Expressions
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      }],

      // Disabled TypeScript rules
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },

  // JSON files
  {
    files: ['**/*.json'],
    rules: {
      'prettier/prettier': 'off',
    },
  },
];
