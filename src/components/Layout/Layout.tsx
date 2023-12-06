import { Router } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Splash from "@/components/Splash/Splash";
import { Footer, Header } from "..";

const Layout = ({ headerFooterData, children }: any) => {
  const [loading, setLoading] = useState(false);

  const handleChangeRoutingStart = () => setLoading(true);
  const handleChangeRoutingComplete = () => setLoading(false);

  const handleRoutingChange = useCallback(() => {
    Router.events.on("routeChangeStart", handleChangeRoutingStart);
    Router.events.on("routeChangeComplete", handleChangeRoutingComplete);
    Router.events.on("routeChangeError", handleChangeRoutingComplete);

    return () => {
      Router.events.off("routeChangeStart", handleChangeRoutingStart);
      Router.events.off("routeChangeComplete", handleChangeRoutingComplete);
      Router.events.off("routeChangeError", handleChangeRoutingComplete);
    };
  }, []);

  useEffect(() => {
    handleRoutingChange();
  }, [handleRoutingChange]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <Splash />
      ) : (
        <div className="pageContainer">
          <div className="contentMainWrapper">
            <Header navItems={headerFooterData?.headerData  || []}/>
            {children}
          </div>
          <Footer headerFooterData={headerFooterData}/>
        </div>
      )}
    </>
  );
};

export default Layout;
