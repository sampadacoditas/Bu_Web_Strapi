import { CUSTOM_ID, DARK_BG_NAV } from "@/constants/constants";
import Circle from "../Circle/Circle";
import style from "./Technologies.module.scss";
import { ITechnologyProps } from "./technology";
import { getImageUrl } from "@/utils/helper";

const Technologies = (props: ITechnologyProps) => {
  const { title, description, imagesArray } = props;
  return (
    <div {...{ [CUSTOM_ID]: DARK_BG_NAV }}>
      <div className={style.mainContainer}>
        <div className={`content ${style.contentContainer}`}>
          <div className={style.heading}>{title}</div>
          <div className={style.subtext}>{description}</div>
          <div className={style.logos}>
            <Circle icon={getImageUrl(imagesArray?.angular)} />
            <Circle icon={getImageUrl(imagesArray.react)} />
            <div className={style.toolTipOuterContainer}>
              <div className={style.toolTipInnerContainer}>
                <div className={style.official}>Official Partner!</div>
                <div className={style.arrow}></div>
              </div>
              <Circle customClass={style.aws} icon={getImageUrl(imagesArray.aws)} />
            </div>
            <Circle icon={getImageUrl(imagesArray.vue)} />
            <Circle icon={getImageUrl(imagesArray.java)} />
            <Circle icon={getImageUrl(imagesArray.dotNet)} />
            <Circle icon={getImageUrl(imagesArray.nodeJs)} />
            <Circle icon={getImageUrl(imagesArray.goLang)} />
            <Circle icon={getImageUrl(imagesArray.gCloud)} />
            <Circle icon={getImageUrl(imagesArray.azure)} />
            <Circle icon={getImageUrl(imagesArray.flutter)} />
            <Circle icon={getImageUrl(imagesArray.android)} />
            <Circle icon={getImageUrl(imagesArray.apple)} />
            <Circle icon={getImageUrl(imagesArray.tenMore)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
