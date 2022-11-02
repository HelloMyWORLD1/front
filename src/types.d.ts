// types,interface 를 전역으로 지정

//회원 비동기처리 상태관리
interface UserInitialState {
  user: any;
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

//포트폴리오 비동기 처리 상태관리
interface PortFolioInitalState {
  //개인 포폴
  portFolio: null | object;
  //메인페이지|커뮤니티용 포폴
  portFolios: null | object;
  //개인 포폴 등록
  registerPortFolioLoading: boolean;
  registerPortFolioDone: boolean;
  registerPortFolioError: null | object;
  //개인 포폴 조회
  getPortFolioLoading: boolean;
  getPortFolioDone: boolean;
  getPortFolioError: null | object;
  //분야별(좋아요순) 포폴 조회
  getPortFolioLikeLoading: boolean;
  getPortFolioLikeDone: boolean;
  getPortFoiloLikeError: null | object;
  //분야별(최신순) 포폴 조회
  getPortFolioLatestLoading: boolean;
  getPortFolioLatestDone: boolean;
  getPortFolioLatestError: null | object;
  //포폴 팔로우하기
  followPortFolioLoading: boolean;
  followPortFolioDone: boolean;
  followPortFolioError: null | object;
  //포폴 팔로우 취소
  unFollowPortFolioLoading: boolean;
  unFollowPortFolioDone: boolean;
  unFollowPortFolioError: null | object;
}

//이미지 모듈 선언
declare module "*png" {
  const content: string;
  export default content;
}
declare module "*svg";
//폰트 모듈 선언
declare module "*woff";
