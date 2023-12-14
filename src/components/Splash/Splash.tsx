import loader from "@/assets/images/loader.gif";
import styles from "./Splash.module.scss";
import Image from "next/image";

const Splash = () => {
  return (
    <div className={styles.splashPage}>
      <Image src={loader.src} alt="loading" loading="eager" priority={true} width={0} height={0} className={`${styles.customImageContainer}`} />
    </div>
  );
};

export default Splash;
