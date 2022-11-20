import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";
import PortfolioComponent from "../components/PortfolioComponent";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";

function PortFolioPage() {
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
      <PortfolioComponent />
      <Footer />
    </div>
  );
}

export default PortFolioPage;
