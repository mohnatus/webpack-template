const path = require('path');

module.exports = (mode, root) => {
  return {
    rules: {
      'jsx': false
    },

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

    html: {
      template: path.resolve(root, 'src', 'index.pug'),
      filename: 'home.html',
      inject: true,
    },
  };
};
