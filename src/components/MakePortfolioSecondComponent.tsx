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
} from "../slices/portFolio/portFolioSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import logo from "../img/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function MakePortfolioSecondComponent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { registerPortFolioLoading } = useSelector(
    (state: RootState) => state.portFolio
  );

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
        <MakePortfolioHeadTxt>??????????????? ??????</MakePortfolioHeadTxt>
        <GrayExplainTxt>????????? ?????? ????????? ??????????????????</GrayExplainTxt>
        <DetailJobTxt>???????????????</DetailJobTxt>
        <CareerInputBox>
          <CareerInput placeholder="??????" onChange={handleYear} value={year} />
          <CareerInput placeholder="?????????" onChange={handleCompany} />
          <CareerInput
            placeholder="????????????"
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
        <DetailJobTxt>???????????? ??????</DetailJobTxt>
        <MakePortFolioNormalInput
          value={title}
          onChange={handleTitle}
          placeholder="??????"
        />
        <TextAreaStyled
          value={content}
          onChange={handleContent}
          placeholder="???????????? ??????????????? ?????? ????????? ????????? ???????????? ?????? ????????? ??????????????????."
        />
        <MakePortfolioAddButton onClick={addProject}>
          ????????????
        </MakePortfolioAddButton>
        <BlackLine width={600} marginTop={10} checkColor="black" />
        {project &&
          project.map((item, index) => {
            return (
              <>
                <DetailJobTxt>???????????? {index + 1}</DetailJobTxt>
                <ResultPortfolioInput value={item.title} readOnly />
                <ResultPortfolioTextArea value={item.content} readOnly />
                <DeletePortfolioButton onClick={() => deleteProject(index)}>
                  ????????????
                </DeletePortfolioButton>
                <BlackLine width={600} marginTop={10} />
              </>
            );
          })}
        <DetailJobTxt>?????? ??????</DetailJobTxt>
        <MakePortFolioNormalInput
          value={techName}
          onChange={handleTechName}
          placeholder="??????"
        />
        <TextAreaStyled
          value={techContent}
          onChange={handleTechContent}
          placeholder="?????? ????????? ????????? ????????? ????????? ??????????????????."
        />
        <MakePortfolioAddButton onClick={addTechnique}>
          ????????????
        </MakePortfolioAddButton>
        <BlackLine width={600} marginTop={10} checkColor="black" />
        {technique &&
          technique.map((item, index) => {
            return (
              <>
                <DetailJobTxt>?????? ?????? {index + 1}</DetailJobTxt>
                <ResultPortfolioInput value={item.techName} readOnly />
                <ResultPortfolioTextArea value={item.content} readOnly />
                <DeletePortfolioButton onClick={() => deleteTechnique(index)}>
                  ????????????
                </DeletePortfolioButton>
                <BlackLine width={600} marginTop={10} />
              </>
            );
          })}
        <MakePortFolioNextBtn onClick={onClickRegisterPortfolio}>
          ????????????
        </MakePortFolioNextBtn>
      </MakePortfolioInsideBox>
    </MakePortfolioBox>
  );
}

export default MakePortfolioSecondComponent;
