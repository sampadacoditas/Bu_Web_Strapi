import { CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import { DomainListingCard } from "..";
import { IDomainListing } from "./IDomainListing";
import style from "./DomainListing.module.scss";

const DomainListing = (props: IDomainListing) => {
  const { constant, contentContainerStyle, domainListing, handleViewOpenings, redirectApplyDirectForm, loading } = props;
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={style.domainListingSection}>
      <div className={`content ${contentContainerStyle}`}>
        <div className={style.domainListLayout}>
          <div className={style.title}>{constant?.hiringText || ""}</div>
          <DomainListingCard
            domainListing={domainListing}
            handleViewOpenings={handleViewOpenings}
            redirectApplyDirectForm={redirectApplyDirectForm}
            loading={loading}
            constant={constant}
          />
        </div>
      </div>
    </div>
  );
};

export default DomainListing;
