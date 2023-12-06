import { IDomainListingCard, IDomainListing } from "./IDomainListingCard";
import { Loader } from "..";
import style from "./DomainListingCard.module.scss";

const DomainListingCard = (props: IDomainListingCard) => {
  const { constant, domainListing, handleViewOpenings, redirectApplyDirectForm, loading } = props;
  return (
    <>
      {!loading ? (
        <div className={style.domainListingCardLayout}>
          {domainListing?.map((list: IDomainListing, index: number) => {
            return (
              <div key={index} className={style.domainListingCard} onClick={() => handleViewOpenings(list.title)}>
                <p className={style.domainTitle}>{list.title}</p>
                <div className={style.domainOpeningsLayout}>
                  <p className={style.domainOpenings}>{`${list.openings} ${
                    list.openings <= 1 ? constant?.opening || "" : constant?.openings || ""
                  }`}</p>
                </div>
                <p className={style.viewOpenings} onClick={() => handleViewOpenings(list.title)}>
                  {constant?.viewOpenings || ""}
                </p>
              </div>
            );
          })}
          <div className={style.domainListingCard} onClick={redirectApplyDirectForm}>
            <p className={style.domainTitle}>{constant?.applyForPosition || ""}</p>
            <p className={style.viewOpenings}>{constant?.applyDirectly || ""}</p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DomainListingCard;
