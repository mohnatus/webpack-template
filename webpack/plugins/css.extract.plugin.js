/**
 * MiniCssExtractPlugin
 * https://webpack.js.org/plugins/mini-css-extract-plugin/
 *
 * This plugin extracts CSS into separate files.
 * It creates a CSS file per JS file which contains CSS.
 *
 * Options similar to the same options in webpackOptions.output
 *
 * filename {String}
 * chunkFilename {String}
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (options = {}) => {
  return new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
    ...options
  });
};
