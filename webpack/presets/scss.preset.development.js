/**
 * Scss loaders preset for development mode
 *
 * Use:
 *
 * sass-loader
 * Loads a Sass/SCSS file and compiles it to CSS
 *
 * css-loader
 * Interprets @import and url() like import/require()
 *
 * style-loader
 * Inject CSS into the DOM
 */

module.exports = (PRODUCTION) => {
  return {
    test: /\.s?css$/,
    use: [
      require('../loaders/style.loader')(),
      require('../loaders/css.loader')({
        importLoaders: 1
      }),
      require('../loaders/sass.loader')(),
    ]
  };
};
