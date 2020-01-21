/**
 * style-loader
 * https://webpack.js.org/loaders/style-loader/
 *
 * Inject CSS into the DOM
 *
 * Options:
 *
 * injectType {String}
 * Allows to setup how styles will be injected into the DOM
 * [styleTag, singletonStyleTag, lazyStyleTag, lazySingletonStyleTag, linkTag]
 *
 * attributes {Object}
 * Adds custom attributes to tag
 *
 * insert {String|Function}
 * Inserts tag at the given position into the DOM
 * [head, body]
 *
 * base {Number}
 * Sets module ID base (DLLPlugin)
 *
 * esModule {Boolean}
 * Use ES modules syntax
 */

module.exports = (mode, options = {}) => ({
  loader: 'style-loader',
  options,
});
