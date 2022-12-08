import React, { useEffect, useState, useRef, useCallback } from "react";
import {
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
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { registerProfileImage } from "../slices/portFolio/portFolioSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function SignUpProfileForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [image, setImage] = useState<File>();
  const { user } = useSelector((state: RootState) => state.user);

  const gotoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      setPreview(user?.profileImage);
    }
  }, [user]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        localStorage.setItem("preview", preview);
      };
      reader.readAsDataURL(image);
    }
  }, [image, preview]);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      setImage(e.target.files[0]);
    },
    []
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData();
      if (image) {
        formData.append("images", image, image.name);
        if (localStorage.getItem("jwtToken")) {
          dispatch(
            registerProfileImage({
              images: formData,
            })
          );
        }
      }
    },
    [image]
  );

  const upload = useCallback(() => {
    inputRef.current?.click();
  }, [inputRef.current]);

  return (
    <SignUpProfileComponent>
      <SignUpProfileBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpProfileTxt>프로필등록</SignUpProfileTxt>
        <SignUpProfileTxt2>
          사용하실 프로필 사진을 등록해주세요
        </SignUpProfileTxt2>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <MaskBox>
            <Mask src={preview ? preview : mask} onClick={upload} />
          </MaskBox>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            multiple
            hidden
            style={{ display: "none" }}
            ref={inputRef}
            onChange={onUploadImage}
          ></input>

          <RegisterProfileBtn>등록하기</RegisterProfileBtn>
        </form>
      </SignUpProfileBox>
    </SignUpProfileComponent>
  );
}
