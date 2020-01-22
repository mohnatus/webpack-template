const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';

  const config = require('./webpack/config')(mode, __dirname);

  return {
    entry: config.entry,

    output: config.output,

    mode,

    devtool: mode === 'development' ? 'inline-source-map' : 'source-map',

    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 9000,
    },

    module: {
      rules: [
        require('./webpack/presets/scss.preset')(mode),
        require('./webpack/presets/pug.preset')(mode),
        config.rules.jsx
          ? require('./webpack/presets/jsx.preset')(mode)
          : require('./webpack/presets/es6.preset')(mode),
        require('./webpack/presets/img.preset')(
          mode,
          { exclude: config.inlineSvg.from },
          config.media,
        ),
        require('./webpack/presets/txt.preset')(mode),
        require('./webpack/presets/svg.preset')(
          mode,
          { include: config.inlineSvg.from },
          config.inlineSvg.options,
        ),
      ].filter((rule) => rule),
    },

    plugins: [
      require('./webpack/plugins/clean.plugin')(mode),
      require('./webpack/plugins/css.extract.plugin')(mode),
      require('./webpack/plugins/img.min.plugin')(mode),
      require('./webpack/plugins/copy.plugin')(mode, config.assets),
      require('./webpack/plugins/html.plugin')(mode, config.html),
    ],
  };
};
