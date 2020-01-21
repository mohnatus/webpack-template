/**
 * imagemin-webpack-plugin
 * https://github.com/Klathmon/imagemin-webpack-plugin#readme
 *
 * Uses Imagemin to compress all images in the project
 */

const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = (mode, options = {}) => {
  return new ImageminPlugin({
    disable: mode !== 'production',
    test: /\.(jpe?g|png|gif|svg)$/i,
    ...options,
  });
};
