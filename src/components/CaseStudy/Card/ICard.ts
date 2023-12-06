export type theme = "dark" | "light";

interface CustomStyle {
  imgHeight: string;
}

export interface ICardPropsItem {
  id: number | string;
  tag: string | null;
  description: string;
  image: string;
  link: string;
  linkText?: string;
  isExternalLink?: boolean;
}

export interface ICardProps {
  item: ICardPropsItem;
  theme?: theme;
  customStyle?: CustomStyle;
}
