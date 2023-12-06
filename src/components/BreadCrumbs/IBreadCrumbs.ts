export interface ICrumbs {
  label: string;
  url: string;
}
export interface IBreadCrumbs {
  breadCrumbs: ICrumbs[];
  rightArrow?: string;
}
