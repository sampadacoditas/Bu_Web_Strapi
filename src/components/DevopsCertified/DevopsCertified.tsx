import { useState, useEffect } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { CustomImage } from "@/components";
import { IBadge, IDevopsCertified } from "./IDevopsCertified";
import {
  DEVOPS_CERTIFIED_BADGES_COUNT_MOBILE,
  DEVOPS_CERTIFIED_BADGES_COUNT_TABLET,
  CUSTOM_ID,
  LIGHT_BG_NAV,
} from "@/constants/constants";
import styles from "./DevopsCertified.module.scss";

const DevopsCertified = (props: IDevopsCertified) => {
  const { CONSTANTS, badges, customContainerClass } = props;

  const { isMobileView, isTabletView } = useWindowWidth();
  const [numberOfColumns, setNumberOfColumns] = useState<number>(DEVOPS_CERTIFIED_BADGES_COUNT_MOBILE);

  const badgesRows = Array(Math.ceil(badges.length / numberOfColumns))
    .fill(undefined)
    .map((_, index) => badges.slice(index * numberOfColumns, index * numberOfColumns + numberOfColumns));

  useEffect(() => {
    if (isTabletView) {
      setNumberOfColumns(DEVOPS_CERTIFIED_BADGES_COUNT_TABLET);
    } else {
      setNumberOfColumns(DEVOPS_CERTIFIED_BADGES_COUNT_MOBILE);
    }
  }, [isMobileView, isTabletView]);

  return (
    <div
      {...{ [CUSTOM_ID]: LIGHT_BG_NAV }}
      className={`content ${styles.devopsCertifiedWrapper} ${customContainerClass ? styles[customContainerClass] : ""}`}
    >
      <div className={styles.container}>
        <p className={styles.title}>{CONSTANTS.TITLE}</p>
        <p className={styles.description}>{CONSTANTS.DESCTIPTION}</p>
      </div>

      <div className={styles.badgeContainer}>
        {badges.map((badge: IBadge, index: number) => {
          return <CustomImage src={badge.badge} key={index} alt="badge" className={styles.badgeImg}/>;
        })}
      </div>

      <div className={styles.badgeFlexContainer}>
        {badgesRows.map((badgeRow: IBadge[], rowIndex: number) => {
          return (
            <div className={styles.rowContainer} key={rowIndex}>
              {badgeRow.map((badge: IBadge, index: number) => {
                return (
                  <div className={styles.badge} key={index}>
                    <CustomImage src={badge.badge} alt="badge" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevopsCertified;
