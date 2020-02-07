/**
 * Stylelint configuration
 * https://stylelint.io/
 *
 * plugins:
 *
 * stylelint-order
 * https://github.com/hudochenkov/stylelint-order
 *
 * TODO Stylelint rules
 */

module.exports = {
  "ignoreFiles": ["**/*.js"],
  rules: {
    indentation: 2,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-line-length': 80,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'string-no-newline': true,
    'string-quotes': 'single',

    // case
    'at-rule-name-case': 'lower',
    'color-hex-case': 'lower',
    'function-name-case': 'lower',
    'property-case': 'lower',
    'selector-type-case': 'lower',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',

    // unknown
    'no-unknown-animations': true,
    'media-feature-name-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'unit-no-unknown': true,

    // @at rules
    'at-rule-name-space-after': 'always',
    'at-rule-property-requirelist': {
      'font-face': ['font-display', 'font-family', 'font-style'],
    },
    'keyframe-declaration-no-important': true,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-at-import-rules': true,

    // blocks
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-before': 'always',

    // colors
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,

    // comments
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',

    // custom properties
    'custom-property-empty-line-before': 'always',

    // declarations
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,

    // fonts
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,

    // functions
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,

    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // numbers
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    // selectors
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',

    // value
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    // STYLELINT-ORDER
    // specify the order of content within declaration blocks
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
    'order/order': [
      // @include
      {
        type: 'at-rule',
        name: 'include',
      },

      // scss variables
      'dollar-variables',

      // css variables
      'custom-properties',

      // declarations
      'declarations',
      // &:focus, &:hover, ...
      {
        type: 'rule',
        selector: /^&:[\w-]+/,
      },
      // &:before, &:after
      {
        type: 'rule',
        selector: /^&:(before|after)/,
      },
      // &_selector
      {
        type: 'rule',
        selector: /^&_/,
      },
      // .selector
      {
        type: 'rule',
        selector: /^./,
      },
      // & selector
      {
        type: 'rule',
        selector: /^&:\\w/,
      },

      // @media
      {
        type: 'at-rule',
        name: 'media',
      },
    ],

    // specify the order of properties within declaration blocks
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    'order/properties-order': [
      [
        'content',

        {
          groupName: 'position',
          properties: ['position', 'top', 'bottom', 'left', 'right', 'z-index'],
        },

        'display',

        {
          groupName: 'flex',
          properties: ['justify-content', 'align-items'],
        },

        {
          groupName: 'dimensions',
          properties: ['width', 'height'],
        },

        {
          groupName: 'margin',
          properties: [
            'margin',
            'margin-top',
            'margin-bottom',
            'margin-left',
            'margin-right',
          ],
        },

        {
          groupName: 'padding',
          properties: [
            'padding',
            'padding-top',
            'padding-bottom',
            'padding-left',
            'padding-right',
          ],
        },

        {
          groupName: 'background',
          properties: [
            'background',
            'background-color',
            'background-image',
            'background-size',
            'background-position',
            'background-repeat',
            'background-attachment'
          ],
        },

        'color',

        {
          groupName: 'font',
          properties: ['font-family', 'font-size', 'font-weight'],
        },
      ],
      {
        unspecified: 'bottom',
      },
    ],
  },
  plugins: ['stylelint-order'],
};
