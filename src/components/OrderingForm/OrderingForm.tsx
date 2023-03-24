import React from 'react';
import './OrderingForm.scss';
import { IOrderingFormErrors, IOrderingFormState } from '../../types/types';

class OrderingForm extends React.Component<object, IOrderingFormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  refList = {
    form: React.createRef<HTMLFormElement>(),
    inputName: React.createRef<HTMLInputElement>(),
    inputSurName: React.createRef<HTMLInputElement>(),
    inputDateDelivery: React.createRef<HTMLInputElement>(),
    selectCityDelivery: React.createRef<HTMLSelectElement>(),
    inputPersonalData: React.createRef<HTMLInputElement>(),
    inputRadioGenderList: [
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
    ],
    inputAvatar: React.createRef<HTMLInputElement>(),
  };

  formIsValid = () => {
    const [inputName, inputSurName, dateDelivery, cityDelivery, personalData, genderList, avatar] =
      [
        this.refList.inputName.current?.value,
        this.refList.inputSurName.current?.value,
        this.refList.inputDateDelivery.current?.value,
        this.refList.selectCityDelivery.current?.value,
        this.refList.inputPersonalData.current?.checked,
        this.refList.inputRadioGenderList,
        this.refList.inputAvatar.current?.files,
      ];

    const errors: IOrderingFormErrors = {};
    let formIsValid = true;
    const currentDate = new Date();

    if (!inputName) {
      formIsValid = false;
      errors['name'] = 'Please enter your name';
    }
    if (inputName && !/[A-Z]/.test(inputName[0])) {
      formIsValid = false;
      errors['name'] = 'Please enter your name with capital letters';
    }
    if (!inputSurName) {
      formIsValid = false;
      errors['surName'] = 'Please enter your surname';
    }
    if (inputSurName && !/[A-Z]/.test(inputSurName[0])) {
      formIsValid = false;
      errors['surName'] = 'Please enter your surname with capital letters';
    }
    if (!dateDelivery) {
      formIsValid = false;
      errors['dateDelivery'] = 'Please choose the delivery date';
    }
    if (
      dateDelivery &&
      (new Date(dateDelivery) <= currentDate || new Date(dateDelivery).getFullYear() > 2030)
    ) {
      formIsValid = false;
      errors['dateDelivery'] = 'Please choose the correct date';
    }
    if (!cityDelivery) {
      formIsValid = false;
      errors['cityDelivery'] = 'Please choose your city for delivery';
    }
    if (!personalData) {
      formIsValid = false;
      errors['personalData'] = 'Please check the box';
    }
    if (!genderList.some((opinion) => opinion.current?.checked)) {
      formIsValid = false;
      errors['gender'] = 'Please choose the gender';
    }
    if (avatar && avatar.length === 0) {
      formIsValid = false;
      errors['avatar'] = 'Please add your avatar';
    }
    if (avatar && avatar[0] && !avatar[0]?.type.includes('image')) {
      formIsValid = false;
      errors['avatar'] = 'Please add image file';
    }
    this.setState({ errors });
    return formIsValid;
  };
  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (this.formIsValid()) {
      setTimeout(() => alert('Done'), 0);
      setTimeout(() => this.refList.form.current?.reset(), 0);
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

            <label className="personal-data-box">
              <input type="checkbox" ref={this.refList.inputPersonalData} />I allow to use my
              personal data:
              <span className="validation-error">{this.state.errors['personalData']}</span>
            </label>

            <div className="gender-box">
              Gender:
              <div className="radio-options-box">
                <label>
                  <input type="radio" ref={this.refList.inputRadioGenderList[0]} name="gender" />
                  male
                </label>
                <label>
                  <input type="radio" ref={this.refList.inputRadioGenderList[1]} name="gender" />
                  female
                </label>
                <span className="validation-error">{this.state.errors['gender']}</span>
              </div>
            </div>

            <label>
              Your avatar:
              <input type="file" ref={this.refList.inputAvatar} accept="image/*" />
              <span className="validation-error">{this.state.errors['avatar']}</span>
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
