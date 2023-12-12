import { useFormContext } from "react-hook-form";
import { IFormInput } from "./IFormInput";
import styles from "./FormInput.module.scss";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";

const FormInput = (props: IFormInput) => {
  const { isRequired, label, placeholder, name, classNames, type = "text", commonSvgs, ...rest } = props;
  const {
    register,
    formState: { errors },
    clearErrors,
    getValues,
  } = useFormContext();
  const handleBlur = () => {
    getValues(name) ? null : clearErrors(name);
  };
  return (
    <div className={`${styles.inputWrapper} ${classNames}`}>
      <label className={styles.label}>
        {label} {isRequired ? <span className={styles.required}>*</span> : ""}
      </label>
      <div className={`${styles.inputContainer} ${errors[name]?.message ? styles.errorContainer : ""}`}>
        <input
          autoComplete="off"
          {...register(name)}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          {...rest}
          onBlur={handleBlur}
        />
        {errors[name]?.message && <CustomImage src={getImageUrl(commonSvgs?.errorIcon) || ""} alt="" />}
      </div>
      <span className={styles.error}>{errors[name]?.message && <>{errors[name]?.message}</>}</span>
    </div>
  );
};

export default FormInput;
