import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { registerPortFolioTest } from "../slices/portFolioSlice";

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
    dispatch(registerPortFolioTest(data));
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
      <button onClick={onClickTestButton}>test</button>
    </div>
  );
}

export default HomePageForm;
