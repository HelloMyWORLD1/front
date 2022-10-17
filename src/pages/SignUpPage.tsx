import React from "react";
import SignUpForm from "../components/SignUpForm";
import { LogoImg, SignUpTxt , SignUpTxt2} from "../components/styled";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
        const gotoHome = () => {
            navigate('/');
        };
  return (
    <div>
      <LogoImg src={logo} onClick={gotoHome} ></LogoImg>
      <SignUpTxt>회원가입하기</SignUpTxt>
      <SignUpTxt2>회원가입에 필요한 정보를 입력해주세요</SignUpTxt2>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
