import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const UxDesign = dynamic(() => import("@/views/Services/UXDesign/UXDesign"));

const UxDesignPage = ({ resp }: any) => <UxDesign {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.ux);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.ux);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(UxDesignPage);
