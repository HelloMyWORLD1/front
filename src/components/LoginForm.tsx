import React, { useState } from "react";
import {
    PwVector,
    EmailInput,
    PwInput,
    LoginBtn,
    LogInComponent,
    LogInInsideBox,
    LogoImg,
    SignupTag,
    FingTag,
    AutoLoginImg,
    AutoLoginTxt,
    TagBox,
} from "./styled";
import pwCheck from "../img/Vector-2.svg";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import circleFill from "../img/akar-icons_circle-check-fill.svg";
import styled from "styled-components";

const AutoBox = styled.div`
    display: flex;
    align-items: center;
`;
function LoginForm() {
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };
    const [email, setEmail] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };
    const pwHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setPw(event.currentTarget.value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email, pw);
    };

    return (
        <LogInComponent>
            <LogInInsideBox>
                <LogoImg src={logo} onClick={gotoHome}></LogoImg>
                <form onSubmit={onSubmit}>
                    <EmailInput
                        value={email}
                        onChange={emailHandler}
                        type="text"
                        placeholder="이메일"
                    />
                    <PwInput
                        value={pw}
                        onChange={pwHandler}
                        type="text"
                        placeholder="비밀번호"
                    />
                    <AutoBox>
                        <AutoLoginImg src={circleFill}></AutoLoginImg>
                        <AutoLoginTxt>자동 로그인</AutoLoginTxt>
                    </AutoBox>

                    <PwVector src={pwCheck}></PwVector>
                    <LoginBtn>로그인</LoginBtn>
                    <TagBox>
                        <SignupTag href="/signUp">회원가입</SignupTag>
                        <FingTag href="#">아이디 ∙ 비밀번호 찾기</FingTag>
                    </TagBox>
                </form>
            </LogInInsideBox>
        </LogInComponent>
    );
}

export default LoginForm;
