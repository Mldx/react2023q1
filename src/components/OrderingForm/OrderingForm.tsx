import React from 'react';
import './OrderingForm.scss';
import './OrderCreatedWindow/OrderCreatedWindow.scss';
import { IOrderingFormData, IOrderingFormErrors, IOrderingFormState } from '../../types/types';
import validate from '../../utils/validator';
import ValidationErrorMessage from './ValidationErrorMessage/ValidationErrorMessage';
import OrderCardContainer from './OrderCardContainer/OrderCardContainer';
import OrderCreatedWindow from './OrderCreatedWindow/OrderCreatedWindow';

class OrderingForm extends React.Component<object, IOrderingFormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      formErrors: {},
      orderList: [],
      orderCreated: false,
    };
  }

  refList = {
    form: React.createRef<HTMLFormElement>(),
    inputName: React.createRef<HTMLInputElement>(),
    inputSurname: React.createRef<HTMLInputElement>(),
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
    const dataFromForm = this.getDataFromForm();
    const errors: IOrderingFormErrors = {};

    errors.name = validate.name(dataFromForm.name);
    errors.surname = validate.surname(dataFromForm.surname);
    errors.dateDelivery = validate.dateDelivery(dataFromForm.dateDelivery);
    errors.cityDelivery = validate.cityDelivery(dataFromForm.cityDelivery);
    errors.personalData = validate.personalData(dataFromForm.personalData);
    errors.gender = validate.gender(dataFromForm.gender);
    errors.avatar = validate.avatar(dataFromForm.avatar);

    this.setState({ formErrors: errors });
    return !Object.values(errors).some((err) => err.length > 0);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.formIsValid()) {
      this.setState({
        orderList: [...this.state.orderList, this.getDataFromForm()],
        orderCreated: true,
      });
      this.refList.form.current?.reset();
    }
  };

  private getDataFromForm = (): IOrderingFormData => {
    return {
      name: this.refList.inputName.current?.value,
      surname: this.refList.inputSurname.current?.value,
      dateDelivery: this.refList.inputDateDelivery.current?.value,
      cityDelivery: this.refList.selectCityDelivery.current?.value,
      personalData: this.refList.inputPersonalData.current?.checked,
      gender: this.refList.inputRadioGenderList.find((el) => el.current?.checked)?.current?.value,
      avatar: this.refList.inputAvatar.current?.files?.[0],
    };
  };

  render() {
    const DELIVERY_CITIES = ['', 'Ankara', 'Minsk', 'Tbilisi', 'Vilnius', 'Warsaw'];
    const GENDERS = ['male', 'female'];
    return (
      <>
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
            <input type="text" ref={this.refList.inputSurname} autoComplete="new-password" />
            <ValidationErrorMessage errorMessage={this.state.formErrors.surname} />
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
                    value={gender}
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
          <button type="submit">Submit</button>
        </form>
        <OrderCardContainer dataList={this.state.orderList} />
        {this.state.orderCreated && (
          <OrderCreatedWindow onAnimationEnd={() => this.setState({ orderCreated: false })} />
        )}
      </>
    );
  }
}

export default OrderingForm;
