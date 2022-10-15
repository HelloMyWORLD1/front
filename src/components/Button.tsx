import React from "react";
import { LoginBtn} from "./styled";

// 재사용이 가능한 버튼
// 매개변수로 클래스네임 받아서 사용

type Props = {
    value: string;
    className: string;
};
function Button({ value, className }: Props) {
    //로그인 버튼
    if (className === 'login-btn') {
        return <LoginBtn>{value}</LoginBtn>
    } else {
        return <button>{value}</button>
    };
}

export default Button;