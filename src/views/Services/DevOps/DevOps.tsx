import {
  DevopsCertified,
  DigitallyTransformed,
  HeroSection,
  HowWeWork,
  Ourservices,
  ServicesContactUs,
  Testimony,
  CaseStudySection,
} from "@/components";
import { DEV_OPS, servicesFormType } from "@/constants/constants";
import { CONTACT_US_DEVOPS_SERVICES_INITIAL_VALUES } from "@/constants/contactUsFormData";
import { ServicesContactUS, getFormattedCaseStudyData } from "@/utils/helper";
import { CONTACT_US_SCHEMA_DEVOPS_SERVICE } from "@/utils/schemas";
import style from "./DevOps.module.scss";

const DevOpsServices = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    imagesArray: pageData?.cardArray1,
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };

  const devopsCertifiedData = {
    CONSTANTS: { TITLE: pageData?.sectionTitle1, DESCTIPTION: pageData?.description1 },
    badges: pageData?.imagesSection1,
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
    commonSvgs: pageData?.commonSvgs || {},
  };

  const howWeWorkDetails = {
    title: pageData?.sectionTitle3,
    description: pageData?.description3,
    howWeWorkCard: pageData?.ourWorkCards,
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
    commonSvgs: pageData?.commonSvgs || {},
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle6,
      description: pageData?.description6,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs || {},
  };

  return (
    <div className={style.devopsPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        showJoinUsButton={false}
        handleContactUsClick={ServicesContactUS}
      />
      <DevopsCertified {...devopsCertifiedData} customContainerClass="devOpsCertifiedContainer" />
      <Ourservices
        {...ourServicesData}
        hasCardButton={false}
        cardCustomClass="devopsOurServicesCard"
        bottomContainerCustomClass="devopsOurServicesBottomContainer"
        customCardBoxStyle="devopsCardBox"
        showAllCards={true}
      />
      <HowWeWork contentContainerStyle={style.howWeWorkSectionContainer} howWeWorkDetails={howWeWorkDetails} />
      <CaseStudySection {...caseStudyData} theme="dark" showViewAllBtn={true} serviceName={DEV_OPS} />
      <DigitallyTransformed {...digitallyTransformedData} hasImagesArray={true} />
      <Testimony {...testimonyData} />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.DEVOPS_SERVICE}
        schema={CONTACT_US_SCHEMA_DEVOPS_SERVICE}
        initialValues={CONTACT_US_DEVOPS_SERVICES_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default DevOpsServices;
