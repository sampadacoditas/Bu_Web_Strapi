import useWindowWidth from "@/hooks/useWindowWidth";
import { IOutcome } from "./ITheOutcome";
import { CUSTOM_ID, DARK_BG_NAV } from "@/constants/constants";
import styles from "./TheOutcome.module.scss";
import { CustomImage } from "..";

const TheOutcome = ({ heading, subText, outcomeArray, outcomeImg, outcomeImgMobile, outcomeIcon = "" }: IOutcome) => {
  const { isMobileView } = useWindowWidth();
  return (
    <div {...{ [CUSTOM_ID]: DARK_BG_NAV }} className={styles.contentContainer}>
      <div className={`content`}>
        <div className={styles.mainContainer}>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.whiteLine}></div>
          <div className={styles.subText}>{subText}</div>
          <div className={styles.outcomeArray}>
            {outcomeArray.map((outcome, index: number) => {
              return (
                <div className={styles.outcome} key={index}>
                  <CustomImage src={outcomeIcon} className={styles.outcomeIcon} alt="" />
                  <div className={styles.outComeText}>{outcome}</div>
                </div>
              );
            })}
          </div>
          {outcomeImg && (
            <div className={styles.outcomeImageContainer}>
              <CustomImage
                src={isMobileView && outcomeImgMobile ? outcomeImgMobile : outcomeImg}
                className={styles.outcomeImage}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheOutcome;
