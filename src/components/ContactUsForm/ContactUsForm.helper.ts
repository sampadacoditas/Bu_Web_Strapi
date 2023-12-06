import { mobileNumberRegexValidator } from "@/utils/schemas/contactUs/contactUsSchemaHelper";
import * as yup from "yup";

export const CONTACT_US_INITIAL_VALUES = {
  name: "",
  mobile: "",
  email: "",
  enquiry: "",
  message: "",
};

export const CONTACT_US_SCHEMA = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .matches(/^[^0-9]+$/, "Invalid input. Use only alphabetic characters & try again.")
    .matches(/^[a-zA-Z\s'-]+$/, "Only letters, spaces, hyphens, and apostrophes are allowed")
    .matches(/^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/, "Only single space is allowed")
    .matches(/^[^@#$%^&*!]+$/, "Name should not include special symbols")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must not exceed 50 characters")
    .test("no-leading-trailing-spaces", "Name should not have leading or trailing spaces", value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    }),
  mobile: yup
    .string()
    .trim()
    .required("Mobile number is required")
    .test("mobileNumber is required", "Dial code is required", value => {
      if (value) {
        const [dialCode] = value.trim().split(" ");
        if (!dialCode.length) {
          return false;
        }
      }
      return true;
    })
    .test("mobileNumber is required", "Mobile number is required", value => {
      if (value) {
        const [dialCode, mobileNumber] = value.trim().split(" ");
        if (dialCode.length && !mobileNumber?.length) {
          return false;
        }
      }
      return true;
    })
    .test("only contain numeric characters", "Mobile number should only contain numeric characters", value =>
      mobileNumberRegexValidator(value, /^[0-9]+$/),
    )
    .test("size", "Mobile number must be between 7 and 15 digits", value =>
      mobileNumberRegexValidator(value, /^\d{7,15}$/),
    )
    .test("size", "Invalid input. Use only digits & try again.", value => mobileNumberRegexValidator(value, /^[\d]+$/))
    .test("input", "Invalid input. Use only digits & try again. ", value =>
      mobileNumberRegexValidator(value, /^(?!^(?:0+|1+)$)\d+$/),
    ),
  email: yup
    .string()
    .trim()
    .required("Email address is required")
    .email("Enter a valid email address.")
    .matches(/^[a-z0-9_.+-]+@[a-z.-]+\.[a-z]{2,}$/, "Enter a valid email address.")
    .min(3, "Email address must be at least 3 characters long")
    .max(320, "Email address must not exceed 320 characters")
    .matches(/^\S+$/, "Email address should not contain spaces")
    .matches(/^[\w.%+-]+@[\w.-]+$/, "Email address should not contain most special characters"),
  message: yup
    .string()
    .trim()
    .matches(/.{1,}/, {
      excludeEmptyString: true,
      message: "Message must be at least 1 character long",
    })
    .max(1000, "Message must not exceed 1000 characters")
    .notRequired()
    .test("test-ctype", "Please enter at least 120 characters.", (value: any) => {
      if (value?.length != 0 && value?.length <= 119) {
        return false;
      } else {
        return true;
      }
    }),
});
