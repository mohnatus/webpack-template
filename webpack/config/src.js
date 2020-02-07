/**
 * Presets options
 */

const path = require('path');
const PATHS = require('./paths');

module.exports = (root) => {
  return {
    js: {},

    img: {
      exclude: path.resolve(root, PATHS.src.root, PATHS.src.icons),
    },

    svg: {
      include: path.resolve(root, PATHS.src.root, PATHS.src.icons),
    },

    pug: {},

    txt: {},

    fonts: {}
  };
};
