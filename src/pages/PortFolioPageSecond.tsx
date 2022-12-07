import React from "react";
import PortfolioPageSecondComponent from "../components/PortfolioPageSecondComponent";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

function PortFolioPageSecond() {
  useInquireMyInfo();
  return (
    <div>
      <PortfolioHeader />
      <PortfolioPageSecondComponent />
      <Footer></Footer>
    </div>
  );
}

export default PortFolioPageSecond;
