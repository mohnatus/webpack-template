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

module.exports = (config = {}, options = {}) => {
  return {
    test: /\.s?css$/,
    use: [
      require('../loaders/style.loader')(options.style),
      require('../loaders/css.loader')({
        importLoaders: 1,
        ...options.css,
      }),
      require('../loaders/sass.loader')(options.scss),
    ],
    ...config,
  };
};
