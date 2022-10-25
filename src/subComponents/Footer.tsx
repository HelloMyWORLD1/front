import React from "react";
import {
  FooterComponent,
  FooterLine,
  Footertxt1,
  FooterTxt2,
  FooterTxt3,
  FooterWrapper,
  FooterWrapper2,
  LogoImg,
} from "../components/styled";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <FooterComponent>
      <FooterWrapper>
        <LogoImg
          onClick={onClickLogo}
          src={logo}
          width={61}
          height={35}
          marginTop={50}
        ></LogoImg>
        <Footertxt1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu felis lobortis, euismod nunc vitae, cursus justo. Quisque nulla
          sem, ultrices vel rhoncus id, ultricies tempor mi. Etiam dictum
          scelerisque ex, vel sodales odio egestas vitae.
        </Footertxt1>
        <FooterLine></FooterLine>
        <FooterTxt2>OC COMPANY All rights reserved</FooterTxt2>
      </FooterWrapper>
      <FooterWrapper2>
        <FooterTxt3>LOREM</FooterTxt3>
        <FooterTxt3>LOREM</FooterTxt3>
        <FooterTxt3>LOREM</FooterTxt3>
        <FooterTxt3>LOREM</FooterTxt3>
      </FooterWrapper2>
    </FooterComponent>
  );
}

export default Footer;
