/* eslint-disable */

const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const PRODUCTION = mode === 'production';

const PATHS = require('./webpack.paths');
const publicPath = PATHS.public || '';

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, PATHS.dist),
    port: 9000,
  },

  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.css',
      '.scss',
      ...PATHS.extensions,
    ],
    alias: (() => {
      const aliases = {};
      if (PATHS.alias) {
        Object.keys(PATHS.alias)
          .forEach((key) => {
            aliases[ key ] = path.resolve(__dirname, PATHS.alias[ key ]);
          });
      }

      return aliases;
    })(),
  },

  mode,
  devtool: PRODUCTION ? 'source-map' : 'inline-source-map',

  entry: (() => {
    const entry = {};
    Object.keys(PATHS.entry).forEach((key) => {
      entry[ key ] = './' + PATHS.entry[ key ];
    });
    return entry;
  })(),
  output: {
    publicPath: PRODUCTION ? PATHS.public : '/',
    path: path.resolve(__dirname, PATHS.dist),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },

  module: {
    rules: [
      /* SCSS */
      PRODUCTION
        ? require('./webpack/presets/scss.preset.production')(
          PRODUCTION,
          { publicPath, }
        )
        : require('./webpack/presets/scss.preset.development')(
          PRODUCTION,
          { publicPath, }
        ),

      /* PUG */
      require('./webpack/presets/pug.preset')(PRODUCTION),

      /* JS */
      require('./webpack/presets/jsx.preset')(),
      // require('./webpack/presets/es6.preset')(PRODUCTION),

      /* IMAGES */
      require('./webpack/presets/img.preset')(
        PRODUCTION,
        { outputPath: PATHS.output.images, }
      ),

      /* TXT */
      require('./webpack/presets/txt.preset')(PRODUCTION),

      /* FONTS */
      require('./webpack/presets/fonts.preset')(PRODUCTION, {
        outputPath: PATHS.output.fonts,
        publicPath,
      }),
    ],
  },

  plugins: [
    /* CLEAN FOLDERS */
    PRODUCTION
      ? require('./webpack/plugins/clean.plugin')()
      : null,

    /* LINT CSS */
    PRODUCTION
      ? require('./webpack/plugins/stylelint.plugin')()
      : null,

    /* EXTRACT CSS */
    PRODUCTION
      ? require('./webpack/plugins/css.extract.plugin')()
      : null,

    /* MINIFY IMAGES */
    PRODUCTION
      ? require('./webpack/plugins/img.min.plugin')()
      : null,

    /* COPY FILES */
    require('./webpack/plugins/copy.plugin')(),

    /* GENERATE HTML FILES */
    ...Object.keys(PATHS.html).map((entry) => {
      return require('./webpack/plugins/html.plugin')({
        template: path.resolve(__dirname, PATHS.html[ entry ]),
        chunks: [ entry, ],
        filename: `${entry}.2.html`,
        inject: true,
      });
    }),

    /* CREATE CHUNKS LIST FILES */
    require('./webpack/plugins/chunks.plugin')({
      outputPath: path.resolve(__dirname, PATHS.output.chunks),
      fileExtension: '.html',
    }),

  ].filter(Boolean),


  optimization: require('./webpack/config/optimization')(PRODUCTION),
};
/* eslint-disable */
