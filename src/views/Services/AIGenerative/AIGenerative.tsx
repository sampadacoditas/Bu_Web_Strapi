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
  const [
    ourServicesObject,
    howWeWorkDetailsObject,
    ourexpertiseObject,
    whyChooseCoditasDataObject,
    ourClientObject,
    formDataObject,
  ] = pageData.pageComponents;

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg,
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
    commonSvgs: pageData?.commonSvgs || {},
  };

  const howWeWorkDetails = {
    title: howWeWorkDetailsObject?.headerDetails.title,
    description: howWeWorkDetailsObject?.headerDetails.desc,
    howWeWorkCard: howWeWorkDetailsObject?.howWeWorkCards,
  };

  const ourExpertiesData = {
    title: ourexpertiseObject?.headerDetails.title,
    description: ourexpertiseObject?.headerDetails.desc,
    servicesImages: ourexpertiseObject?.ourExpertiseImages,
  };

  const whyChooseCoditasData = {
    headerData: {
      header: whyChooseCoditasDataObject?.headerDetails.title,
      desc: whyChooseCoditasDataObject?.headerDetails.desc,
    },
    cardsArray: whyChooseCoditasDataObject?.whyChooseCoditasCards,
  };

  const digitallyTransformedData = {
    titleText: ourClientObject?.headerDetails.title,
    subTitle: ourClientObject?.headerDetails.desc,
    imagesArray: ourClientObject?.ourClientsImagesList,
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData,
    sideFormImage: formDataObject?.formSideImage,
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
