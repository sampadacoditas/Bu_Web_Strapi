import { DATA_SCIENCE, PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getCaseStudyData, getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const DataScience = dynamic(() => import("@/views/Services/DataScience/DataScience"));

const DataSciencePage = ({ resp, caseStudyResp }: any) => <DataScience {...resp} caseStudyResp={caseStudyResp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.dataSci);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.dataSci);
  const headerFooterResp = await getHeaderFooterData();
  const caseStudyResp = await getCaseStudyData(DATA_SCIENCE);
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
      caseStudyResp,
    },
  };
}

export default withMetaInfo(DataSciencePage);
