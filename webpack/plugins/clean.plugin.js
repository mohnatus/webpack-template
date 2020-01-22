/**
 * clean-webpack-plugin
 * https://github.com/johnagan/clean-webpack-plugin
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (mode, config = {}) => {
  return new CleanWebpackPlugin(config);
};
