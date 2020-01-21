const path = require('path');

module.exports = (mode, root) => {
  return {
    entry: path.resolve(root, 'src', 'index.js'),

    output: {
      path: path.resolve(root, 'dist'),
      filename: '[name].js',
    },

    media: {
      outputPath: 'assets',
      filename: '[name].[ext]',
    },
  };
};
