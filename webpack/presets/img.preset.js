/**
 * Images loaders preset
 *
 * Use:
 *
 * url-loader
 * Transforms files into base64 URIs
 */

module.exports = (mode, config, options = {}) => {
  return {
    test: /\.(png|jpe?g|gif|svg|ico)$/i,
    exclude: config.exclude,
    use: [
      require('../loaders/url.loader')(mode, {
        limit: 8192,
        ...options,
      }),
    ].filter((loader) => loader),
  };
};
