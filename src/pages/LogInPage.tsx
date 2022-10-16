import React from "react";
import LoginForm from "../components/LoginForm";
import { LogoImg, SignupTag,FingTag, AutoLoginTxt , AutoLoginImg} from "../components/styled";
import logo from "../img/logo.png"
import circleFill from "../img/akar-icons_circle-check-fill.svg"


function LogInPage() {
    return (
        <div>
            <LogoImg src={logo}></LogoImg>
            <LoginForm />
            <SignupTag href="/signUp">회원가입</SignupTag>
            <FingTag href="#">아이디 ∙ 비밀번호 찾기</FingTag>
            <AutoLoginImg src={circleFill}></AutoLoginImg>
            <AutoLoginTxt>자동 로그인</AutoLoginTxt>
        </div>
    );
}

export default LogInPage;
