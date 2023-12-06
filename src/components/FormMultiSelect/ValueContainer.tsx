import { useMemo } from "react";
import { components } from "react-select";
import styles from "./FormMultiSelect.module.scss";

const ValueContainer = ({ ...props }: any) => {
  const [values, input] = props.children;
  const { tagLimit = 1 } = props.selectProps;

  const showTags = useMemo(() => Array.isArray(values) && values.length > tagLimit, [values]);
  const count = useMemo(() => (showTags ? values.length - tagLimit : null), [values]);

  return (
    <components.ValueContainer {...props}>
      {showTags ? values.slice(0, tagLimit) : values}
      {count && <div className={styles.countPill}>+{count}</div>}
      {input}
    </components.ValueContainer>
  );
};

export default ValueContainer;
