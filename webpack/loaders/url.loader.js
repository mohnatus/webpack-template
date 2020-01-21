/**
 * url-loader
 * https://webpack.js.org/loaders/url-loader/
 * Transforms files into base64 URIs
 *
 * Options:
 *
 * fallback {String}
 * Specifies an alternative loader to use when a target file's size exceeds the limit set in the limit option
 *
 * limit {Number|Boolean|String}
 * Number: Specifying the maximum size of a file in bytes
 * Boolean: Enable or disable transform files into base64
 *
 * mimetype {String}
 * Sets the MIME type for the file to be transformed
 *
 * esModule {Boolean}
 * By default, file-loader generates JS modules that use the ES modules syntax
 */

module.exports = (mode, options) => {
  return {
    loader: 'url-loader',
    options,
  };
};
