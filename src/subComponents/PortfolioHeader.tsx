import React, { useEffect } from "react";
import {
  HeaderComponent,
  PortfolioNavDiv,
  PortfolioNav,
  BlogHeaderDetailWrapper,
  BlogHeaderProfile,
  LogoImg,
  HeaderLoginBtn,
  HeaderLoginImg
} from "../components/styled";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { useAppDispatch } from "../hooks";
import { getProfileImage } from "../slices/portFolioSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import loginImg from "../img/login2.png"
function PortfolioHeader() {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);
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
  const loginClick = () => {
    navigate("/logIn")
  }
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
        {user && user.profileImage ? (
          <BlogHeaderProfile src={user.profileImage}></BlogHeaderProfile>
        ) : (
          <HeaderLoginBtn onClick={loginClick}><HeaderLoginImg src={loginImg}></HeaderLoginImg></HeaderLoginBtn>
        )}

        <div>{user && user.nickname ? user.nickname : ""}</div>
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
