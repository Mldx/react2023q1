import React from 'react';
import './FormPage.scss';

class FormPage extends React.Component {
  render() {
    return (
      <div className="forms-page">
        <form className="ordering-form">
          <h1 className="ordering-title">Ordering form</h1>
          <input type="text" />

          <input type="date" />

          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <input type="checkbox" />

          <input type="radio" name="test" />
          <input type="radio" name="test" />

          <input type="file" />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormPage;
