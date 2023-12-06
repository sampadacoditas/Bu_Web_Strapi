import { useEffect, useLayoutEffect, useState } from "react";
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from "@/constants/constants";

//Custom hook to determine the type of device
const useWindowWidth = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  const checkWindowWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > MOBILE_MAX_WIDTH && windowWidth <= TABLET_MAX_WIDTH) {
      setIsTabletView(true);
      setIsMobileView(false);
    } else if (windowWidth <= MOBILE_MAX_WIDTH) {
      setIsMobileView(true);
      setIsTabletView(false);
    } else {
      setIsMobileView(false);
      setIsTabletView(false);
    }
  };

  useEffect(() => {
    const iswDomWindowEnabled = typeof window !== "undefined";

    if (iswDomWindowEnabled) {
      checkWindowWidth();
    }

    let timeoutId: any = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkWindowWidth, 200);
    };

    iswDomWindowEnabled && window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      iswDomWindowEnabled && window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobileView, isTabletView };
};

export default useWindowWidth;
