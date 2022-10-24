import React from "react";
import Footer from "../subComponents/Footer";
import Header from "../subComponents/Header";
import { useAppDispatch, useAppSelector } from "../hooks";
import { registerPortFolioTest } from "../slices/portFolioSlice";

import {
  HomePageMidImg,
  HomePageMidComponent,
  HomePageMidTxt1,
  HomePageMidTxt2,
  HomeCardIntroTxtComponent,
  HomeCardIntroTxt1,
  HomeCardIntroTxt2,
  RedCircle,
  HomePageUnderComponent,
  FilterCategory,
  FilterComponent,
  FilterTxt,
  FilterEachCategory,
  FilterResultCardComponent,
  FilterResultCard,
} from "./styled";
import mid from "../img/Rectangle.png";
import circle from "../img/Circle.png";
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
      <Header></Header>
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
      <HomePageUnderComponent>
        <HomeCardIntroTxtComponent>
          <HomeCardIntroTxt1>
            지금 뜨는 인기 블로거
            <div>
              <RedCircle src={circle}></RedCircle>
            </div>
          </HomeCardIntroTxt1>
          <HomeCardIntroTxt2>
            포트폴리오 만드는 방법 AtoZ를 참고할 수 있어요!
          </HomeCardIntroTxt2>
        </HomeCardIntroTxtComponent>
        <FilterComponent>
          <FilterCategory>
            <FilterEachCategory>개발</FilterEachCategory>
            <FilterEachCategory>경영∙비즈니스</FilterEachCategory>
            <FilterEachCategory>운영∙서비스기획</FilterEachCategory>
            <FilterEachCategory>데이터</FilterEachCategory>
            <FilterEachCategory>디자인</FilterEachCategory>
            <FilterEachCategory>마케팅∙홍보</FilterEachCategory>
            <FilterEachCategory>회계</FilterEachCategory>
            <FilterEachCategory>HR</FilterEachCategory>
          </FilterCategory>
          <FilterTxt>필터</FilterTxt>
        </FilterComponent>
        <FilterResultCardComponent>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
          <FilterResultCard></FilterResultCard>
        </FilterResultCardComponent>
      </HomePageUnderComponent>
    </div>
  );
}

export default HomePageForm;
