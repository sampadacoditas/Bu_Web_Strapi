import { useState } from "react";
import { Button, CustomImage } from "..";
import { WhyCooseCoditasType, cardDataType, cardType } from "./IWhyChooseCoditas";
import styles from "./WhyChooseCoditas.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";

const WhyChooseCoditasCard = ({ data }: cardType) => {
  return (
    <div className={styles.cardContainer}>
      {data.icon && data.title && (
        <>
          <div className={styles.imageContainer}>
            <CustomImage src={data.icon} className={styles.icon} alt="Why Choose Coditas" />
          </div>
          <div className={styles.cardTitle}>{data.title}</div>
        </>
      )}
      <div className={styles.cardDescription}>{data.data}</div>
    </div>
  );
};

const WhyChooseCoditas = ({
  headerData,
  cardsArray,
  customTitleContainer,
  cardAlignment,
  buttonLabel,
}: WhyCooseCoditasType) => {
  const initialCardList = cardsArray.slice(0, 6);
  const initialMobileCardList = cardsArray.slice(0, 4);
  const [aarayListToBeShown, setAarayListToBeShown] = useState<cardDataType[]>(initialCardList);
  const [mobileCardsList, setMobileCardsList] = useState<cardDataType[]>(initialMobileCardList);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const { isMobileView } = useWindowWidth();
  const cardsToBeMapped = isMobileView ? mobileCardsList : aarayListToBeShown;
  const checkCardsLength = isMobileView ? cardsArray.length > 4 : cardsArray.length > 6;
  const handleViewMore = () => {
    const headSectionElement = document.getElementById("headSectionWhyChooseCoditas");
    setIsButtonClicked(true);
    if (isButtonClicked) {
      {
        isMobileView ? setMobileCardsList(initialMobileCardList) : setAarayListToBeShown(initialCardList);
      }
      setIsButtonClicked(false);
      if (headSectionElement) {
        headSectionElement.scrollIntoView({ behavior: "instant" });
      }
    } else {
      {
        isMobileView ? setMobileCardsList(cardsArray) : setAarayListToBeShown(cardsArray);
      }
    }
  };

  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={styles.container} id="headSectionWhyChooseCoditas">
      <div className={`content`}>
        <div className={`${styles.titleContainer} ${customTitleContainer ? styles[customTitleContainer] : ""}`}>
          <div className={styles.titleContainerHeader}>{headerData.header}</div>
          <div className={styles.titleContainerDescription}>{headerData.desc}</div>
        </div>

        <div
          className={`${cardAlignment === "column" ? styles.cardBoxLayout : styles.cardBox} ${
            checkCardsLength ? "" : styles.cardBoxBottomPadding
          }`}
        >
          {cardsToBeMapped.map((data, index: number) => (
            <WhyChooseCoditasCard data={data} key={index} />
          ))}
        </div>
      </div>
      {checkCardsLength && (
        <div className={styles.buttonContainer}>
          <Button onClick={handleViewMore} className={styles.viewMore} variant="outlined">
            {isButtonClicked ? buttonLabel?.viewLessBtn : buttonLabel?.viewMoreBtn}
          </Button>
        </div>
      )}
    </div>
  );
};

export default WhyChooseCoditas;
