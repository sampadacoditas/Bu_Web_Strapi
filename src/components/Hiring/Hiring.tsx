import useWindowWidth from "@/hooks/useWindowWidth";
import { OpeningCard, OpeningsRedCard } from "@/components";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import style from "./Hiring.module.scss";
import { IHiringNowProps } from "./hiringNow";

const Hiring = (props: IHiringNowProps) => {
  const { title = "", description, cards = [] } = props;
  const { isMobileView } = useWindowWidth();
  const [firstCard, secondCard, thirdCard, fourthCard] = cards;
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }}>
      <div className={`content ${style.contentContainer}`}>
        <div className={style.leftContainer}>
          <div className={style.heading} dangerouslySetInnerHTML={{ __html: title }}></div>
          <div className={style.subtext}>{description}</div>
        </div>
        <div className={style.rightCardContainer1}>
          <OpeningsRedCard openingsRedCardData={firstCard} />
          {!isMobileView && (
            <OpeningCard className={style.recruiters} heading={thirdCard?.title} subtext={thirdCard?.subtitle} />
          )}
        </div>
        <div className={style.rightCardContainer2}>
          <OpeningCard className={style.coders} heading={secondCard?.title} subtext={secondCard?.subtitle} />
          <OpeningCard className={style.designer} heading={fourthCard?.title} subtext={fourthCard?.subtitle} />
          {isMobileView && (
            <OpeningCard className={style.recruiters} heading={thirdCard?.title} subtext={thirdCard?.subtitle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hiring;
