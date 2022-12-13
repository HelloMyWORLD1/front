import React, { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";
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
import { getPortFoiloLike } from "../slices/portFolio/portFolioSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

function HomeCard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { portFolios } = useAppSelector((state: RootState) => state.portFolio);

  const [click, setClick] = useState<Array<boolean>>(new Array(8).fill(false));

  useEffect(() => {
    const afterValue = clickAfterValue(0, click);
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

  const handlingClickCard = (nickname: string) => {
    navigate(`/portfolio/get/:${nickname}`);
  };
  function overStringChange(txt: string) {
    const number = 45;
    if (txt.length <= number) return txt;
    txt = txt.slice(0, number).concat("...");
    return txt;
  }

  const testList = portFolios
    ? portFolios.map((item: any) => {
        const txt = overStringChange(item.introduce);
        return (
          <FilterResultCard
            onClick={() => handlingClickCard(item.nickname)}
            key={v4()}
          >
            <CardImg src={item.profileImage}></CardImg>
            <NicknameTxt>{item.nickname}</NicknameTxt>
            <FieldTxt>{item.detailJob}</FieldTxt>
            <FollowTxt>
              팔로워 {item.followers.length} 팔로잉 {item.followings.length}
            </FollowTxt>
            <BlogTitle>{txt ? txt : "-"}</BlogTitle>
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
