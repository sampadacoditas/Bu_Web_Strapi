import { useState } from "react";
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";
import { Button, CustomImage, Modal } from "@/components";
import { OurServicesType, cardDataType, cardType, modalDataType, modalType } from "./IOurServices";
import { CUSTOM_ID, DARK_BG_NAV, LIGHT_BG_NAV } from "@/constants/constants";
import doodleDotsRight from "@/assets/icons/doodleDotsRight.svg";
import doodleDotsLeft from "@/assets/icons/doodleDotsLeft.svg";
import bulletIcon from "@/assets/icons/devopsStarIcon.svg";
import { ReactComponent as CrossIcon } from "@/assets/icons/crossIcon.svg";
import styles from "./OurServices.module.scss";
import { getImageUrl } from "@/utils/helper";

const Card = ({ data, hasCardButton, customClass, customCardContentClass, openModal, buttonText }: cardType) => {
  const handleOpenModel = () => {
    if (openModal) {
      openModal(data.modalData);
    }
  };
  return (
    <div className={`${styles.cardContainer} ${customClass ? styles[customClass] : ""}`}>
      <CustomImage src={getImageUrl(data.icon)} className={styles.cardIcon} alt="Card Header" />
      <div className={`${styles.cardContent} ${customCardContentClass}`}>
        <div className={styles.cardTitle}>{data.title}</div>
        {data.showBullets ? (
          <ul className={styles.cardDescription}>
            {data.desc.split("#").map((item, index) => (
              <div className={styles.bulletItem} key={index}>
                <CustomImage src={bulletIcon} className={styles.bulletIcon} alt="Bullet" />
                <div className={styles.bulletDesc}>{item}</div>
              </div>
            ))}
          </ul>
        ) : (
          <div className={styles.cardDescription}>{data.desc}</div>
        )}
      </div>
      {hasCardButton && (
        <div className={styles.detailsContainer}>
          {data.modalData ? (
            <button onClick={handleOpenModel} className={`${styles.detailsLink} ${styles.detailsBtn}`}>
              {buttonText}
            </button>
          ) : (
            <Link href={data.link} className={styles.detailsLink}>
              {buttonText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

const OurServicesModel = ({ data, isModalOpen, closeModal, commonSvgs }: modalType) => {
  return (
    <div className={styles.pointerEvents}>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        customBackdrop={styles.customBackdrop}
        customStyle={styles.customModal}
      >
        <div className={styles.modalContainer}>
          <div className={styles.header}>
            <div className={styles.iconContainer}>
              <CustomImage src={data.icon} alt="icon" />
            </div>
            <div className={styles.closeIcon} onClick={closeModal}>
              <CrossIcon className={styles.icon} />
            </div>
          </div>

          <div className={styles.modalBody}>
            <div className={styles.modalTitleContainer}>
              <p className={styles.title}>{data?.title}</p>
            </div>

            <div className={styles.modalDetailsContainer}>
              <p className={styles.modalDescription}>{data?.desc}</p>

              {data?.descList && (
                <div className={styles.modalDescriptionList}>
                  {data?.descList.map((desc, index: number) => {
                    return (
                      <p className={styles.descContaier} key={index}>
                        <span className={styles.bullet}>&#8226;</span>
                        <span>{desc}</span>
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const Ourservices = ({
  headerData,
  cardsArray,
  hasCardButton,
  cardCustomClass,
  bottomContainerCustomClass,
  hasViewMoreButton,
  customCardBoxStyle,
  customCardContentClass,
  showAllCards,
  customButtonContainer,
  bottomContainerDynamicClass,
  showDarkHeaderTheme = true,
  buttonLabel,
  commonSvgs,
}: OurServicesType) => {
  const mobileCardsList = showAllCards ? cardsArray : cardsArray.slice(0, 4);
  const { isMobileView, isTabletView } = useWindowWidth();
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [initialListForMobile, setInitialListForMobile] = useState<cardDataType[]>(mobileCardsList);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<modalDataType | null>(null);

  const openModal = (data: modalDataType) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleViewMore = () => {
    const headSectionElement = document.getElementById("headSection");
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

  const bottomHeaderTheme = showDarkHeaderTheme ? { [CUSTOM_ID]: DARK_BG_NAV } : { [CUSTOM_ID]: LIGHT_BG_NAV };

  return (
    <div className={styles.container} id="headSection">
      <div className={`content`}>
        <div className={styles.titleContainer} {...{ [CUSTOM_ID]: DARK_BG_NAV }}>
          <div className={styles.titleContainerHeader}>{headerData.header}</div>
          <div className={styles.titleContainerDescription}>{headerData.desc}</div>
          {!isTabletView && !isMobileView ? (
            <div className={`${styles.imageContainer}`}>
              <div className="content ">
                <div className={styles.doodleDots}>
                  <CustomImage
                    src={commonSvgs?.doodleDotsLeft || ""}
                    className={styles.doodleDotsLeft}
                    alt="Left Doodle Dots"
                  />
                  <CustomImage
                    src={commonSvgs?.doodleDotsRight || ""}
                    className={styles.doodleDotsRight}
                    alt="Right Doodle Dots"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className={`${styles.cardBox} ${customCardBoxStyle ? styles[customCardBoxStyle] : ""}`}>
          {arrayToBeMapped.map((data, index: number) => (
            <Card
              key={index}
              data={data}
              buttonText={buttonLabel?.cardBtnText}
              hasCardButton={hasCardButton}
              customClass={cardCustomClass}
              openModal={openModal}
              customCardContentClass={customCardContentClass}
            />
          ))}
        </div>
      </div>
      <div
        className={`${styles.bottomSection} ${
          bottomContainerCustomClass ? styles[bottomContainerCustomClass] : ""
        } ${bottomContainerDynamicClass}`}
        {...bottomHeaderTheme}
      />
      {isMobileView && hasViewMoreButton && (
        <div
          className={`${styles.buttonContainer} ${
            customButtonContainer ? styles[customButtonContainer] : ""
          } ${bottomContainerDynamicClass}`}
        >
          <Button onClick={handleViewMore} className={styles.viewMore} variant="outlined">
            {isButtonClicked ? buttonLabel?.viewLessBtn : buttonLabel?.viewMoreBtn}
          </Button>
        </div>
      )}

      {isModalOpen && modalData && (
        <OurServicesModel data={modalData} isModalOpen={isModalOpen} closeModal={closeModal} commonSvgs={commonSvgs} />
      )}
    </div>
  );
};

export default Ourservices;
