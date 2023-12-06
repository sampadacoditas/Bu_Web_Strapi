import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const MobileDevelopment = dynamic(() => import("@/views/Services/MobileDevelopment/MobileDevelopment"));

const MobileDevelopmentPage = ({ resp }: any) => <MobileDevelopment {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.mob);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.mob);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(MobileDevelopmentPage);
