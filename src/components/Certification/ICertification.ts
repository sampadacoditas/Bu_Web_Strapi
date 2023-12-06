interface IBadge {
  id: number;
  src: string;
}
export interface ICertification {
  title: string;
  description?: string;
  badgeList: IBadge[];
  customContainerClass?: string;
}
