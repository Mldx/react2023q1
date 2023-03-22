import React from 'react';
import './NavigateLink.scss';
import { NavLink } from 'react-router-dom';
import { INavigateLinkProps } from '../../../types/types';

class NavigateLink extends React.Component<INavigateLinkProps> {
  render() {
    return (
      <NavLink to={this.props.url} className={'navigate-link'}>
        {this.props.innerText}
      </NavLink>
    );
  }
}

export default NavigateLink;
