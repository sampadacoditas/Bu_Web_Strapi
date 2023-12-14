import { HeroSection, HowWeWork, Ourservices, ServicesContactUs } from "@/components";
import { ServicesContactUS, getImageUrl, mapArrayImages } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./cyberSecurity.module.scss";

const CyberSecurity = (props: any) => {
  const { attributes: pageData } = props;
  const [ourServicesObject, howWeWorkObject, formDataObject, svgObject] = pageData.pageComponents;
  const commonSvgs = mapArrayImages(svgObject);

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
    commonSvgs: commonSvgs || {},
  };

  const howWeWorkDetails = {
    title: howWeWorkObject?.headerDetails.title,
    description: howWeWorkObject?.headerDetails.desc,
    howWeWorkCard: howWeWorkObject?.howWeWorkCards,
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: commonSvgs || {},
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
