import { dynamicCaseStudyDetailsPaths } from "@/constants/constants";
import { getCaseStudyData, getHeaderFooterData } from "@/services/strapi.service";
import dynamic from "next/dynamic";
const CaseStudyDetails = dynamic(import("@/views/OurWork/CaseStudyDetails/CaseStudyDetails"));

const CaseStudyDetailsPage = ({ serviceName, caseStudyData, allCaseStudyData, caseStudyResp }: any) => {
  console.log(caseStudyData);
  return (
    <CaseStudyDetails serviceName={serviceName} caseStudyData={caseStudyData} allCaseStudyData={allCaseStudyData} />
  );
};

export async function getStaticProps({ params }: any) {
  const { serviceName, caseStudyId } = params;

  const caseStudyResp = await getCaseStudyData(serviceName);
  let caseStudyData = {};
  let allCaseStudyData: any = [];
  caseStudyResp?.map((item: any) => {
    const data = item?.attributes;
    if (data?.card_id == caseStudyId) {
      caseStudyData = data;
    } else {
      allCaseStudyData.push(data);
    }
  });
  const headerFooterResp = await getHeaderFooterData();

  return {
    props: {
      serviceName,
      caseStudyData,
      allCaseStudyData,
      headerFooterResp,
      caseStudyResp,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: dynamicCaseStudyDetailsPaths.map((route: string) => {
      const [service, caseStudy] = route.split("/");

      return {
        params: {
          serviceName: service,
          caseStudyId: caseStudy,
        },
      };
    }),
    fallback: false,
  };
}

export default CaseStudyDetailsPage;
