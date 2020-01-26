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
        outputPath: 'media',
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
  };
};
