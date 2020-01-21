const path = require('path');

module.exports = (mode, root) => {
  return {
    entry: path.resolve(root, 'src', 'index.js'),

    output: {
      path: path.resolve(root, 'dist'),
      filename: '[name].js',
    },

    // images && video
    media: {
      outputPath: 'media',
      filename: '[name].[ext]',
    },

    // assets to copy
    assets: [
      {
        from: path.resolve(root, 'src', 'assets'),
        to: path.resolve(root, 'dist', 'assets'),
      },
    ],

    inlineSvg: {
      from: path.resolve(root, 'src', 'icons'),
      options: {},
    },
  };
};
