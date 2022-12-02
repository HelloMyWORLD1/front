import React from "react";

import {
  HomePageMidImg,
  HomePageMidComponent,
  HomePageMidTxt1,
  HomePageMidTxt2,
} from "./styled";
import mid from "../img/Rectangle.png";
import { useNavigate } from "react-router-dom";

function HomePageForm() {
  const navigate = useNavigate();
  const onClickTestButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("test");
    navigate("/signUp/profile");
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
