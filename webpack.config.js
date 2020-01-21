const path = require('path');
const mode = 'production';

module.exports = {
  mode,
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      require('./webpack/presets/scss.preset')({
        mode,
      }),
    ],
  },

  plugins: [
    require('./webpack/plugins/css.extract.plugin')(mode),
    require('./webpack/plugins/html.plugin')(mode, {
      title: 'Document Title',
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      inject: 'body',
      meta: {
        description: 'lalala',
      },
      cache: true,
      errors: true,
    }),
  ],
};
