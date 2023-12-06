export interface IContactUsField {
  id: number;
  numberOfColumns: number;
  type: string;
  label: string;
  placeholder: string;
  name: string;
  isRequired?: boolean;
  maxLength?: number;
}

interface IFormContents {
  [key: string]: string;
}

export interface IContactUsForm {
  title: string;
  description: string;
  formContents: IFormContents;
  contentContainerStyle?: string;
  fields: IContactUsField[];
  schema: any;
  initialValues: object;
  handleSubmit: (data: IData) => void;
  constant: { [key: string]: any };
  getFormattedData?: (data: any) => any;
  commonSvgs?: { [key: string]: string };
}

export interface IData {
  email: string;
  enquiry: { value: string; label: string };
  message: string;
  mobile: string;
  name: string;
}
