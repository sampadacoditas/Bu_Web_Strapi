import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  HeroSection,
  DigitallyTransformed,
  Hiring,
  OurOffices,
  Ourservices,
  Technologies,
  CaseStudySection,
} from "@/components";
import { PAGE_ROUTES, homePageCaseStudyData } from "@/constants/constants";
import style from "./Home.module.scss";
import { getImageUrl } from "@/utils/helper";

const Home = (props: any) => {
  const { attributes: pageData, caseStudyResp } = props;

  const { push } = useRouter();

  const filteredCaseStudies = (caseStudyData: any) => {
    let filteredData: any = [];
    homePageCaseStudyData?.forEach(key => {
      const matchingData = caseStudyData?.find((data: any) => data.attributes.primary_key === key);
      if (matchingData) {
        filteredData?.push(matchingData?.attributes);
      }
    });
    return filteredData;
  };
  console.log(pageData);
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    titleArray: pageData?.cardArray1,
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };

  const digitallyTransformedData = {
    headerData: {
      header: pageData?.digitallyTransformedSection?.headerDetails?.title,
      desc: pageData?.digitallyTransformedSection?.headerDetails?.desc,
    },
    cardsArray: pageData?.digitallyTransformedSection?.digitallyTransformedImages || [],
  };

  const ourServicesData = {
    headerData: {
      header: pageData?.ourServicesCardsSection?.headerDetails?.title,
      desc: pageData?.ourServicesCardsSection?.headerDetails?.desc,
    },
    cardsArray: pageData?.ourServicesCardsSection?.serviceCards || [],
    buttonLabels: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: pageData?.ourServicesCardsSection?.cardBtnText,
    },
    commonSvgs: pageData?.commonSvgs || {},
  };

  const caseStudyData = {
    title: pageData?.sectionTitle1,
    description: pageData?.description1,
    itemList: filteredCaseStudies(caseStudyResp) || [],
    cardBtnText: pageData?.caseStudyBtnText,
  };

  const technologyData = {
    headerData: {
      header: pageData?.technologyImageSection?.headerDetails?.title,
      desc: pageData?.technologyImageSection?.headerDetails?.desc,
    },
    cardsArray: pageData?.technologyImageSection?.technologyImages || {},
  };

  const hiringNowData = {
    headerData: {
      header: pageData?.hiringNowSection?.headerDetails?.title,
      desc: pageData?.hiringNowSection?.headerDetails?.desc,
    },
    cardsArray: pageData?.hiringNowSection?.hiringNowCards || [],
  };

  const ourOfficesData = {
    title: pageData?.ourOfficeSection?.headerDetails?.title,
    addressData: pageData?.ourOfficeSection?.ourOffice || [],
    map: getImageUrl(pageData?.map),
    commonSvgs: pageData?.commonSvgs,
    mappedSvgs: pageData?.mappedSvgs,
  };

  useEffect(() => {
    const homePage = document.getElementById("homePage");
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
    homePage?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={style.homePage} id="homePage">
      <HeroSection
        {...heroSectionData}
        image={heroSectionData?.image}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={() => push(PAGE_ROUTES.CONTACT_US)}
        page={"home"}
      />
      <DigitallyTransformed
        hasImagesArray={true}
        imagesArray={digitallyTransformedData?.cardsArray}
        subTitle={digitallyTransformedData?.headerData?.desc}
        titleText={digitallyTransformedData?.headerData?.header}
      />
      <Ourservices
        headerData={{
          header: ourServicesData?.headerData?.header,
          desc: ourServicesData?.headerData?.desc,
        }}
        cardsArray={ourServicesData?.cardsArray}
        buttonLabel={ourServicesData?.buttonLabels}
        commonSvgs={ourServicesData?.commonSvgs}
        hasCardButton={true}
        hasViewMoreButton={true}
        bottomContainerCustomClass="homePageBottomSection"
        bottomContainerDynamicClass={style.ourServicesBtnContainer}
      />
      <CaseStudySection
        {...caseStudyData}
        moreCaseStudyData={pageData?.cardArray2}
        showMoreCard={true}
        showBigCaseStudyCard={true}
        customWrapperClass={style.caseStudyContainer}
      />
      <Technologies
        title={technologyData?.headerData?.header}
        description={technologyData?.headerData?.desc}
        imagesArray={technologyData?.cardsArray}
      />
      <Hiring
        title={hiringNowData?.headerData?.header}
        description={hiringNowData?.headerData?.desc}
        cards={hiringNowData?.cardsArray}
      />
      <OurOffices {...ourOfficesData} map={ourOfficesData?.map} />
    </div>
  );
};

export default Home;
