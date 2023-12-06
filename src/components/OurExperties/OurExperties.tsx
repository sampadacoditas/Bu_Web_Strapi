import { CUSTOM_ID, DARK_BG_NAV } from "@/constants/constants";
import style from "./OurExperties.module.scss";
import { CustomImage } from "@/components";
import { IOurExperties } from "./IOurExperties";
import { getImageUrl } from "@/utils/helper";

const OurExperties = (props: IOurExperties) => {
  const {title="", description="", servicesImages=[]} = props;
  return (
    <div {...{ [CUSTOM_ID]: DARK_BG_NAV }} className={style.OurExperties}>
      <div className="content">
        <div className={`${style.layout}`}>
          <div className={style.title}>{title}</div>
          <div className={style.description}>
            {description}
          </div>
        </div>
        <div className={`${style.layout} ${style.cards}`}>
          <div className={`${style.wViewLayout} ${style.mViewMT}`}>
            <CustomImage src={getImageUrl(servicesImages?.[0]?.img)} alt="MarTech" className={style.expertiseImage} />
          </div>

          <div className={style.mViewDP}>
            <CustomImage src={getImageUrl(servicesImages?.[1]?.img)} alt="DataProvider" className={style.expertiseImage} />
          </div>
          <div className={`${style.wViewLayout} ${style.mViewSB}`}>
            <CustomImage src={getImageUrl(servicesImages?.[2]?.img)} alt="StockBroker" className={style.expertiseImage} />
          </div>

          <div className={style.mViewBFSI}>
            <CustomImage src={getImageUrl(servicesImages?.[3]?.img)} alt="Bfsi" className={style.expertiseImage} />
          </div>

          <div className={`${style.wViewLayout} ${style.mViewHC}`}>
            <CustomImage src={getImageUrl(servicesImages?.[4]?.img)} alt="Healthcare" className={style.expertiseImage} />
          </div>
          <div className={`${style.wViewLayout} ${style.mViewSC}`}>
            <CustomImage src={getImageUrl(servicesImages?.[5]?.img)} alt="ShippingContainer" className={style.expertiseImage} />
          </div>
          <div className={style.mViewECom}>
            <CustomImage src={getImageUrl(servicesImages?.[6]?.img)} alt="Ecommerce" className={style.expertiseImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperties;
