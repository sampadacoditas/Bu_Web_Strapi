interface caseStudyDecsriptiveSection {
  [key: string]: string;
}

export interface ICaseStudyWhiteCard {
  id: number | string;
  description: string;
  caseStudyDecsriptiveSection: caseStudyDecsriptiveSection;
  img: string;
  pills: string[];
  customClassCardWrapper?: string;
  theme?: string;
  link?: string;
  cardBtnText?: string;
  pillsArr: any;
}
