import { ICardPropsItem, theme } from "./Card/ICard.ts";
export interface ICaseStudy {
  title: string;
  description: string;
  itemList: ICardPropsItem[];
  image?: string;
  theme?: theme;
  className?: string;
  serviceName?: string;
  showViewAllBtn?: boolean;
}
