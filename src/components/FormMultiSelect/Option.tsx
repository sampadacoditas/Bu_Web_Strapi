import { components } from "react-select";
import { ReactComponent as SelectedCheckbox } from "@/assets/icons/selectedCheckbox.svg";
import { ReactComponent as NotSelectedCheckbox } from "@/assets/icons/notSelectedCheckbox.svg";
import styles from "./FormMultiSelect.module.scss";

const Option = ({ children, isSelected, showCheckbox = false, ...props }: any) => {
  return (
    <components.Option {...props}>
      {showCheckbox ? (
        <div className={styles.optionContainer}>
          {isSelected ? <SelectedCheckbox /> : <NotSelectedCheckbox />}
          <span className={styles.label}>{children}</span>
        </div>
      ) : (
        <div className={styles.singleOptionContainer}>{children}</div>
      )}
    </components.Option>
  );
};

export default Option;
