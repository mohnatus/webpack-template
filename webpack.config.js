const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const PRODUCTION = mode === 'production';

const rules = require('./webpack/config/rules')();
const src = require('./webpack/config/src')(__dirname);
const options = require('./webpack/config/options')();
const plugins = require('./webpack/config/plugins')(__dirname);

module.exports = {
  mode,
  devtool: PRODUCTION ? 'source-map' : 'inline-source-map',

  entry: require('./webpack/config/entries')(__dirname),
  output: require('./webpack/config/output')(__dirname),

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
  },

  optimization: PRODUCTION ? require('./webpack/config/optimization')() : {},

  module: {
    rules: [
      // scss
      PRODUCTION
        ? require('./webpack/presets/scss.preset.production')(
            src.css,
            options.css,
          )
        : require('./webpack/presets/scss.preset.development')(
            src.css,
            options.css,
          ),
      // pug
      require('./webpack/presets/pug.preset')(src.pug, options.pug),
      // js
      rules.jsx
        ? require('./webpack/presets/jsx.preset')(src.js, options.js)
        : require('./webpack/presets/es6.preset')(src.js, options.js),
      // img
      require('./webpack/presets/img.preset')(src.img, options.img),
      // txt
      require('./webpack/presets/txt.preset')(src.txt, options.txt),
      // svg
      require('./webpack/presets/svg.preset')(src.svg, options.svg),
    ],
  },

  plugins: [
    // require('./webpack/plugins/define.plugin')({
    //   'process.env.NODE_ENV': JSON.stringify(mode === 'production'),
    // }),
    require('./webpack/plugins/clean.plugin')(plugins.clean),
    PRODUCTION ? require('./webpack/plugins/stylelint.plugin')(plugins.styleLint)
    : null,
    PRODUCTION
      ? require('./webpack/plugins/css.extract.plugin')(plugins.cssExtract)
      : null,
    PRODUCTION
      ? require('./webpack/plugins/img.min.plugin')(plugins.imgMin)
      : null,
    require('./webpack/plugins/copy.plugin')(plugins.copy),
    ...plugins.html.map(options => {
      return require('./webpack/plugins/html.plugin')(options);
    }),

  ].filter(Boolean),
};
