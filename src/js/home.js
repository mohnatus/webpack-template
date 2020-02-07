import 'Assets/scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '~/js/components/header';



ReactDOM.render(<Header page="HOME PAGE" />, document.getElementById('header'));

import(
  /*webpackChunkName: "module2" */
  './modules/module2'
).then(({ default: mod }) => {
  mod.hello('hello');
})
