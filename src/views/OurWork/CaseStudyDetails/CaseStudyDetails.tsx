import { CaseStudyHeroSection, ServicesContactUs, StudyDescriptionSection, TheOutcome } from "@/components";
import { CONTACT_US_SCHEMA } from "@/utils/schemas";
import { caseStudyServiceFormMap } from "@/constants/constants";
import { CONTACT_US_INITIAL_VALUES } from "@/constants/contactUsFormData";
import styles from "./CaseStudyDetails.module.scss";
import CaseStudySection from "@/components/CaseStudySection/CaseStudySection";
import { getImageUrl, mappedIconsArr } from "@/utils/helper";

function CaseStudyDetails(props: any) {
  const { serviceName, caseStudyData, allCaseStudyData } = props;
  const commonSvgs = mappedIconsArr(caseStudyData?.commonSvg)

  const formData = {
    constant: {
      title: caseStudyData?.form?.formTitle,
      description: caseStudyData?.form?.formDesc,
      ...caseStudyData?.form?.contents,
    },
    fields: caseStudyData?.form?.formFieldData || [],
    sideFormImage: caseStudyData?.form?.formSideImage,
    commonSvgs: commonSvgs,
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
        commonSvgs={commonSvgs}
      />
      <StudyDescriptionSection
        contentContainerStyle={styles.studyDescriptionContainer}
        studyDescription={caseStudyData.caseStudyDecsriptiveSection}
        divider={getImageUrl(caseStudyData?.divider)}
      />
      <TheOutcome
        heading={caseStudyData?.outcomeHeading}
        subText={caseStudyData?.outcomeSubText}
        outcomeArray={caseStudyData?.outcomeArr}
        outcomeImg={caseStudyData?.outcomeImage}
        outcomeImgMobile={caseStudyData?.outcomeImageMobile}
        outcomeIcon={commonSvgs?.outcomeStar}
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
