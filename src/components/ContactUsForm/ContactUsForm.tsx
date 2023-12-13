import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CONTACT_US_FORM,
  OPTIONS,
  TIME_INTERVAL,
  TOAST_MSG_CONTACT,
  TOAST_TITLE_CONTACT,
  TOAST_TYPE,
  CUSTOM_ID,
  LIGHT_BG_NAV,
  FieldType,
} from "@/constants/constants";
import { IContactUsForm } from "./IContactUsForm";

import InputPhone from "../PhoneInput/PhoneInput";
import TextArea from "../TextArea/TextArea";
import { Button, FormInput } from "../index";
import RecaptchaWrapper from "../RecaptchaWrapper/RecaptchaWrapper";
import FormMultiSelect from "@/components/FormMultiSelect/FormMultiSelect";

import styles from "./ContactUsForm.module.scss";
import { ContactUsPageForm } from "../../services/contact.service";
import { showToast } from "../Toast/Toast";
import useWindowWidth from "@/hooks/useWindowWidth";
import { valueStyle } from "./ContactUs.style";
import { Loader } from "../index";

const ContactUsField = (props: any) => {
  if (props.type == FieldType.phone) {
    return (
      <InputPhone
        name={props.name}
        label={props.label}
        isRequired={props.isRequired}
        placeholder={props.placeholder}
        classNames={styles.name}
        disabled={props.disabled}
        reInitialize={props.reInitialize}
      />
    );
  }
  if (props.type == FieldType.dropdownField) {
    return (
      <FormMultiSelect
        classNames={styles.dropdown}
        label={props.label}
        placeholder={props.placeholder}
        name={props.name}
        isRequired={props.isRequired}
        options={props.options || []}
        hideLabelFromOption={false}
        showSearchIcon={false}
        shownMenuWhileTyping={false}
        isSearchable={false}
        isClearable={false}
        customStyle={valueStyle}
        disabled={props.disabled}
      />
    );
  }
  if (props.type == FieldType.textArea) {
    return (
      <TextArea
        name={props.name}
        label={props.label}
        placeholder={props.placeholder}
        className={styles.messageInput}
        maxLength={props.maxLength}
        disabled={props.disabled}
      />
    );
  }
  return (
    <FormInput
      name={props.name}
      label={props.label}
      placeholder={props.placeholder}
      isRequired={props.isRequired}
      classNames={styles.name}
      disabled={props.disabled}
      type={props.type}
    />
  );
};

const ContactUsForm = (props: IContactUsForm) => {
  const { title, description, formContents = {}, fields = [], commonSvgs } = props;
  const col1Fields = fields?.filter(field => field.numberOfColumns == 1);
  const col2Fields = fields?.filter(field => field.numberOfColumns == 2);
  const [isReCAPTCHASelected, setIsReCAPTCHASelected] = useState<boolean>(false);
  const [isFieldsDisabled, setIsFieldsDisabled] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [reInitialize, setReInitialize] = useState(false);
  const { isMobileView } = useWindowWidth();
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(props.schema),
    defaultValues: props.initialValues,
  });
  const { isDirty, isValid } = methods.formState;
  

  const reInitializeValues = () => {
    methods?.reset();
    setIsReCAPTCHASelected(false);
    setReInitialize(!reInitialize);
    setBtnDisabled(true);
    setIsFieldsDisabled(false);
  };

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      reInitializeValues();
    };
  }, []);

  const handleSubmitData = (data: object) => {
    try {
      let formattedData = data;
      if (props.getFormattedData) {
        formattedData = props.getFormattedData(data);
      }
      ContactUsPageForm(formattedData);
      methods?.reset();
      setIsReCAPTCHASelected(false);
      setReInitialize(!reInitialize);
      showToast(TOAST_TYPE, TOAST_TITLE_CONTACT, TOAST_MSG_CONTACT, isMobileView);
      setIsFieldsDisabled(false);
      setLoading(false);
    } catch (error) {
      alert(error);
      setIsFieldsDisabled(false);
      setLoading(false);
    }
  };
  const handleSubmit = (data: object) => {
    setBtnDisabled(true);
    setIsFieldsDisabled(true);
    setLoading(true);
    const getData = setTimeout(() => {
      handleSubmitData(data);
    }, TIME_INTERVAL);

    return () => {
      setLoading(false);
      clearTimeout(getData);
    };
  };
  useEffect(() => {
    setBtnDisabled(!isDirty || !isValid || !isReCAPTCHASelected);
  }, [isDirty, isValid, isReCAPTCHASelected]);

  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={styles.wrapper}>
      <div className={`content ${props.contentContainerStyle}`}>
        <div className={styles.container}>
          <div className={styles.formContentLayout}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <FormProvider {...methods}>
            <form
              className={`content ${styles.formContainer}`}
              onSubmit={methods.handleSubmit(handleSubmit)}
              autoComplete="off"
            >
              <div className={styles.dataBox}>
                {col1Fields?.map((data, index: number) => {
                  return (
                    <ContactUsField {...data} key={index} reInitialize={reInitialize} disabled={isFieldsDisabled} />
                  );
                })}
              </div>
              <div className={styles.messageBox}>
                {col2Fields?.map((data, index) => {
                  return (
                    <ContactUsField {...data} key={index} reInitialize={reInitialize} disabled={isFieldsDisabled} />
                  );
                })}
              </div>
              <div className={styles.btnContainer}>
                <div className={styles.recaptchaContainer}>
                  <RecaptchaWrapper
                    label={formContents.captcha}
                    selected={isReCAPTCHASelected}
                    setIsSelected={setIsReCAPTCHASelected}
                    commonSvgs={commonSvgs}
                  />
                </div>
                <Button disabled={btnDisabled} className={styles.btn} type="submit">
                  {loading ? <Loader size="sm" /> : formContents.submit}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
