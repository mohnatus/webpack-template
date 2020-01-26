/**
 * StylelintWebpackPlugin
 * https://webpack.js.org/plugins/stylelint-webpack-plugin/
 *
 * Options:
 *
 * configFile {String}
 * Specify the config file location to be used by stylelint
 *
 * context {String}
 * A string indicating the root of your files
 *
 * files {String|String[]}
 * Specify the glob pattern for finding files
 *
 * fix {Boolean}
 * If true, stylelint will fix as many errors as possible
 *
 * formatter {String|Function}
 * Specify the formatter that you would like to use to format your results
 *
 * lintDirtyModulesOnly {Boolean}
 * Lint only changed files, skip lint on start
 *
 * stylelintPath {String}
 * Path to stylelint instance that will be used for linting
 */
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = ({ options } = {}) => {
  return new StylelintPlugin({
    fix: true,

    ...options
  });
};
