/**
 * ES6 loaders preset
 *
 * Use:
 *
 * babel-loader
 */

module.exports = (config = {}, options = {}) => {
  const plugins = require('../babel/plugins')();
  const presets = require('../babel/presets')();

  return {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      require('../loaders/babel.loader')({
        plugins,
        presets,
        ...options.babel,
      }),
      require('../loaders/eslint.loader')(options.lint),
    ],
    ...config,
  };
};
