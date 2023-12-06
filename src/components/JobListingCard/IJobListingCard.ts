export interface IJobListing {
  title: string;
  jobSummary: string;
  jobDescription: string;
  jobId: string;
}

export interface IJobListingCard {
  jobListing: IJobListing[];
  redirectToJobDescription: (jobId: string, jobTitle: string) => void;
  constant: {[key: string]: string};
  emptyPageData: {[key: string]: string};
}
