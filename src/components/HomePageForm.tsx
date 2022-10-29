import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { signUp } from "../slices/userSlice";
import { registerPortFolio } from "../slices/portFolioSlice";

import {
  HomePageMidImg,
  HomePageMidComponent,
  HomePageMidTxt1,
  HomePageMidTxt2,
} from "./styled";
import mid from "../img/Rectangle.png";

function HomePageForm() {
  const dispatch = useAppDispatch();
  const onClickTestButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = {
      detailJob: "string",
      title: "string",
      introduce: "string",
      tech: [
        {
          techName: "string",
          content: "string",
        },
      ],
      education: "string",
      sns: ["string"],
      certificate: ["string"],
      foreignLanguage: ["string"],
      project: [
        {
          title: "string",
          content: "string",
        },
      ],
      career: [
        {
          year: "string",
          title: "string",
          content: "string",
        },
      ],
    };
    dispatch(registerPortFolio(data));
  };
  const onClickButtonTest2 = (e: React.MouseEvent<HTMLElement>) => {
    const data = {
      email: "testleefirst",
      password: "1234qwer!@#",
      username: "leefirst",
      field: "프론트엔드개발자",
      phone: 1012345678,
      profileImage: "dd",
      birth: "1997-04-19 0",
      nickname: "testleefirst",
    };
    //dispatch(signUp(data));
  };
  return (
    <div>
      <HomePageMidComponent>
        <HomePageMidImg
          src={mid}
          alt="중앙 배경입니다."
          width="100%"
          height="100%"
        />
        <HomePageMidTxt1>세상에 모든 가치를 그려내는 공간</HomePageMidTxt1>
        <HomePageMidTxt2>단 하나의 유일한 포트폴리오를 만나다</HomePageMidTxt2>
      </HomePageMidComponent>
    </div>
  );
}

export default HomePageForm;
