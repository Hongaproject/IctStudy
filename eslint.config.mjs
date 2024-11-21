import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules:{
      // "no-console" : "error",  << 운영에 넘어갈 때
      // "no-unused-vars": "warn", << 잘 안사용
      // "no-undef": "error", << 잘 안사용
      // "eqeqeq": "error", << 잘 안사용
      // "no-debugger": "error", << 잘 안사용
      // "semi": ["error", "always"],  «« prettier
      // "quotes": ["error", "single"],  «« prettier
      // "indent": ["error", 2],  «« prettier
      // "comma-dangle": ["error", "always-multiline"], << 잘 안사용
      // "react/jsx-uses-react": "off", << 잘 안사용
      // "react/prop-types": "off", << 잘 안사용
      // "react/jsx-key": "error", << 운영에 넘어갈 때
      // "@typescript-eslint/explicit-function-return-type": "warn", << 잘 안사용
      // "@typescript-eslint/no-explicit-any": "warn", << 잘 안사용
      "prettier/prettier":'off'
    },
    extends:[
      "plugin:prettier/recommended"
    ]
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];