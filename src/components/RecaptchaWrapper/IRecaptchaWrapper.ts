export interface IRecaptchaWrapper {
  label?: string;
  selected: boolean;
  setIsSelected: (arg: boolean) => any;
  commonSvgs?: {[key: string]: string}
}
