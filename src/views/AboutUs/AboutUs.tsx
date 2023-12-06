import { useRouter } from "next/router";
import { HeroSection, OurLeadership, OurVision, Ourservices, WhoWeAreSection } from "@/components";
import { PAGE_ROUTES } from "@/constants/constants";
import style from "./AboutUs.module.scss";
import { getImageUrl } from "@/utils/helper";

const AboutUs = (props: any) => {
  const { push } = useRouter();
  const { attributes: pageData } = props;

  console.log("pageData", pageData);

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg?.data?.attributes?.url,
  };

  const whoAreWeData = {
    headerData: {
      header: pageData?.sectionTitle1,
      desc: pageData?.cardArray2,
    },
    cardsArray: pageData?.ourWorkCards || [],
  };

  const ourMissionData = {
    headerData: {
      header: pageData?.sectionTitle2,
      desc: pageData?.description2,
    },
    cardsArray: pageData?.ourServicesCards || [],
    commonSvgs: pageData?.commonSvgs || {},
  };

  const ourVisionData = {
    header: pageData?.sectionTitle3,
    desc: pageData?.description3,
  };

  const meetOurLeadersData = {
    headerData: {
      header: pageData?.sectionTitle4,
      desc: pageData?.description4,
    },
    cardsArray: pageData?.cardArray1 || [],
    buttonLabel: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: pageData?.serviceBtnText,
    },
    commonSvgs: pageData?.commonSvgs,
  };
  return (
    <div className={style.aboutUsPage}>
      <HeroSection
        title={heroSectionData?.title}
        description={heroSectionData?.description}
        image={heroSectionData?.image}
        buttonText={heroSectionData?.buttonText}
        buttonSvg={heroSectionData?.buttonSvg}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={() => push(PAGE_ROUTES.CONTACT_US)}
      />
      <WhoWeAreSection
        contentContainerStyle={style.whoWeAreContainer}
        title={whoAreWeData?.headerData?.header}
        whoWeAreDescriptions={whoAreWeData?.headerData?.desc}
        whoWeAreCardDetails={whoAreWeData?.cardsArray}
      />
      <Ourservices
        {...ourMissionData}
        hasCardButton={false}
        bottomContainerDynamicClass={style.bottomContainerDynamicClass}
        showAllCards={true}
        customCardBoxStyle="ourMissionCardBox"
      />
      <OurVision titletext={ourVisionData?.header} subtitle={ourVisionData?.desc} />
      <OurLeadership {...meetOurLeadersData} />
    </div>
  );
};

export default AboutUs;
