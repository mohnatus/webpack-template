const path = require('path');

module.exports = (root) => {
  return {
    'home': path.resolve(root, 'src', 'index.js'),
    'about': path.resolve(root, 'src', 'about.js'),
  };
};
