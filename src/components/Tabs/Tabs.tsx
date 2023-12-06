import ITabs from "./ITabs";
import style from "./Tabs.module.scss";

const Tab = (props: ITabs) => {
  const { tabs, parentCallbackOnTabChange, activeTab = 0, className } = props;
  const tabClickHandler = (tabIndex: number) => {
    parentCallbackOnTabChange(tabIndex);
  };

  return (
    <div className={`${style.tabContainer} ${className}`}>
      {tabs?.map((tab, index) => (
        <div key={"key:" + tab} className={style.tabButton} onClick={() => tabClickHandler(index)}>
          <span className={index === activeTab ? `${style.activeTab}` : ""}>{tab}</span>
        </div>
      ))}
    </div>
  );
};

export default Tab;
