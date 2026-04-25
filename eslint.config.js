import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import babelParser from '@babel/eslint-parser'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['build', 'eslint.config.js']),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: globals.browser
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'warn',
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }],
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'no-extra-boolean-cast': 'off',
      'no-empty': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/no-sync-effects': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'hooks-extra/no-direct-set-state-in-use-effect': 'off'
    },
    settings: {
      react: { version: 'detect' }
    }
  }
])