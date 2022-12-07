import React from "react";
import MakePortfolioSecondComponent from "../components/MakePortfolioSecondComponent";
import Footer from "../subComponents/Footer";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

function MakePortFolioSecondPage() {
  useInquireMyInfo();
  return (
    <>
      <MakePortfolioSecondComponent />
      <Footer />
    </>
  );
}

export default MakePortFolioSecondPage;
