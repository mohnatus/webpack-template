/**
 * file-loader
 * https://webpack.js.org/loaders/file-loader/
 * Resolves import/require() on a file into a url and emits the file into the output directory
 *
 * Options:
 *
 * name {String|Function}
 * Specifies a custom filename template for the target file(s)
 *
 * outputPath {String|Function}
 * Specify a filesystem path where the target file(s) will be placed
 *
 * publicPath {String|Function}
 * Specifies a custom public path for the target file(s)
 *
 * postTransformPublicPath {Function}
 * Specifies a custom function to post-process the generated public path
 *
 * context {String}
 * Specifies a custom file context.
 *
 * emitFile {Boolean}
 * If true, emits a file (writes a file to the filesystem).
 * If false, the loader will return a public URI but will not emit the file
 *
 * regExp {RegExp}
 * Specifies a Regular Expression to one or many parts of the target file path.
 * The capture groups can be reused in the name property using [N] placeholder.
 *
 * esModule {Boolean}
 * By default, file-loader generates JS modules that use the ES modules syntax.
 */

module.exports = (options = {}) => {
  return {
    loader: 'file-loader',
    options
  };
};
