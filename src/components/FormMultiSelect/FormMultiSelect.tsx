import Select from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import ValueContainer from "./ValueContainer";
import Option from "./Option";
import DropdownIndicator from "./DropdownIndicator";
import MultiValueRemove from "./MultiValueRemove";
import ClearIndicator from "./ClearIndicator";
import { IFormMultiSelect } from "./IFormMultiSelect";
import { selectStyles } from "./FormMultiSelect.styles";
import styles from "./FormMultiSelect.module.scss";

const FormMultiSelect = (props: IFormMultiSelect) => {
  const {
    isRequired,
    label,
    placeholder,
    name,
    classNames,
    options = [],
    isMulti = false,
    isClearable = true,
    showSearchIcon = false,
    showDropdownIndicator = true,
    showCheckbox = false,
    hideLabelFromOption = false,
    isSearchable = false,
    customStyle,
    disabled,
  } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${styles.inputWrapper} ${classNames}`}>
      <label className={styles.label}>
        {label} {isRequired ? <span className={styles.required}>*</span> : ""}
      </label>
      <div className={styles.selectContainer}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              isMulti={isMulti}
              isDisabled={disabled}
              styles={customStyle ? { ...selectStyles, ...customStyle } : selectStyles}
              options={options}
              isClearable={isClearable}
              pageSize={3}
              hideSelectedOptions={hideLabelFromOption}
              placeholder={placeholder}
              isSearchable={isSearchable}
              closeMenuOnSelect={!isMulti}
              blurInputOnSelect={!isMulti}
              components={{
                DropdownIndicator: props => (
                  <DropdownIndicator
                    {...props}
                    showDropdownIndicator={showDropdownIndicator}
                    showSearchIcon={showSearchIcon}
                  />
                ),
                Option: props => <Option {...props} showCheckbox={showCheckbox} />,
                ValueContainer,
                MultiValueRemove,
                ClearIndicator,
              }}
            />
          )}
        />
      </div>
      <span className={styles.error}>{errors[name]?.message && <>{errors[name]?.message}</>}</span>
    </div>
  );
};

export default FormMultiSelect;
