module.exports = (config = {}) => {
  return [config.jsx ? '@babel/preset-react' : '@babel/preset-env'];
};
