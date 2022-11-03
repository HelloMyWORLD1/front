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

  const onClickMakePortFolioBtn = useCallback(() => {
    if (!user) {
      navigate("/login");
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
        <MakeMyBlogBtn onClick={onClickMakePortFolioBtn}>
          {user ? user.nickname : "블로그 만들기"}
        </MakeMyBlogBtn>
      </div>
    </HeaderComponent>
  );
}

export default Header;
