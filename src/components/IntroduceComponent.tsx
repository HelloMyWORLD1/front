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
            <ContentDiv>
            <mark>기본원칙</mark><br />
            <p>
- 너무나 당연하지만 반드시 사실인 정보만 쓴다.<br />
- 가능한 짧게 쓴다. 불필요한 내용을 다 쳐낸다. 정보를 추가할 때마다 이 정보가 목적(인터뷰/과제 기회를 얻는 것)에 도움이 되는지를 자문해본다. 이 목적에 부합하지 않는 내용은 과감히 지운다.<br />
- 가독성을 높이기 위해 줄글보다 불렛을 활용한다.<br />
- 가독성을 높이기 위해 좋은 레이아웃을 구성한다. 좋은 레이아웃은 1) 정보 배치 2) 여백 3) 글씨체 4) 포인트 컬러 5) 볼드와 밑줄을 적절히 사용함으로써 완성된다. 만일 이 항목을 혼자 챙기기 어렵다면 구글 문서의 이력서 템플릿 등을 활용해도 좋다.<br />
- 반드시 한 장일 필요는 없다. 모든 내용을 한 장에 채우기 위해 가독성을 해치면 안된다. (예: 줄간격 줄이기 등) 분량보다 내용에 집중한다.<br />
- 맞춤법 검사기 등을 활용하여 오탈자를 수정한다.<br />
- 모든 링크가 제대로 작동하는지 확인한다.<br />
- \*.zip 등의 별도 첨부파일을 첨부하지 않는다.<br />
- 이력서는 보통 PDF이나 링크로 제출한다. HWP, DOCS 등의 파일은 절대 금지! 이력서를 확인하는 사람이 해당 파일 뷰어가 없는 경우가 많다.<br /></p>

            </ContentDiv>
          </TestDiv>
        </ContentBox>
      </IntroduceBox>
    </div>
  );
}
