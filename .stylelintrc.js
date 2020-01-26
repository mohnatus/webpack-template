/**
 * Stylelint configuration
 * https://stylelint.io/
 *
 * extends:
 *
 * stylelint-config-standard
 * https://github.com/stylelint/stylelint-config-standard
 *
 *
 * rules:
 *
 * stylelint-order:
 * order/properties-order
 * order/order
 *
 *
 * plugins:
 *
 * stylelint-order
 * https://github.com/hudochenkov/stylelint-order
 *
 */

module.exports = {
  extends: 'stylelint-config-standard',

  rules: {
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
