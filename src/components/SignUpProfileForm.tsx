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
import imageCompression from "browser-image-compression";
import { useAppDispatch } from "../hooks";
import { registerProfileImage } from "../slices/portFolioSlice";

export default function SignUpProfileForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [image, setImage] = useState<File>();

  const gotoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        localStorage.setItem("preview", preview);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview("");
    }

    if (preview !== "") {
      //handlingDataForm(preview);
      console.log("handlingDataForm 실행!");
    }
  }, [image, preview]);

  const handlingDataForm = (preview: string) => {
    console.log(typeof preview);
    // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
    const block = preview.split(";");
    console.log(block);
    const contentType = block[0].split(":")[1]; // In this case "image/gif"
    console.log(contentType);
    // get the real base64 content of the file
    const byteString = atob(block[1].split(",")[1]); // In this case "iVBORw0KGg...."
    console.log(byteString);

    // Blob를 구성하기 위한 준비, 이 내용은 저도 잘 이해가 안가서 기술하지 않았습니다.
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: contentType,
    });

    const file = new File([blob], contentType);

    // 위 과정을 통해 만든 image폼을 FormData에 넣어줍니다.
    // 서버에서는 이미지를 받을 때, FormData가 아니면 받지 않도록 세팅해야합니다.

    //formData.append("images", file);

    //dispatch
  };
  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
      //actionImgCompress(e.target.files[0]); //압축함수 호출
    },
    []
  );

  // 이미지 압축
  const actionImgCompress = async (fileSrc: any) => {
    console.log("압축 시작");
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      // 압축 결과
      const compressedFile = await imageCompression(fileSrc, options);

      setImage(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData();
      console.log("form 제출 버튼 클릭");
      if (image) {
        console.log(image);
        formData.append("images", image, image.name);
        formData.forEach((v) => {
          console.log(v);
        });
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
    console.log("업로드 버튼 눌림");
    inputRef.current?.click();
  }, [inputRef.current]);

  return (
    <SignUpProfileComponent>
      <SignUpProfileBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpProfileTxt>프로필등록</SignUpProfileTxt>
        <SignUpProfileTxt2>
          사용하실 별명과 사진을 등록해주세요
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
