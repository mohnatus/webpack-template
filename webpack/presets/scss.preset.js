/**
 * Scss loaders preset
 *
 * Use:
 *
 * sass-loader
 * Loads a Sass/SCSS file and compiles it to CSS
 *
 * postcss-loader (production mode)
 * Process CSS with PostCSS
 *
 * css-loader
 * Interprets @import and url() like import/require()
 *
 * style-loader (development mode)
 * Inject CSS into the DOM
 *
 * MiniCssExtractPlugin.loader (production mode)
 * Extracts CSS into separate files
 */

module.exports = (mode, config = {}) => {
  return {
    test: /\.s?css$/,
    use: [
      config.mode === 'production'
        ? require('../loaders/css.extract.loader')
        : require('../loaders/style.loader')(mode),
      require('../loaders/css.loader')(mode, {
        importLoaders: 2,
      }),
      config.mode === 'production'
        ? require('../loaders/postcss.loader')(mode)
        : null,
      require('../loaders/sass.loader')(mode),
    ].filter((loader) => loader),
  };
};
