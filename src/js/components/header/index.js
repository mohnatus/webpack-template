import React from 'react';
import './index.scss';

function Header({ page }) {
  return (
    <header className="header">
      <h1>{page}</h1>
    </header>
  );
}

export default Header;
