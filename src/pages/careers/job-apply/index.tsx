import { Splash } from "@/components";
import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import { getHeaderFooterData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const CareerJobDescription = dynamic(() => import("@/views/Careers/CareerJobDescription/CareerJobDescription"));

const CareerJobDescriptionPage = ({ resp }: any) => {
  const { isReady, query, push } = useRouter();
  if (isReady) {
    if (!query.jobId) {
      push(PAGE_ROUTES.PAGE_NOT_FOUND);
      return <></>;
    }
    return <CareerJobDescription {...resp} />;
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

export default CareerJobDescriptionPage;
