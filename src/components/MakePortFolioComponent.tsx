import React, { KeyboardEvent, useEffect } from "react";
import {
  MakePortfolioBox,
  MakePortfolioInsideBox,
  MakePortfolioHeadTxt,
  GrayExplainTxt,
  MakePortFolioNormalInput,
  DetailJobTxt,
  SnsSelectField,
  SnsInput,
  SnsBox,
  MakePortFolioNextBtn,
  LogoImg,
  UnderUserInput,
  BlackLine,
} from "./styled";
import logo from "../img/logo.png";
import { useState, useCallback } from "react";
import {
  snsArray,
  ErrorHook,
  ErrorArrayHook,
  keyEventUtil,
} from "../utils/array";
import { useNavigate } from "react-router-dom";

function MakePortFolioComponent() {
  const [detailJob, setDetailJob] = useState<string>("");
  const [blogTitle, setBlogTitle] = useState<string>("");
  const [snsField, setSnsField] = useState<string>(snsArray.sns[0]);
  const [snsTxt, setSnsTxt] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [certificate, setCertificate] = useState<string>("");
  const [foreign, setForeign] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");

  const [showDetailJob, setShowDetailJob] = useState<string>("");
  const [showBlogTitle, setShowBlogTitle] = useState<string>("");
  const [snsObjectArray, setSnsObjectArray] = useState<string[]>([]);
  const [showEducation, setShowEducation] = useState<string>("");
  const [showCertificate, setShowCertificate] = useState<string[]>([]);
  const [showForeign, setShowForeign] = useState<string[]>([]);
  const [showIntroduce, setShowIntroduce] = useState<string>("");

  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const onChangeDetailJob = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetailJob(event.currentTarget.value);
  };

  const onChangeBlogTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogTitle(event.currentTarget.value);
  };

  const onChangeSetSnsField = (event: React.FormEvent<HTMLSelectElement>) => {
    setSnsField(event.currentTarget.value);
  };

  const onChangeSetSnsTxt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSnsTxt(event.currentTarget.value);
  };

  const onChangeEducation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(event.currentTarget.value);
  };

  const onChangeCertificate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCertificate(event.currentTarget.value);
  };

  const onChangeForeign = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForeign(event.currentTarget.value);
  };

  const onChangeIntroduce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduce(event.currentTarget.value);
  };

  const onKeyPressCertificate = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        setShowCertificate([...showCertificate].concat(certificate));
      }
    },
    [certificate]
  );

  const onKeyPressForeign = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        setShowForeign([...showForeign].concat(foreign));
      }
    },
    [foreign]
  );

  const onKeyPressSns = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter") {
        setSnsObjectArray([...snsObjectArray].concat(`${snsField}-${snsTxt}`));
      }
    },
    [snsField, snsTxt]
  );

  const onClickDeleteDetailJob = (event: React.MouseEvent<HTMLElement>) => {
    setShowDetailJob("");
  };
  const onClickDeleteBlogTitle = (event: React.MouseEvent<HTMLElement>) => {
    setShowBlogTitle("");
  };
  const onClickDeleteSns = useCallback(
    (index: number) => {
      setSnsObjectArray(
        [...snsObjectArray].filter((item: string, i: number) => {
          if (i !== index) {
            return item;
          }
        })
      );
    },
    [snsObjectArray]
  );
  const onClickDeleteEducation = (event: React.MouseEvent<HTMLElement>) => {
    setShowEducation("");
  };

  const onClickDeleteCertificate = useCallback(
    (index: number) => {
      setShowCertificate(
        [...showCertificate].filter((item: string, i: number) => {
          if (i !== index) {
            return item;
          }
        })
      );
    },
    [showCertificate]
  );

  const onClickDeleteForeign = useCallback(
    (index: number) => {
      setShowForeign(
        [...showForeign].filter((item: string, i: number) => {
          if (i !== index) {
            return item;
          }
        })
      );
    },
    [showForeign]
  );

  const onClickDeleteIntroduce = (event: React.MouseEvent<HTMLElement>) => {
    setShowIntroduce("");
  };

  const onClickNextPage = useCallback(() => {
    console.log(
      showDetailJob,
      showBlogTitle,
      snsObjectArray,
      showEducation,
      showCertificate,
      showForeign,
      showIntroduce
    );

    navigate("/makePortfolioSecond", {
      state: {
        showDetailJob,
        showBlogTitle,
        snsObjectArray,
        showEducation,
        showCertificate,
        showForeign,
        showIntroduce,
      },
    });
  }, [
    showDetailJob,
    showBlogTitle,
    snsObjectArray,
    showEducation,
    showCertificate,
    showForeign,
    showIntroduce,
  ]);

  return (
    <MakePortfolioBox>
      <MakePortfolioInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <MakePortfolioHeadTxt>포트폴리오 등록</MakePortfolioHeadTxt>
        <GrayExplainTxt>필요한 기본 정보를 입력해주세요</GrayExplainTxt>
        <div>
          <DetailJobTxt>세부직업</DetailJobTxt>
          <MakePortFolioNormalInput
            value={detailJob}
            onChange={onChangeDetailJob}
            type="text"
            placeholder="세부 직업을 입력해주세요."
            onKeyPress={(e) =>
              keyEventUtil({
                setState: setShowDetailJob,
                state: detailJob,
                event: e,
              })
            }
          />
          {showDetailJob ? (
            <UnderUserInput>
              {showDetailJob}
              <button onClick={onClickDeleteDetailJob}>X</button>
            </UnderUserInput>
          ) : (
            ""
          )}
          <ErrorHook
            show={showDetailJob}
            state={detailJob}
            str="세부직업"
          ></ErrorHook>

          <DetailJobTxt>블로그 타이틀</DetailJobTxt>
          <MakePortFolioNormalInput
            value={blogTitle}
            onChange={onChangeBlogTitle}
            type="text"
            placeholder="블로그 명을 입력해주세요."
            onKeyPress={(e) =>
              keyEventUtil({
                setState: setShowBlogTitle,
                state: blogTitle,
                event: e,
              })
            }
          />
          {showBlogTitle ? (
            <UnderUserInput>
              {showBlogTitle}
              <button onClick={onClickDeleteBlogTitle}>X</button>
            </UnderUserInput>
          ) : (
            ""
          )}
          <ErrorHook
            show={showBlogTitle}
            state={blogTitle}
            str="블로그 타이틀"
          ></ErrorHook>

          <DetailJobTxt>본인 SNS 아이디</DetailJobTxt>
          <SnsBox>
            <SnsSelectField value={snsField} onChange={onChangeSetSnsField}>
              {snsArray.sns.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </SnsSelectField>
            <SnsInput
              type="text"
              placeholder="ID를 입력하세요."
              value={snsTxt}
              onChange={onChangeSetSnsTxt}
              onKeyPress={onKeyPressSns}
            />
          </SnsBox>
          <ErrorArrayHook show={snsObjectArray} state={snsTxt} str="SNS ID" />
          {snsObjectArray &&
            snsObjectArray.map((item, index) => {
              return (
                <UnderUserInput key={index}>
                  {item}
                  <button onClick={() => onClickDeleteSns(index)}>X</button>
                </UnderUserInput>
              );
            })}

          <DetailJobTxt>학력</DetailJobTxt>
          <MakePortFolioNormalInput
            value={education}
            onChange={onChangeEducation}
            type="text"
            placeholder="학력을 입력해주세요."
            onKeyPress={(e) =>
              keyEventUtil({
                setState: setShowEducation,
                state: education,
                event: e,
              })
            }
          />
          {showEducation && (
            <UnderUserInput>
              {showEducation}
              <button onClick={onClickDeleteEducation}>X</button>
            </UnderUserInput>
          )}
          <ErrorHook
            show={showEducation}
            state={education}
            str="학력"
          ></ErrorHook>

          <DetailJobTxt>자격증</DetailJobTxt>
          <MakePortFolioNormalInput
            value={certificate}
            onChange={onChangeCertificate}
            type="text"
            placeholder="자격증을 입력해주세요."
            onKeyPress={onKeyPressCertificate}
          />
          {showCertificate &&
            showCertificate.map((item, index) => {
              return (
                <UnderUserInput key={index}>
                  {item}
                  <button onClick={() => onClickDeleteCertificate(index)}>
                    X
                  </button>
                </UnderUserInput>
              );
            })}
          <ErrorArrayHook
            show={showCertificate}
            state={certificate}
            str="자격증"
          />
          <DetailJobTxt>외국어 능력</DetailJobTxt>
          <MakePortFolioNormalInput
            value={foreign}
            onChange={onChangeForeign}
            type="text"
            placeholder="외국어 능력을 입력해주세요."
            onKeyPress={onKeyPressForeign}
          />
          {showForeign &&
            showForeign.map((item, index) => {
              return (
                <UnderUserInput key={index}>
                  {item}
                  <button onClick={() => onClickDeleteForeign(index)}>X</button>
                </UnderUserInput>
              );
            })}
          <ErrorArrayHook show={showForeign} state={foreign} str="외국어" />
          <DetailJobTxt>자기소개</DetailJobTxt>
          <MakePortFolioNormalInput
            value={introduce}
            onChange={onChangeIntroduce}
            type="text"
            placeholder="자기 소개를 간단하게 입력해주세요."
            onKeyPress={(e) =>
              keyEventUtil({
                setState: setShowIntroduce,
                state: introduce,
                event: e,
              })
            }
          />
          {showIntroduce && (
            <UnderUserInput>
              {showIntroduce}
              <button onClick={onClickDeleteIntroduce}>X</button>
            </UnderUserInput>
          )}
          <ErrorHook
            show={showIntroduce}
            state={introduce}
            str="자기소개"
          ></ErrorHook>
          <MakePortFolioNextBtn onClick={onClickNextPage}>
            다음으로
          </MakePortFolioNextBtn>
        </div>
      </MakePortfolioInsideBox>
    </MakePortfolioBox>
  );
}

export default MakePortFolioComponent;
