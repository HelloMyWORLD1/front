import React, { useState, useEffect } from "react";
import {
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
  CardImg,
  NicknameTxt,
  FieldTxt,
  FollowTxt,
  BlogTitle,
} from "../components/styled";
import circle from "../img/Circle.png";
import testImg from "../img/testImg.png";
import testImg2 from "../img/testImg2.png";
import testImg3 from "../img/testImg3.png";
import testImg4 from "../img/testImg4.png";
import testImg5 from "../img/testImg5.png";
import testImg6 from "../img/testImg6.png";
import testImg7 from "../img/testImg7.png";
import testImg8 from "../img/testImg8.png";
import testImg9 from "../img/testImg9.png";
import testImg10 from "../img/testImg10.png";
import testImg11 from "../img/testImg11.png";
import testImg12 from "../img/testImg12.png";
import { getPortFoiloLike } from "../slices/portFolioSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

interface Cards {
  id: number;
  profile: string;
}
function HomeCard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { portFolios } = useAppSelector((state: RootState) => state.portFolio);

  const [click, setClick] = useState<Array<boolean>>(new Array(8).fill(false));

  useEffect(() => {
    const afterValue = clickAfterValue(0, click);
    console.log(afterValue);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "개발" }));
  }, []);

  function clickAfterValue(sequence: number, click: Array<boolean>) {
    const afterValue = click.map((item, index) => {
      if (index === sequence) return true;
      if (item) {
        return !item;
      }
      return item;
    });
    return afterValue;
  }
  function onClickDeveloper(event: React.MouseEvent<HTMLInputElement>) {
    console.log("개발");
    const afterValue = clickAfterValue(0, click);
    console.log(afterValue);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "개발" }));
  }
  function onClickManagement(event: React.MouseEvent<HTMLInputElement>) {
    console.log("경영");
    const afterValue = clickAfterValue(1, click);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "경영" }));
  }
  function onClickOperate(event: React.MouseEvent<HTMLInputElement>) {
    console.log("운영");
    const afterValue = clickAfterValue(2, click);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "운영" }));
  }
  function onClickData(event: React.MouseEvent<HTMLInputElement>) {
    console.log("데이터");
    const afterValue = clickAfterValue(3, click);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "데이터" }));
  }
  function onClickDesign(event: React.MouseEvent<HTMLInputElement>) {
    console.log("디자인");
    const afterValue = clickAfterValue(4, click);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "디자인" }));
  }
  function onClickMarketing(event: React.MouseEvent<HTMLInputElement>) {
    console.log("마케팅");
    const afterValue = clickAfterValue(5, click);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "마케팅" }));
  }
  function onClickAccounting(event: React.MouseEvent<HTMLInputElement>) {
    console.log("회계");
    const afterValue = clickAfterValue(6, click);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "회계" }));
  }
  function onClickHR(event: React.MouseEvent<HTMLInputElement>) {
    console.log("HR");
    const afterValue = clickAfterValue(7, click);
    setClick(afterValue);
    dispatch(getPortFoiloLike({ field: "HR" }));
  }
  const [cards, setCards] = React.useState<Cards[]>([
    { id: 1, profile: testImg },
    { id: 2, profile: testImg2 },
    { id: 3, profile: testImg3 },
    { id: 4, profile: testImg4 },
    { id: 5, profile: testImg5 },
    { id: 6, profile: testImg6 },
    { id: 7, profile: testImg7 },
    { id: 8, profile: testImg8 },
    { id: 9, profile: testImg9 },
    { id: 10, profile: testImg10 },
    { id: 11, profile: testImg11 },
    { id: 12, profile: testImg12 },
  ]);

  const handlingClickCard = (nickname: string) => {
    navigate(`/portfolio/get/:${nickname}`);
  };
  function overStringChange(txt: string) {
    const number = 45;
    if (txt.length <= number) return txt;
    txt = txt.slice(0, number).concat("...");
    return txt;
  }
  const cardList: JSX.Element[] = cards.map((card) => {
    const txt = overStringChange(
      "비전공자였지만, 이제는 어엿한 시니어 개발자로써 후배들에게 스토리를 전하고 싶어요"
    );
    return (
      <FilterResultCard key={card.id}>
        <CardImg src={card.profile}></CardImg>
        <NicknameTxt>사라 김</NicknameTxt>
        <FieldTxt>스타트업/5년차 프론트엔드 개발자</FieldTxt>
        <FollowTxt>팔로워 1,525명 팔로잉 1,326명</FollowTxt>
        <BlogTitle>{txt}</BlogTitle>
      </FilterResultCard>
    );
  });
  const testList = portFolios
    ? portFolios.map((item: any) => {
        const txt = overStringChange(item.introduce);
        return (
          <FilterResultCard onClick={() => handlingClickCard(item.nickname)}>
            <CardImg src=""></CardImg>
            <NicknameTxt>{item.nickname}</NicknameTxt>
            <FieldTxt>{item.detailJob}</FieldTxt>
            <FollowTxt>
              팔로워 {item.followers.length} 팔로잉 {item.followings.length}
            </FollowTxt>
            <BlogTitle>{txt}</BlogTitle>
          </FilterResultCard>
        );
      })
    : "";

  return (
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
          <FilterEachCategory onClick={onClickDeveloper} click={click[0]}>
            개발
          </FilterEachCategory>
          <FilterEachCategory onClick={onClickManagement} click={click[1]}>
            경영∙비즈니스
          </FilterEachCategory>
          <FilterEachCategory onClick={onClickOperate} click={click[2]}>
            운영∙서비스기획
          </FilterEachCategory>
          <FilterEachCategory onClick={onClickData} click={click[3]}>
            데이터
          </FilterEachCategory>
          <FilterEachCategory onClick={onClickDesign} click={click[4]}>
            디자인
          </FilterEachCategory>
          <FilterEachCategory onClick={onClickMarketing} click={click[5]}>
            마케팅∙홍보
          </FilterEachCategory>
          <FilterEachCategory onClick={onClickAccounting} click={click[6]}>
            회계
          </FilterEachCategory>
          <FilterEachCategory onClick={onClickHR} click={click[7]}>
            HR
          </FilterEachCategory>
        </FilterCategory>
        <FilterTxt>필터</FilterTxt>
      </FilterComponent>
      <FilterResultCardComponent>
        {testList ? testList : ""}
      </FilterResultCardComponent>
    </HomePageUnderComponent>
  );
}

export default HomeCard;
