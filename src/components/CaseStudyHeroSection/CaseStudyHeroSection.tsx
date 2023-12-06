import { BreadCrumbs, CustomImage } from "..";
import { ICaseStudyHeroSection } from "./ICaseStudyHeroSection";
import styles from "./CaseStudyHeroSection.module.scss";

const CaseStudyHeroSection = (props: ICaseStudyHeroSection) => {
  const {
    title,
    image,
    backgroundPosition = "center",
    contentContainerStyle,
    heroSectionGradientStyle,
    breadCrumbs,
    sideImg,
    commonSvgs = {},
  } = props;
  return (
    <div
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: backgroundPosition,
      }}
    >
      <div className={heroSectionGradientStyle}>
        <div className={`content ${contentContainerStyle}`}>
          <div className={styles.breadCrumbsContainer}>
            <BreadCrumbs breadCrumbs={breadCrumbs} rightArrow={commonSvgs?.chevronRightIcon} />
          </div>
          <p className={sideImg ? styles.titleWithSideImg : styles.title}>{title}</p>
          {sideImg && (
            <div className={styles.bannerImage}>
              <div className={styles.bannerContainer}>
                <CustomImage src={sideImg} className={styles.bannerImg} alt="Banner" />
              </div>
            </div>
          )}
        </div>
      </div>
      {sideImg && (
        <div className={styles.circleContainer}>
          <CustomImage src={commonSvgs?.innerEllipse} className={styles.innerEllipse} alt="Inner ellipse" />
          <CustomImage src={commonSvgs?.outerEllipse} className={styles.outerEllipse} alt="Outer ellipse" />
          <CustomImage src={commonSvgs?.outerMostEllipse} className={styles.outerMostEllipse} alt="Outermost ellipse" />
        </div>
      )}
    </div>
  );
};

export default CaseStudyHeroSection;
