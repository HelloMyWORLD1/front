import React from "react";

import {
  HomePageMidImg,
  HomePageMidComponent,
  HomePageMidTxt1,
  HomePageMidTxt2,
} from "./styled";
import mid from "../img/Rectangle.png";
import { useAppDispatch } from "../hooks";
import {
  getPortFolioLength,
  getPortFolioLikeV2,
} from "../slices/portFolioSlice";

function HomePageForm() {
  const dispatch = useAppDispatch();
  const onClickTestButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getPortFolioLength({ field: "개발" }));
  };
  const onClickTestButton2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getPortFolioLikeV2({ field: "개발" }));
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

        <button onClick={onClickTestButton}>버튼1</button>
        <button onClick={onClickTestButton2}>버튼2</button>
        <HomePageMidTxt2>단 하나의 유일한 포트폴리오를 만나다</HomePageMidTxt2>
      </HomePageMidComponent>
    </div>
  );
}

export default HomePageForm;
