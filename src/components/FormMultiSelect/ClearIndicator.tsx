import { components } from "react-select";
import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";
import styles from "./FormMultiSelect.module.scss";

const ClearIndicator = (props: any) => {
  return (
    <components.ClearIndicator {...props}>
      <CloseIcon className={styles.closeIcon} />
    </components.ClearIndicator>
  );
};

export default ClearIndicator;
