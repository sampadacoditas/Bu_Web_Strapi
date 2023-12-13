import style from "./LocationCard.module.scss";
import { useState } from "react";
import { ILocationCard } from "./ILocationCard";
import { CustomImage } from "..";
import SVGComponent from "@/assets/icons";
import { getImageUrl, mapArrayImages } from "@/utils/helper";

const LocationCard = (props: ILocationCard) => {
  const { addresses, flagIcon, location, mappedSvgs={} } = props;

  const getImageIcons = mappedSvgs?.mappedData?.reduce((acc: any, curr: any) => {
    acc[curr?.label] = curr?.value
    return acc;
  }, [])
  const {leftArrow, rightArrow} = getImageIcons;

  
  const [currentAddressIndex, setCurrentAddressIndex] = useState<number>(0);

  const isNextAddressAvailable = () => addresses.length !== currentAddressIndex + 1;

  const isPrevAddressAvailable = () => currentAddressIndex !== 0;

  const handleShowNextAddress = () => {
    if (isNextAddressAvailable()) {
      setCurrentAddressIndex(currentAddressIndex + 1);
    }
  };

  const handleShowPrevAddress = () => {
    if (isPrevAddressAvailable()) {
      setCurrentAddressIndex(currentAddressIndex - 1);
    }
  };

  return (
    <div className={style.locationCardContainer}>
      <div className={style.title}>
        <div className={style.countryIconContainer}>
          <CustomImage className={style.countryIcon} src={getImageUrl(flagIcon)} alt="Flag" />
        </div>
        <span className={style.location}>{location}</span>
      </div>

      <div className={style.addressContainer}>
        <p>{addresses[currentAddressIndex]}</p>

        {(isNextAddressAvailable() || isPrevAddressAvailable()) && (
          <div className={style.addressSwitchContainer}>
            <span onClick={handleShowPrevAddress} className={isPrevAddressAvailable() ? style.active : style.disable}>
              <SVGComponent name={leftArrow} className={style.icon}/>
            </span>

            <span onClick={handleShowNextAddress} className={isNextAddressAvailable() ? style.active : style.disable}>
              <SVGComponent name={rightArrow} className={style.icon}/>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default LocationCard;
