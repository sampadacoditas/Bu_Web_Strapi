import { ICrumbs } from "@/components/BreadCrumbs/IBreadCrumbs";

export interface ICaseStudyDecsriptiveSection {
  overview?: string;
  overviewDescription: string;
  businessChallenge?: string;
  businessDescription: string;
  ourSolution?: string;
  ourSolutionDescription: string;
  ourSolutionArray: string[];
  businessDescriptionArray: string[];
  technologies?: string;
  technologyList: string[];
  showBusinessDescriptionBackground?: boolean;
}

export interface ICaseStudyDetails {
  id: number;
  serviceName: string;
  tag: string;
  description: string;
  image: string;
  link: string;
  bannerImg?: string;
  bannerSideImg?: string;
  outcomeImg?: string;
  outcomeImgMobile?: string;
  outcomeHeading: string;
  outcomeSubText: string;
  outcomeArray: string[];
  bannerTitle: string;
  caseStudyDecsriptiveSection: ICaseStudyDecsriptiveSection;
  breadcrumbs: ICrumbs[];
}
