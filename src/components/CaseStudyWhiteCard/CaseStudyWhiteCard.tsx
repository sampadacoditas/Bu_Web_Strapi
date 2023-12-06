import Link from "next/link";
import styles from "./CaseStudyWhiteCard.module.scss";
import { ICaseStudyWhiteCard } from "./ICaseStudyWhiteCard";
import { replaceStrong } from "@/utils/helper";
import { CustomImage } from "..";

const CaseStudyWhiteCard = (props: ICaseStudyWhiteCard) => {
  const {
    description: title,
    caseStudyDecsriptiveSection,
    image,
    pills,
    link,
    customClassCardWrapper,
    theme,
    cardBtnText,
  } = props;
  return (
    <div className={`${styles.cardContainer} ${customClassCardWrapper} ${theme == "dark" ? styles.darkCard : ""}`}>
      <div className={styles.imageContainer}>
        <CustomImage src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtext}>{replaceStrong(caseStudyDecsriptiveSection?.businessDescription)}</div>
          <div className={styles.pillContainer}>
            {pills
              ?.map((item, index) => {
                return (
                  <div className={styles.pills} key={index}>
                    {item}
                  </div>
                );
              })
              .slice(0, 3)}
            {pills?.length > 3 ? <div className={styles.pills} key="count">{`+${pills.length - 3}`}</div> : ""}
          </div>
        </div>
        <Link href={link || ""} className={styles.readmore}>
          {cardBtnText}
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyWhiteCard;
