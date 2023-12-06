import { ICardPropsItem } from "@/components/CaseStudy/Card/ICard";

export interface ICaseStudy {
  title: string;
  description: string;
  itemList: ICardPropsItem[];
  className?: string;
  customWrapperClass?: string;
  showBigCaseStudyCard?: boolean;
  showMoreCard?: boolean;
  serviceName?: string;
  theme?: string;
  showViewAllBtn?: boolean;
}
