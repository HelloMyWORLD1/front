// types,interface 를 전역으로 지정

//회원 비동기처리 상태관리
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

//포트폴리오 비동기 처리 상태관리
interface PortFolioInitalState {
  //개인 포폴
  portFolio?: portFolioType;
  portFolioFieldLength: number;
  //메인페이지|커뮤니티용 포폴
  portFolios?: portFoliosType[];
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

interface BlogInitialState {
  blogs: any; // 사람의 전체 블로그(페이지네이션5개)를 받아올 변수
  blog: any; // 블로그의 게시글 하나를 받아올 변수
  //게시글 등록
  registerBlogLoading: boolean;
  registerBlogDone: boolean;
  registerBlogError: null | object;
  //게시글 삭제
  deleteBlogLoading: boolean;
  deleteBlogDone: boolean;
  deleteBlogError: null | object;
  //게시글 수정
  updateBlogLoading: boolean;
  updateBlogDone: boolean;
  updateBlogError: null | object;
  //단일 게시글(blog) 조회
  inquireBlogLoading: boolean;
  inquireBlogDone: boolean;
  inquireBlogError: null | object;
  //게시글 전체 조회(페이지네이션 5개씩)
  inquireBlogsLoading: boolean;
  inquireBlogsDone: boolean;
  inquireBlogsError: null | object;
  //전체 게시글에서 검색
  searchBlogLoading: boolean;
  searchBlogDone: boolean;
  searchBlogError: null | object;
}

//댓글 비동기 처리 관리
interface CommentInitialState {
  comment: any;
  comments: any;
  //댓글 등록
  registerCommentLoading: boolean;
  registerCommentDone: boolean;
  registerCommentError: null | object;
  //댓글 수정
  updateCommentLoading: boolean;
  updateCommentDone: boolean;
  updateCommentError: null | object;
  //댓글 삭제
  deleteCommentLoading: boolean;
  deleteCommentDone: boolean;
  deleteCommentError: null | object;
  //댓글 조회
  getCommentLoading: boolean;
  getCommentDone: boolean;
  getCommentError: null | object;
}

//이미지 모듈 선언
declare module "*png" {
  const content: string;
  export default content;
}
declare module "*svg";
//폰트 모듈 선언
declare module "*woff";
