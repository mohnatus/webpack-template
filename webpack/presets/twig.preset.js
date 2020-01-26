/**
 * Twig loaders preset
 *
 * Use:
 *
 * raw-loader
 * Imports files as a String
 */

module.exports = (config = {}, options = {}) => {
  return {
    test: /\.twig$/i,
    use: [require('../loaders/raw.loader')(options.raw)],
    ...config,
  };
};
