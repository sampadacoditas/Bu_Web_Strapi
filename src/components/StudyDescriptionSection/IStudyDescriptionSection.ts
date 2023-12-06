export interface ICategoryDescriptionList {
  text?: string;
}

export interface IStudyDescription {
  overview?: string;
  overviewDescription: string;
  businessDescription: string;
  ourSolutionDescription: string;
  businessDescriptionArray: string[];
  ourSolutionArray: string[];
  technologyList: string[];
  showBusinessDescriptionBackground?: boolean;
}

export interface IStudyDescriptionSectionProps {
  contentContainerStyle?: string;
  studyDescription: IStudyDescription;
}
