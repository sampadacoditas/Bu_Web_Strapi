import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesRealEstate = dynamic(() => import("@/views/Industries/IndustriesRealEstate/IndustriesRealEstate"));

const IndustriesRealEstatePage = ({ resp }: any) => <IndustriesRealEstate {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.realEstate);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.realEstate);
  const headerFooterResp = await getHeaderFooterData();

  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(IndustriesRealEstatePage);
