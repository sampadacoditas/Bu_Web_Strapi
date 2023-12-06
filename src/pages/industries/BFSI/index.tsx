import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesBFSI = dynamic(() => import("@/views/Industries/BFSI/BFSI"));

const IndustriesBFSIPage = ({ resp }: any) => <IndustriesBFSI {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.bfsi);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.bfsi);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(IndustriesBFSIPage);
