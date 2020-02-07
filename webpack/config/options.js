/**
 * Loaders options
 */

const PATHS = require('./paths');

module.exports = () => {
  return {
    js: {
      babel: {
        // babel-loader
      },
      lint: {
        // lint-loader
      },
    },

    img: {
      url: {
        // url-loader
        outputPath: `${PATHS.dist.img}/`,
        filename: '[name].[ext]',
      },
    },

    svg: {
      svg: {
        // svg-inline-loader
      },
    },

    pug: {
      pug: {
        // pug-loader
      },
    },

    css: {
      style: {
        // style-loader
      },
      extract: {
        // mini-css-extract-loader
        publicPath: `${PATHS.public}/`
      },
      css: {
        // css-loader
      },
      pcss: {
        // postcss-loader
      },
      scss: {
        // sass-loader
      },
    },

    txt: {
      raw: {
        // raw-loader
      },
    },

    fonts: {

      file: {
        // file-loader
        name: '[name].[ext]',
        outputPath: `${PATHS.dist.fonts}/`
      }
    }
  };
};
