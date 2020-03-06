/**
 * Txt loaders preset
 *
 * Use:
 *
 * raw-loader
 * Imports files as a String
 */

module.exports = (PRODUCTION) => {
  return {
    test: /\.txt$/i,
    use: [require('../loaders/raw.loader')()]
  };
};
