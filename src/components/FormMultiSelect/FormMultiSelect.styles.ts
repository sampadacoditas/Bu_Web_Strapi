import { StylesConfig } from "react-select";

const fontStyle = {
  fontFamily: "Roboto",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%",
  letterSpacing: "0.01563rem",
};

const pillLabelStyle = {
  color: "#fff",
  fontFamily: "Roboto",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "145%",
  letterSpacing: "0.03125rem",
};

const pillStyle = {
  background: "#2C74D6",
  color: "#fff",
  padding: "0.375rem 0.5rem 0.375rem 0.75rem",
  borderRadius: "1rem",
  marginTop: "-0.375rem",
  marginBottom: "-0.375rem",
  maxWidth: "8rem",
};

export const selectStyles: StylesConfig = {
  control: baseStyles => ({
    ...baseStyles,
    border: "none",
    outline: "none",
    boxShadow: "none",
    backgroundColor: "#fff",
  }),
  container: (baseStyles, state) => ({
    ...baseStyles,
    borderRadius: "0.25rem",
    width: "100%",
    "box-shadow": "0 0 0 1px rgba(221, 221, 221, 0.87)",
    border: "2px solid transparent",
    borderColor: state.selectProps.menuIsOpen ? "#2C74D6" : "transparent",
    backgroundColor: "#fff",
  }),
  option: baseStyles => ({
    ...baseStyles,
    padding: 0,
    "&:hover": {
      backgroundColor: "#EAF1FB",
    },
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    ...pillStyle,
    ...pillLabelStyle,
  }),
  menu: baseStyles => ({
    ...baseStyles,
    borderRadius: "0.25rem",
    boxShadow:
      "0px 1px 8px 0px rgba(175, 181, 185, 0.20), 0px 3px 3px 0px rgba(175, 181, 185, 0.12), 0px 3px 4px 0px rgba(175, 181, 185, 0.14);",
    marginTop: "0.25rem",
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: "0.25rem",
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: "0.75rem",
    flexWrap: "nowrap",
    textOverflow: "ellipsis",
    gap: "0.25rem",
    maxWidth: "14rem",
  }),
  input: baseStyles => ({
    ...baseStyles,
    ...fontStyle,
    margin: 0,
    padding: 0,
    color: "#222",
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    ...fontStyle,
    color: "#999",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
  }),
  multiValue: baseStyles => ({
    ...baseStyles,
    textOverflow: "ellipsis",
    ...pillStyle,
  }),
  multiValueLabel: baseStyles => ({
    ...baseStyles,
    textOverflow: "ellipsis",
    ...pillLabelStyle,
    padding: 0,
  }),
  multiValueRemove: baseStyles => ({
    ...baseStyles,
    "&:hover": {
      backgroundColor: "transparent",
    },
  }),
  menuPortal: baseStyles => ({
    ...baseStyles,
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    padding: 0,
    paddingRight: "0.75rem",
  }),
  clearIndicator: baseStyles => ({
    ...baseStyles,
    padding: "0 0.5rem",
  }),
};
