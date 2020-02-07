/**
 * Images loaders preset
 *
 * Use:
 *
 * file-loader
 * Resolves import/require() on a file into a url and emits the file into the output directory
 */

module.exports = () => {
  return {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
}