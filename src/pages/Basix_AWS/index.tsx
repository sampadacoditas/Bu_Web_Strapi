import { Splash } from "@/components";
import { openFileInTab } from "@/utils/helper";
import { useEffect } from "react";
import basixAwsPdf from "@/assets/pdfs/Basix_AWS.pdf";

const BasixAwsPdf = () => {
  useEffect(() => {
    openFileInTab(basixAwsPdf);
  }, []);
  return <Splash />;
};

export default BasixAwsPdf;