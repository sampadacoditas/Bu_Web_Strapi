import { ROUTES_PRIMARY_KEY } from "@/constants/constants";
import { getHeaderFooterData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const CyberSecurity = dynamic(() => import("@/views/Services/CyberSecurity/CyberSecurity"));

const CyberSecurityPage = ({ resp }: any) => <CyberSecurity {...resp} />;

export async function getStaticProps() {
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.cyberSecurity);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      resp,
      headerFooterResp,
    },
  };
}

export default CyberSecurityPage;
