const NAME_IS_MISSING = 'Please enter your name';
const NAME_IS_NOT_CAPITALIZE = 'Please enter your name with capital letters';

const SURNAME_IS_MISSING = 'Please enter your surname';
const SURNAME_IS_NOT_CAPITALIZE = 'Please enter your surname with capital letters';

const DELIVERY_DATE_IS_MISSING = 'Please choose the delivery date';
const DELIVERY_DATE_INCORRECT = 'Please choose the correct date';

const DELIVERY_CITY_IS_MISSING = 'Please choose your city for delivery';

const PERSONAL_DATA_ACCESSES_IS_MISSING = 'Please check the box';

const GENDER_IS_MISSING = 'Please choose the gender';

const FILE_IS_MISSING = 'Please add your avatar';
const FILE_IS_INCORRECT = 'Please add an image file';

const REG_EXP_CAPITALIZE_EN_RU = new RegExp(/[A-ZА-Я]/);

const checkName = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = NAME_IS_MISSING;
  } else if (!REG_EXP_CAPITALIZE_EN_RU.test(value[0])) {
    errorMessage = NAME_IS_NOT_CAPITALIZE;
  }
  return errorMessage;
};

const checkSurname = (value: string | undefined) => {
  let errorMessage = '';
  if (!value) {
    errorMessage = SURNAME_IS_MISSING;
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
