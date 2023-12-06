import { CaseStudy, HeroSection, LifeAtCoditas, OpenPositions, Testimony, WhoWeAreSection } from "@/components";
import style from "./Careers.module.scss";

const Careers = (props: any) => {
  const { attributes: pageData } = props;
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };
  const whoWeAreCardData = {
    title: pageData?.sectionTitle1,
    whoWeAreDescriptions: pageData?.cardArray1?.section1,
    whoWeAreCardDetails: pageData?.ourWorkCards,
  };
  const caseStudyData = {
    title: pageData?.sectionTitle2,
    description: pageData?.description2,
  };
  const lifeAtCoditasData = {
    title: pageData?.sectionTitle3,
    descriptionList: pageData?.cardArray1?.section2,
    image: pageData?.imagesSection1?.coverImg || "",
  };
  const testimonyData = {
    heading: pageData?.sectionTitle4,
    employeeTestimony: pageData?.testimony,
    commonSvgs: pageData?.commonSvgs,
  };
  const openPositionData = {
    headerData: {
      header: pageData?.sectionTitle5,
    },
    positionsArray: pageData?.hiringNowCards,
    openPositions: pageData?.imagesSection1?.openPositions,
    viewAllBtn: pageData?.viewMoreBtnText,
    rightArrow: pageData?.commonSvgs?.rightChevron,
  };

  const scrollToOpenPositions = () => {
    const element = document.getElementById("open-position");
    if (!element) {
      return;
    }
    const headerOffset = 64;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.homePage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showJoinUsButton={true}
        handleJoinUsClick={scrollToOpenPositions}
      />
      <WhoWeAreSection {...whoWeAreCardData} contentContainerStyle={style.whyJoinCoditasContainer} />
      <CaseStudy {...caseStudyData} itemList={pageData.ourServicesCards} theme={"dark"} showViewAllBtn={false} />
      <LifeAtCoditas {...lifeAtCoditasData} contentContainerStyle={style.lifeAtCoditasSection} />
      <Testimony {...testimonyData} />
      <div id="open-positions-id">
        <OpenPositions {...openPositionData} />
      </div>
    </div>
  );
};

export default Careers;
