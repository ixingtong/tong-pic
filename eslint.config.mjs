// @ts-check

import {
  defineESLintConfig,
  GLOB_ASTRO,
  parserTypeScript,
} from '@ntnyq/eslint-config'
import * as parserAstro from 'astro-eslint-parser'
import pluginAstro from 'eslint-plugin-astro'

export default defineESLintConfig(
  {
    ignores: [],
  },
  // https://github.com/ota-meshi/eslint-plugin-astro/blob/main/src/configs/flat/base.ts
  {
    files: [GLOB_ASTRO],
    name: 'ntnyq/astro',
    processor: pluginAstro.processors['client-side-ts'],
    languageOptions: {
      parser: parserAstro,
      sourceType: 'module',
      globals: {
        ...pluginAstro.environments.astro.globals,
      },
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: parserTypeScript,
      },
    },
    plugins: {
      astro: pluginAstro,
    },
    rules: {
      'astro/missing-client-only-directive-value': 'error',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-fetchcontent': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
      'astro/no-deprecated-getentrybyslug': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/valid-compile': 'error',
    },
  },
)
