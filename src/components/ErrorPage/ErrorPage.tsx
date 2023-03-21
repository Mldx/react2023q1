import React from 'react';
import './ErrorPage.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-page">
        <div className="error-container">
          <p className="error-container__title">Oops!</p>
          <h1 className="error-container__404">404</h1>
          <p className="error-container__description">THE PAGE CAN&apos;T BE FOUND</p>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
