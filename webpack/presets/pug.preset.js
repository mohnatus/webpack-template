/**
 * Pug loaders preset
 *
 * Use:
 *
 * pug-loader
 */

module.exports = (config = {}, options = {}) => {
  return {
    test: /\.pug$/i,
    use: [require('../loaders/pug.loader')(options.pug)],
    ...config,
  };
};
