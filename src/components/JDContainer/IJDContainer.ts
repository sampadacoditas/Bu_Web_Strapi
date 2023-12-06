export interface JDCardType {
  location: string | undefined;
  jobType: string | undefined;
  department: string | undefined;
  minExperience: string | undefined;
  redirectTo?: string | undefined;
  jobDescription?: string;
  jobDomain?: string | undefined;
  city?: string | undefined;
  workExpRequired?: string | undefined;
  jdContainerData?: IJdContainerData;
}

export interface RolesAndResponsibilities {
  id: number;
  role: string;
}

export interface TechnicalSkills {
  id: number;
  skill: string;
}

export interface YouShouldHave {
  id: number;
  data: string;
}
export interface JobDescriptionType {
  jobDescription: string;
  rolesAndResponsibilities: Array<RolesAndResponsibilities>;
  technicalSkills: Array<TechnicalSkills>;
  youShouldHave: Array<YouShouldHave>;
  jobDetails: JDCardType;
}

export interface IJobCardDetails {
  department: string | undefined;
  jobType: string | undefined;
  city?: string | undefined;
  workExpRequired?: string | undefined;
  minExperience: string | undefined;
  location: string | undefined;
}

export interface IJdContainerData {
  jobDescriptionIcons: {[key: string]: string};
  jobDescriptionLabels: {[key: string]: string}
}

export interface IJDContainer {
  apiDataHandler: (arg: any) => void;
  pageErrorSetter: (arg: any) => void;
  jdContainerData: IJdContainerData;
}
