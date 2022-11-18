import React from "react";
import GetBlogAllComponent from "../components/GetBlogAllComponent";
//import BlogHeader from "../subComponents/BlogHeader";
import PortfolioHeader from "../subComponents/PortfolioHeader";
export default function BlogPage() {
  return (
    <div>
      <PortfolioHeader />
      <GetBlogAllComponent />
    </div>
  );
}
