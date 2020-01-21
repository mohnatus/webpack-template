/**
 * Images loaders preset
 *
 * Use:
 *
 * url-loader
 * Transforms files into base64 URIs
 */

module.exports = (mode, options = {}) => {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      require('../loaders/url.loader')(mode, {
        limit: 8192,
        ...options,
      }),
    ].filter((loader) => loader),
  };
};
