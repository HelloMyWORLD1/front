import React, { useState } from "react";
import {
    UploadImg,
    UploadBtn,
    NicknameInput,
    RegisterProfileBtn,
    Mask,
} from "./styled";
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
    return (
        <form onSubmit={onSubmit}>
            <Mask src={mask} />
            <UploadImg src={profileUpload}></UploadImg>
            <UploadBtn onClick={upload}></UploadBtn>
            <NicknameInput
                value={nickname}
                onChange={nicknameHandler}
                type="text"
                placeholder="닉네임"
            ></NicknameInput>
            <RegisterProfileBtn onClick={register}>등록하기</RegisterProfileBtn>
        </form>
    );
}
