/**
 * css-loader
 * https://webpack.js.org/loaders/css-loader/
 *
 * Interprets @import and url() like import/require() and will resolve them
 *
 * Options:
 *
 * url {Boolean|Function}
 * Enables/Disables url / image-set functions handling
 *
 * import {Boolean|Function}
 * Enables/Disables @import at-rules handling
 *
 * modules {Boolean|String|Object}
 * Enables/Disables CSS Modules and their configuration
 *
 * sourceMap {Boolean}
 * Enables/Disables generation of source maps
 *
 * importLoaders {Number}
 * Enables/Disables or setups number of loaders applied before CSS loader
 *
 * localsConvention {String}
 * Style of exported classnames
 *
 * onlyLocals {Boolean}
 * Export only locals
 *
 * esModule {Boolean}
 * Use ES modules syntax
 */

module.exports = (options = {}) => {
  return {
    loader: 'css-loader',
    options,
  };
};
