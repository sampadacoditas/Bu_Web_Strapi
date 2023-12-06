export default interface ITabs {
  tabs: string[];
  parentCallbackOnTabChange(arg: number): void;
  activeTab?: number;
  className?: string;
}
