import { Splash } from "@/components";
import { openFileInTab } from "@/utils/helper";
import { useEffect } from "react";

const NoticePage = () => {
  useEffect(() => {
    openFileInTab("notice/H1B_Visa_Notice.pdf");
  }, []);
  return <Splash />;
};

export default NoticePage;
