import React from "react";
import SignUpProfileForm from "../components/SignUpProfileForm";
import { LogoImg, SignUpProfileTxt,SignUpProfileTxt2 } from "../components/styled";
import logo from "../img/logo.png";
export default function SignUpProfilePage() {
  return (
    <div>
      <SignUpProfileTxt>프로필등록</SignUpProfileTxt>
      <SignUpProfileTxt2>사용하실 별명과 사진을 등록해주세요</SignUpProfileTxt2>
      <LogoImg src={logo}></LogoImg>
      <SignUpProfileForm />
    </div>
  );
}
