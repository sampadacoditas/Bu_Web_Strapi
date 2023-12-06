import { PAGE_ROUTES, ROUTES_PRIMARY_KEY } from "@/constants/constants";
import withMetaInfo from "@/hocs/withMetaInfo";
import { getHeaderFooterData, getMetaData, getPageData } from "@/services/strapi.service";
import dynamic from "next/dynamic";

const QualityTest = dynamic(() => import("@/views/Services/QualityTest/QualityTest"));

const QualityTestPage = ({ resp }: any) => <QualityTest {...resp} />;

export async function getStaticProps() {
  const metaTags = await getMetaData(ROUTES_PRIMARY_KEY?.qaulityEngg);
  const resp = await getPageData(ROUTES_PRIMARY_KEY?.qaulityEngg);
  const headerFooterResp = await getHeaderFooterData();
  return {
    props: {
      metaTags,
      resp,
      headerFooterResp,
    },
  };
}

export default withMetaInfo(QualityTestPage);
