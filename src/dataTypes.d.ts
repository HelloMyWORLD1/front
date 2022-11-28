type signUpType = {
  email: string;
  password: string;
  username: string;
  field: string;
  phone: string;
  profileImage: string;
  birth: string;
  nickname: string;
};

type portFolioRegisterType = {
  detailJob: string;
  title: string;
  introduce: string;
  tech: { techName: string; content: string }[];
  education: string;
  sns: string[];
  certificate: string[];
  foreignLanguage: string[];
  project: { title: string; content: string }[];
  career: { year: string; title: string; content: string }[];
};

type CareerArrayType = {
  year: string;
  title: string;
  content: string;
};

//수정해야함 백엔드와 username => email 변경해야함
type logInType = {
  email: string;
  password: string;
};

type getPortFoiloLikeType = {
  field: string;
};

type getPortFolioType = {
  nickname: string;
};

type getPortFolioLatestType = {
  field: string;
  pageNum: number;
};
type portfolioProjectType = {
  title: string;
  content: string;
};

type techNique = {
  techName: string;
  content: string;
};

type portFoliosType = {
  nickname: string;
  detailJob: string;
  name: string;
  field: string;
  profileImage: string;
  title: string;
  introduce: string;
  followers: string[];
  followings: string[];
};

//blog 데이터 타입
type postBlogType = {
  title: string;
  content: string;
};
type getBlogDetailType = {
  blogId: number;
};
type getBlogAllType = {
  nickname: string;
  pageNum: number;
};
type searchBlogType = {
  nickname: string;
  keyword: string;
};
type deleteBlogType = {
  blogId: number;
};
type updateBlogType = {
  blogId: number;
  request: {
    title: string;
    content: string;
  };
};

//comment 타입(조회,등록,수정,삭제)
type getCommentType = {
  blogId: number;
};
type postCommentType = {
  blogId: number;
  request: {
    content: string;
  };
};
type updateCommentType = {
  blogId: number;
  commentId: number;
  request: {
    content: string;
  };
};
type deleteCommentType = {
  blogId: number;
  commentId: number;
};

type FollowType = {
  nickname: string;
};
