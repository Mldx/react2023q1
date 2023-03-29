export interface IMobileInfo {
  id: string;
  model: string;
  color: string;
  ram: string;
  screen: string;
  cameras: string;
  price: string;
  image: string;
}

export interface IMobileInfoList {
  dataList: IMobileInfo[];
}

export interface INavigateLinkProps {
  url: string;
  innerText: string;
}

export interface IOrderingFormErrors {
  name?: string | '';
  surname?: string | '';
  dateDelivery?: string | '';
  cityDelivery?: string | '';
  personalData?: string | '';
  gender?: string | '';
  avatar?: string | '';
}

export interface IOrderingFormData {
  name: string | undefined;
  surname: string | undefined;
  dateDelivery: string | undefined;
  cityDelivery: string | undefined;
  personalData: boolean | undefined;
  gender: string | undefined;
  avatar: File | undefined;
}

export interface IOrderingFormState {
  formErrors: IOrderingFormErrors;
  orderList: IOrderingFormData[];
  orderCreated: boolean;
}
