export interface IOrderingFormData {
  name: string | undefined;
  surname: string | undefined;
  dateDelivery: string | undefined;
  cityDelivery: string | undefined;
  personalData: boolean | undefined;
  gender: string | undefined;
  avatar: File | undefined;
}
export enum Status {
  INITIAL = 'initial',
  REJECT = 'reject',
  FULFILLED = 'fulfilled',
  PENDING = 'pending',
}
