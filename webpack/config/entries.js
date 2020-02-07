/**
 * webpack config entry sections
 */

const path = require('path');
const PATHS = require('./paths');

module.exports = (root) => {
  const entriesPath = path.resolve(root, PATHS.src.root, PATHS.src.js);

  return PATHS.entries.reduce((acc, entry) => {
    return { ...acc, [entry]: path.join(entriesPath, `${entry}.js`) }
  }, {})
};
