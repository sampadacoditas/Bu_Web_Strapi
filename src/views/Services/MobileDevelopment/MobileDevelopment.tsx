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
import { ServicesContactUS } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import style from "./MobileDevelopment.module.scss";

const MobileDevelopment = (props: any) => {
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

  const howWeWorkData = {
    title: pageData?.sectionTitle2,
    description: pageData?.description2,
    howWeWorkCard: pageData?.ourWorkCards || [],
  };

  const ourExpertiseData = {
    headerData: {
      header: pageData?.sectionTitle3,
      desc: pageData?.description3,
    },
    cardsArray: pageData?.technologyImages || [],
  };

  const ourClientsData = {
    headerData: {
      header: pageData?.sectionTitle4,
      desc: pageData?.description4,
    },
    cardsArray: pageData?.imagesSection1 || [],
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
