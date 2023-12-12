import { HeroSection, ServicesContactUs } from "@/components";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import AllSection from "./AllSection/AllSection";
import style from "./OurWork.module.scss";
import { getFormattedCaseStudyData, getImageUrl, mapArrayImages } from "@/utils/helper";

const OurWork = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };
  const [formDataObject, emptyPageObject, svgObject] = pageData.pageComponents;
  const commonSvgs = mapArrayImages(svgObject)
  const emptyPageData = {
    title: emptyPageObject?.title,
    description: emptyPageObject?.desc,
    logo: emptyPageObject?.emptyPage,
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: commonSvgs,
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
        commonSvgs={commonSvgs}
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
