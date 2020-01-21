/**
 * postcss-loader
 * https://webpack.js.org/loaders/postcss-loader/
 *
 * Process CSS with PostCSS
 *
 * Options:
 *
 * exec {Boolean}
 * Enable PostCSS Parser support in CSS-in-JS
 *
 * parser {String|Object}
 * Set PostCSS Parser
 *
 * syntax {String|Object}
 * Set PostCSS Syntax
 *
 * stringifier {String|Object}
 * Set PostCSS Stringifier
 *
 * config {Object}
 * Set postcss.config.js config path && ctx
 *
 * plugins {Array|Function}
 * Set PostCSS Plugins
 *
 * sourceMap {String|Boolean}
 * Enable Source Maps
 */

module.exports = (mode, options = {}) => {
  return {
    loader: 'postcss-loader',
    options,
  };
};
