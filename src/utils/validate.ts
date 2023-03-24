import React from 'react';

const NAME_IS_MISSING = 'Please enter your name';
const NAME_IS_NOT_CAPITALIZE = 'Please enter your name with capital letters';

const SURNAME_IS_MISSING = 'Please enter your surname';
const SURNAME_IS_NOT_CAPITALIZE = 'Please enter your surname with capital letters';

const DELIVERY_DATE_IS_MISSING = 'Please choose the delivery date';
const DELIVERY_DATE_INCORRECT = 'Please choose the correct date';

const DELIVERY_CITY_IS_MISSING = 'Please choose your city for delivery';

const PERSONAL_DATA_ACCESSES_IS_MISSING = 'Please check the box';

const GENDER_IS_MISSING = 'Please choose the gender';

const FILE_IS_MISSING = 'Please add your image';
const FILE_IS_INCORRECT = 'Please add an image file';

const checkName = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = NAME_IS_MISSING;
  } else if (!/[A-Z]/.test(value[0])) {
    errorMessage = NAME_IS_NOT_CAPITALIZE;
  }
  return errorMessage;
};

const checkSurname = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = SURNAME_IS_MISSING;
  } else if (!/[A-Z]/.test(value[0])) {
    errorMessage = SURNAME_IS_NOT_CAPITALIZE;
  }
  return errorMessage;
};
const checkDateDelivery = (value: string | undefined) => {
  let errorMessage = '';
  const today = new Date();
  const MAX_YEAR_DELIVERY = 2030;
  if (!value) {
    errorMessage = DELIVERY_DATE_IS_MISSING;
  } else {
    const selectedDate = new Date(value);
    if (selectedDate <= today || selectedDate.getFullYear() > MAX_YEAR_DELIVERY) {
      errorMessage = DELIVERY_DATE_INCORRECT;
    }
  }
  return errorMessage;
};

const checkCityDelivery = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = DELIVERY_CITY_IS_MISSING;
  }
  return errorMessage;
};
const checkPersonalData = (value: boolean | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = PERSONAL_DATA_ACCESSES_IS_MISSING;
  }
  return errorMessage;
};

const checkGender = (value: React.RefObject<HTMLInputElement>[]) => {
  let errorMessage = '';
  if (!value.some((opinion) => opinion.current?.checked)) {
    errorMessage = GENDER_IS_MISSING;
  }
  return errorMessage;
};
const checkAvatar = (value: FileList | null | undefined) => {
  let errorMessage = '';
  if (value) {
    if (value.length === 0) {
      errorMessage = FILE_IS_MISSING;
    } else if (!value[0]?.type.includes('image')) {
      errorMessage = FILE_IS_INCORRECT;
    }
  }
  return errorMessage;
};

const validator = {
  name: checkName,
  surName: checkSurname,
  dateDelivery: checkDateDelivery,
  cityDelivery: checkCityDelivery,
  personalData: checkPersonalData,
  genderList: checkGender,
  avatar: checkAvatar,
};

export default validator;
