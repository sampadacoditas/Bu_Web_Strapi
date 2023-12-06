import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { CustomImage } from "@/components";
import useWindowWidth from "@/hooks/useWindowWidth";
import { CUSTOM_ID, LIGHT_BG_NAV, DARK_BG_NAV, BLUE_BG_NAV } from "@/constants/constants";
import NavItem from "../NavItem/NavItem";
import { INavItem } from "../NavItem/INavItem";
import { IMobileNavBar } from "./IHeader";
import styles from "./Header.module.scss";
import { ReactComponent as DynamicCoditasLogo } from "@/assets/icons/dynamicCoditasLogo.svg";
import { ReactComponent as Hamberger } from "@/assets/icons/hamberger.svg";
import doodleDots from "@/assets/icons/doodleDots.svg";

const MobileNavBar = (props: IMobileNavBar) => {
  const { navItems, toggleMobilNav } = props;

  const hideScroll = (root: any) => {
    if (root) {
      root.style.overflow = "hidden";
    }
    document.body.style.overflow = "hidden";
  };

  const showScroll = (root: any) => {
    if (root) {
      root.style.overflow = "";
    }
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const root = document.getElementById("root");
    hideScroll(root);
    return () => {
      showScroll(root);
    };
  }, []);

  return (
    <div className={styles.mobileNav}>
      <div className={styles.navContainer}>
        {navItems?.map((navItem: INavItem, index: number) => {
          return <NavItem navItem={navItem} type="Tab" toggleMobilNav={toggleMobilNav} key={index} />;
        })}
      </div>

      <div className={styles.mobileNavFooter}>
        <div className={styles.doodleDotsContainer}>
          <CustomImage src={doodleDots} alt="Doodle Dots" className={styles.doodleDots} />
        </div>
      </div>
    </div>
  );
};

const Header = (props: any) => {
  const { navItems = [] } = props;
  const [isMobileNavActive, setIsMobileNavActive] = useState<boolean>(false);
  const { isMobileView, isTabletView } = useWindowWidth();
  const isWebView = !isMobileView && !isTabletView;
  const [activeMarkerStyle, setActiveMarkerStyle] = useState<any>({});
  const [sliderPosition, setSliderPosition] = useState({});
  const [isBorderHidden, setIsBorderHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isWebView && isMobileNavActive) {
      setIsMobileNavActive(false);
    }
  }, [isWebView]);

  const toggleMobilNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const hideMobileNav = () => {
    if ((isMobileView || isTabletView) && isMobileNavActive) {
      toggleMobilNav();
    }
  };

  const [topmostVisibleElement, setTopmostVisibleElement] = useState("");
  const [showTransparentBackground, setShowTransparentBackground] = useState(true);

  const changeTransperentBackground = () => {
    if (typeof window !== "undefined" && window?.scrollY <= 0) {
      setShowTransparentBackground(true);
    } else {
      setShowTransparentBackground(false);
    }
  };

  const getDynamicClass = useMemo(() => {
    if (isMobileNavActive)
      return {
        bgColor: styles.defaultBackground_bgColor,
        textColor: styles.defaultBackground_textColor,
        logoColor: styles.defaultBackground_logoColor,
        activeMarker: styles.defaultBackground_activeMarker,
      };
    if ((typeof window !== "undefined" && window?.scrollY <= 0) || showTransparentBackground) {
      return {
        bgColor: styles.transparentBackground_bgColor,
        textColor: styles.transparentBackground_textColor,
        logoColor: styles.transparentBackground_logoColor,
        activeMarker: styles.transparentBackground_activeMarker,
      };
    }
    switch (topmostVisibleElement) {
      case LIGHT_BG_NAV:
        return {
          bgColor: styles.defaultBackground_bgColor,
          textColor: styles.lightBackground_textColor,
          logoColor: styles.lightBackground_logoColor,
          activeMarker: styles.lightBackground_activeMarker,
        };
      case DARK_BG_NAV:
        return {
          bgColor: styles.defaultBackground_bgColor,
          textColor: styles.darkBackground_textColor,
          logoColor: styles.darkBackground_logoColor,
          activeMarker: styles.darkBackground_activeMarker,
        };
      case BLUE_BG_NAV:
        return {
          bgColor: styles.defaultBackground_bgColor,
          textColor: styles.blueBackground_textColor,
          logoColor: styles.blueBackground_logoColor,
          activeMarker: styles.blueBackground_activeMarker,
        };
      default:
        return {
          bgColor: styles.defaultBackground_bgColor,
          textColor: styles.defaultBackground_textColor,
          logoColor: styles.defaultBackground_logoColor,
          activeMarker: styles.defaultBackground_activeMarker,
        };
    }
  }, [topmostVisibleElement, isMobileNavActive, showTransparentBackground]);

  function updateNav() {
    const currentRegion = [...document.querySelectorAll(`[${CUSTOM_ID}]`)].find((e: Element) => {
      const rect = e.getBoundingClientRect();
      return rect.bottom > 64 && rect.bottom - 64 <= rect.height; //64 is height of navbar
    });
    const customId = currentRegion?.getAttribute(CUSTOM_ID) ?? "";
    setTopmostVisibleElement(customId);
    changeTransperentBackground();
  }

  useEffect(() => {
    const onScrollEvent = () => updateNav();
    window.addEventListener("DOMContentLoaded", updateNav);
    window.addEventListener("scroll", onScrollEvent);
    return () => {
      window.removeEventListener("scroll", onScrollEvent);
      window.removeEventListener("DOMContentLoaded", updateNav);
    };
  }, []);

  const handleActiveMarker = (e: React.SyntheticEvent) => {
    const navItemLeft = (e.target as HTMLDivElement).offsetLeft + "px";
    const navItemWidth = (e.target as HTMLDivElement).offsetWidth + "px";
    setActiveMarkerStyle({ ...activeMarkerStyle, left: navItemLeft, width: navItemWidth });
    setIsBorderHidden(true);
    setIsHovered(true);
  };

  const resetActiveMarker = () => {
    if (sliderPosition && Object.keys(sliderPosition).length) {
      setActiveMarkerStyle({ ...activeMarkerStyle, ...sliderPosition });
    } else {
      setActiveMarkerStyle({ ...activeMarkerStyle, width: 0 });
    }
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isHovered) {
      setActiveMarkerStyle({ ...sliderPosition });
    }
  }, [sliderPosition]);

  return (
    <header
      className={`${styles.headerWrapper} ${isMobileNavActive ? styles.mobileNavActive : ""} ${
        getDynamicClass?.bgColor
      }`}
    >
      <div className={`content ${styles.container}`}>
        <div className={styles.headerContainer}>
          <div className={styles.leftSection}>
            <div className={styles.logoContainer}>
              <Link href="/" onClick={hideMobileNav}>
                <DynamicCoditasLogo className={`${styles.logo} ${getDynamicClass?.logoColor}`} />
              </Link>
            </div>
          </div>
          <div className={styles.rightSection}>
            <nav className={styles.navContainer} onMouseLeave={resetActiveMarker}>
              <div
                className={`${styles.activeMarker} ${getDynamicClass?.activeMarker} ${
                  isBorderHidden ? "" : styles.hideActiveMarker
                }`}
                style={{ ...activeMarkerStyle }}
              />
              {navItems?.map((navItem: INavItem, index: number) => {
                return (
                  <NavItem
                    navItem={navItem}
                    key={index}
                    className={getDynamicClass?.textColor}
                    navBarTheme={topmostVisibleElement}
                    handleActiveMarker={handleActiveMarker}
                    setSliderPosition={setSliderPosition}
                    isBorderHidden={isBorderHidden}
                  />
                );
              })}
            </nav>
            <button className={styles.hamberContainer} onClick={toggleMobilNav}>
              <Hamberger className={`${styles.hambergerIcon} ${getDynamicClass?.logoColor}`} />
            </button>
          </div>
        </div>

        {isMobileNavActive && <MobileNavBar toggleMobilNav={toggleMobilNav} navItems={navItems}/>}
      </div>
    </header>
  );
};

export default Header;
