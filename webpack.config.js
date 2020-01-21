const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';

  const config = require('./webpack/config')(mode, __dirname);

  return {
    mode,

    devtool: mode === 'development' ? 'inline-source-map' : 'source-map',

    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 9000,
    },

    module: {
      rules: [
        require('./webpack/presets/scss.preset')({ mode }),
        require('./webpack/presets/es6.preset')({ mode }),
        //require('./webpack/presets/jsx.preset')({ mode }),
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

    ...config,
  };
};
