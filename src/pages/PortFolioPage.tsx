import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import PortfolioComponent from "../components/PortfolioComponent";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";
import { getPortFolio } from "../slices/portFolio/portFolioSlice";

function PortFolioPage() {
  const dispatch = useAppDispatch();
  const userNickname = document.location.href.split("/:")[1];
  useEffect(() => {
    dispatch(getPortFolio({ nickname: userNickname }));
  }, []);

  return (
    <div>
      <PortfolioHeader />
      <PortfolioComponent />
      <Footer />
    </div>
  );
}

export default PortFolioPage;
