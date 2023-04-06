import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../ui/Header/Header';

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default Layout;
