import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav className="navigate-container">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/aboasdsuadt">
            Error
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
