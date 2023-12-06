type InputProps = JSX.IntrinsicElements["input"];

export interface IFormInput extends InputProps {
  name: string;
  label: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  classNames?: string;
  commonSvgs?: {[key: string]: string};
}
