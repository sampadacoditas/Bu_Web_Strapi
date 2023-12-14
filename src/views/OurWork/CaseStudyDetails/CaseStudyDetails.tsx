import { CaseStudyHeroSection, ServicesContactUs, StudyDescriptionSection, TheOutcome } from "@/components";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { caseStudyServiceFormMap } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./CaseStudyDetails.module.scss";
import CaseStudySection from "@/components/CaseStudySection/CaseStudySection";

function CaseStudyDetails(props: any) {
  const { serviceName, caseStudyData, allCaseStudyData } = props;
  console.log(caseStudyData);
  // console.log(caseStudyData);
  const formData = {
    constant: {
      title: caseStudyData?.form?.formTitle,
      description: caseStudyData?.form?.formDesc,
      ...caseStudyData?.form?.formContents,
    },
    fields: caseStudyData?.form?.formFields || [],
    sideFormImage: caseStudyData?.form?.formSideImage,
    commonSvgs: caseStudyData?.commonSvgs,
  };

  return (
    <div className={styles.caseStudyPage}>
      <CaseStudyHeroSection
        title={caseStudyData.bannerTitle}
        image={caseStudyData.bannerImage}
        contentContainerStyle={caseStudyData.bannerSideImage ? "" : styles.heroSectionContentContainer}
        heroSectionGradientStyle={
          caseStudyData.bannerSideImage ? styles.healthCareHeroSection : styles.heroSectionGradient
        }
        breadCrumbs={caseStudyData.breadcrumbsArr}
        sideImg={caseStudyData.bannerSideImage}
        commonSvgs={caseStudyData?.commonSvgs}
      />
      <StudyDescriptionSection
        contentContainerStyle={styles.studyDescriptionContainer}
        studyDescription={caseStudyData.caseStudyDecsriptiveSection}
      />
      <TheOutcome
        heading={caseStudyData?.outcomeHeading}
        subText={caseStudyData?.outcomeSubText}
        outcomeArray={caseStudyData?.outcomeArr}
        outcomeImg={caseStudyData?.outcomeImage}
        outcomeImgMobile={caseStudyData?.outcomeImageMobile}
        outcomeIcon={caseStudyData?.commonSvgs?.outcomeStar}
      />
      <CaseStudySection title={caseStudyData?.moreCaseStudyTitle} description={""} itemList={allCaseStudyData} />
      <ServicesContactUs
        {...formData}
        formType={caseStudyServiceFormMap[serviceName || ""]}
        schema={CONTACT_US_SCHEMA}
        initialValues={CONTACT_US_INITIAL_VALUES}
        handleSubmit={() => {
          return;
        }}
      />
    </div>
  );
}

export default CaseStudyDetails;
