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
    test: /\.txt$/i,
    use: [require('../loaders/raw.loader')(mode)],
  };
};
