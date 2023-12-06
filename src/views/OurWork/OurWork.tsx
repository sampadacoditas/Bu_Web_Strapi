import { HeroSection, ServicesContactUs } from "@/components";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import AllSection from "./AllSection/AllSection";
import style from "./OurWork.module.scss";
import { getFormattedCaseStudyData } from "@/utils/helper";

const OurWork = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };

  const emptyPageData = {
    title: pageData?.sectionTitle2,
    description: pageData?.description2,
    logo: pageData?.imagesSection1?.emptyPage,
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle1,
      description: pageData?.description1,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs,
  };

  return (
    <div className={style.ourWork}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
      />
      <AllSection
        caseStudyResp={getFormattedCaseStudyData(caseStudyResp)}
        tabs={pageData?.ourWorkCards}
        cardBtnText={pageData?.cardBtnText}
        emptyPageData={emptyPageData}
        commonSvgs={pageData?.commonSvgs}
      />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.OUR_WORK}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default OurWork;
