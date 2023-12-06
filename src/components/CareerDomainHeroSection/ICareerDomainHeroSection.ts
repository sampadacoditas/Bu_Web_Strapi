export interface INavigationList {
  label: string;
  url: string;
}
export interface ICarrerHeroDomainSection {
  title: string | undefined;
  contentContainerStyle: string;
  heroSectionGradientStyle: string;
  image: string;
  backgroundPosition?: string | undefined;
  navigationList: INavigationList[];
  rightArrow?: string;
}
