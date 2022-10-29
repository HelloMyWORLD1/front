import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EmailSignUpInput,
  EmailSignUpSelect,
  BirthInput,
  PhoneInput,
  NameInput,
  PwCheckInput,
  PwSignUpInput,
  SignUpBtn,
  NameTxt,
  BirthTxt,
  PhoneTxt,
  EmailTxt,
  PwTxt,
  PwCheckTxt,
  SignUpComponent,
  SignUpTxt,
  SignUpTxt2,
  SignUpInsideBox,
  LogoImg,
  BlackLine,
  ExplainTxt,
} from "./styled";
import logo from "../img/logo.png";

function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwCheck, setPwCheck] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const selectList = [
    "도메인 선택",
    "@naver.com",
    "hanmail.net",
    "daum.net",
    "nate.com",
    "gmail.com",
    "hotmail.com",
    "lycos.co.kr",
    "empal.com",
    "cyworld.com",
    "yahoo.com",
    "paran.com",
    "dreamwiz.com",
    "직접입력",
  ];

  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  const gotoProfile = () => {
    navigate("/signUp/profile");
  };

  const nameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const birthHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setBirth(event.currentTarget.value);
  };
  const phoneHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPhone(Number(event.currentTarget.value));
  };
  const emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const domainHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setDomain(event.currentTarget.value);
  };
  const pwHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };
  const pwCheckHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPwCheck(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, birth, phone, email, domain, pw, pwCheck);
  };

  return (
    <SignUpComponent>
      <SignUpInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpTxt>회원가입하기</SignUpTxt>
        <SignUpTxt2>회원가입에 필요한 정보를 입력해주세요</SignUpTxt2>
        <form onSubmit={onSubmit}>
          <ExplainTxt>실명</ExplainTxt>
          <NameInput
            value={name}
            onChange={nameHandler}
            type="text"
            placeholder="본인 이름을 입력해주세요."
          />
          <NameTxt>
            한글을 사용해 입력해주세요. (특수기호, 공백 사용 불가)
          </NameTxt>
          <ExplainTxt>생년월일</ExplainTxt>
          <BirthInput
            value={birth}
            onChange={birthHandler}
            type="text"
            placeholder="숫자 8자리를 입력해주세요  ex) 19001201"
          />
          <BirthTxt>
            한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)
          </BirthTxt>
          <ExplainTxt>휴대폰번호</ExplainTxt>
          <PhoneInput
            value={phone}
            onChange={phoneHandler}
            type="text"
            placeholder="휴대전화번호 ‘-’를 제외하고 입력"
          />
          <PhoneTxt>
            한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)
          </PhoneTxt>
          <ExplainTxt>이메일</ExplainTxt>
          <EmailSignUpInput
            value={email}
            onChange={emailHandler}
            type="text"
            placeholder="이메일아이디"
          />
          <EmailSignUpSelect value={domain} onChange={domainHandler}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </EmailSignUpSelect>
          <EmailTxt>
            한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)
          </EmailTxt>
          <ExplainTxt>비밀번호</ExplainTxt>
          <PwSignUpInput
            value={pw}
            onChange={pwHandler}
            type="password"
            placeholder="비밀번호(영문/숫자/특수문자 조합 8~20자)"
          />
          <PwTxt>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</PwTxt>
          <ExplainTxt>비밀번호 확인</ExplainTxt>
          <PwCheckInput
            value={pwCheck}
            onChange={pwCheckHandler}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <PwCheckTxt>비밀번호가 일치하지 않습니다.</PwCheckTxt>
          <SignUpBtn>회원가입</SignUpBtn>
        </form>
      </SignUpInsideBox>
    </SignUpComponent>
  );
}

export default SignUpForm;
