import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { PwVector } from './styled';
import pwCheck from "../img/Vector-2.svg"

function LoginForm() {
  const [emailInput, setEmailInput] = useState("");
  const [pwInput, setPwInout] = useState("");
  const onChange = (str: string) => {
    setEmailInput(str);
    setPwInout(str);
  };

  return (
    <form>
      <Input
        onChange={onChange}
        name="email"
        placeholder="이메일"
        value={emailInput}
        classname = 'email-input'
      />
      <Input
        onChange={onChange}
        name="password"
        placeholder='비밀번호'
        value={pwInput}
        classname = 'pw-input' 
        />
        <PwVector src={pwCheck}></PwVector>
      <Button value='로그인' className='login-btn' />
    </form>
  );
};

export default LoginForm;