import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Stepper from "@/components/Stepper/Stepper";
import FormInput from "@/components/FormInput/FormInput";
import Button from "@/components/Button/Button";
import FormMultiSelect from "@/components/FormMultiSelect/FormMultiSelect";
import FileUploader from "@/components/FileUploader/FileUploader";
import { showToast } from "@/components/Toast/Toast";
import Calendar from "@/components/Calendar/Calendar";
import { InputPhone, RecaptchaWrapper } from "..";
import { FORM_ITEM_TYPE, FORM_SECTION, NOTICE_PERIOD_OPTIONS } from "@/views/Careers/ApplyJobForm.constants";
import {
  BACK_BTN,
  CUSTOM_ID,
  DATE_FORMAT,
  DUPLICATE_TOAST_MSG,
  DUPLICATE_TOAST_TITLE,
  ERROR_TOAST_MSG,
  ERROR_TOAST_TITLE,
  ERROR_TOAST_TYPE,
  FILE_SIZE_5MB,
  FILE_TYPE,
  FORM_VALIDATE_MODE,
  FieldType,
  HTTP_STATUS_CODES,
  HUNDREDS_SEPARATOR_FORMAT,
  LIGHT_BG_NAV,
  NEXT_BTN,
  SUBMIT_BTN,
  TOAST_MSG,
  TOAST_TITLE,
  TOAST_TYPE,
  UPLOAD_RESUME_MSGS,
} from "@/constants/constants";
import {
  APPLY_JOB_SCHEMA1,
  APPLY_JOB_SCHEMA2,
  STEP1_INITIAL_VALUES,
  STEP2_INITIAL_VALUES,
} from "@/views/Careers/ApplyJobForm.schema";
import useWindowWidth from "@/hooks/useWindowWidth";
import { IForms } from "./IForm";
import { ApplyJobForm } from "@/services/applyJobForm.service";
import style from "./Form.module.scss";
import { valueStyle } from "@/components/ContactUsForm/ContactUs.style";
import { Loader } from "../index";

const Form = (props: IForms) => {
  const { jobId = 0, pageData } = props;
  const [formContent, stepperForm1, stepperForm2, jobDescription, commonSvg, headingData] = pageData.pageComponents;

  const [firstNameObject, lastNameObject, emailObject, phoneNumberObject, experienceObject, currentLocationObject] =
    stepperForm1.stepperFormField;
  const [
    chevronRightIcon,
    search,
    inputCrossIcon,
    activeStep,
    disabledStep,
    completedStep,
    calendar,
    uploadFile,
    checkboxSelected,
    errorIcon,
    disabledCheckbox,
    deleteIcon,
    greenTick,
  ] = commonSvg.svgs;

  const commonSvgs = {
    activeStep: activeStep.value,
    disabledStep: disabledStep.value,
    greenTick: greenTick.value,
    errorIcon: errorIcon.value,
    calendar: calendar.value,
    uploadFile: uploadFile.value,
    deleteIcon: deleteIcon.value,
    chevronRightIcon: chevronRightIcon.value,
    disabledCheckbox: disabledCheckbox.value,
    completedStep: completedStep.value,
    checkboxSelected: checkboxSelected.value,
  };

  const [_datepick, setDatePick] = useState<Date | null>();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);
  const [resume, setResume] = useState<File | null>();
  const [error, setError] = useState({
    err: false,
    msg: "",
  });
  const [salary, setSalary] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [_payloadStep1, setPayloadStep1] = useState(STEP1_INITIAL_VALUES);
  const [isReCAPTCHASelected, setIsReCAPTCHASelected] = useState<boolean>(false);
  const { isMobileView } = useWindowWidth();
  const methods = useForm({
    defaultValues: STEP1_INITIAL_VALUES,
    resolver: yupResolver(APPLY_JOB_SCHEMA1),
    mode: FORM_VALIDATE_MODE,
  });
  const methodStep2 = useForm({
    defaultValues: STEP2_INITIAL_VALUES,
    resolver: yupResolver(APPLY_JOB_SCHEMA2),
    mode: FORM_VALIDATE_MODE,
  });

  const { register: register2, watch: watch2 } = useForm({ mode: FORM_VALIDATE_MODE });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmitHandler = methods?.handleSubmit(data => {
    setStep(step == 0 ? step + 1 : step);
    setPayloadStep1(data);
  });

  const onSubmitHandler2 = methodStep2?.handleSubmit((data: any) => {
    setLoading(true);
    setStep(step == 0 ? step + 1 : step);
    const newSalary = salary.replace(/,/g, "");
    const newDate = new Date(data?.Last_Working_Day)?.toLocaleDateString(DATE_FORMAT?.LOCALE_TO_DATE);
    if (!resume) {
      setError({
        err: true,
        msg: FORM_SECTION?.RESUME?.ERR_MSG_REQUIRED,
      });
    }
    const { Current_Job_Title, noticePeriod, Current_Employer } = data;
    const payload = {
      ..._payloadStep1,
      Resume: resume,
      Resume_filename: resume?.name,
      Current_Salary: newSalary,
      Last_Working_Day: newDate ? newDate : null,
      Current_Employer,
      Current_Job_Title,
      Notice_Period: noticePeriod || "0-30",
      jobId: jobId,
    };
    try {
      ApplyJobForm(payload, resume)
        .then((res: any) => {
          if (res?.data?.alreadyApplied) {
            setNextBtnDisabled(false);
            setStep(0);
            setIsReCAPTCHASelected(false);
            showToast(TOAST_TYPE, DUPLICATE_TOAST_TITLE, DUPLICATE_TOAST_MSG, isMobileView);
            setLoading(false);
          } else if (res?.status == HTTP_STATUS_CODES.SUCCESS) {
            setNextBtnDisabled(false);
            methods?.reset();
            methodStep2?.reset();
            setResume(null);
            setStep(0);
            setSalary("");
            setIsReCAPTCHASelected(false);
            showToast(TOAST_TYPE, TOAST_TITLE, TOAST_MSG, isMobileView);
            setLoading(false);
          } else {
            showToast(ERROR_TOAST_TYPE, ERROR_TOAST_TITLE, ERROR_TOAST_MSG, isMobileView);
            setLoading(false);
          }
        })
        .catch(() => {
          showToast(ERROR_TOAST_TYPE, ERROR_TOAST_TITLE, ERROR_TOAST_MSG, isMobileView);
          setLoading(false);
        });
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  });

  const handleNewDate = (date: Date | null) => {
    setDatePick(date);
  };

  const fileUploadFn = (item?: React.BaseSyntheticEvent) => {
    setError({
      err: false,
      msg: "",
    });
    const [firstFile] = item?.target?.files || {};
    const file = firstFile;
    if (file?.size > FILE_SIZE_5MB) {
      setError({
        err: true,
        msg: UPLOAD_RESUME_MSGS?.LIMIT_ERR,
      });
      setResume(firstFile);
    } else if (file?.type !== FILE_TYPE) {
      setError({
        err: true,
        msg: UPLOAD_RESUME_MSGS?.EXT_ERR,
      });
    } else {
      setResume(firstFile);
    }
  };

  const handleDelete = () => {
    setError({ err: false, msg: "" });
    setResume(null);
  };
  const handlePrevBtn = () => {
    setStep(step == 1 ? step - 1 : step);
  };
  const handleSalary = (e: React.BaseSyntheticEvent) => {
    const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
    const formattedValue = new Intl.NumberFormat(HUNDREDS_SEPARATOR_FORMAT).format(sanitizedValue);
    setSalary(formattedValue);
  };
  const handlePrevention = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  const handleForm = (stepCount: number) => {
    switch (stepCount) {
      case 0:
        return (
          <FormProvider {...methods}>
            <form onSubmit={handlePrevention} noValidate className={style.formContainer} autoComplete="off">
              <div className={style.formWrapper}>
                <FormInput
                  label={firstNameObject?.label}
                  isRequired={firstNameObject?.isRequired}
                  placeholder={firstNameObject?.placeholder}
                  className={style.inputContainer}
                  name={firstNameObject?.name}
                  commonSvgs={pageData?.commonSvgs}
                />
                <FormInput
                  label={lastNameObject.label}
                  isRequired={lastNameObject.isRequired}
                  placeholder={lastNameObject.placeholder}
                  className={style.inputContainer}
                  name={lastNameObject.name}
                  commonSvgs={pageData?.commonSvgs}
                />
                <FormInput
                  label={emailObject.label}
                  isRequired={emailObject.isRequired}
                  placeholder={emailObject.placeholder}
                  className={style.inputContainer}
                  name={emailObject.name}
                  commonSvgs={pageData?.commonSvgs}
                />
                <InputPhone
                  classNames={style.mobile}
                  label={phoneNumberObject.label}
                  placeholder={phoneNumberObject.placeholder}
                  name={phoneNumberObject.name}
                  isRequired={pageData?.cardArray2?.isRequired}
                  commonSvgs={pageData?.commonSvgs}
                />
                <FormInput
                  label={experienceObject?.label}
                  isRequired={experienceObject?.isRequired}
                  placeholder={experienceObject?.placeholder}
                  className={style.inputContainer}
                  name={experienceObject?.name}
                  commonSvgs={pageData?.commonSvgs}
                />
                <FormInput
                  label={currentLocationObject?.label}
                  isRequired={currentLocationObject?.isRequired}
                  placeholder={currentLocationObject?.placeholder}
                  className={style.inputContainer}
                  name={currentLocationObject?.name}
                  commonSvgs={pageData?.commonSvgs}
                />
              </div>
            </form>
          </FormProvider>
        );
      case 1:
        return (
          <FormProvider {...methodStep2}>
            <form onSubmit={handlePrevention} noValidate className={style.formContainer} autoComplete="off">
              <div className={style.formWrapper}>
                {stepperForm2?.stepperFormField?.map((item: FORM_ITEM_TYPE, index: number) => {
                  return <span key={index}>{handleDisplayFields(item)}</span>;
                })}
              </div>
            </form>
          </FormProvider>
        );
    }
  };
  const handleDisplayFields = (item: FORM_ITEM_TYPE) => {
    switch (item?.type) {
      case FieldType?.text:
        return (
          <FormInput
            label={item?.label}
            isRequired={item?.isRequired}
            placeholder={item?.placeholder}
            className={style.inputContainer}
            name={item?.name}
            value={watch2(item?.name)}
            commonSvgs={commonSvgs}
          />
        );
      case FieldType?.date:
        return (
          <Calendar
            value={watch2(item?.name)}
            handleDate={handleNewDate}
            label={item?.label}
            name={item?.name}
            isRequired={item?.isRequired}
            commonSvgs={commonSvgs}
          />
        );
      case FieldType?.file:
        return (
          <FileUploader
            handleFile={fileUploadFn}
            value={resume}
            deleteFile={handleDelete}
            name={item?.name}
            label={item?.label}
            error={error}
            commonSvgs={commonSvgs}
          />
        );
      case FieldType?.dropdownField:
        return (
          <FormMultiSelect
            label={item?.label}
            placeholder={item?.placeholder}
            name={item?.name}
            isRequired={item?.isRequired}
            options={NOTICE_PERIOD_OPTIONS || []}
            hideLabelFromOption={false}
            showSearchIcon={false}
            shownMenuWhileTyping={false}
            isSearchable={false}
            isClearable={false}
            customStyle={valueStyle}
          />
        );
      case FieldType?.salary:
        return (
          <div className={style.salaryContainer}>
            <label className={style.label}>{item?.label}</label>
            <input
              value={salary}
              className={style.inputContainerSalary}
              placeholder={item?.placeholder}
              {...(register2(item?.name),
              {
                type: "text",
                onChange: handleSalary,
              })}
            />
          </div>
        );
      case FieldType?.phone:
        return (
          <InputPhone
            classNames={style.mobile}
            label={item?.label}
            placeholder={item?.placeholder}
            name={item?.name}
            isRequired={item?.isRequired}
          />
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    setPrevBtnDisabled(
      step == 1
        ? !methods?.formState?.isValid || !methods?.formState?.isDirty
        : methodStep2?.formState?.isValid ||
            !methodStep2?.formState?.isDirty ||
            (!resume && !watch2("noticePeriod")) ||
            error?.err ||
            !isReCAPTCHASelected,
    );
    setNextBtnDisabled(
      step == 0
        ? !methods?.formState?.isValid || !methods?.formState?.isDirty
        : !methodStep2?.formState?.isValid ||
            (!resume && !watch2("noticePeriod")) ||
            error?.err ||
            !isReCAPTCHASelected,
    );
  }, [
    resume,
    !watch2("noticePeriod"),
    isReCAPTCHASelected,
    methodStep2?.formState?.isDirty,
    methodStep2?.formState?.isValid,
    methods?.formState?.isDirty,
    methods?.formState?.isValid,
    error?.err,
    step,
  ]);

  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.outerWrapper}>
      <div className={`content ${style.wrapper}`}>
        <div className={style.heading}>{headingData?.title}</div>
        <div className={style.subHeading}>{headingData?.desc}</div>
        <div className={style.stepper}>
          <Stepper
            commonSvgs={commonSvgs}
            activeStep={step}
            values={[{ text: formContent?.step1 }, { text: formContent?.step2 }]}
          />
        </div>
        {handleForm(0)}
        <div className={style.buttonContainer}>
          {step == 1 && (
            <div className={style.captcha}>
              <RecaptchaWrapper
                selected={isReCAPTCHASelected}
                setIsSelected={setIsReCAPTCHASelected}
                label={formContent?.captcha}
                commonSvgs={pageData?.commonSvgs}
              />
            </div>
          )}
          <div className={style.btnContainer}>
            <Button
              variant="secondary"
              onClick={handlePrevBtn}
              className={style.secondaryBtn}
              disabled={prevBtnDisabled}
            >
              {formContent?.backBtn}
            </Button>
            <Button
              onClick={step == 0 ? onSubmitHandler : onSubmitHandler2}
              className={style.primaryBtn}
              disabled={nextBtnDisabled}
            >
              {step == 0 ? formContent?.nextBtn : loading ? <Loader size="sm" /> : formContent?.submitBtn}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
