import { useMemo } from "react";
import { INPUT_TYPES } from "@/constants/constants";
import { IInput } from "./IInput";
import style from "./Input.module.scss";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";

const Input = (props: IInput) => {
  const { SEARCH, TEXT } = INPUT_TYPES;
  const { type = TEXT, name, placeholder, label, value, className, onChange, onKeyDown, commonSvgs = {} } = props;
  const handleCrossClick = () => {
    const emptyChangeEvent: React.ChangeEvent<HTMLInputElement> = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    if (onChange) onChange(emptyChangeEvent);
  };
  const SearchCrossIcon = useMemo(() => {
    if (type === SEARCH && !value?.toString().length) {
      return (
        <span className={style.searchIcon}>
          <CustomImage src={getImageUrl(commonSvgs?.search)} alt="Search" />
        </span>
      );
    } else if (type === SEARCH && value?.toString().length) {
      return (
        <span onClick={handleCrossClick} className={`${style.crossIcon}`}>
          <CustomImage src={getImageUrl(commonSvgs?.inputCrossIcon)} alt="Cross" />
        </span>
      );
    }
    return null;
  }, [type, value]);
  const Label = useMemo(() => {
    return label?.toString().length ? <label className={style.label}>{label}</label> : null;
  }, [label]);
  const getInputClasses = useMemo(() => {
    const baseClass = style.input;
    const searchClass = type === SEARCH ? style.searchInput : null;
    return `${baseClass} ${searchClass}`;
  }, [type]);

  return (
    <div className={`${style.container} ${className}`}>
      {Label}
      <div className={style.inputContainer}>
        <input
          className={getInputClasses}
          type={type}
          name={name}
          placeholder={placeholder ?? name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {SearchCrossIcon}
      </div>
    </div>
  );
};
export default Input;
