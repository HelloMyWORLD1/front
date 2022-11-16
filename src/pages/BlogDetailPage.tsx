import React from "react";
import GetBlogComponenet from "../components/GetBlogComponent";
import { 
    HeaderComponent,
    BlogHeaderDetailWrapper,
    BlogHeaderNavigateDiv,
 } from "../components/styled";

export default function BlogDetailpage() {
  return (
    <div>
        <HeaderComponent>
        <div></div>
        <div></div>
        <BlogHeaderDetailWrapper>
            <BlogHeaderNavigateDiv>소개</BlogHeaderNavigateDiv>
            <BlogHeaderNavigateDiv>포트폴리오</BlogHeaderNavigateDiv>
            <BlogHeaderNavigateDiv>블로그</BlogHeaderNavigateDiv>
        </BlogHeaderDetailWrapper>
    </HeaderComponent>
    <GetBlogComponenet />
    </div>
  );
}
