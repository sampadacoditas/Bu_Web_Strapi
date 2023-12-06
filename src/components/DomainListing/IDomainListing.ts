export interface DomainListing {
  title: string;
  openings: number;
}

export interface IDomainListing {
  contentContainerStyle: string;
  domainListing: Array<DomainListing>;
  handleViewOpenings: (category: string) => void;
  redirectApplyDirectForm: () => void;
  loading: boolean;
  constant: {[key: string]: string};
}
