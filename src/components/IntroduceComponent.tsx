import React, { useRef, useState } from "react";
import {
  IntroduceBox,
  ScrollBox,
  ContentBox,
  ArrowDownImg,
  TestDiv,
  RedCircle,
  IntroduceTitleDiv,
  ContentDiv
} from "../components/styled";
import arrowDownImg from "../img/click.png";
import circle from "../img/Circle.png";

export default function IntroduceComponent() {
  const [portfolioTipsOpen, setPortfolioTipsOpen] =
    React.useState<boolean>(false);
  const introduceRef = useRef<HTMLDivElement>(null);
  const functionRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  const introduceClick = () => {
    introduceRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log(introduceRef.current);
  };
  const functionClick = () => {
    functionRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log(functionRef.current);
  };
  const portfolioTipsClick = () => {
    setPortfolioTipsOpen(!portfolioTipsOpen);
    tipsRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <div>
      <IntroduceBox>
        <ScrollBox>
          <ul>
            <li onClick={introduceClick}>소개</li>
            <li onClick={functionClick}>기능</li>
            <li onClick={portfolioTipsClick}>
              <div>
                {" "}
                포트폴리오 작성팁
                <ArrowDownImg src={arrowDownImg}></ArrowDownImg>
              </div>

              {portfolioTipsOpen ? (
                <ul>
                  <li>세부직업</li>
                  <li>블로그 타이틀</li>
                  <li>본인 sns 아이디</li>
                  <li>학력</li>
                  <li>자격증</li>
                  <li>어학능력</li>
                  <li>커리어</li>
                  <li>자개소개</li>
                  <li>프로젝트</li>
                  <li>기술스택</li>
                </ul>
              ) : (
                <div></div>
              )}
            </li>
          </ul>
        </ScrollBox>
        <ContentBox>
          <TestDiv ref={introduceRef}>
            <IntroduceTitleDiv>
              소개
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
                소개내용
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={functionRef}>
          <IntroduceTitleDiv>
              기능
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
          </TestDiv>
          <TestDiv ref={tipsRef}>
          <IntroduceTitleDiv>
              포트폴리오 작성팁
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
          </TestDiv>
        </ContentBox>
      </IntroduceBox>
    </div>
  );
}
