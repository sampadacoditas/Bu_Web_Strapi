import Link from "next/link";
import styles from "./CaseStudyBlueCard.module.scss";
import { ICaseStudyBlueCard } from "./ICaseStudyBlueCard";
import { replaceStrong } from "@/utils/helper";
import useWindowWidth from "@/hooks/useWindowWidth";
import { CustomImage } from "..";

const CaseStudyBlueCard = (props: ICaseStudyBlueCard) => {
  const { bannerImage, description: title, caseStudyDecsriptiveSection, pillsArr, link, cardBtnText } = props;
  const { isMobileView } = useWindowWidth();
  const mobilePillCount = 1;
  const desktopPillCount = 3;
  const pillsCount = isMobileView ? mobilePillCount : desktopPillCount;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <CustomImage src={bannerImage || ""} alt={title} className={styles.imageContent} />
        <div className={styles.imageBackground} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subheading}>{replaceStrong(caseStudyDecsriptiveSection?.businessDescription)}</div>
          <div className={styles.pillContainer}>
            {pillsArr?.length > 0 &&
              pillsArr
                ?.map((item, index) => {
                  return (
                    <div className={styles.pills} key={index}>
                      {item?.desc}
                    </div>
                  );
                })
                .slice(0, pillsCount)}
            {pillsArr?.length > pillsCount ? (
              <div className={styles.pills} key="count">{`+${pillsArr?.length - pillsCount}`}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.readContainer}>
          <Link href={link || "/"} className={styles.read}>
            {cardBtnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBlueCard;
