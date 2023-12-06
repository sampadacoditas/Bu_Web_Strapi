import { FOOTER_CONSTANTS, FOOTER_LINKS } from "./Footer.constant";
import { PAGE_ROUTES } from "@/constants/constants";
const H1B_VISA = "notice/H1B_Visa_Notice.pdf";

export const FooterNavLink = [
  {
    title: FOOTER_CONSTANTS.pages,
    navLinks: [
      {
        text: FOOTER_CONSTANTS.privacyPolicy,
        link: PAGE_ROUTES.PRIVACY_POLICY,
      },
      {
        text: FOOTER_CONSTANTS.aboutUs,
        link: PAGE_ROUTES.ABOUT_US,
      },
      {
        text: FOOTER_CONSTANTS.contactUs,
        link: PAGE_ROUTES.CONTACT_US,
      },
      {
        text: FOOTER_CONSTANTS.Notice,
        link: H1B_VISA,
        openInNewTab: true,
      },
    ],
  },
  {
    title: FOOTER_CONSTANTS.inMedia,
    navLinks: [
      {
        text: FOOTER_CONSTANTS.yourStory,
        link: FOOTER_LINKS.YOURSTORY,
      },
      {
        text: FOOTER_CONSTANTS.economicTimes,
        link: FOOTER_LINKS.ECONOMIC_TIMES,
      },
      {
        text: FOOTER_CONSTANTS.expressComputers,
        link: FOOTER_LINKS.EXPRESS_COMPUTERS,
      },
      {
        text: FOOTER_CONSTANTS.ciol,
        link: FOOTER_LINKS.CIOL,
      },
    ],
  },
  {
    title: FOOTER_CONSTANTS.socialMedia,
    navLinks: [
      {
        id: 1,
        text: FOOTER_CONSTANTS.linkedIn,
        link: FOOTER_LINKS.LINKEDIN,
      },
      {
        id: 2,
        text: FOOTER_CONSTANTS.instagram,
        link: FOOTER_LINKS.INSTAGRAM,
      },
      {
        id: 3,
        text: FOOTER_CONSTANTS.facebook,
        link: FOOTER_LINKS.FACEBOOK,
      },
      {
        id: 4,
        text: FOOTER_CONSTANTS.twitter,
        link: FOOTER_LINKS.TWITTER,
      },
    ],
  },
];

export const MIN_LENGTH = 3;
