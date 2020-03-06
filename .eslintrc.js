/* eslint-disable */

module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Assets', './src/assets'],
          ['JS', './src/js'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },

  /**
   * Environments script is designed to run in
   * Each environment brings with it a certain set of predefined global variables
   */
  env: {
    es6: true, // enable all ECMAScript 6 features except for modules
    browser: true, // browser global variables
    node: { // Node.js global variables and Node.js scoping
      'paths': [
        __dirname,
      ],
    }
  },

  // A wrapper around the Babel parser that makes it compatible with ESLint
  parser: "babel-eslint",

  parserOptions: {
    sourceType: "module", // ECMAScript modules
    ecmaVersion: 6, //  specify the version of ECMAScript syntax
    ecmaFeatures: {
      jsx: true // enable JSX
    }
  },

  plugins: [
    "babel",
    "import",
    "jsx-a11y",

    "react",
    "prettier",

    "no-loops",
    "promise"
  ],

  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended"
  ],

  rules: {
    // best practices
    curly: ["error", "all"],
    "dot-location": ["error", "property"],
    eqeqeq: ["error", "always"],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-constructor-return": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "error",
    "no-multi-spaces": "error",
    "no-return-await": "error",
    "no-unmodified-loop-condition": "error",
    "require-await": "error",
    "wrap-iife": "error",

    // stylistic issues
    "array-bracket-newline": ["error", { multiline: true }],
    "array-bracket-spacing": ["error", "always"],
    "array-element-newline": ["error", "consistent"],
    "block-spacing": ["error", "always"],
    "brace-style": "error",
    "comma-dangle": ["error", "always"],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "computed-property-spacing": ["error", "always"],
    "func-call-spacing": "error",
    indent: ["error", 2],
    "jsx-quotes": ["error", "prefer-single"],
    "lines-between-class-members": ["error", "always"],
    "max-len": ["error", { code: 80 }],
    "max-params": ["error", 4],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "object-curly-newline": ["error", { multiline: true }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": "error",
    "quote-props": ["error", "consistent-as-needed"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", "always"],

    // ecmascript 6
    "arrow-body-style": ["error", "always"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-duplicate-imports": "error",
    "no-var": "error",
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
  }
};
/* eslint-disable */
