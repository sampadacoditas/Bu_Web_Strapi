import { Splash } from "@/components";
import { openFileInTab } from "@/utils/helper";
import { useEffect } from "react";
import tgiSportAwsPdf from "@/assets/pdfs/TGI_Sports_AWS.pdf";

const TgiSportAwsPdf = () => {
  useEffect(() => {
    openFileInTab(tgiSportAwsPdf);
  }, []);
  return <Splash />;
};

export default TgiSportAwsPdf;