import { useRef, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Button, FormInput, RecaptchaWrapper, InputPhone, TextArea, Loader, FormMultiSelect } from "@/components";
import { showToast } from "@/components/Toast/Toast";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { IContactUsField, IServicesContactUs } from "./IServicesContactUs";
import {
  FORM_VALIDATE_MODE,
  FieldType,
  TIME_INTERVAL,
  TOAST_MSG_CONTACT,
  TOAST_TITLE_CONTACT,
  TOAST_TYPE,
} from "@/constants/constants";
import { ServicesContactUsForm } from "@/services/servicesContact.service";
import styles from "./ServicesContactUs.module.scss";
import { getImageUrl } from "@/utils/helper";

const ContactUsField = (props: IContactUsField) => {
  const { isMobileView } = useWindowWidth();

  if (props.type == FieldType.textArea) {
    return (
      <TextArea
        classNames={props.numberOfColumns == 1 || isMobileView ? styles.colSpan1 : styles.colSpan2}
        label={props.label}
        placeholder={props.placeholder}
        name={props.name}
        maxLength={props.maxLength}
        disabled={props.disabled}
      />
    );
  }
  if (props.type == FieldType.phone) {
    return (
      <InputPhone
        classNames={props.numberOfColumns == 1 || isMobileView ? styles.colSpan1 : styles.colSpan2}
        label={props.label}
        placeholder={props.placeholder}
        name={props.name}
        isRequired={props.isRequired}
        reInitialize={props.reInitialize}
        disabled={props.disabled}
        commonSvgs={props.commonSvgs}
      />
    );
  }
  if (props.type == FieldType.search) {
    return (
      <FormMultiSelect
        classNames={props.numberOfColumns == 1 || isMobileView ? styles.colSpan1 : styles.colSpan2}
        label={props.label}
        placeholder={props.placeholder}
        name={props.name}
        isRequired={props.isRequired}
        options={props.options || []}
        hideLabelFromOption={false}
        disabled={props.disabled}
        showSearchIcon
        shownMenuWhileTyping
        isSearchable
      />
    );
  }
  if (props.type == FieldType.mutliSelect) {
    return (
      <FormMultiSelect
        classNames={props.numberOfColumns == 1 || isMobileView ? styles.colSpan1 : styles.colSpan2}
        label={props.label}
        placeholder={props.placeholder}
        name={props.name}
        isRequired={props.isRequired}
        options={props.options || []}
        disabled={props.disabled}
        isMulti
        showCheckbox
      />
    );
  }
  return (
    <FormInput
      classNames={props.numberOfColumns == 1 || isMobileView ? styles.colSpan1 : styles.colSpan2}
      label={props.label}
      name={props.name}
      placeholder={props.placeholder}
      isRequired={props.isRequired}
      disabled={props.disabled}
      type={props.type}
      commonSvgs={props.commonSvgs}
    />
  );
};

const ServicesContactUs = (props: IServicesContactUs) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isReCAPTCHASelected, setIsReCAPTCHASelected] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [disableFields, setDisableFields] = useState(false);
  const [reInitialize, setReInitialize] = useState(false);
  const { isMobileView } = useWindowWidth();
  const methods = useForm({
    mode: FORM_VALIDATE_MODE,
    resolver: yupResolver(props.schema),
    defaultValues: props.initialValues,
  });
  const { isDirty, isValid } = methods.formState;

  const reInitializeValues = () => {
    methods?.reset();
    setIsReCAPTCHASelected(false);
    setReInitialize(!reInitialize);
    setBtnDisabled(true);
    setDisableFields(false);
  };
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const updateMarginValue = () => {
      if (ref.current) {
        const marginValue = `${ref?.current?.offsetLeft}px`;
        document.documentElement.style.setProperty("--contact-us-left-margin", marginValue);
      }
    };

    updateMarginValue();

    window.addEventListener("resize", updateMarginValue);

    return () => {
      window.removeEventListener("resize", updateMarginValue);
    };
  }, []);

  useEffect(() => {
    setBtnDisabled(!isDirty || !isValid || !isReCAPTCHASelected);
  }, [isDirty, isValid, isReCAPTCHASelected]);

  useEffect(() => {
    return () => {
      reInitializeValues();
    };
  }, []);

  const handleSubmitData = (data: any) => {
    try {
      let formattedData = data;
      if (props.getFormmatedData) {
        formattedData = props.getFormmatedData(data);
      }
      ServicesContactUsForm({ ...formattedData, formType: props.formType });
      methods?.reset();
      setIsReCAPTCHASelected(false);
      setReInitialize(!reInitialize);
      showToast(TOAST_TYPE, TOAST_TITLE_CONTACT, TOAST_MSG_CONTACT, isMobileView);
      setDisableFields(false);
      setLoading(false);
    } catch (error) {
      alert("Error");
      setDisableFields(false);
      setLoading(false);
    }
  };

  const handleSubmit = (data: object) => {
    setBtnDisabled(true);
    setDisableFields(true);
    setLoading(true);
    const getData = setTimeout(() => {
      handleSubmitData(data);
    }, TIME_INTERVAL);

    return () => {
      setLoading(false);
      clearTimeout(getData);
    };
  };

  return (
    <div
      className={`${styles.wrapper} ${props.customWrapperClass || ""}`}
      id="contact-us"
      {...{ [CUSTOM_ID]: LIGHT_BG_NAV }}
    >
      <div className={`content ${styles.container}`} ref={ref}>
        <div
          className={`${styles.leftSection} ${props.customBackgroundImgClass || ""}`}
          style={{ backgroundImage: `url(${getImageUrl(props?.sideFormImage)})` }}
        >
          <div className={styles.titleContainer}>
            <p className={styles.title}>{props.constant.title}</p>
            <p className={styles.description}>{props.constant.description}</p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <FormProvider {...methods}>
            <form className={styles.formContainer} onSubmit={methods.handleSubmit(handleSubmit)} autoComplete="off">
              {props.fields.map((field: IContactUsField, index: number) => {
                return (
                  <ContactUsField
                    {...field}
                    key={index}
                    reInitialize={reInitialize}
                    disabled={disableFields}
                    commonSvgs={props?.commonSvgs}
                  />
                );
              })}

              <div className={styles.btnContainer}>
                <div className={styles.recaptchaContainer}>
                  <RecaptchaWrapper
                    label={props.constant.captcha}
                    selected={isReCAPTCHASelected}
                    setIsSelected={setIsReCAPTCHASelected}
                    commonSvgs={props?.commonSvgs}
                  />
                </div>
                <Button disabled={btnDisabled} className={styles.btn} type="submit">
                  {loading ? <Loader /> : props.constant.submit}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default ServicesContactUs;
