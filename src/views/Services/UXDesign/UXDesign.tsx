import {
  DigitallyTransformed,
  HeroSection,
  HowWeWork,
  OurExperties,
  Ourservices,
  ServicesContactUs,
  WhyChooseCoditas,
} from "@/components";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import { servicesFormType } from "@/constants/constants";
import { ServicesContactUS, getImageUrl } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import style from "./UXDesign.module.scss";

const UXDesign = (props: any) => {
  const { attributes: pageData } = props;
  
  const [ourServices, howWeWork, ourExpertise, whyCoditas, ourClients, needHelp] = pageData?.pageComponents;

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

  const howWeWorkData = {
    title: howWeWork?.headerDetails.title,
    description: howWeWork?.headerDetails.desc,
    howWeWorkCard: howWeWork?.howWeWorkCards || [],
  };

  const ourExpertiseData = {
    headerData: {
      header: ourExpertise?.headerDetails?.title,
      desc: ourExpertise?.headerDetails?.desc,
    },
    cardsArray: ourExpertise?.ourExpertiseImages || [],
  };

  const whyChooseCoditas = {
    headerData: {
      tile: whyCoditas?.headerDetails?.title,
      desc: whyCoditas?.headerDetails?.desc,
    },
    cardsArray: whyCoditas?.whyChooseCoditasCards,
  };

  const ourClientsData = {
    headerData: {
      header: ourClients?.headerDetails?.title,
      desc: ourClients?.headerDetails?.desc,
    },
    cardsArray: ourClients?.ourClientsImagesList || [],
  };

  const formData = {
    constant: {
      title: needHelp?.formTitle,
      description: needHelp?.formDesc,
      ...pageData.formContents,
    },
    fields: needHelp?.formFieldData,
    sideFormImage: needHelp?.formSideImage,
    commonSvgs: pageData?.commonSvgs || {},
  };

  return (
    <div className={style.uxDesignPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        showJoinUsButton={false}
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
      <HowWeWork contentContainerStyle={style.howWeWorkSectionContainer} howWeWorkDetails={howWeWorkData} />
      <OurExperties
        title={ourExpertiseData?.headerData?.header}
        description={ourExpertiseData?.headerData?.desc}
        servicesImages={ourExpertiseData?.cardsArray}
      />
      <WhyChooseCoditas
        headerData={{
          header: whyChooseCoditas?.headerData?.tile,
          desc: whyChooseCoditas?.headerData?.desc,
        }}
        cardsArray={whyChooseCoditas?.cardsArray}
        customTitleContainer="mobileContentWrapper"
      />
      <DigitallyTransformed
        hasImagesArray={true}
        subTitle={ourClientsData.headerData?.desc}
        titleText={ourClientsData.headerData?.header}
        imagesArray={ourClientsData.cardsArray}
      />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.UX_DESIGN}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default UXDesign;
