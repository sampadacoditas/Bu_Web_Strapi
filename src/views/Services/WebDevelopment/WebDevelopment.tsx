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
import style from "./WebDevelopment.module.scss";

const WebDevelopment = (props: any) => {
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
    description: howWeWorkObject?.headerDetails?.desc,
    howWeWorkCard: howWeWorkObject?.howWeWorkCards || [],
  };

  const ourExpertiseData = {
    title: ourExpertiseObject?.headerDetails?.title,
    description: ourExpertiseObject?.headerDetails?.desc,
    servicesImages: ourExpertiseObject?.ourExpertiseImages || [],
  };

  const ourClientsData = {
    titleText: ourClientObject?.headerDetails.title,
    subTitle: ourClientObject?.headerDetails?.desc,
    imagesArray: ourClientObject?.ourClientsImagesList || [],
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: pageData?.commonSvgs || {},
  };

  return (
    <div className={style.webDevelopmentPage}>
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
      <HowWeWork
        contentContainerStyle={style.howWeWorkSectionContainer}
        howWeWorkDetails={howWeWorkData}
        customCardStyle="webDevelopmentHowWeWorkCard"
      />
      <OurExperties {...ourExpertiseData} />
      <DigitallyTransformed hasImagesArray={true} {...ourClientsData} />
      <ServicesContactUs
        {...formData}
        formType={servicesFormType.WEB_DEVELOPMENT}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default WebDevelopment;
