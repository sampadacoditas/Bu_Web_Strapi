export interface ICategoryDescriptionList {
  text?: string;
}

export interface IStudyDescription {
  overview?: string;
  overviewDescription: string;
  businessDescription: string;
  ourSolutionDescription: string;
  businessDescriptionArr: { id: number; desc: string }[];
  ourSolutionAr: { id: number; desc: string }[];
  technologyListArr: { id: number; desc: string }[];
  showBusinessDescriptionBackground?: boolean;
}

export interface IStudyDescriptionSectionProps {
  contentContainerStyle?: string;
  studyDescription: IStudyDescription;
  divider?: string;
}
