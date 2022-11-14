import React from "react";
import testImg from "../img/testImg.png";
import { HeaderComponent } from "../components/styled";
import { 
    BlogHeaderProfile,
    BlogHeaderDetailWrapper,
    BlogHeaderNavigateDiv
 } from "../components/styled";


function BlogHeader() {

  return (
    <HeaderComponent>
        <BlogHeaderDetailWrapper>
            <BlogHeaderProfile src={testImg}></BlogHeaderProfile>
            <div>Jaewon</div>
        </BlogHeaderDetailWrapper>
        <div></div>
        <BlogHeaderDetailWrapper>
            <BlogHeaderNavigateDiv>소개</BlogHeaderNavigateDiv>
            <BlogHeaderNavigateDiv>포트폴리오</BlogHeaderNavigateDiv>
            <BlogHeaderNavigateDiv>블로그</BlogHeaderNavigateDiv>
        </BlogHeaderDetailWrapper>
    </HeaderComponent>
    
  );
}

export default BlogHeader;
