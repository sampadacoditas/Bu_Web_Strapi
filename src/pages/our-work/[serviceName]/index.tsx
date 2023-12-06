import { PAGE_ROUTES, ROUTES_PRIMARY_KEY, dynamicServicePaths } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getCaseStudyData, getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const OurWork = dynamic(() => import("@/views/OurWork/OurWork"));

const CaseStudyService = ({ sericeName, caseStudyResp, resp }: any) => {
  return <OurWork caseStudyResp={caseStudyResp} {...resp} />;
};

export async function getStaticProps({ params }: any) {
  const { serviceName } = params;
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.work);
  const headerFooterResp = await getHeaderFooterData();
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.work);
  const caseStudyResp = await getCaseStudyData("", "?populate=*");
  return {
    props: {
      serviceName,
      metaTags,
      headerFooterResp,
      resp,
      caseStudyResp,
    },
  };
}

export async function getStaticPaths() {
  const paths = dynamicServicePaths.map(serviceName => ({
    params: { serviceName },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default withMetaInfo(CaseStudyService);
