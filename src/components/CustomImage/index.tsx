import Image from "next/image";
import { ICustomImage } from "./ICustomImage";
import styles from "./CustomImage.module.scss";

const CustomImage = (props: ICustomImage) => {
  const { src = "", alt = "", className, ...rest } = props;
  return <Image src={src} alt={alt} width={0} height={0} className={`${styles.customImageContainer} ${className|| ""}`} {...rest} />;
};

export default CustomImage;
