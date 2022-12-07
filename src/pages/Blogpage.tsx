import React from "react";
import GetBlogAllComponent from "../components/GetBlogAllComponent";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

export default function BlogPage() {
  useInquireMyInfo();
  return (
    <div>
      <PortfolioHeader />
      <GetBlogAllComponent />
      <Footer></Footer>
    </div>
  );
}
