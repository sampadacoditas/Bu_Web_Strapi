import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import pageNotFound from "@/assets/images/PageNotFound.png";
import styles from "./PageNotfound.module.scss";
import { Button, CustomImage } from "@/components";

const PageNotFoundComp = (props: any) => {
  const { onBackClick } = props;
  return (
    <div
      {...{ [CUSTOM_ID]: LIGHT_BG_NAV }}
      className={`content ${styles.container}`}
    >
      <div className={styles.notFoundSection}>
        <div className={styles.imageContentSection}>
          <CustomImage src={pageNotFound.src} alt="Page Not found" />
          <div className={styles.notFoundContent}>
            <p className={styles.title}>Page not found</p>
            <p className={styles.subTitle}>
              It’s looking like you may have taken a wrong turn. Don’t worry...
              it happens to the most of us.
            </p>
          </div>
        </div>
        <div className={styles.buttonSection}>
          <Button variant="primary" onClick={onBackClick}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PageNotFoundComp;
