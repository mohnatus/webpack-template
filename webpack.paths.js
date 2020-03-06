const src = 'src';

module.exports = {
  src,
  dist: 'dist',
  public: '',
  entry: {
    home: src + '/js/home.js',
    about: src + '/js/about.js',
  },
  extensions: [],
  alias: {
    Assets: src + '/assets',
    JS: src + '/js',
  },
  output: {
    images: 'img',
    fonts: 'fonts',
    chunks: 'chunks',
  },
  html: {
    home: src + '/pug/pages/home.pug',
    about: src + '/pug/pages/about.pug',
  },
};
