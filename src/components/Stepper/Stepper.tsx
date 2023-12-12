import { StepType, StepperProps } from "./IStepper";
import { FORM_SECTION } from "@/views/Careers/ApplyJobForm.constants";
import style from "./Stepper.module.scss";
import { Fragment } from "react";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";

const Stepper = (props: StepperProps) => {
  const { activeStep, values, commonSvgs = {} } = props;
  return (
    <div>
      <div className={style.stepperWrapper}>
        {values?.map((_item: StepType, index: number) => {
          const showProgressLine = index !== values?.length && index >= 1;
          return (
            <Fragment key={index}>
              {showProgressLine && (
                <div
                  className={
                    activeStep >= index ? `${style.progressLine} ${style.activeLine}` : `${style.progressLine}`
                  }
                ></div>
              )}
              <div>
                <div className={activeStep >= index ? `${style.stepCount} ${style.active}` : `${style.stepCount}`}>
                  {activeStep > index ? (
                    <CustomImage src={getImageUrl(commonSvgs?.greenTick)} alt="Done" />
                  ) : activeStep >= index ? (
                    <CustomImage src={getImageUrl(commonSvgs?.activeStep)} alt="Active" />
                  ) : (
                    <CustomImage src={getImageUrl(commonSvgs?.disabledStep)} alt="Disabled" />
                  )}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className={style.stepperText}>
        <span className={activeStep == 0 ? style.activeStep1 : style.basicDetails}>{FORM_SECTION?.STEPPER?.STEP1}</span>
        <span className={activeStep == 1 ? style.activeStep2 : style.workDetails}>{FORM_SECTION?.STEPPER?.STEP2}</span>
      </div>
    </div>
  );
};
export default Stepper;
