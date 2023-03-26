export const NAME_IS_MISSING = 'Please enter your name';
export const NAME_IS_NOT_CAPITALIZE = 'Please enter your name with capital letters';
export const NAME_IS_INCORRECT_LENGTH = 'Please enter your name with 3-16 letters';
export const NAME_IS_INCORRECT = 'Please enter your name only with EN or RU letters';

export const SURNAME_IS_MISSING = 'Please enter your surname';
export const SURNAME_IS_NOT_CAPITALIZE = 'Please enter your surname with capital letters';
export const SURNAME_IS_INCORRECT_LENGTH = 'Please enter your surname with 3-16 letters';
export const SURNAME_IS_INCORRECT = 'Please enter your surname only with EN or RU letters';

export const DELIVERY_DATE_IS_MISSING = 'Please choose the delivery date';
export const DELIVERY_DATE_INCORRECT = 'Please select a date from tomorrow to 2030 year';

export const DELIVERY_CITY_IS_MISSING = 'Please choose your city for delivery';

export const PERSONAL_DATA_ACCESSES_IS_MISSING = 'Please check the box';

export const GENDER_IS_MISSING = 'Please choose the gender';

export const FILE_IS_MISSING = 'Please add your avatar';
export const FILE_IS_INCORRECT = 'Please add an image file';

export const REG_EXP_CAPITALIZE_EN_RU = new RegExp(/[A-ZА-Я]/);
export const REG_EXP_EN_RU = new RegExp(/[^A-ZА-Я]/i);

const checkName = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = NAME_IS_MISSING;
  } else if (REG_EXP_EN_RU.test(value)) {
    errorMessage = NAME_IS_INCORRECT;
  } else if (value.length < 3 || value.length > 16) {
    errorMessage = NAME_IS_INCORRECT_LENGTH;
  } else if (!REG_EXP_CAPITALIZE_EN_RU.test(value[0])) {
    errorMessage = NAME_IS_NOT_CAPITALIZE;
  }
  return errorMessage;
};

const checkSurname = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = SURNAME_IS_MISSING;
  } else if (REG_EXP_EN_RU.test(value)) {
    errorMessage = SURNAME_IS_INCORRECT;
  } else if (value.length < 3 || value.length > 16) {
    errorMessage = SURNAME_IS_INCORRECT_LENGTH;
  } else if (!REG_EXP_CAPITALIZE_EN_RU.test(value[0])) {
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

const checkGender = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = GENDER_IS_MISSING;
  }
  return errorMessage;
};
const checkAvatar = (value: File | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = FILE_IS_MISSING;
  } else if (!value.type.includes('image')) {
    errorMessage = FILE_IS_INCORRECT;
  }
  return errorMessage;
};

const validator = {
  name: checkName,
  surname: checkSurname,
  dateDelivery: checkDateDelivery,
  cityDelivery: checkCityDelivery,
  personalData: checkPersonalData,
  gender: checkGender,
  avatar: checkAvatar,
};

export default validator;
