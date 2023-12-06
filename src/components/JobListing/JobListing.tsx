import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { JobListingCard, Input } from "..";
import { IJobListing } from "./IJobListing";
import style from "./JobListing.module.scss";
import { Loader } from "..";

const JobListing = (props: IJobListing) => {
  const {
    constant,
    contentContainerStyle,
    jobListing,
    searchText,
    setSearchText,
    redirectToJobDescription,
    loading,
    emptyPageData,
    commonSvgs = {},
  } = props;
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.jobListingSection}>
      <div className={`content ${contentContainerStyle}`}>
        <div className={style.jobListLayout}>
          <div className={style.headerSection}>
            <div className={style.title}>{constant?.hiringText || ""}</div>
            <Input
              type="search"
              name="search"
              placeholder={constant?.search}
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className={style.inputWrapper}
              commonSvgs={commonSvgs}
            />
          </div>
          <div>
            {!loading ? (
              <JobListingCard
                constant={constant}
                jobListing={jobListing}
                redirectToJobDescription={redirectToJobDescription}
                emptyPageData={emptyPageData}
              />
            ) : (
              <Loader size="lg" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
