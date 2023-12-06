import { HeroSection, HowWeWork, Ourservices, ServicesContactUs, WhyChooseCoditas } from "@/components";
import { ServicesContactUS } from "@/utils/helper";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { servicesFormType } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./IndustriesEdTech.module.scss";

const IndustriesEdTech = (props: any) => {
  const { attributes: pageData } = props;

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };

  const howWeWorkDetails = {
    title: pageData?.sectionTitle2,
    description: pageData?.description2,
    howWeWorkCard: pageData?.ourWorkCards,
  };

  const whyChooseCoditasData = {
    headerData: {
      header: pageData?.sectionTitle3,
      desc: pageData?.description3,
    },
    cardsArray: pageData?.whyChooseCoditas,
    buttonLabel: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
    },
  };

  const formData = {
    constant: {
      title: pageData?.sectionTitle4,
      description: pageData?.description4,
      ...pageData.formContents,
    },
    fields: pageData?.cardArray3 || [],
    sideFormImage: pageData?.sideFormImage,
    commonSvgs: pageData?.commonSvgs,
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
        headerData={{
          header: pageData?.sectionTitle1,
          desc: pageData?.description1,
        }}
        customCardContentClass={styles.ourServicesCard}
        cardsArray={pageData?.ourServicesCards}
        commonSvgs={pageData?.commonSvgs}
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
