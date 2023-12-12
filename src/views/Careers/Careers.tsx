import { CaseStudy, HeroSection, LifeAtCoditas, OpenPositions, Testimony, WhoWeAreSection } from "@/components";
import style from "./Careers.module.scss";
import { getImageUrl } from "@/utils/helper";

const Careers = (props: any) => {
  const { attributes: pageData } = props;
  const [whoWeAreCardDataObject, caseStudyDataObject, lifeAtCoditasObject, testimonyObject, openPositionObject] =
    pageData.pageComponents;
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg,
  };

  const whoWeAreCardData = {
    title: whoWeAreCardDataObject?.headerDetails.title,
    whoWeAreDescriptions: whoWeAreCardDataObject?.descList,
    whoWeAreCardDetails: whoWeAreCardDataObject?.whyJoinCoditasCards,
  };
  const caseStudyData = {
    title: caseStudyDataObject?.headerDetails.title,
    description: caseStudyDataObject?.headerDetails.desc,
    itemList: caseStudyDataObject.coditasInMediaCards,
  };
  const lifeAtCoditasData = {
    title: lifeAtCoditasObject?.title,
    descriptionList: lifeAtCoditasObject?.descList,
    image: lifeAtCoditasObject.coverImg || "",
  };
  const testimonyData = {
    heading: testimonyObject?.headerDetails.title,
    employeeTestimony: testimonyObject?.testimonies,
    commonSvgs: testimonyObject?.openPositions,
  };
  const openPositionData = {
    headerData: {
      header: openPositionObject?.headerDetails.title,
    },
    positionsArray: openPositionObject?.openPositionsList,
    openPositions: openPositionObject?.openPositions,
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
      <CaseStudy {...caseStudyData} theme={"dark"} showViewAllBtn={false} />
      <LifeAtCoditas {...lifeAtCoditasData} contentContainerStyle={style.lifeAtCoditasSection} />
      <Testimony {...testimonyData} />
      <div id="open-positions-id">
        <OpenPositions {...openPositionData} />
      </div>
    </div>
  );
};

export default Careers;
