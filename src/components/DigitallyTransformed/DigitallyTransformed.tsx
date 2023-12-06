import { CustomImage } from "@/components";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import style from "./DigitallyTransformed.module.scss";
import { IDigitallyTranformed } from "./IDigitallyTransformed";
import { getImageUrl } from "@/utils/helper";

const DigitallyTransformed = ({
  hasImagesArray,
  imagesArray,
  titleText,
  subTitle,
  customLogoContainerClass,
}: IDigitallyTranformed) => {
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.container}>
      <div className={`content`}>
        <div className={style.heading}>{titleText}</div>
        <div className={style.subtext}>{subTitle}</div>
        {hasImagesArray && (
          <div className={`${style.clientLogo} ${customLogoContainerClass}`}>
            {imagesArray?.map((logo: any, index: number) => {
              return (
                <CustomImage
                  key={index}
                  src={getImageUrl(logo?.imageSrc)}
                  alt="Digitally Transformed"
                  className={`${style.logo} ${logo.customLogoClass ? style[logo.customLogoClass] : ""}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitallyTransformed;
