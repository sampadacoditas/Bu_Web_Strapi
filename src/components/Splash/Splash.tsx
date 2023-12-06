import loader from "@/assets/images/loader.gif";
import styles from "./Splash.module.scss";
import { CustomImage } from "@/components";

const Splash = () => {
  return (
    <div className={styles.splashPage}>
      <CustomImage src={loader.src} alt="loading" loading="eager" priority={true}/>
    </div>
  );
};

export default Splash;
