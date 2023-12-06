export const FORM_SECTION = {
  HEADING: "Fill out the Form",
  SUB_TEXT: "Help us with the following details",
  STEPPER: {
    STEP1: "Basic Details",
    STEP2: "Work Details",
  },
  FNAME: {
    LABEL: "First Name",
    PLACEHOLDER: "Enter your first name",
  },
  LNAME: {
    LABEL: "Last Name",
    PLACEHOLDER: "Enter your last name",
  },
  MOB: {
    LABEL: "Mobile Number",
    PLACEHOLDER: "Enter your phone number",
  },
  EMAIL: {
    LABEL: "Email Address",
    PLACEHOLDER: "Enter your email",
  },
  EXP: {
    LABEL: "Experience",
    PLACEHOLDER: "Enter your experience",
  },
  LOCATION: {
    LABEL: "Current Location",
    PLACEHOLDER: "Enter your current location",
  },
  COMPANY: {
    LABEL: "Current Company",
    PLACEHOLDER: "Enter your current company",
  },
  SALARY: {
    LABEL: "Current CTC(LPA)",
    PLACEHOLDER: "Eg. 3,60,000",
  },
  POSITION: {
    LABEL: "Current Job Title",
    PLACEHOLDER: "Enter your title",
  },
  NOTICE_PERIOD: {
    LABEL: "Notice Period(Days)",
    PLACEHOLDER: "0",
    ERR: "Notice Period is required",
  },
  LAST_WORKING_DAY: {
    LABEL: "Last Working Day",
    PLACEHOLDER: "Enter your current location",
  },
  RESUME: {
    LABEL: "Upload Resume",
    PLACEHOLDER: "Enter your current location",
    ERR_MSG_REQUIRED: "Resume is required",
  },
};

export interface FORM_ITEM_TYPE {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  name: string;
  isRequired: boolean;
}
export interface TYPEOF_FORM2 {
  company: string | undefined;
  position: string | undefined;
}

export const NOTICE_PERIOD_OPTIONS = [
  { value: 30, label: "0-30" },
  { value: 60, label: "30-60" },
  { value: 90, label: "60-90" },
];
