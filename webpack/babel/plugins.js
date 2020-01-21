/**
 * Babel plugins
 *
 * @babel/plugin-transform-runtime
 * https://babeljs.io/docs/en/babel-plugin-transform-runtime
 * Enables the re-use of Babel's injected helper code to save on codesize
 *
 * Experimental features:
 *
 * @babel/plugin-proposal-class-properties
 * https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
 *
 * @babel/plugin-proposal-export-namespace-from
 * https://babeljs.io/docs/en/babel-plugin-proposal-export-namespace-from
 *
 * @babel/plugin-proposal-function-bind
 * https://babeljs.io/docs/en/babel-plugin-proposal-function-bind
 *
 * @babel/plugin-proposal-nullish-coalescing-operator
 * https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
 *
 * @babel/plugin-proposal-numeric-separator
 * https://babeljs.io/docs/en/babel-plugin-proposal-numeric-separator
 *
 * @babel/plugin-proposal-optional-chaining
 * https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
 */

module.exports = (config = {}) => {
  return [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',

    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ];
};
