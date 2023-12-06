import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useWindowWidth from "@/hooks/useWindowWidth";
import { INavItemContainer, ISubNavItem } from "./INavItem";
import { LIGHT_BG_NAV, DARK_BG_NAV, BLUE_BG_NAV } from "@/constants/constants";
import styles from "./NavItem.module.scss";
import { ReactComponent as DownArrow } from "@/assets/icons/rightChevron.svg";

const NavItem = (props: INavItemContainer) => {
  const {
    navItem,
    type = "Nav",
    className = "",
    toggleMobilNav,
    navBarTheme,
    handleActiveMarker,
    setSliderPosition,
    isBorderHidden,
  } = props;
  const [isDropdownContentActive, setIsDropdownContentActive] = useState(false);
  const ref = useRef<any>(null);
  const { isMobileView, isTabletView } = useWindowWidth();
  const { push, pathname:currentPathname } = useRouter();
  const pathParts = currentPathname.split("/");
  const isDesktopView = !isMobileView && !isTabletView;

  const getDynamicClass = useMemo(() => {
    switch (navBarTheme) {
      case LIGHT_BG_NAV:
        return {
          active: styles.lightActive,
          hover: styles.lightHover,
          arrowIcon: styles.lightArrow,
        };
      case DARK_BG_NAV:
        return {
          active: styles.darkActive,
          hover: styles.darkHover,
          arrowIcon: styles.darkArrow,
        };
      case BLUE_BG_NAV:
        return {
          active: styles.blueActive,
          hover: styles.blueHover,
          arrowIcon: styles.blueArrow,
        };
      default:
        return {
          active: styles.defaultActive,
          hover: styles.defaultHover,
          arrowIcon: styles.defaultArrow,
        };
    }
  }, [navBarTheme]);

  const hideDropdown = () => {
    setIsDropdownContentActive(false);
  };

  const handleMarker = (e: any) => {
    setIsDropdownContentActive(true);
    if (handleActiveMarker) {
      handleActiveMarker(e);
    }
  };

  const toggleDropdownContentActive = () => {
    if (type == "Tab") {
      setIsDropdownContentActive(!isDropdownContentActive);
    }
  };

  const handleAvtiveSubItem = useCallback((parentItem: string) => {
    return pathParts.includes(parentItem.toLowerCase().slice(1));
  }, []);

  const setInitalSliderPosition = useCallback(() => {
    if (isDesktopView && handleAvtiveSubItem(navItem?.routeLink) && ref.current && setSliderPosition) {
      const navItemLeft = ref?.current?.offsetLeft + "px";
      const navItemWidth = ref?.current?.offsetWidth + "px";
      setSliderPosition({ left: navItemLeft, width: navItemWidth });
    }
  }, [
    setSliderPosition,
    isDesktopView,
    handleAvtiveSubItem,
    navItem,
    ref?.current?.offsetLeft,
    ref?.current?.offsetWidth,
  ]);

  useEffect(() => {
    setInitalSliderPosition();
  }, [setInitalSliderPosition]);

  if (!navItem?.subRoutes.length) {
    return (
      <Link
        ref={ref}
        href={navItem?.routeLink}
        onClick={toggleMobilNav}
        onMouseEnter={handleActiveMarker}
        className={handleAvtiveSubItem(navItem.routeLink)
            ? `${styles.navItem} ${getDynamicClass?.active} ${className} ${type == "Tab" ? styles.tabNavItem : ""} ${
                isBorderHidden ? styles.hideNavItem : ""
              }`
            : `${styles.navItem} ${className} ${type == "Tab" ? styles.tabNavItem : ""}`
        }
      >
        <span className={styles.navTitle}>{navItem.routeName}</span>
      </Link>
    );
  }

  if (navItem?.subRoutes.length && type == "Tab") {
    return (
      <div className={styles.tabDropdown}>
        <button
          className={`${styles.dropbtn} ${handleAvtiveSubItem(navItem.routeLink) ? styles.activeTab : ""}`}
          onClick={toggleDropdownContentActive}
        >
          {navItem.routeName}
          <DownArrow className={isDropdownContentActive ? styles.rotateUp : styles.rotateDown} />
        </button>

        <div
          className={`${styles.dropdownContent} ${
            isDropdownContentActive ? `${styles.showDropdownContent}` : styles.hideDropdownContent
          }`}
        >
          {navItem?.subRoutes.map((subItem: ISubNavItem, index: number) => {
            return (
              <Link href={subItem.subRouteLink} onClick={toggleMobilNav} key={index}>
                {subItem.subRouteName}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${styles.dropdown} ${handleAvtiveSubItem(navItem.routeLink) ? getDynamicClass?.active : ""} ${
        getDynamicClass?.hover
      } ${isBorderHidden ? styles.hideNavItem : ""}`}
      onMouseOver={() => setIsDropdownContentActive(true)}
      onMouseOut={() => setIsDropdownContentActive(false)}
    >
      <button className={`${styles.dropbtn} ${className}`} onMouseEnter={handleMarker}>
        {navItem.routeName}
      </button>

      <div
        className={`${styles.dropdownContent} ${
          isDropdownContentActive ? styles.dropdownContentVisible : styles.dropdownContentInvisible
        }`}
      >
        {navItem?.subRoutes.map((subItem: ISubNavItem, index: number) => {
          return (
            <Link href={subItem.subRouteLink} onClick={hideDropdown} key={index}>
              {subItem.subRouteName}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavItem;
