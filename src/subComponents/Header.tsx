import React, { useState, useCallback, useEffect } from "react";
import {
  SearchImg,
  LinkCategoryCard,
  LinkCategory,
  MakeMyBlogBtn,
  HeaderComponent,
  LogoImg,
} from "../components/styled";
import search from "../img/Search.png";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { useAppSelector } from "../hooks";
import { RootState } from "../store/store";
import { userSliceActions } from "../slices/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.user);

  const onClickSearch = () => {
    console.log("search button click");
  };

  const onClickHome = () => {
    console.log("home");
  };

  const onClickIntro = () => {
    console.log("intro");
  };

  const onClickCommunity = () => {
    console.log("commu");
  };

  const onClickLogOut = useCallback(() => {
    console.log("로그아웃");
    localStorage.removeItem("jwtToken");
    dispatch(userSliceActions.simpleLogOut());
  }, [user]);

  const onClickLogIn = () => {
    console.log("로그인");
    navigate("/login");
  };

  const onClickMakePortFolioBtn = useCallback(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (user) {
      console.log(user);
      console.log(typeof user);
      console.log(user.email);
    }
  }, [user]);

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <HeaderComponent>
      <LinkCategory>
        <SearchImg src={search} onClick={onClickSearch}></SearchImg>
        <LinkCategoryCard onClick={onClickHome}>홈</LinkCategoryCard>
        <LinkCategoryCard onClick={onClickIntro}>소개</LinkCategoryCard>
        <LinkCategoryCard onClick={onClickCommunity}>커뮤니티</LinkCategoryCard>
      </LinkCategory>
      <div style={{ marginRight: "100px" }}>
        <LogoImg
          onClick={onClickLogo}
          src={logo}
          width={61}
          height={35}
          marginTop={1}
        ></LogoImg>
      </div>
      <div>
        {user ? (
          <MakeMyBlogBtn onClick={onClickLogOut}>로그아웃</MakeMyBlogBtn>
        ) : (
          <MakeMyBlogBtn onClick={onClickLogIn}>로그인</MakeMyBlogBtn>
        )}
        <MakeMyBlogBtn onClick={onClickMakePortFolioBtn}>
          포트폴리오
        </MakeMyBlogBtn>
      </div>
    </HeaderComponent>
  );
}

export default Header;
