import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Openings = dynamic(() => import("@/views/Careers/Openings/Openings"));
import { Splash } from "@/components";
import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import { getHeaderFooterData, getPageData } from "@/services/strapi.service";

const OpeningsPage = ({ resp }: any) => {
  const { isReady, query, push } = useRouter();
  if (isReady) {
    if (!query.category) {
      push(PAGE_ROUTES.PAGE_NOT_FOUND);
      return <></>;
    }
    return <Openings {...resp} />;
  }
  return <Splash />;
};

export async function getStaticProps() {
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.careerIntermediatePages);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      resp,
      headerFooterResp,
    },
  };
}

export default OpeningsPage;
