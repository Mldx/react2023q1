import React from 'react';
import './Navigate.scss';
import { NavLink } from 'react-router-dom';

interface INavigateLink {
  url: string;
  name: string;
}

function Navigate() {
  const navigateLinkList: INavigateLink[] = [
    { name: 'Home', url: '' },
    { name: 'About', url: 'about' },
    { name: 'Form', url: 'form' },
    { name: 'Api', url: 'api' },
  ];
  return (
    <nav className="navigate-container">
      {navigateLinkList.map((link) => (
        <NavLink className="navigate-link" to={link.url} key={link.name}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigate;
