import { ISvgComponent } from "./ISvgComponent";
import { ReactComponent as PrevIcon } from "@/assets/icons/leftArrow.svg";
import { ReactComponent as NextIcon } from "@/assets/icons/rightArrow.svg";

const SVGComponent = (props: ISvgComponent) => {
  const svgKeyMapping = {
    leftArrow: PrevIcon,
    rightArrow: NextIcon,
  };
  const SvgReactComponent = svgKeyMapping[props.name as keyof typeof svgKeyMapping];
  return <SvgReactComponent {...props} />;
};

export default SVGComponent;
