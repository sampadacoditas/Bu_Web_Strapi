import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const WebDevelopment = dynamic(() => import("@/views/Services/WebDevelopment/WebDevelopment"));

const WebDevelopmentPage = ({ resp }: any) => <WebDevelopment {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.web);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.web);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(WebDevelopmentPage);
