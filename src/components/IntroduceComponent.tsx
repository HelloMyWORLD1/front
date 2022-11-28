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
  const blogTitleRef = useRef<HTMLDivElement>(null);
  const snsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certificationRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const introMyselfRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);


  const introduceClick = () => {
    introduceRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log(introduceRef.current);
  };
  const functionClick = () => {
    functionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    console.log(functionRef.current);
  };
  const portfolioTipsClick = () => {
    setPortfolioTipsOpen(!portfolioTipsOpen);
    tipsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const blogTitleClick = () => {
    blogTitleRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  };
  const snsClick = () => {
snsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
};
const educationClick = () => {
educationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
};
const certificationClick = () => {
certificationRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
};
const languageClick = () => {
languageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
};
const careerClick = () => {
careerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
};
const introMyselfClick = () => {
introMyselfRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });       
};
const projectClick = () => {
projectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
};
const skillClick = () => {
skillRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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
              </div></li>

              {portfolioTipsOpen ? (
                <ul>
                    <li onClick={blogTitleClick}>블로그 타이틀</li>
                  <li onClick={snsClick}>SNS</li>
                  <li onClick={educationClick}>학력</li>
                  <li onClick={certificationClick}>자격증</li>
                  <li onClick={languageClick}>어학능력</li>
                  <li onClick={careerClick}>커리어</li>
                  <li onClick={introMyselfClick}>자개소개</li>
                  <li onClick={projectClick}>프로젝트</li>
                  <li onClick={skillClick}>기술스택</li>
                </ul>
              ) : (
                <div></div>
              )}
            
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
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={tipsRef}>
          <IntroduceTitleDiv>
              포트폴리오 작성팁
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            <strong>기본원칙</strong><br />
            <p>
            ▹ 너무나 당연하지만 <mark>반드시 사실인 정보</mark>만 쓴다.<br />
            ▹ 가능한 짧게 쓴다. 불필요한 내용을 다 쳐낸다. 정보를 추가할 때마다 이 정보가 목적(인터뷰/과제 기회를 얻는 것)에 도움이 되는지를 자문해본다. <mark>이 목적에 부합하지 않는 내용은 과감히 지운다.</mark><br />
            ▹ 가독성을 높이기 위해 줄글보다 불렛을 활용한다.<br />
            ▹ 가독성을 높이기 위해 좋은 레이아웃을 구성한다. 좋은 레이아웃은 <mark>1) 정보 배치 2) 여백 3) 글씨체 4) 포인트 컬러 5) 볼드</mark>와 밑줄을 적절히 사용함으로써 완성된다. 만일 이 항목을 혼자 챙기기 어렵다면 구글 문서의 이력서 템플릿 등을 활용해도 좋다.<br />
            ▹ 반드시 한 장일 필요는 없다. 모든 내용을 한 장에 채우기 위해 가독성을 해치면 안된다. (예: 줄간격 줄이기 등) <mark>분량보다 내용</mark>에 집중한다.<br />
            ▹ 맞춤법 검사기 등을 활용하여 오탈자를 수정한다.<br />
            ▹ 모든 링크가 제대로 작동하는지 확인한다.<br />
            ▹ \*.zip 등의 별도 첨부파일을 첨부하지 않는다.<br />
            ▹ 이력서는 <mark>보통 PDF이나 링크</mark>로 제출한다. HWP, DOCS 등의 파일은 절대 금지! 이력서를 확인하는 사람이 해당 파일 뷰어가 없는 경우가 많다.<br />
            ▹ 채용자로 하여금 궁금하게 작성해라. 채용자는 상당히 많은 양의 이력서를 본다. <mark>상대방을 궁금하도록</mark> 하는것이 중요하다.
            </p>
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={blogTitleRef}>
          <IntroduceTitleDiv>
              블로그 제목
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={snsRef}>
          <IntroduceTitleDiv>
          SNS
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={educationRef}>
          <IntroduceTitleDiv>
          학력
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={certificationRef}>
          <IntroduceTitleDiv>
          자격증
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={languageRef}>
          <IntroduceTitleDiv>
          어학능력
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={careerRef}>
          <IntroduceTitleDiv>
          커리어
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={introMyselfRef}>
          <IntroduceTitleDiv>
          자개소개
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={projectRef}>
          <IntroduceTitleDiv>
          프로젝트
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
          <TestDiv ref={skillRef}>
          <IntroduceTitleDiv>
          기술스택
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv></ContentDiv>
          </TestDiv>
        </ContentBox>
      </IntroduceBox>
    </div>
  );
}
