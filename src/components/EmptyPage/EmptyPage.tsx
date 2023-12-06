import { CustomImage } from "@/components";
import emptyPage from "@/assets/images/emptyPage.png";
import style from "./EmptyPage.module.scss";

const EmptyPage = (props: any) => {
  const {
    title = "No results found",
    logo = null,
    className = null,
    description = `We couldn't find any matching results for what you are looking for. Try another search.`,
  } = props;
  return (
    <div className={`${style.emptyPage} ${className}`}>
      <div className={style.container}>
        <CustomImage src={logo ?? emptyPage} alt="Empty Page" />
        <span className={style.title}>{title}</span>
        <span className={style.description}>{description}</span>
      </div>
    </div>
  );
};

export default EmptyPage;
