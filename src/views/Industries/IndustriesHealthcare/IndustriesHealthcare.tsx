import {
  Compliances,
  DigitallyTransformed,
  HeroSection,
  Ourservices,
  ServicesContactUs,
  Testimony,
  WhyChooseCoditas,
  CaseStudySection,
} from "@/components";
import { ServicesContactUS, getFormattedCaseStudyData } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { HEALTHCARE, servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./IndustriesHealthcare.module.scss";

const IndustriesHealthcare = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };
  const complianceData = {
    title: pageData?.sectionTitle1,
    subtext: pageData?.description1,
    compliancesContent: pageData?.imagesSection1 || [],
  };
  const ourServicesData = {
    headerData: {
      header: pageData?.sectionTitle2,
      desc: pageData?.description2,
    },
    cardsArray: pageData?.ourServicesCards || [],
    buttonLabels: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: pageData?.serviceBtnText,
    },
    commonSvgs: pageData?.commonSvgs,
  };
  const whyChooseCoditasData = {
    headerData: {
      header: pageData?.sectionTitle3,
      desc: pageData?.description3,
    },
    cardsArray: pageData?.whyChooseCoditas || [],
    buttonLabel: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: pageData?.serviceBtnText,
    },
  };

  const caseStudyData = {
    title: pageData?.sectionTitle4,
    description: pageData?.description4,
    itemList: getFormattedCaseStudyData(caseStudyResp) || [],
    viewAllBtnBtnText: pageData?.caseStudyBtnText,
    cardBtnText: pageData?.cardBtnText,
  };

  const digitallyTransformedData = {
    titleText: pageData?.sectionTitle5,
    subTitle: pageData?.description5,
    imagesArray: pageData?.technologyImages,
  };
  const testimonyData = {
    heading: pageData?.sectionTitle7,
    employeeTestimony: pageData?.testimony,
    commonSvgs: pageData?.commonSvgs,
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle6,
      description: pageData?.description6,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs,
  };

  return (
    <div className={styles.industriesHealthcarePage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={styles.heroSectionContentContainer}
        heroSectionGradientStyle={styles.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={ServicesContactUS}
      />

      <Compliances {...complianceData} />
      <Ourservices
        {...ourServicesData}
        buttonLabel={ourServicesData?.buttonLabels}
        hasCardButton={true}
        hasViewMoreButton={true}
        cardCustomClass="healthCareCard"
        bottomContainerCustomClass="healthCareBottomContainer"
        customCardBoxStyle="healthCareCardBox"
        customCardContentClass={styles.ourServicesCard}
        customButtonContainer="buttonContainerBackground"
      />

      <WhyChooseCoditas {...whyChooseCoditasData} />

      <CaseStudySection {...caseStudyData} theme="dark" showViewAllBtn={true} serviceName={HEALTHCARE} />

      <DigitallyTransformed
        {...digitallyTransformedData}
        hasImagesArray={true}
        customLogoContainerClass={styles.clientLogoContainer}
      />

      <Testimony {...testimonyData} testimonyStyle={styles.testimonyWrapper} />

      <ServicesContactUs
        {...formData}
        formType={servicesFormType.INDUSTRIES_HEALTHCARE}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default IndustriesHealthcare;
