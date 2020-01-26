/**
 * HtmlWebpackPlugin
 * https://webpack.js.org/plugins/html-webpack-plugin/
 *
 * Simplifies creation of HTML files to serve your webpack bundles.
 *
 * Options:
 * https://github.com/jantimon/html-webpack-plugin#options
 *
 * title {String}
 * The title to use for the generated HTML document
 *
 * filename {String}
 * The file to write the HTML to. Defaults to index.html.
 *
 * template {String}
 * Relative or absolute path to the template
 *
 * templateParameters {Boolean|Object|Function}
 * Allows to overwrite the parameters used in the template
 *
 * inject {Boolean|String}
 * Inject all assets into the given template or templateContent.
 * When passing true or 'body' all javascript resources will be placed at the bottom of the body element.
 * 'head' will place the scripts in the head element
 *
 * favicon {String}
 * Adds the given favicon path to the output HTML
 *
 * meta {String}
 * Allows to inject meta-tags
 *
 * base {Object|String|false}
 * Inject a base tag
 *
 * minify {Boolean|Object}
 * Controls if and in what ways the output should be minified
 *
 * hash {Boolean}
 * If true then append a unique webpack compilation hash to all included scripts and CSS files
 *
 * cache {Boolean}
 * Emit the file only if it was changed
 *
 * showErrors {Boolean}
 * Errors details will be written into the HTML page
 *
 * chunks {?}
 * Allows to add only some chunks (e.g only the unit-test chunk)
 *
 * chunksSortMode {String|Function}
 * Allows to control how chunks should be sorted before they are included to the HTML.
 * Allowed values are 'none' | 'auto' | 'dependency' | 'manual' | {Function}
 *
 * excludeChunks {Array.<string>}
 * Allows you to skip some chunks
 *
 * xhtml {Boolean}
 * If true render the link tags as self-closing
 */

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ options } = {}) => {
  return new HtmlWebpackPlugin(options);
};
