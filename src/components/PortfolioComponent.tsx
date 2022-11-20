import React, { useEffect } from "react";
import {
  PortfolioBox,
  PortfolioInsideBox,
  PortfolioProfileImg,
  PortfolioNameTxt,
  PortfolioDetailJobTxt,
  PortfolioIntroduceTxt,
  PortfolioFollowButton,
  BlackLine,
  PortfolioEduCareerSnsHeaderBox,
  PortfolioEduHeader,
  PortfolioCareerHeader,
  PortfolioSnsHeader,
  PortfolioEduCareerSnsContentBox,
  PortfolioEduBox,
  PortfolioCareerBox,
  PortfolioSnsBox,
} from "./styled";
import testImg from "../img/testImg.png";
import { useAppDispatch } from "../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getPortFolio } from "../slices/portFolioSlice";

function PortfolioComponent() {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { portFolio } = useSelector((state: RootState) => state.portFolio);
  const userNickname = document.location.href.split("/:")[1];

  useEffect(() => {
    console.log(userNickname);
    dispatch(getPortFolio({ nickname: userNickname }));
  }, []);

  return (
    <PortfolioBox>
      {portFolio && (
        <PortfolioInsideBox>
          <PortfolioProfileImg src={testImg}></PortfolioProfileImg>
          <PortfolioNameTxt>{userNickname}</PortfolioNameTxt>
          <PortfolioDetailJobTxt>{portFolio.detailJob}</PortfolioDetailJobTxt>
          {user && user.nickname !== userNickname && (
            <PortfolioFollowButton>팔로우</PortfolioFollowButton>
          )}
          <PortfolioIntroduceTxt>{portFolio.introduce}</PortfolioIntroduceTxt>
          <BlackLine width={900} marginTop={30}></BlackLine>
          <PortfolioEduCareerSnsHeaderBox>
            <PortfolioEduHeader>학력</PortfolioEduHeader>
            <PortfolioCareerHeader>커리어</PortfolioCareerHeader>
            <PortfolioSnsHeader>콘택트</PortfolioSnsHeader>
          </PortfolioEduCareerSnsHeaderBox>
          <BlackLine width={900} marginTop={10}></BlackLine>
          <PortfolioEduCareerSnsContentBox>
            <PortfolioEduBox>{portFolio.education}</PortfolioEduBox>
            {portFolio.career.map((item: any, index: number) => {
              const str = `${item.year} ${item.title} ${item.content}`;
              return <PortfolioCareerBox>{str}</PortfolioCareerBox>;
            })}
            {portFolio.sns.map((item: any, index: number) => {
              const str = `${item.replace("-", " ")}`;
              return <PortfolioSnsBox>{str}</PortfolioSnsBox>;
            })}
            <PortfolioSnsBox></PortfolioSnsBox>
          </PortfolioEduCareerSnsContentBox>
        </PortfolioInsideBox>
      )}
    </PortfolioBox>
  );
}

export default PortfolioComponent;
