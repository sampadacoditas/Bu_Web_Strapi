import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useFormContext, Controller } from "react-hook-form";
import { IPhoneInput } from "./IPhoneInput";
import styles from "./PhoneInput.module.scss";
import "react-phone-input-2/lib/style.css";
import { CustomImage } from "..";

const InputPhone = (props: IPhoneInput) => {
  const { label, placeholder, name, classNames, isRequired, reInitialize, commonSvgs } = props;
  const {
    control,
    formState: { errors },
    clearErrors,
    setValue,
  } = useFormContext();

  const [dialCode, setDialCode] = useState("");
  const [mobNumberWithoutDialCode, setMobNumberWithoutDialCode] = useState("");
  const [isTypingAllowed, setIsTypingAllowed] = useState(true);
  const DEFAULT_COUNTRY_CODE = "91";
  useEffect(() => {
    setIsTypingAllowed(true);
  }, [reInitialize]);

  const handleChange = (data: any, country: any, _e: any, formattedValue: any) => {
    const rowNumber = data.slice(country.dialCode?.length);
    setMobNumberWithoutDialCode(rowNumber);
    if (dialCode != country.dialCode) {
      setDialCode(country.dialCode);
    }
    if (rowNumber && country.format.length != formattedValue.length - 1) {
      setValue(name, `+${country.dialCode} ${rowNumber}`, { shouldValidate: true });
      setIsTypingAllowed(true);
    }
    if (country.format.length == formattedValue.length) {
      setIsTypingAllowed(false);
    }
    if (!rowNumber) {
      setValue(name, `${country.dialCode}`, { shouldValidate: true });
    }
  };

  const handleKeyDown = (e: any) => {
    if (
      !isTypingAllowed &&
      mobNumberWithoutDialCode &&
      ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))
    ) {
      e.preventDefault();
    }
  };

  const handleBlur = () => {
    if (errors[name] && !mobNumberWithoutDialCode) {
      clearErrors(name);
    }
  };

  return (
    <div className={`${styles.phoneWrapper} ${classNames}`}>
      <label className={styles.label}>
        {label}
        {isRequired ? <span className={styles.required}> *</span> : ""}
      </label>
      <div className={`${styles.phoneContainer} ${errors[name]?.message ? styles.errorContainer : ""}`}>
        <Controller
          name={name}
          control={control}
          render={({ field: { ref, onBlur, ...field } }) => (
            <PhoneInput
              country="in"
              {...field}
              value={field.value || dialCode || DEFAULT_COUNTRY_CODE}
              onBlur={handleBlur}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              inputProps={{
                ref,
                className: styles.phoneInput,
              }}
              specialLabel=""
              buttonClass={styles.btnContainer}
              containerClass={styles.inputContainer}
              inputClass={styles.phoneInput}
              dropdownClass={styles.dropdownContainer}
              searchClass={styles.searchContainer}
              disableCountryGuess={true}
              searchNotFound="Not Found"
              disableCountryCode={false}
              autoFormat={true}
              enableClickOutside={true}
              countryCodeEditable={false}
              searchPlaceholder="Search your country"
              enableSearch={true}
              placeholder={placeholder}
              disabled={props.disabled}
            />
          )}
        />
        {errors[name]?.message && <CustomImage src={commonSvgs?.errorIcon || ""} alt=""/>}
      </div>
      <span className={styles.error}>{errors[name]?.message && <>{errors[name]?.message}</>}</span>
    </div>
  );
};

export default InputPhone;
