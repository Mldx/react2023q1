import React from 'react';
import './Header.scss';
import Navigate from '../Navigate/Navigate';

class Header extends React.Component {
  render() {
    return (
      <header className={'header'}>
        <Navigate></Navigate>
      </header>
    );
  }
}

export default Header;
