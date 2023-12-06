import { Toast } from "react-hot-toast";

const OUR_WORK = "/our-work";
const SERVICE_NAME = "serviceName";
export const CAREERS_OPENINGS = "/careers/openings";
export const PAGE_ROUTES = {
  HOME: "/home",
  ABOUT_US: "/about-us",
  CAREERS: "/careers",
  CONTACT_US: "/contact-us",
  INDUSTRIES: "/industries",
  OUR_WORK: OUR_WORK,
  OUR_WORK_SERVICE_WISE: `${OUR_WORK}/:${SERVICE_NAME}`,
  SERVICES: "/services",
  DEVOPS: "/services/case-study/devops",
  MOBILE_DEVELOPMENT: "/services/mobile-development",
  DATA_SCIENCE_SERVICES: "/services/data-science",
  DEVOPS_SERVICES: "/services/devops",
  TESTING_SERVICES: "/services/quality-engineering",
  LOW_CODE_PLATFORM_SERVICES: "/services/low-code-platform",
  CYBER_SECURITY_SERVICES: "/services/cyber-security",
  PRIVACY_POLICY: "/privacy-policy",
  COMPLIANCES: "/compliances",
  INDUSTRIES_HEALTHCARE: "/industries/healthcare",
  INDUSTRIES_E_COMMERCE: "/industries/e-commerce",
  INDUSTRIES_REAL_ESTATE: "/industries/real-estate",
  INDUSTRIES_MARTECH: "/industries/martech",
  INDUSTRIES_EDTECH: "/industries/edtech",
  INDUSTRIES_BFSI: "/industries/BFSI",
  INDUSTRIES_TRAVEL: "/industries/travel-and-loyalty",
  INDUSTRIES_SHIPPING_AND_LOGISTICS: "/industries/shipping-and-logistics",
  OUR_WORK_DATA_SCIENCE: "/our-work/data-science",
  OUR_WORK_HEALTHCARE: "/our-work/healthcare",
  OUR_WORK_DEVOPS: "/our-work/devops",
  CAREERS_DOMAIN: "/careers/domain",
  OPENINGS: `${CAREERS_OPENINGS}/:category`,
  OUR_WORK_DETAIL: `${OUR_WORK}/:${SERVICE_NAME}/:caseStudyId`,
  PAGE_NOT_FOUND: "/page-not-found",
  WEB_DEVELOPMENT: "/services/web-development",
  AI_GENERATIVE: "/services/ai-generative",
  UX_DESIGN: "/services/ux-design",
  JOB_APPLY: "/careers/job-apply/:jobId",
  JOB_DESCRIPTION: "/careers/job-apply",
  APPLY_JOB_FORM: "/careers/job-apply-form/:job_id",
  APPLY_FORM_DIRECT: "/careers/job-apply-form?jobId=0",
  CARRER_JOB_APPLY: "/careers/job-apply-form",
  AMBRY_GENETICS_AWS: "/Ambry_Genetics_AWS",
  BASIX_AWS: "/Basix_AWS",
  H1B_VISA: "/notice",
  TGI_SPORTS_AWS: "/TGI_Sports_AWS",
};
export const EXTERNAL_ROUTES = {
  BLOGS: "https://blog.coditas.com/",
  META_IMAGE: "https://events-cover.s3.ap-south-1.amazonaws.com/Coditas.png",
};
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const LAST_WORKING_DAY_LABEL = "Last Working Day";
export const UPLOAD_RESUME_MSGS = {
  LABEL: " Upload Resume",
  LIMIT: "Max. upload size: 5 MB",
  EXT_ERR: "Upload PDF only",
  LIMIT_ERR: "Invalid format. Upload resume in PDF.",
};

export const EMPLOYEE_TESTIMONY_TITLE = "Employee Testimonials";

export const MOBILE_MAX_WIDTH = 480;
export const TABLET_MAX_WIDTH = 1200;

export const TOAST_CONFIG: Partial<Toast> = {
  position: "top-right",
  duration: 3000,
};

export const MOBILE_TOAST_CONFIG: Partial<Toast> = {
  position: "top-center",
  duration: 3000,
};

export const FILE_SIZE_5MB = 5000000;

export const DEVOPS_CERTIFIED_BADGES_COUNT_MOBILE = 3;
export const DEVOPS_CERTIFIED_BADGES_COUNT_TABLET = 4;
export const FieldType = {
  text: "text",
  email: "email",
  textArea: "textArea",
  phone: "phone",
  dropdownField: "dropdownField",
  date: "date",
  file: "file",
  salary: "salary",
  search: "search",
  mutliSelect: "mutliSelect",
};
export const NEXT_BTN = "Next";
export const SUBMIT_BTN = "Submit";
export const BACK_BTN = "Back";
export const DATE_FORMAT = {
  DATE_FORMAT_VALUE: "dd/mm/yyyy",
  DATE_FORMAT_PLACEHOLDER: "dd/mm/yy",
  LOCAlE_TO_STRING_FORMAT: "en-GB",
  LOCALE_TO_DATE: "en-CA",
};

export const CONTACT_US_FORM = {
  title: "Need help with your Business?",
  description: "Don’t worry, we’ve got your back. Please fill the form below",
  submit: "Submit",
  name: "What should we call you?",
  namePlaceholder: "Enter your name",
  mobile: "What is your mobile number?",
  mobilePlaceholder: "Enter your phone",
  email: "What is your email address?",
  emailPlaceholder: "Enter your email",
  enquiry: "Preferred cloud provider",
  enquiryPlaceholder: "Enter your cloud provider",
  message: "Message",
  messageplaceholder: "Enter your message...",
};

export const DATA_SCIENCE = "dataScience";
export const DEV_OPS = "devOps";
export const HEALTHCARE = "healthCare";

export const CS_ID_ONE = 101;
export const CS_ID_TWO = 102;
export const CS_ID_THREE = 103;
export const CS_ID_FOUR = 104;

export const MORE_CASE_STUDY_CARD_COUNT_MOBILE = 1;
export const MORE_CASE_STUDY_CARD_COUNT_WEB = 2;
export const FILE_TYPE = "application/pdf";
export const FORM_VALIDATE_MODE = "onChange";
export const TOAST_MSG =
  "Application form submitted! Thank you for applying. We will review your application and get back to you soon.";
export const TOAST_TITLE = "Congratulations";
export const TOAST_TYPE = "success";
export const DUPLICATE_TOAST_MSG =
  "You have already submitted your application for this job. We are reviewing your application and will get back to you soon.";
export const DUPLICATE_TOAST_TITLE = "Application already submitted!";
export const TOAST_TITLE_CONTACT = "Form submitted!";
export const ERROR_TOAST_MSG = "Please check all the fields and try submitting the form again.";
export const ERROR_TOAST_TITLE = "Something went wrong!";
export const ERROR_TOAST_TYPE = "error";
export const ERROR_TOAST_TITLE_CONTACT = "Something went wrong!";
export const HUNDREDS_SEPARATOR_FORMAT = "en-IN";
export const TOAST_MSG_CONTACT =
  "Thank you for reaching out. We have received your form and will get back to you at the earliest.";
export const ERROR_TOAST_MSG_CONTACT = "Please try again.";

export const TECHNOLOGIES_CONSTANT = {
  APACHE_KAFKA: "Apache Kafka",
  APACHE_SPARK: "Apache Spark",
  ANGULAR: "Angular",
  AWS: "AWS",
  AWS_S3: "AWS S3",
  AMAZON_WEB_SERVICES: "Amazon Web Services",
  ANDROID_JETPACK: "Android Jetpack",
  CSS: "CSS",
  CSI: "CSI",
  CPP: "C++",
  CUCUMBER: "Cucumber",
  COCOA_PODS: "CocoaPods",
  DOCKER: "Docker",
  ESO: "ESO",
  ESPRESSO: "Espresso",
  FLASK: "Flask",
  GCP: "GCP",
  GLUE: "Glue",
  GITLAB_CI: "Gitlab CI",
  GRAPH_QL: "GraphQL",
  HASHICORP_VAULT: "Hashicorp Vault",
  HTML: "HTML",
  JAVA: "JAVA",
  JAVASCRIPT: "JavaScript",
  JENKINS: "Jenkins",
  KOTLIN: "Kotlin",
  LAMBDA_FUNCTIONS: "Lambda Functions",
  MONGO_DB: "MongoDB",
  ML_ALGORITHMS: "ML Algorithms",
  MACHINE_LEARNING: "Machine Learning",
  NODE: "Node",
  MYSQL: "MySQL",
  PYHTON: "Python",
  RABBIT_MQ: "Rabbit MQ",
  REALM_DB: "Realm DB",
  SWIFT: "Swift",
  TERRAFORM: "Terraform",
};

export const INPUT_TYPES = {
  BUTTON: "button",
  CHECKBOX: "checkbox",
  COLOR: "color",
  DATE: "date",
  DATETIME_LOCAL: "datetime-local",
  EMAIL: "email",
  SEARCH: "search",
  NUMBER: "number",
  PASSWORD: "password",
  TEL: "tel",
  TEXT: "text",
};
export const RECAPTCHA_TEXT = "I’m not a robot";

export const HOME_TITLE = {
  digitalEngineering: "Digital Engineering through",
  cleanCoding: "Clean Coding",
  designThinking: "Design Thinking",
  dataScience: "Data Science",
  qualityTesting: "Quality Engineering",
  generativeAI: "Generative AI",
};

export const VIEW_MORE = "View more";
export const VIEW_LESS = "View less";

export const FORM_HEADERS = {
  multiPartFormHeader: '"multipart/form-data"',
  applicationJson: "application/json",
};

export const OPTIONS = [
  { value: "Job", label: "Job" },
  { value: "Building a product", label: "Building a product" },
  { value: "Other Enquiry", label: "Other enquiry" },
];

export const CUSTOM_ID = "custom-id";
export const LIGHT_BG_NAV = "lightBgNav";
export const DARK_BG_NAV = "darkBgNav";
export const BLUE_BG_NAV = "blueBgNave";

export enum servicesFormType {
  HEALTHCARE = "healthCare",
  DEVOPS_SERVICE = "devOpsServices",
  WEB_DEVELOPMENT = "webDevelopment",
  DATA_SCIENCE = "dataScience",
  MOBILE_DEVELOPMENT = "mobileDevelopment",
  UX_DESIGN = "uxDesign",
  TESTING_SERVICES = "testingServices",
  DATA_ENGINEERING = "dataEngineering",
  BIG_DATA_AND_ML = "bigDataandMl",
  AI_GENERATIVE = "aiGenerative",
  LOW_CODE_PLATFORM_SERVICES = "lowCodePlatform",
  INDUSTRIES_HEALTHCARE = "IndustriesHealthcare",
  INDUSTRIES_BFSI = "industriesBFSI",
  INDUSTRIES_ECOMMERCE = "industriesEcommerce",
  INDUSTRIES_REAL_ESTATE = "industriesRealEstate",
  INDUSTRIES_MARTECH = "industriesMartech",
  INDUSTRIES_EDTECH = "industriesEdtech",
  INDUSTRIES_SHIPPING_AND_LOGISTICS = "industriesShippingAndLogistics",
  OUR_WORK = "ourWork",
  DATA_SCIENCE_CASE_STUDY = "dataScienceCaseStudy",
  DEVOPS_CASE_STUDY = "devopsCaseStudy",
  HEALTHCARE_CASE_STUDY = "healthCareCaseStudy",
  CYBER_SECURITY_SERVICES = "cyberSecurity",
}

export const caseStudyServiceFormMap: any = {
  [DATA_SCIENCE]: servicesFormType.DATA_SCIENCE_CASE_STUDY,
  [DEV_OPS]: servicesFormType.DATA_SCIENCE_CASE_STUDY,
  [HEALTHCARE]: servicesFormType.HEALTHCARE_CASE_STUDY,
};
export const TIME_INTERVAL = 2000;

export const HTTP_STATUS_CODES = {
  SUCCESS: 200,
};

export const ENV_VARIABLES = {
  dev: "dev",
  qa: "qa",
  prod: "prod",
};

export const dynamicServicePaths = [DATA_SCIENCE, DEV_OPS, HEALTHCARE];

export const dynamicCaseStudyDetailsPaths = [
  `${DATA_SCIENCE}/${CS_ID_ONE}`,
  `${DATA_SCIENCE}/${CS_ID_TWO}`,
  `${DATA_SCIENCE}/${CS_ID_THREE}`,
  `${DATA_SCIENCE}/${CS_ID_FOUR}`,

  `${DEV_OPS}/${CS_ID_ONE}`,
  `${DEV_OPS}/${CS_ID_TWO}`,
  `${DEV_OPS}/${CS_ID_THREE}`,
  `${DEV_OPS}/${CS_ID_FOUR}`,

  `${HEALTHCARE}/${CS_ID_ONE}`,
  `${HEALTHCARE}/${CS_ID_TWO}`,
  `${HEALTHCARE}/${CS_ID_THREE}`,
  `${HEALTHCARE}/${CS_ID_FOUR}`,
];

export const dynamicOpenPositions = [
  "Technology+and+Engineering",
  "User+Experience+Design",
  "Human+Resources",
  "Recruitments",
];

export const homePageCaseStudyData = ["DS_104", "DS_101", "DS_102", "HC_101", "HC_102", "DEVOPS_101"];
export const ROUTES_PRIMARY_KEY = {
  home: "home_page",
  aboutUs: "about_page",
  work: "work_page",
  careers: "career_page",
  contactUs: "contact_page",
  healthCare: "healthCare_page",
  bfsi: "bfsi_page",
  travel: "travelNLoyalty_page",
  eCommerce: "eCommerce_page",
  edTech: "edTech-page",
  marTech: "marTech_page",
  realEstate: "realEstate_page",
  shipNLogistic: "shippingNLogistics_page",
  web: "web-dev_page",
  mob: "mob_page",
  ux: "ux_page",
  ai: "ai_page",
  devops: "devops_page",
  qaulityEngg: "qualityEngg_page",
  dataSci: "dataSci_page",
  lowCode: "lowCode_page",
  cyberSecurity: "cyberSecurity_page",
  careerIntermediatePages: "career_intermediate_pages",
  privacy: "privacy_policy",
  domain: "domain_page",
  root: "root",
};
