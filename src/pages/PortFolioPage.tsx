import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";
import PortfolioComponent from "../components/PortfolioComponent";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";
import { getPortFolio } from "../slices/portFolioSlice";

function PortFolioPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  const userNickname = document.location.href.split("/:")[1];

  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);

  useEffect(() => {
    console.log(userNickname);
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
