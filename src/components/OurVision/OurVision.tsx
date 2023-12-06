import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { IOurVision } from "./IOurVision";
import style from "./OurVision.module.scss";

const OurVision = ({ subtitle, titletext }: IOurVision) => {
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.container}>
      <div className={`content`}>
        <div className={style.heading}>{titletext}</div>
        <div className={style.subtext}>{subtitle}</div>
      </div>
    </div>
  );
};

export default OurVision;
