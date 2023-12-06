import React, { Fragment, useEffect } from "react";
import { CustomImage } from "@/components";
import { IModalProps } from "./IModal";
import styles from "./Modal.module.scss";

function Modal(props: IModalProps) {
  const { children, onClose, customStyle, header, customBackdrop, isOpen = false, commonSvgs } = props;

  function handleModalClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.stopPropagation();
  }

  useEffect(() => {
    const body = document.body;

    function getScrollbarWidth() {
      const outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.overflow = "scroll";
      document.body.appendChild(outer);

      const inner = document.createElement("div");
      outer.appendChild(inner);

      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode?.removeChild(outer);
      return scrollbarWidth > 0 ? scrollbarWidth / 2 : scrollbarWidth;
    }

    if (isOpen) {
      body.style.overflow = "hidden";
      body.style.position = "relative";
      body.style.top = window.scrollX + "px";
      body.style.right = `${getScrollbarWidth()}px`;
      body.style.touchAction = "none";
    }

    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.right = "";
      body.style.touchAction = "";
    };
  }, [isOpen]);

  return (
    <Fragment>
      {isOpen ? (
        <div
          className={customBackdrop ? `${styles.modalBackdrop} ${customBackdrop}` : styles.modalBackdrop}
          onClick={onClose}
        >
          <div className={customStyle ? `${styles.modal} ${customStyle}` : styles.modal} onClick={handleModalClick}>
            {header && (
              <div className={styles.headingModal}>
                <div className={styles.headingDetails}>
                  <div className={styles.headingImage}>
                    <CustomImage src={header?.image} alt="Header" />
                  </div>
                  <div className={styles.headingPersonDetails}>
                    <div className={styles.personName}>{header.name}</div>
                    <div className={styles.personPosition}>{header.position}</div>
                  </div>
                </div>
                <div className={styles.closeIcon} onClick={onClose}>
                  <CustomImage src={commonSvgs?.crossIcon|| ""} alt="Close" />
                </div>
              </div>
            )}
            {children}
          </div>
        </div>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
}

export default Modal;
