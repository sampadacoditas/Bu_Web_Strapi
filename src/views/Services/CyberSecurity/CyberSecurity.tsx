import { HeroSection, HowWeWork, Ourservices, ServicesContactUs } from "@/components";
import { ServicesContactUS } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./cyberSecurity.module.scss";

const CyberSecurity = (props: any) => {
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

  const formData = {
    constant: {
      title: pageData?.sectionTitle3,
      description: pageData?.description3,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs || {},
  };

  return (
    <div className={styles.cyberSecurityPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={styles.heroSectionContentContainer}
        heroSectionGradientStyle={styles.heroSectionGradient}
        customTitleStyle={styles.heroSectionTitle}
        showContactUsButton={true}
        handleContactUsClick={ServicesContactUS}
      />

      <Ourservices {...ourServicesData} customCardContentClass={styles.ourServicesCard} hasCardButton={false} />

      <HowWeWork contentContainerStyle={styles.howWeWorkContainer} howWeWorkDetails={howWeWorkDetails} />

      <ServicesContactUs
        {...formData}
        formType={servicesFormType.CYBER_SECURITY_SERVICES}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default CyberSecurity;
