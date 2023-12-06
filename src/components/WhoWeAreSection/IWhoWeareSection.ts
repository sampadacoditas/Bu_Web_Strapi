import { ReactNode } from "react";

export interface IWhoWeAreCardDetail {
  icon: string;
  cardTitle: string;
  cardDescription: string;
}

export interface IWhoWeAreDescriptions {
  description: string;
}

export interface IWhoWeAreSectionProps {
  contentContainerStyle?: string;
  title?: string;
  whoWeAreDescriptions?: IWhoWeAreDescriptions[];
  whoWeAreCardDetails?: IWhoWeAreCardDetail[];
}
