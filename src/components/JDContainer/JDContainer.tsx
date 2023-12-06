import { Fragment, useEffect, useState } from "react";
import { Button, CustomImage } from "..";
import { JDCardType, IJobCardDetails, IJDContainer } from "./IJDContainer";
import styles from "./JDContainer.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";
import { jDContainerData } from "@/views/Careers/CareerJobDescription/JDContainer.data";
import { PAGE_ROUTES, CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { getCareerJobDescription } from "./JDContainer.service";
import { sanitize } from "isomorphic-dompurify";
import { useRouter } from "next/router";

const JDCard = (cardData: JDCardType) => {
  const {
    department,
    jobType,
    location,
    minExperience,
    jdContainerData,
  } = cardData;

  const { isMobileView, isTabletView } = useWindowWidth();
  const { push, query } = useRouter();

  const applyNow = () => {
    if (query?.jobId) push(`${PAGE_ROUTES.CARRER_JOB_APPLY}?jobId=${query.jobId}`);
  };

  return (
    <div className={styles.cardContainer}>
      {isMobileView || isTabletView ? (
        <Fragment>
          <div className={styles.jdCardRows}>
            <div className={styles.jdCardRowContainer}>
              <div className={styles.jdCardColumnData}>
                <CustomImage src={jdContainerData?.jobDescriptionIcons?.jobDepartment || ""} alt="" />
                <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.departmentTitle}</div>
                <div className={styles.detailParameterValue}>{department}</div>
              </div>
              <div className={styles.jdCardColumnData}>
                <CustomImage src={jdContainerData?.jobDescriptionIcons?.experience || ""} alt="" />
                <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.minExperienceTitle}</div>
                <div className={styles.detailParameterValue}>{minExperience}</div>
              </div>
            </div>
            <div className={styles.jdCardRowContainer}>
              <div className={styles.jdCardColumnData}>
                <CustomImage src={jdContainerData?.jobDescriptionIcons?.location || ""} alt="" />
                <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.locationTitle}</div>
                <div className={styles.detailParameterValue}>{location}</div>
              </div>
              <div className={styles.jdCardColumnData}>
                <CustomImage src={jdContainerData?.jobDescriptionIcons?.jobType || ""} alt="" />
                <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.jobTypeTitle}</div>
                <div className={styles.detailParameterValue}>{jobType}</div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className={styles.jobDetail}>
            <CustomImage src={jdContainerData?.jobDescriptionIcons?.location || ""} className={styles.locationIcon} alt="" />
            <div className={styles.detail}>
              <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.locationTitle}</div>
              <div className={styles.detailParameterValue}>{location}</div>
            </div>
          </div>
          <div className={styles.jobDetail}>
            <CustomImage src={jdContainerData?.jobDescriptionIcons?.jobType || ""} className={styles.jdTypeIcon} alt="" />
            <div className={styles.detail}>
              <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.jobTypeTitle}</div>
              <div className={styles.detailParameterValue}>{jobType}</div>
            </div>
          </div>
          <div className={styles.jobDetail}>
            <CustomImage src={jdContainerData?.jobDescriptionIcons?.jobDepartment || ""} className={styles.departmentIcon} alt="" />
            <div className={styles.detail}>
              <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.departmentTitle}</div>
              <div className={styles.detailParameterValue}>{department}</div>
            </div>
          </div>
          <div className={`${styles.jobDetail} ${styles.lastJobDetail}`}>
            <CustomImage src={jdContainerData?.jobDescriptionIcons?.experience || ""} className={styles.minExpIcon} alt="" />
            <div className={styles.detail}>
              <div className={styles.detailParameter}>{jdContainerData?.jobDescriptionLabels?.minExperienceTitle}</div>
              <div className={styles.detailParameterValue}>{minExperience}</div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button variant="primary" className={styles.applyButton} onClick={() => applyNow()}>
              Apply Now
            </Button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

const JDContainer = (props: IJDContainer) => {
  const { isMobileView, isTabletView } = useWindowWidth();
  const { apiDataHandler, pageErrorSetter, jdContainerData } = props;
  const [jobDescriptionData, setJobDescriptionData] = useState<JDCardType>({
    location: "",
    jobType: "",
    department: "",
    minExperience: "",
    jobDescription: "",
  });

  const { push, query } = useRouter();
  const jobId = query?.jobId ? String(query?.jobId) : query?.jobId;

  const applyNow = () => {
    if (jobId) push(`${PAGE_ROUTES.CARRER_JOB_APPLY}?jobId=${jobId}`);
  };

  const getCareerJobOpeningDetails = async () => {
    try {
      const job_id = String(jobId);
      const response = await getCareerJobDescription(job_id);
      setJobDescriptionData(response?.data[0]);
      apiDataHandler(response?.data[0]);
      pageErrorSetter(false);
    } catch (error) {
      pageErrorSetter(true);
    }
  };

  const jobCardDetails: IJobCardDetails = {
    department: jobDescriptionData.jobDomain,
    jobType: jobDescriptionData.jobType,
    location: jobDescriptionData.city,
    minExperience: jobDescriptionData.workExpRequired,
  };

  useEffect(() => {
    getCareerJobOpeningDetails();
  }, []);

  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={styles.container}>
      <div className={`content`}>
        {isMobileView || isTabletView ? (
          <Fragment>
            <JDCard {...jobCardDetails} jdContainerData={jdContainerData} />
            <div className={styles.jobDetailsContainer}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize(jobDescriptionData?.jobDescription || ""),
                }}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button onClick={() => applyNow()} className={styles.applyButton} variant="primary">
                {jdContainerData?.jobDescriptionLabels?.applyNow}
              </Button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className={styles.jobDetailsContainer}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize(jobDescriptionData?.jobDescription || ""),
                }}
              />
            </div>
            <JDCard {...jobCardDetails} jdContainerData={jdContainerData} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default JDContainer;
