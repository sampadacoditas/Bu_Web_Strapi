import { IBreadCrumbs, ICrumbs } from "./IBreadCrumbs";
import style from "./BreadCrumbs.module.scss";
import { CustomImage } from "..";
import Link from "next/link";

const BreadCrumbs = (props: IBreadCrumbs) => {
  const { breadCrumbs, rightArrow = "" } = props;

  return (
    <div className={style.breadCrumbsLayout}>
      {breadCrumbs?.map((crumb: ICrumbs, index: number) => {
        return (
          <li
            key={index}
            className={`${style.breadCrumbsItems} ${
              index === breadCrumbs.length - 1 ? style.crumbActive : style.crumbInactive
            }`}
          >
            {index !== breadCrumbs.length - 1 ? (
              <>
                <Link href={crumb.url}>{crumb.label}</Link>
                <CustomImage src={rightArrow} alt="Chevron Right" />
              </>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
