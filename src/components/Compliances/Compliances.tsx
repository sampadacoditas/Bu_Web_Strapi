import style from "./Compliances.module.scss";
import { ICompliances, ICompliancesProps } from "./ICompliances";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";

const CardComponent = (props: ICompliances) => {
  const { title, description, image } = props;
  return (
    <div className={`${style.cardContainer}`}>
      <div className={style.imageContainer}>
        <CustomImage className={style.complianceImage} src={getImageUrl(image)} alt="" />
      </div>
      <div className={style.innerContainer}>
        <div className={`${style.complianceHeading}`}>{title}</div>
        <div className={`${style.complianceDescription}`}>{description}</div>
      </div>
    </div>
  );
};

const Compliances = (props: ICompliancesProps) => {
  const { title, subtext, compliancesContent } = props
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }}>
      <div className={`content ${style.mainContainer}`}>
        <div className={style.heading}>{title}</div>
        <div className={style.subtext}>{subtext}</div>
      </div>
      <div className={`content ${style.contentContainer}`}>
        {compliancesContent.map(
          (compliancesContentData, index: number) => (
            <CardComponent
              key={compliancesContentData.title}
              title={compliancesContentData.title}
              image={compliancesContentData.image}
              description={compliancesContentData.description}
              customClass={style.hippaContainer}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Compliances;
