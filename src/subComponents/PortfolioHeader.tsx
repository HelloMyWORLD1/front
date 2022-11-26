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
import { useAppDispatch } from "../hooks";
import { getProfileImage } from "../slices/portFolioSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
function PortfolioHeader() {
  const navigate = useNavigate();
  const { test } = useSelector((state: RootState) => state.portFolio);
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
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(getProfileImage());
    }
  }, [jwtToken]);
  return (
    <HeaderComponent>
      <BlogHeaderDetailWrapper>
        {test ? (
          <BlogHeaderProfile src={test.fileUrl}></BlogHeaderProfile>
        ) : (
          <BlogHeaderProfile src={""}></BlogHeaderProfile>
        )}

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
