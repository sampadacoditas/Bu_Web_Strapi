import { useState } from "react";
import { ITestimony } from "./ITestimony";
import { CUSTOM_ID, DARK_BG_NAV } from "@/constants/constants";
import style from "./Testimony.module.scss";
import { CustomImage } from "..";

const Testimony = (props: ITestimony) => {
  const { employeeTestimony, heading, testimonyStyle, commonSvgs = {} } = props;
  const [active, setActive] = useState<number>(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(false);

  const handleNext = () => {
    setActive(active === employeeTestimony?.length - 1 ? active : active + 1);
    setPrevBtnDisabled(false);
    const disabledState = active + 1 === employeeTestimony?.length - 1 ? true : false;
    setNextBtnDisabled(disabledState);
  };

  const handlePrev = () => {
    setActive(active === 0 ? employeeTestimony?.length - 1 : active - 1);
    setNextBtnDisabled(false);
    const disabledState = active - 1 === 0 ? true : false;
    setPrevBtnDisabled(disabledState);
  };
  const handleNoAction = () => {
    setPrevBtnDisabled(true);
  };
  const handleNoActionNext = () => {
    setNextBtnDisabled(true);
  };

  return (
    <div {...{ [CUSTOM_ID]: DARK_BG_NAV }} className={style.wrapper}>
      <div className={`content ${style.container}`}>
        <div className={style.heading}>{heading}</div>
        {employeeTestimony?.map((item, index: number) => {
          return (
            <div
              key={index}
              className={
                index === active
                  ? `${style.testimonyContent} ${style.active}`
                  : `${style.testimonyContent} ${style.inactive}`
              }
            >
              <div className={style.profileImgMob}>
                <CustomImage src={commonSvgs?.zigzagLines || ""} className={style.zigzag} alt="Zig Zag Lines" />
                <CustomImage src={commonSvgs?.blueCircle || ""} className={style.blueCircle} alt="Blue Circle" />
                <CustomImage src={item?.profileImg} className={style.personMob} alt="Profile" />
              </div>
              <CustomImage src={commonSvgs?.qoute || ""} className={style.quote} alt="Quote" />
              <div className={style.description}>
                <CustomImage src={commonSvgs?.comma || ""} className={`${style.comma} ${testimonyStyle}`} alt="Comma" />
                <div className={style.testimony}>{item?.testimony}</div>
                <div className={style.name}>{item?.name}</div>
                <div className={style.designation}>{item?.designation}</div>
              </div>
              <div className={style.emptyDiv}></div>
              <div className={style.profileImg}>
                <CustomImage src={commonSvgs?.zigzagLines} className={style.zigzag} alt="Zig Zag Lines" />
                <CustomImage src={commonSvgs?.blueCircle} className={style.blueCircle} alt="Blue Circle" />
                <CustomImage src={item?.profileImg} className={style.person} alt="Profile" />
              </div>
            </div>
          );
        })}

        <div className={style.buttons}>
          <CustomImage
            src={prevBtnDisabled ? commonSvgs?.disabledLeftBtn : commonSvgs?.enabledLeftBtn}
            onClick={!prevBtnDisabled ? handlePrev : handleNoAction}
            alt="Left Arrow"
            className={style.btnArrow}
          />
          <CustomImage
            src={nextBtnDisabled ? commonSvgs?.disabledRightBtn : commonSvgs?.enabledRightBtn}
            onClick={!nextBtnDisabled ? handleNext : handleNoActionNext}
            alt="Right Arrow"
            className={style.btnArrow}
          />
        </div>
      </div>
    </div>
  );
};
export default Testimony;
