import { servicesFormType } from "../../constants/constants";

export interface IOption {
  label: string;
  value: string;
}

export interface IContactUsField {
  id: number;
  numberOfColumns: number;
  type: string;
  label: string;
  placeholder: string;
  name: string;
  isRequired?: boolean;
  maxLength?: number;
  options?: IOption[];
  reInitialize?: boolean;
  disabled?: boolean;
  commonSvgs?: {[key: string]: string}
}

export interface IServicesContactUs {
  fields: IContactUsField[];
  schema: any;
  initialValues: object;
  handleSubmit: (data: any) => any;
  constant: { [key: string]: any };
  customWrapperClass?: string;
  customBackgroundImgClass?: string;
  formType: servicesFormType;
  getFormmatedData?: (data: any) => any;
  sideFormImage?: string;
  commonSvgs?: {[key: string]: string}
}
