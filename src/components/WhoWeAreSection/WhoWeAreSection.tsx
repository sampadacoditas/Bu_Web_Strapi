import { sanitize } from "isomorphic-dompurify";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { IWhoWeAreSectionProps, IWhoWeAreCardDetail, IWhoWeAreDescriptions } from "./IWhoWeareSection";
import style from "./WhoWeAreSection.module.scss";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";

const WhoWeAreSection: React.FC<IWhoWeAreSectionProps> = (props: any) => {
  const { contentContainerStyle, title, whoWeAreDescriptions, whoWeAreCardDetails } = props;

  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.whoWeAreSection}>
      <div className={`content ${contentContainerStyle}`}>
        <div className={style.contentWrapper}>
          <p className={style.title}>{title}</p>
          {whoWeAreDescriptions?.map((item: { id: number; desc: string }, index: number) => {
            return (
              <div
                key={index}
                className={style.description}
                dangerouslySetInnerHTML={{ __html: sanitize(item?.desc) }}
              />
            );
          })}
        </div>
        <div className={style.whoWeAreCardsWrapper}>
          <div className={style.cardSection}>
            {whoWeAreCardDetails?.map((item: IWhoWeAreCardDetail, index: number) => {
              return (
                <div className={style.whoWeAreCardsLayout} key={index}>
                  <CustomImage src={getImageUrl(item.icon)} alt="icon" />
                  <div>
                    <p className={style.cardTitle}>{item.cardTitle}</p>
                    <p className={style.cardDescription}>{item.cardDescription}</p>
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

export default WhoWeAreSection;
