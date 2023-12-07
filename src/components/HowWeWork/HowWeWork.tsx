import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { IHowWeWork, IHowWeWorkCard } from "./IHowWeWork";
import style from "./HowWeWork.module.scss";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";

const HowWeWork = (props: IHowWeWork) => {
  const { contentContainerStyle, howWeWorkDetails, customCardStyle } = props;
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.howWeWorkSection}>
      <div className={`content ${contentContainerStyle}`}>
        <div className={style.howWeWorkLayout}>
          <div className={style.content}>
            <p className={style.title}>{howWeWorkDetails.title}</p>
            <p className={style.description}>{howWeWorkDetails.description}</p>
          </div>
          <div className={style.cardLayout}>
            {howWeWorkDetails?.howWeWorkCard?.map((detail: IHowWeWorkCard, index: number) => {
              return (
                <div className={`${style.cardStyle} ${customCardStyle ? style[customCardStyle] : ""}`} key={index}>
                  <div className={style.howWeWorkLogo}>
                    <CustomImage src={getImageUrl(detail.logo)} alt="" />
                  </div>
                  <div className={style.cardContent}>
                    <p className={style.cardTitle}>{detail.title}</p>
                    <p className={style.cardDesc}>{detail.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
