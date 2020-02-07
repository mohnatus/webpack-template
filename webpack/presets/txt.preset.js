/**
 * Txt loaders preset
 *
 * Use:
 *
 * raw-loader
 * Imports files as a String
 */

module.exports = (config = {}, options = {}) => {
  return {
    test: /\.txt$/i,
    use: [require('../loaders/raw.loader')(options.raw)],
    ...config,
  };
};
