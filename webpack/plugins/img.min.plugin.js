/**
 * imagemin-webpack-plugin
 * https://github.com/Klathmon/imagemin-webpack-plugin#readme
 *
 * Uses Imagemin to compress all images in the project
 */

const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = ({ options } = {}) => {
  return new ImageminPlugin({
    test: /\.(jpe?g|png|gif|svg)$/i,
    ...options,
  });
};
