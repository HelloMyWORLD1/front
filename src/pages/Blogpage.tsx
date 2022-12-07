import React, { useEffect } from "react";
import GetBlogAllComponent from "../components/GetBlogAllComponent";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";

export default function BlogPage() {
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
      <GetBlogAllComponent />
      <Footer></Footer>
    </div>
  );
}
