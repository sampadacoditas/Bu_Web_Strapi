import { CustomImage } from "..";
import style from "./Circle.module.scss";
import { ICircle } from "./ICircle";

const Circle = (props: ICircle) => {
  const { icon, customClass } = props;
  return (
    <div className={`${style.circleContainer}  ${customClass}`}>
      <CustomImage src={icon} className={style.iconContainer} alt="Circle" />
    </div>
  );
};

export default Circle;
