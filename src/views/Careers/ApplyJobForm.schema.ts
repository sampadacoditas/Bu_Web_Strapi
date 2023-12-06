import { mobileNumberRegexValidator } from "@/utils/schemas/contactUs/contactUsSchemaHelper";
import * as yup from "yup";

export const STEP1_INITIAL_VALUES = {
  First_Name: "",
  Last_Name: "",
  Mobile: "",
  Email: "",
  Total_Experience: "",
  City: "",
};
export const STEP2_INITIAL_VALUES = {
  Current_Employer: "",
  Last_Working_Day: "",
  Current_Job_Title: "",
  noticePeriod: { label: "0-30", value: 30 },
};
export const APPLY_JOB_SCHEMA1 = yup
  .object({
    First_Name: yup
      .string()
      .trim()
      .required("First Name is required")
      .matches(/^[^0-9]+$/, "Invalid input. Use only alphabetic characters & try again.")
      .matches(/^[a-zA-Z\s'-]+$/, "Only letters, spaces, hyphens, and apostrophes are allowed")
      .matches(/^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/, "Only single space is allowed")
      .matches(/^[^@#$%^&*!]+$/, "First Name should not include special symbols")
      .min(2, "First Name must be at least 2 characters long")
      .max(50, "First Name must not exceed 50 characters")
      .test("no-leading-trailing-spaces", "First Name should not have leading or trailing spaces", value => {
        if (value) {
          return value.trim() === value;
        }
        return true;
      }),
    Last_Name: yup
      .string()
      .trim()
      .required("Last Name is required")
      .matches(/^[^0-9]+$/, "Invalid input. Use only alphabetic characters & try again.")
      .matches(/^[a-zA-Z\s'-]+$/, "Only letters, spaces, hyphens, and apostrophes are allowed")
      .matches(/^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/, "Only single space is allowed")
      .matches(/^[^@#$%^&*!]+$/, "Last Name should not include special symbols")
      .min(2, "Last Name must be at least 2 characters long")
      .max(50, "Last Name must not exceed 50 characters")
      .test("no-leading-trailing-spaces", "Last Name should not have leading or trailing spaces", value => {
        if (value) {
          return value.trim() === value;
        }
        return true;
      }),
    Mobile: yup
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
      .test("size", "Mobile number should not contain any special characters, spaces, or punctuation", value =>
        mobileNumberRegexValidator(value, /^[\d]+$/),
      )
      .test("input", "Mobile number is invalid", value => mobileNumberRegexValidator(value, /^(?!^(?:0+|1+)$)\d+$/)),
    Email: yup
      .string()
      .trim()
      .required("Email address is required")
      .email("Enter a valid email address.")
      .matches(/^[a-z0-9_.+-]+@[a-z.-]+\.[a-z]{2,}$/, "Enter a valid email address.")
      .min(3, "Email address must be at least 3 characters long")
      .max(320, "Email address must not exceed 320 characters")
      .matches(/^\S+$/, "Email address should not contain spaces")
      .matches(/^[\w.%+-]+@[\w.-]+$/, "Email address should not contain most special characters"),
    Total_Experience: yup
      .string()
      .trim()
      .required("Experience is required")
      .matches(/^[0-9.]+$/, "Experience should only contain numeric characters")
      .matches(/^(\d{1,2}?\.\d{1,2}|\d+)$/, "Only up to 2 decimal places are allowed.")
      .matches(/^[\d.]+$/, "Experience should not contain any special characters, spaces, or punctuation")
      .max(5, "Experience must not exceed 5 characters"),
    City: yup
      .string()
      .trim()
      .required("Location is required")
      .matches(/^[a-zA-Z\s'-]+$/, "Invalid input. Use only alphabetic characters & try again.")
      .matches(/^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/, "Only single space is allowed")
      .matches(/.{1,}/, {
        excludeEmptyString: true,
        message: "Location must be at least 1 character long",
      })
      .max(50, "Message must not exceed 50 characters"),
  })
  .required();

export const APPLY_JOB_SCHEMA2 = yup.object({
  Current_Employer: yup
    .string()
    .trim()
    .test("/^[a-zA-Zs'-]+$/", "Invalid input. Use only alphabetic characters & try again.", value => {
      if (value) {
        const regex = /^[a-zA-Z\s'-]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("/^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/", "Only single space is allowed", value => {
      if (value) {
        const regex = /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/;
        return regex.test(value);
      }
      return true;
    })
    .max(50, "Company name must not exceed 50 characters")
    .test("no-leading-trailing-spaces", "Designation should not have leading or trailing spaces", value => {
      if (value) {
        const regex = /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("/^[^0-9]+$/", "Company name should not contain numeric characters", value => {
      if (value) {
        const regex = /^[^0-9]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("/^[^@#$%^&*!]+$/", "Company name should not include special symbols", value => {
      if (value) {
        const regex = /^[^@#$%^&*!]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("no-leading-trailing-spaces", "Company name should not have leading or trailing spaces", value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    }),
  Current_Job_Title: yup
    .string()
    .trim()
    .optional()
    .max(50, "Position must not exceed 50 characters")
    .test("/^[a-zA-Zs'-]+$/", "Invalid input. Use only alphabetic characters & try again.", value => {
      if (value) {
        const regex = /^[a-zA-Z\s'-]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("/^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/", "Only single space is allowed", value => {
      if (value) {
        const regex = /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("/^[^0-9]+$/", "Position should not contain numeric characters", value => {
      if (value) {
        const regex = /^[^0-9]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("/^[^@#$%^&*!]+$/", "Position should not include special symbols", value => {
      if (value) {
        const regex = /^[^@#$%^&*!]+$/;
        return regex.test(value);
      }
      return true;
    })
    .test("no-leading-trailing-spaces", "Position should not have leading or trailing spaces", value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    }),
  Last_Working_Day: yup.string().required("Last working date should not be empty"),
});
