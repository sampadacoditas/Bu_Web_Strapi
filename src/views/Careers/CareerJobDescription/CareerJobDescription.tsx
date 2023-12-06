import { useCallback, useState, useEffect } from "react";
import { CareerDomainHeroSection, JDContainer } from "@/components";
import PageNotFoundComp from "@/components/PageNotFound/PageNotFountComp";
import { PAGE_ROUTES, CAREERS_OPENINGS } from "@/constants/constants";
import style from "./CareerJobDescription.module.scss";
import { useRouter } from "next/router";
import { encodeParam } from "@/utils/helper";

interface INavigationListItem {
  label: string;
  url: string;
}
const CareerJobDescription = (props: any) => {
  const { push } = useRouter();
  const { attributes: pageData } = props;
  const [pageError, setPageError] = useState<boolean>(false);
  const [header, setHeader] = useState<string>("");
  const [navigationList, setNavigationList] = useState<INavigationListItem[]>([]);

  const navAndHeaderSetter = useCallback((apiData: any) => {
    const { category = "", jobPostTitle = "" } = apiData;

    const navigationList = [
      {
        label: pageData?.jobDescriptionData?.breadcrumbLabels?.bussinessFunc,
        url: pageData?.routes?.domain,
      },
      {
        label: category,
        url: `${pageData?.routes?.careeers}?category=${encodeParam(category)}`,
      },
      {
        label: jobPostTitle,
        url: "",
      },
    ];
    setNavigationList(navigationList);
    setHeader(jobPostTitle);
  }, []);

  useEffect(() => {
    if (pageError) {
      window.scrollTo(0, 1);
    }
  }, [pageError]);

  const heroSectionData = {
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    navigationList: navigationList,
    rightArrow: pageData?.commonSvgs?.chevronRightIcon,
  };

  const visibleContent = () => {
    if (pageError) {
      return <PageNotFoundComp onBackClick={() => push(PAGE_ROUTES.CAREERS_DOMAIN)} />;
    } else {
      return (
        <>
          <CareerDomainHeroSection
            {...heroSectionData}
            title={header}
            contentContainerStyle={style.heroSectionContentContainer}
            heroSectionGradientStyle={style.heroSectionGradient}
          />
          <JDContainer
            apiDataHandler={navAndHeaderSetter}
            pageErrorSetter={setPageError}
            jdContainerData={pageData?.jobDescriptionData}
          />
        </>
      );
    }
  };

  return <div className={style.careerJDPage}>{visibleContent()}</div>;
};

export default CareerJobDescription;
