/**
 * chunks-webpack-plugin
 * https://github.com/yoriiis/chunks-webpack-plugin
 */
const ChunksWebpackPlugin = require('chunks-webpack-plugin');

module.exports = (options = {}) => {
  return new ChunksWebpackPlugin({
    templateScript: `<script src="{{chunk}}"></script>`,
    templateStyle: `<link rel="stylesheet" href="{{chunk}}" />`,
    generateChunksManifest: true,
    ...options
  });
};
