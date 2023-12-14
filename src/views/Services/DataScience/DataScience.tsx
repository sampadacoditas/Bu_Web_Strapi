import {
  Certification,
  DigitallyTransformed,
  HeroSection,
  HowWeWork,
  Ourservices,
  ServicesContactUs,
  OurExperties,
  CaseStudySection,
} from "@/components";
import { DATA_SCIENCE, servicesFormType } from "@/constants/constants";
import { CONTACT_US_DATA_SCIENCE_SERVICES_INITIAL_VALUES } from "@/constants/contactUsFormData";
import { ServicesContactUS, getFormattedCaseStudyData, getImageUrl, mapArrayImages } from "@/utils/helper";
import { CONTACT_US_SCHEMA_DATA_SCIENCE_SERVICE } from "@/utils/schemas";
import style from "./DataScience.module.scss";

const DataScience = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;

  const [certified, ourServices, challengesWeSolve, ourExpertise, howWeWork, caseStudies, ourClients, formDataObject, svgObject={}] =
    pageData?.pageComponents;

  const commonSvgs = mapArrayImages(svgObject)

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg,
  };
  const certificationData = {
    title: certified?.headerDetails?.title,
    description: certified?.headerDetails?.desc,
    badgeList: certified?.images,
  };
  const ourServicesData = {
    headerData: {
      header: ourServices?.headerDetails?.title,
      desc: ourServices?.headerDetails?.desc,
    },
    cardsArray: ourServices?.serviceCards || [],
    buttonLabels: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: ourServices?.cardBtnText,
    },
    commonSvgs: commonSvgs || {},
  };
  const challengesWeSolveData = {
    title: challengesWeSolve?.headerDetails?.title,
    description: challengesWeSolve?.headerDetails?.desc,
    howWeWorkCard: challengesWeSolve?.challengesWeSolveCards,
  };
  const ourExpertiesData = {
    title: ourExpertise?.headerDetails?.title,
    description: ourExpertise?.headerDetails?.desc,
    servicesImages: ourExpertise?.ourExpertiseImages,
  };
  const howWeWorkData = {
    title: howWeWork?.headerDetails?.title,
    description: howWeWork?.headerDetails?.desc,
    howWeWorkCard: howWeWork?.howWeWorkCards,
  };
  const caseStudyData = {
    title: caseStudies?.title,
    description: caseStudies?.desc,
    itemList: getFormattedCaseStudyData(caseStudyResp) || [],
    viewAllBtnBtnText: pageData?.caseStudyBtnText,
    cardBtnText: pageData?.cardBtnText,
  };
  const digitallyTransformedData = {
    titleText: ourClients?.headerDetails?.title,
    subTitle: ourClients?.headerDetails?.desc,
    imagesArray: ourClients?.ourClientsImagesList,
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

  const getFormmatedData = (data: any) => {
    const payload: any = {};

    payload["fullName"] = data.fullName;
    payload["email"] = data.email;
    payload["mobileNum"] = data.mobileNum;
    payload["message"] = data.message;
    payload["domain"] = data.domain;
    payload["interested"] = data.interested?.map((option: any) => option.value);
    payload["skillSet"] = data.skillSet?.map((option: any) => option.value);

    return payload;
  };

  return (
    <div className={style.dataSciencePage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={ServicesContactUS}
      />
      <Certification {...certificationData} customContainerClass="dataScienceCertification" />

      <Ourservices
        {...ourServicesData}
        buttonLabel={ourServicesData?.buttonLabels}
        hasCardButton={true}
        customCardBoxStyle="dataScienceCardBox"
        showAllCards={true}
        bottomContainerCustomClass="dataScienceBottomContainer"
      />
      <HowWeWork contentContainerStyle={style.howWeWorkContainer} howWeWorkDetails={challengesWeSolveData} />
      <OurExperties {...ourExpertiesData} />
      <HowWeWork contentContainerStyle={style.howWeWorkContainer} howWeWorkDetails={howWeWorkData} />
      <CaseStudySection {...caseStudyData} theme="dark" showViewAllBtn={true} serviceName={DATA_SCIENCE} />
      <DigitallyTransformed {...digitallyTransformedData} hasImagesArray={true} />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.DATA_SCIENCE}
        getFormmatedData={getFormmatedData}
        schema={CONTACT_US_SCHEMA_DATA_SCIENCE_SERVICE}
        initialValues={CONTACT_US_DATA_SCIENCE_SERVICES_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default DataScience;
