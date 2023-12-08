import styles from "./MoreCaseStudyCard.module.scss";
import bgLines from "@/assets/icons/caseStudyCardBackgroundLines.svg";
import Link from "next/link";
import { CustomImage } from "..";
import { IMoreCaseStudy } from "./IMoreCaseStudy";
import { getImageUrl } from "@/utils/helper";

const MoreCaseStudyCard = (props: IMoreCaseStudy) => {
  const { moreCaseStudyData } = props;
  return (
    <div className={styles.cardContainer}>
      <CustomImage src={bgLines} alt="More Case Study" className={styles.bgImage} />
      <div className={styles.content}>
        <div className={styles.amount}>{moreCaseStudyData?.amount}</div>
        <div className={styles.title}>{moreCaseStudyData?.title}</div>
        <div className={styles.subHeading}>{moreCaseStudyData?.desc}</div>
        <Link href={moreCaseStudyData?.routeTo || ""} className={styles.linkTo}>
          <CustomImage
            src={getImageUrl(moreCaseStudyData?.arrowSvg) || ""}
            alt="right arrow"
            className={styles.rightArrow}
          />
        </Link>
      </div>
    </div>
  );
};

export default MoreCaseStudyCard;
