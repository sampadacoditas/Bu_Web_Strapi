import { ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const CareerDomain = dynamic(() => import("@/views/Careers/Domain/Domain"));

const CareerDomainPage = ({ resp }: any) => <CareerDomain {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.domain);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.careerIntermediatePages);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(CareerDomainPage);
