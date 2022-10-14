import React from "react";
import { LoginBtn } from "./styled";

// 재사용이 가능한 버튼을 만들고 싶은데 
// 첫번째 고민, 스타일을 버튼 종류마다 정해주고 싶음 
// 지금 생각한 답은 버튼 함수에 매개변수(클리스네임 | 스트링)으로 버튼의 종류를 받고
// 버튼 컴포넌트안에 조건문으로 버튼을 리턴하는 느낌

type Props = {
    value: string;
    className: string;
};
function Button({ value, className }: Props) {
    if (className === 'login-btn') {
        return <LoginBtn>{value}</LoginBtn>
    } else {
        return <button>{value}</button>
    };
}

export default Button;