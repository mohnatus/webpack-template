/**
 * copy-webpack-plugin
 * https://webpack.js.org/plugins/copy-webpack-plugin/
 *
 * Copies individual files or entire directories, which already exist, to the build directory
 */

const CopyPlugin = require('copy-webpack-plugin');

module.exports = (mode, patterns, options) => {
  return new CopyPlugin(patterns, options);
};
