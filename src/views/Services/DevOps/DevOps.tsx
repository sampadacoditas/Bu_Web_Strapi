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
import { ServicesContactUS, getFormattedCaseStudyData, getImageUrl, mapArrayImages, mappedIconsArr } from "@/utils/helper";
import { CONTACT_US_SCHEMA_DEVOPS_SERVICE } from "@/utils/schemas";
import style from "./DevOps.module.scss";

const DevOpsServices = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;
  
  const [
    devopsCertifiedObject,
    ourServicesObject,
    howWeWorkDetailsObject,
    caseStudyObject,
    ourClientObject,
    testimonyObject,
    formDataObject,
    devopsBannerLogos,
    svgObject, 
    mappedImgObj
  ] = pageData.pageComponents;
  
  const commonSvgs = mapArrayImages(svgObject)
  
  const mappedSvgs = mappedIconsArr(mappedImgObj?.mappedData)
  
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    imagesArray: devopsBannerLogos?.devopsBannerLogos,
    imageArrayText: devopsBannerLogos?.title,
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg,
  };

  const devopsCertifiedData = {
    CONSTANTS: {
      TITLE: devopsCertifiedObject?.headerDetails.title,
      DESCTIPTION: devopsCertifiedObject?.headerDetails.desc,
    },
    badges: devopsCertifiedObject?.images,
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
    commonSvgs: commonSvgs || {},
  };

  const howWeWorkDetails = {
    title: howWeWorkDetailsObject?.headerDetails.title,
    description: howWeWorkDetailsObject?.headerDetails.desc,
    howWeWorkCard: howWeWorkDetailsObject?.howWeWorkCards,
  };
  const caseStudyData = {
    title: caseStudyObject?.title,
    description: caseStudyObject?.desc,
    itemList: getFormattedCaseStudyData(caseStudyResp) || [],
    viewAllBtnBtnText: pageData?.caseStudyBtnText,
    cardBtnText: pageData?.cardBtnText,
  };
  const digitallyTransformedData = {
    titleText: ourClientObject?.headerDetails.title,
    subTitle: ourClientObject?.headerDetails.desc,
    imagesArray: ourClientObject?.ourClientsImagesList,
  };

  const testimonyData = {
    heading: testimonyObject?.headerDetails.title,
    employeeTestimony: testimonyObject?.testimonies,
    commonSvgs: commonSvgs || {},
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: commonSvgs || {},
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
