import { ITooltip } from "./ITooltip";
import style from "./Tooltip.module.scss";
import React, { useState } from "react";

const Tooltip = (props: ITooltip) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const children = React.cloneElement(props.children, {
    istooltipactive: isActive ? true : undefined,
  });

  return (
    <div className={style.tooltipWrapper} onMouseOver={() => setIsActive(true)} onMouseOut={() => setIsActive(false)}>
      {children}

      <span
        className={`${style.tooltipTip} ${style[props.tooltipPosition || "top"]} ${
          isActive ? style.showTooltip : style.hideTooltip
        }`}
      >
        {props.content}
      </span>
    </div>
  );
};

export default Tooltip;
