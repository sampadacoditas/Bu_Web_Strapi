import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getCaseStudyData, getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const OurWork = dynamic(() => import("@/views/OurWork/OurWork"));

const OurWorkPage = ({ resp, caseStudyResp }: any) => <OurWork {...resp} caseStudyResp={caseStudyResp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.work);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.work);
  const headerFooterResp = await getHeaderFooterData();
  const caseStudyResp = await getCaseStudyData("", "?populate=*");
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
      caseStudyResp,
    },
  };
}

export default withMetaInfo(OurWorkPage);
