/**
 * Pug loaders preset
 *
 * Use:
 *
 * pug-loader
 */

module.exports = (mode, config, options = {}) => {
  return {
    test: /\.pug$/i,
    use: [require('../loaders/pug.loader')(mode, options)],
  };
};
