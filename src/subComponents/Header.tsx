import React, { useState, useCallback, useEffect } from "react";
import {
  SearchImg,
  LinkCategoryCard,
  LinkCategory,
  MakeMyBlogBtn,
  HeaderComponent,
  LogoImg,
  HomeMenu,
  HeaderComponentBox,
  HomeMenuList,
  HamburgerMenu,
} from "../components/styled";
import search from "../img/Search.png";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { useAppSelector } from "../hooks";
import { RootState } from "../store/store";
import { deleteAccount, userSliceActions } from "../slices/userSlice";
import { getPortFolio } from "../slices/portFolioSlice";
import Swal from "sweetalert2";

function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.user);
  const [menu, setMenu] = useState<boolean>(false);

  const onClickSearch = () => {
    console.log("search button click");
    setMenu(!menu);
  };

  const onClickHome = () => {
    console.log("home");
    navigate("/")
  };

  const onClickIntro = () => {
    console.log("intro");
    navigate("/introduce")
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
      dispatch(getPortFolio({ nickname: user.nickname }));
      navigate("/makePortfolio");
    }
  }, [user, dispatch]);

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickAccountDelete = () => {
    Swal.fire({
      title: "정말 계정을 삭제하시겠습니까?",
      text: "삭제 후에는 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result:any) => {
      if (result.isConfirmed) {
        dispatch(deleteAccount());
        Swal.fire("Deleted!", "계정이 삭제되었습니다.", "success");
      }
    });
  };

  return (
    <HeaderComponentBox>
      <HeaderComponent>
        <LinkCategory>
          <HamburgerMenu onClick={onClickSearch} show={menu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerMenu>
          <LinkCategoryCard onClick={onClickHome}>홈</LinkCategoryCard>
          <LinkCategoryCard onClick={onClickIntro}>소개</LinkCategoryCard>
          <LinkCategoryCard onClick={onClickCommunity}>
            커뮤니티
          </LinkCategoryCard>
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

      {user ? (
        <HomeMenu show={menu} logIn={user ? true : false}>
          <HomeMenuList>회원정보관리</HomeMenuList>
          <HomeMenuList onClick={onClickMakePortFolioBtn}>
            포트폴리오
          </HomeMenuList>
          <HomeMenuList onClick={onClickAccountDelete}>계정탈퇴</HomeMenuList>
        </HomeMenu>
      ) : (
        <HomeMenu show={menu} logIn={user ? true : false}>
          <HomeMenuList onClick={onClickLogIn}>로그인</HomeMenuList>
        </HomeMenu>
      )}
    </HeaderComponentBox>
  );
}

export default Header;
