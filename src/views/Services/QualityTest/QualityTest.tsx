import {
  DigitallyTransformed,
  HeroSection,
  HowWeWork,
  Ourservices,
  ServicesContactUs,
  OurExperties,
} from "@/components";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import { ServicesContactUS, getImageUrl } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import style from "./QualityTest.module.scss";

const QualityTest = (props: any) => {
  const { attributes: pageData } = props;

  const [ourServices, howWeWork, ourExpertise, ourClients, needHelp] = pageData?.pageComponents;

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
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
      cardBtnText: pageData?.serviceBtnText,
    },
    commonSvgs: pageData?.commonSvgs || {},
  };

  const howWeWorkDetails = {
    title: howWeWork?.headerDetails?.title,
    description: howWeWork?.headerDetails?.desc,
    howWeWorkCard: howWeWork?.howWeWorkCards,
  };

  const ourExpertiesData = {
    title: ourExpertise?.headerDetails?.title,
    description: ourExpertise?.headerDetails?.desc,
    servicesImages: ourExpertise?.ourExpertiseImages,
  };

  const digitallyTransformedData = {
    titleText: ourClients?.headerDetails?.title,
    subTitle: ourClients?.headerDetails?.desc,
    imagesArray: ourClients?.ourClientsImagesList,
  };

  const formData = {
    constant: {
      title: needHelp?.formTitle,
      description: needHelp?.formDesc,
      ...pageData.formContents,
    },
    fields: needHelp?.formFieldData || [],
    sideFormImage: needHelp?.formSideImage,
    commonSvgs: pageData?.commonSvgs || {},
  };

  return (
    <div className={style.qualityTestPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={ServicesContactUS}
      />
      <Ourservices
        {...ourServicesData}
        hasCardButton={false}
        cardCustomClass="devopsOurServicesCard"
        bottomContainerCustomClass="devopsOurServicesBottomContainer"
        customCardBoxStyle="devopsCardBox"
        showAllCards={true}
      />
      <HowWeWork contentContainerStyle={style.howWeWorkContainer} howWeWorkDetails={howWeWorkDetails} />
      <OurExperties {...ourExpertiesData} />
      <DigitallyTransformed {...digitallyTransformedData} hasImagesArray={true} />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.TESTING_SERVICES}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default QualityTest;
