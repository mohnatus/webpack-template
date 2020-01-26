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

module.exports = (config = {}, options = {}) => {
  return {
    test: /\.s?css$/,
    use: [
      require('../loaders/css.extract.loader')(options.extract),
      require('../loaders/css.loader')({
        importLoaders: 2,
        ...options.css,
      }),
      require('../loaders/postcss.loader')(options.pcss),
      require('../loaders/sass.loader')(options.scss),
    ],
    ...config,
  };
};
