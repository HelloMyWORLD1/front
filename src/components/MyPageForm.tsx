import React, { useCallback, useState } from "react";
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
import { fieldList, selectList } from "../utils/array";
import useMyInfoUpdate from "../useHooks/useMyInfoUpdate";

function MyPageForm() {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nickname, setNickname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [field, setField] = useState<string>("");

  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [birthError, setBirthError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
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

  const nicknameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };

  useMyInfoUpdate(
    setNickname,
    setName,
    setBirth,
    setPhone,
    setDomain,
    setEmail,
    setField
  );

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

  const onSubmit = useCallback(() => {
    if (
      nameError ||
      nicknameError ||
      fieldError ||
      birthError ||
      phoneError ||
      emailError
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
      {user && (
        <SignUpInsideBox>
          <LogoImg src={logo} onClick={gotoHome}></LogoImg>
          <BlackLine></BlackLine>
          <SignUpTxt>??????????????????</SignUpTxt>
          <SignUpTxt2>???????????? ????????? ??????????????????</SignUpTxt2>
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
            <SignUpBtn onClick={onSubmit}>??????????????????</SignUpBtn>
          </div>
        </SignUpInsideBox>
      )}
    </SignUpComponent>
  );
}

export default MyPageForm;
