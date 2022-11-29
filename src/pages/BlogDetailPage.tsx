import React, { useEffect } from "react";
import GetBlogComponenet from "../components/GetBlogComponent";
import GetComments from "../components/GetComments";
import PostComment from "../components/PostComment";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import { inquireMyInfo } from "../slices/userSlice";
import { useAppDispatch } from "../hooks";
export default function BlogDetailpage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return (
    <div>
      {/* <HeaderComponent>
        <div></div>
        <div></div>
        <BlogHeaderDetailWrapper>
            <BlogHeaderNavigateDiv>홈</BlogHeaderNavigateDiv>
            <BlogHeaderNavigateDiv>포트폴리오</BlogHeaderNavigateDiv>
            <BlogHeaderNavigateDiv>블로그</BlogHeaderNavigateDiv>
        </BlogHeaderDetailWrapper>
    </HeaderComponent> */}
      <PortfolioHeader />
      <GetBlogComponenet />
      <PostComment />
      <GetComments />
    </div>
  );
}
