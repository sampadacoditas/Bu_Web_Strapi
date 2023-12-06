import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";
const AboutUs = dynamic(() => import("@/views/AboutUs/AboutUs"));

const AboutUsPage = ({ resp }: any) => {
  return <AboutUs {...resp} />;
};

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.aboutUs);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.aboutUs);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(AboutUsPage);
