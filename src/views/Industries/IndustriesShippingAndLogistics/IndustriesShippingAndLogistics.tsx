import { HeroSection, Ourservices, ServicesContactUs, WhyChooseCoditas } from "@/components";
import { ServicesContactUS, getImageUrl } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./IndustriesShippingAndLogistics.module.scss";

const IndustriesShippingAndLogistics = (props: any) => {
  const { attributes: pageData } = props;

  const [ourServicesObject, whyChooseCoditasObject, formDataObject] = pageData.pageComponents;

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
    commonSvgs: pageData?.commonSvgs,
  };

  const whyChooseCoditasData = {
    headerData: {
      header: whyChooseCoditasObject?.headerDetails.title,
      desc: whyChooseCoditasObject?.headerDetails.desc,
    },
    cardsArray: whyChooseCoditasObject?.whyChooseCoditasCards || [],
    buttonLabel: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
    },
  };

  const formData = {
    constant: {
      title: formDataObject?.formTitle,
      description: formDataObject?.formDesc,
      ...pageData.formContents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: pageData?.commonSvgs,
  };

  return (
    <div className={styles.industriesShippingAndLogisticsPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={styles.heroSectionContentContainer}
        heroSectionGradientStyle={styles.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={ServicesContactUS}
      />

      <Ourservices
        {...ourServicesData}
        hasCardButton={false}
        hasViewMoreButton={false}
        customCardContentClass={styles.ourServiceCard}
        customCardBoxStyle={"shoppingAndLogisticsBox"}
        cardCustomClass="healthCareCard"
        bottomContainerCustomClass="industriesBottomContainerBackground"
        showDarkHeaderTheme={false}
      />

      <WhyChooseCoditas {...whyChooseCoditasData} />

      <ServicesContactUs
        {...formData}
        formType={servicesFormType.INDUSTRIES_SHIPPING_AND_LOGISTICS}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default IndustriesShippingAndLogistics;
