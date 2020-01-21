const path = require('path');

module.exports = (mode, root) => {
  return {
    entry: path.resolve(root, 'src', 'index.js'),

    output: {
      filename: 'main.js',
      path: path.resolve(root, 'dist'),
    },
  };
};
