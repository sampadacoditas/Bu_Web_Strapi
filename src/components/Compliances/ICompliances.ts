import { StaticImageData } from "next/image";

export interface ICompliances {
  title: string;
  image: string;
  description: string;
  customClass?: string;
}

export interface ICompliancesProps {
  title?: string;
  subtext?: string;
  compliancesContent: ICompliances[]
}
