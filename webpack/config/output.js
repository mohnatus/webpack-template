/**
 * Поле output в конфигурационном файле webpack
 * https://webpack.js.org/concepts/output/
 *
 * Tells webpack how to write the compiled files to disk
 *
 * Options:
 * https://webpack.js.org/configuration/output/
 *
 * filename {String|Function}
 *  determines the name of each output bundle
 *
 * path {String}
 * The output directory as an absolute path
 *
 * publicPath {String|Function}
 * Specifies the public URL of the output directory when referenced in a browser. A relative URL is resolved relative to the HTML page (or <base> tag)
 * Server-relative URLs, protocol-relative URLs or absolute URLs are also possible
 * In cases where the eventual publicPath of output files isn't known at compile time, it can be left blank and set dynamically at runtime via the __webpack_public_path__ variable in the entry point file
 * publicPath: 'https://cdn.example.com/assets/', // CDN (always HTTPS)
 * publicPath: '//cdn.example.com/assets/', // CDN (same protocol)
 * publicPath: '/assets/', // server-relative
 * publicPath: 'assets/', // relative to HTML page
 * publicPath: '../assets/', // relative to HTML page
 * publicPath: '', // relative to HTML page (same directory)
 *
 * chunkFilename {String}
 * Determines the name of non-entry chunk files
 */

const path = require('path');

module.exports = (root) => {
  return {
    publicPath:  process.env.NODE_ENV === 'production' ? './' : '/',
    path: path.resolve(root, 'dist'),
    filename: '[name].js',

  };
};
