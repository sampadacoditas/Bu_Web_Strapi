import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("@/views/PrivacyPolicy/PrivacyPolicy"));

const PrivacyPolicyPage = ({ resp }: any) => <PrivacyPolicy {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.privacy);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.privacy);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(PrivacyPolicyPage);
