import { HeroSection, HowWeWork, Ourservices, ServicesContactUs, WhyChooseCoditas } from "@/components";
import { ServicesContactUS, getImageUrl, mapArrayImages } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./IndustriesEdTech.module.scss";

const IndustriesEdTech = (props: any) => {
  const { attributes: pageData } = props;

  const [ourServicesObject, howWeWorkObject, whyChooseCoditasObject, formDataObject, svgObject] = pageData.pageComponents;

  const commonSvgs = mapArrayImages(svgObject)

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
    commonSvgs: commonSvgs,
  };

  const howWeWorkDetails = {
    title: howWeWorkObject?.headerDetails.title,
    description: howWeWorkObject?.headerDetails.desc,
    howWeWorkCard: howWeWorkObject?.howWeWorkCards,
  };

  const whyChooseCoditasData = {
    headerData: {
      header: whyChooseCoditasObject?.headerDetails.title,
      desc: whyChooseCoditasObject?.headerDetails.desc,
    },
    cardsArray: whyChooseCoditasObject?.whyChooseCoditasCards,
    buttonLabel: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
    },
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: commonSvgs,
  };

  return (
    <div className={styles.industriesEdTechPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={styles.heroSectionContentContainer}
        heroSectionGradientStyle={styles.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={ServicesContactUS}
      />
      <Ourservices
        {...ourServicesData}
        customCardContentClass={styles.ourServicesCard}
        hasCardButton={false}
        hasViewMoreButton={false}
        customCardBoxStyle="marTechCardBox"
        cardCustomClass="healthCareCard"
        bottomContainerCustomClass="edTechBottomContainer"
        showDarkHeaderTheme={false}
      />
      <HowWeWork contentContainerStyle={styles.howWeWorkSectionContainer} howWeWorkDetails={howWeWorkDetails} />
      <WhyChooseCoditas {...whyChooseCoditasData} />

      <ServicesContactUs
        {...formData}
        formType={servicesFormType.INDUSTRIES_EDTECH}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default IndustriesEdTech;
