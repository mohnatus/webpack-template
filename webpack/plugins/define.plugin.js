/**
 * define-plugin
 * https://webpack.js.org/plugins/define-plugin/
 *
 * Allows to create global constants which can be configured at compile time
 */

const { DefinePlugin } = require('webpack');

module.exports = (definitions = {}) => {
  return new DefinePlugin(definitions);
};
