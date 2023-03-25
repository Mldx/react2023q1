import React from 'react';
import './FormPage.scss';
import OrderingForm from '../OrderingForm/OrderingForm';

class FormPage extends React.Component {
  render() {
    return (
      <div className="form-page">
        <OrderingForm />
      </div>
    );
  }
}
export default FormPage;
