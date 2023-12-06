type ITextAreaProps = JSX.IntrinsicElements["textarea"];

export interface ITextArea extends ITextAreaProps {
  name: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  classNames?: string;
}
