import Link from "next/link";
import styles from "./CaseStudyBlueCard.module.scss";
import { ICaseStudyBlueCard } from "./ICaseStudyBlueCard";
import { replaceStrong } from "@/utils/helper";
import useWindowWidth from "@/hooks/useWindowWidth";
import { CustomImage } from "..";

const CaseStudyBlueCard = (props: ICaseStudyBlueCard) => {
  const { description: title, caseStudyDecsriptiveSection, image, pills, link, cardBtnText } = props;
  const { isMobileView } = useWindowWidth();
  const mobilePillCount = 1;
  const desktopPillCount = 3;
  const pillsCount = isMobileView ? mobilePillCount : desktopPillCount;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <CustomImage src={image} alt={title} className={styles.imageContent} />
        <div className={styles.imageBackground} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subheading}>{replaceStrong(caseStudyDecsriptiveSection?.businessDescription)}</div>
          <div className={styles.pillContainer}>
            {pills?.length > 0 &&
              pills
                ?.map((item, index) => {
                  return (
                    <div className={styles.pills} key={index}>
                      {item}
                    </div>
                  );
                })
                .slice(0, pillsCount)}
            {pills?.length > pillsCount ? (
              <div className={styles.pills} key="count">{`+${pills?.length - pillsCount}`}</div>
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
