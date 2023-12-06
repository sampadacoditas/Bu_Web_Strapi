export interface IPhoneInput {
  name: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  classNames?: string;
  reInitialize?: boolean;
  disabled?: boolean;
  commonSvgs?: {[key: string]: string};
}
