interface IBadge {
  id: number;
  src: string;
  badge?: string;
}
export interface ICertification {
  title: string;
  description?: string;
  badgeList: IBadge[];
  customContainerClass?: string;
}
