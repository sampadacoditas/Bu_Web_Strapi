import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const AIGenerative = dynamic(() => import("@/views/Services/AIGenerative/AIGenerative"));

const AIGenerativePage = ({ resp }: any) => <AIGenerative {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.ai);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.ai);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(AIGenerativePage);
