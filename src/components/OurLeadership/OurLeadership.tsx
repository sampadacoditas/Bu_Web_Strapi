import { useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Button, CustomImage, Modal } from "@/components";
import { CUSTOM_ID, DARK_BG_NAV, LIGHT_BG_NAV } from "@/constants/constants";
import { OurLeadershipType, cardDataType, cardType } from "./IOurLeadership";
import styles from "./OurLeadership.module.scss";

const Card = ({ data, handleClick, buttonText }: cardType) => {
  const { imgSrc } = data;
  const { isMobileView } = useWindowWidth();

  const handleModalOpen = () => {
    handleClick(data);
  };

  return (
    <div className={styles.cardContainer} onClick={handleModalOpen}>
      <div className={styles.cardImage}>
        <CustomImage src={imgSrc} className={styles.personImage} alt="Employee" />
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}>{data.name}</div>
          <div className={styles.cardSubTitle}>{data.position}</div>
          {!isMobileView && <div className={styles.cardDescription}>{data.about}</div>}
        </div>
        <span className={styles.detailsContainer} onClick={handleModalOpen}>
          {buttonText}
        </span>
      </div>
    </div>
  );
};

const OurLeadership = ({ headerData, cardsArray, buttonLabel, commonSvgs }: OurLeadershipType) => {
  const mobileCardsList = cardsArray.slice(0, 4);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<cardDataType | null>(null);
  const { isMobileView, isTabletView } = useWindowWidth();
  const [initialListForMobile, setInitialListForMobile] = useState(mobileCardsList);
  const handleViewMore = () => {
    const headSectionElement = document.getElementById("headSectionAboutUs");
    setIsButtonClicked(true);
    if (isButtonClicked) {
      setInitialListForMobile(mobileCardsList);
      setIsButtonClicked(false);
      if (headSectionElement) {
        headSectionElement.scrollIntoView({ behavior: "instant" });
      }
    } else {
      setInitialListForMobile(cardsArray);
    }
  };
  const arrayToBeMapped = isMobileView ? initialListForMobile : cardsArray;

  const handleModalOpen = (data: cardDataType) => {
    setIsModalOpen(true);
    setModalData(data);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  console.log("commonSvgs", commonSvgs)

  return (
    <div className={styles.container} id="headSectionAboutUs">
      <div className={`content`}>
        <div className={styles.titleContainer} {...{ [CUSTOM_ID]: DARK_BG_NAV }}>
          <div className={styles.titleContainerHeader}>{headerData.header}</div>
          <div className={styles.titleContainerDescription}>{headerData.desc}</div>
          {!isTabletView && !isMobileView ? (
            <div className={`${styles.imageContainer}`}>
              <div className="content ">
                <div className={styles.doodleDots}>
                  <CustomImage src={commonSvgs?.doodleDotsLeft} className={styles.doodleDotsLeft} alt="Left Doodle Dots" />
                  <CustomImage src={commonSvgs?.doodleDotsLeft} className={styles.doodleDotsRight} alt="Right Doodle Dots" />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div id="person-modal-open" className={styles.personModal}></div>
        <div className={styles.cardBox}>
          {arrayToBeMapped.map((data: cardDataType, index: number) => {
            return (
              <Card
                data={data}
                buttonText={buttonLabel?.cardBtnText}
                key={index}
                handleClick={handleModalOpen}
                onModalClose={handleModalClose}
                isModalOpen={isModalOpen}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bottomSection} {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} />
      {isMobileView && (
        <div className={styles.buttonContainer}>
          <Button onClick={handleViewMore} className={styles.viewMore} variant="outlined">
            {isButtonClicked ? buttonLabel?.viewLessBtn : buttonLabel?.viewMoreBtn}
          </Button>
        </div>
      )}

      <div className={styles.pointerEvents}>
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          header={{
            image: modalData?.imgSrc || "",
            name: modalData?.name || "",
            position: modalData?.position || "",
          }}
          commonSvgs={commonSvgs}
        >
          <div className={styles.personDescription}>{modalData?.desc}</div>
        </Modal>
      </div>
    </div>
  );
};

export default OurLeadership;
