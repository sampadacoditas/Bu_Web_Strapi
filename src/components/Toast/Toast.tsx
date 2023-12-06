import toast, { Toaster } from "react-hot-toast";
import { IToast, type } from "./IToast";
import {
  TOAST_CONFIG,
  MOBILE_TOAST_CONFIG,
  TOAST_TYPE,
} from "@/constants/constants";
import { ReactComponent as CheckCircle } from "@/assets/icons/checkCircle.svg";
import { ReactComponent as ErrorIcon } from "@/assets/icons/ErrorIcon.svg";
import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";
import styles from "./Toast.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";

const Toast = ({ type, title, message }: IToast) => {
  return (
    <div className={styles.toastContainer}>
      <div className={styles.iconContainer}>
        {type && type === TOAST_TYPE ? <CheckCircle /> : <ErrorIcon />}
      </div>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{message}</p>
        <span
          className={styles.closeIconContainer}
          onClick={() => {
            toast.remove();
          }}
        >
          <CloseIcon className={styles.closeIcon} />
        </span>
      </div>
    </div>
  );
};

const CustomToaster = () => {
  const { isMobileView } = useWindowWidth();
  const CONFIG = isMobileView ? MOBILE_TOAST_CONFIG : TOAST_CONFIG;
  return <Toaster {...CONFIG} />;
};

export const showToast = (
  type: type,
  title: string,
  message: string,
  isMobileView?: boolean
) => {
  toast.custom(<Toast type={type} title={title} message={message} />);
};

export default CustomToaster;
