import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  EmailSignUpInput,
  FieldSignUpSelect,
  EmailSignUpSelect,
  SignUpNormalInput,
  SignUpBtn,
  CheckWarnTxt,
  SignUpComponent,
  SignUpTxt,
  SignUpTxt2,
  SignUpInsideBox,
  LogoImg,
  BlackLine,
  ExplainTxt,
} from "./styled";
import logo from "../img/logo.png";
import { useAppDispatch } from "../hooks";
import { logIn, signUp } from "../slices/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function SignUpForm() {
  const { user, signUpLoading, signUpDone, signUpError } = useSelector(
    (state: RootState) => state.user
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwCheck, setPwCheck] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [field, setField] = useState<string>("");

  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [birthError, setBirthError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [pwError, setPwError] = useState<boolean>(false);
  const [pwCheckError, setPwCheckError] = useState<boolean>(false);
  const [fieldError, setFieldError] = useState<boolean>(false);

  const selectList = [
    "도메인 선택",
    "@naver.com",
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
    "직접입력",
  ];
  const fieldList = [
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
  const gotoHome = () => {
    navigate("/");
  };
  const gotoProfile = () => {
    navigate("/signUp/profile");
  };

  const nameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const fieldHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setField(event.currentTarget.value);
  };

  const birthHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setBirth(event.currentTarget.value);
  };

  const phoneHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  };

  const emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const domainHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setDomain(event.currentTarget.value);
  };

  const pwHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };

  const pwCheckHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPwCheck(event.currentTarget.value);
  };

  const nicknameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };

  const nameBlur = useCallback(() => {
    const rgx = /^[가-힣]+$/;
    if (!rgx.test(name)) {
      return setNameError(true);
    }
    return setNameError(false);
  }, [name]);

  const nicknameBlur = useCallback(() => {
    const rgx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    if (!rgx.test(nickname)) {
      return setNicknameError(true);
    }
    return setNicknameError(false);
  }, [nickname]);

  const fieldBlur = useCallback(() => {
    if (field === "" || field === fieldList[0] || field === "직업 분야 선택") {
      return setFieldError(true);
    }
    return setFieldError(false);
  }, [field]);

  const birthBlur = useCallback(() => {
    const rgx = /^[0-9]+$/;
    if (birth.length !== 8) {
      return setBirthError(true);
    }
    if (!rgx.test(birth)) {
      return setBirthError(true);
    }
    return setBirthError(false);
  }, [birth]);

  const phoneBlur = useCallback(() => {
    const rgx = /^[0-9]+$/;
    if (phone.length !== 11) {
      return setPhoneError(true);
    }
    if (!rgx.test(phone)) {
      return setPhoneError(true);
    }
    return setPhoneError(false);
  }, [phone]);

  const emailBlur = useCallback(() => {
    const rgx = /^[a-z|A-Z|0-9]+$/;
    if (email.length === 0) {
      return setEmailError(true);
    }
    if (!rgx.test(email)) {
      return setEmailError(true);
    }
    return setEmailError(false);
  }, [email]);

  const pwBlur = useCallback(() => {
    const rgx = /[~!@#$%^&*()_+|<>?:{}|a-z|A-Z|0-9]/;
    if (pw.length < 8 || pw.length > 16) {
      return setPwError(true);
    }
    if (!rgx.test(pw)) {
      return setPwError(true);
    }
    return setPwError(false);
  }, [pw]);

  const pwCheckBlur = useCallback(() => {
    if (pw !== pwCheck) {
      return setPwCheckError(true);
    }
    return setPwCheckError(false);
  }, [pwCheck, pw]);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (
        nameError ||
        nicknameError ||
        fieldError ||
        birthError ||
        phoneError ||
        emailError ||
        pwError ||
        pwCheckError
      ) {
        alert("유효성 검사를 확인해주세요.");
      }

      if (
        !nameError &&
        !nicknameError &&
        !fieldError &&
        !birthError &&
        !phoneError &&
        !emailError &&
        !pwError &&
        !pwCheckError
      ) {
        dispatch(
          signUp({
            email: `${email}@${domain}`,
            password: pw,
            username: name,
            field: field,
            phone: phone,
            profileImage: "string",
            birth: birth,
            nickname: nickname,
          })
        );
      }
    },
    [
      dispatch,
      name,
      birth,
      phone,
      email,
      domain,
      pw,
      pwCheck,
      field,
      nickname,
      nameError,
      nicknameError,
      fieldError,
      birthError,
      phoneError,
      emailError,
      pwError,
      pwCheckError,
    ]
  );

  return (
    <SignUpComponent>
      <SignUpInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpTxt>회원가입하기</SignUpTxt>
        <SignUpTxt2>회원가입에 필요한 정보를 입력해주세요</SignUpTxt2>
        <form onSubmit={onSubmit}>
          <ExplainTxt>실명</ExplainTxt>
          <SignUpNormalInput
            value={name}
            onChange={nameHandler}
            onBlur={nameBlur}
            type="text"
            placeholder="본인 이름을 입력해주세요."
          />
          {nameError === true ? (
            <CheckWarnTxt>
              한글을 사용해 입력해주세요. (특수기호, 공백 사용 불가)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}

          <ExplainTxt>닉네임</ExplainTxt>
          <SignUpNormalInput
            value={nickname}
            onChange={nicknameHandler}
            type="text"
            onBlur={nicknameBlur}
            placeholder="닉네임 입력해주세요."
          />
          {nicknameError === true ? (
            <CheckWarnTxt>
              한글과 영어를 입력해주세요. (특수기호, 공백 사용 불가)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>분야 선택</ExplainTxt>
          <FieldSignUpSelect
            value={field}
            onChange={fieldHandler}
            onBlur={fieldBlur}
          >
            {fieldList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </FieldSignUpSelect>
          {fieldError === true ? (
            <CheckWarnTxt>분야를 선택해주세요.</CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>생년월일</ExplainTxt>
          <SignUpNormalInput
            value={birth}
            onChange={birthHandler}
            type="text"
            onBlur={birthBlur}
            placeholder="숫자 8자리를 입력해주세요  ex) 19001201"
          />
          {birthError === true ? (
            <CheckWarnTxt>
              숫자만 입력해주세요. (특수기호, 공백 사용 불가)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>휴대폰번호</ExplainTxt>
          <SignUpNormalInput
            value={phone}
            onChange={phoneHandler}
            type="text"
            onBlur={phoneBlur}
            placeholder="휴대전화번호 ‘-’를 제외하고 입력"
          />
          {phoneError === true ? (
            <CheckWarnTxt>
              숫자 11자리를 입력해주세요. (특수기호, 공백 사용 불가)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>이메일</ExplainTxt>
          <EmailSignUpInput
            value={email}
            onChange={emailHandler}
            type="text"
            onBlur={emailBlur}
            placeholder="이메일아이디"
          />
          <EmailSignUpSelect value={domain} onChange={domainHandler}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </EmailSignUpSelect>
          {emailError === true ? (
            <CheckWarnTxt>
              영문 대 소문자와 숫자를 사용하세요. (특수기호, 공백 사용 불가)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>비밀번호</ExplainTxt>
          <SignUpNormalInput
            value={pw}
            onChange={pwHandler}
            type="password"
            onBlur={pwBlur}
            placeholder="비밀번호(영문/숫자/특수문자 조합 8~20자)"
          />
          {pwError === true ? (
            <CheckWarnTxt>
              8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>비밀번호 확인</ExplainTxt>
          <SignUpNormalInput
            value={pwCheck}
            onChange={pwCheckHandler}
            type="password"
            onBlur={pwCheckBlur}
            placeholder="비밀번호를 다시 입력해주세요"
          />
          {pwCheckError === true ? (
            <CheckWarnTxt>비밀번호가 일치하지 않습니다.</CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <SignUpBtn>회원가입</SignUpBtn>
        </form>
      </SignUpInsideBox>
    </SignUpComponent>
  );
}

export default SignUpForm;
