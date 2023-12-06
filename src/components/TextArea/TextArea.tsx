import { useFormContext } from "react-hook-form";
import styles from "./TextArea.module.scss";
import { ITextArea } from "./ITextArea";

const TextArea = (props: ITextArea) => {
  const { isRequired, label, placeholder, name, classNames, maxLength, ...rest } = props;
  const {
    register,
    formState: { errors },
    watch,
    clearErrors,
    getValues,
  } = useFormContext();

  const text = watch(name);
  const textLength = text.length;
  const handleBlur = () => {
    getValues(name) ? null : clearErrors(name);
  };
  return (
    <div className={`${styles.inputWrapper} ${classNames}`}>
      <label className={styles.label}>
        {label}
        {isRequired ? <span className={styles.required}>*</span> : ""}
      </label>
      <div className={`${styles.inputContainer} ${errors[name]?.message ? styles.errorContainer : ""}`}>
        <textarea
          rows={2}
          {...register(name)}
          className={styles.input}
          placeholder={placeholder}
          maxLength={maxLength}
          {...rest}
          onBlur={handleBlur}
        ></textarea>
      </div>
      <div className={styles.errorTextContainer}>
        <span className={styles.error}>{errors[name]?.message && <>{errors[name]?.message}</>}</span>
        <span className={styles.error}>{errors[name]?.message && `${textLength}/${maxLength}`}</span>
      </div>
    </div>
  );
};

export default TextArea;
