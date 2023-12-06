import { useCallback, useEffect, useState } from "react";
import Form from "@/components/Form/Form";
import PageNotFoundComp from "@/components/PageNotFound/PageNotFountComp";
import { CareerDomainHeroSection, Loader } from "@/components";
import { getCareerJobDescription } from "@/components/JDContainer/JDContainer.service";
import style from "./ApplyJobForm.module.scss";
import { PAGE_ROUTES, CAREERS_OPENINGS } from "@/constants/constants";
import { useRouter } from "next/router";
import { encodeParam } from "@/utils/helper";

interface INavigationListItem {
  label: string;
  url: string;
}
const ApplyJobForm = (props: any) => {
  const { attributes: pageData } = props;
  const { push, query } = useRouter();
  const job_id = query.jobId;
  const [directApplyForm, setDirectApplyForm] = useState<boolean>(true);
  const [title, setTitle] = useState<string>(pageData?.heroBannerSection?.bannerTitle);
  const [navigationList, setNavigationList] = useState<INavigationListItem[]>([]);
  const [pageError, setPageError] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const navAndTitleSetter = useCallback(
    (category: any, jobPostTitle: any) => {
      setTitle(jobPostTitle);
      const navigationList = [
        {
          label: category,
          url: `${pageData?.routes?.openings}?category=${encodeParam(category)}`,
        },
        {
          label: jobPostTitle,
          url: `${pageData?.routes?.jobDescription}?jobId=${job_id}`,
        },
        {
          label: title,
          url: "",
        },
      ];
      setNavigationList(navigationList);
    },
    [job_id],
  );

  const getCareerJobOpeningDetails = useCallback(async () => {
    try {
      if (!job_id) {
        setPageLoading(false);
        setPageError(true);
        return false;
      }
      const response = await getCareerJobDescription(String(job_id));
      const apiData = response?.data[0];
      const { category, jobPostTitle } = apiData;
      navAndTitleSetter(category, jobPostTitle);
      setPageLoading(false);
      setPageError(false);
    } catch (error) {
      setPageLoading(false);
      setPageError(true);
    }
  }, [job_id]);

  const updateNavigationAndLoadData = useCallback(() => {
    if (directApplyForm) {
      setNavigationList([
        {
          label: "Careers",
          url: PAGE_ROUTES.CAREERS,
        },
        {
          label: "Business Function",
          url: PAGE_ROUTES.CAREERS_DOMAIN,
        },
        {
          label: title,
          url: "",
        },
      ]);
      setPageLoading(false);
    } else {
      getCareerJobOpeningDetails();
    }
  }, [directApplyForm]);

  useEffect(() => {
    const isDirectApply = job_id == "0" || !job_id;
    setDirectApplyForm(isDirectApply);
  }, [job_id]);

  useEffect(() => {
    updateNavigationAndLoadData();
  }, [updateNavigationAndLoadData]);

  useEffect(() => {
    if (pageError || pageLoading) {
      window.scrollTo(0, 1);
    }
  }, [pageError, pageLoading]);

  const visibleContent = () => {
    if (pageLoading) {
      return <Loader size="lg" />;
    } else if ((!pageLoading && pageError) || !job_id) {
      return <PageNotFoundComp onBackClick={() => push(PAGE_ROUTES.CAREERS_DOMAIN)} />;
    } else {
      return (
        <>
          <CareerDomainHeroSection
            title={title}
            contentContainerStyle={style.heroSectionContentContainer}
            heroSectionGradientStyle={style.heroSectionGradient}
            image={getImageUrl(pageData?.heroBannerSection?.bannerImg)}
            navigationList={navigationList}
            rightArrow={pageData?.commonSvgs?.chevronRightIcon}
          />
          <Form jobId={String(job_id)} pageData={pageData} />
        </>
      );
    }
  };

  return <div className={style.wrapper}>{visibleContent()}</div>;
};
export default ApplyJobForm;
