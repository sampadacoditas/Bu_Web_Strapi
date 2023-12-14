import { useRouter } from "next/router";
import { HeroSection, OurLeadership, OurVision, Ourservices, WhoWeAreSection } from "@/components";
import { PAGE_ROUTES } from "@/constants/constants";
import style from "./AboutUs.module.scss";
import { getImageUrl, mapArrayImages } from "@/utils/helper";

const AboutUs = (props: any) => {
  const { attributes: pageData } = props;
  const { push } = useRouter();

  const [whoAreWeObject, ourServicesObject, visionObject, leadershipObject, svgObject] = pageData.pageComponents;
  
  const commonSvgs = mapArrayImages(svgObject)

  const heroSectionData = {
    title: pageData?.heroBannerSection?.bannerTitle,
    description: pageData?.heroBannerSection?.bannerSubText,
    image: getImageUrl(pageData?.heroBannerSection?.bannerImg),
    buttonText: pageData?.heroBannerSection?.buttonText,
    buttonSvg: pageData?.heroBannerSection?.buttonSvgImg,
  };

  const whoAreWeData = {
    title: whoAreWeObject?.headerDetails?.title,
    whoWeAreDescriptions: whoAreWeObject?.descList,
    whoWeAreCardDetails: whoAreWeObject?.whoAreWeCards || [],
  };

  const ourMissionData = {
    headerData: {
      header: ourServicesObject?.headerDetails.title,
      desc: ourServicesObject?.headerDetails?.desc,
    },
    cardsArray: ourServicesObject?.serviceCards || [],
    commonSvgs: commonSvgs || {},
  };

  const ourVisionData = {
    titletext: visionObject?.title,
    subtitle: visionObject?.desc,
  };

  const meetOurLeadersData = {
    headerData: {
      header: leadershipObject?.headerDetails.title,
      desc: leadershipObject?.headerDetails?.desc,
    },
    cardsArray: leadershipObject?.leadershipCardsData || [],
    buttonLabel: {
      viewMoreBtn: pageData?.viewMoreBtnText,
      viewLessBtn: pageData?.viewLessBtnText,
      cardBtnText: pageData?.cardBtnText,
    },
    commonSvgs: commonSvgs || {},
  };
  return (
    <div className={style.aboutUsPage}>
      <HeroSection
        {...heroSectionData}
        contentContainerStyle={style.heroSectionContentContainer}
        heroSectionGradientStyle={style.heroSectionGradient}
        showContactUsButton={true}
        handleContactUsClick={() => push(PAGE_ROUTES.CONTACT_US)}
      />
      <WhoWeAreSection contentContainerStyle={style.whoWeAreContainer} {...whoAreWeData} />
      <Ourservices
        {...ourMissionData}
        hasCardButton={false}
        bottomContainerDynamicClass={style.bottomContainerDynamicClass}
        showAllCards={true}
        customCardBoxStyle="ourMissionCardBox"
      />
      <OurVision {...ourVisionData} />
      <OurLeadership {...meetOurLeadersData} />
    </div>
  );
};

export default AboutUs;
