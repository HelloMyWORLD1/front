import React, { useRef, useState } from "react";
import {
  IntroduceBox,
  ScrollBox,
  ContentBox,
  ArrowDownImg,
  TestDiv,
  RedCircle,
  IntroduceTitleDiv,

  ContentDiv,
} from "../components/styled";
import arrowDownImg from "../img/click.png";
import circle from "../img/Circle.png";

export default function IntroduceComponent() {
  const [portfolioTipsOpen, setPortfolioTipsOpen] =
    React.useState<boolean>(false);
  const introduceRef = useRef<HTMLDivElement>(null);
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
  const portfolioTipsClick = () => {
    setPortfolioTipsOpen(!portfolioTipsOpen);
    tipsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const blogTitleClick = () => {
    blogTitleRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const snsClick = () => {
    snsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const educationClick = () => {
    educationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const certificationClick = () => {
    certificationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const languageClick = () => {
    languageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const careerClick = () => {
    careerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const introMyselfClick = () => {
    introMyselfRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
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
            <li onClick={portfolioTipsClick}>
              <div>
                {" "}
                포트폴리오 작성팁
                <ArrowDownImg src={arrowDownImg}></ArrowDownImg>
              </div>
            </li>

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
            <ContentDiv>Q : 무엇을 하는 사이트인가요??<br />
            ▹	여러분의 포트폴리오를 좀 더 손쉽게 작성하도록 <mark>양식을 제공</mark>해줍니다!<br />
            ▹	여러 분야의 포트폴리오가 궁금하지 않나요?? <mark>서로 공유</mark>해보세요!<br />
            ▹	다른 사람의 <mark>포트폴리오를 팔로우</mark>할수 있어요!<br />
            ▹	내 블로그에 다양한 <mark>게시글들을 작성</mark>하고 서로 <mark>댓글</mark>을 남길수 있어요!
</ContentDiv>
          </TestDiv>
          <TestDiv ref={tipsRef}>
            <IntroduceTitleDiv>
              포트폴리오 작성팁
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
              <strong>기본원칙</strong>
              <br />
              <p>
                ▹ 너무나 당연하지만 <mark>반드시 사실인 정보</mark>만 쓴다.
                <br />▹ 가능한 짧게 쓴다. 불필요한 내용을 다 쳐낸다. 정보를
                추가할 때마다 이 정보가 목적(인터뷰/과제 기회를 얻는 것)에
                도움이 되는지를 자문해본다.{" "}
                <mark>이 목적에 부합하지 않는 내용은 과감히 지운다.</mark>
                <br />
                ▹ 가독성을 높이기 위해 줄글보다 불렛을 활용한다.
                <br />▹ 가독성을 높이기 위해 좋은 레이아웃을 구성한다. 좋은
                레이아웃은{" "}
                <mark>
                  1) 정보 배치 2) 여백 3) 글씨체 4) 포인트 컬러 5) 볼드
                </mark>
                와 밑줄을 적절히 사용함으로써 완성된다. 만일 이 항목을 혼자
                챙기기 어렵다면 구글 문서의 이력서 템플릿 등을 활용해도 좋다.
                <br />▹ 반드시 한 장일 필요는 없다. 모든 내용을 한 장에 채우기
                위해 가독성을 해치면 안된다. (예: 줄간격 줄이기 등){" "}
                <mark>분량보다 내용</mark>에 집중한다.
                <br />
                ▹ 맞춤법 검사기 등을 활용하여 오탈자를 수정한다.
                <br />
                ▹ 모든 링크가 제대로 작동하는지 확인한다.
                <br />
                ▹ \*.zip 등의 별도 첨부파일을 첨부하지 않는다.
                <br />▹ 이력서는 <mark>보통 PDF이나 링크</mark>로 제출한다. HWP,
                DOCS 등의 파일은 절대 금지! 이력서를 확인하는 사람이 해당 파일
                뷰어가 없는 경우가 많다.
                <br />▹ 채용자로 하여금 궁금하게 작성해라. 채용자는 상당히 많은
                양의 이력서를 본다. <mark>상대방을 궁금하도록</mark> 하는것이
                중요하다.
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
            <ContentDiv>
              ▹ <mark>나에 대해 잘 설명해주는 한 문장의 제목</mark>은 강한
              인상을 줄 수 있다.
              <br />▹ 입에 잘 달라붙는 문장일수록 좋다.
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={snsRef}>
            <IntroduceTitleDiv>
              SNS
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
              ▹ 포트폴리오에 소셜 서비스가 있는 이유는{" "}
              <mark>간접적인 검증</mark>을 통과하기 위함압니다.{" "}
              <mark>페이스북, 인스타그램</mark> 등을 통해 일상을 파악하고,{" "}
              <mark>깃허브</mark>를 통해 코드에 대한 기록을 검토할 수 있도록
              합니다.<br/> 또한 <mark>기술블로그</mark> 같은 것도 제출하면 좋습니다.
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={educationRef}>
            <IntroduceTitleDiv>
              학력
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            ▹ 학교, 전공, 입학/졸업 시기 정도로만 간략하게 쓴다. 학점은 필요 없다.<br/>
            ▹ 지원하는 포지션과 관련 있는 논문이나 프로젝트가 있다면 한두 줄 추가해도 좋다.<br/>
            ▹ 정규 교육이나 대학 교육뿐만 아니라 지원한 포지션과 관련하여 수료한 프로그램, 부트캠프 등을 적어도 좋다.

            </ContentDiv>
          </TestDiv>
          <TestDiv ref={certificationRef}>
            <IntroduceTitleDiv>
              자격증
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            ▹ 직무와 연관 있는 자격증만 입력해야 합니다.
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={languageRef}>
            <IntroduceTitleDiv>
              어학능력
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            ▹ 어학 수준이나 어학 자격증, 공인 시험 점수를 입력하면 됩니다. 외국어 회화 수준은 <mark>비즈니스 레벨, 네이티브 등으로 표현</mark>하는 것이 좋다.
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={careerRef}>
            <IntroduceTitleDiv>
              커리어
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            ▹ 설명 부분에 가능하면 <mark>책임보다는 성취에 초점을 맞추어</mark> 입력합니다. 성취에 초점을 맞추면 다른 후보자들보다 더 돋보이게 됩니다.<br />
            ▹ 성과를 나열할 때 <mark>수량을 지정</mark>합니다. “매출이 사상 최고치로 증가했습니다.” 대신 “소프트웨어 데모 프로세스를 변경하여 <mark>2021년 매출이 20% 증가</mark>했습니다.”라고 표현합니다.
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={introMyselfRef}>
            <IntroduceTitleDiv>
              자개소개
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            ▹ 가장 자신 있는 <mark>기술 스택과 경험이 포함된 키워드로 작성</mark>합니다. 어떤 전문 기술을 가졌는지, 어떤 업무에 특화되어 있는지, 한 문장으로 명확하게 보여주는 것이 좋습니다.<br />
            ▹ 특히 <mark>채용 담당자의 니즈를 분석</mark>해서 그것에 맞춰 작성하는 것이 가장 효과적입니다.
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={projectRef}>
            <IntroduceTitleDiv>
              프로젝트
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            ▹ <mark>가장 중요한 부분</mark>이다. 지원하는 포지션이 필요로 하는 역량을 그간의 경험을 통해 갖추었음을 증명하는 곳이다.<br />
            ▹ 회사에서 진행한 프로젝트뿐만 아니라 수상 경력이나 사이드 프로젝트 등 포지션과 관련한 <mark>중요한 경험</mark>을 모두 담는다.<br />
            ▹ 만일 여러 명이 함께한 일이라면 <mark>구체적으로 자신의 역할과 기여도</mark>를 나타낸다.<br />
            ▹ 중요하지 않은 내용을 끼워 넣지 않는다. 구체적이고 명확한 것이 중요하다. <mark>양보다는 질</mark>이 중요하다.<br />
            ▹ 가능하다면 <mark>프로젝트의 웹 URL, 블로그 아티클, 동영상, 사진 이미지 등을 링크로 연결</mark> 하세요. 높은 신뢰를 얻게 됩니다.
            </ContentDiv>
          </TestDiv>
          <TestDiv ref={skillRef}>
            <IntroduceTitleDiv>
              기술스택
              <div>
                <RedCircle src={circle}></RedCircle>
              </div>
            </IntroduceTitleDiv>
            <ContentDiv>
            ▹ <mark>가장 자신 있는 기술 스택을 최상단</mark>에 보일 수 있도록 입력하세요.<br />
            ▹ <mark>많을수록 능시가 아니다.</mark> 지원한 포지션과 관련 없는 기술, 내가 익숙하지 않거나 제대로 써본 적 없는 기술은 제외한다.
            </ContentDiv>
          </TestDiv>
        </ContentBox>
      </IntroduceBox>
    </div>
  );
}
