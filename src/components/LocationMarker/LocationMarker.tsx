import { useEffect, useState } from "react";
import { ILocationMarker } from "./ILocationMarker";
import { CustomImage } from "..";

const LocationMarker = (props: ILocationMarker) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsActive(Boolean(props.istooltipactive));
    }, 75);
  }, [props.istooltipactive]);

  const activeMarker = isActive ? props?.commonSvgs?.markerActive : props?.commonSvgs?.markerInactive;

  return <CustomImage src={activeMarker} alt="Location Marker" {...props} />;
};

export default LocationMarker;
