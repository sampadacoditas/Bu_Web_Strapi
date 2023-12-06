import { DEV_OPS, PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getCaseStudyData, getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const DevOpsServices = dynamic(() => import("@/views/Services/DevOps/DevOps"));

const DevOpsServicesPage = ({ resp, caseStudyResp }: any) => <DevOpsServices {...resp} caseStudyResp={caseStudyResp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.devops);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.devops);
  const headerFooterResp = await getHeaderFooterData();
  const caseStudyResp = await getCaseStudyData(DEV_OPS);
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
      caseStudyResp,
    },
  };
}

export default withMetaInfo(DevOpsServicesPage);
