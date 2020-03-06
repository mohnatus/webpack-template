/**
 * Pug loaders preset
 *
 * Use:
 *
 * pug-loader
 */

module.exports = (PRODUCTION) => {
  return {
    test: /\.pug$/i,
    use: [require('../loaders/pug.loader')()]
  };
};
