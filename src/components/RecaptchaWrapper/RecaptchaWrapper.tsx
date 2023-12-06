import ReCAPTCHA from "react-google-recaptcha";
import { IRecaptchaWrapper } from "./IRecaptchaWrapper";
import style from "./Recaptcha.module.scss";
import { CustomImage } from "..";

const RecaptchaWrapper = (props: IRecaptchaWrapper) => {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || "";

  const { setIsSelected, selected, label, commonSvgs } = props;

  const handleRecaptchaChange = (value: any) => {
    if (value) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <div onClick={handleRecaptchaChange} className={style.captchaWrapper}>
      <CustomImage
        src={!selected ? commonSvgs?.disabledCheckbox || "" : commonSvgs?.checkboxSelected || ""}
        alt=""
        className={style.captchCheckbox}
      />
      <span className={style.captchaText}>{label}</span>
      <ReCAPTCHA
        theme="light"
        size="invisible"
        sitekey={reCaptchaKey}
        onChange={handleRecaptchaChange}
        className={style.captcha}
      />
    </div>
  );
};

export default RecaptchaWrapper;
