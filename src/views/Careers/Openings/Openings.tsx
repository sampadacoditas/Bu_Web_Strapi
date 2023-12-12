import { useState, useEffect, useCallback } from "react";
import { CareerDomainHeroSection, JobListing } from "@/components";
import { PAGE_ROUTES } from "@/constants/constants";
import useDebounceValue from "@/hooks/useDebounceValue";
import { getCareerOpenings } from "@/services/career.services";
import { sanitize } from "isomorphic-dompurify";
import style from "./Openings.module.scss";
import { useRouter } from "next/router";
import { decodeParam, getImageUrl } from "@/utils/helper";

const Openings = (props: any) => {
  const { attributes: pageData } = props;
  const [jobOpenings, setJobOpenings] = useState<any>([]);
  const [filteredJobOpenings, setFilteredJobOpenings] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const debouncedSearchText = useDebounceValue<string>(searchText, 400);
  const [loading, setLoading] = useState<boolean>(true);
  const { push, query } = useRouter();

  const category = decodeParam(String(query.category));

  const getOpeningsAsPerBusinessFunctions = (category: string | undefined, openings: any) => {
    return openings
      .filter((job: any) => job.category === category)
      .map((job: any) => ({
        title: job.jobPostTitle,
        jobSummary: job.jdSummary,
        jobDescription: removeHTMLTags(job?.jobDescription),
        jobId: job.jobId,
      }));
  };

  const getCareerOpeningsList = async () => {
    try {
      const response = await getCareerOpenings();
      setJobOpenings(getOpeningsAsPerBusinessFunctions(category, response?.data));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const removeHTMLTags = (htmlString: string) => {
    const cleanString = sanitize(htmlString);
    const div = document.createElement("div");
    div.innerHTML = cleanString;
    return div.textContent || div.innerText || "";
  };

  const handleSearchValue = useCallback(() => {
    let filteredJobOpenings = jobOpenings;
    if (debouncedSearchText.trim().length) {
      filteredJobOpenings = jobOpenings?.filter(
        (item: any) =>
          item?.title?.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
          item?.jobSummary?.toLowerCase().includes(debouncedSearchText.toLowerCase()),
      );
    }
    setFilteredJobOpenings(filteredJobOpenings);
  }, [jobOpenings, debouncedSearchText]);

  const redirectToJobDescription = (jobId: string, jobTitle: string) => {
    push(`${PAGE_ROUTES.JOB_DESCRIPTION}?jobId=${jobId}`);
  };

  useEffect(() => {
    getCareerOpeningsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSearchValue();
  }, [handleSearchValue]);

  const navigationList = [
    {
      label: pageData?.jobDescriptionData?.breadcrumbLabels?.careers,
      url: pageData?.routes?.careeers,
    },
    {
      label: pageData?.jobDescriptionData?.breadcrumbLabels?.bussinessFunc,
      url: pageData?.routes?.domain,
    },
    {
      label: category ?? "",
      url: pageData?.routes?.domain,
    },
  ];

  const heroSectionData = {
    title: category,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    navigationList: navigationList,
    rightArrow: pageData?.commonSvgs?.chevronRightIcon,
  };

  const jobListingData = {
    constant: pageData?.cardArray1,
    emptyPageData: {
      title: pageData?.sectionTitle2,
      description: pageData?.description2,
      logo: pageData?.imagesSection1?.emptyPage,
    },
    commonSvgs: pageData?.commonSvgs,
  };

  return (
    <div className={style.openingsPage}>
      <CareerDomainHeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
      />
      <JobListing
        {...jobListingData}
        contentContainerStyle={style.domainListingContainer}
        jobListing={filteredJobOpenings}
        searchText={searchText}
        setSearchText={setSearchText}
        redirectToJobDescription={redirectToJobDescription}
        loading={loading}
      />
    </div>
  );
};

export default Openings;
