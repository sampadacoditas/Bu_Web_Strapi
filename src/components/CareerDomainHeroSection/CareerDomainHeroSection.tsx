import { BreadCrumbs } from "..";
import { ICarrerHeroDomainSection } from "./ICareerDomainHeroSection";
import style from "./CareerDomainHeroSection.module.scss";

const CareerDomainHeroSection = (props: ICarrerHeroDomainSection) => {
  const {
    title,
    contentContainerStyle,
    heroSectionGradientStyle,
    image,
    backgroundPosition = "center",
    navigationList,
    rightArrow = "",
  } = props;
  return (
    <div
      className={style.heroSection}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: backgroundPosition,
      }}
    >
      <div className={heroSectionGradientStyle}>
        <div className={`content ${contentContainerStyle}`}>
          <div className={style.contentLayout}>
            <div className={style.breadCrumbLayout}>
              <BreadCrumbs breadCrumbs={navigationList} rightArrow={rightArrow} />
            </div>
            <p className={style.title}>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDomainHeroSection;
