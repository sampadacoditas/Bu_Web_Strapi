import * as yup from "yup";

export const CONTACT_US_INITIAL_VALUES = {
  fullName: "",
  mobileNum: "",
  email: "",
  designation: "",
  message: "",
};

export const CONTACT_US_SCHEMA = yup
  .object({
    fullName: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name must not exceed 50 characters")
      .matches(/^[a-zA-Z\s'-]+$/, "Only letters, spaces, hyphens, and apostrophes are allowed")
      .matches(/^[^0-9]+$/, "Name should not contain numeric characters")
      .matches(/^[^@#$%^&*!]+$/, "Name should not include special symbols")
      .test("no-leading-trailing-spaces", "Name should not have leading or trailing spaces", value => {
        if (value) {
          return value.trim() === value;
        }
        return true;
      }),
    mobileNum: yup
      .string()
      .required("Mobile number is required")
      .matches(/^[0-9]+$/, "Mobile number should only contain numeric characters")
      .matches(/^\d{7,15}$/, "Mobile number must be between 7 and 15 digits")
      .matches(/^[\d]+$/, "Mobile number should not contain any special characters, spaces, or punctuation")
      .matches(/^(?!^(?:0+|1+)$)\d+$/, "Mobile number is invalid"),
    email: yup
      .string()
      .required("Email address is required")
      .email("Invalid email address format")
      .matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Invalid email address format")
      .min(3, "Email address must be at least 3 characters long")
      .max(320, "Email address must not exceed 320 characters")
      .matches(/^\S+$/, "Email address should not contain spaces")
      .matches(/^[\w.%+-]+@[\w.-]+$/, "Email address should not contain most special characters"),
    designation: yup
      .string()
      .matches(/.{2,}/, {
        excludeEmptyString: true,
        message: "Designation must be at least 2 character long",
      })
      .max(100, "Designation must not exceed 100 characters"),
    message: yup
      .string()
      .required()
      .matches(/.{1,}/, {
        excludeEmptyString: true,
        message: "Message must be at least 1 character long",
      })
      .max(1000, "Message must not exceed 1000 characters"),
  })
  .required();

export const CASE_STUDY_CAROUSAL_DATA = [
  {
    id: 1,
    img: "image",
    cardDescription: "Infra Automation for Indonesia’s First Digital Bank",
    btnText: "Read now",
  },
  {
    id: 2,
    img: "image",
    cardDescription: "Infra Automation for Indonesia’s First Digital Bank",
    btnText: "Read now",
  },
  {
    id: 3,
    img: "image",
    cardDescription: "Infra Automation for Indonesia’s First Digital Bank",
    btnText: "Read now",
  },
  {
    id: 4,
    img: "image",
    cardDescription: "Infra Automation for Indonesia’s First Digital Bank",
    btnText: "Read now",
  },
  {
    id: 5,
    img: "image",
    cardDescription: "Infra Automation for Indonesia’s First Digital Bank",
    btnText: "Read now",
  },
];
