/**
 * ES6 loaders preset
 *
 * Use:
 * babel-loader
 */

module.exports = (config = {}, options = {}) => {
  const plugins = require('../babel/plugins')({ jsx: true });
  const presets = require('../babel/presets')({ jsx: true });

  return {
    test: /\.jsx?$/,
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
