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
