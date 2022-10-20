import React from "react";
import SignUpForm from "../components/SignUpForm";
import { LogoImg, SignUpTxt, SignUpTxt2 } from "../components/styled";

function SignUpPage() {
    //<SignUpTxt>회원가입하기</SignUpTxt>
    //<SignUpTxt2>회원가입에 필요한 정보를 입력해주세요</SignUpTxt2>
    //<LogoImg src={logo} onClick={gotoHome}></LogoImg>
    return (
        <div>
            <SignUpForm />
        </div>
    );
}

export default SignUpPage;
