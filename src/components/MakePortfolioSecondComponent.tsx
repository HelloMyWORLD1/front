import React, { useState, useCallback, KeyboardEvent } from "react";
import {
  MakePortfolioBox,
  MakePortfolioInsideBox,
  LogoImg,
  BlackLine,
  MakePortfolioHeadTxt,
  GrayExplainTxt,
  DetailJobTxt,
  CareerInputBox,
  CareerInput,
  UnderUserInput,
  MakePortFolioNormalInput,
  MakePortfolioAddButton,
  TextAreaStyled,
  ResultPortfolioTextArea,
  ResultPortfolioInput,
  MakePortFolioNextBtn,
  DeletePortfolioButton,
} from "./styled";
import {
  portFolioSliceActions,
  registerPortFolio,
} from "../slices/portFolioSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import logo from "../img/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function MakePortfolioSecondComponent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const {
    registerPortFolioLoading,
    registerPortFolioDone,
    registerPortFolioError,
  } = useSelector((state: RootState) => state.portFolio);

  const {
    showDetailJob,
    showBlogTitle,
    snsObjectArray,
    showEducation,
    showCertificate,
    showForeign,
    showIntroduce,
  } = location.state;

  const [year, setYear] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const [showCareer, setShowCareer] = useState<CareerArrayType[]>([]);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [project, setProject] = useState<portfolioProjectType[]>([]);

  const [techName, setTechName] = useState<string>("");
  const [techContent, setTechContent] = useState<string>("");
  const [technique, setTechnique] = useState<techNique[]>([]);

  const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    setYear(onlyNumber);
  };

  const handleCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.currentTarget.value);
  };

  const handleWork = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWork(event.currentTarget.value);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };

  const handleTechName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTechName(event.currentTarget.value);
  };

  const handleTechContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTechContent(event.currentTarget.value);
  };

  const addProject = useCallback(() => {
    setProject([...project].concat({ title: title, content: content }));
  }, [title, content]);

  const addTechnique = useCallback(() => {
    setTechnique(
      [...technique].concat({ techName: techName, content: techContent })
    );
  }, [techName, techContent]);

  const onKeyPressCareer = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        if (year.length > 0 && company.length > 0 && work.length > 0) {
          setShowCareer(
            [...showCareer].concat({
              title: company,
              year: year,
              content: work,
            })
          );
        }
      }
    },
    [year, company, work, showCareer]
  );

  const deleteCareer = useCallback(
    (index: number) => {
      setShowCareer(
        [...showCareer].filter((item: CareerArrayType, i: number) => {
          if (index !== i) {
            return item;
          }
        })
      );
    },
    [showCareer]
  );

  const deleteProject = useCallback(
    (index: number) => {
      setProject(
        [...project].filter((item: portfolioProjectType, i: number) => {
          if (index !== i) {
            return item;
          }
        })
      );
    },
    [project]
  );

  const deleteTechnique = useCallback(
    (index: number) => {
      setTechnique(
        [...technique].filter((item: techNique, i: number) => {
          if (index !== i) {
            return item;
          }
        })
      );
    },
    [technique]
  );

  const gotoHome = () => {
    navigate("/");
  };

  const onClickRegisterPortfolio = useCallback(() => {
    if (registerPortFolioLoading === false) {
      dispatch(
        registerPortFolio({
          detailJob: showDetailJob,
          title: showBlogTitle,
          sns: snsObjectArray,
          introduce: showIntroduce,
          education: showEducation,
          certificate: showCertificate,
          foreignLanguage: showForeign,
          tech: technique,
          project: project,
          career: showCareer,
        })
      );
      navigate("/");
      dispatch(portFolioSliceActions.registerInitialize());
    }
  }, [
    registerPortFolioLoading,
    showDetailJob,
    showBlogTitle,
    snsObjectArray,
    showIntroduce,
    showEducation,
    showCertificate,
    showForeign,
    technique,
    project,
    showCareer,
  ]);

  return (
    <MakePortfolioBox>
      <MakePortfolioInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <MakePortfolioHeadTxt>포트폴리오 등록</MakePortfolioHeadTxt>
        <GrayExplainTxt>필요한 기본 정보를 입력해주세요</GrayExplainTxt>
        <DetailJobTxt>커리어패스</DetailJobTxt>
        <CareerInputBox>
          <CareerInput placeholder="년도" onChange={handleYear} value={year} />
          <CareerInput placeholder="회사명" onChange={handleCompany} />
          <CareerInput
            placeholder="맡은직무"
            onKeyPress={onKeyPressCareer}
            onChange={handleWork}
          />
        </CareerInputBox>
        {showCareer &&
          showCareer.map((item, index) => {
            return (
              <UnderUserInput key={index}>
                {item.title}, {item.content}, {item.year}
                <button onClick={() => deleteCareer(index)}>X</button>
              </UnderUserInput>
            );
          })}
        <DetailJobTxt>프로젝트 소개</DetailJobTxt>
        <MakePortFolioNormalInput
          value={title}
          onChange={handleTitle}
          placeholder="제목"
        />
        <TextAreaStyled
          value={content}
          onChange={handleContent}
          placeholder="진행했던 프로젝트에 대한 설명과 본인이 담당했던 일에 대해서 작성해주세요."
        />
        <MakePortfolioAddButton onClick={addProject}>
          추가하기
        </MakePortfolioAddButton>
        <BlackLine width={600} marginTop={10} checkColor="black" />
        {project &&
          project.map((item, index) => {
            return (
              <>
                <DetailJobTxt>프로젝트 {index + 1}</DetailJobTxt>
                <ResultPortfolioInput value={item.title} readOnly />
                <ResultPortfolioTextArea value={item.content} readOnly />
                <DeletePortfolioButton onClick={() => deleteProject(index)}>
                  삭제하기
                </DeletePortfolioButton>
                <BlackLine width={600} marginTop={10} />
              </>
            );
          })}
        <DetailJobTxt>기술 스택</DetailJobTxt>
        <MakePortFolioNormalInput
          value={techName}
          onChange={handleTechName}
          placeholder="제목"
        />
        <TextAreaStyled
          value={techContent}
          onChange={handleTechContent}
          placeholder="본인 직무와 관련된 보유한 기술을 작성해주세요."
        />
        <MakePortfolioAddButton onClick={addTechnique}>
          추가하기
        </MakePortfolioAddButton>
        <BlackLine width={600} marginTop={10} checkColor="black" />
        {technique &&
          technique.map((item, index) => {
            return (
              <>
                <DetailJobTxt>기술 스택 {index + 1}</DetailJobTxt>
                <ResultPortfolioInput value={item.techName} readOnly />
                <ResultPortfolioTextArea value={item.content} readOnly />
                <DeletePortfolioButton onClick={() => deleteTechnique(index)}>
                  삭제하기
                </DeletePortfolioButton>
                <BlackLine width={600} marginTop={10} />
              </>
            );
          })}
        <MakePortFolioNextBtn onClick={onClickRegisterPortfolio}>
          등록하기
        </MakePortFolioNextBtn>
      </MakePortfolioInsideBox>
    </MakePortfolioBox>
  );
}

export default MakePortfolioSecondComponent;
