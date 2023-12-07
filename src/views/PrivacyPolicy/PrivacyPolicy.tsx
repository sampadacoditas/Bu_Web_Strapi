import { CustomImage, HeroSection } from "@/components";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import styles from "./PrivacyPolicy.module.scss";
import { getImageUrl } from "@/utils/helper";

const Section = ({
  title,
  descriptions,
  listItems,
  commonSvgs,
}: {
  title?: string;
  descriptions?: string[];
  listItems?: string[];
  commonSvgs?: { [key: string]: string };
}) => {
  return (
    <div className={styles.section}>
      {title && <div className={styles.sectionTitle}>{title}</div>}
      {listItems && (
        <div className={styles.sectionList}>
          {listItems.map((item: string, index: number) => (
            <div key={index} className={styles.listItem}>
              <CustomImage src={commonSvgs?.star || ""} alt="StarIcon" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      )}
      {descriptions &&
        descriptions.map((description: string, index: number) => (
          <div className={styles.description} key={index}>
            {description}
          </div>
        ))}
    </div>
  );
};

const PrivacyPolicy = (props: any) => {
  const { attributes: pageData } = props;

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
  };

  const policySectionData = {
    commonSvgs: pageData?.commonSvgs,
  };

  return (
    <div className={styles.privacyPolicyPage}>
      <HeroSection
        {...heroSectionData}
        customTitleStyle={styles.title}
        contentContainerStyle={styles.heroSectionContentContainer}
        heroSectionGradientStyle={styles.heroSectionGradient}
      />
      <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className="content">
        <div className={styles.cardContainer}>
          <div className={styles.content}>
            {pageData?.cardArray1?.map((metaData: any, index: number) => (
              <Section key={index} {...metaData} {...policySectionData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
