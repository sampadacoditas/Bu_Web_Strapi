import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesECommerce = dynamic(() => import("@/views/Industries/IndustriesECommerce/IndustriesECommerce"));

const IndustriesECommercePage = ({ resp }: any) => <IndustriesECommerce {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.eCommerce);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.eCommerce);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(IndustriesECommercePage);
