const presets = require('./webpack/babel/presets')({
  react: false,
});
const plugins = require('./webpack/babel/plugins')({
  react: false,
});

module.exports = {
  presets,
  plugins,
};
