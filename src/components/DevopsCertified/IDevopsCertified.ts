export interface IBadge {
  id: number;
  badge: string;
}

export interface IDevopsCertified {
  CONSTANTS: { [Key: string]: string };
  badges: IBadge[];
  customContainerClass?: string;
}
