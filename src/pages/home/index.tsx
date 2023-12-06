import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getCaseStudyData, getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/views/Home"));

const Homepage = ({ resp, caseStudyResp }: any) => {
  return <Home {...resp} caseStudyResp={caseStudyResp} />;
};

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.home);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.home);
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

export default withMetaInfo(Homepage);
