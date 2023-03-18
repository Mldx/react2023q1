import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Outlet></Outlet>
      </>
    );
  }
}

export default Layout;
