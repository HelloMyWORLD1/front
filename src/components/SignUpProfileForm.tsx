import React, { useState } from "react";
import {
  UploadImg,
  NicknameInput,
  RegisterProfileBtn,
  Mask,
  BlackLine,
  SignUpProfileComponent,
  SignUpProfileBox,
  LogoImg,
  SignUpProfileTxt,
  SignUpProfileTxt2,
  MaskBox,
} from "./styled";
import logo from "../img/logo.png";
import mask from "../img/Mask group.png";
import profileUpload from "../img/profileUpload.png";
import { useNavigate } from "react-router-dom";

export default function SignUpProfileForm() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState<string>("");

  const nicknameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log();
  };
  const upload = () => {
    console.log("업로드 버튼 눌림");
  };
  const register = () => {
    alert("회원가입 완료");
    navigate("/login");
  };
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <SignUpProfileComponent>
      <SignUpProfileBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpProfileTxt>프로필등록</SignUpProfileTxt>
        <SignUpProfileTxt2>
          사용하실 별명과 사진을 등록해주세요
        </SignUpProfileTxt2>
        <form onSubmit={onSubmit}>
          <MaskBox>
            <Mask src={mask} />
            <UploadImg src={profileUpload} onClick={upload}></UploadImg>
          </MaskBox>

          <NicknameInput
            value={nickname}
            onChange={nicknameHandler}
            type="text"
            placeholder="닉네임"
          ></NicknameInput>
          <RegisterProfileBtn onClick={register}>등록하기</RegisterProfileBtn>
        </form>
      </SignUpProfileBox>
    </SignUpProfileComponent>
  );
}
