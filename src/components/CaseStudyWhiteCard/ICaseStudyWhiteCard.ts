interface caseStudyDecsriptiveSection {
  [key: string]: string;
}

export interface ICaseStudyWhiteCard {
  id: number | string;
  description: string;
  caseStudyDecsriptiveSection: caseStudyDecsriptiveSection;
  image: string;
  pills: string[];
  customClassCardWrapper?: string;
  theme?: string;
  link?: string;
  cardBtnText?: string;
}
