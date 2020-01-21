const path = require('path');

module.exports = (mode, root) => {
  return {
    entry: path.resolve(root, 'src', 'index.js'),

    output: {
      path: path.resolve(root, 'dist'),
      filename: '[name].js',
    },

    media: {
      outputPath: 'media',
      filename: '[name].[ext]',
    },

    assets: [
      {
        from: path.resolve(root, 'src', 'assets'),
        to: path.resolve(root, 'dist', 'assets'),
      },
    ],
  };
};
