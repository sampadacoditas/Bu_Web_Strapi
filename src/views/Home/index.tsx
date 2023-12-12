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
import { getImageUrl, mapArrayImages } from "@/utils/helper";

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
  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    titleArray: pageData?.heroBannerSection?.typistText,
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg,
  };

  const [digitalTransform, ourServices, tech, hiringNow, ourOffices, ourWorkObject, svgObject] =
    pageData?.pageComponents;
    // const [markerInactiveObjecct, markerActiveObject, crossIconObject, doodleDotsRightObject, doodleDotsLeftObject] =
    //   svgObject.svgs;
    // const [svgs] = svgObject.svgs;
    // console.log(svgObject);
    
    const commonSvgs = mapArrayImages(svgObject)

  const digitallyTransformedData = {
    headerData: {
      header: digitalTransform?.headerDetails?.title,
      desc: digitalTransform?.headerDetails?.desc,
    },
    cardsArray: digitalTransform?.digitallyTransformedImages || [],
  };

  const ourServicesData = {
    headerData: {
      header: ourServices?.headerDetails?.title,
      desc: ourServices?.headerDetails?.desc,
    },
    cardsArray: ourServices?.serviceCards || [],
    buttonLabels: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: ourServices?.cardBtnText,
    },
    // commonSvgs: pageData?.commonSvgs || {},
    commonSvgs: commonSvgs || {},
  };

  const caseStudyData = {
    title: ourWorkObject?.headerDetails.title,
    description: ourWorkObject?.headerDetails.desc,
    itemList: filteredCaseStudies(caseStudyResp) || [],
    cardBtnText: pageData?.caseStudyBtnText,
  };

  const technologyData = {
    headerData: {
      header: tech?.headerDetails?.title,
      desc: tech?.headerDetails?.desc,
    },
    cardsArray: tech?.technologyImages || {},
  };

  const hiringNowData = {
    headerData: {
      header: hiringNow?.headerDetails?.title,
      desc: hiringNow?.headerDetails?.desc,
    },
    cardsArray: hiringNow?.hiringNowCards || [],
  };

  const ourOfficesData = {
    title: ourOffices?.heading,
    addressData: ourOffices?.ourOffice || [],
    map: getImageUrl(ourOffices?.map),
    // commonSvgs: pageData?.commonSvgs,
    commonSvgs: commonSvgs,
    mappedSvgs: pageData?.mappedSvgs,
  };

  console.log("Map src : ", ourOfficesData?.map);
  console.log("pageData : ", pageData)

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
        moreCaseStudyData={ourWorkObject?.ourWorkCards}
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
