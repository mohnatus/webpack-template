/**
 * eslint-loader
 * https://github.com/webpack-contrib/eslint-loader
 */

module.exports = (options = {}) => {
  return {
    loader: 'eslint-loader',
    options: {
      fix: true,
      emitError: true,
      emitWarning: true,
      ...options
    },
  };
};
