import { ICertification } from "./ICertification";
import style from "./Certification.module.scss";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";
const Certification = (props: ICertification) => {
  const { title, description, badgeList, customContainerClass } = props;
  return (
    <div
      {...{ [CUSTOM_ID]: LIGHT_BG_NAV }}
      className={`${style.certificationContainer} ${customContainerClass ? style[customContainerClass] : ""} content`}
    >
      <div className={style.contentContainer}>
        <p className={style.title}>{title}</p>
        <p className={style.description}>{description}</p>
      </div>
      <div className={`${style.contentContainer} ${style.badgeContainer}`}>
        {badgeList.map(item => {
          return (
            <div className={style.badge} key={item.id}>
              <CustomImage src={getImageUrl(item?.src ?? item?.badge)} alt="Badge" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
