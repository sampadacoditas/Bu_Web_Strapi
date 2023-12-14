import { Fragment, useState } from "react";
import style from "./Footer.module.scss";
import { FooterNavLink, MIN_LENGTH } from "./FooterHelper";
import useWindowWidth from "@/hooks/useWindowWidth";
import { INavLinks, IFooterNavLink, IFooterProps } from "./IFooter";
import { CUSTOM_ID, BLUE_BG_NAV } from "@/constants/constants";
import { FOOTER_CONSTANTS } from "./Footer.constant";
import GreatPlaceToWork from "@/assets/images/greatPlaceToWork.png";
import { ReactComponent as CoditasLogo } from "@/assets/icons/coditasLogo.svg";
import { ReactComponent as AddIcon } from "@/assets/icons/addIcon.svg";
import { ReactComponent as MinusIcon } from "@/assets/icons/removeIcon.svg";

import { PAGE_ROUTES } from "@/constants/constants";
import { useRouter } from "next/router";
import Image from "next/image";

const FooterSectionMobileView = (props: IFooterProps) => {
  const { label, expand, setExpand, navList, navItemType } = props;
  console.log("Footer props :", props);
  const openNewTab = navItemType === FOOTER_CONSTANTS.pages;
  const handleFooterTitleClick = () => {
    expand === label ? setExpand && setExpand("") : setExpand && setExpand(label);
  };
  const isLengthMin = navList?.length === MIN_LENGTH;
  return (
    <Fragment>
      <div className={style.footerTitle} onClick={handleFooterTitleClick}>
        {label}
        <div className={style.expand}>{expand === label ? <MinusIcon /> : <AddIcon />}</div>
      </div>
      <ul
        className={`${style.mobileView}  ${expand === label && style.expanded} ${
          expand === label && isLengthMin ? style.expandedMin : ""
        }`}
      >
        {navList.map((navLink: INavLinks, index: number) => (
          <a
            target={navLink?.openInNewTab || !openNewTab ? "_blank" : "_self"}
            rel="noreferrer"
            key={index}
            href={navLink.subRouteLink}
          >
            <li key={index}>{navLink.subRouteName}</li>
          </a>
        ))}
      </ul>
    </Fragment>
  );
};

const FooterSectionView = (props: IFooterProps) => {
  const { label, navList, navItemType } = props;
  const openNewTab = navItemType === FOOTER_CONSTANTS.pages;
  return (
    <Fragment>
      <p className={style.pageText}>{label}</p>
      {navList?.map((item: INavLinks, index: number) => {
        return (
          <p className={style.pageItems} key={index}>
            <a
              target={item?.openInNewTab || !openNewTab ? "_blank" : "_self"}
              rel="noreferrer"
              href={item.subRouteLink}
              className={style.linkLayout}
            >
              {item.subRouteName}
            </a>
          </p>
        );
      })}
    </Fragment>
  );
};

const Footer = (props: any) => {
  const { headerFooterData } = props;
  const [expand, setExpand] = useState<string>("");
  const { isMobileView } = useWindowWidth();
  const { push } = useRouter();

  const handleCompanyLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    push(PAGE_ROUTES.HOME);
  };

  return (
    <div {...{ [CUSTOM_ID]: BLUE_BG_NAV }} className={style.footerLayout}>
      <div className={`content ${style.footerContainer}`}>
        <div className={style.companySection}>
          <div className={style.logoLayout}>
            <CoditasLogo className={style.coditasText} onClick={() => handleCompanyLogoClick()} />
          </div>
          <p className={style.coditasLogo}>{headerFooterData?.copyrightText}</p>
          <p className={style.rightsReservedSection}>{headerFooterData?.copyrightTextReservedText}</p>
        </div>
        {isMobileView ? (
          <div className={style.mobileSectionLayout}>
            {headerFooterData?.footerData?.map((navItem: IFooterNavLink, index: number) => {
              return (
                <div key={index} className={style.links}>
                  <FooterSectionMobileView
                    label={navItem.routeName}
                    setExpand={setExpand}
                    expand={expand}
                    navList={navItem.subRoutes}
                    navItemType={navItem.routeName}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <Fragment>
            {headerFooterData?.footerData?.map((navItem: IFooterNavLink, index: number) => {
              return (
                <div className={style.pagesSection} key={index}>
                  <FooterSectionView
                    label={navItem.routeName}
                    navList={navItem.subRoutes}
                    navItemType={navItem.routeName}
                  />
                </div>
              );
            })}
          </Fragment>
        )}
      </div>
      <div className={style.greatPlaceLayout}>
        <Image
          className={`${style.imageStyle} ${style.customImageContainer}`}
          src={GreatPlaceToWork?.src}
          alt={FOOTER_CONSTANTS.greatPlaceToWork}
          width={0}
          height={0}
        />
        <div className={style.careerContentLayout}>
          <p className={style.careerText}>{FOOTER_CONSTANTS.buildYourCareer}</p>
          <p className={style.careerPara}>{FOOTER_CONSTANTS.certifiedGreatPlace}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
