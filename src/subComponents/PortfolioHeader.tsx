import React, { useState, useCallback, useEffect } from "react";
import {
  HeaderComponent,
  PortfolioNavDiv,
  PortfolioNav,
  BlogHeaderDetailWrapper,
  BlogHeaderProfile,
  LogoImg,
} from "../components/styled";
import search from "../img/Search.png";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
function PortfolioHeader() {
  const navigate = useNavigate();
  const userNickname = document.location.href.split("/:")[1];
  const navigateHome = () => {
    navigate(`/portfolio/get/:${userNickname}`);
  };

  const navigatePortfolio = () => {
    navigate(`/portfolio/get/second/:${userNickname}`);
    //portfolio 페이지로 이동 (기술스택 등등 보여주는 페이지)
  };

  const navigateBlog = () => {
    navigate(`/blog/get/:${userNickname}`);
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <HeaderComponent>
      <BlogHeaderDetailWrapper>
        <BlogHeaderProfile src={""}></BlogHeaderProfile>
        <div>Test</div>
      </BlogHeaderDetailWrapper>
      <div>
        <LogoImg
          onClick={onClickLogo}
          src={logo}
          width={61}
          height={35}
          marginTop={1}
        ></LogoImg>
      </div>
      <PortfolioNavDiv>
        <PortfolioNav onClick={navigateHome}>홈</PortfolioNav>
        <PortfolioNav onClick={navigatePortfolio}>포트폴리오</PortfolioNav>
        <PortfolioNav onClick={navigateBlog}>블로그</PortfolioNav>
      </PortfolioNavDiv>
    </HeaderComponent>
  );
}

export default PortfolioHeader;
