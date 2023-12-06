import Link from "next/link";
import { IOpeningCard } from "./IOpeningCard";
import { PAGE_ROUTES } from "@/constants/constants";
import style from "./OpeningCard.module.scss";

const OpeningCard = (props: IOpeningCard) => {
  const { heading, subtext, className } = props;
  return (
    <div>
      <div className={`${style.hiringCard} ${className}`}>
        <div className={style.heading}>{heading}</div>
        <div className={style.subtext}>{subtext}</div>

        <div className={style.applyButton}>
          <Link href={PAGE_ROUTES.CAREERS_DOMAIN} className={style.linkTo}>
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpeningCard;
