import style from "./Loader.module.scss";
import { ReactComponent as LoadingIcon } from "@/assets/icons/loadingIcon.svg";

const Loader = (props: any) => {
  const { size } = props;
  return (
    <div className={style.loaderContainer}>
      <LoadingIcon className={`${style[`${size}Loader`]}`} />
    </div>
  );
};

export default Loader;
