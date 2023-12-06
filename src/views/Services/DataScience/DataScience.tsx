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
import { ServicesContactUS, getFormattedCaseStudyData } from "@/utils/helper";
import { CONTACT_US_SCHEMA_DATA_SCIENCE_SERVICE } from "@/utils/schemas";

import style from "./DataScience.module.scss";

const DataScience = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };
  const certificationData = {
    title: pageData?.sectionTitle1,
    description: pageData?.description1,
    badgeList: pageData?.cardArray1,
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
  const challengesWeSolveData = {
    title: pageData?.sectionTitle3,
    description: pageData?.description3,
    howWeWorkCard: pageData?.cardArray2,
  };
  const ourExpertiesData = {
    title: pageData?.sectionTitle4,
    description: pageData?.description4,
    servicesImages: pageData?.technologyImages,
  };
  const howWeWorkData = {
    title: pageData?.sectionTitle5,
    description: pageData?.description5,
    howWeWorkCard: pageData?.ourWorkCards,
  };
  const caseStudyData = {
    title: pageData?.sectionTitle6,
    description: pageData?.description6,
    itemList: getFormattedCaseStudyData(caseStudyResp) || [],
    viewAllBtnBtnText: pageData?.caseStudyBtnText,
    cardBtnText: pageData?.cardBtnText,
  };
  const digitallyTransformedData = {
    titleText: pageData?.sectionTitle7,
    subTitle: pageData?.description7,
    imagesArray: pageData?.imagesSection1,
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle8,
      description: pageData?.description8,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs || {},
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
