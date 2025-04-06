import eslintPluginImport from 'eslint-plugin-import';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginReact from 'eslint-plugin-react';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Exportações
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'off', // Desabilitado para permitir exportações padrão

      // Importações relativas
      'import/no-relative-parent-imports': 'off', // Desabilitado pois usamos jsconfig.json
      'import/no-relative-packages': 'warn',

      // JSX
      'react/jsx-uses-vars': 'error', // Fix para o problema "is defined but never used" em componentes JSX
      'react/jsx-uses-react': 'error',
    },
  },
  // Add Prettier config to avoid conflicts
  prettierConfig,
];
