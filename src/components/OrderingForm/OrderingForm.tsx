import React, { useState } from 'react';
import './OrderingForm.scss';
import { IOrderingFormData } from '../../types/types';
import ValidationErrorMessage from './ValidationErrorMessage/ValidationErrorMessage';
import OrderCardContainer from './OrderCardContainer/OrderCardContainer';
import OrderCreatedWindow from './OrderCreatedWindow/OrderCreatedWindow';
import { SubmitHandler, useForm } from 'react-hook-form';
import validator from '../../utils/validator';
import getFirstFileFromList from '../../utils/getFirstFileFromList';

interface IOrderingForm {
  name: string;
  surname: string;
  dateDelivery: string;
  cityDelivery: string;
  personalData: boolean;
  gender: string;
  avatar: FileList;
}

function OrderingForm() {
  const DELIVERY_CITIES = ['', 'Ankara', 'Minsk', 'Tbilisi', 'Vilnius', 'Warsaw'];
  const GENDERS = ['male', 'female'];

  const [dataOrders, setDataOrders] = useState<IOrderingFormData[]>([]);
  const [orderCreated, setOrderCreated] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IOrderingForm>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IOrderingForm> = (data) => {
    const avatarObject = getFirstFileFromList(data.avatar);
    setDataOrders([...dataOrders, { ...data, avatar: avatarObject }]);
    setOrderCreated(true);
    reset();
  };

  return (
    <>
      <form className="ordering-form" onSubmit={handleSubmit(onSubmit)} noValidate={true}>
        <label>
          Name:
          <input
            type="text"
            autoComplete="new-password"
            {...register('name', {
              setValueAs: (value) => value.trim(),
              validate: (nameValue) => validator.name(nameValue),
            })}
          />
          <ValidationErrorMessage errorMessage={errors.name?.message} />
        </label>

        <label>
          Surname:
          <input
            type="text"
            autoComplete="new-password"
            {...register('surname', {
              setValueAs: (value) => value.trim(),
              validate: (surnameValue) => validator.surname(surnameValue),
            })}
          />
          <ValidationErrorMessage errorMessage={errors.surname?.message} />
        </label>

        <label>
          Delivery date:
          <input
            type="date"
            {...register('dateDelivery', {
              validate: (dateDeliveryValue) => validator.dateDelivery(dateDeliveryValue),
            })}
          />
          <ValidationErrorMessage errorMessage={errors.dateDelivery?.message} />
        </label>

        <label>
          Delivery city:
          <select
            {...register('cityDelivery', {
              validate: (cityDeliveryValue) => validator.cityDelivery(cityDeliveryValue),
            })}
          >
            {DELIVERY_CITIES.map((city) => (
              <option key={city}>{city}</option>
            ))}
          </select>
          <ValidationErrorMessage errorMessage={errors.cityDelivery?.message} />
        </label>

        <label className="personal-data-box">
          <input
            type="checkbox"
            {...register('personalData', {
              validate: (personalDataValue) => validator.personalData(personalDataValue),
            })}
          />
          I allow to use my personal data:
          <ValidationErrorMessage errorMessage={errors.personalData?.message} />
        </label>

        <div className="gender-box">
          Gender:
          <div className="radio-options-box">
            {GENDERS.map((gender) => (
              <label key={gender}>
                <input
                  type="radio"
                  {...register('gender', {
                    validate: (genderValue) => validator.gender(genderValue),
                  })}
                  name="gender"
                  value={gender}
                />
                {gender}
              </label>
            ))}
            <ValidationErrorMessage errorMessage={errors.gender?.message} />
          </div>
        </div>

        <label className="input-avatar-box">
          Your avatar:
          <input
            type="file"
            accept="image/*"
            {...register('avatar', {
              validate: (fileList) => validator.avatar(fileList[0]),
            })}
          />
          <ValidationErrorMessage errorMessage={errors.avatar?.message} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <OrderCardContainer dataList={dataOrders} />
      {orderCreated && <OrderCreatedWindow onAnimationEnd={() => setOrderCreated(false)} />}
    </>
  );
}

export default OrderingForm;
