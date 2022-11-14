import React, { useState, useCallback, useEffect, KeyboardEvent } from "react";
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
} from "./styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import logo from "../img/logo.png";
import { onKeyUpYearValidate } from "../validate/validate";

function MakePortfolioSecondComponent() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [year, setYear] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [work, setWork] = useState<string>("");

  const [showCareer, setShowCareer] = useState<CareerArrayType[]>([]);

  const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");
    if (value !== onlyNumber) {
      alert("[Error] : 숫자만 입력가능합니다.");
    }
    setYear(onlyNumber);
  };

  const handleCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.currentTarget.value);
  };

  const handleWork = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWork(event.currentTarget.value);
  };

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

  const gotoHome = () => {
    navigate("/");
  };

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
      </MakePortfolioInsideBox>
    </MakePortfolioBox>
  );
}

export default MakePortfolioSecondComponent;
