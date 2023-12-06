import { ICaseStudyBigCard } from "./ICaseStudyBigCard";
import style from "./CaseStudyBigCard.module.scss";
import { CustomImage } from "..";

const CaseStudyBigCard = (props: ICaseStudyBigCard) => {
  const { title, image, tag, handleReadNowClick } = props;
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <CustomImage className={style.image} src={image} alt=""/>
      </div>
      <div className={style.tag}>{tag}</div>
      <div className={style.title}>
        <span>{title}</span>
      </div>
      <div className={style.read} onClick={() => handleReadNowClick}>
        Read now
      </div>
    </div>
  );
};

export default CaseStudyBigCard;
