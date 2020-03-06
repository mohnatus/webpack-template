/**
 * raw-loader
 * https://webpack.js.org/loaders/raw-loader/
 *
 * Allows importing files as a String
 *
 * Options:
 *
 * esModule {Boolean}
 * By default, raw-loader generates JS modules that use the ES modules syntax
 */

module.exports = (options = {}) => {
  return {
    loader: 'raw-loader',
    options
  };
};
