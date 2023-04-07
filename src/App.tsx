import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import { AboutPage, ErrorPage, FormPage, HomePage } from './components/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
      </Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
