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

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };

  const ourServicesData = {
    headerData: {
      header: pageData?.sectionTitle1,
      desc: pageData?.description1,
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
    title: pageData?.sectionTitle2,
    description: pageData?.description2,
    howWeWorkCard: pageData?.ourWorkCards,
  };

  const ourExpertiesData = {
    title: pageData?.sectionTitle3,
    description: pageData?.description3,
    servicesImages: pageData?.technologyImages,
  };

  const digitallyTransformedData = {
    titleText: pageData?.sectionTitle4,
    subTitle: pageData?.description4,
    imagesArray: pageData?.imagesSection1,
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle5,
      description: pageData?.description5,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
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
