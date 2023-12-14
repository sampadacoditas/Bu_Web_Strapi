import { IStudyDescriptionSectionProps } from "./IStudyDescriptionSection";
import { STUDY_DESCRIPTION_CONSTANTS } from "./StudyDescription.constant";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import style from "./StudyDescriptionSection.module.scss";
import { sanitize } from "isomorphic-dompurify";
import { CustomImage } from "..";

const StudyDescriptionSection = (props: IStudyDescriptionSectionProps) => {
  const { contentContainerStyle, studyDescription, divider = "" } = props;

  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.studyDescriptionSection}>
      <div className={`content ${contentContainerStyle}`}>
        <div className={style.studyDescriptionLayout}>
          <div className={style.overviewLayout}>
            <div className={style.overviewSection}>
              <p className={style.title}>{studyDescription?.overview || STUDY_DESCRIPTION_CONSTANTS.overview}</p>
              <CustomImage src={divider} alt="Divider" />
            </div>
            <p
              className={style.subTitle}
              dangerouslySetInnerHTML={{ __html: sanitize(studyDescription?.overviewDescription) }}
            />
          </div>
          <div className={style.overviewLayout}>
            <div className={style.overviewSection}>
              <p className={style.title}>{STUDY_DESCRIPTION_CONSTANTS.businessChallenge}</p>
              <CustomImage src={divider} alt="Divider" />
            </div>
            <div className={style.descriptionLayout}>
              <p
                className={
                  studyDescription?.showBusinessDescriptionBackground ? style.highlightedDescription : style.description
                }
                dangerouslySetInnerHTML={{ __html: sanitize(studyDescription?.businessDescription) }}
              />

              {studyDescription?.businessDescriptionArr?.map((list, index: number) => {
                return (
                  <ul key={index} className={style.descriptionList}>
                    <li className={style.list} dangerouslySetInnerHTML={{ __html: sanitize(list?.desc) }} />
                  </ul>
                );
              })}
            </div>
          </div>
          <div className={style.overviewLayout}>
            <div className={style.overviewSection}>
              <p className={style.title}>{STUDY_DESCRIPTION_CONSTANTS.ourSolution}</p>
              <CustomImage src={divider} alt="Divider" />
            </div>
            <div className={style.solutionDescriptionLayout}>
              <p
                className={style.highlightedText}
                dangerouslySetInnerHTML={{ __html: sanitize(studyDescription?.ourSolutionDescription) }}
              />
              {studyDescription?.ourSolutionAr?.map((list, index: number) => {
                return (
                  <ul className={style.solutionList} key={index}>
                    <li className={style.list} dangerouslySetInnerHTML={{ __html: sanitize(list?.desc) }} />
                  </ul>
                );
              })}
            </div>
            <div className={style.technologyIconLayout}>
              <p className={style.title}>{STUDY_DESCRIPTION_CONSTANTS.technologies}:</p>
              <div className={style.iconsLayout}>
                {studyDescription?.technologyListArr?.map((techIcon, index: number) => {
                  return (
                    <span className={style.techIcon} key={index}>
                      {techIcon?.desc}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDescriptionSection;
