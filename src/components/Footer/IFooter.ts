export interface INavLinks {
  subRouteName: string;
  subRouteLink: string;
  openInNewTab?: boolean;
}

export interface IFooterNavLink {
  routeName: string;
  subRoutes: INavLinks[];
}

export interface IFooterProps {
  label: string;
  setExpand?: (label: string) => void;
  expand?: string;
  navList: INavLinks[];
  navItemType?: string;
}
