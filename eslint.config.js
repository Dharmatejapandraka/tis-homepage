import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist", "node_modules"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      /*
       * React JSX
       *
       * These rules tell ESLint that:
       *
       * <Hero />
       * <motion.div />
       * <Icon />
       *
       * are actual usages of the imported variables.
       */
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "off",

      /*
       * React Hooks
       */
      ...reactHooks.configs.recommended.rules,

      /*
       * Vite / React Fast Refresh
       */
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
];