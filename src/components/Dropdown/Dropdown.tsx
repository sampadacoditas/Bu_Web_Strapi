import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { IDropDown } from "./IDropdown";
import style from "./Dropdown.module.scss";

const Dropdown = (props: IDropDown) => {
  const { isRequired, label, placeholder, name, classNames, options } = props;

  const { register, watch, setValue } = useFormContext();

  const onOptionChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(name, event.target.value);
  };

  useEffect(() => {
    setValue(name, placeholder);
  }, [name, placeholder, setValue]);

  const toggleColor = watch(name) === placeholder ? style.placeholderCol : style.activeColor;

  return (
    <div className={`${style.dropdownWrapper} ${classNames}`}>
      <label className={style.label}>
        {label} {isRequired ? <span className={style.required}>*</span> : ""}
      </label>
      <select className={`${style.dropdown} ${toggleColor}`} {...register(name)} onChange={onOptionChangeHandler}>
        <option selected className={`${style.placeholder} ${style.option}`} value={placeholder}>
          {placeholder}
        </option>

        {options.map((option: any, index: any) => {
          return (
            <option className={style.option} value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
