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

export interface IAddButtonState {
  isAdded: boolean;
  text: string;
}

export interface INavigateLinkProps {
  url: string;
  innerText: string;
}

export interface IOrderingFormErrors {
  name?: string;
  surName?: string;
  dateDelivery?: string;
  cityDelivery?: string;
  personalData?: string;
}
export interface IOrderingFormState {
  errors: IOrderingFormErrors;
}
