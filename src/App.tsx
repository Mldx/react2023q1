import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import AboutPage from './components/AboutPage/AboutPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import FormPage from './components/FormPage/FormPage';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/form" element={<FormPage />}></Route>
          <Route path="/api" element={<SearchPage />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
