import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesShippingAndLogistics = dynamic(
  () => import("@/views/Industries/IndustriesShippingAndLogistics/IndustriesShippingAndLogistics"),
);

const IndustriesShippingAndLogisticsPage = ({ resp }: any) => <IndustriesShippingAndLogistics {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.shipNLogistic);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.shipNLogistic);
  const headerFooterResp = await getHeaderFooterData();

  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(IndustriesShippingAndLogisticsPage);
