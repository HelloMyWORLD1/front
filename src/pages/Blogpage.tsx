import React from "react";
import GetBlogAllComponent from "../components/GetBlogAllComponent";
//import BlogHeader from "../subComponents/BlogHeader";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import Footer from "../subComponents/Footer";
export default function BlogPage() {
  return (
    <div>
      <PortfolioHeader />
      <GetBlogAllComponent />
      <Footer></Footer>
    </div>
  );
}
