import { PAGE_ROUTES } from "@/constants/constants";

export const HEADER_CONSTANTS = {
  WEB_DEVELOPMENT: "Web Development",
  MOBILE_DEVELOPMENT: "Mobile Development",
  UX_DESIGN: "UX Design",
  DEVOPS: "DevOps Services",
  TESTING: "Quality Engineering",
  DATA_SCIENCE: "Data Science",
  ABOUT_US: "About Us",
  OUR_SERVICES: "Our Services",
  CONTACT_US: "Contact Us",
  BLOGS: "Blog",
  CAREERS: "Careers",
  OUR_WORK: "Our Work",
  HEALTHCARE: "Healthcare",
  INDUSTRIES: "Industries",
  LOW_CODE_PLATFORM: "Low-Code Platforms",
  AI_GENERATIVE: "Generative AI",
  BFSI: "BFSI",
  E_COMMERCE: "E-Commerce",
  REAL_ESTATE: "Real Estate",
  MARTECH: "MarTech",
  EDTECH: "EdTech",
  SHIPPING_AND_LOGISTICS: "Shipping and Logistics",
  TRAVEL: "Travel and Loyalty",
  CYBER_SECURITY: "Cybersecurity",
};

export const NAV_ITEMS = [
  {
    title: HEADER_CONSTANTS.ABOUT_US,
    route: PAGE_ROUTES.ABOUT_US,
    subRoute: [],
  },
  {
    title: HEADER_CONSTANTS.OUR_SERVICES,
    route: PAGE_ROUTES.SERVICES,
    subRoute: [
      {
        title: HEADER_CONSTANTS.WEB_DEVELOPMENT,
        route: PAGE_ROUTES.WEB_DEVELOPMENT,
      },
      {
        title: HEADER_CONSTANTS.MOBILE_DEVELOPMENT,
        route: PAGE_ROUTES.MOBILE_DEVELOPMENT,
      },
      {
        title: HEADER_CONSTANTS.UX_DESIGN,
        route: PAGE_ROUTES.UX_DESIGN,
      },
      {
        title: HEADER_CONSTANTS.AI_GENERATIVE,
        route: PAGE_ROUTES.AI_GENERATIVE,
      },
      {
        title: HEADER_CONSTANTS.DEVOPS,
        route: PAGE_ROUTES.DEVOPS_SERVICES,
      },
      {
        title: HEADER_CONSTANTS.TESTING,
        route: PAGE_ROUTES.TESTING_SERVICES,
      },
      {
        title: HEADER_CONSTANTS.DATA_SCIENCE,
        route: PAGE_ROUTES.DATA_SCIENCE_SERVICES,
      },

      {
        title: HEADER_CONSTANTS.LOW_CODE_PLATFORM,
        route: PAGE_ROUTES.LOW_CODE_PLATFORM_SERVICES,
      },
      {
        title: HEADER_CONSTANTS.CYBER_SECURITY,
        route: PAGE_ROUTES.CYBER_SECURITY_SERVICES,
      },
    ],
  },
  {
    title: HEADER_CONSTANTS.INDUSTRIES,
    route: PAGE_ROUTES.INDUSTRIES,
    subRoute: [
      {
        title: HEADER_CONSTANTS.HEALTHCARE,
        route: PAGE_ROUTES.INDUSTRIES_HEALTHCARE,
      },
      {
        title: HEADER_CONSTANTS.BFSI,
        route: PAGE_ROUTES.INDUSTRIES_BFSI,
      },
      {
        title: HEADER_CONSTANTS.TRAVEL,
        route: PAGE_ROUTES.INDUSTRIES_TRAVEL,
      },
      {
        title: HEADER_CONSTANTS.E_COMMERCE,
        route: PAGE_ROUTES.INDUSTRIES_E_COMMERCE,
      },
      {
        title: HEADER_CONSTANTS.EDTECH,
        route: PAGE_ROUTES.INDUSTRIES_EDTECH,
      },
      {
        title: HEADER_CONSTANTS.MARTECH,
        route: PAGE_ROUTES.INDUSTRIES_MARTECH,
      },
      {
        title: HEADER_CONSTANTS.REAL_ESTATE,
        route: PAGE_ROUTES.INDUSTRIES_REAL_ESTATE,
      },
      {
        title: HEADER_CONSTANTS.SHIPPING_AND_LOGISTICS,
        route: PAGE_ROUTES.INDUSTRIES_SHIPPING_AND_LOGISTICS,
      },
    ],
  },
  {
    title: HEADER_CONSTANTS.OUR_WORK,
    route: PAGE_ROUTES.OUR_WORK,
    subRoute: [],
  },
  {
    title: HEADER_CONSTANTS.CAREERS,
    route: PAGE_ROUTES.CAREERS,
    subRoute: [],
  },
  {
    title: HEADER_CONSTANTS.CONTACT_US,
    route: PAGE_ROUTES.CONTACT_US,
    subRoute: [],
  },
  // {
  //   title: HEADER_CONSTANTS.BLOGS,
  //   route: EXTERNAL_ROUTES.BLOGS,
  //   subRoute: [],
  // },
];

export const CONTACT_US_NAV_ITEM = {
  title: HEADER_CONSTANTS.CONTACT_US,
  route: PAGE_ROUTES.CONTACT_US,
  subRoute: [],
};
