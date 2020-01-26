const path = require('path');

module.exports = (root) => {
  return {
    clean: {
      options: {},
    },
    styleLint: {
      options: {}
    },
    cssExtract: {
      options: {},
    },
    imgMin: {
      options: {},
    },
    copy: {
      patterns: [
        {
          from: path.resolve(root, 'src', 'assets'),
          to: path.resolve(root, 'dist', 'assets'),
        },
      ],
      options: {},
    },
    html: {
      options: {
        template: path.resolve(root, 'src', 'index.pug'),
      },
    },
  };
};
