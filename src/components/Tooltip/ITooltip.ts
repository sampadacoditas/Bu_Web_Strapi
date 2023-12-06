type tooltipPosition = "top" | "bottom" | "left" | "right";

export interface ITooltip {
  children: any;
  content: any;
  tooltipPosition?: tooltipPosition;
}
