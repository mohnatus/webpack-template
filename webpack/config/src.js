const path = require('path');

module.exports = (root) => {
  return {
    js: {},

    img: {
      exclude: path.resolve(root, 'src', 'icons'),
    },

    svg: {
      include: path.resolve(root, 'src', 'icons'),
    },

    pug: {},

    txt: {},
  };
};
