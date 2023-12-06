export interface StepperProps {
  activeStep: number;
  values: { text: string }[];
  commonSvgs?: { [key: string]: string };
}
export interface StepType {
  text: string;
}
