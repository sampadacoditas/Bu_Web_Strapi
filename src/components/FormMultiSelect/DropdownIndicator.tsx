import { components } from "react-select";
import { ReactComponent as ArraowIcon } from "@/assets/icons/rightChevron.svg";
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";
import styles from "./FormMultiSelect.module.scss";

const DropdownIndicator = (props: any) => {
  const { menuIsOpen } = props.selectProps;
  const { showDropdownIndicator = true, showSearchIcon = false } = props;

  return (
    <>
      {showDropdownIndicator ? (
        <components.DropdownIndicator {...props}>
          {showSearchIcon ? (
            <SearchIcon className={styles.searchIcon} />
          ) : (
            <ArraowIcon className={`${styles.arrowIcon} ${menuIsOpen ? styles.upArraow : styles.downArrow}`} />
          )}
        </components.DropdownIndicator>
      ) : null}
    </>
  );
};

export default DropdownIndicator;
