import Link from "next/link";
import { PAGE_ROUTES } from "@/constants/constants";
import style from "./OpeningsRedCard.module.scss";
import { IOpeningsCard } from "./openingsCard";

const OpeningsRedCard = (props: IOpeningsCard) => {
  const { openingsRedCardData } = props;
  return (
    <div>
      <div className={style.openingsRedCard}>
        <div className={style.currentOpenings}>{openingsRedCardData?.count}</div>
        <div className={style.heading}>{openingsRedCardData?.title}</div>
        <div className={style.subtext}>{openingsRedCardData?.subtitle}</div>
        <div className={style.applyButton}>
          <Link href={PAGE_ROUTES.CAREERS_DOMAIN} className={style.linkTo}>
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpeningsRedCard;
