import { useState, useEffect } from "react";
import { getCareerOpenings } from "@/services/career.services";
import { DomainListing, CareerDomainHeroSection } from "@/components";
import { getCategories } from "./DomainHelper";
import style from "./Domain.module.scss";
import { useRouter } from "next/router";
import { encodeParam, getImageUrl } from "@/utils/helper";

const Domain = (props: any) => {
  const { attributes: pageData } = props;
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { push } = useRouter();

  const getCareerOpeningsList = async () => {
    try {
      const response = await getCareerOpenings();
      setCategories(getCategories(response?.data));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleViewOpenings = (catgeory: string) => {
    const redirectedUrl = `${pageData?.routes?.openings}?category=${encodeParam(catgeory)}`;
    push(redirectedUrl);
  };

  const redirectApplyDirectForm = () => {
    push(pageData?.routes?.formRoute);
  };

  useEffect(() => {
    getCareerOpeningsList();
  }, []);

  const navigationList = [
    {
      label: pageData?.jobDescriptionData?.breadcrumbLabels?.careers,
      url: pageData?.routes?.careeers,
    },
    {
      label: pageData?.jobDescriptionData?.breadcrumbLabels?.openPosition,
      url: pageData?.routes?.domain,
    },
    {
      label: pageData?.jobDescriptionData?.breadcrumbLabels?.bussinessFunc,
      url: pageData?.routes?.domain,
    },
  ];

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    navigationList: navigationList,
    rightArrow: pageData?.commonSvgs?.chevronRightIcon,
  };

  const domainListingData = {
    constant: pageData?.cardArray1,
  };

  return (
    <div className={style.domainPage}>
      <CareerDomainHeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
      />
      <DomainListing
        {...domainListingData}
        contentContainerStyle={style.domainListingContainer}
        domainListing={categories}
        handleViewOpenings={handleViewOpenings}
        redirectApplyDirectForm={redirectApplyDirectForm}
        loading={loading}
      />
    </div>
  );
};

export default Domain;
