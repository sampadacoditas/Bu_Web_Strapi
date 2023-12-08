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
import { ServicesContactUS, getFormattedCaseStudyData, getImageUrl } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { HEALTHCARE, servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./IndustriesHealthcare.module.scss";

const IndustriesHealthcare = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;

  const [
    complianceDataObject,
    ourServicesObject,
    whyChooseCoditasObject,
    caseStudyDataObject,
    digitallyTransformedObject,
    testimonyObject,
    formDataObject,
  ] = pageData.pageComponents;

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg,
  };
  const complianceData = {
    title: complianceDataObject?.headerDetails.title,
    subtext: complianceDataObject?.headerDetails.desc,
    compliancesContent: complianceDataObject?.compliance || [],
  };
  const ourServicesData = {
    headerData: {
      header: ourServicesObject?.headerDetails.title,
      desc: ourServicesObject?.headerDetails.desc,
    },
    cardsArray: ourServicesObject?.serviceCards || [],
    buttonLabels: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: pageData?.serviceBtnText,
    },
    commonSvgs: pageData?.commonSvgs,
  };
  const whyChooseCoditasData = {
    headerData: {
      header: whyChooseCoditasObject?.headerDetails.title,
      desc: whyChooseCoditasObject?.headerDetails.desc,
    },
    cardsArray: whyChooseCoditasObject?.whyChooseCoditasCards || [],
    buttonLabel: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: pageData?.serviceBtnText,
    },
  };

  const caseStudyData = {
    title: caseStudyDataObject?.title,
    description: caseStudyDataObject?.desc,
    itemList: getFormattedCaseStudyData(caseStudyResp) || [],
    viewAllBtnBtnText: pageData?.caseStudyBtnText,
    cardBtnText: pageData?.cardBtnText,
  };

  const digitallyTransformedData = {
    titleText: digitallyTransformedObject?.headerDetails.title,
    subTitle: digitallyTransformedObject?.headerDetails.desc,
    imagesArray: digitallyTransformedObject?.ourClientsImagesList,
  };
  const testimonyData = {
    heading: testimonyObject?.headerDetails.title,
    employeeTestimony: testimonyObject?.testimonies,
    commonSvgs: pageData?.commonSvgs,
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
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
