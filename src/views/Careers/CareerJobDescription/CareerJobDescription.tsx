import { useCallback, useState, useEffect } from "react";
import { CareerDomainHeroSection, JDContainer } from "@/components";
import PageNotFoundComp from "@/components/PageNotFound/PageNotFountComp";
import { PAGE_ROUTES, CAREERS_OPENINGS } from "@/constants/constants";
import style from "./CareerJobDescription.module.scss";
import { useRouter } from "next/router";
import { encodeParam, getImageUrl } from "@/utils/helper";

interface INavigationListItem {
  label: string;
  url: string;
}
const CareerJobDescription = (props: any) => {
  const { push } = useRouter();
  const { attributes: pageData } = props;
  const [formContent, stepperForm1, stepperForm2, jobDescription, commonSvgs] = pageData.pageComponents;
  const [chevronRightIcon] = commonSvgs?.svgs;

  const [pageError, setPageError] = useState<boolean>(false);
  const [header, setHeader] = useState<string>("");
  const [navigationList, setNavigationList] = useState<INavigationListItem[]>([]);

  const navAndHeaderSetter = useCallback((apiData: any) => {
    const { category = "", jobPostTitle = "" } = apiData;

    const navigationList = [
      {
        label: jobDescription?.breadcrumbLabels?.bussinessFunc,
        url: jobDescription?.routes?.domain,
      },
      {
        label: category,
        url: `${jobDescription?.routes?.careeers}?category=${encodeParam(category)}`,
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
    rightArrow: chevronRightIcon.value,
  };
  const jobDescriptionData = {
    jobDescriptionLabels: {
      applyNow: jobDescription?.jobDescriptionLabels?.applyNow,
      departmentTitle: jobDescription?.jobDescriptionLabels?.departmentTitle,
      jDContainerTitle: jobDescription?.jobDescriptionLabels?.jDContainerTitle,
      minExperienceTitle: jobDescription?.jobDescriptionLabels?.minExperienceTitle,
      locationTitle: jobDescription?.jobDescriptionLabels?.locationTitle,
      jobTypeTitle: jobDescription?.jobDescriptionLabels?.jobTypeTitle,
    },
    jobDescriptionIcons: {
      location: jobDescription.jobDescriptionIcons?.location,
      jobDepartment: jobDescription.jobDescriptionIcons?.jobDepartment,
      jobType: jobDescription.jobDescriptionIcons?.jobType,
      experience: jobDescription.jobDescriptionIcons?.experience,
    },
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
            jdContainerData={jobDescriptionData}
          />
        </>
      );
    }
  };

  return <div className={style.careerJDPage}>{visibleContent()}</div>;
};

export default CareerJobDescription;
