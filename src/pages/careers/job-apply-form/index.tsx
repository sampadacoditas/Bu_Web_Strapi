import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Splash } from "@/components";
import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import { getHeaderFooterData, getPageData } from "@/services/strapi.service";
const ApplyJobForm = dynamic(() => import("@/views/ApplyJobForm/ApplyJobform"));

const ApplyJobFormPage = ({ resp }: any) => {
  const { isReady, query, push } = useRouter();
  if (isReady) {
    if (!query.jobId) {
      push(PAGE_ROUTES.PAGE_NOT_FOUND);
      return <></>;
    }
    return <ApplyJobForm {...resp} />;
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
export default ApplyJobFormPage;
