import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { CaseStudyCard, CustomImage } from "..";
import {
  MORE_CASE_STUDY_CARD_COUNT_MOBILE,
  MORE_CASE_STUDY_CARD_COUNT_WEB,
  CUSTOM_ID,
  LIGHT_BG_NAV,
} from "@/constants/constants";
import { ICarousel } from "./ICarousel";
import { ICardPropsItem } from "../CaseStudy/Card/ICard";
import { ICONS } from "./icons";
import style from "./Carousel.module.scss";

const Carousel = (props: ICarousel) => {
  const { caseStudy = [] } = props;
  const { isMobileView, isTabletView } = useWindowWidth();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [cardCount, setCardCount] = useState(MORE_CASE_STUDY_CARD_COUNT_MOBILE);
  const imgHeight = isMobileView ? "10rem" : "17.625rem";

  useEffect(() => {
    initializeValues();
  }, [isMobileView, isTabletView]);

  const initializeValues = () => {
    const cardCount = isMobileView ? MORE_CASE_STUDY_CARD_COUNT_MOBILE : MORE_CASE_STUDY_CARD_COUNT_WEB;
    setCardCount(cardCount);
    setActiveIndex(0);
  };

  const isPrevBtnDisabled = () => Boolean(activeIndex <= 0);

  const isNextBtnDisable = () => Boolean(activeIndex == caseStudy.length - cardCount);

  const handlePrevBtnClick = () => {
    if (!isPrevBtnDisabled()) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextBtnClick = () => {
    if (!isNextBtnDisable()) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.outer}>
        <div className={`content ${style.main}`}>
          <div className={style.heading}>More Case Studies</div>
          <div className={style.carousel}>
            {caseStudy.slice(activeIndex, activeIndex + cardCount)?.map((item: ICardPropsItem, index: number) => {
              return (
                <>
                  <CaseStudyCard key={index} item={item} customStyle={{ imgHeight }} />
                </>
              );
            })}
          </div>
        </div>
        <div className={style.buttons}>
          <CustomImage
            src={isPrevBtnDisabled() ? ICONS.disabledLBtn : ICONS.enabledLBtn}
            className={isPrevBtnDisabled() ? "" : ` ${style.btnImg}`}
            onClick={handlePrevBtnClick}
            alt="left"
          />
          <CustomImage
            src={isNextBtnDisable() ? ICONS.disbledRBtn : ICONS.enabledRBtn}
            className={isNextBtnDisable() ? "" : ` ${style.btnImg}`}
            onClick={handleNextBtnClick}
            alt="right"
          />
        </div>
      </div>
    </>
  );
};
export default Carousel;
