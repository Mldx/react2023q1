import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component<object, { isChangedPage: boolean }> {
  constructor(props: object) {
    super(props);
    this.state = { isChangedPage: false };
  }

  handleClick = () => {
    this.setState({ isChangedPage: !this.state.isChangedPage });
  };
  toggleActivePageClass = (page: string) => {
    const currentPage = window.location.pathname.split('/')[1];
    return currentPage === page ? 'activePage' : '';
  };

  render() {
    return (
      <header className={'header'}>
        <nav className="navigate-container">
          <Link
            className={`navigate-link ${this.toggleActivePageClass('')}`}
            to="/"
            onClick={this.handleClick}
          >
            Home
          </Link>
          <Link
            className={`navigate-link ${this.toggleActivePageClass('about')}`}
            to="/about"
            onClick={this.handleClick}
          >
            About
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
