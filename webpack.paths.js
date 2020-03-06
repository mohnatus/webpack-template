/* eslint-disable */

const src = 'src';

module.exports = {
  src, // папка с исходным кодом
  dist: 'dist', // папка для собранных файлов
  public: '', // publicPath

   // точки входа в проект (в формате объекта)
  entry: {
    home: src + '/js/home.js',
    about: src + '/js/about.js',
  },
  // названия папок внутри dist
  output: {
    images: 'img', // для изображений
    fonts: 'fonts', // для шрифтов
    chunks: 'chunks', // для файлов со списком чанков
  },

  // генерация HTML-файлов для точек входа
  html: {
    home: src + '/pug/pages/home.pug',
    about: src + '/pug/pages/about.pug',
  },

  // алиасы
  alias: {
    Assets: src + '/assets',
    JS: src + '/js',
  },
};
/* eslint-disable */
