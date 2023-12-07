import {
  DigitallyTransformed,
  HeroSection,
  HowWeWork,
  OurExperties,
  Ourservices,
  ServicesContactUs,
} from "@/components";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import { ServicesContactUS, getImageUrl } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import style from "./MobileDevelopment.module.scss";

const MobileDevelopment = (props: any) => {
  const { attributes: pageData } = props;
  const [ourServicesObject, howWeWorkObject, ourExpertiseObject, ourClientObject, formDataObject] =
    pageData.pageComponents;

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

  const howWeWorkData = {
    title: howWeWorkObject?.headerDetails.title,
    description: howWeWorkObject?.headerDetails.desc,
    howWeWorkCard: howWeWorkObject?.howWeWorkCards || [],
  };

  const ourExpertiseData = {
    headerData: {
      header: ourExpertiseObject?.headerDetails.title,
      desc: ourExpertiseObject?.headerDetails.desc,
    },
    cardsArray: ourExpertiseObject?.ourExpertiseImages || [],
  };

  const ourClientsData = {
    headerData: {
      header: ourClientObject?.headerDetails.title,
      desc: ourClientObject?.headerDetails.desc,
    },
    cardsArray: ourClientObject?.ourClientsImagesList || [],
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...pageData.formContents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: pageData?.commonSvgs || {},
  };

  return (
    <div className={style.mobileDevPage}>
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
        cardCustomClass="mobileDevOurServicesCard"
        bottomContainerCustomClass="devopsOurServicesBottomContainer"
        customCardBoxStyle="devopsCardBox"
        showAllCards={true}
        showDarkHeaderTheme={false}
      />
      <HowWeWork
        contentContainerStyle={style.howWeWorkSectionContainer}
        howWeWorkDetails={howWeWorkData}
        customCardStyle="mobileDevHowWeWorkCard"
      />
      <OurExperties
        title={ourExpertiseData?.headerData?.header}
        description={ourExpertiseData?.headerData?.desc}
        servicesImages={ourExpertiseData?.cardsArray}
      />
      <DigitallyTransformed
        hasImagesArray={true}
        subTitle={ourClientsData.headerData?.desc}
        titleText={ourClientsData?.headerData?.header}
        imagesArray={ourClientsData?.cardsArray}
      />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.MOBILE_DEVELOPMENT}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default MobileDevelopment;
