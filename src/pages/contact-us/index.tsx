import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ContactUs = dynamic(() => import("@/views/ContactUs/ContactUs"));

const ContactUsPage = ({ resp }: any) => {
  return <ContactUs {...resp} />;
};

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.contactUs);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.contactUs);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(ContactUsPage);
