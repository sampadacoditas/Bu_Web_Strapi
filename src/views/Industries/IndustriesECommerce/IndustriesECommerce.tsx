import { HeroSection, Ourservices, ServicesContactUs, WhyChooseCoditas } from "@/components";
import { ServicesContactUS, getImageUrl } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./IndustriesECommerce.module.scss";

const IndustriesECommerce = (props: any) => {
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
      ...formDataObject.contents,
    },
    fields: formDataObject?.formFieldData || [],
    sideFormImage: formDataObject?.formSideImage,
    commonSvgs: pageData?.commonSvgs,
  };

  return (
    <div className={styles.industriesECommercePage}>
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
        hasCardButton={false}
        customCardBoxStyle="industriesCardBox"
        hasViewMoreButton={true}
        bottomContainerCustomClass="eCommerceBottomContainer"
        customButtonContainer="buttonContainerBackground"
      />

      <WhyChooseCoditas {...whyChooseCoditasData} />

      <ServicesContactUs
        {...formData}
        formType={servicesFormType.INDUSTRIES_ECOMMERCE}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
};

export default IndustriesECommerce;
