interface UserInitialState {
  user?: userType;
  //로그인
  logInLoading: boolean;
  logInDone: boolean;
  logInError: null | object;
  //로그아웃
  logOutLoading: boolean;
  logOutDone: boolean;
  logOutError: null | object;
  //회원가입
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: null | object;
  findPasswordLoading: boolean;
  findPasswordDone: boolean;
  findPasswordError: null | object;
  inquireMyInfoLoading: boolean;
  inquireMyInfoDone: boolean;
  inquireMyInfoError: null | object;
  reviseMyInfoLoading: boolean;
  reviseMyInfoDone: boolean;
  reviseMyInfoError: null | object;
  deleteAccountLoading: boolean;
  deleteAccountDone: boolean;
  deleteAccountError: null | object;
}
