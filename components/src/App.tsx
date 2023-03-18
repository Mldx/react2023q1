import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import ErrorPage from './components/ErrorPage/ErrorPage';
import AboutPage from './components/AboutPage/AboutPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
