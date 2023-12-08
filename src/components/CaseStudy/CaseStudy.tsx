import {
  PAGE_ROUTES,
  CUSTOM_ID,
  LIGHT_BG_NAV,
  DARK_BG_NAV,
} from "@/constants/constants";
import style from "./CaseStudy.module.scss";
import { ICaseStudy } from "./ICaseStudy";
import Card from "./Card/Card";
import { Button } from "@/components";
import { useRouter } from "next/router";

const CaseStudy = (props: ICaseStudy) => {
  const { push } = useRouter();
  const {
    title,
    description,
    itemList,
    theme = "light",
    className,
    serviceName,
    showViewAllBtn = true,
  } = props;
  const CardList = itemList
    ?.slice(0, 4)
    ?.map((item, index) => (
      <Card key={`${index}` + `${item.id}`} item={item} theme={theme} />
    ));
  function viewAllClickHandler() {
    const route = serviceName
      ? `${PAGE_ROUTES.OUR_WORK}/${serviceName}`
      : PAGE_ROUTES.OUR_WORK;
    push(route);
  }
  const ViewAll = (
    <Button
      className={`${style.themeBasedViewAllBtn} ${style.viewAllBtn}`}
      onClick={viewAllClickHandler}
      variant="outlined"
    >
      View all
    </Button>
  );
  return (
    <div
      {...{ [CUSTOM_ID]: `${theme === "light" ? LIGHT_BG_NAV : DARK_BG_NAV}` }}
      className={`${style.caseStudyContainer} ${
        style[theme + "CaseStudyContainer"]
      } ${className}`}
    >
      <div className={"content"}>
        <div className={`${style.title} ${style.themeBasedTitle}`}>{title}</div>
        <div className={`${style.description} ${style.themeBasedDescription}`}>
          {description}
        </div>
        <div className={style.cardContainer}>{CardList}</div>
        {showViewAllBtn && (
          <div className={style.viewAllBtnContainer}>{ViewAll}</div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
