export interface IDomainListing {
  title: string;
  openings: number;
}
export interface IDomainListingCard {
  domainListing: Array<IDomainListing>;
  handleViewOpenings: (category: string) => void;
  redirectApplyDirectForm: () => void;
  loading: boolean;
  constant: {[key: string]: string};
}
