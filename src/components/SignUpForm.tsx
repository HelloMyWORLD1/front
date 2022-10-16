import React, { useState } from "react";
import {
  EmailSignUpInput,
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
  PwCheckTxt
} from "./styled";

function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<number>();
  const [phone, setPhone] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwCheck, setPwCheck] = useState<string>("");

  const nameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const birthHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setBirth(+event.currentTarget.value);
  };
  const phoneHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPhone(+event.currentTarget.value);
  };
  const emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const pwHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };
  const pwCheckHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPwCheck(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, birth, phone, email, pw, pwCheck);
  };

  return (
    <form onSubmit={onSubmit}>
      <NameInput
        value={name}
        onChange={nameHandler}
        type="text"
        placeholder="본인 이름을 입력해주세요."
      />
      <NameTxt>한글을 사용해 입력해주세요. (특수기호, 공백 사용 불가)</NameTxt>
      <BirthInput
        value={birth}
        onChange={birthHandler}
        type="number"
        placeholder="숫자 8자리를 입력해주세요  ex) 19001201"
      />
      <BirthTxt>한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</BirthTxt>
      <PhoneInput
        value={phone}
        onChange={phoneHandler}
        type="number"
        placeholder="휴대전화번호 ‘-’를 제외하고 입력"
      />
      <PhoneTxt>한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</PhoneTxt>
      <EmailSignUpInput
        value={email}
        onChange={emailHandler}
        type="text"
        placeholder="이메일아이디"
      />
      <EmailTxt>한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)</EmailTxt>
      <PwSignUpInput
        value={pw}
        onChange={pwHandler}
        type="text"
        placeholder="비밀번호(영문/숫자/특수문자 조합 8~20자)"
      />
      <PwTxt>8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</PwTxt>
      <PwCheckInput
        value={pwCheck}
        onChange={pwCheckHandler}
        type="text"
        placeholder="비밀번호를 다시 입력해주세요"
      />
      <SignUpBtn>회원가입</SignUpBtn>
      <PwCheckTxt>비밀번호가 일치하지 않습니다.</PwCheckTxt>
    </form>
  );
}

export default SignUpForm;
