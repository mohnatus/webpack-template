/**
 * Stylelint configuration
 * https://stylelint.io/
 *
 * extends:
 *
 * stylelint-config-prettier
 * https://github.com/prettier/stylelint-config-prettier
 *
 * plugins:
 *
 * stylelint-order
 * https://github.com/hudochenkov/stylelint-order
 *
 * TODO Stylelint rules
 */

module.exports = {
  extends: 'stylelint-config-prettier',

  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'max-line-length': 80,

    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',

    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-block-single-line-max-declarations': 1,

    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',

    'order/properties-order': [
      ['position', 'z-index', 'top', 'right', 'bottom', 'left'],
      {
        unspecified: 'bottom',
      },
    ],
    'order/order': [
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'rule',
        selector: '^&::(before|after)',
      },
      {
        type: 'rule',
        selector: '^&:\\w',
      },
      {
        type: 'rule',
        selector: '^&_',
      },
      {
        type: 'rule',
        selector: '^.',
      },
    ],
  },
  plugins: ['stylelint-order'],
};
