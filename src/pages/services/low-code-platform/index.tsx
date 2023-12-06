import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const LowCodePlatform = dynamic(() => import("@/views/Services/LowCodePlatform/LowCodePlatform"));

const LowCodePlatformPage = ({ resp }: any) => <LowCodePlatform {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.lowCode);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.lowCode);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(LowCodePlatformPage);
