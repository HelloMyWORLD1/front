import React from "react";
import GetBlogComponenet from "../components/GetBlogComponent";
import GetComments from "../components/GetComments";
import PostComment from "../components/PostComment";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

export default function BlogDetailpage() {
  useInquireMyInfo();
  return (
    <div>
      <PortfolioHeader />
      <GetBlogComponenet />
      <PostComment />
      <GetComments />
    </div>
  );
}
