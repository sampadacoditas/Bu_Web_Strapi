import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesMarTech = dynamic(() => import("@/views/Industries/IndustriesMarTech/IndustriesMarTech"));

const IndustriesMarTechPage = ({ resp }: any) => <IndustriesMarTech {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.marTech);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.marTech);
  const headerFooterResp = await getHeaderFooterData();

  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(IndustriesMarTechPage);
