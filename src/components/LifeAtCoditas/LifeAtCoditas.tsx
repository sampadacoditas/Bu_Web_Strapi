import React from "react";
import { ILifeAtCoditas } from "./ILifeAtCoditas";
import style from "./LifeAtCoditas.module.scss";
import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { CustomImage } from "..";
import { getImageUrl } from "@/utils/helper";

const LifeAtCoditas = (props: ILifeAtCoditas) => {
  const { contentContainerStyle, title, descriptionList, image } = props;
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.lifeAtCoditasContainer}>
      <div className={`content ${contentContainerStyle}`}>
        <div className={style.lifeAtCoditasLayout}>
          <div className={style.contentSectionLayout}>
            <p className={style.title}>{title}</p>
            <div className={style.descriptionLayout}>
              {descriptionList?.map((ele: { id: number; desc: string }, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <p className={style.description}>{ele?.desc}</p>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className={style.imageLayout}>
            <CustomImage className={style.imgStyle} src={getImageUrl(image)} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtCoditas;
0;
