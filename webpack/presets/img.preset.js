/**
 * Images loaders preset
 *
 * Use:
 *
 * url-loader
 * Transforms files into base64 URIs
 */

module.exports = (PRODUCTION, options = {}) => {
  return {
    test: /\.(png|jpe?g|gif|svg|ico)$/i,
    use: [
      require('../loaders/url.loader')({
        limit: 8192,
        filename: '[name].[ext]',
        ...options
      }),
    ]
  };
};
