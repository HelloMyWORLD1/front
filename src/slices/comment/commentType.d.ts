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
