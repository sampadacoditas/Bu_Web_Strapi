import { ICrumbs } from "../BreadCrumbs/IBreadCrumbs";

export interface ICaseStudyHeroSection {
  title: string;
  image?: string;
  backgroundPosition?: string;
  contentContainerStyle?: string;
  heroSectionGradientStyle: string;
  breadCrumbs: ICrumbs[];
  sideImg?: string;
  commonSvgs?: { [key: string]: string };
}
