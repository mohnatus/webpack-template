/**
 * html-webpack-pug-plugin
 * https://github.com/negibouze/html-webpack-pug-plugin#readme
 */
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
module.exports = ({ options } = {}) => {
  return new HtmlWebpackPugPlugin(options);
};
