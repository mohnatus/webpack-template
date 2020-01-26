/**
 * Webpack config optimization section
 * https://webpack.js.org/configuration/optimization/
 *
 * runtimeChunk
 * Setting to true or 'multiple' adds an additional chunk to each entrypoint containing only the runtime
 * name: entrypoint => `runtime~${entrypoint.name}`
 * The value 'single' instead creates a runtime file to be shared for all generated chunks
 * name: 'runtime'
 * By setting optimization.runtimeChunk to object it is only possible to provide the name property which stands for the name or name factory for the runtime chunks
 * Default is false: each entry chunk embeds runtime
 */

module.exports = () => ({
  runtimeChunk: {
    name: 'webpack.runtime',
  },

  splitChunks: {
    chunks: 'all',
  },
});
