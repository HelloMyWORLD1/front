import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import {
  PortfolioBox,
  PortfolioInsideBox,
  BlackLine,
  PortfollioTxt,
  GetPortfolioBox,
  PortFolioTitleTxt,
  PortFolioContentTxt,
  PortFolioNameArrayTxt,
} from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getPortFolio } from "../slices/portFolio/portFolioSlice";

function PortfolioPageSecondComponent() {
  const dispatch = useAppDispatch();
  const { portFolio } = useSelector((state: RootState) => state.portFolio);
  const userNickname = document.location.href.split("/:")[1];

  useEffect(() => {
    dispatch(getPortFolio({ nickname: userNickname }));
  }, []);

  return (
    <PortfolioBox>
      {portFolio && (
        <PortfolioInsideBox>
          <PortfollioTxt>기술스택</PortfollioTxt>
          {portFolio.tech.length > 0
            ? portFolio.tech.map((item: any) => {
                return (
                  <GetPortfolioBox>
                    <PortFolioTitleTxt>{item.techName}</PortFolioTitleTxt>
                    <BlackLine width={900} marginTop={5}></BlackLine>
                    <PortFolioContentTxt>{item.content}</PortFolioContentTxt>
                  </GetPortfolioBox>
                );
              })
            : ""}
          <BlackLine width={900} marginTop={30}></BlackLine>
          <PortfollioTxt>프로젝트</PortfollioTxt>
          {portFolio.project.length > 0
            ? portFolio.project.map((item: any) => {
                return (
                  <GetPortfolioBox>
                    <PortFolioTitleTxt>{item.title}</PortFolioTitleTxt>
                    <BlackLine width={900} marginTop={5}></BlackLine>
                    <PortFolioContentTxt>{item.content}</PortFolioContentTxt>
                  </GetPortfolioBox>
                );
              })
            : ""}
          <BlackLine width={900} marginTop={30}></BlackLine>
          <PortfollioTxt>자격증</PortfollioTxt>
          {portFolio.certificate.length > 0
            ? portFolio.certificate.map((item: any) => {
                return (
                  <GetPortfolioBox>
                    <PortFolioNameArrayTxt>{item}</PortFolioNameArrayTxt>
                  </GetPortfolioBox>
                );
              })
            : ""}
          <BlackLine width={900} marginTop={30}></BlackLine>
          <PortfollioTxt>가능 외국어</PortfollioTxt>
          {portFolio.foreignLanguage.length > 0
            ? portFolio.foreignLanguage.map((item: any) => {
                return (
                  <GetPortfolioBox>
                    <PortFolioNameArrayTxt>{item}</PortFolioNameArrayTxt>
                  </GetPortfolioBox>
                );
              })
            : ""}
        </PortfolioInsideBox>
      )}
    </PortfolioBox>
  );
}

export default PortfolioPageSecondComponent;
