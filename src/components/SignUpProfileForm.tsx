import React from "react";
import { UploadImg, UploadBtn } from "./styled";
import Mask from "../img/Mask group.png";
import profileUpload from "../img/profileUpload.png";

export default function SignUpProfileForm() {
  return (
    <form>
      <UploadBtn>
        <UploadImg src={profileUpload}></UploadImg>
      </UploadBtn>
    </form>
  );
}
