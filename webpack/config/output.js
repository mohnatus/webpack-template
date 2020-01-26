const path = require('path');

module.exports = (root) => {
  return {
    path: path.resolve(root, 'dist'),
    filename: '[name].js',
  };
};
