import { useState, useEffect, BaseSyntheticEvent, useCallback } from "react";
import { EmptyPage, Tab, Input } from "@/components";
import { INPUT_TYPES, DATA_SCIENCE, HEALTHCARE, DEV_OPS, CUSTOM_ID, LIGHT_BG_NAV } from "@/constants/constants";
import useDebounceValue from "@/hooks/useDebounceValue";
import style from "./AllSection.module.scss";
import CaseStudyWhiteCard from "@/components/CaseStudyWhiteCard/CaseStudyWhiteCard";
import { ICaseStudyWhiteCard } from "@/components/CaseStudyWhiteCard/ICaseStudyWhiteCard";
import { useRouter } from "next/router";
import { getFilteredCaseStudy } from "@/utils/helper";

const AllSection = (props: any) => {
  const { caseStudyResp, tabs, cardBtnText, emptyPageData, commonSvgs } = props;
  const { push, replace, query } = useRouter();
  const serviceName = query.serviceName || "";
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(-1);
  const [isTabClicked, setIsTabClicked] = useState<boolean>(false);
  const [caseStudyArray, setCaseStudyArray] = useState<ICaseStudyWhiteCard[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const debouncedSearchText = useDebounceValue<string>(searchText, 400);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<ICaseStudyWhiteCard[]>([]);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  const tabChangeHandler = (tabIndex: number) => {
    setIsTabClicked(true);
    setActiveTab(tabIndex);
  };
  const scrollToTab = () => {
    const section = document.getElementById("tab-id");
    if (section) {
      const topPos = section?.getBoundingClientRect().top;
      const offset = 100;
      window.scrollBy({
        top: topPos + window.screenY - offset,
        behavior: "smooth",
      });
    }
  };
  const paramChangeHandler = useCallback(() => {
    if (!isMounted) {
      switch (serviceName) {
        case DATA_SCIENCE:
          setActiveTab(1);
          break;
        case DEV_OPS:
          setActiveTab(2);
          break;
        case HEALTHCARE:
          setActiveTab(3);
          break;
        default:
          setActiveTab(0);
      }
    }
  }, [serviceName, isMounted]);
  const caseStudyDataSetterAndNavigator = useCallback(() => {
    if (isMounted) {
      setSearchText("");
      switch (activeTab) {
        case 1:
          setCaseStudyArray(getFilteredCaseStudy(caseStudyResp, "dataScience"));
          break;
        case 2:
          setCaseStudyArray(getFilteredCaseStudy(caseStudyResp, "devOps"));
          break;
        case 3:
          setCaseStudyArray(getFilteredCaseStudy(caseStudyResp, "healthCare"));
          break;
        default:
          setCaseStudyArray(caseStudyResp);
      }
      if (isTabClicked) scrollToTab();
    }
  }, [activeTab, isMounted, isTabClicked]);
  useEffect(() => {
    paramChangeHandler();
  }, [paramChangeHandler]);
  useEffect(() => {
    caseStudyDataSetterAndNavigator();
  }, [caseStudyDataSetterAndNavigator]);

  useEffect(() => {
    let filteredCaseStudies = caseStudyArray;
    if (debouncedSearchText.trim().length) {
      filteredCaseStudies = caseStudyArray.filter(item =>
        item.description.toLowerCase().includes(debouncedSearchText.toLowerCase()),
      );
    }
    setFilteredCaseStudies(filteredCaseStudies);
  }, [caseStudyArray, debouncedSearchText]);

  const CardList = filteredCaseStudies.length ? (
    <div className={style.cardContainer}>
      {filteredCaseStudies.map((item, index) => (
        <CaseStudyWhiteCard
          key={`${index}` + `${item.id}`}
          {...item}
          cardBtnText={cardBtnText}
          customClassCardWrapper={style.caseStudyCardContainer}
        />
      ))}
    </div>
  ) : (
    <EmptyPage className={style.emptyPage} {...emptyPageData} />
  );
  return (
    <div {...{ [CUSTOM_ID]: LIGHT_BG_NAV }} className={`${style.contentFrame} content`}>
      <div className={style.tabAndSearchRow} id="tab-id">
        <div className={style.tab}>
          <Tab tabs={tabs} activeTab={activeTab} parentCallbackOnTabChange={tabChangeHandler} className={style.test} />
        </div>
        <div className={style.search}>
          <Input
            type={INPUT_TYPES.SEARCH}
            name="search"
            placeholder="Search"
            value={searchText}
            onChange={(e: BaseSyntheticEvent) => setSearchText(e.target.value)}
            className={style.searchInput}
            commonSvgs={commonSvgs}
          />
        </div>
      </div>
      {CardList}
    </div>
  );
};

export default AllSection;
