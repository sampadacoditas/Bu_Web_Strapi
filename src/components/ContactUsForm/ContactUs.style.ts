import { IOption } from "@/components/FormMultiSelect/IFormMultiSelect";
import { StylesConfig } from "react-select";
const pillLabelStyle = {
  color: "#black",
  fontFamily: "Roboto",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "145%",
  letterSpacing: "0.03125rem",
};

const pillStyle = {
  background: "#fff",
  color: "#000",
  padding: "0",
  borderRadius: "1rem",
  marginTop: "-0.375rem",
  marginBottom: "-0.375rem",
};

export const valueStyle: StylesConfig<IOption> = {
  control: baseStyles => ({
    ...baseStyles,
    border: "none",
    outline: "none",
    boxShadow: "none",
    minHeight: "3rem",
    backgroundColor: "#fff",
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    ...pillStyle,
    ...pillLabelStyle,
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: "1rem",
    flexWrap: "nowrap",
    textOverflow: "ellipsis",
    gap: "0.25rem",
    maxHeight: "48px",
    maxWidth: "auto",
    display: "inline-flex",
  }),
};
