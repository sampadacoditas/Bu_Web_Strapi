import { useEffect, useState } from "react";
import { Button, MoreCaseStudyCard, CaseStudyBlueCard, CaseStudyWhiteCard } from "@/components";
import { CUSTOM_ID, DARK_BG_NAV, LIGHT_BG_NAV, PAGE_ROUTES } from "@/constants/constants";
import { ICaseStudyBlueCard } from "@/components/CaseStudyBlueCard/ICaseStudyBlueCard";
import styles from "./CaseStudySection.module.scss";
import { useRouter } from "next/router";

const CaseStudySection = (props: any) => {
  const {
    title,
    description,
    theme,
    itemList,
    showViewAllBtn,
    customWrapperClass,
    showMoreCard,
    showBigCaseStudyCard,
    serviceName,
    moreCaseStudyData,
    viewAllBtnBtnText,
    cardBtnText,
  } = props;
  const { push } = useRouter();
  const [caseStudyData, setCaseStudyData] = useState(itemList);
  const [blueCardData, setBlueCardData] = useState<ICaseStudyBlueCard | null>(null);

  const setInitlaiValues = () => {
    if (itemList?.length && showBigCaseStudyCard) {
      setBlueCardData(itemList?.[0]);
      setCaseStudyData(itemList?.slice(1));
    }
  };

  function viewAllClickHandler() {
    const route = serviceName ? `${PAGE_ROUTES.OUR_WORK}/${serviceName}` : PAGE_ROUTES.OUR_WORK;
    push(route);
  }

  useEffect(() => {
    setInitlaiValues();
  }, [itemList, showBigCaseStudyCard]);

  return (
    <div
      className={`${theme == "dark" ? styles.darkThmeContainer : ""}`}
      {...{ [CUSTOM_ID]: `${theme === "dark" ? DARK_BG_NAV : LIGHT_BG_NAV}` }}
    >
      <div className={`content ${styles.caseStudyContainer} ${customWrapperClass}`}>
        <div className={styles.titleContainer}>
          <div className={`${styles.title}`}>{title}</div>
          {description && <div className={`${styles.description}`}>{description}</div>}
        </div>

        <div className={styles.cardContainer}>
          {showBigCaseStudyCard && blueCardData && <CaseStudyBlueCard {...blueCardData} cardBtnText={cardBtnText} />}
          {caseStudyData?.map((item: any, index: number) => (
            <CaseStudyWhiteCard {...item} cardBtnText={cardBtnText} key={index} theme={theme} />
          ))}
          {showMoreCard && <MoreCaseStudyCard moreCaseStudyData={moreCaseStudyData} />}
        </div>

        {showViewAllBtn && (
          <div className={styles.viewAllBtnContainer}>
            <Button
              className={`${styles.themeBasedViewAllBtn} ${styles.viewAllBtn}`}
              onClick={viewAllClickHandler}
              variant="outlined"
            >
              {viewAllBtnBtnText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CaseStudySection;
