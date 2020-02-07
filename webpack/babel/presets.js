module.exports = (config = {}) => {
  return [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        useBuiltIns: 'usage',
      },
    ],
    config.jsx ? '@babel/preset-react' : null,
  ].filter((p) => p);
};
