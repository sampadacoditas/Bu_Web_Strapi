export interface IOption {
  label: string;
  value: string | number;
}

export interface IFormMultiSelect {
  isRequired?: boolean;
  label: string;
  placeholder: string;
  name: string;
  classNames?: string;
  options: IOption[];
  isMulti?: boolean;
  isClearable?: boolean;
  showSearchIcon?: boolean;
  showDropdownIndicator?: boolean;
  showCheckbox?: boolean;
  hideLabelFromOption?: boolean;
  shownMenuWhileTyping?: boolean;
  isSearchable?: boolean;
  customStyle?: any;
  disabled?: boolean;
}
