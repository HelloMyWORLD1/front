import React from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  followPortFolio,
  unFollowPortFolio,
} from "../slices/portFolio/portFolioSlice";
import { useAppDispatch } from "../hooks";
import { v4 as uuidv4, v4 } from "uuid";

function PortfolioComponent() {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { portFolio } = useSelector((state: RootState) => state.portFolio);
  const userNickname = document.location.href.split("/:")[1];

  const handlingFollow = () => {
    dispatch(followPortFolio({ nickname: userNickname }));
  };

  const handlingUnFollow = () => {
    dispatch(unFollowPortFolio({ nickname: userNickname }));
  };

  return (
    <PortfolioBox>
      {portFolio && (
        <PortfolioInsideBox>
          <PortfolioProfileImg
            src={portFolio.profileImage}
          ></PortfolioProfileImg>
          <PortfolioNameTxt>{userNickname}</PortfolioNameTxt>
          <PortfolioDetailJobTxt>{portFolio.detailJob}</PortfolioDetailJobTxt>
          {user === undefined ? (
            ""
          ) : user && user.nickname === userNickname ? (
            ""
          ) : !portFolio.followers.includes(user.nickname) ? (
            <PortfolioFollowButton onClick={handlingFollow}>
              팔로우
            </PortfolioFollowButton>
          ) : (
            <PortfolioFollowButton onClick={handlingUnFollow}>
              언팔로우
            </PortfolioFollowButton>
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
            {!(
              portFolio.career.length === 0 && Array.isArray(portFolio.career)
            ) ? (
              portFolio.career.map((item: any, index: number) => {
                const str = `${item.year} ${item.title} ${item.content}`;
                return (
                  <PortfolioCareerBox key={v4()}>{str}</PortfolioCareerBox>
                );
              })
            ) : (
              <PortfolioCareerBox>-</PortfolioCareerBox>
            )}
            {portFolio.sns.map((item: any, index: number) => {
              const str = `${item.replace("-", " ")}`;
              return <PortfolioSnsBox key={v4()}>{str}</PortfolioSnsBox>;
            })}
          </PortfolioEduCareerSnsContentBox>
        </PortfolioInsideBox>
      )}
    </PortfolioBox>
  );
}

export default PortfolioComponent;
