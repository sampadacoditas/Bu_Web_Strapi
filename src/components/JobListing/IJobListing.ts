export interface IJobListingCard {
  title: string;
  jobSummary: string;
  jobDescription: string;
  jobId: string;
}

export interface IJobListing {
  contentContainerStyle: string;
  jobListing: IJobListingCard[];
  searchText: string;
  setSearchText: (val: string) => void;
  redirectToJobDescription: (jobId: string, jobTitle: string) => void;
  loading: boolean;
  constant: { [key: string]: string };
  emptyPageData: { [key: string]: string };
  commonSvgs?: { [key: string]: string };
}
