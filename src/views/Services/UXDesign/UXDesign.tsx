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

  const whyChooseCoditas = {
    headerData: {
      tile: pageData?.sectionTitle4,
      desc: pageData?.description4,
    },
    cardsArray: pageData?.whyChooseCoditas,
  };

  const ourClientsData = {
    headerData: {
      header: pageData?.sectionTitle5,
      desc: pageData?.description5,
    },
    cardsArray: pageData?.imagesSection1 || [],
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
