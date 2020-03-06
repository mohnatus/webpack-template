/**
 * Images loaders preset
 *
 * Use:
 *
 * file-loader
 * Resolves import/require() on a file into a url and emits the file into the output directory
 */

module.exports = (PRODUCTION, options = {}) => {
  return {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      require("../loaders/file.loader")({
        name: "[name].[ext]",
        ...options
      })
    ]
  };
};
