import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesEdTech = dynamic(() => import("@/views/Industries/IndustriesEdTech/IndustriesEdTech"));

const IndustriesEdTechPage = ({ resp }: any) => {
  return <IndustriesEdTech {...resp} />;
};

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.edTech);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.edTech);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(IndustriesEdTechPage);
