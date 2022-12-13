import React from "react";
import GetBlogComponenet from "../components/GetBlogComponent";
import GetComments from "../components/GetComments";
import PostComment from "../components/PostComment";
import PortfolioHeader from "../subComponents/PortfolioHeader";

export default function BlogDetailpage() {
  return (
    <div>
      <PortfolioHeader />
      <GetBlogComponenet />
      <PostComment />
      <GetComments />
    </div>
  );
}
