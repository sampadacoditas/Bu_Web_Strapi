import { Footer, Header } from "@/components";
import { FC } from "react";

const withHeaderFooter = (WrappedComponent: FC) => {
  const WithHeaderFooter = (props: any) => {
    return (
      <div className="pageContainer">
          <div className="contentMainWrapper">
            <Header />
            <WrappedComponent {...props} />
          </div>
          <Footer />
      </div>
    );
  };
  return WithHeaderFooter;
};

export default withHeaderFooter;
