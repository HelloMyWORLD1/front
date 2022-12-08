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
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { editProfile } from "../slices/user/userSlice";

function MyPageForm() {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState<string>(user!.nickname);
  const [name, setName] = useState<string>(user!.username.split("#")[0]);
  const [birth, setBirth] = useState<string>(user!.birth);
  const [phone, setPhone] = useState<string>(user!.phone);
  const [email, setEmail] = useState<string>(user!.email.split("@")[0]);
  const [domain, setDomain] = useState<string>(user!.email.split("@")[1]);
  const [field, setField] = useState<string>(user!.field);

  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [birthError, setBirthError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [fieldError, setFieldError] = useState<boolean>(false);

  const selectList = [
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

  const onSubmit = useCallback(() => {
    if (
      nameError ||
      nicknameError ||
      fieldError ||
      birthError ||
      phoneError ||
      emailError
    ) {
      alert("유효성 검사를 확인해주세요.");
      return;
    }
    if (
      !nameError &&
      !nicknameError &&
      !fieldError &&
      !birthError &&
      !phoneError &&
      !emailError
    ) {
      dispatch(
        editProfile({
          email: `${email}@${domain}`,
          username: name,
          field: field,
          phone: phone,
          birth: birth,
          nickname: nickname,
        })
      )
        .then((res) => navigate("/"))
        .then((res) => window.location.reload());
    }
  }, [
    dispatch,
    name,
    birth,
    phone,
    email,
    domain,
    field,
    nickname,
    nameError,
    nicknameError,
    fieldError,
    birthError,
    phoneError,
    emailError,
  ]);

  return (
    <SignUpComponent>
      <SignUpInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpTxt>개인정보수정</SignUpTxt>
        <SignUpTxt2>회원님의 정보를 수정해주세요</SignUpTxt2>
        <div>
          <input type="hidden" />
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
          <SignUpBtn onClick={onSubmit}>개인정보수정</SignUpBtn>
        </div>
      </SignUpInsideBox>
    </SignUpComponent>
  );
}

export default MyPageForm;
