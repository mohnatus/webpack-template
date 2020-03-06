import 'Assets/scss/style.scss';
import Header from 'JS/components/header';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Header page='HOME PAGE' />,
  document.getElementById('header')
);

import(
  /*webpackChunkName: "module2" */
  './modules/module2'
).then(({ default: mod, }) => {
  mod.hello('hello');
  return true;
}).catch((err) => {
  return console.error(err);
});
