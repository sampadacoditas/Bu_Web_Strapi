import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const Careers = dynamic(() => import("@/views/Careers/Careers"));

const CareerPage = ({ resp }: any) => <Careers {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.careers);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.careers);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}
export default withMetaInfo(CareerPage);
