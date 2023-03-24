import React from 'react';
import './OrderingForm.scss';
import { IOrderingFormErrors, IOrderingFormOrder, IOrderingFormState } from '../../types/types';
import ValidationErrorMessage from './ValidationErrorMessage/ValidationErrorMessage';
import validate from '../../utils/validate';

class OrderingForm extends React.Component<object, IOrderingFormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      formErrors: {},
      orderList: [],
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

    errors.name = validate.name(inputName);
    errors.surName = validate.surName(inputSurName);
    errors.dateDelivery = validate.dateDelivery(dateDelivery);
    errors.cityDelivery = validate.cityDelivery(cityDelivery);
    errors.personalData = validate.personalData(personalData);
    errors.gender = validate.genderList(genderList);
    errors.avatar = validate.avatar(avatar);

    this.setState({ formErrors: errors });
    return !Object.values(errors).some((err) => err.length > 0);
  };
  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (this.formIsValid()) {
      setTimeout(() => alert('Done'), 0);
      setTimeout(() => this.refList.form.current?.reset(), 0);
    }
  };

  render() {
    const DELIVERY_CITIES = ['', 'Ankara', 'Minsk', 'Tbilisi', 'Vilnius', 'Warsaw'];
    const GENDERS = ['male', 'female'];
    return (
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
            <ValidationErrorMessage errorMessage={this.state.formErrors.name} />
          </label>

          <label>
            Surname:
            <input type="text" ref={this.refList.inputSurName} autoComplete="new-password" />
            <ValidationErrorMessage errorMessage={this.state.formErrors.surName} />
          </label>

          <label>
            Delivery date:
            <input type="date" ref={this.refList.inputDateDelivery} />
            <ValidationErrorMessage errorMessage={this.state.formErrors.dateDelivery} />
          </label>

          <label>
            Delivery city:
            <select ref={this.refList.selectCityDelivery}>
              {DELIVERY_CITIES.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            <ValidationErrorMessage errorMessage={this.state.formErrors.cityDelivery} />
          </label>

          <label className="personal-data-box">
            <input type="checkbox" ref={this.refList.inputPersonalData} />I allow to use my personal
            data:
            <ValidationErrorMessage errorMessage={this.state.formErrors.personalData} />
          </label>

          <div className="gender-box">
            Gender:
            <div className="radio-options-box">
              {GENDERS.map((gender, index) => (
                <label key={gender}>
                  <input
                    type="radio"
                    ref={this.refList.inputRadioGenderList[index]}
                    name="gender"
                  />
                  {gender}
                </label>
              ))}
              <ValidationErrorMessage errorMessage={this.state.formErrors.gender} />
            </div>
          </div>

          <label className="input-avatar-box">
            Your avatar:
            <input type="file" ref={this.refList.inputAvatar} accept="image/*" />
            <ValidationErrorMessage errorMessage={this.state.formErrors.avatar} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default OrderingForm;
