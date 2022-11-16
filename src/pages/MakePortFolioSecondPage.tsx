import React, { useEffect } from "react";
import MakePortfolioSecondComponent from "../components/MakePortfolioSecondComponent";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";
import Footer from "../subComponents/Footer";
function MakePortFolioSecondPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return (
    <>
      <MakePortfolioSecondComponent />
      <Footer />
    </>
  );
}

export default MakePortFolioSecondPage;
