import { Splash } from "@/components";
import { openFileInTab } from "@/utils/helper";
import { useEffect } from "react";
import ambryAwsPdf from "@/assets/pdfs/Ambry_Genetics_AWS.pdf";

const AmbryGeneticsAwsPAGE = () => {
  useEffect(() => {
    openFileInTab(ambryAwsPdf);
  }, []);
  return <Splash />;
};

export default AmbryGeneticsAwsPAGE;
