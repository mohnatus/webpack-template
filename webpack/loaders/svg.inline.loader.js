/**
 * svg-inline-loader
 * https://webpack.js.org/loaders/svg-inline-loader/
 *
 * Inlines SVG as module
 *
 * Options:
 *
 * removeTags {Boolean}
 * Removes specified tags and its children
 *
 * removingTags {String[]}
 * This won't work unless you specify removeTags: true
 *
 * warnTags {String[]}
 * warns about tags
 *
 * removeSVGTagAttrs {Boolean}
 * Removes width and height attributes from <svg />
 *
 * removingTagAttrs {String[]}
 * Removes attributes from inside the <svg />
 *
 * warnTagAttrs {String[]}
 * Warns to console about attributes from inside the <svg />
 *
 * classPrefix {Boolean|String}
 * Adds a prefix to class names to avoid collision across svg files
 *
 * idPrefix {Boolean|String}
 * Adds a prefix to ids to avoid collision across svg files
 */

module.exports = (mode, options) => {
  return {
    loader: 'svg-inline-loader',
    options,
  };
};
