import { EmptyPage } from "..";
import { IJobListingCard, IJobListing } from "./IJobListingCard";
import style from "./JobListingCard.module.scss";

const JobListingCard = (props: IJobListingCard) => {
  const { constant, jobListing, redirectToJobDescription, emptyPageData } = props;
  return (
    <div className={style.jobListingCardLayout}>
      {jobListing.length ? (
        jobListing?.map((list: IJobListing, index: number) => {
          return (
            <div
              key={index}
              className={style.jobListingCard}
              onClick={() => redirectToJobDescription(list.jobId, list.title)}
            >
              <p className={style.jobTitle}>{list.title}</p>
              <p className={style.jobDescription}>{list.jobSummary}</p>
              <p className={style.jobDetails}>{constant?.viewDetails || ""}</p>
            </div>
          );
        })
      ) : (
        <EmptyPage className={style.emptyPage} {...emptyPageData} />
      )}
    </div>
  );
};

export default JobListingCard;
