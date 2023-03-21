import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutPage from './components/AboutPage/AboutPage';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
