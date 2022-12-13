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
