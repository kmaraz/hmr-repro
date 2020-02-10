module.exports = {
  "env": {
    "browser": true,
    "node": false
  },
  "extends": [],
  "ignorePatterns": [
    "dist/*",
    "webpack/*",
    "node_modules/*",
    "app/bootstrap/*",
    "app/main.aot.ts",
    "app/exports/*",
    "app/submodules/*",
    "**/*.js"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.eslint.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "sort-keys-fix"
  ],
  "rules": {
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      { "accessibility": "no-public" }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    // For details see: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    // FIXME: Can't check alphabetical members order until this is done: https://github.com/typescript-eslint/typescript-eslint/pull/263
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": ["error", { "allowSingleExtends": true }],
    "@typescript-eslint/no-extra-parens": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": ["error", "single", { "avoidEscape": true }],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/space-within-parens": ["off", "never"],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "camelcase": ["error", { "properties": "never" }],
    "capitalized-comments": ["error", "always", {
      "ignorePattern": "webpackChunkName",
      "ignoreConsecutiveComments": true,
    }],
    "comma-dangle": "error",
    "complexity": ["error", { "max": 20 }],
    "constructor-super": "error",
    "curly": "error",
    "eol-last": "error",
    "eqeqeq": ["error","smart"],
    "id-match": "error",
    "import/no-default-export": "error",
    "import/order": "off",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "error",
      {
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignorePattern": "^import |^export \\{(.*?)\\}",
        "code": 120
      }
    ],
    "max-lines": ["warn", 300],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-eval": "error",
    "no-fallthrough": "error",
    // FIXIT: Disabled until this is resolved: https://github.com/typescript-eslint/typescript-eslint/issues/491
    // "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "no-multi-spaces": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": ["off", { "builtinGlobals": true, "hoist": "all" }],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "operator-linebreak": [
      "error",
      "before",
      { "overrides": { "=": "after" } }
    ],
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    // Import grouping strategy can be explicitly defined using "groups" option.
    // See: https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
    "simple-import-sort/sort": "warn",
    "sort-keys-fix/sort-keys-fix": "warn",
    "space-before-function-paren": ["error", "never"],
    "spaced-comment": ["error", "always", { "exceptions": ["*"] }],
    "yoda": "error"
  }
};
