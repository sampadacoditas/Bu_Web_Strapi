type NavItemType = "Nav" | "Tab";

export interface ISubNavItem {
  subRouteName: string;
  subRouteLink: string;
}

export interface INavItem {
  routeName: string;
  routeLink: string;
  subRoutes: ISubNavItem[];
}

export interface INavItemContainer {
  navItem: INavItem;
  type?: NavItemType;
  className?: string;
  toggleMobilNav?: () => void;
  navBarTheme?: string;
  handleActiveMarker?: (e: React.SyntheticEvent) => any;
  setSliderPosition?: (data: any) => void;
  isBorderHidden?: boolean;
}
