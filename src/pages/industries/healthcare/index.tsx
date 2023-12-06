import { HEALTHCARE, PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getCaseStudyData, getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const IndustriesHealthcare = dynamic(() => import("@/views/Industries/IndustriesHealthcare/IndustriesHealthcare"));

const IndustriesHealthcarePage = ({ resp, caseStudyResp }: any) => (
  <IndustriesHealthcare {...resp} caseStudyResp={caseStudyResp} />
);

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.healthCare);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.healthCare);
  const headerFooterResp = await getHeaderFooterData();
  const caseStudyResp = await getCaseStudyData(HEALTHCARE);
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
      caseStudyResp,
    },
  };
}

export default withMetaInfo(IndustriesHealthcarePage);
