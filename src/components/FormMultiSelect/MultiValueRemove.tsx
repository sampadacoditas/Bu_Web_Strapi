import { components } from "react-select";
import { ReactComponent as CloseIcon } from "@/assets/icons/close.svg";
import styles from "./FormMultiSelect.module.scss";

const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <CloseIcon className={styles.multiSelectValueRemoveIcon} />
    </components.MultiValueRemove>
  );
};

export default MultiValueRemove;
