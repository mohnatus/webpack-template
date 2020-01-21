/**
 * sass-loader
 * https://webpack.js.org/loaders/sass-loader/
 *
 * Loads a Sass/SCSS file and compiles it to CSS
 *
 * Options
 *
 * implementation {Function}
 * Determines which implementation of Sass to use
 *
 * sassOptions {Object|Function}
 * Options for Node Sass or Dart Sass implementation
 * https://github.com/sass/node-sass/#options
 * https://github.com/sass/dart-sass#javascript-api
 *
 * prependData {String|Function}
 * Prepends Sass/SCSS code before the actual entry file
 *
 * sourceMap {Boolean}
 * Enables/Disables generation of source maps
 *
 * webpackImporter {Boolean}
 * Enables/Disables the default Webpack importer
 */

module.exports = (mode, options = {}) => {
  return {
    loader: 'sass-loader',
    options,
  };
};
