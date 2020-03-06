/**
 * Scss loaders preset for production mode
 *
 * Use:
 *
 * sass-loader
 * Loads a Sass/SCSS file and compiles it to CSS
 *
 * postcss-loader
 * Process CSS with PostCSS
 *
 * css-loader
 * Interprets @import and url() like import/require()
 *
 * MiniCssExtractPlugin.loader
 * Extracts CSS into separate files
 */

module.exports = (PRODUCTION, options = {}) => {
  return {
    test: /\.s?css$/,
    use: [
      require('../loaders/css.extract.loader')(options),
      require('../loaders/css.loader')({
        importLoaders: 2,
      }),
      require('../loaders/postcss.loader')(),
      require('../loaders/sass.loader')(),
    ]
  };
};
