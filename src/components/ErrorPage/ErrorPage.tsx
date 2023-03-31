import React from 'react';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <p className="error-container__title">Oops!</p>
        <h1 className="error-container__404">404</h1>
        <p className="error-container__description">THE PAGE CAN&apos;T BE FOUND</p>
        <Link className="home-button" to={'/'}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
