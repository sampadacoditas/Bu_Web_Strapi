import { HeroSection, Ourservices, ServicesContactUs, WhyChooseCoditas } from "@/components";
import { ServicesContactUS } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./Travel.module.scss";

const Travel = (props: any) => {
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
    commonSvgs: pageData?.commonSvgs,
  };

  const whyChooseCoditasData = {
    headerData: {
      header: pageData?.sectionTitle2,
      desc: pageData?.description2,
    },
    cardsArray: pageData?.whyChooseCoditas || [],
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle3,
      description: pageData?.description3,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs,
  };

  return (
    <div className={styles.industriesTravelPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={styles.heroSectionContentContainer}
        heroSectionGradientStyle={styles.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={ServicesContactUS}
      />

      <Ourservices
        {...ourServicesData}
        buttonLabel={ourServicesData?.buttonLabels}
        customCardContentClass={styles.ourServicesCard}
        customCardBoxStyle="industriesCardBox"
        hasCardButton={false}
        hasViewMoreButton={true}
        bottomContainerCustomClass="healthCareBottomContainer"
      />

      <WhyChooseCoditas {...whyChooseCoditasData} />

      <ServicesContactUs
        {...formData}
        formType={servicesFormType.INDUSTRIES_BFSI}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default Travel;
