import React from 'react';
import './Navigate.scss';
import NavigateLink from './NavigateLink/NavigateLink';

class Navigate extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render() {
    return (
      <nav className="navigate-container">
        <NavigateLink innerText="Home" url="" />
        <NavigateLink innerText="About" url="about" />
        <NavigateLink innerText="Form" url="form" />
      </nav>
    );
  }
}

export default Navigate;
