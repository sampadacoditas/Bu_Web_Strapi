import { useState, useEffect } from "react";
import Typist from "react-typist-component";
import { Button, CustomImage } from "@/components";
import { IHeroSection } from "./IHeroSection";
import style from "./HeroSection.module.scss";
import { getImageUrl } from "@/utils/helper";

const HeroSection = (props: IHeroSection) => {
  const {
    title,
    description,
    image,
    backgroundPosition = "center",
    contentContainerStyle,
    heroSectionGradientStyle,
    showContactUsButton = false,
    showJoinUsButton = false,
    handleContactUsClick,
    handleJoinUsClick,
    imagesArray,
    imageArrayText = "",
    customIconStyle,
    customTitleStyle,
    page,
    titleArray,
    buttonText = "",
    buttonSvg = "",
  } = props;

  const [count, setCount] = useState<number>(0);

  const handleSetTimeOut = () => {
    setTimeout(() => {
      setCount(0);
    }, 100);
  };

  const handleSecondButtonVariant = () => {
    return showContactUsButton && showJoinUsButton ? "secondary" : "primary";
  };

  const handleTitleForHome = () => {
    return (
      <>
        {page === "home" ? (
          <div className={style.homeTitle}>
            <div>{titleArray?.digitalEngineering}</div>
            {count ? (
              <Typist cursor={<span>|</span>} avgTypingDelay={100} onTypingDone={() => handleSetTimeOut()}>
                <span>{titleArray?.cleanCoding || " "}</span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={titleArray?.cleanCoding.length} delay={2000} />
                <span>{titleArray?.designThinking || " "}</span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={titleArray?.designThinking.length} delay={2000} />
                <span>{titleArray?.dataScience || " "}</span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={titleArray?.dataScience.length} delay={500} />
                <span>{titleArray?.qualityTesting || " "}</span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={titleArray?.qualityTesting.length} delay={500} />
                <span>{titleArray?.generativeAI || " "}</span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={titleArray?.generativeAI.length} delay={500} />
              </Typist>
            ) : (
              <>
                <span>|</span>
              </>
            )}
          </div>
        ) : (
          <div className={`${style.title} ${customTitleStyle}`}>{title}</div>
        )}
      </>
    );
  };

  useEffect(() => setCount(1), [count]);

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
          {handleTitleForHome()}
          {description && <p className={style.description}>{description}</p>}
          {(showContactUsButton || showJoinUsButton) && (
            <div className={style.buttonsContainer}>
              {showContactUsButton && (
                <Button
                  className={style.contactUsButton}
                  onClick={() => {
                    handleContactUsClick?.();
                  }}
                >
                  <span className={style.iconContainer}>
                    <CustomImage src={`${getImageUrl(buttonSvg)}`} alt="paperplane" className={style.paperplaneSvg} />
                  </span>
                  <span className={style.btnText}>{buttonText}</span>
                </Button>
              )}
              {showJoinUsButton && (
                <Button
                  className={style.joinUsButton}
                  variant={handleSecondButtonVariant()}
                  onClick={() => {
                    handleJoinUsClick?.();
                  }}
                >
                  Join Us
                </Button>
              )}
            </div>
          )}
          {imagesArray && (
            <div className={style.bottomArrayContainer}>
              <div className={style.heroArrayText}>{imageArrayText}</div>
              <div className={style.imageArray}>
                {imagesArray?.map((item, index: number) => {
                  return (
                    <CustomImage
                      key={index}
                      src={getImageUrl(item.imgSrc)}
                      alt={item.altText}
                      className={`${style["bottomArrayContainer-image"]} ${
                        customIconStyle ? style[customIconStyle] : style.heroIcons
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
