import React from 'react';
import './OrderingForm.scss';
import { IOrderingFormErrors, IOrderingFormState } from '../../types/types';

class OrderingForm extends React.Component<object, IOrderingFormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      errors: {
        name: '',
        surName: '',
        dateDelivery: '',
        cityDelivery: '',
        personalData: '',
      },
    };
  }

  refList = {
    form: React.createRef<HTMLFormElement>(),
    inputName: React.createRef<HTMLInputElement>(),
    inputSurName: React.createRef<HTMLInputElement>(),
    inputDateDelivery: React.createRef<HTMLInputElement>(),
    selectCityDelivery: React.createRef<HTMLSelectElement>(),
    inputPersonalData: React.createRef<HTMLInputElement>(),
  };

  formIsValid = () => {
    const [inputName, inputSurName, dateDelivery, cityDelivery, personalData] = [
      this.refList.inputName.current?.value,
      this.refList.inputSurName.current?.value,
      this.refList.inputDateDelivery.current?.value,
      this.refList.selectCityDelivery.current?.value,
      this.refList.inputPersonalData.current?.checked,
    ];

    const errors: IOrderingFormErrors = {};
    let formIsValid = true;
    const currentDate = new Date();

    if (!inputName) {
      formIsValid = false;
      errors['name'] = 'Please enter name';
    }
    if (!inputSurName) {
      formIsValid = false;
      errors['surName'] = 'Please enter surname';
    }
    if (!dateDelivery) {
      formIsValid = false;
      errors['dateDelivery'] = 'Please enter delivery date';
    }
    if (
      dateDelivery &&
      (new Date(dateDelivery) <= currentDate || new Date(dateDelivery).getFullYear() > 2024)
    ) {
      formIsValid = false;
      errors['dateDelivery'] = 'Please enter correct date';
    }
    if (!cityDelivery) {
      formIsValid = false;
      errors['cityDelivery'] = 'Please enter city delivery';
    }

    console.log(personalData);
    if (!personalData) {
      formIsValid = false;
      errors['personalData'] = 'Please agree checkbox';
    }
    this.setState({ errors });
    return formIsValid;
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.formIsValid()) {
      this.refList.form.current?.reset();
    }
  };
  render() {
    return (
      <>
        <div>
          <form
            className="ordering-form"
            onSubmit={this.handleSubmit}
            ref={this.refList.form}
            noValidate={true}
          >
            <label>
              Name:
              <input type="text" ref={this.refList.inputName} autoComplete="new-password" />
              <span className="validation-error">{this.state.errors['name']}</span>
            </label>
            <label>
              Surname:
              <input type="text" ref={this.refList.inputSurName} autoComplete="new-password" />
              <span className="validation-error">{this.state.errors['surName']}</span>
            </label>
            <label>
              Delivery date:
              <input type="date" ref={this.refList.inputDateDelivery} />
              <span className="validation-error">{this.state.errors['dateDelivery']}</span>
            </label>
            <label>
              Delivery city:
              <select ref={this.refList.selectCityDelivery}>
                <option></option>
                <option>Baranovichi</option>
                <option>Minsk</option>
                <option>Grodno</option>
                <option>Brest</option>
              </select>
              <span className="validation-error">{this.state.errors['cityDelivery']}</span>
            </label>
            <label className="checkbox-personal-data">
              <input type="checkbox" ref={this.refList.inputPersonalData} />I consent to my personal
              data:
              <span className="validation-error">{this.state.errors['personalData']}</span>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default OrderingForm;
