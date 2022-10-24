import React, { useState } from "react";
import vector from "../img/Vector.png";
import logo from "../img/logo.png";
import { Vector } from "./styled";
import {
  FindPasswordComponent,
  FindPasswordInsideBox,
  FindPasswordOutSideBox,
  FindPasswordTxt,
  FindPasswordInput,
  FindPasswordSubmitButton,
  BlackLine,
  LogoImg,
} from "./styled";
import { useNavigate } from "react-router-dom";

function FindPwForm() {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    console.log("btn submit");
    console.log(email);
  };
  const onClickVector = (e: React.MouseEvent<HTMLElement>) => {
    console.log("back");
  };
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <FindPasswordComponent>
      <FindPasswordOutSideBox>
        <Vector src={vector} onClick={onClickVector}></Vector>
        <FindPasswordInsideBox>
          <LogoImg src={logo} onClick={gotoHome}></LogoImg>
          <FindPasswordTxt>비밀번호 찾기</FindPasswordTxt>
          <BlackLine marginTop={32}></BlackLine>
          <FindPasswordInput
            value={email}
            onChange={emailHandler}
            type="text"
            placeholder="이메일을 입력해주세요"
          ></FindPasswordInput>
          <FindPasswordSubmitButton onClick={onSubmit}>
            다음으로
          </FindPasswordSubmitButton>
        </FindPasswordInsideBox>
      </FindPasswordOutSideBox>
    </FindPasswordComponent>
  );
}

export default FindPwForm;
