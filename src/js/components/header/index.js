import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

function Header ({ page, }) {
  return (
    <header className='header'>
      <h1> {page} </h1>{' '}
    </header>
  );
}

Header.propTypes = { page: PropTypes.string, };

export default Header;
