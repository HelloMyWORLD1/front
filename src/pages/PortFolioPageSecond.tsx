import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";
import PortfolioPageSecondComponent from "../components/PortfolioPageSecondComponent";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";

function PortFolioPageSecond() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return (
    <div>
      <PortfolioHeader />
      <PortfolioPageSecondComponent />
      <Footer />
    </div>
  );
}

export default PortFolioPageSecond;
