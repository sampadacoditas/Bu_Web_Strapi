import { HeroSection, Ourservices, ServicesContactUs, WhyChooseCoditas } from "@/components";
import { ServicesContactUS, getImageUrl, mapArrayImages } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./IndustriesMarTech.module.scss";

const IndustriesMarTech = (props: any) => {
  const { attributes: pageData } = props;

  const [ourServicesObject, whyChooseCoditasObject, formDataObject, svgObject] = pageData.pageComponents;

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

  const whyChooseCoditasData = {
    headerData: {
      header: whyChooseCoditasObject?.headerDetails.title,
      desc: whyChooseCoditasObject?.headerDetails.desc,
    },
    cardsArray: whyChooseCoditasObject?.whyChooseCoditasCards || [],
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
    <div className={styles.industriesMarTechPage}>
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
        customCardBoxStyle={"marTechCardBox"}
        cardCustomClass="healthCareCard"
        bottomContainerCustomClass="industriesBottomContainerBackground"
        showDarkHeaderTheme={false}
      />

      <WhyChooseCoditas {...whyChooseCoditasData} />

      <ServicesContactUs
        {...formData}
        formType={servicesFormType.INDUSTRIES_MARTECH}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default IndustriesMarTech;
