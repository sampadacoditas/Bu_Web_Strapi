import { IHeroSectionHealthcare } from "./IHeroSectionHealthcare";
import innerEllipse from "@/assets/images/innerEllipse.png";
import outerMostEllipse from "@/assets/images/outerMostEllipse.png";
import outerEllipse from "@/assets/images/outerEllipse.png";
import style from "./HeroSectionHealthcare.module.scss";
import { CustomImage } from "..";

const HeroSectionHealthcare = (props: IHeroSectionHealthcare) => {
  const { title, image } = props;

  return (
    <div className={style.healthCareHeroSection}>
      <div className={`content`}>
        <p className={style.title}>{title}</p>
        <div className={style.bannerImage}>
          <div className={style.bannerContainer}>
            <CustomImage src={image} className={style.bannerImg} alt=""/>
          </div>
        </div>
      </div>
      <div className={style.circleContainer}>
        <CustomImage src={innerEllipse.src} className={style.innerEllipse} alt=""/>
        <CustomImage src={outerEllipse.src} className={style.outerEllipse} alt=""/>
        <CustomImage src={outerMostEllipse.src} className={style.outerMostEllipse} alt=""/>
      </div>
    </div>
  );
};

export default HeroSectionHealthcare;
