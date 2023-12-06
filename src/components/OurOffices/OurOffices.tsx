import React from "react";
import { LocationMarker, Tooltip, LocationCard, CustomImage } from "@/components";
import { CUSTOM_ID, DARK_BG_NAV } from "@/constants/constants";
import { IOurOfffices } from "./IOurOffices";
import style from "./OurOffices.module.scss";

const OurOffices = (props: IOurOfffices) => {
  const { addressData = [], map = "", commonSvgs={}, mappedSvgs={} } = props;
  const [usAddress, uaeAddress, indAddress] = addressData;

  const indLocation = indAddress ? indAddress.location : "";
  const indFlagIcon = indAddress ? indAddress.flagIcon : "";
  const indAddresses = indAddress ? indAddress.addresses : [];

  const uaeLocation = uaeAddress ? uaeAddress.location : "";
  const uaeFlagIcon = uaeAddress ? uaeAddress.flagIcon : "";
  const uaeAddresses = uaeAddress ? uaeAddress.addresses : [];

  const usLocation = usAddress ? usAddress.location : "";
  const usFlagIcon = usAddress ? usAddress.flagIcon : "";
  const usAddresses = usAddress ? usAddress.addresses : [];

  return (
    <div {...{ [CUSTOM_ID]: DARK_BG_NAV }} className={style.ourOfficesSection}>
      <div className={`content ${style.ourOfficesContainer}`}>
        <div className={style.leftSection}>
          <span className={style.ourOfficesTitle}>{props.title}</span>

          <div className={style.addresses}>
            {addressData.map((location, index) => {
              return (
                <div key={index} className={style.location}>
                  <div className={style.flagIconContainer}>
                    <CustomImage src={location.flagIcon} className={style.flagIcon} alt="Flag" />
                  </div>
                  <div className={style.address}>
                    <span className={style.currentLocation}>{location.location}</span>
                    {location.addresses.map((address: string, index: number) => {
                      return (
                        <React.Fragment key={index}>
                          <span className={style.currentAddress}>{address}</span>
                          {location.addresses.length - 1 != index && <div className={style.horizontalLine}></div>}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={style.rightSection}>
          <span className={style.ourOfficesTitle}>{props.title}</span>
          <div className={style.locationsContainer}>
            <CustomImage src={map} alt="world map" className={style.mapImage} />
            <div className={style.puneLocation}>
              <Tooltip
                content={<LocationCard location={indLocation} flagIcon={indFlagIcon} addresses={indAddresses} mappedSvgs={mappedSvgs}/>}
              >
                <LocationMarker alt="Pune Location" commonSvgs={commonSvgs}/>
              </Tooltip>
            </div>
            <div className={style.usLocation}>
              <Tooltip content={<LocationCard location={usLocation} flagIcon={usFlagIcon} addresses={usAddresses} mappedSvgs={mappedSvgs}/>}>
                <LocationMarker alt="US Location" commonSvgs={commonSvgs}/>
              </Tooltip>
            </div>
            <div className={style.uaeLocation}>
              <Tooltip
                content={<LocationCard location={uaeLocation} flagIcon={uaeFlagIcon} addresses={uaeAddresses} mappedSvgs={mappedSvgs}/>}
              >
                <LocationMarker alt="UAE Location" commonSvgs={commonSvgs}/>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurOffices;
