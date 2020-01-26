/**
 * Svg loaders preset
 *
 * Use:
 *
 * svg-inline-loader
 * Inlines SVG as module
 */

module.exports = (config = {}, options = {}) => {
  return {
    test: /\.svg$/,
    use: [require('../loaders/svg.inline.loader')(options.svg)],
    ...config,
  };
};
