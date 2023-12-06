import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesTravel = dynamic(() => import("@/views/Industries/Travel/Travel"));

const IndustriesTravelPage = ({ resp }: any) => <IndustriesTravel {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.travel);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.travel);
  const headerFooterResp = await getHeaderFooterData();

  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(IndustriesTravelPage);
