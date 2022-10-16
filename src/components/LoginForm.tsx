import React, { useState } from "react";
import { PwVector, EmailInput, PwInput, LoginBtn } from "./styled";
import pwCheck from "../img/Vector-2.svg";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [pw,setPw] = useState<string>("")
  const emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const pwHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email,pw);
  };

  return (
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
      <PwVector src={pwCheck}></PwVector>
      <LoginBtn>로그인</LoginBtn>
    </form>
  );
}

export default LoginForm;
