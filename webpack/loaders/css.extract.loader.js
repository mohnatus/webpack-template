/**
 * MiniCssExtractPlugin
 * https://webpack.js.org/plugins/mini-css-extract-plugin/
 *
 * Extracts CSS into separate files
 *
 * Options:
 *
 * publicPath {String|Function}
 * Specifies a custom public path for the target file(s)
 *
 * esModule {Boolean}
 * Enable a ES module syntax using
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (options = {}) => {
  return {
    loader: MiniCssExtractPlugin.loader,
    options
  };
};
