import React, { KeyboardEvent } from "react";
import { CheckWarnTxt } from "../components/styled";

export const snsArray = {
  sns: ["instagram", "facebook"],
};
//{!showEducation && education && (
//  <CheckWarnTxt>학력 입력 후 Enter을 눌러 추가하세요.</CheckWarnTxt>
//  )}
export const ErrorHook = (props: {
  show: string;
  state: string;
  str: string;
}) => {
  return (
    <div>
      {!props.show && props.state && (
        <CheckWarnTxt>
          {props.str} 입력 후 Enter을 눌러 추가하세요.
        </CheckWarnTxt>
      )}
    </div>
  );
};

export const ErrorArrayHook = (props: {
  show: string[];
  state: string;
  str: string;
}) => {
  return (
    <div>
      {Array.isArray(props.show) && props.show.length === 0 && props.state && (
        <CheckWarnTxt>
          {props.str} 입력 후 Enter을 눌러 추가하세요.
        </CheckWarnTxt>
      )}
    </div>
  );
};

interface KeyboardProps {
  setState: (props: string) => void;
  state: string;
  event: KeyboardEvent<HTMLElement>;
}

export const keyEventUtil = (props: KeyboardProps): void => {
  const target = props.event.key;
  if (target === "Enter") {
    props.setState(props.state);
  }
};

export const selectList = [
  "도메인 선택",
  "naver.com",
  "hanmail.net",
  "daum.net",
  "nate.com",
  "gmail.com",
  "hotmail.com",
  "lycos.co.kr",
  "empal.com",
  "cyworld.com",
  "yahoo.com",
  "paran.com",
  "dreamwiz.com",
];
export const fieldList = [
  "직업 분야 선택",
  "개발",
  "경영",
  "운영",
  "데이터",
  "디자인",
  "마케팅",
  "회계",
  "HR",
];
