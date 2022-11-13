import React, { useState, useCallback, useEffect } from "react";
import {
  MakePortfolioBox,
  MakePortfolioInsideBox,
  LogoImg,
  BlackLine,
} from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import logo from "../img/logo.png";

function MakePortfolioSecondComponent() {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <MakePortfolioBox>
      <MakePortfolioInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
      </MakePortfolioInsideBox>
    </MakePortfolioBox>
  );
}

export default MakePortfolioSecondComponent;
