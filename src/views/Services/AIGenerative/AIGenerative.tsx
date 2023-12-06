import {
  DigitallyTransformed,
  HeroSection,
  HowWeWork,
  OurExperties,
  Ourservices,
  ServicesContactUs,
  WhyChooseCoditas,
} from "@/components";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { ServicesContactUS, getImageUrl } from "@/utils/helper";
import style from "./AIGenerative.module.scss";

const AIGenerative = (props: any) => {
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

  const whyChooseCoditasData = {
    headerData: {
      header: pageData?.sectionTitle4,
      desc: pageData?.description4,
    },
    cardsArray: pageData?.whyChooseCoditas,
  };

  const digitallyTransformedData = {
    titleText: pageData?.sectionTitle5,
    subTitle: pageData?.description5,
    imagesArray: pageData?.imagesSection1,
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle6,
      description: pageData?.description6,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3,
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs || {},
  };

  return (
    <div className={style.aiGenerativePage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        showJoinUsButton={false}
        handleContactUsClick={ServicesContactUS}
        backgroundPosition="bottom"
      />
      <Ourservices
        {...ourServicesData}
        hasCardButton={false}
        cardCustomClass="devopsOurServicesCard"
        bottomContainerCustomClass="devopsOurServicesBottomContainer"
        customCardBoxStyle="devopsCardBox"
        showAllCards={true}
        showDarkHeaderTheme={false}
      />
      <HowWeWork contentContainerStyle={style.howWeWorkSectionContainer} howWeWorkDetails={howWeWorkDetails} />
      <OurExperties {...ourExpertiesData} />
      <WhyChooseCoditas {...whyChooseCoditasData} customTitleContainer="mobileContentWrapper" cardAlignment="column" />
      <DigitallyTransformed hasImagesArray={true} {...digitallyTransformedData} />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.AI_GENERATIVE}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default AIGenerative;
