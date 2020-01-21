/**
 * Svg loaders preset
 *
 * Use:
 *
 * svg-inline-loader
 * Inlines SVG as module
 */

module.exports = (mode, config, options = {}) => {
  return {
    test: /\.svg$/,
    include: config.include,
    use: [require('../loaders/svg.inline.loader')(mode, options)],
  };
};
