/**
 * ES6 loaders preset
 *
 * Use:
 *
 * babel-loader
 * eslint-loader
 */

module.exports = (PRODUCTION) => {
  return {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      require('../loaders/babel.loader')(),
      // PRODUCTION ? require('../loaders/eslint.loader')() : null,
    ].filter(Boolean)
  };
};
