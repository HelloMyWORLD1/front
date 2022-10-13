import React from 'react';
import styled from 'styled-components';
import logo from "../img/logo.png";

function LoginForm(){
  return (
    <div>
        <Logo />
    </div>
  );
};

const Logo = styled.img.attrs({
    src: `${logo}`,
})`
  position: absolute;
  width: 120.85px;
  height: 72px;
  left: 899.5px;
  top: 80px;
`;



export default LoginForm;