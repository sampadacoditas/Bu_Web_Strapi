import { useRouter } from "next/router";
import { Button, CustomImage } from "@/components";
import useWindowWidth from "@/hooks/useWindowWidth";
import { OpenPositionsType, listType } from "./IOpenPositions";
import { PAGE_ROUTES, CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import styles from "./OpenPositions.module.scss";

const List = ({ listItem, rightArrow = "" }: listType) => {
  const { push } = useRouter();
  const handleClick = () => {
    push(listItem.redirectTo);
  };
  return (
    <div className={styles.listContainer} onClick={handleClick}>
      <div className={styles.positionName}>{listItem.position}</div>
      <div className={styles.chevronIcon}>
        <CustomImage src={rightArrow} alt="Right Chevron" />
      </div>
    </div>
  );
};

const OpenPositions = ({
  headerData,
  positionsArray,
  openPositions = "",
  viewAllBtn = "",
  rightArrow = "",
}: OpenPositionsType) => {
  const { push } = useRouter();
  const { isMobileView } = useWindowWidth();
  const handleViewAll = () => {
    push(PAGE_ROUTES.CAREERS_DOMAIN);
  };
  console.log("open position");
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={styles.container} id="open-position">
      <div className={`content`}>
        <div className={styles.titleContainer}>
          <div className={styles.titleLeftWrapper}>
            <div className={styles.titleContainerHeader}>{headerData.header}</div>
            <div className={styles.positionsContainer}>
              <div className={styles.listBox}>
                {positionsArray.map((data, index: number) => (
                  <List key={index} listItem={data} rightArrow={rightArrow} />
                ))}
              </div>
              {!isMobileView && (
                <div className={styles.imageContainer}>
                  <CustomImage src={openPositions} className={styles.openPositionsImage} alt="Open Positions" />
                </div>
              )}
            </div>
            <div className={styles.buttonContainer}>
              <Button onClick={handleViewAll} className={styles.viewAll} variant="outlined">
                {viewAllBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
