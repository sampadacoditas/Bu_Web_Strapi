export interface ITestimony {
  employeeTestimony: {
    name: string;
    designation: string;
    testimony: string;
    profileImg: any;
  }[];
  heading: string;
  testimonyStyle?: string;
  commonSvgs?: {[key: string]: string};
}
