/**
 * ES6 loaders preset
 *
 * Use:
 *
 * babel-loader
 */

module.exports = (mode, options = {}) => {
  const plugins = require('../babel/plugins')();
  const presets = require('../babel/presets')();
  return {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      require('../loaders/babel.loader')(mode, { plugins, presets }),
    ].filter((loader) => loader),
  };
};
