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
import { signUp } from "../slices/user/userSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectList, fieldList } from "../utils/array";
function SignUpForm() {
  const { signUpDone } = useSelector((state: RootState) => state.user);

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
    const rgx = /^[???-???]+$/;
    if (!rgx.test(name)) {
      return setNameError(true);
    }
    return setNameError(false);
  }, [name]);

  const nicknameBlur = useCallback(() => {
    const rgx = /^[???-???|???-???|a-z|A-Z|0-9|]+$/;
    if (!rgx.test(nickname)) {
      return setNicknameError(true);
    }
    return setNicknameError(false);
  }, [nickname]);

  const fieldBlur = useCallback(() => {
    if (field === "" || field === fieldList[0] || field === "?????? ?????? ??????") {
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

  const onSubmit = useCallback(() => {
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
      alert("????????? ????????? ??????????????????.");
      return;
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
  }, [
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
  ]);

  useEffect(() => {
    if (signUpDone === true) {
      navigate("/login");
    }
  }, [signUpDone]);

  return (
    <SignUpComponent>
      <SignUpInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpTxt>??????????????????</SignUpTxt>
        <SignUpTxt2>??????????????? ????????? ????????? ??????????????????</SignUpTxt2>
        <div>
          <input type="hidden" />
          <ExplainTxt>??????</ExplainTxt>
          <SignUpNormalInput
            value={name}
            onChange={nameHandler}
            onBlur={nameBlur}
            type="text"
            placeholder="?????? ????????? ??????????????????."
          />
          {nameError === true ? (
            <CheckWarnTxt>
              ????????? ????????? ??????????????????. (????????????, ?????? ?????? ??????)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}

          <ExplainTxt>?????????</ExplainTxt>
          <SignUpNormalInput
            value={nickname}
            onChange={nicknameHandler}
            type="text"
            onBlur={nicknameBlur}
            placeholder="????????? ??????????????????."
          />
          {nicknameError === true ? (
            <CheckWarnTxt>
              ????????? ????????? ??????????????????. (????????????, ?????? ?????? ??????)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>?????? ??????</ExplainTxt>
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
            <CheckWarnTxt>????????? ??????????????????.</CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>????????????</ExplainTxt>
          <SignUpNormalInput
            value={birth}
            onChange={birthHandler}
            type="text"
            onBlur={birthBlur}
            placeholder="?????? 8????????? ??????????????????  ex) 19001201"
          />
          {birthError === true ? (
            <CheckWarnTxt>
              ????????? ??????????????????. (????????????, ?????? ?????? ??????)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>???????????????</ExplainTxt>
          <SignUpNormalInput
            value={phone}
            onChange={phoneHandler}
            type="text"
            onBlur={phoneBlur}
            placeholder="?????????????????? ???-?????? ???????????? ??????"
          />
          {phoneError === true ? (
            <CheckWarnTxt>
              ?????? 11????????? ??????????????????. (????????????, ?????? ?????? ??????)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>?????????</ExplainTxt>
          <EmailSignUpInput
            value={email}
            onChange={emailHandler}
            type="text"
            onBlur={emailBlur}
            placeholder="??????????????????"
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
              ?????? ??? ???????????? ????????? ???????????????. (????????????, ?????? ?????? ??????)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>????????????</ExplainTxt>
          <SignUpNormalInput
            value={pw}
            onChange={pwHandler}
            type="password"
            onBlur={pwBlur}
            placeholder="????????????(??????/??????/???????????? ?????? 8~20???)"
          />
          {pwError === true ? (
            <CheckWarnTxt>
              8~16??? ?????? ??? ?????????, ??????, ??????????????? ???????????????.
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>???????????? ??????</ExplainTxt>
          <SignUpNormalInput
            value={pwCheck}
            onChange={pwCheckHandler}
            type="password"
            onBlur={pwCheckBlur}
            placeholder="??????????????? ?????? ??????????????????"
          />
          {pwCheckError === true ? (
            <CheckWarnTxt>??????????????? ???????????? ????????????.</CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <SignUpBtn onClick={onSubmit}>????????????</SignUpBtn>
        </div>
      </SignUpInsideBox>
    </SignUpComponent>
  );
}

export default SignUpForm;
