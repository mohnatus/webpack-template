import React from 'react';
import ReactDOM from 'react-dom';
import Header from '~/js/components/header';

if (true) {
  console.log(2);
}
else {
  console.log("22");

}

ReactDOM.render(<Header page="ABOUT PAGE" />, document.getElementById('header'));
